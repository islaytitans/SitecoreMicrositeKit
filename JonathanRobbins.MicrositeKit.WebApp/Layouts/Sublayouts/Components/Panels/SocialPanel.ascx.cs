using System;
using System.Collections.Generic;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Extensions;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Panels
{
    public partial class SocialPanel : MicrositeSublayoutBase
    {
        private IEnumerable<Item> _socialLinksDataSource;
        protected IEnumerable<Item> SocialLinksDataSource
        {
            get
            {
                if (_socialLinksDataSource == null)
                {
                    _socialLinksDataSource =
                        Datasource.Fields[Enumerators.SitecoreConfig.Fields.Global.SocialNetworkLinks].GetItems();
                }
                return _socialLinksDataSource;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            SetDataSourceToFooterItem();
            if (!Page.IsPostBack)
            {
                SetUpSocialLinks();
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

        private void SetUpSocialLinks()
        {
            rptSocialLinks.DataSource = SocialLinksDataSource;
            rptSocialLinks.DataBind();
        }

        protected void rptSocialLinks_OnItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            if (e.Item.ItemType != ListItemType.Item && e.Item.ItemType != ListItemType.AlternatingItem)
                return;

            var item = e.Item.DataItem as Item;

            if (item != null)
            {
                var hlSocial = (HyperLink)e.Item.FindControl("hlSocial");

                if (hlSocial != null)
                {
                    LinkField linkField = item.Fields["Link"];
                    hlSocial.NavigateUrl = linkField.Url;
                    hlSocial.Text = linkField.Text;
                }
            }
        }
    }
}