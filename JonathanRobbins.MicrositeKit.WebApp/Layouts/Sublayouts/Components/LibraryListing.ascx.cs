using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Search;
using JonathanRobbins.MicrositeKit.Entities.Search;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Search;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Links;
using Sitecore.Web.UI.WebControls;
using StructureMap;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class LibraryListing : MicrositeSublayoutBase
    {
        public LibraryListing()
        {
            ObjectFactory.Initialize(x =>
            {
                x.For<ISearchUtility>().Use<SearchUtility>();
            });
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            SetUpLabels();
            if (!Page.IsPostBack)
            {
                Assert.IsNotNull(Datasource, "Datasource is not set to the label set of the Library Widget");
                BindFilter();
                PreselectItems();
                SearchAndBindResources();
            }
        }

        private void BindFilter()
        {
            cblResourceFilter.DataSource = ResourceTypes;
            cblResourceFilter.DataValueField = "Key";
            cblResourceFilter.DataTextField = "Value";
            cblResourceFilter.DataBind();
        }

        private void PreselectItems()
        {
            Enumerable.Cast<ListItem>(cblResourceFilter.Items).All(li => li.Selected = true);
        }

        protected Dictionary<ID, string> ResourceTypes
        {
            get
            {
                var resourceTypes = new Dictionary<ID, string>();

                Item categorisationItem = Sitecore.Context.Database.GetItem(Enumerators.SitecoreConfig.Guids.Global.ClassificationFolderId);
                if (categorisationItem != null)
                {
                    List<Item> categories = categorisationItem.Children.ToList();

                    resourceTypes = (from c in categories
                                     where c != null
                                     select new KeyValuePair<ID, string>(c.ID, c.Name)).ToList()
                                                                                       .ToDictionary(pair => pair.Key, pair => pair.Value);
                }

                return resourceTypes;
            }
        }

        private void SetUpLabels()
        {
            sctLegend.Item = Datasource;
            sctHelp.Item = Datasource;
            sctStrapline.Item = Datasource;
            sctShortText.Item = Datasource;

            btnReset.Text = Datasource["Reset button text"];
            btnFilter.Text = Datasource["Filter button text"];
        }

        private void SearchAndBindResources()
        {
            var searchUtility = ObjectFactory.GetInstance<ISearchUtility>();

            var sitecoreSearchParameters = CreateResourceSearchParameters();

            var searchResults = new SearchResults();

            if (sitecoreSearchParameters.PostFieldFilters.Any())
            {
                searchResults = searchUtility.Search(sitecoreSearchParameters);
            }

            var itemComparer = new Business.SitecoreInteractions.ItemComparer();
            var resultsCollection = searchResults.ResultsCollection.ToList();
            resultsCollection.Sort(itemComparer.CompareCreatedDate);
            resultsCollection.Reverse();

            lvResources.DataSource = resultsCollection;
            lvResources.DataBind();
        }

        private SitecoreSearchParameters CreateResourceSearchParameters()
        {
            var fieldDictionary = Enumerable.Cast<ListItem>(cblResourceFilter.Items)
                                                   .Where(item => item.Selected)
                                                   .ToDictionary(item => item.Value, item => Enumerators.SitecoreConfig.Fields.Global.Categories);

            return new SitecoreSearchParameters()
            {
                IndexName = SitecoreIndex.Web,
                Location = Enumerators.SitecoreConfig.Guids.Global.MediaLibraryRootNodeId,
                PostFieldFilters = fieldDictionary
            };
        }

        protected void lvResources_OnItemDataBound(object sender, ListViewItemEventArgs e)
        {
            if (e.Item.ItemType == ListViewItemType.EmptyItem)
            {
                var sctNoResults = (SText)e.Item.FindControl("sctNoResults");
                if (sctNoResults != null) sctNoResults.SItemGuid = Datasource.ID.ToGuid();

            }
            else if (e.Item.ItemType == ListViewItemType.DataItem)
            {

                var item = e.Item.DataItem as Item;

                if (item != null)
                {
                    var mediaItem = (MediaItem)item;

                    var sctTitle = (Text)e.Item.FindControl("sctTitle");
                    var sctCategoryLabel = (Text)e.Item.FindControl("sctCategoryLabel");
                    var litCategories = (Literal)e.Item.FindControl("litCategories");
                    var sctFileDetailsLabel = (Text)e.Item.FindControl("sctFileDetailsLabel");
                    var sctShortText = (Text)e.Item.FindControl("sctShortText");
                    var hlDownload = (HyperLink)e.Item.FindControl("hlDownload");

                    if (sctTitle != null) { sctTitle.Item = mediaItem; }
                    if (sctCategoryLabel != null) sctCategoryLabel.Item = Datasource;
                    if (litCategories != null)
                    {
                        List<Item> items = Business.SitecoreHelp.Utilities.GetItemsFromPipeSeparatedList(mediaItem, Enumerators.SitecoreConfig.Fields.Global.Categories).ToList();
                        string categories = items.Aggregate(string.Empty, (current, i) => current + (i.Name + ","));

                        litCategories.Text = categories.RemoveTrailingComma();
                    }
                    if (sctFileDetailsLabel != null) sctFileDetailsLabel.Item = Datasource;
                    if (sctShortText != null) { sctShortText.Item = mediaItem; }
                    if (hlDownload != null)
                    {
                        hlDownload.Text = Datasource["Download button text"];
                        hlDownload.Target = "_blank";
                        hlDownload.NavigateUrl = Sitecore.StringUtil.EnsurePrefix('/', Sitecore.Resources.Media.MediaManager.GetMediaUrl(mediaItem));
                    }
                }
            }
        }

        protected void btnReset_OnClick(object sender, EventArgs e)
        {
            var currentItem = Sitecore.Context.Item;
            var url = LinkManager.GetItemUrl(currentItem);
            Response.Redirect(url);
        }

        protected void btnFilter_OnClick(object sender, EventArgs e)
        {
            SearchAndBindResources();
        }
    }
}