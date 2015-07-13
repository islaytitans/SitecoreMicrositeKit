<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="SiteLogo.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed.SiteLogo" %>

<div class="site-logo">
    <asp:HyperLink runat="server" ID="hlLogo" >
        <sc:Image runat="server" ID="sciLogo" Field="Global logo"/>
    </asp:HyperLink>
</div>