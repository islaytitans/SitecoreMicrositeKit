<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Footer.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed.Footer" %>

<footer id="Footer">
    <div class="inner">        
        <div class="main-site-links">
            <sc:Image runat="server" ID="sciFooterImage" Field="Footer logo" CssClass="brand-image" />            
            <asp:Repeater runat="server" ID="rptExternalFooterLinks" OnItemDataBound="rptFooterLinks_OnItemDataBound">
                <HeaderTemplate>                
                    <ul class="external-links">
                </HeaderTemplate>
                <ItemTemplate>
                    <li>
                        <asp:HyperLink runat="server" ID="hlFooterLink">
                            <sc:Text runat="server" ID="sctFooterLink" Field="Page Title" />
                        </asp:HyperLink>                        
                    </li>
                </ItemTemplate>
                <FooterTemplate>
                    </ul>                
                </FooterTemplate>
            </asp:Repeater>     
        </div>

        <asp:PlaceHolder runat="server" ID="phInternalLinks">
            <asp:Repeater runat="server" ID="rptInternalFooterLinks" OnItemDataBound="rptFooterLinks_OnItemDataBound">
                <HeaderTemplate>
                    <ul class="interal-links">
                </HeaderTemplate>
                <ItemTemplate>
                    <li>
                        <asp:HyperLink runat="server" ID="hlFooterLink">
                            <sc:Text runat="server" ID="sctFooterLink" Field="Navigation link text" />
                        </asp:HyperLink>                        
                    </li>
                </ItemTemplate>
                <FooterTemplate>
                    </ul>
                </FooterTemplate>
            </asp:Repeater>
        </asp:PlaceHolder>
        <sc:Placeholder ID="phSocial" Key="phSocial" runat="server" /> 
        <span id="copyright"><sc:Text runat="server" ID="sctCopyRight" Field="Copyright text" /></span>     
        <div id="BackTotop" class="icon icon-up-arrow">to top</div>      
    </div>
</footer>