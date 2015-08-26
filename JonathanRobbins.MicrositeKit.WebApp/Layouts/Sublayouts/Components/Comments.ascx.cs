using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using JonathanRobbins.MicrositeKit.CMS.Items;
using JonathanRobbins.MicrositeKit.CMS.Search;
using JonathanRobbins.MicrositeKit.Entities.Search;
using JonathanRobbins.MicrositeKit.Entities.UserDefined;
using JonathanRobbins.MicrositeKit.Enumerators.Search;
using JonathanRobbins.MicrositeKit.Enumerators.Settings.ArtefactNames;
using JonathanRobbins.MicrositeKit.Interfaces.CMS.Search;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Web.UI.WebControls;
using StructureMap;

//using scSearchContrib.Searcher.Parameters;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class Comments : MicrositeSublayoutBase
    {
        private string RelatedItemId
        {
            get { return ApplyParameterIfPresent(QueryStrings.Guid); }
        }

        public const string ResponseCommandArguement = "Response";
        
        public Comments()
        {
            ObjectFactory.Initialize(x =>
            {
                x.For<ICommentCreator>().Use<CommentCreator>();
            });
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                mvCommentBox.SetActiveView(UserLoggedIntoSite(Page) ? vLoggedIn : vAnon);
                SearchCommentsAndBind();
            }
            SetLabels();
        }

        /// <summary>
        /// Used to immediately display the comment they submitted due to the time required to 
        /// create, edit, publish and index before page load
        /// </summary>
        /// <param name="commentModel"></param>
        private void SearchCommentsAndBind(Item commentItem = null)
        {
            ObjectFactory.Initialize(x =>
            {
                x.For<ISearchUtility>().Use<SearchUtility>();
            });

            var searchUtility = ObjectFactory.GetInstance<ISearchUtility>();

            var sitecoreSearchParameters = CreateCommentSearchParameters();

            var searchResults = searchUtility.Search(sitecoreSearchParameters);

            var itemComparer = new ItemComparer();

            List<Item> results = searchResults.ResultsCollection.ToList();

            if (commentItem != null && !results.Any(i => i.ID == commentItem.ID))
            {
                results.Add(commentItem);
            }
            results.Sort(itemComparer.CompareCreatedDate);

            rptComments.DataSource = results;
            rptComments.DataBind();
        }

        private void SetLabels()
        {
            sctError.Item = Datasource;
            sctComment.Item = Datasource;
            sctLogin.Item = Datasource;

            btnSubmit.Text = Datasource["Submit comment"];
        }

        protected void btnSubmit_OnClick(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(txtCommentBox.Text))
            {
                bool success = SubmitComment(txtCommentBox.Text);
                if (success) txtCommentBox.Text = string.Empty;
            }
        }

        protected void rptComments_OnItemCommand(object source, RepeaterCommandEventArgs e)
        {
            if (e.CommandName == ResponseCommandArguement)
            {
                var responseTextBox = e.Item.FindControl("txtReponseBox") as TextBox;

                if (responseTextBox != null && !string.IsNullOrEmpty(responseTextBox.Text))
                {
                    bool success = SubmitComment(responseTextBox.Text);
                    if (success) responseTextBox.Text = string.Empty;
                }
            }
        }

        private bool SubmitComment(string comment)
        {
            var commentCreator = ObjectFactory.GetInstance<ICommentCreator>();

            var commentModel = CreateCommentModel(comment);

            Item commentFolderItem = siteDataItem.Axes.GetDescendants()
                .FirstOrDefault(x => x.TemplateID == Microsite.MicrositeCommentFolderId);

            Assert.IsNotNull(commentFolderItem, "Comment folder does not exist");

            Item createdItem = commentCreator.StoreComment(commentModel, commentFolderItem.ID);

            if (createdItem != null)
            {
                SearchCommentsAndBind(createdItem);
                return true;
            }
            else
            {
                phMessaging.Visible = true;
                return false;
            }
        }

        private Comment CreateCommentModel(string commentText)
        {
            string fullName = Sitecore.Context.User.Profile.FullName;

            string firstName = string.Empty;
            string lastName = string.Empty;
            if (fullName.Contains(" "))
            {
                firstName = fullName.Split(' ').FirstOrDefault();
                lastName = fullName.Split(' ').LastOrDefault();
            }
            else
            {
                firstName = fullName;
            }

            var commentModel = new Comment()
            {
                RelatedItemId = new ID(RelatedItemId),
                FirstName = firstName,
                LastName = lastName,
                Text = commentText,
                CreatedDate = DateTime.Now,
            };

            return commentModel;
        }

        private SitecoreSearchParameters CreateCommentSearchParameters()
        {
            var fieldDictionary = new Dictionary<string, string>();
            fieldDictionary.Add(RelatedItemId, "Related object");

            var searchTemplates = new List<ID> { Microsite.MicrositeCommentTemplateId };

            return new SitecoreSearchParameters()
            {
                Templates = searchTemplates,
                IndexName = Indexes.Web,
                PostFieldFilters = fieldDictionary,
            };
        }

        protected void rptComments_OnItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            if (e.Item.ItemType != ListItemType.Item && e.Item.ItemType != ListItemType.AlternatingItem)
                return;

            var item = e.Item.DataItem as Item;

            if (item != null)
            {
                var sctFirstName = (Text) e.Item.FindControl("sctFirstName");
                var sctSurname = (Text)e.Item.FindControl("sctSurname");
                var sctDate = (Sitecore.Web.UI.WebControls.Date)e.Item.FindControl("sctDate");
                var sctComment = (Text)e.Item.FindControl("sctComment");
                var sctResponseLabel = (Text) e.Item.FindControl("sctResponseLabel");

                if (sctFirstName != null) sctFirstName.Item = item;
                if (sctSurname != null) sctSurname.Item = item;
                if (sctDate != null) sctDate.Item = item;
                if (sctComment != null) sctComment.Item = item;
                if (sctResponseLabel != null) sctResponseLabel.Item = Datasource;
            }
        }
    }
}