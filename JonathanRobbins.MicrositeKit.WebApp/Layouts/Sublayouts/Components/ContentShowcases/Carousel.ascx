<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Carousel.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.ContentShowcases.Carousel" %>
<%@ Import Namespace="Sitecore.Data.Items" %>

<div class="carousel">
    <div id="ProgressBar"></div>
    <asp:Repeater runat="server" ID="rptCarousel" ItemType="Sitecore.Data.Items.Item">
        <ItemTemplate>
             <div class="slide">        
                <div class="inner">
                    <div class="slide-content">
                        <h2><sc:Text runat="server" ID="sctTitle" Field="Title" Item="<%# Item %>"/></h2>
                        <div class="short-text"><sc:Text runat="server" ID="sctShortText" Field="Short text" Item="<%# Item %>"/></div>
                        <sc:Link runat="server" ID="sclLink" Field="Link" Item="<%# Item %>" CssClass="link"></sc:Link>
                    </div>
                </div>
                <div class="image">
                    <sc:Image runat="server" ID="sciImage" Field="Image" Item="<%# Item %>"/>
                </div>
            </div>            
        </ItemTemplate>
    </asp:Repeater>
    <div class="pager" runat="server" id="divPager" Visible="<%# ShowControls %>"></div>    
</div>