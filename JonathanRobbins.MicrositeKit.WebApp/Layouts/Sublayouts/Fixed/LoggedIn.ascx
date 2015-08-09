<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="LoggedIn.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed.LoggedIn" %>

<asp:PlaceHolder runat="server" ID="phLoggedIn" Visible="False">
    <li class="logout">   
        <asp:Button runat="server" ID="btnLogout" OnClick="btnLogout_OnClick" Text="Logout" CssClass="link" />
    </li>
</asp:PlaceHolder>
