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

            Item parentItem;
            Item destinationItem = null;
            string url = string.Empty;

            if (ViewItem.TemplateID == Templates.MicroSiteEventListingId)
            {
                phComments.Visible = false;

                parentItem =
                    Nodes.MicrositeHomeItem.GetChildren()
                        .FirstOrDefault(i => i.TemplateID.Equals(Templates.MicroSiteNewsListingId));

                if (parentItem != null)
                {
                    destinationItem = parentItem.GetChildren()
                        .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteNewsDetailsId);
                }
            }
            if (ViewItem.TemplateID == Templates.MicroSiteBlogListingId)
            {
                phComments.Visible = true;
                litCommentCount.Text = CommentCount != null ? CommentCount.ToString() : RetrieveCommentCount(ViewItem).ToString();

                parentItem =
                    Nodes.MicrositeHomeItem.GetChildren()
                        .FirstOrDefault(i => i.TemplateID.Equals(Templates.MicroSiteBlogListingId));

                if (parentItem != null)
                {
                    destinationItem = parentItem.GetChildren()
                        .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteBlogDetailsId);
                }
            }
            if (ViewItem.TemplateID == Templates.MicroSiteNewsListingId)
            {
                phComments.Visible = false;
                parentItem =
                    Nodes.MicrositeHomeItem.GetChildren()
                        .FirstOrDefault(i => i.TemplateID.Equals(Templates.MicroSiteEventListingId));

                if (parentItem != null)
                {
                    destinationItem = parentItem.GetChildren()
                        .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteEventDetailsId);
                }
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