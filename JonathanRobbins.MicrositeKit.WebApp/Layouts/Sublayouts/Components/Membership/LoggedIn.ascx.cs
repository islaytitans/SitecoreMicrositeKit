using System;
using System.Web;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Fields;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Membership
{
    public partial class LoggedIn : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (UserLoggedIntoMicrosite(Page))
            {
                btnLogout.Text =
                    Nodes.MicrositesMicrositesDictionaryItem[Enumerators.SitecoreConfig.Fields.Global.LogOut];
                phLoggedIn.Visible = true;
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