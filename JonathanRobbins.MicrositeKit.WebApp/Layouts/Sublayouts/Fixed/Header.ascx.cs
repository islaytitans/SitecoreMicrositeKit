using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class Header : UserControl
    {
        private Item _megaNavigationDatasource;
        protected Item MegaNavigationDatasource
        {
            get
            {
                if (_megaNavigationDatasource == null)
                {
                    string mainNav = Nodes.MicrositeLocalSettingsItem[Enumerators.SitecoreConfig.Fields.Global.MainNavigation];

                    _megaNavigationDatasource = Sitecore.Context.Database.GetItem(mainNav);
                }

                return _megaNavigationDatasource;
            }
        }

        private Item _siteLogoDatasource;
        protected Item SiteLogoDatasource
        {
            get
            {
                if (_siteLogoDatasource == null)
                {
                    string siteLogo = Nodes.MicrositeLocalSettingsItem[Enumerators.SitecoreConfig.Fields.Global.SiteLogo];

                    _siteLogoDatasource = Sitecore.Context.Database.GetItem(siteLogo);
                }

                return _siteLogoDatasource;
            }
        }

        protected void Page_Init(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                BindMegaNav();
                BindSiteLogo();
            }
        }

        private void BindSiteLogo()
        {
            if (SiteLogoDatasource != null)
                SiteLogo.DataSource = SiteLogoDatasource.ID.ToString();
        }

        private void BindMegaNav()
        {
            if (MegaNavigationDatasource != null)
                MainNav.DataSource = MegaNavigationDatasource.ID.ToString();
        }
    }
}