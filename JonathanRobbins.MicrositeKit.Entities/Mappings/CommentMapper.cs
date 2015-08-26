using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.Entities.UserDefined;
using JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Guids;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Global = JonathanRobbins.MicrositeKit.Enumerators.SitecoreConfig.Fields.Global;

namespace JonathanRobbins.MicrositeKit.Entities.Mappings
{
    public class CommentMapper
    {
        public Item PopulateSitecoreItemFromCommentEntity(Item commentItem, Comment comment, bool initialiseWorflow)
        {
            Assert.IsNotNull(commentItem, "Comment item can not be null");
            Assert.IsNotNull(comment, "Comment can not be null");

            using (new Sitecore.SecurityModel.SecurityDisabler())
            {
                using (new EditContext(commentItem))
                {
                    commentItem[Global.RelatedObject] = comment.RelatedItemId.ToString();
                    commentItem[Global.FirstName] = comment.FirstName;
                    commentItem[Global.LastName] = comment.LastName;
                    commentItem[Global.ShortText] = comment.Text;

                    //Assign workflow due to bug
                    if (initialiseWorflow)
                    {
                        if (string.IsNullOrEmpty(commentItem[Global.Workflow]))
                            commentItem[Global.Workflow] = Workflows.Comment.WorkflowId.ToString();
                        if (string.IsNullOrEmpty(commentItem[Global.WorkflowState]))
                            commentItem[Global.WorkflowState] = Workflows.Comment.ApprovedWorkflowStateId.ToString();
                    }
                }
            }

            return commentItem;
        }
    }
}
