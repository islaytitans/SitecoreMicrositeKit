using System;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Listings
{
    public partial class EventDetail : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            PopulateLabels();
            if (!Page.IsPostBack)
            {
                
            }
        }

        private void PopulateLabels()
        {
            string eventObjectId = ApplyParameterIfPresent(QueryStrings.Guid);

            if (!string.IsNullOrEmpty(eventObjectId))
            {
                Item @event = Sitecore.Context.Database.GetItem(eventObjectId);

                sctExpect.Item = @event;
                sctWhen.Item = @event;
                scdStartDate.Item = @event;
                scdEndDate.Item = @event;
                scdStartTime.Item = @event;
                scdEndTime.Item = @event;

                phFinishDate.Visible =
                    DateUtil.IsoDateToDateTime(@event[(string) scdStartDate.Field]).ToString("dd/MM/yyyy")
                    !=
                    DateUtil.IsoDateToDateTime(@event[(string) scdEndDate.Field]).ToString("dd/MM/yyyy");

                string venueGuid = @event[Enumerators.SitecoreConfig.Fields.Global.Venue];
                Item venue = Sitecore.Context.Database.GetItem(venueGuid);

                if (venue != null)
                {
                    sctAddressLine1.Item = venue;
                    phAddress1.Visible = !string.IsNullOrEmpty(venue[(string) sctAddressLine1.Field]);

                    sctAddressLine2.Item = venue;
                    phAddress2.Visible = !string.IsNullOrEmpty(venue[(string) sctAddressLine2.Field]);

                    sctAddressLine3.Item = venue;
                    phAddress3.Visible = !string.IsNullOrEmpty(venue[(string) sctAddressLine3.Field]);

                    sctPostcode.Item = venue;
                    phPostcode.Visible = !string.IsNullOrEmpty(venue[(string) sctPostcode.Field]);
                }
            }

            sctNeedToKnowLabel.Item = Datasource;
            sctWhenLabel.Item = Datasource;
            sctVenueLabel.Item = Datasource;
            sctExpectLabel.Item = Datasource;
            sctTime.Item = Datasource;
        }
    }
}