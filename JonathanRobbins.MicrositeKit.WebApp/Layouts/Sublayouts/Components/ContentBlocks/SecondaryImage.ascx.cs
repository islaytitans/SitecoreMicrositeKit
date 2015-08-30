using System;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.ContentBlocks
{
    public partial class SecondaryImage : MicrositeSublayoutBase
    {
        private void Page_Load(object sender, EventArgs e)
        {
            sciSecImage.Item = ResolveDatasourceOfField(sciSecImage.Field);
        }
    }
}