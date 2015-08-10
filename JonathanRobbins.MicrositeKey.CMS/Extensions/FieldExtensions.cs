using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.Data.Fields;

namespace JonathanRobbins.MicrositeKit.CMS.Extensions
{
    public static class FieldExtensions
    {
        public static string GetUrl(this LinkField linkField)
        {
            switch (linkField.LinkType.ToLower())
            {
                case "internal":
                    return linkField.TargetItem != null ? Sitecore.Links.LinkManager.GetItemUrl(linkField.TargetItem) : string.Empty;
                case "media":
                    return linkField.TargetItem != null ? Sitecore.Resources.Media.MediaManager.GetMediaUrl(linkField.TargetItem) : string.Empty;
                case "external":
                    return linkField.Url;
                case "anchor":
                    return !string.IsNullOrEmpty(linkField.Anchor) ? "#" + linkField.Anchor : string.Empty;
                case "javascript":
                    return linkField.Url;
                default:
                    return linkField.Url;
            }
        }
    }
}
