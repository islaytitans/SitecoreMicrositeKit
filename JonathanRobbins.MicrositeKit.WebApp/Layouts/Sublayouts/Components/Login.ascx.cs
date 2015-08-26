using System;
using System.Web;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Fields;
using Sitecore.Links;
using Sitecore.Security.Accounts;
using Sitecore.Security.Authentication;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class Login : MicrositeSublayoutBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            SetUpLabels();
            if (!Page.IsPostBack)
            {
                sctLoginFailed.Visible = false;
                revEmail.ValidationExpression = Sitecore.Configuration.Settings.EmailValidation;
            }
        }

        private void Page_PreRender(object sender, EventArgs e)
        {
            mvLogin.SetActiveView(UserLoggedIntoSiteAllowedAccess(Page, SiteHomeItem) ? vLoggedIn : vAnon);
        }

        private void SetUpLabels()
        {
            SetSitecoreControlWithSitecoreItem(Controls, Datasource);
            btnLogin.Text = Datasource["Login button text"];
            btnLogout.Text = Datasource["Logout button text"];
            rfvEmail.ErrorMessage = Datasource["Email required"];
            rfvPassword.ErrorMessage = Datasource["Password required"];
            revEmail.ErrorMessage = Datasource["Invalid email"];
        }

        protected void btnLogin_OnClick(object sender, EventArgs e)
        {
            Page.Validate("vgLogin");
            if (!Page.IsValid) return;

            string username = System.Web.Security.Membership.GetUserNameByEmail(txtEmail.Text);

            if (string.IsNullOrEmpty(username))
            {
                DisplayLoginFailedMessage(LoginResult.NoAccountFound);
                return;
            }

            var user = System.Web.Security.Membership.GetUser(username);

            if (user == null)
            {
                DisplayLoginFailedMessage(LoginResult.NoUserFound);
                return;
            }

            var loginResult = System.Web.Security.Membership.ValidateUser(username, txtPassword.Text);

            if (loginResult)
            {
                if (user.IsApproved && !user.IsLockedOut)
                {
                    AuthenticationManager.Login(username, (string) txtPassword.Text, true);
                    bool accessAllowed = ValidateAccessRights();

                    if (accessAllowed)
                    {
                        Response.Redirect(LinkManager.GetItemUrl(SiteHomeItem));
                    }
                    else
                    {
                        LogoutUser();
                        DisplayLoginFailedMessage(LoginResult.AccessDenied);
                        return;
                    }
                }
                else
                {
                    DisplayLoginFailedMessage(LoginResult.AccountLocked);
                    return;
                }
            }
            else
            {
                DisplayLoginFailedMessage(LoginResult.InvalidDetails);
                return;
            }

        }

        private bool ValidateAccessRights()
        {
            User user = Sitecore.Context.User;

            return SiteHomeItem.Security.CanRead(user);
        }

        private void DisplayLoginFailedMessage(LoginResult loginResult)
        {
            sctLoginFailed.Visible = true;

            switch (loginResult)
            {
                case LoginResult.AccountLocked:
                    sctLoginFailed.Field = "Account locked";
                    break;
                case LoginResult.AccessDenied:
                case LoginResult.DomainDisallowed:
                    sctLoginFailed.Field = "No access";
                    break;
                default:
                case LoginResult.NoUserFound:
                case LoginResult.NoAccountFound:
                case LoginResult.NoUsernameFound:
                case LoginResult.NoEmailFound:
                case LoginResult.InvalidDetails:
                    sctLoginFailed.Field = "Invalid details";
                    break;
            }
        }

        private bool ValidateDomain(string domainUser)
        {
            bool accessGranted = false;

            string domain = Sitecore.Context.Domain.Name;

            if (domainUser.ToLower().Contains(domain.ToLower()))
            {
                accessGranted = true;
            }

            return accessGranted;
        }

        protected void btnLogout_OnClick(object sender, EventArgs e)
        {
            LogoutUser();

            string url = string.Empty;

            LinkField linkField = MicrositeDictionaryItem.Fields["Log out redirect location"];

            if (linkField != null && !string.IsNullOrEmpty(linkField.Url))
            {
                url = linkField.TargetItem != null ? LinkManager.GetItemUrl(linkField.TargetItem) : linkField.Url;
            }
            else
            {
                url = loginPageItem != null ? LinkManager.GetItemUrl(loginPageItem) : HttpContext.Current.Request.Url.AbsoluteUri;
            }

            Response.Redirect(url);
        }

        protected void mvLogin_OnActiveViewChanged(object sender, EventArgs e)
        {
            litUsername.Text = UserLoggedIntoSiteAllowedAccess(Page, SiteHomeItem)
                                   ? Sitecore.Context.User.LocalName
                                   : string.Empty;
        }
    }
}