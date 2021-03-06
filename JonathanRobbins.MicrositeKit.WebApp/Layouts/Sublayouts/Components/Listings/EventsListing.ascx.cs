﻿using System;
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
using Image = Sitecore.Web.UI.WebControls.Image;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Listings
{
    public partial class EventsListing : MicrositeSublayoutBase
    {
        private IEnumerable<Item> _eventsDatasource;
        public IEnumerable<Item> EventsDatasource
        {
            get
            {
                if (_eventsDatasource == null)
                {
                    string indexName = Sitecore.Context.Database.Name.Equals("web",
                        StringComparison.InvariantCultureIgnoreCase)
                        ? Indexes.Web
                        : Indexes.Master;

                    var searchManager =
                        new SearchManager(new ContentSearch(indexName));

                    var sitecoreSearchParameters = CreateEventsSearchParameters();

                    var searchResults = searchManager.Search(sitecoreSearchParameters);

                    var itemComparer = new ItemComparer();
                    var resultsCollection = searchResults.Hits.Select(h => h.Document.GetItem()).ToList();
                    resultsCollection.Sort(itemComparer.CompareStartDate);
                    resultsCollection.Reverse();

                    _eventsDatasource = resultsCollection;
                }

                return _eventsDatasource;
            }
        } 

        protected void Page_PreRender(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                BindEvents();
            }
        }

        private void BindEvents()
        {
            lvEvents.DataSource = EventsDatasource;
            lvEvents.DataBind();
        }

        private SitecoreSearchParameters CreateEventsSearchParameters()
        {
            var searchTemplates = new List<ID> { Templates.MicroSiteEventListingId };

            return new SitecoreSearchParameters()
            {
                Templates = searchTemplates,
            };
        }

        protected void lvEvents_OnItemDataBound(object sender, ListViewItemEventArgs e)
        {
            if (e.Item.ItemType == ListViewItemType.DataItem)
            {
                var item = e.Item.DataItem as Item;
                if (item != null)
                {
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

                    if (hlViewEvent != null && hlImage != null && hlTitle != null)
                    {
                        var destinationItem = Nodes.MicrositeHomeItem.Axes.GetDescendants()
                                   .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteEventDetailsId);
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