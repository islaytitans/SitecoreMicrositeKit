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

        private Item _dataSource;
        public Item Datasource
        {
            get
            {
                if (_dataSource == null)
                {
                    _dataSource = Sitecore.Context.Item;

                    if (Sublayout != null && !string.IsNullOrEmpty(Sublayout.DataSource))
                        _dataSource = Sitecore.Context.Database.GetItem(Sublayout.DataSource);
                }
                return _dataSource;
            }
            set { _dataSource = value; }
        }

        public NameValueCollection Parameters
        {
            get { return WebUtil.ParseUrlParameters(Sublayout.Parameters); }
        }

        public string HomePageUrl
        {
            get
            {
                String strPathAndQuery = HttpContext.Current.Request.Url.PathAndQuery;
                return HttpContext.Current.Request.Url.AbsoluteUri.Replace(strPathAndQuery, "/");
            }
        }

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
            BindSitecoreControl();
        }

        public void BindSitecoreControl()
        {
            BindSitecoreControl(Datasource);
        }

        public void BindSitecoreControl(Item item)
        {
            Assert.IsNotNull(item, "item");

            if (Controls.Count > 0)
            {
                BindControls(Controls, item);
            }
        }

        private void BindControls(ControlCollection controls, Item item)
        {
            Assert.IsNotNull(controls, "controls");
            Assert.IsNotNull(item, "item");

            foreach (Control control in controls)
            {
                if (control is FieldControl)
                {
                    var fieldControl = control as FieldControl;

                    if (fieldControl.Item == null)
                    {
                        fieldControl.Item = item;
                    }
                }
                else if (control is FieldRenderer)
                {
                    var fieldRenderer = control as FieldRenderer;
                    if (fieldRenderer.Item == null)
                    {
                        fieldRenderer.Item = item;
                    }
                }

                if (control.Controls.Count > 0)
                {
                    BindControls(control.Controls, item);
                }
            }
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
            Assert.ArgumentNotNullOrEmpty(param, "param");

            return Request.Params[param] != null && !string.IsNullOrEmpty(Request.Params[param]);
        }

        public string ApplyParameterIfPresent(string param)
        {
            Assert.ArgumentNotNullOrEmpty(param, "param");

            string output = string.Empty;

            if (ParameterIsPopulated(param))
            {
                output = HttpUtility.UrlDecode(Request.Params[param]);
            }

            return output;
        }
    }
}