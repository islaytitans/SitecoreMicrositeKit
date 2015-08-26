using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Fields;
using Sitecore;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.CMS.Items
{
    public class ItemComparer : IComparer
    {
        public int Compare(object x, object y)
        {
            Item item1 = x as Item;
            Item item2 = y as Item;
            return String.Compare(item1.Name, item2.Name);
        }

        public int CompareCreatedDate(object x, object y)
        {
            Item item1 = x as Item;
            Item item2 = y as Item;

            DateTime item1CreatedDate = DateUtil.IsoDateToDateTime(item1[Global.CreatedDate]);
            DateTime item2CreatedDate = DateUtil.IsoDateToDateTime(item2[Global.CreatedDate]);

            return DateTime.Compare(item1CreatedDate, item2CreatedDate);
        }

        public int CompareStartDate(Item x, Item y)
        {
            Item item1 = x as Item;
            Item item2 = y as Item;

            DateTime item1CreatedDate = DateUtil.IsoDateToDateTime(item1[Global.StartTime]);
            DateTime item2CreatedDate = DateUtil.IsoDateToDateTime(item2[Global.StartTime]);

            return DateTime.Compare(item1CreatedDate, item2CreatedDate);
        }

        public int CompareDate(Item x, Item y)
        {
            Item item1 = x as Item;
            Item item2 = y as Item;

            DateTime item1CreatedDate = DateUtil.IsoDateToDateTime(item1[Global.Date]);
            DateTime item2CreatedDate = DateUtil.IsoDateToDateTime(item2[Global.Date]);

            return DateTime.Compare(item1CreatedDate, item2CreatedDate);
        }
    }
}
