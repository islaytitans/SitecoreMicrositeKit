using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.Interfaces.CMS.Links
{
    public interface IWildCardLinkManager
    {
        bool IsWildCardItem(Item item);
        string GetWildCardUrl(Item item);
        Item GetWildCardItem(string wildCardPath);
    }
}
