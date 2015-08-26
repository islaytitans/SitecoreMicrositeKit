using System;
using System.Collections.Generic;
using System.Linq;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class ReleatedResources : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            sctLegend.Item = MicrositeDictionaryItem;
            if (!Page.IsPostBack)
            {
                PopulateRepeater();
            }
        }

        private void PopulateRepeater()
        {
            rptRelatedResources.DataSource = RelatedResourcesDatasource;
            rptRelatedResources.DataBind();

           divResources.Visible = RelatedResourcesDatasource != null && RelatedResourcesDatasource.Any();
        }

        private IEnumerable<MediaItem> _relatedResourcesDatasource;
        protected IEnumerable<MediaItem> RelatedResourcesDatasource
        {
            get
            {
                if (_relatedResourcesDatasource != null)
                    return _relatedResourcesDatasource;

                _relatedResourcesDatasource = null;

                Field field = GetResoucesField();

                if (field != null && !string.IsNullOrEmpty(field.Value))
                {
                    _relatedResourcesDatasource = (Business.SitecoreHelp.Utilities.GetItemsFromPipeSeparatedList(field)).Select(x => (MediaItem)x);
                }

                return _relatedResourcesDatasource;
            }
        }

        private Field GetResoucesField()
        {
            Field field = null;

            field = Sitecore.Context.Item.Fields["Resources"];
            if (field != null) return field;

            if (Datasource != null)
            {
                field = Datasource.Fields["Resources"];
                if (field != null) return field;
            }

            string itemId = ApplyParameterIfPresent(QueryStringNames.Guid);

            if (!string.IsNullOrEmpty(itemId))
            {
                Item item = Sitecore.Context.Database.GetItem(itemId);
                field = item.Fields["Resources"];
                if (field != null) return field;
            }

            return field;
        }
    }
}