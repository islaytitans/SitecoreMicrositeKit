<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="FeaturedPanel.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.ContentShowcases.FeaturedPanel" %>
<%@ Import Namespace="Sitecore.Data.Items" %>
<div class="feature-panel">
    <div class="inner">
        <div class="image">
            <asp:HyperLink runat="server" ID="hlImage" >
                <sc:Image runat="server" ID="sciImage" Field="Image"/>
            </asp:HyperLink>
        </div>
        <div class="content">
            <h2>
                <asp:HyperLink runat="server" ID="hlTitle" >
                    <sc:Text runat="server" ID="sctTitle" Field="Title"/> <sc:Date runat="server" ID="scdDate" Field="<%# DateField %>" Format="MMMM yyyy"/>
                </asp:HyperLink>
            </h2>
            <sc:Text runat="server" ID="sctShortText" Field="Short text" />
            <asp:HyperLink runat="server" ID="hlReadMore" class="link"/>
        </div>
    </div>
</div>
