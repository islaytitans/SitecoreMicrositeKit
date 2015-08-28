<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CollectionPanel.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.ContentShowcases.CollectionPanel" %>
<%@ Register Src="~/Layouts/Sublayouts/Components/ContentShowcases/CollectionPanelView.ascx" TagPrefix="uc1" TagName="CollectionPanelView" %>

<div class="collection-panel">
    <div class="inner">
        <div class="pane-holder">
        <!-- user selectable panel -->
            <div class="pane">
                <div class="panel featured">
                    <uc1:CollectionPanelView runat="server" id="cpvFeaturedItem" />
                </div>
            </div>
            <div class="pane medium">
                <asp:ListView ID="lvMediumCollection" runat="server" ItemType="Sitecore.Data.Items.Item">
                    <GroupTemplate>
                        <div class="panel">
                            <asp:PlaceHolder runat="server" ID="itemPlaceholder" />
                        </div>
                    </GroupTemplate>
                    <ItemTemplate>
                        <uc1:CollectionPanelView runat="server" id="cpvMediumItem" ViewItem="<%# Item %>"  />
                    </ItemTemplate>
                </asp:ListView>
            </div>
            <div class="pane small">
                <asp:ListView ID="lvSmallCollection" runat="server" ItemType="Sitecore.Data.Items.Item">
                    <GroupTemplate>
                        <div class="panel">
                            <asp:PlaceHolder runat="server" ID="itemPlaceholder" />
                        </div>
                    </GroupTemplate>
                    <ItemTemplate>
                        <uc1:CollectionPanelView runat="server" id="cpvSmallItem" ViewItem="<%# Item %>"  />
                    </ItemTemplate>
                </asp:ListView>
            </div>
            <div class="pane hidden-pane small">
                <asp:ListView ID="lvHiddenSmall" runat="server" ItemType="Sitecore.Data.Items.Item">
                    <GroupTemplate>
                        <div class="panel">
                            <asp:PlaceHolder runat="server" ID="itemPlaceholder" />
                        </div>
                    </GroupTemplate>
                    <ItemTemplate>
                        <uc1:CollectionPanelView runat="server" id="cpvHiddenSmallItem" ViewItem="<%# Item %>"  />
                    </ItemTemplate>
                </asp:ListView>
            </div>
            <a href="#" class="show-more">
                <span class="icon icon-yellow-arrow"></span><sc:Text ID="sctSeeMore" runat="server" Field="See more"/>
            </a>
        </div>
    </div>
</div>