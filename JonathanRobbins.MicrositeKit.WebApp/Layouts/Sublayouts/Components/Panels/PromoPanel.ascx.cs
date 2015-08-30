using System;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Panels
{
    public partial class PromoPanel : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            BindSitecoreControls();
            if (!Page.IsPostBack)
            {
                litTitle.Text = Datasource["Title"];
            }
        }
    }
}