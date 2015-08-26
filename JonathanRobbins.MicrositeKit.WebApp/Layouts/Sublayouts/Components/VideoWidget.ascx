<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="VideoWidget.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.VideoWidget" %>

<div class="video">  
    <div class="video-player">
        <asp:Literal runat="server" ID="litYoutube" />
        <%--<iframe width="560" height="315" src="//www.youtube.com/embed/WrL_IlUhcpY" frameborder="0" allowfullscreen></iframe>--%>
    </div>
    <div class="video-inner">
        <h2>
            <sc:Text runat="server" ID="sctTitle" Field="Title"/>
        </h2>    
        <sc:Text runat="server" ID="sctShortText" Field="Short text"/>
    </div>
</div>