using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore;
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

            //TODO check for wildcard page
            if (Context.Item != null 
                || Context.Database == null 
                || args.Url.ItemPath.Length == 0) 
                return;
        }
    }
}
