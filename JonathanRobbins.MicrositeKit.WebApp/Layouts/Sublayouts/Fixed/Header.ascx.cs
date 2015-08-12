using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class Header : System.Web.UI.UserControl
    {
        protected Item MegaNavigationDatasource
        {
            get
            {
                // TODO get datasource from Site config

                List<Item> items = SiteHomeItem.GetChildren().ToList();
                items.Insert(0, SiteHomeItem);

                return items.Where(NavDisplayAllowed);
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                BindMegaNav();
            }
        }

        private void BindMegaNav()
        {
            MainNav.DataSource = MegaNavigationDatasource.ID.ToString();
        }
    }
}