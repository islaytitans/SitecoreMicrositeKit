using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Items;
using Sitecore.Configuration;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.CMS.Items
{
    public class Nodes
    {
        private static Item _micrositeNodeItem;
        public static Item MicrositeNodeItem
        {
            get
            {
                if (_micrositeNodeItem != null)
                    return _micrositeNodeItem;

                Item micrositeItem;
                
                //TODO switch to account
                using (new Sitecore.SecurityModel.SecurityDisabler())
                {
                    micrositeItem = Sitecore.Context.Item.Axes.GetAncestors()
                                            .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteNodeId);
                }
                
                _micrositeNodeItem = micrositeItem;
                
                return _micrositeNodeItem;
            }
        }


        private static Item _micrositeHomeItem;
        public static Item MicrositeHomeItem
        {
            get
            {
                if (_micrositeHomeItem != null)
                    return _micrositeHomeItem;

                Item siteHomeItem = null;

                if (MicrositeNodeItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        siteHomeItem = MicrositeNodeItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicroSiteHomePageId);
                    }
                }

                _micrositeHomeItem = siteHomeItem;
                
                return _micrositeHomeItem;
            }
        }

        private static Item _micrositeLocalSettingsItem;
        public static Item MicrositeLocalSettingsItem
        {
            get
            {
                if (_micrositeLocalSettingsItem != null)
                    return _micrositeLocalSettingsItem;

                Item siteConfigItem = null;

                if (MicrositeNodeItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        //TODO get from site node
                        siteConfigItem = MicrositeNodeItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicroSiteLocalSettingsId);
                    }
                }

                _micrositeLocalSettingsItem = siteConfigItem;
                return _micrositeLocalSettingsItem;
            }
        }

        private static Item _micrositeLocalRepositoryItem;
        public static Item MicrositeLocalRepositoryItem
        {
            get
            {
                if (_micrositeLocalRepositoryItem != null)
                    return _micrositeLocalRepositoryItem;

                Item siteDataItem = null;

                if (MicrositeNodeItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        //TODO get from site node
                        siteDataItem = MicrositeNodeItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicrositeLocalRepositoryId);
                    }
                }

                _micrositeLocalRepositoryItem = siteDataItem;
                return _micrositeLocalRepositoryItem;
            }
        }

        private static Item _micrositeSharedSettingsItem;
        public static Item MicrositeSharedSettingsItem
        {
            get
            {
                if (_micrositeSharedSettingsItem != null)
                    return _micrositeSharedSettingsItem;

                Item sharedSettingsItem = null;

                Item contentItem = Sitecore.Context.Database.GetItem(Sitecore.ItemIDs.ContentRoot);

                if (contentItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        sharedSettingsItem = contentItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicroSiteSharedSettingsId);
                    }
                }

                _micrositeSharedSettingsItem = sharedSettingsItem;
                return _micrositeSharedSettingsItem;
            }
        }

        private static Item _micrositeSharedRepositoryItem;
        public static Item MicrositeSharedRepositoryItem
        {
            get
            {
                if (_micrositeSharedRepositoryItem != null)
                    return _micrositeSharedRepositoryItem;

                Item sharedRepositoryItem = null;

                Item contentItem = Sitecore.Context.Database.GetItem(Sitecore.ItemIDs.ContentRoot);

                if (contentItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        sharedRepositoryItem = contentItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicrositeSharedRepositoryId);
                    }
                }

                _micrositeSharedRepositoryItem = sharedRepositoryItem;
                return _micrositeSharedRepositoryItem;
            }
        }

        private static Item _loginPageItem;
        public static Item LoginPageItem
        {
            get
            {
                if (_loginPageItem != null)
                    return _loginPageItem;

                Item loginPageItem = null;

                if (MicrositeNodeItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        //TODO remove
                        loginPageItem = MicrositeNodeItem.Axes.GetDescendants()
                                                    .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteLoginPageId);
                    }
                }

                _loginPageItem = loginPageItem;
                return _loginPageItem;
            }
        }
    }
}
