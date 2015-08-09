using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class SubNav : MicrositeControlBase
    {
        public SubNav()
        {
            ObjectFactory.Initialize(x =>
            {
                x.For<IWorkflowManager>().Use<WorkflowManager>();
            });
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                SetUpSubNav();
            }
        }

        private void SetUpSubNav()
        {
            IEnumerable<Item> topLevelItems = null;

            var microSiteItem = GetMicroSiteItem(Sitecore.Context.Item);
            Item rootItem;

            if (microSiteItem == null)
            {
                rootItem = GetRootItem(ItemNodes.SiteHome.ID);

                if (rootItem == null)
                {
                    Visible = false;
                    return;
                }
            }
            else
            {
                rootItem = GetRootItem(microSiteItem.ID);
            }

            if (rootItem != null)
                topLevelItems = GetAllowedChildItems(rootItem);

            if (topLevelItems == null || !topLevelItems.Any())
            {
                Visible = false;
                return;
            }

            DataBind(topLevelItems, rptSubNav);
        }

        private Item GetRootItem(ID homeItemId)
        {
            var homeItem = Sitecore.Context.Database.GetItem(homeItemId);
            var topLevelItems = homeItem.Children;
            var currentItemId = Sitecore.Context.Item.ID.ToString();

            if (topLevelItems.Select(x => x.ID.ToString()).Contains(currentItemId))
                return Sitecore.Context.Database.GetItem(currentItemId);

            return topLevelItems.FirstOrDefault(x => x.Axes.IsAncestorOf(Sitecore.Context.Item));
        }

        private Item GetMicroSiteItem(Item currentItem)
        {
            if (currentItem.TemplateID == Microsite.MicroSiteHomePageTemplateGuid)
            {
                return currentItem;
            }

            return currentItem.
                   Axes.
                   GetAncestors().FirstOrDefault(x => x.TemplateID == Microsite.MicroSiteHomePageTemplateGuid);
        }

        private IEnumerable<Item> GetAllowedChildItems(Item rootItem)
        {
            return rootItem.Children.Where(i =>
                NavDisplayAllowed(i)
                && ValidWorkflowState(i));
        }

        private bool ValidWorkflowState(Item item)
        {
            return true;

            //TODO enable workflow check when default fields are returning
            var sitecoreWorkflowManager = ObjectFactory.GetInstance<IWorkflowManager>();

            WorkflowState workflowState = sitecoreWorkflowManager.GetWorkflowStateForItem(item);

            if (workflowState != null && workflowState.FinalState)
                return true;
            return false;
        }

        private void DataBind(IEnumerable<Item> items, Repeater rpt)
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
            link.Text = item["Navigation link text"];

            if (!Sitecore.Context.Item.Axes.IsDescendantOf(item) &&
                Sitecore.Context.Item.ID != item.ID)
                return;

            if (Sitecore.Context.Item.ID == item.ID)
                link.CssClass = "children open selected";

            var rpt = (Repeater)e.Item.FindControl("rptSubNav");

            if (rpt == null)
                return;

            var childItems = GetAllowedChildItems(item);

            DataBind(childItems, rpt);
        }

        private bool NavDisplayAllowed(Item item)
        {
            if (item == null)
                return false;

            return item["Nav display"] == "1";
        }
    }
}