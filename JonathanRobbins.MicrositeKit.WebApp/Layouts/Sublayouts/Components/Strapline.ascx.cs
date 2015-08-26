using System;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class Strapline : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Item item = RetrieveItemOwnerOfField(sctStrapline.Field);
            if (item != null) sctStrapline.Item = item;
        }
    }
}