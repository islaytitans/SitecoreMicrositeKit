using System;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class ShortText : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Item item = RetrieveItemOwnerOfField(sctShortText.Field);
            if (item != null) sctShortText.Item = item;
        }
    }
}