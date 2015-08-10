using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases
{
    public class NavigationControlBase : MicrositeControlBase
    {
        public bool DisplayItemInNavigation(Item item)
        {
            Assert.IsNotNull(item, "item");

            return !string.IsNullOrEmpty(item[Enumerators.SitecoreConfig.Fields.Global.DisplayOnNavigation]) &&
                   (string.Equals(item[Enumerators.SitecoreConfig.Fields.Global.DisplayOnNavigation], "1"));
        }
    }
}