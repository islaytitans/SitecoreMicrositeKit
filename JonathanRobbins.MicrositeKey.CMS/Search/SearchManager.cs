using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.Entities.Search;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Search;

namespace JonathanRobbins.MicrositeKit.CMS.Search
{
    public class SearchManager
    {
        public ISearch SearchProvider { get; set; }

        public SearchManager(ISearch searchProvider)
        {
            SearchProvider = searchProvider;
        }

        public SearchResultsCollection<CustomSearchResultItem> Search(SitecoreSearchParameters sitecoreSearchParameters)
        {
            return SearchProvider.Search(sitecoreSearchParameters);
        }
    }
}
