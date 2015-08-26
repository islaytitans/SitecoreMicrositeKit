using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
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
using Image = Sitecore.Web.UI.WebControls.Image;

//using scSearchContrib.Searcher.Parameters;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class EventsListing : MicrositeSublayoutBase
    {
        public EventsListing()
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
                SearchAndBindEvents();
            }
        }

        private void SearchAndBindEvents()
        {
            var searchUtility = ObjectFactory.GetInstance<ISearchUtility>();

            var sitecoreSearchParameters = CreateEventsSearchParameters();

            var searchResults = searchUtility.Search(sitecoreSearchParameters);

            var itemComparer = new ItemComparer();
            var resultsCollection = searchResults.ResultsCollection.ToList();
            resultsCollection.Sort(itemComparer.CompareStartDate);
            resultsCollection.Reverse();

            lvEvents.DataSource = resultsCollection;
            lvEvents.DataBind();
        }

        private SitecoreSearchParameters CreateEventsSearchParameters()
        {
            Item siteClassificationItem = Nodes.MicrositeLocalSettingsItem.Axes.GetDescendants().FirstOrDefault(x => x.TemplateID == Templates.MicroSiteClassificationTemplateId);
            var fieldDictionary = new Dictionary<string, string>();

            if (siteClassificationItem != null)
            {
                IEnumerable<Item> classes = siteClassificationItem.Fields[Enumerators.SitecoreConfig.Fields.Global.Classification].GetItems();

                foreach (var @class in classes)
                {
                    fieldDictionary.Add(@class.ID.ToString(), Enumerators.SitecoreConfig.Fields.Global.Classification);
                }
            }

            var searchTemplates = new List<ID> { Templates.MicroSiteEventTemplateGuid };

            return new SitecoreSearchParameters()
            {
                Templates = searchTemplates,
                IndexName = Indexes.Web,
                PostFieldFilters = fieldDictionary,
            };
        }

        protected void lvEvents_OnItemDataBound(object sender, ListViewItemEventArgs e)
        {
            if (e.Item.ItemType == ListViewItemType.DataItem)
            {
                var item = e.Item.DataItem as Item;
                if (item != null)
                {
                    var scdDate = (Sitecore.Web.UI.WebControls.Date)e.Item.FindControl("scdDate");
                    var sctTitle = (Text)e.Item.FindControl("sctTitle");
                    var sctTime = (Text)e.Item.FindControl("sctTime");
                    var scdTimeStart = (Sitecore.Web.UI.WebControls.Date)e.Item.FindControl("scdTimeStart");
                    var scdTimeEnd = (Sitecore.Web.UI.WebControls.Date)e.Item.FindControl("scdTimeEnd");
                    var sctShortText = (Text)e.Item.FindControl("sctShortText");
                    var hlViewEvent = (HyperLink)e.Item.FindControl("hlViewEvent");
                    var sciImage = (Image)e.Item.FindControl("sciImage");
                    var phAddressLine1 = (PlaceHolder)e.Item.FindControl("phAddressLine1");
                    var sctAddressLine1 = (Text)e.Item.FindControl("sctAddressLine1");
                    var phAddressLine2 = (PlaceHolder)e.Item.FindControl("phAddressLine2");
                    var sctAddressLine2 = (Text)e.Item.FindControl("sctAddressLine2");
                    var phAddressLine3 = (PlaceHolder)e.Item.FindControl("phAddressLine3");
                    var sctAddressLine3 = (Text)e.Item.FindControl("sctAddressLine3");
                    var phPostcode = (PlaceHolder)e.Item.FindControl("phPostcode");
                    var sctAddressPostcode = (Text)e.Item.FindControl("sctAddressPostcode");
                    var hlImage = (HyperLink)e.Item.FindControl("hlImage");
                    var hlTitle = (HyperLink)e.Item.FindControl("hlTitle");

                    if (scdDate != null) scdDate.Item = item;
                    if (sctTitle != null) sctTitle.Item = item;
                    if (sctTime != null) sctTime.Item = Datasource;
                    if (scdTimeStart != null) scdTimeStart.Item = item;
                    if (scdTimeEnd != null) scdTimeEnd.Item = item;
                    if (sctShortText != null) sctShortText.Item = item;

                    if (hlViewEvent != null && hlImage != null && hlTitle != null)
                    {
                        var destinationItem = Nodes.MicrositeHomeItem.Axes.GetDescendants()
                                   .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteEventDetailsTemplateId);
                        string url = LinkManager.GetItemUrl(destinationItem) + "?" + QueryStrings.Guid + "=" + item.ID.ToString();
                        if (Datasource != null) hlViewEvent.Text = Datasource["View event"];

                        hlViewEvent.NavigateUrl = url;
                        hlImage.NavigateUrl = url;
                        hlTitle.NavigateUrl = url;
                    }

                    if (sciImage != null)
                    {
                        var imageField = (Sitecore.Data.Fields.ImageField)item.Fields["Image"];

                        if (imageField != null && imageField.MediaItem != null)
                        {
                            sciImage.Item = item;
                        }
                    }

                    string venueGuid = item[Enumerators.SitecoreConfig.Fields.Global.Venue];
                    Item venue = Sitecore.Context.Database.GetItem(venueGuid);

                    if (venue == null)
                        return;

                    if (sctAddressLine1 != null)
                    {
                        if (!string.IsNullOrEmpty(venue[sctAddressLine1.Field]))
                        {
                            sctAddressLine1.Item = venue;
                        }
                        else
                        {
                            phAddressLine1.Visible = false;
                        }
                    }
                    if (sctAddressLine2 != null)
                    {
                        if (!string.IsNullOrEmpty(venue[sctAddressLine2.Field]))
                        {
                            sctAddressLine2.Item = venue;
                        }
                        else
                        {
                            phAddressLine2.Visible = false;
                        }
                    }
                    if (sctAddressLine3 != null)
                    {
                        if (!string.IsNullOrEmpty(venue[sctAddressLine3.Field]))
                        {
                            sctAddressLine3.Item = venue;
                        }
                        else
                        {
                            phAddressLine3.Visible = false;
                        }
                    }
                    if (sctAddressPostcode != null)
                    {
                        if (!string.IsNullOrEmpty(venue[sctAddressPostcode.Field]))
                        {
                            sctAddressPostcode.Item = venue;
                        }
                        else
                        {
                            phPostcode.Visible = false;
                        }
                    }
                }
            }
        }
    }
}