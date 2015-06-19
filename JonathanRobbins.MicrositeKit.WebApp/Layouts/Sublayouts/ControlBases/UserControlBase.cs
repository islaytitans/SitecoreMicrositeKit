using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;
using System.Web.UI;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Security.Authentication;
using Sitecore.Web;
using Sitecore.Web.UI.WebControls;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases
{
    public class UserControlBase : UserControl
    {
        private Item _dataSource;
        public Item DataSource
        {
            get
            {
                if (_dataSource == null)
                {
                    var parent = Parent as Sublayout;
                    if (parent != null)
                        _dataSource = Sitecore.Context.Database.GetItem(parent.DataSource);
                }
                return _dataSource;
            }
        }

        private Item _resolvedDataSource;
        public Item ResolvedDataSource
        {
            get
            {
                if (_resolvedDataSource == null)
                {
                    if (DataSource != null)
                    {
                        _resolvedDataSource = DataSource;
                    }
                    else
                    {
                        _resolvedDataSource = Sitecore.Context.Item;
                    }
                }

                return _resolvedDataSource;
            }
        }

        public NameValueCollection Parameters
        {
            get { return WebUtil.ParseUrlParameters(Sublayout.Parameters); }
        }

        public Sublayout Sublayout
        {
            get { return Parent as Sublayout; }
        }

        public Placeholder Placeholder
        {
            get { return Sublayout.Parent as Placeholder; }
        }

        public string PlaceholderKey
        {
            get { return Placeholder.Key; }
        }

        public string HomePageUrl
        {
            get
            {
                String strPathAndQuery = HttpContext.Current.Request.Url.PathAndQuery;
                return HttpContext.Current.Request.Url.AbsoluteUri.Replace(strPathAndQuery, "/");
            }
        }

        public static void SetSitecoreControlWithSitecoreItem(ControlCollection controlCollection, Item sitecoreItem)
        {
            if (sitecoreItem == null)
            {
                Log.Error("Data source is null when passed to SetSitecoreControlWithSitecoreItem", null);
                return;
            }

            foreach (var scText in controlCollection.Cast<Control>().OfType<Text>().ToList())
                scText.Item = sitecoreItem;

            foreach (var scText in controlCollection.Cast<Control>().Select(control => GetAllControls(control).OfType<Text>().ToList()).SelectMany(controls => controls))
                scText.Item = sitecoreItem;

            foreach (var scLink in controlCollection.Cast<Control>().OfType<Link>().ToList())
                scLink.Item = sitecoreItem;

            foreach (var scLink in controlCollection.Cast<Control>().Select(control => GetAllControls(control).OfType<Link>().ToList()).SelectMany(controls => controls))
                scLink.Item = sitecoreItem;
        }

        public static IEnumerable<Control> GetAllControls(Control parent)
        {
            foreach (Control control in parent.Controls)
            {
                yield return control;
                foreach (var descendant in GetAllControls(control))
                {
                    yield return descendant;
                }
            }
        }

        public void LogoutUser()
        {
            Session.Abandon();
            AuthenticationManager.Logout();
        }

        public bool ParameterIsPopulated(string param)
        {
            return Request.Params[param] != null && !string.IsNullOrEmpty(Request.Params[param]);
        }

        public string ApplyParameterIfPresent(string param)
        {
            string output = string.Empty;

            if (ParameterIsPopulated(param))
            {
                output = HttpUtility.UrlDecode(Request.Params[param]);
            }

            return output;
        }
    }
}