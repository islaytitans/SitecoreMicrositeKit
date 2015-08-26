using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Links;
using Sitecore.Web.UI.WebControls;
using Image = Sitecore.Web.UI.WebControls.Image;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class BlogListing : MicrositeSublayoutBase
    {
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
                SearchAndBindBlogs();
            }
        }

        private void SearchAndBindBlogs()
        {
            var searchUtility = ObjectFactory.GetInstance<ISearchUtility>();

            var sitecoreSearchParameters = CreateBlogsSearchParameters();

            var searchResults = searchUtility.Search(sitecoreSearchParameters);

            var itemComparer = new Business.SitecoreInteractions.ItemComparer();
            var resultsCollection = searchResults.ResultsCollection.ToList();
            resultsCollection.Sort(itemComparer.CompareDate);
            resultsCollection.Reverse();

            lvBlogs.DataSource = resultsCollection;
            lvBlogs.DataBind();
        }

        private SitecoreSearchParameters CreateBlogsSearchParameters()
        {

            var searchTemplates = new List<ID> { Microsite.MicroSiteBlogTemplateGuid };

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
                if (item != null)
                {
                    var scdDate = (Sitecore.Web.UI.WebControls.Date)e.Item.FindControl("scdDate");
                    var sciImage = (Image)e.Item.FindControl("sciImage");
                    var sctTitle = (Text)e.Item.FindControl("sctTitle");
                    var sctAuthor = (Text)e.Item.FindControl("sctAuthor");
                    var sctShortText = (Text)e.Item.FindControl("sctShortText");
                    var phComments = (PlaceHolder)e.Item.FindControl("phComments");
                    var sctCommentsLabel = (Text)e.Item.FindControl("sctCommentsLabel");
                    var litCommentCount = (Literal)e.Item.FindControl("litCommentCount");
                    var hlViewBlog = (HyperLink)e.Item.FindControl("hlViewBlog");
                    var hlImage = (HyperLink)e.Item.FindControl("hlImage");
                    var hlTitle = (HyperLink)e.Item.FindControl("hlTitle");

                    if (scdDate != null) scdDate.Item = item;
                    if (sctTitle != null) sctTitle.Item = item;
                    if (sctAuthor != null) sctAuthor.Item = item;
                    if (sctShortText != null) sctShortText.Item = item;
                    if (hlViewBlog != null)
                    {
                        Item destinationItem = SiteHomeItem.Axes.GetDescendants()
                                                           .FirstOrDefault(
                                                               x =>
                                                               x.TemplateID ==
                                                               Microsite.MicroSiteBlogDetailsTemplateId);

                        string url = LinkManager.GetItemUrl(destinationItem) + "?" + QueryStringNames.Guid + "=" + item.ID.ToString();

                        if (MicrositeDictionaryItem != null) hlViewBlog.Text = Datasource["View blog"];
                        hlViewBlog.NavigateUrl = url;
                        hlImage.NavigateUrl = url;
                        hlTitle.NavigateUrl = url;
                    }
                    if (sciImage != null)
                    {
                        var imageField = (Sitecore.Data.Fields.ImageField)item.Fields["Image"];

                        if (imageField != null && imageField.MediaItem != null)
                        {
                            sciImage.Item = item;
                            sciImage.DataBind();
                        }
                    }
                    if (phComments != null && sctCommentsLabel != null && litCommentCount != null)
                    {
                        int count;
                        bool success = Int32.TryParse(item[Enumerators.SitecoreConfig.Fields.Global.CommentCounter], out count);

                        if (success && count > 0)
                        {
                            sctCommentsLabel.Item = Datasource;
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
}