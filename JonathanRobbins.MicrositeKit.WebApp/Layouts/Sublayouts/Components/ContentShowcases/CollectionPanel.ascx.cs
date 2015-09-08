using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using CsQuery.ExtensionMethods;
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
using StructureMap;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.ContentShowcases
{
    public partial class CollectionPanel : MicrositeSublayoutBase
    {
        private IEnumerable<Item> _collectionPanelDataSource;
        protected IEnumerable<Item> CollectionPanelDataSource
        {
            get
            {
                if (_collectionPanelDataSource != null)
                    return _collectionPanelDataSource;

                if (Datasource != null && !string.IsNullOrEmpty(Datasource[Enumerators.SitecoreConfig.Fields.Global.Panels]))
                {
                    _collectionPanelDataSource = Datasource.Fields[Enumerators.SitecoreConfig.Fields.Global.Panels].GetItems();
                }
                else
                {
                    string indexName = Sitecore.Context.Database.Name.Equals("web",
                        StringComparison.InvariantCultureIgnoreCase)
                        ? Indexes.Web
                        : Indexes.Master;

                    var searchManager =
                        new SearchManager(new ContentSearch(indexName));

                    var sitecoreSearchParameters = new SitecoreSearchParameters()
                    {
                        Templates = new List<ID>
                        {
                            Templates.MicroSiteEventId,
                            Templates.MicroSiteBlogId,
                            Templates.MicroSiteNewsId
                        },
                    };

                    var searchResults = searchManager.Search(sitecoreSearchParameters);

                    var items = searchResults.Hits.Select(h => h.Document.GetItem()).ToList();

                    var itemComparer = new ItemComparer();
                    items.Sort(itemComparer.CompareCreatedDate);
                    items.Reverse();

                    _collectionPanelDataSource = items;
                }

                return _collectionPanelDataSource;
            }
        }

        public CollectionPanel()
        {
            ObjectFactory.Initialize(x =>
            {
                x.For<ISearchUtility>().Use<SearchUtility>();
            });
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            BindSitecoreControls();
            if (!Page.IsPostBack)
            {
                BindControls();
            }
        }

        private void BindControls()
        {
            if (CollectionPanelDataSource == null || !CollectionPanelDataSource.Any())
                return;

            var collectionPanelDataSource = CollectionPanelDataSource.ToList();

            cpvFeaturedItem.ViewItem = collectionPanelDataSource.First();
            int count;
            bool success =Int32.TryParse(collectionPanelDataSource.First()[Enumerators.SitecoreConfig.Fields.Global.CommentCounter], out count);
            cpvFeaturedItem.CommentCount = success ? count : (int?) null;
            cpvFeaturedItem.DataBind();

            collectionPanelDataSource.RemoveRange(0, 1);
            if (!collectionPanelDataSource.Any())
                return;

            int i = collectionPanelDataSource.Count <= 2 ? collectionPanelDataSource.Count : 2;
            lvMediumCollection.DataSource = collectionPanelDataSource.Take(i);
            lvMediumCollection.DataBind();

            collectionPanelDataSource.RemoveRange(0, i);
            if (!collectionPanelDataSource.Any())
                return;

            i = collectionPanelDataSource.Count <= 4 ? collectionPanelDataSource.Count : 4;
            lvSmallCollection.DataSource = collectionPanelDataSource.Take(i);
            lvSmallCollection.DataBind();

            collectionPanelDataSource.RemoveRange(0, i);
            if (!collectionPanelDataSource.Any())
                return;

            i = collectionPanelDataSource.Count <= 6 ? collectionPanelDataSource.Count : 6;
            lvHiddenSmall.DataSource = collectionPanelDataSource.Take(i);
            lvHiddenSmall.DataBind();
        }
    }
}