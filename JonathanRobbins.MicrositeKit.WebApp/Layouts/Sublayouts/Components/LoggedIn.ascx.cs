using System;
using System.Web;
using System.Web.UI;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Fields;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class LoggedIn : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (UserLoggedIntoMicrosite(Page))
            {
                phLoggedIn.Visible = true;
            }
        }

        protected void btnLogout_OnClick(object sender, EventArgs e)
        {
            LogoutUser();

            string url = string.Empty;

            LinkField linkField = Datasource.Fields["Log out redirect location"];

            if (linkField != null && !string.IsNullOrEmpty(linkField.Url))
            {
                url = linkField.TargetItem != null ? LinkManager.GetItemUrl(linkField.TargetItem) : linkField.Url;
            }
            else
            {
                url = Nodes.LoginPageItem != null ? LinkManager.GetItemUrl(Nodes.LoginPageItem) : HttpContext.Current.Request.Url.AbsoluteUri;
            }

            Response.Redirect(url);
        }
    }
}