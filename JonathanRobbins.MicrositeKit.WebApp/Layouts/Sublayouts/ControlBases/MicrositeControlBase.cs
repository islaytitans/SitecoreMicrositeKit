using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Items;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases
{
    public class MicrositeControlBase : UserControlBase
    {
        public Nodes ItemNodes = new Nodes();

        protected bool IsLoginPage
        {
            get
            {
                return (Sitecore.Context.Item.TemplateID == Templates.MicroSiteLoginPageId);
            }
        }

        protected bool UserLoggedIntoMicrositeAllowedAccess(Page page, Item item)
        {
            Assert.IsNotNull(page, "page");
            Assert.IsNotNull(item, "item");

            return UserLoggedIntoMicrosite(page) && item.Security.CanRead(Sitecore.Context.User);
        }

        protected bool UserLoggedIntoMicrosite(Page page)
        {
            Assert.IsNotNull(page, "page");

            return !string.IsNullOrEmpty(page.User.Identity.Name)
                   && page.User.Identity.Name != "extranet\\anonymous"
                   && page.User.Identity.IsAuthenticated
                   && !page.User.Identity.Name.ToLower().Contains("sitecore\\");
        }

        public Item RetrieveItemContainingField(string fieldName)
        {
            Assert.IsNotNullOrEmpty(fieldName, "fieldName");

            if (Sitecore.Context.Item.Fields[fieldName] != null && !string.IsNullOrEmpty(Sitecore.Context.Item.Fields[fieldName].Value))
            {
                return Sitecore.Context.Item;
            }

            if (DataSource != null && DataSource.Fields[fieldName] != null && !string.IsNullOrEmpty(DataSource.Fields[fieldName].Value))
            {
                return DataSource;
            }

            string itemId = ApplyParameterIfPresent(QueryStrings.Guid);

            if (!string.IsNullOrEmpty(itemId))
            {
                Item item = Sitecore.Context.Database.GetItem(itemId);

                if (item != null && item.Fields[fieldName] != null && !string.IsNullOrEmpty(item.Fields[fieldName].Value))
                {
                    return item;
                }
            }

            return null;
        }
    }
}