using System;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class MainText : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Item item = RetrieveItemOwnerOfField(sctMainText.Field);
            if (item != null) sctMainText.Item = item;
        }
    }
}