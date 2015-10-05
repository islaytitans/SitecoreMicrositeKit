using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Sitecore;
using Sitecore.Collections;
using Sitecore.Configuration;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Sites;
using StringDictionary = Sitecore.Collections.StringDictionary;

namespace JonathanRobbins.MicrositeKit.CMS.Providers.SiteProvider
{
    public class DynamicSiteProvider : Sitecore.Sites.SiteProvider
    {
        private object _lock = new object();
        private SafeDictionary<string, Site> _siteDictionary;
        private SiteCollection _sitesCollection;
        public string DatabaseName { get; set; }
        protected readonly Sitecore.Sites.SiteProvider Implemenation;

        public DynamicSiteProvider(Sitecore.Sites.SiteProvider implementation)
        {
            Assert.IsNotNull(implementation, "implementation");
            
            Implemenation = implementation;
        }

        public override Site GetSite(string siteName)
        {
            Assert.IsNotNullOrEmpty(siteName, "siteName");

            InitializeSites();

            Site site;

            if (_siteDictionary.TryGetValue(siteName, out site))
            {
                site = Implemenation.GetSite(siteName);
            }

            return site;
        }

        public override SiteCollection GetSites()
        {
            InitializeSites();

            var sitesCollection = new SiteCollection();

            sitesCollection.AddRange(_sitesCollection);
            sitesCollection.AddRange(Implemenation.GetSites());

            return sitesCollection;
        }

        public override void Initialize(string name, NameValueCollection config)
        {
            base.Initialize(name, config);
            Implemenation.Initialize(name, config);
        }

        private void InitializeSites()
        {
            if (_siteDictionary != null)
                return;

            lock (_lock)
            {
                if (_siteDictionary != null)
                    return;

                var sitesCollection = new SiteCollection();
                var siteDictionary = new SafeDictionary<string, Site>(StringComparer.InvariantCultureIgnoreCase);

                Database database = Factory.GetDatabase(DatabaseName, false);
                if (database == null)
                    return;

                foreach (Item siteItem in GetSiteDeinitionItems(database))
                {
                    Site site = ResolveSite(siteItem);

                    if (site != null)
                    {
                        siteDictionary[site.Name] = site;
                        sitesCollection.Add(site);
                    }
                }

                _sitesCollection = sitesCollection;
                _siteDictionary = siteDictionary;
            }
        }

        public virtual IEnumerable<Item> GetSiteDeinitionItems(Database database)
        {
            if (database == null)
            {
                Log.Error("Failed to get sites in method GetSiteDeinitionItems in DynamicSiteProvider, database was null", this);
                return null;
            }
                
            var siteItems = new List<Item>();

            Item contentRoot = database.GetItem(Sitecore.ItemIDs.ContentRoot);
            if (contentRoot == null)
                return null;

            var siteRoots = contentRoot.GetChildren(ChildListOptions.SkipSorting).Where(i => i.TemplateID == Enumerators.SitecoreConfig.Guids.Templates.MicroSiteNodeId);

            siteItems.AddRange(siteRoots);

            return siteItems;
        }

        public virtual Site ResolveSite(Item item)
        {
            Assert.ArgumentNotNull(item, "item");

            if (IsValidSiteName(item[Enumerators.SitecoreConfig.Fields.Global.SiteName]))
            {
                var properties = GetSiteProperties(item);

                var site = new Site(item[Enumerators.SitecoreConfig.Fields.Global.SiteName], properties);

                //site.SetSiteItemId(item.ID);

                return site;
            }

            return null;
        }

        [MethodImpl(MethodImplOptions.NoOptimization)]
        private bool IsValidSiteName(string siteName)
        {
            Assert.ArgumentNotNullOrEmpty(siteName, "siteName");

            try
            {
                string validName = Factory.CreateObject("cacheSizes/sites/" + siteName, false) as string;
                return true;
            }
            catch (Exception e)
            {
                Log.Error("Site " + siteName + "is an invalid site name", this);
                return false;
            }
        }

        private StringDictionary GetSiteProperties(Item item)
        {
            Assert.ArgumentNotNull(item, "item");

            var properties = new StringDictionary();

            NameValueListField nameValueListfield = item.Fields[Enumerators.SitecoreConfig.Fields.Global.SiteProperties];

            var nameValueCollection = nameValueListfield.NameValues;

            foreach (string key in nameValueCollection)
            {
                properties.Add(key, HttpUtility.UrlDecode(nameValueCollection[key]));
            }

            return properties;
        }
    }
}
