<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
  xmlns:sc="http://www.sitecore.net/sc" 
  xmlns:dot="http://www.sitecore.net/dot"
  exclude-result-prefixes="dot sc">

<!-- output directives -->
<xsl:output method="html" indent="no" encoding="UTF-8" />

<!-- parameters -->
<xsl:param name="lang" select="'en'"/>
<xsl:param name="id" select="''"/>
<xsl:param name="sc_item"/>
<xsl:param name="sc_currentitem"/>

<!-- variables -->
<!-- Uncomment one of the following lines if you need a "home" variable in you code -->
<!--<xsl:variable name="home" select="sc:item('/sitecore/content/home',.)" />-->
<!--<xsl:variable name="home" select="/*/item[@key='content']/item[@key='home']" />-->
<!--<xsl:variable name="home" select="$sc_currentitem/ancestor-or-self::item[@template='site root']" />-->
<xsl:variable name="MicroSite" select="$sc_currentitem/ancestor-or-self::item[@tid='{12299997-7F64-430F-B480-04954C42B487}']" />
<xsl:variable name="SiteTheme" select="sc:fld('Theme',$MicroSite)" />
<xsl:variable name="Theme" select="sc:item($SiteTheme,.)" />
  
<!-- entry point -->
<xsl:template match="*">  
  <xsl:if test="$SiteTheme">
    <style type="text/css">
      <xsl:apply-templates select="$Theme" mode="main"/>  
    </style>
  </xsl:if>
</xsl:template>

<!--==============================================================-->
<!-- main                                                         -->
<!--==============================================================-->
<xsl:template match="*" mode="main"> 
  
  /* --- Main navigation --- */
  #Header .top-nav li a {color:<sc:text field="Font colour" />;}
  #Header .top-nav li a.selected {background:<sc:text field="Active background colour" />; color:<sc:text field="Active font colour" />}
  #Header .top-nav li a:hover {background:<sc:text field="Hover background colour" />; color:<sc:text field="Hover font colour" />;}
  
 
  /* --- Main content --- */
  #Landing, #Standard2575, #Standard7525, #StandardWithSupporting {background:<sc:text field="Content background colour" />; border-top-color:<sc:text field="Content border colour" />; border-bottom-color:<sc:text field="Content border colour" />;}
  
  
  /* --- Font colour --- */
  h1 {color:<sc:text field="Heading 1" />;}
  h2 {color:<sc:text field="Heading 2" />}
  h3 {color:<sc:text field="Heading 3" />;}
  p, li {color:<sc:text field="Main text" />;}
  a {color:<sc:text field="Links" />;}
  
  
  /* --- Buttons --- */
  .button, .library-listing .filter .button, .scfForm input[type=submit] {background:<sc:text field="Primary background colour" />; color:<sc:text field="Primary font colour" />;}
  .button:hover, .library-listing .filter .button:hover, .scfForm input[type=submit]:hover {background:<sc:text field="Primary hover background colour" />;}
  .secondary-btn, .library-listing .filter .secondary-btn, .cta-panel .button.secondary-btn {background:<sc:text field="Secondary background colour" />; color:<sc:text field="Secondary font colour" />;}
  .secondary-btn:hover, .library-listing .filter .secondary-btn:hover, .cta-panel .button.secondary-btn:hover {background:<sc:text field="Secondary hover background colour" />;}  
  
  /* --- Footer --- */
  #Footer .interal-links li a {color:<sc:text field="Footer link colour primary" />;}
  #Footer .main-site-links .external-links li a {color:<sc:text field="Footer link colour secondary" />;}
  
  
  /* --- Header ---*/
  #Header {background:<sc:text field="Header background colour" />;}
  
  /* --- Other --- */
  ul li {<sc:text field="Bullet point colour" />}
  #EventsListing ul .event-item, #BlogListing ul .blog-item, #NewsListing ul .news-item {border-color:<sc:text field="Key line colour" />;}
  
  
  /* --- Widgets --- */
  /* feature panel */
  .feature-panel {background:<sc:text field="Feature panel background colour" />;}
  .feature-panel h2, .feature-panel a {color:<sc:text field="Feature panel title colour" />;}
  .feature-panel p {color:<sc:text field="Feature panel font colour" />;}
  
  /* promo panel */
  .promo-panel {background:<sc:text field="Promo panel background colour" />; border-color:<sc:text field="Key line colour" />;}
  .promo-panel h2 a {color:<sc:text field="Promo panel title colour" />;}
  .promo-panel p {color:<sc:text field="Promo panel font colour" />;}
  
  /* CTA panel */
  #PhPromo .cta-panel, .cta-panel {background:<sc:text field="CTA background colour" />; border-color:<sc:text field="Key line colour" />;} 
  #PhPromo .cta-panel h2, .cta-panel h2  {color:<sc:text field="CTA title colour" />;}
  #PhPromo .cta-panel .short-text, .cta-panel .short-text {color:<sc:text field="CTA font colour" />;}
  
  /* Carousel */
  .carousel .pager span.active {background:<sc:text field="Carousel slide indicator active colour" />;}
  .carousel .pager span {background:<sc:text field="Carousel slide indicator colour" />;}
  .carousel h2, .carousel .short-text p, .carousel a {color:<sc:text field="Carousel font colour" />;}
  
  /* sub nav */
  #SubNav {border-color:<sc:text field="Key line colour" />;} 
  #SubNav li a {color:<sc:text field="Font colour" />;}
  #SubNav li a.selected {background:<sc:text field="Active background colour" />; color:<sc:text field="Active font colour" />}
  #SubNav li a:hover {background:<sc:text field="Hover background colour" />; color:<sc:text field="Hover font colour" />;}
  
  /* forms */
  .scfForm, .form {border-color:<sc:text field="Key line colour" />; background:<sc:text field="Form background colour" />;}
  

</xsl:template>
</xsl:stylesheet>