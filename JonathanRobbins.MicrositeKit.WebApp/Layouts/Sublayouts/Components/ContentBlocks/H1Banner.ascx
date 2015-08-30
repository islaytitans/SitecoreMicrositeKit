<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="H1Banner.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.ContentBlocks.H1Banner" %>

<div class="page-header">
    <div class="inner">
        <h1><sc:Text runat="server" Field="Title" ID="sctTitle" /></h1>
    </div>    
    <input type="hidden" name="ImageSrc" value='<sc:Image runat="server" Field="Image" ID="sciImage"  />' class="hidden" />
</div>


