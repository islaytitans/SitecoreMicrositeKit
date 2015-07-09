var jq = jQuery.noConflict();
// ====================================
// Background image insert
// ====================================

function backgroundInsert() {
    var Image = jq('.page-header .hidden').val();
    var hasSocial = jq('.colour-wrap #social-network').length;
    var ImageSrc = jq(Image).attr('src');
    if (jq(Image).length > 0) {
        jq('.page-header').addClass('banner');
        jq('.page-header').css('background-image', 'url("' + ImageSrc + '")');
        jq('.page-header h1').css('color', '#fff');
        jq('.colour-wrap').css('background', 'transparent');
    } else if (hasSocial > 0){
        jq('.colour-wrap').css('background', 'transparent');
        jq('.colour-wrap #social-network').insertAfter('.page-header .inner h1');
    }
}

// ====================================
// Viewport height
// ====================================
function getHeight() {
    viewportHeight = jq(window).height();
    headerHeight = jq('#Header').outerHeight(true);
    footerHeight = jq('#Footer').outerHeight(true);    
    combinedHeights = viewportHeight - (headerHeight + footerHeight) - 20; // minus 20 to correct spacing
}

// ====================================
// Set body image on login
// ====================================
function bodyBackground() {
    getHeight();   
    var Image = jq('.login-portal .hidden');
    var ImageSrc = jq(Image).attr('src');    
    if (jq(Image).length > 0) {
        jqelementParent = jq('.login-portal').parent();
        jqelementParent.css('background-image', 'url("' + ImageSrc + '")').addClass('no-border-top').css('height', '' + combinedHeights + '').css('min-height', '600px');
    }    
    jq(Image).remove();
}


function listingDate() {    
    jq('.event-item').each(function () {
        var dateLength = jq('.date', this).text();
    });    
}

// ====================================
// Scroll to top
// ====================================
function topScroll() {
    jq('#BackTotop').click(function () {
        jq('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
}

function scrollChecker(){
    if (jq(this).scrollTop() > 400) {        
        jq("#BackTotop").fadeIn();
    }
    else {
        jq("#BackTotop").hide();
    }
}


// ====================================
// Parallax scroll
// ====================================
function parallax() {
    var scrolled = jq(window).scrollTop();
    var windowSize = jq(window).width();
    if (windowSize <= 1024) {        
        jq('.banner').css('background-position', '50%' + -(scrolled * 0.2) + 'px');
    }
    else {
        jq('.banner').css('background-position', '0 ' + -(scrolled * 0.2) + 'px');
    }
}

// ====================================
// Sub navigation relocate
// ====================================
function subnavRelocate() {
    var windowSize = jq(window).width();
    if (windowSize <= 768) {
        jq('#SubNav').insertBefore('.main-content');
    } else if (windowSize > 768) {
        jq('#SubNav').insertAfter('.main-content');
    }
}



// ====================================
// Carousel
// ====================================
function carousel() {
    jq('.carousel').cycle({
        slides: '.slide',
        fx: 'fade',
        speed: 800,
        delay: 8000,
        timeout: 8000,
        pager: '.pager',
        pagerActiveClass: 'active',
        pauseOnHover: true,
        swipe: true,
        swipeFx: 'fade'
    });

    // progress bar to indicate time till next slide
    var progress = jq('#ProgressBar'),
    slideshow = jq('.carousel');

    slideshow.on('cycle-initialized cycle-before', function (e, opts) {
        progress.stop(true).css('width', 0);
    });

    slideshow.on('cycle-initialized cycle-after', function (e, opts) {
        if (!slideshow.is('.cycle-paused'))
            progress.animate({ width: '100%' }, opts.timeout, 'linear');
    });

    slideshow.on('cycle-paused', function (e, opts) {
        progress.stop();
    });

    slideshow.on('cycle-resumed', function (e, opts, timeoutRemaining) {
        progress.animate({ width: '100%' }, timeoutRemaining, 'linear');
    });
}

// ====================================
// Collection panel hover interaction 
// ====================================
function hoverInt() {
    jq('.collection-panel .panel').hover(function () {
        if (jq('.article-content', this).is(':visible')) {
            jq('.article-content',this).fadeOut(300)
        }
        else {
            jq('.article-content', this).fadeIn(600);
        }        
    });
}

function CollectionLayout() {

    // Text ellipse 
    jq(".collection-panel  .featured .text p").each(function () {
        if (jq(this).text().length > 160) {
            jq(this).html('' + jq(this).text().substr(0, 160) + '...');
        }
    });

    jq(".collection-panel .medium .text p").each(function () {
        if (jq(this).text().length > 110) {
            jq(this).html('' + jq(this).text().substr(0, 110) + '...');
        }
    });

    jq(".collection-panel  .small .text p").each(function () {        
        // remove comments div on small panes
        jq(this).parent().find('.comments').remove();
        jq(this).remove();
    });

    jq('.collection-panel .show-more').click(function () {
        jq(this).toggleClass('open');
        jq('html, body').animate({
            scrollTop: (jq('.show-more').first().offset().top)
        }, 'slow');
        // focus window to click event smooth transition
        jq(this).parent().find('.hidden-pane').slideToggle();
        return false;
    });

    // Make panel clickable
    jq('.collection-panel .article-content .link').each(function () {
        var link = jq(this).attr('href');
        var divClick = jq(this).parent().parent();
        jq(divClick).click(function () {
            window.location = link;
        });
    });
}

// ====================================
// Events, News, Blog listing text ellispse
// ====================================
function textEllipses() {    
    var ellipseHeading = jq('#EventsListing .event-item h2 a, #NewsListing .news-item h2 a, #BlogListing .blog-item h2 a');        
    // heading text shortend
    //jq(ellipseHeading).each(function () {
    //    if (jq(this).text().length > 20) {
    //        jq(this).html('' + jq(this).text().substr(0, 20) + '...');
    //    }
    //});
    
    jq('#EventsListing .event-item p').each(function () {
        if (jq(this).text().length > 60) {
            jq(this).html('' + jq(this).text().substr(0, 60) + '...');
        }
    });

    var ellipseText = jq('#NewsListing .news-item p, #BlogListing .blog-item p');
    jq(ellipseText).each(function () {
        if (jq(this).text().length > 120) {
            jq(this).html('' + jq(this).text().substr(0, 120) + '...');
        }
    });  
}


// ====================================
// Icon insert
// ====================================
function inconInsert() {
    jq('.library-listing .library-item .link').each(function () { 
        jq(this).prepend('<span class="icon icon-download" />', this);
    });

    jq('#EventsListing .event-item .link, #NewsListing .news-item .link, #BlogListing .blog-item .link').each(function () {
        jq(this).prepend('<span class="icon icon-blue-arrow" />', this);
    });
}

// ====================================
// Video / YouTube
// ====================================
function videoPlayer() {
    if (jq('.video') != null) {
        jq('.video').each(function () {
            var videoWidth = jq(this).width();            
            var videoHeight = videoWidth / 2;
            jq('.video-player iframe', this).attr('width', videoWidth);
            jq('.video-player iframe', this).attr('height', videoHeight);
        });
    }
}

// ====================================
// Blog commenting
// ====================================
function blogComments() {
    jq('.comment-respond-list .respond-comment .comment').each(function () {               
        var hiddenPanel = jq(this).find('.hidden-panel');
        jq('.opener', this).click(function(){
            jq(hiddenPanel).slideToggle('slow');
        });
    });
}

// ====================================
// Webforms
// ====================================
function webForm() {
    jq('.scfForm').each(function () {
        // move footer text below the button
        jq(this).find(this, '.scfFooterBorder').insertBefore('.scfSubmitButtonBorder');
    });
}


// ====================================
// DOM Ready
// ====================================
jq(document).ready(function () {    
    backgroundInsert();
    bodyBackground();
    CollectionLayout();
    listingDate();
    topScroll();
    carousel();
    hoverInt();
    webForm();
    inconInsert();
    videoPlayer();
    blogComments(); 
    textEllipses();
    subnavRelocate();
});

// ====================================
// Window Resize
// ====================================
jq(window).resize(function () {
    getHeight();
    bodyBackground();
    videoPlayer();
    subnavRelocate();
});


// ====================================
// Window Scroll
// ====================================
jq(window).scroll(function () {
    scrollChecker();
    parallax();       
});