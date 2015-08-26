using System;
using System.Collections.Generic;
using System.Web.UI;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class Carousel : MicrositeSublayoutBase
    {
        public bool ShowControls
        {
            get
            {
                bool showControls = true;

                if (Datasource != null && Datasource.Fields[Enumerators.SitecoreConfig.Fields.Global.ShowControls] != null)
                {
                    showControls = Datasource[Enumerators.SitecoreConfig.Fields.Global.ShowControls] == "1";
                }

                return showControls;
            }
        }

        protected IEnumerable<Item> CarouselDataSource
        {
            get
            {
                IEnumerable<Item> slideItems = null;
                if (Datasource != null && Datasource.Fields[Enumerators.SitecoreConfig.Fields.Global.Slides] != null)
                {
                    slideItems = Business.SitecoreHelp.Utilities.GetItemsFromPipeSeparatedList(Datasource, Enumerators.SitecoreConfig.Fields.Global.Slides);
                }

                return slideItems;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                BindCarousel();
            }
        }

        private void BindCarousel()
        {
            rptCarousel.DataSource = CarouselDataSource;
            rptCarousel.DataBind();
        }
    }
}