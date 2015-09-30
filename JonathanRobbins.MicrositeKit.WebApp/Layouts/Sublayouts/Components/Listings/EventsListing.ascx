<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="EventsListing.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Listings.EventsListing" %>
<%@ Register Src="~/Layouts/Sublayouts/Components/Listings/EventDetail.ascx" TagPrefix="uc1" TagName="EventDetail" %>

<div id="EventsListing">
    <div class="inner">
        <asp:ListView runat="server" ID="lvEvents" OnItemDataBound="lvEvents_OnItemDataBound" ItemType="Sitecore.Data.Items.Item">
            <LayoutTemplate>
                <ul>
                    <asp:PlaceHolder runat="server" ID="itemPlaceholder" />
                </ul>
                <uc1:EventDetail runat="server" id="EventDetail" />
            </LayoutTemplate>
            <ItemTemplate>
                <li class="event-item">                
                    <div class="event-content">
                        <div class="date">
                            <span><sc:Date runat="server" ID="scdDate" Format="ddd d MMMM yyyy" Field="Start time" Item="<%# Item %>"/></span>
                        </div>
                        <h2><asp:HyperLink runat="server" ID="hlTitle" ><sc:Text runat="server" ID="sctTitle" Field="Title" Item="<%# Item %>"/></asp:HyperLink></h2>                        
                        <span class="time">
                            <sc:Text runat="server" ID="sctTime" Field="Time" Item="<%# Datasource %>"/> <sc:Date runat="server" ID="scdTimeStart" Format="HH:mm" Field="Start time" Item="<%# Item %>"/> - <sc:Date runat="server" ID="scdTimeEnd" Format="HH:mm" Field="End time" Item="<%# Item %>"/>
                        </span>
                        <sc:Text runat="server" ID="sctShortText" Field="Short text" Item="<%# Item %>"/>
                        <asp:HyperLink runat="server" ID="hlViewEvent" class="link"/>
                    </div>
                    <div class="venue-details">
                        <div class="image">
                            <asp:HyperLink runat="server" ID="hlImage" ><sc:Image runat="server" ID="sciImage" class="image" Field="Image" /></asp:HyperLink>
                        </div>
                        <ul class="address">
                            <asp:PlaceHolder runat="server" ID="phAddressLine1">
                                <li><sc:Text runat="server" ID="sctAddressLine1" Field="Address 1"/></li>
                            </asp:PlaceHolder>
                            <asp:PlaceHolder runat="server" ID="phAddressLine2">
                                <li><sc:Text runat="server" ID="sctAddressLine2" Field="Address 2"/></li>
                            </asp:PlaceHolder>
                            <asp:PlaceHolder runat="server" ID="phAddressLine3">
                                <li><sc:Text runat="server" ID="sctAddressLine3" Field="Address 3"/></li>
                            </asp:PlaceHolder>
                            <asp:PlaceHolder runat="server" ID="phPostcode">
                                <li><sc:Text runat="server" ID="sctAddressPostcode" Field="Postcode"/></li>
                            </asp:PlaceHolder>
                        </ul>
                    </div>                
                </li> 
            </ItemTemplate>
        </asp:ListView>
    </div>
</div>