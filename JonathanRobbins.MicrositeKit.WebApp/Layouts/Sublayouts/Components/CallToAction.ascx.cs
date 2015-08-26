using System;
using System.Web.UI;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class CallToAction : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                PopulateFields();
            }
        }

        private void PopulateFields()
        {
            sctLegend.Item = Datasource;
            sctShortText.Item = Datasource;
            sclCallToAction.Item = Datasource;
        }
    }
}