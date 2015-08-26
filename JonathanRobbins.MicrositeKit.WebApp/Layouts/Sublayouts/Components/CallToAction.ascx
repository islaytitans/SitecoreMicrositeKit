<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CallToAction.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.CallToAction" %>

<div class="cta-panel">
    <h2><sc:Text runat="server" ID="sctLegend" Field="Title"/></h2>
    <div class="short-text">
        <sc:Text runat="server" ID="sctShortText" Field="Short Text"/>
    </div>
    <sc:Link runat="server" ID="sclCallToAction" Field="Link" CssClass="button secondary-btn" />
</div>