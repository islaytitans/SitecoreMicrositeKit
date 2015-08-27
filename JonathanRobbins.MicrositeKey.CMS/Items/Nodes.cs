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
                
                //TODO switch to account
                using (new Sitecore.SecurityModel.SecurityDisabler())
                {
                    _micrositeNodeItem = Sitecore.Context.Item.Axes.GetAncestors()
                                            .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteNodeId);
                }
                
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

                if (MicrositeNodeItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        _micrositeHomeItem = MicrositeNodeItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicroSiteHomePageId);
                    }
                }
                
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

                if (MicrositeNodeItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        //TODO get from site node
                        _micrositeLocalSettingsItem = MicrositeNodeItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicroSiteLocalSettingsId);
                    }
                }

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

                if (MicrositeNodeItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        //TODO get from site node
                        _micrositeLocalRepositoryItem = MicrositeNodeItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicrositeLocalRepositoryId);
                    }
                }

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

                Item contentItem = Sitecore.Context.Database.GetItem(Sitecore.ItemIDs.ContentRoot);

                if (contentItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        _micrositeSharedSettingsItem = contentItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicroSiteSharedSettingsId);
                    }
                }

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

                Item contentItem = Sitecore.Context.Database.GetItem(Sitecore.ItemIDs.ContentRoot);

                if (contentItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        _micrositeSharedRepositoryItem = contentItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicrositeSharedRepositoryId);
                    }
                }

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

                if (MicrositeNodeItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        _loginPageItem = MicrositeHomeItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicroSiteLoginPageId);
                    }
                }

                return _loginPageItem;
            }
        }

        private static Item _micrositesDictionaryItem;
        public static Item MicrositesMicrositesDictionaryItem
        {
            get
            {
                if (_micrositesDictionaryItem != null)
                    return _micrositesDictionaryItem;

                if (MicrositeLocalSettingsItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        _micrositesDictionaryItem = MicrositeLocalSettingsItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicroSiteDictionaryId);
                    }
                }

                return _micrositesDictionaryItem;
            }
        }
    }
}
