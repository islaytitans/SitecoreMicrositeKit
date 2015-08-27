using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Fields;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.ContentTesting.Pipelines.StopTest;
using Sitecore.Data.Items;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class SiteLogo : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            BindSitecoreControls();
            if (!Page.IsPostBack)
            {
                SetUpLogo();
            }
        }

        private void SetUpLogo()
        {           
            hlLogo.NavigateUrl = LinkManager.GetItemUrl(Nodes.MicrositeHomeItem);
            hlLogo.Enabled = Sitecore.Context.Item.ID != Nodes.MicrositeHomeItem.ID;
        }
    }
}