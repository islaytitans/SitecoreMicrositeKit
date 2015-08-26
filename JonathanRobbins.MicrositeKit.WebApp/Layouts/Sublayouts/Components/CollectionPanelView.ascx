﻿<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CollectionPanelView.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.CollectionPanelView" %>

<h2>
    <sc:Text runat="server" id="sctTitle" field="Title" Item="<%# ViewItem %>"/>
</h2>
<sc:Image runat="server" id="sciImage" field="Image" Item="<%# ViewItem %>"/>
<!-- this block of html needs to be in a seperate control -->
<div class="article-content">
    <div class="text">
        <p>
            <sc:Text runat="server" id="sctStrapline" Field="Strapline" Item="<%# ViewItem %>" />
        </p>
        <asp:PlaceHolder runat="server" ID="phComments">
            <span class="comments">
                <sc:Text runat="server" id="sctComments" field="Comments" Item="<%# MicrositeDictionaryItem %>"/>
                <asp:Literal runat="server" ID="litCommentCount" /></span>
        </asp:PlaceHolder>
    </div>
    <asp:HyperLink runat="server" ID="hlViewMore" class="link" >
        <sc:Text runat="server" id="sctViewMore" field="View more" SItemGuid="<%# MicrositeDictionaryItem %>"/>
    </asp:HyperLink>
</div>
