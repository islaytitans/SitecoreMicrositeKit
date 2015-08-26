using System;
using System.Web.UI;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class BlogDetails : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            SetUpLabels();
            if (!Page.IsPostBack)
            {
                
            }
        }

        private void SetUpLabels()
        {
            string blogItemId = ApplyParameterIfPresent(QueryStringNames.Guid);

            if (!string.IsNullOrEmpty(blogItemId))
            {
                Item blogItem = Sitecore.Context.Database.GetItem(blogItemId);
                if (blogItem == null) return;

                sctDate.Item = blogItem;
                sctTitle.Item = blogItem;
                sctStrapline.Item = blogItem;
                sctShortText.Item = blogItem;
                sctMainText.Item = blogItem;
                sctImage.Item = blogItem;
            }
        }
    }
}