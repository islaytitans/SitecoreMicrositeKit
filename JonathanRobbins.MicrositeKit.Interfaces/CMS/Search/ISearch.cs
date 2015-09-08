using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.Entities.Search;

namespace JonathanRobbins.MicrositeKit.Interfaces.CMS.Search
{
    public interface ISearch
    {
        SearchResultsCollection<CustomSearchResultItem> Search(SitecoreSearchParameters sitecoreSearchParameters);
    }
}
