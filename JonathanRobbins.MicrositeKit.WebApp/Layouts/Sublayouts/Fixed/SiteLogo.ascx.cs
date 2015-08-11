using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Fields;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class SiteLogo : MicrositeControlBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                SetUpLogo();
            }
        }

        private void SetUpLogo()
        {
            var logoItem = RetrieveItemFromField(Nodes.MicrositeLocalSettingsItem, Global.SiteLogo);

            
            hlLogo.NavigateUrl = LinkManager.GetItemUrl(Nodes.MicrositeHomeItem);

            hlLogo.Enabled = Sitecore.Context.Item.ID != Nodes.MicrositeHomeItem.ID;
        }

        private object RetrieveItemFromField(Item siteConfigItem, string siteLogo)
        {
            throw new NotImplementedException();
        }
    }
}