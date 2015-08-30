using System;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Panels
{
    public partial class CallToAction : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            BindSitecoreControls();
        }
    }
}