<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Breadcrumb.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed.Breadcrumb" %>

<div id="Breadcrumb">
    <asp:Repeater ID="rpBreadcrumb" runat="server" OnItemDataBound="rpBreadcrumb_ItemDataBound">
        <HeaderTemplate>
            <ol>
        </HeaderTemplate>
        <ItemTemplate>
            <li id="liTag" runat="server">
                <span><asp:Literal ID="ltlSeperator" runat="server" /></span>
                <asp:Literal ID="ltlBreadcrumb" runat="server" />
                <asp:HyperLink runat="server" ID="hlBreadcrumb" />
            </li>
        </ItemTemplate>
        <FooterTemplate>
            </ol>
        </FooterTemplate>
    </asp:Repeater>
</div>