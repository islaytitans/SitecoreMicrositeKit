<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Header.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed.Header" %>
<header id="Header">
    <div class="inner">

        <sc:Sublayout ID="SiteLogo" runat="server" Path="/layouts/SubLayouts/Fixed/SiteLogo.ascx" />

        <sc:Sublayout ID="MainNav" runat="server" Path="/layouts/SubLayouts/Fixed/MainNavigation.ascx" />
        
    </div>
</header>