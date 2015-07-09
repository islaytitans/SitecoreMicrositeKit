using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;
using Sitecore.Links;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class Breadcrumb : MicrositeControlBase
    {
        private const string Separator = ">";

        private IEnumerable<Item> _breadcrumbSource;
        public IEnumerable<Item> BreadcrumbSource
        {
            get
            {
                if (_breadcrumbSource == null || !_breadcrumbSource.Any())
                {
                    var ascendants = new List<Item>();

                    var currentItem = Sitecore.Context.Item;
                    var contentGuid = Sitecore.Context.Database.GetItem(Sitecore.Constants.ContentPath).ID;
                    var rootGuid = Sitecore.Context.Database.GetItem(Sitecore.Constants.SitecorePath).ID;

                    while (currentItem.ID != contentGuid && currentItem.ID != rootGuid &&
                           currentItem.ParentID != contentGuid)
                    {
                        ascendants.Add(currentItem);
                        currentItem = currentItem.Parent;
                    }
                    ascendants.Reverse();
                    _breadcrumbSource = ascendants;
                }
                return _breadcrumbSource;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                BindBreadcrumb();
            }
        }

        private void BindBreadcrumb()
        {
            rpBreadcrumb.DataSource = BreadcrumbSource;
            rpBreadcrumb.DataBind();
        }

        protected void rpBreadcrumb_ItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            if (e.Item.ItemType != ListItemType.Item && e.Item.ItemType != ListItemType.AlternatingItem)
                return;

            var item = e.Item.DataItem as Item;
            if (item == null)
                return;

            if (item.ID == Sitecore.Context.Item.ID)
            {
                var liTag = e.Item.FindControl("liTag") as HtmlGenericControl;
                if (liTag != null) liTag.Attributes.Add("class", "Current");

                var ltlBreadcrumb = e.Item.FindControl("ltlBreadcrumb") as Literal;
                if (ltlBreadcrumb != null)
                {
                    Item navigationTextItem = RetrieveItemContainingField("Navigation link text");
                    if (navigationTextItem != null)
                        ltlBreadcrumb.Text = navigationTextItem["Navigation link text"];
                }
            }
            else
            {
                var hlBreadcrumb = e.Item.FindControl("hlBreadcrumb") as HyperLink;

                if (hlBreadcrumb != null)
                {
                    if (!string.IsNullOrEmpty(item["Navigation link text"]))
                    {
                        hlBreadcrumb.Text = item["Navigation link text"];
                    }
                    else if (DataSource != null && !string.IsNullOrEmpty(DataSource["Navigation link text"]))
                    {
                        hlBreadcrumb.Text = DataSource["Navigation link text"];
                    }
                    else if (ParameterIsPopulated(QueryStrings.Guid))
                    {
                        string guid = ApplyParameterIfPresent(QueryStrings.Guid);

                        Item paramItem = Sitecore.Context.Database.GetItem(guid);

                        if (paramItem != null && !string.IsNullOrEmpty(paramItem["Navigation link text"]))
                        {
                            hlBreadcrumb.Text = paramItem["Navigation link text"];
                        }
                    }
                    hlBreadcrumb.NavigateUrl = LinkManager.GetItemUrl(item);
                }
            }

            var ltlSeperator = e.Item.FindControl("ltlSeperator") as Literal;
            if (ltlSeperator != null && e.Item.ItemIndex > 0)
            {
                ltlSeperator.Text = Separator;
            }
        }
    }
}