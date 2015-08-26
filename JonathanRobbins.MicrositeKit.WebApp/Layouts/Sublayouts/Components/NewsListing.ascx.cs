using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Search;
using JonathanRobbins.MicrositeKit.Entities.Search;
using JonathanRobbins.MicrositeKit.Enumerators.Search;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Search;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Links;
using Sitecore.Web.UI.WebControls;
using StructureMap;

//using scSearchContrib.Searcher.Parameters;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class NewsListing : MicrositeSublayoutBase
    {
        public NewsListing()
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
                SearchAndBindNews();
            }
        }

        private void SearchAndBindNews()
        {
            var searchUtility = ObjectFactory.GetInstance<ISearchUtility>();

            var sitecoreSearchParameters = CreateNewsSearchParameters();

            var searchResults = searchUtility.Search(sitecoreSearchParameters);

            var itemComparer = new Business.SitecoreInteractions.ItemComparer();
            var resultsCollection = searchResults.ResultsCollection.ToList();
            resultsCollection.Sort(itemComparer.CompareDate);
            resultsCollection.Reverse();

            lvNews.DataSource = resultsCollection.ToList();
            lvNews.DataBind();
        }

        private SitecoreSearchParameters CreateNewsSearchParameters()
        {
            Item siteClassificationItem = SiteConfigItem.Axes.GetDescendants().FirstOrDefault(x => x.TemplateID == Microsite.MicroSiteClassificationTemplateId);
            var fieldDictionary = new Dictionary<string, string>();

            if (siteClassificationItem != null)
            {
                IEnumerable<Item> classes = Business.SitecoreHelp.Utilities.GetItemsFromPipeSeparatedList(siteClassificationItem, Enumerators.SitecoreConfig.Fields.Global.Classification);

                if (classes != null)
                {
                    foreach (var @class in classes)
                    {
                        fieldDictionary.Add(@class.ID.ToString(), Enumerators.SitecoreConfig.Fields.Global.Classification);
                    }
                }
            }

            var newsTemplates = new List<ID> { Microsite.MicroSiteNewsTemplateGuid };

            return new SitecoreSearchParameters()
            {
                IndexName = Indexes.Web,
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
                    var sctTitle = (Text)e.Item.FindControl("sctTitle");
                    var sctFirstName = (Text)e.Item.FindControl("sctFirstName");
                    var sctLastName = (Text)e.Item.FindControl("sctLastName");
                    var scdDate = (Sitecore.Web.UI.WebControls.Date)e.Item.FindControl("scdDate");
                    var sctShortText = (Text)e.Item.FindControl("sctShortText");
                    var hlReadMore = (HyperLink)e.Item.FindControl("hlReadMore");
                    var hlImage = (HyperLink)e.Item.FindControl("hlImage");
                    var hlTitle = (HyperLink)e.Item.FindControl("hlTitle");

                    if (sciImage != null)
                    {
                        var imageField = (Sitecore.Data.Fields.ImageField)item.Fields["Image"];

                        if (imageField != null && imageField.MediaItem != null)
                        {
                            sciImage.Item = item;
                        }
                        else
                        {
                            sciImage.Visible = false;
                        }
                    }

                    if (sctTitle != null) sctTitle.Item = item;
                    if (sctFirstName != null) sctFirstName.Item = item;
                    if (sctLastName != null) sctLastName.Item = item;
                    if (scdDate != null) scdDate.Item = item;
                    if (sctShortText != null) sctShortText.Item = item;

                    if (hlReadMore != null && hlImage != null && hlTitle != null)
                    {
                        Item destinationItem = SiteHomeItem.Axes.GetDescendants()
                                   .FirstOrDefault(x => x.TemplateID == Microsite.MicroSiteNewsDetailsTemplateId);

                        string url = string.Format("{0}?{1}={2}", LinkManager.GetItemUrl(destinationItem),
                                                   QueryStrings.Guid, item.ID);

                        if (MicrositeDictionaryItem != null) hlReadMore.Text = MicrositeDictionaryItem[Enumerators.SitecoreConfig.Fields.Global.ReadMore];
                        hlReadMore.NavigateUrl = url;
                        hlImage.NavigateUrl = url;
                        hlTitle.NavigateUrl = url;
                    }
                }
            }
        }
    }
}