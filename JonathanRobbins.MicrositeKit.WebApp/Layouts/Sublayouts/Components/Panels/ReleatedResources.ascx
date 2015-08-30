<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ReleatedResources.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Panels.ReleatedResources" %>
<%@ Import Namespace="JonathanRobbins.Micrositekit.Business.Extensions" %>

<div class="resources" runat="server" id="divResources">
    <h3>
        <sc:Text runat="server" ID="sctLegend" Field="Related resources"/> 
    </h3>
    <asp:Repeater runat="server" ID="rptRelatedResources" ItemType="Sitecore.Data.Items.MediaItem">
        <HeaderTemplate>
            <ul class="resource-list">
        </HeaderTemplate>
        <ItemTemplate>
            <li>
                <asp:HyperLink runat="server" ID="hlResource" Text="<%# Item.Name %>" 
                    NavigateUrl="<%# Sitecore.StringUtil.EnsurePrefix('/', Sitecore.Resources.Media.MediaManager.GetMediaUrl(Item)) %>" />
                <asp:Literal runat="server" ID="litFileSize" Text="<%# Item.Size.ToStringWithSize() %>" />
            </li>
        </ItemTemplate>
        <FooterTemplate>
            </ul>
        </FooterTemplate>
    </asp:Repeater>
</div> 