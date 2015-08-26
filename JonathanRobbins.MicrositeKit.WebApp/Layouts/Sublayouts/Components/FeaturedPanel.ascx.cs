using System;
using System.Web.UI;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class FeaturedPanel : MicrositeSublayoutBase
    {
        private Item _featuredItem = null;
        public Item FeaturedItem
        {
            get
            {
                if (_featuredItem != null)
                    return _featuredItem;

                if (Datasource == null)
                    throw new Exception("Datasource for Feature Panel has not been set - please select one");

                _featuredItem = Datasource;
                return _featuredItem;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                PopulateFields();
            }
        }

        private void PopulateFields()
        {
            if (FeaturedItem.TemplateID == Microsite.MicroSiteNewsTemplateGuid || FeaturedItem.TemplateID == Microsite.MicroSiteBlogTemplateGuid)
            {
                scdDate.Field = "Date";
            }
            else if (FeaturedItem.TemplateID == Microsite.MicroSiteEventTemplateGuid)
            {
                scdDate.Field = "Start date";
            }

            sciImage.Item = FeaturedItem;
            sctTitle.Item = FeaturedItem;
            scdDate.Item = FeaturedItem;
            sctShortText.Item = FeaturedItem;

            SetUpLinks();
        }

        private void SetUpLinks()
        {
            hlReadMore.Text = MicrositeDictionaryItem["Read more"];

            string url = string.Empty;

            if (FeaturedItem.TemplateID == Microsite.MicroSiteNewsTemplateGuid)
            {
                Item destinationItem = SiteHomeItem.Axes.GetDescendants()
                                   .FirstOrDefault(x => x.TemplateID == Microsite.MicroSiteNewsDetailsTemplateId);
                url = string.Format("{0}?{1}={2}", LinkManager.GetItemUrl(destinationItem), QueryStringNames.Guid, FeaturedItem.ID.ToString());
            }
            else if (FeaturedItem.TemplateID == Microsite.MicroSiteEventTemplateGuid)
            {
                Item destinationItem = SiteHomeItem.Axes.GetDescendants()
                                                           .FirstOrDefault(x => x.TemplateID == Microsite.MicroSiteEventDetailsTemplateId);
                url = string.Format("{0}?{1}={2}", LinkManager.GetItemUrl(destinationItem), QueryStringNames.Guid, FeaturedItem.ID.ToString());
            }
            else if (FeaturedItem.TemplateID == Microsite.MicroSiteBlogTemplateGuid)
            {
                Item destinationItem = SiteHomeItem.Axes.GetDescendants()
                                                   .FirstOrDefault(
                                                       x =>
                                                       x.TemplateID ==
                                                       Microsite.MicroSiteBlogDetailsTemplateId);
                url = string.Format("{0}?{1}={2}", LinkManager.GetItemUrl(destinationItem), QueryStringNames.Guid,
                                    FeaturedItem.ID.ToString());
            }
            else
            {
                url = LinkManager.GetItemUrl(FeaturedItem);
            }

            hlReadMore.NavigateUrl = url;
            hlImage.NavigateUrl = url;
            hlTitle.NavigateUrl = url;
        }
    }
}