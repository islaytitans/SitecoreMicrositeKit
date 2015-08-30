<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="PromoPanel.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Panels.PromoPanel" %>

<div class="promo-panel">
    <div class="image">
        <sc:Link runat="server" id="sclLinkImage" field="Link">
            <sc:Image runat="server" ID="sciPromoImage" Field="Image"/>
        </sc:Link>
    </div>

    <h2>
        <sc:Link runat="server" id="sclLink" field="Link">
            <asp:Literal runat="server" ID="litTitle" />
        </sc:Link>
    </h2>

    <sc:Text runat="server" id="sctShortText" field="Short text" />
</div>

