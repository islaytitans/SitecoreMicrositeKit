using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class SubNav : NavigationControlBase
    {
        private Item _rootItem;
        public Item RootItem
        {
            get
            {
                if (_rootItem == null && Datasource == null)
                {
                    var homeSubItems = Nodes.MicrositeHomeItem.Children;

                    if (homeSubItems.Select(x => x.ID.ToString()).Contains(Sitecore.Context.Item.ID.ToString()))
                    {
                        _rootItem = Sitecore.Context.Item;
                    }
                    else
                    {
                        _rootItem = homeSubItems.FirstOrDefault(x => x.Axes.IsAncestorOf(Sitecore.Context.Item));
                    }
                }
                else if (Datasource != null)
                {
                    _rootItem = Datasource;
                }

                return _rootItem;
            }
        }

        private IEnumerable<Item> _topLevelItems;
        public IEnumerable<Item> TopLevelItems
        {
            get
            {
                if (_topLevelItems == null)
                {
                    _topLevelItems = RootItem.Children.Where(DisplayItemInNavigation);
                }

                return _topLevelItems;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                if (TopLevelItems.Any())
                {
                    DataBindRepeater(TopLevelItems, rptSubNav);
                }
                else
                {
                    Visible = false;
                }
            }
        }

        private void DataBindRepeater(IEnumerable<Item> items, Repeater rpt)
        {
            rpt.DataSource = items;
            rpt.DataBind();
        }

        protected void rptSubNav_ItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            if (e.Item.ItemType != ListItemType.Item && e.Item.ItemType != ListItemType.AlternatingItem)
                return;

            var item = (Item)e.Item.DataItem;
            if (item == null)
                return;

            var link = (HyperLink)e.Item.FindControl("lnkSubNav");

            link.NavigateUrl = LinkManager.GetItemUrl(item);
            link.Text = item[Enumerators.SitecoreConfig.Fields.Global.NavigationLinkText];

            if (!Sitecore.Context.Item.Axes.IsDescendantOf(item) &&
                Sitecore.Context.Item.ID != item.ID)
                return;

            if (Sitecore.Context.Item.ID == item.ID)
                link.CssClass = "children open selected";

            var rpt = (Repeater)e.Item.FindControl("rptSubNav");

            if (rpt == null)
                return;

            var childItems = item.Children.Where(DisplayItemInNavigation);

            DataBindRepeater(childItems, rpt);
        }
    }
}