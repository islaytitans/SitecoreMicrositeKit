using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Links;
using Text = Sitecore.Web.UI.WebControls.Text;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class Footer : MicrositeSublayoutBase
    {
        protected string Separator = " | ";

        private IEnumerable<Item> _internalFooterLinkDataSource;
        protected IEnumerable<Item> InternalFooterLinkDataSource
        {
            get
            {
                if (_internalFooterLinkDataSource == null 
                    && Datasource != null
                    && !string.IsNullOrEmpty(Datasource[Enumerators.SitecoreConfig.Fields.Global.GlobalInternalLinks]))
                {
                    var mulitlistField = (MultilistField) Datasource.Fields[Enumerators.SitecoreConfig.Fields.Global.GlobalInternalLinks];

                    _internalFooterLinkDataSource = mulitlistField.GetItems();
                }

                return _internalFooterLinkDataSource;
            }

        }

        private IEnumerable<Item> _externalFooterLinkDataSource;
        protected IEnumerable<Item> ExternalFooterLinkDataSource
        {
            get
            {
                if (_externalFooterLinkDataSource == null 
                    && Datasource != null
                    && !string.IsNullOrEmpty(Datasource[Enumerators.SitecoreConfig.Fields.Global.GlobalExternalLinks]))
                {
                    var mulitlistField = (MultilistField)Datasource.Fields[Enumerators.SitecoreConfig.Fields.Global.GlobalExternalLinks];

                    _externalFooterLinkDataSource = mulitlistField.GetItems();
                }

                return _externalFooterLinkDataSource;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            SetDataSourceToFooterItem();
            BindSitecoreControls();
            if (!Page.IsPostBack)
            {
                SetRepeater();
                phInternalLinks.Visible = !IsLoginPage;
            }
        }

        private void SetDataSourceToFooterItem()
        {
            if (Datasource == null || Datasource == Sitecore.Context.Item)
            {
                string footerGuid = Nodes.MicrositeLocalSettingsItem[Enumerators.SitecoreConfig.Fields.Global.FooterItem];

                if (!string.IsNullOrEmpty(footerGuid))
                {
                    Datasource = Sitecore.Context.Database.GetItem(footerGuid);
                }
            }
        }

        private void SetRepeater()
        {
            rptInternalFooterLinks.DataSource = InternalFooterLinkDataSource;
            rptInternalFooterLinks.DataBind();

            rptExternalFooterLinks.DataSource = ExternalFooterLinkDataSource;
            rptExternalFooterLinks.DataBind();
        }

        protected void rptFooterLinks_OnItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            if (e.Item.ItemType != ListItemType.Item && e.Item.ItemType != ListItemType.AlternatingItem)
                return;

            var item = (Item)e.Item.DataItem;
            var hlFooterLink = (HyperLink)e.Item.FindControl("hlFooterLink");
            var sctFooterLink = (Text)e.Item.FindControl("sctFooterLink");
            var litSeparator = (Literal)e.Item.FindControl("litSeparator");

            if (item != null)
            {
                if (hlFooterLink != null)
                {
                    hlFooterLink.NavigateUrl = LinkManager.GetItemUrl(item);
                }
                if (sctFooterLink != null)
                {
                    sctFooterLink.Item = item;
                }
                if (litSeparator != null)
                {
                    litSeparator.Text = Separator;

                    List<Item> dataSource;

                    if (((Repeater)sender).ID == rptInternalFooterLinks.ID)
                    {
                        dataSource = InternalFooterLinkDataSource.ToList();
                    }
                    else
                    {
                        dataSource = ExternalFooterLinkDataSource.ToList();
                    }

                    if (e.Item.ItemIndex == (dataSource.Count - 1))
                    {
                        litSeparator.Visible = false;
                    }
                }
            }
        }
    }
}