using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JonathanRobbins.MicrositeKit.Enumerators.Membership
{
    public enum LoginResult
    {
        NoAccountFound,
        NoUsernameFound,
        NoEmailFound,
        NoUserFound,
        DomainDisallowed,
        AccountLocked,
        InvalidDetails,
        Success,
        AccessDenied
    }
}
