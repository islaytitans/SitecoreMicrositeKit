using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.CMS.Search;
using JonathanRobbins.MicrositeKit.Entities.Search;
using JonathanRobbins.MicrositeKit.Enumerators.Search;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Search;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Links;
using Sitecore.Web.UI.WebControls;
using StructureMap;
using Image = Sitecore.Web.UI.WebControls.Image;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Listings
{
    public partial class BlogListing : MicrositeSublayoutBase
    {
        private IEnumerable<Item> _blogs;
        public IEnumerable<Item> Blogs
        {
            get
            {
                if (_blogs == null)
                {
                    //TODO dedicated indexes
                    string indexName = Sitecore.Context.Database.Name.Equals("web",
                        StringComparison.InvariantCultureIgnoreCase)
                        ? Indexes.Web
                        : Indexes.Master;

                    var searchManager =
                        new SearchManager(new ContentSearch(indexName));

                    var sitecoreSearchParameters = CreateBlogsSearchParameters();

                    var searchResults = searchManager.Search(sitecoreSearchParameters);

                    var itemComparer = new ItemComparer();
                    var resultsCollection = searchResults.Hits.Select(h => h.Document.GetItem()).ToList();
                    resultsCollection.Sort(itemComparer.CompareDate);
                    resultsCollection.Reverse();

                    _blogs = resultsCollection;
                }

                return _blogs;
            }
        }

        public BlogListing()
        {
            ObjectFactory.Initialize(x =>
            {
                x.For<ISearchUtility>().Use<SearchUtility>();
            });
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                BindBlogs();
            }
        }

        private void BindBlogs()
        {
            lvBlogs.DataSource = Blogs;
            lvBlogs.DataBind();
        }

        private SitecoreSearchParameters CreateBlogsSearchParameters()
        {
            var searchTemplates = new List<ID> { Templates.MicroSiteBlogListingId };

            return new SitecoreSearchParameters()
            {
                Templates = searchTemplates
            };
        }

        protected void lvBlogs_OnItemDataBound(object sender, ListViewItemEventArgs e)
        {
            if (e.Item.ItemType == ListViewItemType.DataItem)
            {
                var item = e.Item.DataItem as Item;
                if (item == null)
                    return;

                var sciImage = (Image) e.Item.FindControl("sciImage");
                var phComments = (PlaceHolder) e.Item.FindControl("phComments");
                var litCommentCount = (Literal) e.Item.FindControl("litCommentCount");
                var hlViewBlog = (HyperLink) e.Item.FindControl("hlViewBlog");
                var hlImage = (HyperLink) e.Item.FindControl("hlImage");
                var hlTitle = (HyperLink) e.Item.FindControl("hlTitle");

                if (hlViewBlog != null)
                {
                    Item destinationItem = Nodes.MicrositeHomeItem.Axes.GetDescendants()
                        .FirstOrDefault(
                            x =>
                                x.TemplateID ==
                                Templates.MicroSiteBlogDetailsId);

                    string url = LinkManager.GetItemUrl(destinationItem) + "?" + QueryStrings.Guid + "=" +
                                 item.ID.ToString();

                    if (Datasource != null) hlViewBlog.Text = Datasource[Enumerators.SitecoreConfig.Fields.Global.ViewBlog];
                    hlViewBlog.NavigateUrl = url;
                    hlImage.NavigateUrl = url;
                    hlTitle.NavigateUrl = url;
                }
                if (sciImage != null)
                {
                    var imageField = (Sitecore.Data.Fields.ImageField) item.Fields[Enumerators.SitecoreConfig.Fields.Global.Image];

                    if (imageField != null && imageField.MediaItem != null)
                    {
                        sciImage.Item = item;
                        sciImage.DataBind();
                    }
                }
                if (phComments != null && litCommentCount != null)
                {
                    int count;
                    bool success = Int32.TryParse(item[Enumerators.SitecoreConfig.Fields.Global.CommentCounter],
                        out count);

                    if (success && count > 0)
                    {
                        litCommentCount.Text = count.ToString();
                    }
                    else
                    {
                        phComments.Visible = false;
                    }

                }
            }
        }
    }
}