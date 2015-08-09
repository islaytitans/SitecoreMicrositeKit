<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="MainNavigation.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed.MainNavigation" %>

<asp:PlaceHolder runat="server" ID="phNavigation">
    <nav class="top-nav">
        <asp:Repeater runat="server" ID="rptNavigation" OnItemDataBound="rptNavigation_OnItemDataBound">
            <HeaderTemplate>
                <ul>
            </HeaderTemplate>
            <ItemTemplate>
                <li>
                    <asp:HyperLink runat="server" ID="hlNavigation" />
                </li>
            </ItemTemplate>
            <FooterTemplate>
                <sc:Sublayout ID="LoggedIn" runat="server" Path="/layouts/SubLayouts/Fixed/LoggedIn.ascx" /> 
                </ul>
            </FooterTemplate>
        </asp:Repeater>
    </nav>
</asp:PlaceHolder>
