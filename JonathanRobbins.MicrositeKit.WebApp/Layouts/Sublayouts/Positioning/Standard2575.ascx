<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Standard2575.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Positioning.Standard2575" %>

<div id="Standard2575">
    <div class="inner">
        <div id="PhPrimaryContent">
            <sc:Placeholder ID="phContent" Key="phContent" runat="server" />
        </div>
        <div id="PhSubNav">
            <sc:Sublayout ID="SubNav" runat="server" Path="Sublayouts/Fixed/SubNav.ascx" /> 
            <sc:Placeholder ID="phSubNav" Key="phSubNav" runat="server" />
        </div>
    </div>
    <div id="PhPromo">
        <div class="inner">
            <sc:Placeholder ID="phPromo" Key="phPromo" runat="server" />
        </div>
    </div>
</div>