using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI.WebControls;
using JonathanRobbins.Micrositekit.Business.Extensions;
using JonathanRobbins.MicrositeKit.CMS.Extensions;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.CMS.Search;
using JonathanRobbins.MicrositeKit.Entities.Search;
using JonathanRobbins.MicrositeKit.Enumerators.Search;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Search;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Links;
using Sitecore.Web.UI.WebControls;
using StructureMap;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Listings
{
    public partial class LibraryListing : MicrositeSublayoutBase
    {
        protected Dictionary<ID, string> ResourceTypes
        {
            get
            {
                var resourceTypes = new Dictionary<ID, string>();

                Item categorisationItem =
                    Nodes.MicrositeSharedSettingsItem.GetChildren()
                        .FirstOrDefault(x => x.TemplateID == Templates.MicrositeMediaClassificationFolderId);

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

        private IEnumerable<Item> _mediaDatasource;
        public IEnumerable<Item> MediaDatasource
        {
            get
            {
                if (_mediaDatasource == null)
                {
                    //TODO unique index
                    string indexName = Sitecore.Context.Database.Name.Equals("web",
                        StringComparison.InvariantCultureIgnoreCase)
                        ? Indexes.Web
                        : Indexes.Master;

                    var searchManager =
                        new SearchManager(new ContentSearch(indexName));

                    var sitecoreSearchParameters = CreateResourceSearchParameters();

                    var searchResults = new SearchResultsCollection<CustomSearchResultItem>();

                    if (sitecoreSearchParameters.PostFieldFilters.Any())
                    {
                        searchResults = searchManager.Search(sitecoreSearchParameters);
                    }

                    var itemComparer = new ItemComparer();
                    var resultsCollection = searchResults.Hits.Select(h => h.Document.GetItem()).ToList();
                    resultsCollection.Sort(itemComparer.CompareCreatedDate);
                    resultsCollection.Reverse();

                    _mediaDatasource = resultsCollection;
                }

                return _mediaDatasource;
            }
        } 


        protected void Page_PreRender(object sender, EventArgs e)
        {
            BindSitecoreControls();
            SetUpLabels();
            if (!Page.IsPostBack)
            {
                BindFilter();
                PreselectItems();
                BindResources();
            }
        }

        private void SetUpLabels()
        {
            btnReset.Text = Datasource["Reset button text"];
            btnFilter.Text = Datasource["Filter button text"];
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

        private void BindResources()
        {
            lvResources.DataSource = MediaDatasource;
            lvResources.DataBind();
        }

        private SitecoreSearchParameters CreateResourceSearchParameters()
        {
            var fieldDictionary = Enumerable.Cast<ListItem>(cblResourceFilter.Items)
                                                   .Where(item => item.Selected)
                                                   .ToDictionary(item => item.Value, item => Enumerators.SitecoreConfig.Fields.Global.Categories);

            return new SitecoreSearchParameters()
            {
                Ancestors = new List<ID>() { Sitecore.ItemIDs.MediaLibraryRoot },
                PostFieldFilters = fieldDictionary
            };
        }

        protected void lvResources_OnItemDataBound(object sender, ListViewItemEventArgs e)
        {
            if (e.Item.ItemType != ListViewItemType.DataItem)
                return;

            var item = e.Item.DataItem as Item;
            if (item == null)
                return;

            var mediaItem = (MediaItem) item;

            var litCategories = (Literal) e.Item.FindControl("litCategories");
            var hlDownload = (HyperLink) e.Item.FindControl("hlDownload");

            if (litCategories != null)
            {
                var items = item.Fields[Enumerators.SitecoreConfig.Fields.Global.Categories].GetItems();
                string categories = items.Aggregate(string.Empty, (current, i) => current + (i.Name + ","));

                litCategories.Text = categories.RemoveTrailingComma();
            }
            if (hlDownload != null)
            {
                hlDownload.Text = Datasource["Download button text"];
                hlDownload.Target = "_blank";
                hlDownload.NavigateUrl = Sitecore.StringUtil.EnsurePrefix('/',
                    Sitecore.Resources.Media.MediaManager.GetMediaUrl(mediaItem));
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
            BindResources();
        }
    }
}