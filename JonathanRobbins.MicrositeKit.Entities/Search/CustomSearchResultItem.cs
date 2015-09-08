using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.ContentSearch;
using Sitecore.ContentSearch.SearchTypes;
using Sitecore.Data;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.Entities.Search
{
    public class CustomSearchResultItem : SearchResultItem
    {
        [IndexField("ancestors")]
        public List<ID> Ancestors { get; set; }

        public ID Category { get; set; }

        public Item CategoryItem
        {
            get
            {
                Item categoryItem = null;

                if (Category != ID.Null)
                {
                    categoryItem = Sitecore.Context.Database.GetItem(Category);
                }

                return categoryItem;
            }
        }
    }
}
