using System;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Web.UI.WebControls;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class H1Banner : MicrositeSublayoutBase
    {
        private void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                BindToObject();
            }
        }

        private void BindToObject()
        {
            Item item = RetrieveItemOwnerOfField(sctTitle.Field);
            if (item != null) sctTitle.Item = item;

            //TODO wildcard
            if (Sitecore.Context.Item.TemplateID == Templates.MicroSiteEventDetailsId)
            {
                string itemId = ApplyParameterIfPresent(QueryStrings.Guid);

                if (!string.IsNullOrEmpty(itemId))
                {
                    var sciImage = Page.FindControl("sciImage") as Image;

                    if (sciImage != null)
                    {
                        sciImage.DataSource = itemId;
                    }
                }
            }
        }
    }
}