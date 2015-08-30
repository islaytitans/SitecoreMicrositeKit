<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ReleatedResources.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Panels.ReleatedResources" %>
<%@ Import Namespace="Sitecore.Data.Items" %>
<%@ Import Namespace="JonathanRobbins.Micrositekit.Business.Extensions" %>

<div class="resources" runat="server" id="divResources">
    <h3>
        <sc:Text runat="server" ID="sctLegend" Field="Related resources"/> 
    </h3>
    <asp:Repeater runat="server" ID="rptRelatedResources">
        <HeaderTemplate>
            <ul class="resource-list">
        </HeaderTemplate>
        <ItemTemplate>
            <li>
                <asp:HyperLink runat="server" ID="hlResource" Text="<%# ((MediaItem)Container.DataItem).Name %>" 
                    NavigateUrl="<%# Sitecore.StringUtil.EnsurePrefix('/', Sitecore.Resources.Media.MediaManager.GetMediaUrl((MediaItem)Container.DataItem)) %>" />
                <asp:Literal runat="server" ID="litFileSize" Text="<%# ((MediaItem)Container.DataItem).Size.ToStringWithSize() %>" />
            </li>
        </ItemTemplate>
        <FooterTemplate>
            </ul>
        </FooterTemplate>
    </asp:Repeater>
</div> 