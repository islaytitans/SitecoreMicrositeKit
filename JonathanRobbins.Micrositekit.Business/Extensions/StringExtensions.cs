using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JonathanRobbins.Micrositekit.Business.Extensions
{
    public static class StringExtensions
    {
        public static string RemoveTrailingComma(this string input)
        {
            string output = input;

            if (input.Trim().EndsWith(","))
                output = input.Trim().Remove(input.Trim().LastIndexOf(","));

            return output;
        }

        public static string ToStringWithSize(this long l)
        {
            if (l == 0)
            {
                return "0 B";
            }

            string[] suf = { "B", "KB", "MB", "GB", "TB", "PB" };
            int place = Convert.ToInt32(Math.Floor(Math.Log(l, 1024)));
            double num = Math.Round(l / Math.Pow(1024, place), 1);
            return num.ToString(CultureInfo.CurrentCulture) + suf[place];
        }
    }
}
