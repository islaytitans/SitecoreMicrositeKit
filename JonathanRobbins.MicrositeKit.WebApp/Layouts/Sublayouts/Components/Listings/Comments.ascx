<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Comments.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Listings.Comments" %>
<%@ Import Namespace="Sitecore.Data.Items" %>

<div class="comments-panel">
    <asp:UpdatePanel runat="server">
        <Triggers>
            <asp:PostBackTrigger ControlID="btnSubmit"/>
            <asp:PostBackTrigger ControlID="rptComments"/>
        </Triggers>
        <ContentTemplate>
            <asp:PlaceHolder runat="server" ID="phMessaging" Visible="False">
                <sc:Text runat="server" ID="sctError" Field="Submit failed"/>
            </asp:PlaceHolder>
            <asp:MultiView runat="server" ID="mvCommentBox">
                <Views>
                    <asp:View runat="server" ID="vLoggedIn">
                        <asp:Panel runat="server" ID="pnlComment" DefaultButton="btnSubmit" CssClass="comment-box">
                            <asp:Label runat="server" AssociatedControlID="txtCommentBox">
                                <sc:Text runat="server" ID="sctComment" Field="Comment label"/>
                            </asp:Label>
                            <asp:TextBox ID="txtCommentBox" runat="server" TextMode="MultiLine" CssClass="text-box" />
                            <asp:Button runat="server" ID="btnSubmit" OnClick="btnSubmit_OnClick" CssClass="button"/>
                        </asp:Panel>
                    </asp:View>
                    <asp:View runat="server" ID="vAnon">
                        <sc:Text runat="server" ID="sctLogin" Field="Short text"/>
                    </asp:View>
                </Views>
            </asp:MultiView>

            <asp:Repeater runat="server" ID="rptComments" OnItemCommand="rptComments_OnItemCommand"
                OnItemDataBound="rptComments_OnItemDataBound">
                <HeaderTemplate>
                    <div class="comment-respond-list">
                </HeaderTemplate>
                <ItemTemplate>                
                    <div class="respond-comment"> 
                        <span class="respond-name">
                            <sc:Text runat="server" ID="sctFirstName" Field="First name" />
                              <sc:Text runat="server" ID="sctSurname" Field="Last name" />,</span>
                        <span class="respond-date">
                            <sc:Date runat="server" ID="sctDate" Field="__created" Format="dd/MM/yyyy HH:mm"/></span>
                        <div class="comment">
                            <div class="rich-text">
                                <sc:Text runat="server" ID="sctComment" Field="Short text"/>
                            </div>
                            <asp:PlaceHolder runat="server" ID="phRespond" Visible='<%# UserLoggedIntoSite(Page) %>'>                                
                                <asp:HyperLink runat="server" ID="hlRespond" Text='<%# DataSource["Respond"] %>' ClientIDMode="Static" CssClass="link opener"/>
                                <asp:PlaceHolder runat="server" ID="phRespondAction">
                                    <asp:Panel runat="server" ID="pnlComment" DefaultButton="btnSubmitResponse" CssClass="hidden-panel">
                                        <asp:Label ID="Label1" runat="server" AssociatedControlID="txtReponseBox">
                                            <sc:Text runat="server" ID="sctResponseLabel" Field="Comment label"/>
                                        </asp:Label>
                                        <asp:TextBox ID="txtReponseBox" runat="server" TextMode="MultiLine" CssClass="text-box" />
                                        <asp:Button runat="server" ID="btnSubmitResponse" CommandName='<%# ResponseCommandArguement %>' Text='<%# DataSource["Submit comment"] %>' CssClass="button"/>
                                    </asp:Panel>
                                </asp:PlaceHolder>
                            </asp:PlaceHolder>
                        </div>
                    </div>
                </ItemTemplate>
                <FooterTemplate>
                    </div>
                </FooterTemplate>
            </asp:Repeater>
        </ContentTemplate>
    </asp:UpdatePanel>
</div>