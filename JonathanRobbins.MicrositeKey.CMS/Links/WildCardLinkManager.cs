using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.CMS.Search;
using JonathanRobbins.MicrositeKit.Entities.Search;
using JonathanRobbins.MicrositeKit.Enumerators.Search;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Links;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Search;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Links;
using StructureMap;

namespace JonathanRobbins.MicrositeKit.CMS.Links
{
    public class WildCardLinkManager : IWildCardLinkManager
    {
        public WildCardLinkManager()
        {
            ObjectFactory.Initialize(x =>
            {
                x.For<ISearchUtility>().Use<SearchUtility>();
            });
        }

        public bool IsWildCardItem(Item item)
        {
            Assert.IsNotNull(item, "item");

            bool isWildCard = item.TemplateID.Equals(Templates.MicroSiteEventDetailsId)
                || item.TemplateID.Equals(Templates.MicroSiteBlogDetailsId)
                || item.TemplateID.Equals(Templates.MicroSiteNewsDetailsId);

            return isWildCard;
        }

        public string GetWildCardUrl(Item item)
        {
            Assert.IsNotNull(item, "item");

            var uri = new Uri(LinkManager.GetItemUrl(item));

            // Need to get Details page

            // Pass in details page?

            // Pass name of item to details page

            //TODO appent name of item to last segment

            return uri.ToString();
        }

        public Item GetItem(string wildCardUrl)
        {
            Assert.IsNotNullOrEmpty(wildCardUrl, "wildCardUrl");

            Uri uri = new Uri(wildCardUrl);
            var searchUtility = ObjectFactory.GetInstance<ISearchUtility>();

            var sitecoreSearchParameters = new SitecoreSearchParameters()
            {
                IndexName = Sitecore.Context.Database.Name.Equals("web", StringComparison.InvariantCultureIgnoreCase) ? Indexes.WildCardWeb : Indexes.WildCardMaster,
                Term = uri.Segments.LastOrDefault(),
                Templates = DetermineContentType(Sitecore.Context.Item.TemplateID)
            };

            var searchResults = searchUtility.Search(sitecoreSearchParameters);

            return searchResults.ResultsCollection.FirstOrDefault();
        }

        private IEnumerable<ID> DetermineContentType(ID templateId)
        {
            var contentTemplateIds = new List<ID>(); 

            if (templateId.Equals(Templates.MicroSiteBlogDetailsId))
            {
                contentTemplateIds.Add(Templates.MicroSiteBlogId);
            }
            else if (templateId.Equals(Templates.MicroSiteEventDetailsId))
            {
                contentTemplateIds.Add(Templates.MicroSiteEventId);
            }
            else if (templateId.Equals(Templates.MicroSiteNewsDetailsId))
            {
                contentTemplateIds.Add(Templates.MicroSiteNewsId);
            }
            else
            {
                contentTemplateIds.Add(Templates.MicroSiteBlogId);
                contentTemplateIds.Add(Templates.MicroSiteEventId);
                contentTemplateIds.Add(Templates.MicroSiteNewsId);
            }

            return contentTemplateIds;
        }
    }
}
