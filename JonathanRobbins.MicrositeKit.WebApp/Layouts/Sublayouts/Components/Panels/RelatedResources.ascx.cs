using System;
using System.Collections.Generic;
using System.Linq;
using JonathanRobbins.MicrositeKit.CMS.Extensions;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Panels
{
    public partial class RelatedResources : MicrositeSublayoutBase
    {
        private IEnumerable<MediaItem> _relatedResourcesDatasource;
        protected IEnumerable<MediaItem> RelatedResourcesDatasource
        {
            get
            {
                if (_relatedResourcesDatasource != null)
                    return _relatedResourcesDatasource;

                _relatedResourcesDatasource = null;

                var item = ResolveDatasourceOfField(Enumerators.SitecoreConfig.Fields.Global.Resources);

                if (item != null &&
                    item.Fields[Enumerators.SitecoreConfig.Fields.Global.Resources] != null &&
                    !string.IsNullOrEmpty(item[Enumerators.SitecoreConfig.Fields.Global.Resources]))
                {
                    _relatedResourcesDatasource = item.Fields[Enumerators.SitecoreConfig.Fields.Global.Resources]
                        .GetItems()
                        .Select(x => (MediaItem)x);
                }

                return _relatedResourcesDatasource;
            }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            sctLegend.Item = Datasource;
            if (!Page.IsPostBack)
            {
                PopulateRepeater();
            }
        }

        private void PopulateRepeater()
        {
            if (RelatedResourcesDatasource != null && RelatedResourcesDatasource.Any())
            {
                divResources.Visible = true;

                rptRelatedResources.DataSource = RelatedResourcesDatasource;
                rptRelatedResources.DataBind();
            }
            else
            {
                divResources.Visible = false;
            }
        }
    }
}