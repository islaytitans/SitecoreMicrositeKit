using System;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.ContentBlocks
{
    public partial class VideoPlayer : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                if (Datasource != null)
                {
                    Item videoItem = ResolveDatasourceOfField("Youtube video ID");
                    if (videoItem != null)
                    {
                        PopulateFields(videoItem);
                        BindYoutubeVideo(videoItem);
                    }
                }
            }
        }

        private void BindYoutubeVideo(Item videoItem)
        {
            string videoId = videoItem["Youtube video ID"];
            string script = "<iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/{0}?rel=0\" frameborder=\"0\" allowfullscreen></iframe>";

            litYoutube.Text = string.Format(script, videoId);
        }

        private void PopulateFields(Item videoItem)
        {
            sctShortText.Item = videoItem;
            sctTitle.Item = videoItem;
        }
    }
}