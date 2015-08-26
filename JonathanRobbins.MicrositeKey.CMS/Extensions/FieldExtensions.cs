using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;

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

        public static IEnumerable<Item> GetItems(this Field field)
        {
            if (field == null || string.IsNullOrEmpty(field.Value))
                return new List<Item>();

            List<string> sitecoreGuids = field.Value
                .Split(new string[] { "|" }, StringSplitOptions.RemoveEmptyEntries).ToList();

            return (from g in sitecoreGuids
                    where !string.IsNullOrEmpty(g)
                    select Sitecore.Context.Database.GetItem(g)).ToList();
        }
    }
}
