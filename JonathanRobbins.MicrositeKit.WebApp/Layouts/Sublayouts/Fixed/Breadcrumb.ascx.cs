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
using Sitecore.Diagnostics;
using Sitecore.Links;
using Sitecore.Social.Configuration.Model;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed
{
    public partial class Breadcrumb : NavigationControlBase
    {
        private const string Separator = ">";

        private IEnumerable<Item> _breadcrumbSource;
        public IEnumerable<Item> BreadcrumbSource
        {
            get
            {
                if (_breadcrumbSource == null || !_breadcrumbSource.Any())
                {
                    var ancestors = new List<Item>();

                    var currentItem = Sitecore.Context.Item;

                    while (currentItem.TemplateID != Enumerators.SitecoreConfig.Guids.Templates.SiteNodeId)
                    {
                        if (DisplayItemInNavigation(currentItem))
                            ancestors.Add(currentItem);
                        currentItem = currentItem.Parent;
                    }

                    ancestors.Reverse();
                    _breadcrumbSource = ancestors;
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
                    Item navigationTextItem = RetrieveItemContainingField(Enumerators.SitecoreConfig.Fields.Global.NavigationLinkText);
                    if (navigationTextItem != null)
                        ltlBreadcrumb.Text = navigationTextItem[Enumerators.SitecoreConfig.Fields.Global.NavigationLinkText];
                }
            }
            else
            {
                var hlBreadcrumb = e.Item.FindControl("hlBreadcrumb") as HyperLink;

                if (hlBreadcrumb != null)
                {
                    if (!string.IsNullOrEmpty(item[Enumerators.SitecoreConfig.Fields.Global.NavigationLinkText]))
                    {
                        hlBreadcrumb.Text = item[Enumerators.SitecoreConfig.Fields.Global.NavigationLinkText];
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