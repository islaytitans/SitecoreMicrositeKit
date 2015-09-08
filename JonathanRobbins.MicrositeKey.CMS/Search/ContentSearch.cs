using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using JonathanRobbins.MicrositeKit.Entities.Search;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Search;
using Sitecore.ContentSearch;
using Sitecore.ContentSearch.Linq;
using Sitecore.ContentSearch.Linq.Utilities;
using Sitecore.Data;

namespace JonathanRobbins.MicrositeKit.CMS.Search
{
    public class ContentSearch : ISearch
    {
        private ISearchIndex Index { get; set; }

        public string Keyword { get; set; }

        private List<ID> _includeTemplates = new List<ID>();
        public IEnumerable<ID> IncludeTemplates
        {
            get { return _includeTemplates; } 
            set { _includeTemplates = value.ToList(); }
        }

        private List<ID> _ancestors = new List<ID>();
        public IEnumerable<ID> Ancestors
        {
            get { return _ancestors; }
            set { _ancestors = value.ToList(); }
        }

        public ContentSearch(string indexName)
        {
            if (string.IsNullOrWhiteSpace(indexName))
                throw new Exception("Index name cannot be empty");

            Index = ContentSearchManager.GetIndex(indexName);
        }

        public SearchResultsCollection<CustomSearchResultItem> Search(SitecoreSearchParameters sitecoreSearchParameters)
        {
            IncludeTemplates = sitecoreSearchParameters.Templates;
            Ancestors = sitecoreSearchParameters.Ancestors;
            Keyword = sitecoreSearchParameters.Term;

            using (var index = Index.CreateSearchContext())
            {
                IQueryable<CustomSearchResultItem> query = BuildQuery(index);

                //query = AppendFacets(query);

                var searchResults = query.GetResults();

                return new SearchResultsCollection<CustomSearchResultItem>()
                {
                    Hits = searchResults.Hits.ToList(),
                    Facets = searchResults.Facets,
                    TotalResults = searchResults.TotalSearchResults,
                };
            }
        }

        private IQueryable<CustomSearchResultItem> BuildQuery(IProviderSearchContext index)
        {
            var predicate = PredicateBuilder.True<CustomSearchResultItem>();

            if (IncludeTemplates != null && IncludeTemplates.Any())
            {
                var templatePredicate = PredicateBuilder.False<CustomSearchResultItem>();
                foreach (ID templateId in IncludeTemplates)
                    templatePredicate = templatePredicate.Or(i => i.TemplateId == templateId);
                predicate = predicate.And(templatePredicate);
            }

            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                var keywordPredicate = PredicateBuilder.False<CustomSearchResultItem>();
                foreach (string term in Keyword.Split(' '))
                    keywordPredicate = keywordPredicate.Or(i => i.Content.Contains(term));

                predicate = predicate.And(keywordPredicate);
            }

            if (Ancestors != null && Ancestors.Any())
            {
                var ancestorsPredicate = PredicateBuilder.False<CustomSearchResultItem>();
                foreach (ID ancestorId in Ancestors)
                    ancestorsPredicate = ancestorsPredicate.Or(i => i.Ancestors.Contains(ancestorId));

                predicate = predicate.And(ancestorsPredicate);
            }

            IQueryable<CustomSearchResultItem> query = index.GetQueryable<CustomSearchResultItem>().Filter(predicate);

            return query;
        }

        //private IQueryable<CustomSearchResultItem> AppendFacets(IQueryable<CustomSearchResultItem> query)
        //{
        //    var queryStringFilters = QueryString.AllKeys.SelectMany(QueryString.GetValues,
        //        (k, v) => new {key = k, value = HttpUtility.UrlDecode(v)});

        //    foreach (var filter in queryStringFilters.Where(f => !string.IsNullOrEmpty(f.value)))
        //    {
        //        string[] valueArray = StringExtensions.ConvertIdStringToArray(filter.value);
        //        query = query.Where(!face)
        //    }
        //}
    }
}
