﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Fields;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class LoggedIn : MicrositeControlBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (UserLoggedIntoSite(Page))
            {
                phLoggedIn.Visible = true;
            }
        }

        protected void btnLogout_OnClick(object sender, EventArgs e)
        {
            LogoutUser();

            string url = string.Empty;

            LinkField linkField = MicrositeDictionaryItem.Fields["Log out redirect location"];

            if (linkField != null && !string.IsNullOrEmpty(linkField.Url))
            {
                url = linkField.TargetItem != null ? LinkManager.GetItemUrl(linkField.TargetItem) : linkField.Url;
            }
            else
            {
                url = loginPageItem != null ? LinkManager.GetItemUrl(loginPageItem) : HttpContext.Current.Request.Url.AbsoluteUri;
            }

            Response.Redirect(url);
        }
    }
}