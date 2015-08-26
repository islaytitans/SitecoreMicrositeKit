using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.Data;

namespace JonathanRobbins.MicrositeKit.Entities.UserDefined
{
    [Serializable]
    public class Comment
    {
        public ID Id { get; set; }
        public ID RelatedItemId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Text { get; set; }
        public DateTime CreatedDate { get; set; }
        public ID IconImageId { get; set; }

        public Comment()
        {
            Id = null;
            RelatedItemId = null;
            FirstName = string.Empty;
            LastName = string.Empty;
            Text = string.Empty;
            CreatedDate = DateTime.MinValue;
            IconImageId = null;
        }
    }
}
