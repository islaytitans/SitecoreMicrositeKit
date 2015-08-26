using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Links;
using Sitecore.Rules.ConditionalRenderings;
using Sitecore.Shell.Applications.ContentEditor;
using Text = Sitecore.Web.UI.WebControls.Text;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class Footer : MicrositeSublayoutBase
    {
        protected string Separator = " | ";


        protected IEnumerable<Item> InternalFooterLinkDataSource
        {
            get
            {
                var mulitlistField = (MultilistField)Datasource.Fields[Enumerators.SitecoreConfig.Fields.Global.GlobalInternalLinks];

                return mulitlistField.GetItems();
            }

        }

        protected IEnumerable<Item> ExternalFooterLinkDataSource
        {
            get
            {
                var mulitlistField = (MultilistField)Datasource.Fields[Enumerators.SitecoreConfig.Fields.Global.GlobalInternalLinks];

                return mulitlistField.GetItems();
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            SetDataSourceToFooterItem();
            SetUpLabels();
            if (!Page.IsPostBack)
            {
                SetRepeater();
                phInternalLinks.Visible = !IsLoginPage;
            }
        }

        private void SetDataSourceToFooterItem()
        {
            if (Datasource == null)
            {
                string footerGuid = Nodes.MicrositeLocalSettingsItem[Enumerators.SitecoreConfig.Fields.Global.FooterItem];

                if (!string.IsNullOrEmpty(footerGuid))
                {
                    Datasource = Sitecore.Context.Database.GetItem(footerGuid);
                }
            }
        }

        private void SetUpLabels()
        {
            sciFooterImage.Item = Datasource;
            sctCopyRight.Item = Datasource;
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