using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases
{
    public class MicrositeControlBase : UserControlBase
    {
        protected bool UserLoggedIntoSite(Page page)
        {
            return !string.IsNullOrEmpty(page.User.Identity.Name)
                   && page.User.Identity.Name != "extranet\\anonymous"
                   && page.User.Identity.IsAuthenticated
                   && !page.User.Identity.Name.ToLower().Contains("sitecore\\");
        }

        protected bool UserLoggedIntoSiteAllowedAccess(Page page, Item item)
        {
            return UserLoggedIntoSite(page) && item.Security.CanRead(Sitecore.Context.User);
        }

        protected bool IsLoginPage
        {
            get
            {
                return (Sitecore.Context.Item.TemplateID == Templates.MicroSiteLoginPageId);
            }
        }

        public Item RetrieveItemOwnerOfField(string fieldName)
        {
            if (Sitecore.Context.Item.Fields[fieldName] != null &&
                !string.IsNullOrEmpty(Sitecore.Context.Item.Fields[fieldName].Value))
            {
                return Sitecore.Context.Item;
            }

            if (DataSource != null && DataSource.Fields[fieldName] != null &&
                !string.IsNullOrEmpty(DataSource.Fields[fieldName].Value))
            {
                return DataSource;
            }

            string itemId = ApplyParameterIfPresent(QueryStrings.Guid);

            if (!string.IsNullOrEmpty(itemId))
            {
                Item item = Sitecore.Context.Database.GetItem(itemId);
                if (item != null && item.Fields[fieldName] != null &&
                    !string.IsNullOrEmpty(item.Fields[fieldName].Value))
                {
                    return item;
                }
            }

            return null;
        }
    }
}