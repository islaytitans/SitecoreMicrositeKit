using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JonathanRobbins.MicrositeKit.CMS.Extensions
{
    public static class ItemExtensions
    {
        public static DateTime GetDate(this Sitecore.Data.Items.Item item, string field)
        {
            Sitecore.Data.Fields.DateField dateField = item.Fields[field];
            if (dateField != null)
                return dateField.DateTime;

            return DateTime.MinValue;
        }
    }
}
