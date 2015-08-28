using System;
using System.Collections.Generic;
using System.Linq;
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

                var searchUtility = ObjectFactory.GetInstance<ISearchUtility>();

                var sitecoreSearchParameters = new SitecoreSearchParameters()
                {
                    Templates = new List<ID>
                    {
                        Templates.MicroSiteEventListingId,
                        Templates.MicroSiteBlogListingId,
                        Templates.MicroSiteNewsListingId
                    },
                    IndexName = Indexes.Web
                };

                var searchResults = searchUtility.Search(sitecoreSearchParameters);

                var items = searchResults.ResultsCollection.ToList();

                var itemComparer = new ItemComparer();
                items.Sort(itemComparer.CompareCreatedDate);
                items.Reverse();

                _collectionPanelDataSource = items;

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

            lvMediumCollection.DataSource = collectionPanelDataSource.Take(2);
            lvMediumCollection.DataBind();

            collectionPanelDataSource.RemoveRange(0, 2);
            if (!collectionPanelDataSource.Any())
                return;

            lvSmallCollection.DataSource = collectionPanelDataSource.Take(4);
            lvSmallCollection.DataBind();

            collectionPanelDataSource.RemoveRange(0, 4);
            if (!collectionPanelDataSource.Any())
                return;

            lvHiddenSmall.DataSource = collectionPanelDataSource.Take(6);
            lvHiddenSmall.DataBind();
        }
    }
}