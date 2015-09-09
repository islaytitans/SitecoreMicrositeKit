using System;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Listings
{
    public partial class NewsDetails : MicrositeSublayoutBase
    {
        public void Page_Load(object sender, EventArgs e)
        {
            BindSitecoreControls();
        }
    }
}