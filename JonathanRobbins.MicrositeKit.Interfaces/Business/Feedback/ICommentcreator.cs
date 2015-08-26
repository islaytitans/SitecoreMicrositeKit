using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonathanRobbins.MicrositeKit.Entities.UserDefined;
using Sitecore.Data;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.Interfaces.Business.Feedback
{
    public interface ICommentCreator
    {
        Item StoreComment(Comment comment, ID commentFolderId);
    }
}
