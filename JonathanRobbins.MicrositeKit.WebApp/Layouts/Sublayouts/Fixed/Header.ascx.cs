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
    public partial class Header : MicrositeControlBase
    {
        private Item _megaNavigationDatasource;
        protected Item MegaNavigationDatasource
        {
            get
            {
                if (_megaNavigationDatasource == null)
                {
                    string mainNav = Nodes.MicrositeLocalSettingsItem[];

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
                    string siteLogo = Nodes.MicrositeLocalSettingsItem[];

                    _siteLogoDatasource = Sitecore.Context.Database.GetItem(siteLogo);
                }

                return _siteLogoDatasource;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                BindMegaNav();
                BindSiteLogo();
            }
        }

        private void BindSiteLogo()
        {
            SiteLogo.DataSource = SiteLogoDatasource.ID.ToString();
        }

        private void BindMegaNav()
        {
            MainNav.DataSource = MegaNavigationDatasource.ID.ToString();
        }
    }
}