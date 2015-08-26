<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Login.ascx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.Sublayouts.Components.Login" ValidateRequestMode="Disabled" %>
<%@ Register TagPrefix="sc" Namespace="Sitecore.Web.UI.WebControls" Assembly="Sitecore.Kernel" %>

<div class="login-portal">    
    <div class="inner">
        <h1><sc:Text runat="server" Field="Title" /></h1>


        <sc:Sublayout ID="sctShortText" runat="server" Path="/layouts/SubLayouts/Components/ShortText.ascx" />

        <sc:Sublayout ID="sctMainText" runat="server" Path="/layouts/SubLayouts/Components/MainText.ascx" />

        <div class="login-form">        
            <fieldset class="form"> 
                <legend>
                    <sc:Text id="sctLogin" runat="server" Field="Legend" />
                </legend>

                <asp:MultiView runat="server" ID="mvLogin" EnableViewState="True" OnActiveViewChanged="mvLogin_OnActiveViewChanged">
                    <Views>
                        <asp:View runat="server" ID="vAnon">
                            <div class="login-fail">
                                <span><sc:Text runat="server" ID="sctLoginFailed" Field="Invalid details" Visible="False"/></span>
                            </div>
                            <asp:ValidationSummary runat="server" 
                                ID="vsLogin" 
                                ValidationGroup="vgLogin"
                                DisplayMode="BulletList"
                                EnableViewState="True"
                                ShowMessageBox="True" CssClass="validation"/>
                            <div class="form-input">
                                <asp:label runat="server" AssociatedControlID="txtEmail">
                                    <sc:Text id="sctUsername" runat="server" Field="Username" />
                                </asp:label>
                                <asp:TextBox ID="txtEmail" runat="server" />
                                <asp:RequiredFieldValidator ID="rfvEmail" runat="server" ControlToValidate="txtEmail" ValidationGroup="vgLogin" Display="None" />
                                <asp:RegularExpressionValidator ID="revEmail" runat="server" ControlToValidate="txtEmail" ValidationGroup="vgLogin" Display="None"/>
                            </div>
                            <div class="form-input">
                                <asp:label runat="server" AssociatedControlID="txtPassword">
                                    <sc:Text id="sctPassword" runat="server" Field="Password" />
                                </asp:label>
                                <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" />
                                <asp:RequiredFieldValidator ID="rfvPassword" runat="server" ControlToValidate="txtPassword" ValidationGroup="vgLogin" Display="None" />
                            </div>
                            <asp:Button ID="btnLogin" runat="server" OnClick="btnLogin_OnClick" CssClass="button" />
                        </asp:View>
                        <asp:View runat="server" ID="vLoggedIn">
                            <sc:Text runat="server" ID="sctLoggedIn" Field="Logged in as"/>
                            <asp:Literal runat="server" ID="litUsername" />
                            <asp:Button runat="server" ID="btnLogout" OnClick="btnLogout_OnClick" CssClass="button"/>
                        </asp:View>
                    </Views>
                </asp:MultiView>
            </fieldset>
            <div class="help-text">                
                <sc:Text runat="server" ID="sctHelpText" Field="Help text"/>
            </div>
        </div>
    </div>
    <sc:Image runat="server" Field="Image" ID="sciLoginImage" ClientIDMode="Static" Visible="True" CssClass="hidden" />
    <input type="hidden" name="ImageSrc" value='' class="hidden" />
</div>
