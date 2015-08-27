using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Pipelines.GetRenderingDatasource;
using Sitecore.Text;

namespace JonathanRobbins.MicrositeKit.CMS.Pipelines.GetRenderingDatasource
{
    public class GetDatasourceLocations
    {
        private string DatasourceLocation { get; set; }
        private string ContextItemPath { get; set; }
        private Database ContextDatabase { get; set; }
        private List<Item> DatasourceLocations { get; set; }
        private const string QueryPrefix = "query:.";

        private bool DataSourceLocationContainsQuery
        {
            get
            {
                return DatasourceLocation.Contains(QueryPrefix);
            }
        }

        public void Process(GetRenderingDatasourceArgs args)
        {
            Assert.IsNotNull(args, "args");

            DatasourceLocation = args.RenderingItem["Datasource Location"];
            ContextItemPath = args.ContextItemPath;
            ContextDatabase = args.ContentDatabase;
            DatasourceLocations = args.DatasourceRoots;

            if (DataSourceLocationContainsQuery)
            {
                ProcessQuerys();
            }
        }

        private void ProcessQuerys()
        {
            var queries = new ListString(DatasourceLocation);
            foreach (string query in queries)
            {
                if (query.StartsWith(QueryPrefix))
                {
                    ProcessQuery(query);
                }
            }
        }

        private void ProcessQuery(string query)
        {
            var datasourceLocations = GetDatasourceLocationsFromQuery(query).ToList();
            if (datasourceLocations.Any())
            {
                foreach (Item datasourceLocation in datasourceLocations)
                {
                    if (!DatasourceLocations.Exists(x => x.ID.Equals(datasourceLocation.ID)))
                    {
                        DatasourceLocations.Add(datasourceLocation);
                    }
                }
            }
        }

        private IEnumerable<Item> GetDatasourceLocationsFromQuery(string query)
        {
            string queryPath = query.Replace(QueryPrefix, ContextItemPath);
            return ContextDatabase.SelectItems(queryPath);
        }
    }
}
