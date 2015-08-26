using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class MainNavigation : NavigationSublayoutBase
    {
        private IEnumerable<Item> _navigationDatasource;
        protected IEnumerable<Item> NavigationDatasource
        {
            get
            {
                if (_navigationDatasource == null)
                {
                    var mlf = (MultilistField) Datasource.Fields[Enumerators.SitecoreConfig.Fields.Global.LinkItems];

                    _navigationDatasource = mlf.GetItems().Where(DisplayItemInNavigation);
                }

                return _navigationDatasource;
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
                    hlNavigation.Text = item[Enumerators.SitecoreConfig.Fields.Global.NavigationLinkText];

                    bool setSelectedClass = false;
                    Item contextItem = Sitecore.Context.Item;

                    if (Nodes.MicrositeHomeItem.ID == contextItem.ID && Nodes.MicrositeHomeItem.ID == item.ID)
                    {
                        setSelectedClass = true;
                    }
                    else if (item.ID != Nodes.MicrositeHomeItem.ID)
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
    }
}