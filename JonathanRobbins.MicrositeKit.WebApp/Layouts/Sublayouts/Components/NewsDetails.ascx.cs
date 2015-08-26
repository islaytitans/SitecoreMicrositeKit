using System;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class NewsDetails : MicrositeSublayoutBase
    {
        public void Page_Load(object sender, EventArgs e)
        {
            PopulateLabels();
            if (!Page.IsPostBack)
            {

            }
        }

        private void PopulateLabels()
        {
            string newsItemId = ApplyParameterIfPresent(QueryStrings.Guid);

            if (!string.IsNullOrEmpty(newsItemId))
            {
                Item newsItem = Sitecore.Context.Database.GetItem(newsItemId);
                sctDate.Item = newsItem;
            }
        }
    }
}