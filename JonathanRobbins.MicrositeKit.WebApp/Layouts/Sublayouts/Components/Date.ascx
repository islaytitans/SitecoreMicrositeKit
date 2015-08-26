<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Date.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Date" %>
<%@ Register TagPrefix="sc" Namespace="Sitecore.Web.UI.WebControls" Assembly="Sitecore.Kernel" %>

<span class="date">
    <sc:Date runat="server" ID="scdDate" Field="Date" Format="ddd d MMMM" />
</span>