using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Extensions;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class CommsPanel : MicrositeSublayoutBase
    {
        protected IEnumerable<Item> SocialLinksDataSource
        {
            get
            {
                return Nodes.MicrositeLocalSettingsItem.Fields["Social network links"].GetItems();
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                SetUpSocialLinks();
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
                }
            }
        }
    }
}