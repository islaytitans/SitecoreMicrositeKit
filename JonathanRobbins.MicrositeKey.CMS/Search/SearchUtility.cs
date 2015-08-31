using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.Entities.Exceptions;
using JonathanRobbins.MicrositeKit.Entities.Search;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Search;
using Sitecore.ContentSearch;
using Sitecore.ContentSearch.Linq;
using Sitecore.ContentSearch.Linq.Utilities;
using Sitecore.ContentSearch.SearchTypes;
using Sitecore.Data.Items;
using Sitecore.SecurityModel;

namespace JonathanRobbins.MicrositeKit.CMS.Search
{
    public class SearchUtility : ISearchUtility
    {
        private static ISearchIndex _index;

        private static ISearchIndex Index
        {
            get
            {
                if (_index == null)
                {
                    _index = ContentSearchManager.GetIndex("sitecore_web_index");
                }

                return _index;
            }
        }

        public SearchResults Search(SitecoreSearchParameters searchParameters)
        {
            var searchResults = new SearchResults();

            try
            {
                searchResults.ResultsCollection = PerformAdvancedMultiFieldSearch(searchParameters);

                searchResults.ResultsCollection = ApplyPostFilters(searchResults.ResultsCollection.ToList(), searchParameters);
            }
            catch (Exception e)
            {
                searchResults.SitecoreSearchException = new SitecoreSearchException(
                    e.Message,
                    e.Source,
                    e.StackTrace,
                    true,
                    e.InnerException == null
                        ? new SitecoreSearchException()
                        : new SitecoreSearchException(e.InnerException.Message,
                                                      e.InnerException.Source,
                                                      e.InnerException.StackTrace,
                                                      true));
            }

            return searchResults;
        }

        private IEnumerable<Item> ApplyPostFilters(List<Item> resultsCollection, SitecoreSearchParameters searchParameters)
        {
            if (searchParameters.PostFieldFilters.Any())
            {
                resultsCollection = FilterFields(resultsCollection, searchParameters).ToList();
            }

            return resultsCollection;
        }

        private IEnumerable<Item> FilterFields(IEnumerable<Item> resultsCollection, SitecoreSearchParameters searchParameters)
        {
            var itemsToKeep = new List<Item>();

            Dictionary<string, List<string>> groupedFields =
                searchParameters.PostFieldFilters.GroupBy(r => r.Value)
                                .ToDictionary(t => t.Key, t => t.Select(r => r.Key).ToList());

            foreach (KeyValuePair<string, List<string>> keyValuePair in groupedFields)
            {
                foreach (string value in keyValuePair.Value)
                {
                    itemsToKeep.AddRange(resultsCollection.Where(i => i != null
                                                && (i[keyValuePair.Key].ToLower().Contains(value.ToLower())))
                                    .ToList());
                }
            }

            return itemsToKeep.Distinct();
        }

        private List<Item> PerformAdvancedMultiFieldSearch(SitecoreSearchParameters searchParameters)
        {
            using (new SecurityDisabler())
            {
                using (var context = Index.CreateSearchContext())
                {
                    var returnItems = new List<Item>();
                    var predicate = PredicateBuilder.True<SearchResultItem>();
                    predicate = predicate.And(t => t.Language == Sitecore.Context.Language.Name);

                    predicate = predicate.And(t => t.Paths.Contains(searchParameters.Location));

                    if (searchParameters.Templates.Any())
                    {
                        var innerPredicate = PredicateBuilder.True<SearchResultItem>();
                        foreach (var templateId in searchParameters.Templates)
                        {
                            innerPredicate = innerPredicate.Or(f => f.TemplateId == templateId);
                        }
                        predicate = predicate.And(innerPredicate);
                    }

                    var query = context.GetQueryable<SearchResultItem>().Filter(predicate);

                    returnItems =
                        query.GetResults().Hits.Select(item => Sitecore.Context.Database.GetItem(item.Document.ItemId))
                             .Where(item => item != null).ToList();

                    return returnItems;

                }
            }
        }
    }
}
