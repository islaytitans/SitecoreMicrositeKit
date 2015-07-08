using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using JonathanRobbins.MicrositeKit.Interfaces.CMS;
using Sitecore.Configuration;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.CMS.Items
{
    public class Nodes : INodes
    {
        private Item _micrositeItem;
        protected Item MicrositeItem
        {
            get
            {
                if (_micrositeItem != null)
                    return _micrositeItem;

                Item micrositeItem;
                
                //TODO switch to account
                using (new Sitecore.SecurityModel.SecurityDisabler())
                {
                    micrositeItem = Sitecore.Context.Item.Axes.GetAncestors()
                                            .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteId);
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
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        //TODO remove
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
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        //TODO remove
                        siteConfigItem = MicrositeItem.Axes.GetDescendants()
                                                      .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteSiteConfigId);
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
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        //TODO remove
                        siteDataItem = MicrositeItem.Axes.GetDescendants()
                                                    .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteSiteDataId);
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
                    //TODO switch to account
                    using (new Sitecore.SecurityModel.SecurityDisabler())
                    {
                        //TODO remove
                        loginPageItem = MicrositeItem.Axes.GetDescendants()
                                                    .FirstOrDefault(x => x.TemplateID == Templates.MicroSiteLoginPageId);
                    }
                }

                _loginPageItem = loginPageItem;
                return _loginPageItem;
            }
        }
    }
}
