using System;
using JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.ControlBases;
using Sitecore.Data.Items;

namespace JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components
{
    public partial class Date : MicrositeSublayoutBase
    {
        public string FieldName { get; set; }

        private void Page_Load(object sender, EventArgs e)
        {
            SetLabels();
        }

        private void SetLabels()
        {
            string fieldName = scdDate.Field;
            if (!string.IsNullOrEmpty(FieldName))
            {
                fieldName = FieldName;
            }

            Item item = RetrieveItemOwnerOfField(fieldName);
            if (item != null) scdDate.Item = item;
        }
    }
}