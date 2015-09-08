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
            BindSitecoreControls();
            SetVenue();
            if (!Page.IsPostBack)
            {
                phFinishDate.Visible =
                DateUtil.IsoDateToDateTime(Datasource[scdStartDate.Field]).ToString("dd/MM/yyyy")
                !=
                DateUtil.IsoDateToDateTime(Datasource[scdEndDate.Field]).ToString("dd/MM/yyyy");
            }
        }

        private void SetVenue()
        {
            string venueGuid = Datasource[Enumerators.SitecoreConfig.Fields.Global.Venue];
            if (string.IsNullOrEmpty(venueGuid))
                return;

            Item venueItem = Sitecore.Context.Database.GetItem(venueGuid);
            if (venueItem == null)
                return;

            sctAddressLine1.Item = venueItem;
            phAddress1.Visible = !string.IsNullOrEmpty(venueItem[sctAddressLine1.Field]);

            sctAddressLine2.Item = venueItem;
            phAddress2.Visible = !string.IsNullOrEmpty(venueItem[sctAddressLine2.Field]);

            sctAddressLine3.Item = venueItem;
            phAddress3.Visible = !string.IsNullOrEmpty(venueItem[sctAddressLine3.Field]);

            sctPostcode.Item = venueItem;
            phPostcode.Visible = !string.IsNullOrEmpty(venueItem[sctPostcode.Field]);
        }
    }
}