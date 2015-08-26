<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="StandardWithSupporting.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Positioning.StandardWithSupporting" %>

<div id="StandardWithSupporting">        
    <div class="inner">
        <div class="main-content">
            <div id="PhPrimaryContent">
                <sc:Placeholder ID="phContent" Key="phContent" runat="server" />
            </div>
            <div id="PhSupportingContent">
                <sc:Placeholder ID="phSupporting" Key="phSupporting" runat="server" />
            </div>
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