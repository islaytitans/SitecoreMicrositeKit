<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="SubNav.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Fixed.SubNav" %>

<asp:Repeater runat="server" ID="rptSubNav" OnItemDataBound="rptSubNav_ItemDataBound">
    <HeaderTemplate>
        <nav id="SubNav">
        <!-- Level 0 -->
        <ul class="level-0">
    </HeaderTemplate>
    <ItemTemplate >
        <li>
            <asp:HyperLink runat="server" ID="lnkSubNav" CssClass ="Children"/>
            
            <asp:Repeater runat="server" ID="rptSubNav" OnItemDataBound="rptSubNav_ItemDataBound">
                <HeaderTemplate>
                    <!-- Level 1 -->
                    <ul class="level-1">
                </HeaderTemplate>    
                <ItemTemplate >
                    <li>
                        <asp:HyperLink runat="server" ID="lnkSubNav" CssClass ="Children"/>

                        <asp:Repeater runat="server" ID="rptSubNav" OnItemDataBound="rptSubNav_ItemDataBound">
                            <HeaderTemplate>
                                <!-- Level 2 -->
                                <ul class="level-2">
                            </HeaderTemplate>
                            <ItemTemplate >
                                <li>
                                    <asp:HyperLink runat="server" ID="lnkSubNav" CssClass ="Children"/>
                                </li>
                            </ItemTemplate> 
                            <FooterTemplate >
                                </ul>
                            </FooterTemplate>
                        </asp:Repeater>

                    </li>
                </ItemTemplate>   
                <FooterTemplate >
                    </ul>
                </FooterTemplate>
            </asp:Repeater>

        </li>
    </ItemTemplate>
    <FooterTemplate >
        </ul>
        </nav>
    </FooterTemplate>
</asp:Repeater>
