using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JonathanRobbins.MicrositeKit.Entities.Exceptions
{
    [Serializable]
    public class SitecoreSearchException
    {
        public bool ExceptionOccurred { get; set; }
        public string Message { get; set; }
        public string Source { get; set; }
        public string StackTrace { get; set; }
        public SitecoreSearchException InnerException { get; set; }

        public SitecoreSearchException(string message, string source, string stackTrace, bool exceptionOccurred, SitecoreSearchException innerException)
        {
            ExceptionOccurred = exceptionOccurred;
            Message = message;
            Source = source;
            StackTrace = stackTrace;
            InnerException = innerException;
        }

        public SitecoreSearchException(string message, string source, string stackTrace, bool exceptionOccurred)
        {
            ExceptionOccurred = exceptionOccurred;
            Message = message;
            Source = source;
            StackTrace = stackTrace;
        }

        public SitecoreSearchException()
        {
            ExceptionOccurred = false;
        }
    }
}
