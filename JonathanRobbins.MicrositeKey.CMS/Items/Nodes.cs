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

        private static Item _micrositeSettingsItem;
        public static Item MicrositeSettingsItem
        {
            get
            {
                if (_micrositeSettingsItem != null)
                    return _micrositeSettingsItem;

                Item siteConfigItem = null;

                if (MicrositeNodeItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        //TODO get from site node
                        siteConfigItem = MicrositeNodeItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicroSiteSettingsId);
                    }
                }

                _micrositeSettingsItem = siteConfigItem;
                return _micrositeSettingsItem;
            }
        }

        private static Item _micrositeRepositoryItem;
        public static Item MicrositeRepositoryItem
        {
            get
            {
                if (_micrositeRepositoryItem != null)
                    return _micrositeRepositoryItem;

                Item siteDataItem = null;

                if (MicrositeNodeItem != null)
                {
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        //TODO get from site node
                        siteDataItem = MicrositeNodeItem.Children.FirstOrDefault(x => x.TemplateID == Templates.MicrositeRepositoryId);
                    }
                }

                _micrositeRepositoryItem = siteDataItem;
                return _micrositeRepositoryItem;
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
