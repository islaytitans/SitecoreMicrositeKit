<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CommsPanel.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.CommsPanel" %>
<%@ Import Namespace="Sitecore.Data.Items" %>
<div id="social-network">
    <div class="inner">
        <asp:Repeater ID="rptSocialLinks" runat="server" OnItemDataBound="rptSocialLinks_OnItemDataBound">    
            <HeaderTemplate>
                <div class="social-links">
            </HeaderTemplate>
            <ItemTemplate>
                <span class="social-icon">
                    <asp:HyperLink runat="server" ID="hlSocial">
                        <sc:Image runat="server" ID="sciIcon" Field="Icon" Item="<%# (Item)Container.DataItem %>"/>
                    </asp:HyperLink>          
                </span>      
            </ItemTemplate> 
            <FooterTemplate>
                </div>
            </FooterTemplate>
        </asp:Repeater>
    </div>
</div>