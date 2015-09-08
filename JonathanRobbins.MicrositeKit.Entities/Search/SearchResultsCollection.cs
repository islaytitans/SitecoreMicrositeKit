using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.ContentSearch.Linq;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.Entities.Search
{
    public class SearchResultsCollection<TSource>
    {
        public IEnumerable<SearchHit<TSource>> Hits { get; set; }
        public FacetResults Facets { get; set; }
        public int TotalResults { get; set; }
    }
}
