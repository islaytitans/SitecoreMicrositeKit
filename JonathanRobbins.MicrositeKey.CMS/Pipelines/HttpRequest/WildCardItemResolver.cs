using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.CMS.Links;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Links;
using Sitecore;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Pipelines.HttpRequest;

namespace JonathanRobbins.MicrositeKit.CMS.Pipelines.HttpRequest
{
    public class WildCardItemResolver : HttpRequestProcessor
    {
        public override void Process(HttpRequestArgs args)
        {
            if (Context.Site.Name.Equals("shell", StringComparison.InvariantCultureIgnoreCase))
                return;

            Assert.ArgumentNotNull(args, "args");

            IWildCardLinkManager wildCardLinkManager = new WildCardLinkManager();

            if (Context.Database == null 
                || args.Url.ItemPath.Length == 0
                || !wildCardLinkManager.IsWildCardItem(Context.Item)) 
                return;

            Item wildCardItem = wildCardLinkManager.GetWildCardItem(args.Url.FilePath);

            if (wildCardItem != null)
                Context.Item = wildCardItem;
        }
    }
}
