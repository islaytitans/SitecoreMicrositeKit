using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.Enumerators.Search;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using Sitecore.Data;

namespace JonathanRobbins.MicrositeKit.Entities.Search
{
    [Serializable]
    public class SitecoreSearchParameters
    {
        public string Term { get; set; }
        public ID Location { get; set; }
        public IEnumerable<ID> Templates { get; set; }

        public string IndexName { get; set; }
        /// <summary>
        /// FieldValue, FieldName
        /// </summary>
        public Dictionary<string, string> PostFieldFilters { get; set; }

        public SitecoreSearchParameters()
        {
            Term = String.Empty;
            Location = Sitecore.ItemIDs.ContentRoot;
            Templates = new List<ID>();
            IndexName = Indexes.Web;
            PostFieldFilters = new Dictionary<string, string>();
        }

    }
}
