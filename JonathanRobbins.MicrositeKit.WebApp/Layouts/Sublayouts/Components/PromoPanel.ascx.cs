using System;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class PromoPanel : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            PopulateFields();
        }

        private void PopulateFields()
        {
            if (Datasource != null)
            {
                sciPromoImage.Item = Datasource;
                litTitle.Text = Datasource["Title"];
                sclLink.Item = Datasource;
                sclLinkImage.Item = Datasource;
                sctShortText.Item = Datasource;
            }
        }
    }
}