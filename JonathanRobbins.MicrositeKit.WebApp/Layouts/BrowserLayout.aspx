<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BrowserLayout.aspx.cs" Inherits="JonathanRobbins.MicrositeKit.WebApp.Layouts.BrowserLayout" %>

<%@ OutputCache Location="None" VaryByParam="none" %>
<!DOCTYPE html>
<html>                 
  <head>
    <title>
        <sc:Text Field="Browser title" runat="server" />
    </title>     
    <!-- meta -->
    <meta charset="UTF-8">  
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="<sc:Text runat='server' Field='Meta description'  />" />
    <meta name="keywords" content="<sc:Text runat='server' Field='Meta keywords'  />" />
    <!-- meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1, user-scalable=0" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <!-- css -->
    <link href="/css/MicrositeKit/master.min.css" rel="stylesheet" media="screen" />
    <div runat="server" id="removableDiv">
        <sc:XslFile ID="BrandedMircoSiteXslt" runat="server" Path="/Xsl/Fixed/Theme.xslt" />
    </div>      
    <!--[if lt IE 9]>            
        <link href="/css/MicrositeKit/ie7.css" rel="stylesheet" media="screen" />
    <![endif]-->  
       <!--[if lt IE 9]>            
        <script src="/scripts/html5shiv.js"></script>            
    <![endif]-->                  
    <sc:VisitorIdentification runat="server" />
  </head> 
  <body id="bBrowserLayout" runat="server">
    <form method="post" runat="server" id="mainform">
        <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>      
        
        <sc:Placeholder ID="phHeader" Key="phHeader" runat="server" /> 
         
        <div class="colour-wrap">
            <sc:Placeholder ID="phBreadcrumb" Key="phBreadcrumb" runat="server" />
            <sc:Placeholder ID="phTop" Key="phTop" runat="server" />
        </div>
            
        <sc:Placeholder ID="phMain" Key="phMain" runat="server" />
         
        <sc:Placeholder ID="phFooter" Key="phFooter" runat="server" />       
    </form>
    <!-- script -->    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="/scripts/Microsite/mainjs.min.js"></script>
    <sc:XslFile ID="CompanyRegXslt" runat="server" Path="/xsl/WelshWaterMicrosite/Fixed/GoogleAnalytics.xslt" />
  </body>
</html>

