using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class MainNavigation : MicrositeControlBase
    {
        protected IEnumerable<Item> NavigationDatasource
        {
            get
            {
                List<Item> items = SiteHomeItem.GetChildren().ToList();
                items.Insert(0, SiteHomeItem);

                return items.Where(NavDisplayAllowed);
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                if (!IsLoginPage)
                {
                    SetUpNavigation();
                }
                else
                {
                    phNavigation.Visible = false;
                }
            }
        }

        private void SetUpNavigation()
        {
            rptNavigation.DataSource = NavigationDatasource;
            rptNavigation.DataBind();
        }

        protected void rptNavigation_OnItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            if (e.Item.ItemType != ListItemType.Item && e.Item.ItemType != ListItemType.AlternatingItem)
                return;

            var item = (Item)e.Item.DataItem;

            if (item != null)
            {
                var hlNavigation = (HyperLink)e.Item.FindControl("hlNavigation");

                if (hlNavigation != null)
                {
                    hlNavigation.NavigateUrl = LinkManager.GetItemUrl(item);
                    hlNavigation.Text = item["Navigation link text"];

                    bool setSelectedClass = false;
                    Item contextItem = Sitecore.Context.Item;

                    if (SiteHomeItem.ID == contextItem.ID && SiteHomeItem.ID == item.ID)
                    {
                        setSelectedClass = true;
                    }
                    else if (item.ID != SiteHomeItem.ID)
                    {
                        if (contextItem.ID == item.ID)
                        {
                            setSelectedClass = true;
                        }
                        else if (contextItem.Axes.IsDescendantOf(item))
                        {
                            setSelectedClass = true;
                        }
                    }

                    if (setSelectedClass)
                        hlNavigation.CssClass = "selected";
                }
            }
        }

        private bool NavDisplayAllowed(Item item)
        {
            if (item == null)
                return false;

            return item["Nav display"] == "1";
        }
    }
}