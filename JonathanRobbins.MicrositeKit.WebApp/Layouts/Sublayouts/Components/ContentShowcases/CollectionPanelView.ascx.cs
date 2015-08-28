using System;
using System.Linq;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.ContentShowcases
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
            if (ViewItem.TemplateID == Templates.MicroSiteEventListingId)
            {
                phComments.Visible = false;
                destinationItem = Nodes.MicrositeHomeItem.Axes.GetDescendants()
                                              .FirstOrDefault(
                                                  x => x.TemplateID == Templates.MicroSiteEventDetailsId);
            }
            if (ViewItem.TemplateID == Templates.MicroSiteBlogListingId)
            {
                phComments.Visible = true;
                destinationItem = Nodes.MicrositeHomeItem.Axes.GetDescendants()
                                              .FirstOrDefault(
                                                  x =>
                                                  x.TemplateID == Templates.MicroSiteBlogDetailsId);
                litCommentCount.Text = CommentCount != null ? CommentCount.ToString() : RetrieveCommentCount(ViewItem).ToString();
            }
            if (ViewItem.TemplateID == Templates.MicroSiteNewsListingId)
            {
                phComments.Visible = false;
                destinationItem = Nodes.MicrositeHomeItem.Axes.GetDescendants()
                                              .FirstOrDefault(
                                                  x => x.TemplateID == Templates.MicroSiteNewsDetailsId);
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