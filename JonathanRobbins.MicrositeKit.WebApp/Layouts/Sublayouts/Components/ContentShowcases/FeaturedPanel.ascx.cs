using System;
using System.Linq;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.ContentShowcases
{
    public partial class FeaturedPanel : MicrositeSublayoutBase
    {
        private string _dateField;
        public string DateField
        {
            get
            {
                if (string.IsNullOrEmpty(_dateField))
                {
                    if (Datasource.TemplateID == Templates.MicroSiteNewsListingId || Datasource.TemplateID == Templates.MicroSiteBlogListingId)
                    {
                        _dateField = Enumerators.SitecoreConfig.Fields.Global.Date;
                    }
                    else if (Datasource.TemplateID == Templates.MicroSiteEventListingId)
                    {
                        _dateField = Enumerators.SitecoreConfig.Fields.Global.StartDate;
                    }
                    else
                    {
                        _dateField = Enumerators.SitecoreConfig.Fields.Global.CreatedDate;
                    }
                }

                return _dateField;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            BindSitecoreControls();
            if (!Page.IsPostBack)
            {
                PopulateFields();
                SetUpLinks();
            }
        }

        private void PopulateFields()
        {
            //sciImage.Item = Datasource;
            //sctTitle.Item = Datasource;
            //scdDate.Item = Datasource;
            //sctShortText.Item = Datasource;
        }

        private void SetUpLinks()
        {
            hlReadMore.Text = Nodes.MicrositesMicrositesDictionaryItem[Enumerators.SitecoreConfig.Fields.Global.ReadMore];

            Item parentItem;
            Item destinationItem = null;
            string url = string.Empty;

            //TODO consider wildcard item
            if (Datasource.TemplateID == Templates.MicroSiteNewsListingId)
            {
                parentItem =
                    Nodes.MicrositeHomeItem.GetChildren()
                        .FirstOrDefault(i => i.TemplateID.Equals(Templates.MicroSiteNewsListingId));

                if (parentItem != null)
                {
                    destinationItem = parentItem.GetChildren()
                        .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteNewsDetailsId);
                }
            }
            else if (Datasource.TemplateID == Templates.MicroSiteEventListingId)
            {
                parentItem =
                    Nodes.MicrositeHomeItem.GetChildren()
                        .FirstOrDefault(i => i.TemplateID.Equals(Templates.MicroSiteEventListingId));

                if (parentItem != null)
                {
                    destinationItem = parentItem.GetChildren()
                        .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteEventDetailsId);
                }
            }
            else if (Datasource.TemplateID == Templates.MicroSiteBlogListingId)
            {
                parentItem =
                    Nodes.MicrositeHomeItem.GetChildren()
                        .FirstOrDefault(i => i.TemplateID.Equals(Templates.MicroSiteBlogListingId));

                if (parentItem != null)
                {
                    destinationItem = parentItem.GetChildren()
                        .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteBlogDetailsId);
                }
            }

            url = destinationItem != null
                ? string.Format("{0}?{1}={2}", LinkManager.GetItemUrl(destinationItem), QueryStrings.Guid,
                    Datasource.ID)
                : LinkManager.GetItemUrl(Datasource);

            hlReadMore.NavigateUrl = url;
            hlImage.NavigateUrl = url;
            hlTitle.NavigateUrl = url;
        }
    }
}