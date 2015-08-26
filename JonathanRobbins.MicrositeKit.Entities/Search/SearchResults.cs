using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.Entities.Exceptions;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.Entities.Search
{
    [Serializable]
    public class SearchResults
    {
        public IEnumerable<Item> ResultsCollection { get; set; }
        public SitecoreSearchException SitecoreSearchException { get; set; }

        public SearchResults()
        {
            SitecoreSearchException = null;
        }
    }
}
