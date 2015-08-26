using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Fields;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class LoggedIn : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (UserLoggedIn(Page))
            {
                phLoggedIn.Visible = true;
                btnLogout.Text = Nodes.MicrositesDictionaryItem[Enumerators.SitecoreConfig.Fields.Global.LogOut];
            }
        }

        protected void btnLogout_OnClick(object sender, EventArgs e)
        {
            LogoutUser();

            string url = Nodes.LoginPageItem != null
                ? LinkManager.GetItemUrl(Nodes.LoginPageItem)
                : HttpContext.Current.Request.Url.AbsoluteUri;

            Response.Redirect(url);
        }
    }
}