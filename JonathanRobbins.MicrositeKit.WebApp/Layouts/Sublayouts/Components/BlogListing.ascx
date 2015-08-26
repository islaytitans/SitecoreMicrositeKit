<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="BlogListing.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.BlogListing" %>

<div id="BlogListing">
    <div class="inner">
        <asp:ListView runat="server" ID="lvBlogs" OnItemDataBound="lvBlogs_OnItemDataBound">
            <LayoutTemplate>
                <ul>
                    <asp:PlaceHolder runat="server" ID="itemPlaceholder" />
                </ul>
            </LayoutTemplate>
            <ItemTemplate>
                <li class="blog-item">                
                    <div class="blog-content">                        
                        <div class="image">
                            <asp:HyperLink runat="server" ID="hlImage" ><sc:Image runat="server" ID="sciImage" class="image" Field="Image" /></asp:HyperLink>
                        </div>
                        <div class="blog-text">
                            <h2><asp:HyperLink runat="server" ID="hlTitle" ><sc:Text runat="server" ID="sctTitle" Field="Title" /></asp:HyperLink></h2>                        
                            <div class="author-date-holder">                        
                                <span class="date"><sc:Date runat="server" ID="scdDate" Format="ddd d MMMM yyyy" Field="Date"/></span>
                                <span class="time"><sc:Text runat="server" ID="scdAuthor" Field="Author" /></span>
                            </div>                        
                            <sc:Text runat="server" ID="sctShortText" Field="Short text"/>
                            <asp:PlaceHolder runat="server" ID="phComments">
                                <span class="comment-count">
                                    <sc:Text runat="server" ID="sctCommentsLabel" Field="Comments"/>: <span class="count"><asp:Literal runat="server" ID="litCommentCount" /></span>
                                </span>
                            </asp:PlaceHolder>
                            <asp:HyperLink runat="server" ID="hlViewBlog" class="link"/>
                        </div>
                    </div>              
                </li> 
            </ItemTemplate>
        </asp:ListView>
    </div>
</div>