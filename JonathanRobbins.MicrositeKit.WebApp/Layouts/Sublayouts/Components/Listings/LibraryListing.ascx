<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="LibraryListing.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Listings.LibraryListing" %>

<div class="library-listing">
    <div class="inner">
        <div class="filter">
            <fieldset class="form">
                <legend><sc:Text runat="server" ID="sctLegend" Field="Legend"/></legend>
                <p class="info-text"><sc:Text runat="server" ID="sctHelp" Field="Info text"/></p>
            
                <asp:CheckBoxList runat="server" ID="cblResourceFilter" RepeatLayout="UnorderedList" CssClass="check-box-list" />
                     
                <div class="btn-holder">
                    <asp:Button ID="btnReset" runat="server" Text="Reset" CssClass="secondary-btn" OnClick="btnReset_OnClick" />
                    <asp:Button ID="btnFilter" runat="server" Text="Filter" CssClass="button" OnClick="btnFilter_OnClick" />
                </div>
            </fieldset>
        </div>
        <div class="library-holder">
            <div class="cat-info-text">
            <h2><sc:Text ID="sctStrapline" Field="Strapline" runat="server" /></h2>
            <div class="rich-text">
                <sc:Text ID="sctShortText" Field="Short text" runat="server" />
            </div>
            </div>
            <asp:ListView runat="server" ID="lvResources" OnItemDataBound="lvResources_OnItemDataBound" ItemType="Sitecore.Data.Items.Item">
                <LayoutTemplate>                    
                    <asp:PlaceHolder runat="server" ID="itemPlaceholder" />                    
                </LayoutTemplate>
                <ItemTemplate>
                    <div class="library-item">
                        <div class="item-content">
                            <h2><sc:Text runat="server" ID="sctTitle" Field="Title" <%# Item %>/></h2>
                            <div class="categorys">
                                <span class="cat-label"><sc:Text runat="server" ID="sctCategoryLabel" Field="Category" <%# Datasource %>/></span><span><asp:Literal runat="server" ID="litCategories" /></span>
                            </div>
                            <p><sc:Text runat="server" ID="sctFileDetailsLabel" Field="File details" <%# Datasource %>/><sc:Text runat="server" ID="sctShortText" Field="Description" <%# Item %>/></p>
                            <asp:HyperLink runat="server" ID="hlDownload" CssClass="link" />
                        </div>
                    </div>
                </ItemTemplate>
                <EmptyDataTemplate>
                    <sc:Text runat="server" ID="sctNoResults" Field="No results" Item="<%# Datasource %>"/>
                </EmptyDataTemplate>
            </asp:ListView>
        </div>
    </div>
</div>