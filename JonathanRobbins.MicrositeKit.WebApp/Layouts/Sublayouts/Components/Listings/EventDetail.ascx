<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="EventDetail.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Listings.EventDetail" %>

<div class="event-details">
    <div class="event-location-time">
        <div class="date-time">
            <span class="date">
                <sc:Date runat="server" ID="scdStartDate" Format="d MMMM yyyy" Field="Start time"/>
                <asp:PlaceHolder runat="server" ID="phFinishDate"> - 
                    <sc:Date runat="server" ID="scdEndDate" Format="d MMMM yyyy" Field="End time"/>
                </asp:PlaceHolder>
            </span>
            <span class="time">
                <sc:Text runat="server" ID="sctTime"  Field="Time"/>
                <sc:Date runat="server" ID="scdStartTime" Format="HH:mm" Field="Start time"/> - 
                <sc:Date runat="server" ID="scdEndTime" Format="HH:mm" Field="End time"/>
            </span>
        </div>
        <div class="address">
            <h3><sc:Text runat="server" id="sctVenueLabel" field="The venue label" /></h3>
            <ul>
                <asp:PlaceHolder runat="server" id="phAddress1">
                    <li>
                        <sc:Text runat="server" ID="sctAddressLine1" Field="Address 1"/>,
                    </li>
                </asp:PlaceHolder>
                <asp:PlaceHolder runat="server" id="phAddress2">
                    <li>
                        <sc:Text runat="server" ID="sctAddressLine2" Field="Address 2"/>,
                    </li>
                </asp:PlaceHolder>
                <asp:PlaceHolder runat="server" id="phAddress3">
                    <li>
                        <sc:Text runat="server" ID="sctAddressLine3" Field="Address 3"/>,
                    </li>
                </asp:PlaceHolder>
                <asp:PlaceHolder runat="server" id="phPostcode">
                    <li>
                        <sc:Text runat="server" ID="sctPostcode" Field="Postcode"/>
                    </li>
                </asp:PlaceHolder>
            </ul>
        </div>
    </div>

    <div class="event-info">
        <h2><sc:Text runat="server" id="sctNeedToKnowLabel" field="Need to know label" /></h2>
        <div class="content">
            <h3><sc:Text runat="server" id="sctWhenLabel" field="When is the event label" /></h3>
            <p><sc:Text runat="server" id="sctWhen" field="When is the event" /></p>
        </div>
        <div class="content">
            <h3><sc:Text runat="server" id="sctExpectLabel" field="What to expect label" /></h3>
            <p><sc:Text runat="server" id="sctExpect" field="What to expect" /></p>
        </div>
    </div>    
</div>




 