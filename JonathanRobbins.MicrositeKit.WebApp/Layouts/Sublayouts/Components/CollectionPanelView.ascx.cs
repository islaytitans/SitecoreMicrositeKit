using System;
using System.Web.UI;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;
using Sitecore.Links;

//using scSearchContrib.Searcher.Parameters;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class CollectionPanelView : MicrositeSublayoutBase
    {
        private Item _viewitem;
        public Item ViewItem
        {
            get { return _viewitem; }
            set { _viewitem = value; }
        }

        private int? _commentCount;
        public int? CommentCount
        {
            get { return _commentCount; }
            set { _commentCount = value; }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                SetViews();
            }
        }

        private void SetViews()
        {
            if (ViewItem == null)
                return;

            Item destinationItem = null;
            if (ViewItem.TemplateID == Microsite.MicroSiteEventTemplateGuid)
            {
                phComments.Visible = false;
                destinationItem = SiteHomeItem.Axes.GetDescendants()
                                              .FirstOrDefault(
                                                  x => x.TemplateID == Microsite.MicroSiteEventDetailsTemplateId);
            }
            if (ViewItem.TemplateID == Microsite.MicroSiteBlogTemplateGuid)
            {
                phComments.Visible = true;
                destinationItem = SiteHomeItem.Axes.GetDescendants()
                                              .FirstOrDefault(
                                                  x =>
                                                  x.TemplateID == Microsite.MicroSiteBlogDetailsTemplateId);
                litCommentCount.Text = CommentCount != null ? CommentCount.ToString() : RetrieveCommentCount(ViewItem).ToString();
            }
            if (ViewItem.TemplateID == Microsite.MicroSiteNewsTemplateGuid)
            {
                phComments.Visible = false;
                destinationItem = SiteHomeItem.Axes.GetDescendants()
                                              .FirstOrDefault(
                                                  x => x.TemplateID == Microsite.MicroSiteNewsDetailsTemplateId);
            }

            if (destinationItem == null)
                return;

            hlViewMore.NavigateUrl = LinkManager.GetItemUrl(destinationItem) + "?" + QueryStrings.Guid + "=" +
                                     ViewItem.ID;
        }

        private int? RetrieveCommentCount(Item item)
        {
            int count;
            bool success = Int32.TryParse(item[Enumerators.SitecoreConfig.Fields.Global.CommentCounter], out count);

            if (success && count > 0)
            {
                return count;
            }
            else
            {
                return 0;
            }
        }
    }
}