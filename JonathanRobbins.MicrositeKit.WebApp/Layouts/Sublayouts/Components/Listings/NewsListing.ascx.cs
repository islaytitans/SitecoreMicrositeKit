using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Extensions;
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

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Listings
{
    public partial class NewsListing : MicrositeSublayoutBase
    {
        private IEnumerable<Item> _news;
        public IEnumerable<Item> News
        {
            get
            {
                if (_news == null)
                {
                    //TODO create unique index
                    string indexName = Sitecore.Context.Database.Name.Equals("web",
                        StringComparison.InvariantCultureIgnoreCase)
                        ? Indexes.Web
                        : Indexes.Master;

                    var searchManager =
                                new SearchManager(new ContentSearch(indexName));

                    var sitecoreSearchParameters = CreateNewsSearchParameters();

                    var searchResults = searchManager.Search(sitecoreSearchParameters);

                    var itemComparer = new ItemComparer();
                    var resultsCollection = searchResults.Hits.Select(h => h.Document.GetItem()).ToList();
                    resultsCollection.Sort(itemComparer.CompareDate);
                    resultsCollection.Reverse();

                    _news = resultsCollection;
                }

                return _news;
            }
        }

        public NewsListing()
        {
            ObjectFactory.Initialize(x =>
            {
                x.For<ISearchUtility>().Use<SearchUtility>();
            });
        }

        protected void Page_PreRender(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                BindNews();
            }
        }

        private void BindNews()
        {
            lvNews.DataSource = News;
            lvNews.DataBind();
        }

        private SitecoreSearchParameters CreateNewsSearchParameters()
        {
            Item siteClassificationItem = Nodes.MicrositeHomeItem.Axes.GetDescendants().FirstOrDefault(x => x.TemplateID == Templates.MicrositeClassificationFolderId);
            var fieldDictionary = new Dictionary<string, string>();

            if (siteClassificationItem != null)
            {
                IEnumerable<Item> classes = siteClassificationItem.Fields[Enumerators.SitecoreConfig.Fields.Global.Classification].GetItems();

                if (classes != null)
                {
                    foreach (var @class in classes)
                    {
                        fieldDictionary.Add(@class.ID.ToString(), Enumerators.SitecoreConfig.Fields.Global.Classification);
                    }
                }
            }

            var newsTemplates = new List<ID> { Templates.MicroSiteNewsListingId };

            return new SitecoreSearchParameters()
            {
                Templates = newsTemplates,
                PostFieldFilters = fieldDictionary,
            };
        }

        protected void lvNews_OnItemDataBound(object sender, ListViewItemEventArgs e)
        {
            if (e.Item.ItemType == ListViewItemType.DataItem)
            {
                var item = e.Item.DataItem as Item;
                if (item != null)
                {
                    var sciImage = (Sitecore.Web.UI.WebControls.Image)e.Item.FindControl("sciImage");
                    var hlReadMore = (HyperLink)e.Item.FindControl("hlReadMore");
                    var hlImage = (HyperLink)e.Item.FindControl("hlImage");
                    var hlTitle = (HyperLink)e.Item.FindControl("hlTitle");

                    if (sciImage != null)
                    {
                        var imageField = (Sitecore.Data.Fields.ImageField)item.Fields[Enumerators.SitecoreConfig.Fields.Global.Image];

                        if (imageField != null && imageField.MediaItem != null)
                        {
                            sciImage.Item = item;
                        }
                        else
                        {
                            sciImage.Visible = false;
                        }
                    }

                    if (hlReadMore != null && hlImage != null && hlTitle != null)
                    {
                        Item destinationItem = Nodes.MicrositeHomeItem.Axes.GetDescendants()
                                   .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteNewsDetailsId);

                        string url = string.Format("{0}?{1}={2}", LinkManager.GetItemUrl(destinationItem),
                                                   QueryStrings.Guid, item.ID);

                        if (Datasource != null) hlReadMore.Text = Datasource[Enumerators.SitecoreConfig.Fields.Global.ReadMore];
                        hlReadMore.NavigateUrl = url;
                        hlImage.NavigateUrl = url;
                        hlTitle.NavigateUrl = url;
                    }
                }
            }
        }
    }
}