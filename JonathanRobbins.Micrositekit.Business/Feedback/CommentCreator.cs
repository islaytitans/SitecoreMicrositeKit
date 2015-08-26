using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.Entities.Mappings;
using JonathanRobbins.MicrositeKit.Entities.UserDefined;
using JonathanRobbins.MicrositeKit.Interfaces.Business.Feedback;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using StructureMap;

namespace JonathanRobbins.Micrositekit.Business.Feedback
{
    public class CommentCreator : ICommentCreator
    {
        public CommentCreator()
        {
            ObjectFactory.Initialize(x =>
            {
                //x.For<ISitecoreCreatorBase>().Use<SitecoreCreatorBase>();
                //x.For<ISitecorePublisherBase>().Use<SitecorePublisherBase>();
            });
        }

        //TODO confirm if master database is accessible
        public Item StoreComment(Comment comment, ID commentFolderId)
        {
            Assert.IsNotNull(comment, "Comment is null");
            Assert.IsNotNull(commentFolderId, "Comment folder Id is null");

            Item createdCommentItem = null;

            //Item commentFolder = SitecoreDatabase.GetItem(commentFolderId);
            //Item relatedItem = SitecoreDatabase.GetItem(comment.RelatedItemId);

            //if (commentFolder != null && relatedItem != null)
            //{
            //    var sitecoreCreatorBase = ObjectFactory.GetInstance<ISitecoreCreatorBase>();

            //    Item parentItem = sitecoreCreatorBase.GetSetFolder(relatedItem.Name, commentFolder);
            //    TemplateItem commentTemplate = SitecoreDatabase.GetTemplate(Microsite.MicrositeCommentTemplateId);

            //    if (parentItem != null && commentTemplate != null)
            //    {
            //        string itemName = (comment.FirstName + comment.LastName +
            //                          comment.CreatedDate.ToString("hhmmddMMyyyy")).ToSitecoreSafeString();

            //        using (new Sitecore.SecurityModel.SecurityDisabler())
            //        {
            //            createdCommentItem = parentItem.Add(itemName, commentTemplate);
            //        }

            //        if (createdCommentItem != null)
            //        {
            //            var commentMapper = new CommentMapper();
            //            commentMapper.PopulateSitecoreItemFromCommentEntity(createdCommentItem, comment, true);

            //            var sitecorePublisherBase = ObjectFactory.GetInstance<ISitecorePublisherBase>();
            //            sitecorePublisherBase.PublishItem(createdCommentItem.ID.ToString(), false);

            //            sitecoreCreatorBase.IncrementNumberField(comment.RelatedItemId, Global.CommentCounter);
            //            sitecorePublisherBase.PublishItem(comment.RelatedItemId.ToString(), false);
            //        }
            //    }
            //}

            return createdCommentItem;
        }

        private Database SitecoreDatabase
        {
            get { return Database.GetDatabase("master"); }
        }
    }
}
