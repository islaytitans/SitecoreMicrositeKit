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

        private Item _micrositeItem;
        protected Item MicrositeItem
        {
            get
            {
                if (_micrositeItem != null)
                    return _micrositeItem;

                Item micrositeItem;
                using (new Sitecore.SecurityModel.SecurityDisabler())
                {
                    micrositeItem = Sitecore.Context.Item.Axes.GetAncestors()
                                            .FirstOrDefault(
                                                x => x.TemplateID == Templates.MicroSiteId);
                }
                _micrositeItem = micrositeItem;
                return _micrositeItem;
            }
        }

        private Item _siteHomeItem;
        protected Item SiteHomeItem
        {
            get
            {
                if (_siteHomeItem != null)
                    return _siteHomeItem;

                Item siteHomeItem = null;

                if (MicrositeItem != null)
                {
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        siteHomeItem = MicrositeItem.Axes.GetDescendants()
                                                           .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteHomePageId);
                    }
                }

                _siteHomeItem = siteHomeItem;
                return _siteHomeItem;
            }
        }

        private Item _siteConfigItem;
        protected Item SiteConfigItem
        {
            get
            {
                if (_siteConfigItem != null)
                    return _siteConfigItem;

                Item siteConfigItem = null;

                if (MicrositeItem != null)
                {
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        siteConfigItem = MicrositeItem.Axes.GetDescendants()
                                                      .FirstOrDefault(
                                                          x =>
                                                          x.TemplateID == Templates.MicroSiteSiteConfigId);
                    }
                }

                _siteConfigItem = siteConfigItem;
                return _siteConfigItem;
            }
        }

        private Item _siteDataItem;
        protected Item SiteDataItem
        {
            get
            {
                if (_siteDataItem != null)
                    return _siteDataItem;

                Item siteDataItem = null;

                if (MicrositeItem != null)
                {
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        siteDataItem = MicrositeItem.Axes.GetDescendants()
                                                    .FirstOrDefault(
                                                        x => x.TemplateID == Templates.MicroSiteSiteDataId);
                    }
                }

                _siteDataItem = siteDataItem;
                return _siteDataItem;
            }
        }

        private Item _loginPageItem;
        protected Item LoginPageItem
        {
            get
            {
                if (_loginPageItem != null)
                    return _loginPageItem;

                Item loginPageItem = null;

                if (MicrositeItem != null)
                {
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        loginPageItem = MicrositeItem.Axes.GetDescendants()
                                                    .FirstOrDefault(
                                                        x => x.TemplateID == Templates.MicroSiteLoginPageId);
                    }
                }

                _loginPageItem = loginPageItem;
                return _loginPageItem;
            }
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