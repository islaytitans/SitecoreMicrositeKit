<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="PromoPanel.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.PromoPanel" %>

<div class="promo-panel">
    <div class="image">
        <sc:link runat="server" id="sclLinkImage" field="Link">
            <sc:Image runat="server" ID="sciPromoImage" Field="Image"/>
        </sc:link>
    </div>

    <h2>
        <sc:link runat="server" id="sclLink" field="Link">
            <asp:Literal runat="server" ID="litTitle" />
        </sc:link>
    </h2>

    <sc:Text runat="server" id="sctShortText" field="Short text" />
</div>

