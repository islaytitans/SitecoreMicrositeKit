using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Web.UI.WebControls.Presentation;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class Footer : MicrositeControlBase
    {
        protected string Separator = " | ";

        protected void Page_Load(object sender, EventArgs e)
        {
            SetUpLabels();
            if (!Page.IsPostBack)
            {
                SetRepeater();
                phInternalLinks.Visible = !IsLoginPage;
            }
        }

        private void SetUpLabels()
        {
            sciFooterImage.Item = SiteConfigItem;
            sctCopyRight.Item = SiteConfigItem;
        }

        private void SetRepeater()
        {
            rptInternalFooterLinks.DataSource = InternalFooterLinkDataSource;
            rptInternalFooterLinks.DataBind();

            rptExternalFooterLinks.DataSource = ExternalFooterLinkDataSource;
            rptExternalFooterLinks.DataBind();
        }

        protected IEnumerable<Item> InternalFooterLinkDataSource
        {
            get { return Business.SitecoreHelp.Utilities.GetItemsFromPipeSeparatedList(SiteConfigItem, "Global internal links"); }

        }

        protected IEnumerable<Item> ExternalFooterLinkDataSource
        {
            get { return Business.SitecoreHelp.Utilities.GetItemsFromPipeSeparatedList(SiteConfigItem, "Global external links"); }
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