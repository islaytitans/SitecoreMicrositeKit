using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Links;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.CMS.Links
{
    public class WildCardLinkManager : IWildCardLinkManager
    {
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

            //TODO use Wildcard index to search for matching item based on url passed

            return null;
        }
    }
}
