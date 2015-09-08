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
        public List<ID> Ancestors { get; set; }
        public IEnumerable<ID> Templates { get; set; }

        //TODO remove
        /// <summary>
        /// FieldValue, FieldName
        /// </summary>
        public Dictionary<string, string> PostFieldFilters { get; set; }

        public SitecoreSearchParameters()
        {
            Term = string.Empty;
            Ancestors = new List<ID>();
            Templates = new List<ID>();
            PostFieldFilters = new Dictionary<string, string>();
        }
    }
}
