<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="NewsListing.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.NewsListing" %>


<div id="NewsListing">
    <div class="inner">
        <%--<div class="filer-pager">
            <!-- commented filter as there maybe time at the end to add this -->
            
            <asp:label runat="server" AssociatedControlID="dlYears">
                Year:
            </asp:label>
            <!-- years should get information from the available years per news item -->
            <asp:DropDownList runat="server" ID="dlYears">
                <asp:ListItem Value="1" Text="2010" />
                <asp:ListItem Value="2" Text="2011" />
                <asp:ListItem Value="3" Text="2012" />
            </asp:DropDownList>
        

            <asp:label ID="Label1" runat="server" AssociatedControlID="dlMonths">
                Month:
            </asp:label>
            <!-- years should get information from the available years per news item -->
            <asp:DropDownList runat="server" ID="dlMonths">
                <asp:ListItem Value="1" Text="January" />
                <asp:ListItem Value="2" Text="Feb" />
                <asp:ListItem Value="3" Text="March" />
            </asp:DropDownList>

            
            <asp:label runat="server" AssociatedControlID="cbCategory">
                Category:
            </asp:label>
            <asp:CheckBoxList ID="cbCategory" runat="server">
                <asp:ListItem Text="category 1" Value="1" />
                <asp:ListItem Text="category 2" Value="2" />
                <asp:ListItem Text="category 3" Value="3" />
            </asp:CheckBoxList>
            
        </div>    --%>

        <asp:ListView runat="server" ID="lvNews" OnItemDataBound="lvNews_OnItemDataBound">
            <LayoutTemplate>
                <ul>
                    <asp:PlaceHolder runat="server" ID="itemPlaceholder" />
                </ul>
            </LayoutTemplate>
            <ItemTemplate>
                <li class="news-item"> 
                    <div class="news-content">
                        <div class="image">
                            <asp:HyperLink runat="server" ID="hlImage" ><sc:Image runat="server" ID="sciImage" Field="Image" /></asp:HyperLink>
                        </div>
                        <div class="news-text">
                            <h2><asp:HyperLink runat="server" ID="hlTitle"><sc:Text runat="server" ID="sctTitle" Field="Title" /></asp:HyperLink></h2>
                            <div class="author-date-holder">
                                <span class="author"><sc:Text runat="server" ID="sctFirstName" Field="First name" /> <sc:Text runat="server" ID="sctLastName" Field="Last name" /></span>
                                <span class="date"><sc:Date runat="server" ID="scdDate" Field="Date" Format="dd/MM/yyyy" /></span>
                            </div>
                            <sc:Text runat="server" ID="sctShortText" Field="Short text" />
                            <asp:HyperLink runat="server" ID="hlReadMore" CssClass="link" />
                        </div>
                    </div>
                </li>
            </ItemTemplate>
        </asp:ListView>
    </div>
</div>