var ww = ww || {};

// GA Tracking used throughout WW website

/* Contents
    === Init ===
      = Bind Module Specific Events =
        - Feedback panel widget
        - In Your Area Widget
        - Homepage Promo Panel
        - Featured Article Panel
        - Mega Nav Promo Panel
        - News Listings
        - Whats On Listings
        - Social Links
        - Device Switcher
        - Language Selector
        - Mobile Carousel
        - Alert Banners/Messages
        - Live Chat
        - Developer Services
        - External Link & Document Download Tracking
        - In Your Area
      = Bind Global Functions =
        - Push Event
*/

(function ($) {
    ww.gaTrackingEvents = {


        init: function () {
            this.bindEvents();
        },


        bindEvents: function () {

            // Class added to tracked elements/modules
            var gaHandle = ".js-ga-track",
                ga = this;

            // Bind Module Specific Tracking Events
            feedbackPanel();
            inYourAreaWidget();
            homePromoPanels();
            featuredArticles();
            megaNavPromoPanel();
            newsListings();
            whatsOnListings();
            socialLinks();
            deviceSwitcher();
            languageSelector();
            mobileCarousel();
            alertBanners();
            liveChat();
            developerServices();
            inYourArea();
            externalLinksAndFiles();

            function feedbackPanel() {
                var module = $('.feedback-pnl');

                module.find('input:submit').on("click", function (e) {
                    var url = window.location.href;
                    var formID = module.find('#hfFormID').val();
                    var formName = module.find('#hfFormName').val();
                    ga.pushEvent("Feedback form submission", formName, formID, url);
                });

                module.find('.noFeedbackBtn').on("click", function (e) {
                    var url = window.location.href;
                    var formID = module.find('#hfFormID').val();
                    var formName = module.find('#hfFormName').val();
                    ga.pushEvent("Feedback form closed forever", formName, formID, url);
                });
            }

            function inYourAreaWidget() {

                // Store module
                var module = $('.emergencies' + gaHandle);

                // Push event on return key hit
                module.find('input').on("keydown", function (e) {
                    if (e.keyCode === 13) {
                        var searchVal = $(this).val();
                        ga.pushEvent("In your area panel", "Incident or location", searchVal);
                    }
                });
                // Push event on click of "find" button
                module.find('.submit').on("click", function (e) {
                    var searchVal = $(this).siblings(":text").val();
                    ga.pushEvent("In your area panel", "Incident or location", searchVal);
                });
                // Push event on click of ticker/scrolling banner item
                module.find(".ticker-content a").on("click", function (e) {
                    var eventType = $(this).parent(".ticker-content").siblings("h5").text(),
                        eventString = $(this).text(),
                        emergencyMessage = (eventType + ": " + eventString);
                    ga.pushEvent("In your area panel", "Incident or location", emergencyMessage);
                });
            }


            function homePromoPanels() {

                // Store module
                var module = $('.call-to-action.pointerDevice' + gaHandle);

                // Push event on click of promo panel
                module.on("click", function (e) {
                    var panelName = $(this).find(".CTA-text").text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Promo panel", panelName, pathname)
                });
            }


            function featuredArticles() {

                // Store module
                var module = $('.feature.article' + gaHandle);

                // Push event on click of featured article
                module.find("a").on("click", function (e) {
                    var articleTitle = $(this).closest(".feature.article").find("h2 a").text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Featured article panel", articleTitle, pathname);
                });
            }

            function megaNavPromoPanel() {

                // Store module
                var module = $('.mega-nav-feature-wrapper' + gaHandle);

                // Push event on click of a mega nav promo panel
                module.find("a").on("click", function (e) {
                    var promoPanelName = $(this).siblings(".mega-nav-feature-heading").text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Mega nav promo panel", promoPanelName, pathname);
                });
            }

            function newsListings() {

                // Store module
                var module = $('.whats_on_column' + gaHandle);

                module.find("a").on("click", function (e) {
                    var newsTitle = $(this).siblings(".headline").text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Homepage whats on listings", newsTitle, pathname);
                });
            }

            function whatsOnListings() {

                // Store module
                var module = $('.news_column' + gaHandle);

                module.find("a").on("click", function (e) {
                    var whatsOnTitle = $(this).find(".headline").text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Homepage news listings", whatsOnTitle, pathname);
                });
            }

            function socialLinks() {

                // Store module
                var module = $('.network-channels' + gaHandle);

                module.find("a").on("click", function (e) {
                    var socialNetwork = $(this).find("span").text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Social link panel", pathname, socialNetwork);
                });
            }

            function deviceSwitcher() {

                // Store module
                var module = $('.device-switcher' + gaHandle);

                module.find("a").on("click", function (e) {
                    var layoutChosen = $(this).text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Device layout change", layoutChosen, pathname);
                });
            }

            function languageSelector() {

                // Store module
                var module = $('.lang-selector' + gaHandle);

                module.find("input").on("click", function (e) {
                    var languageChosen = $(this).val().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Language change", languageChosen, pathname);
                });
            }

            function mobileCarousel() {
                if (ww.confirmDevice.mobileDevice) {

                    // Store module
                    var module = $('.item' + gaHandle);

                    module.find("a").on("click", function (e) {
                        var carouselItem = $(this).find("h4").text().trim();
                        ga.pushEvent("Carousel", "Click", carouselItem);
                    });
                }
            }

            function alertBanners() {

                // Store module
                var module = $('.icon-cross' + gaHandle);

                module.on("click", function (e) {

                    // Store the banners class
                    var bannerID = $(this).parent().attr("class")

                    // Find out which banner type we are targeting
                    if (bannerID === "info-msg") {
                        var message = $(this).parent(".info-msg").find("h2").text().trim();
                        ga.pushEvent("Alert panel", "Clicked", message);
                    } else if (bannerID === "incident-msg") {
                        var message = $(this).parent(".incident-msg").find("h2").text().trim();
                        ga.pushEvent("Alert panel", "Clicked", message);
                    }
                });
            }

            function liveChat() {

                // Store module
                var module = $('.live-chat' + gaHandle);

                // Push event on click of the live chat widget opening
                module.on("click", function (e) {
                    var pageURL = document.URL;
                    ga.pushEvent("Promo panel", pageURL, "Live chat panel opened");

                    // Time how long the live chat form is open for
                    // Start a timer
                    var counter = 0;
                    // Increase count every second until closed
                    var myInterval = setInterval(function () {
                        ++counter;
                    }, 1000);

                    // On close of the form
                    $(".close-icon").on("click", function (e) {
                        // Stop the timer
                        clearInterval(myInterval);
                        var closeMessage = "Live chat closed after " + myInterval + " seconds";
                        // Push close event and the total usage time
                        ga.pushEvent("Promo panel", pageURL, closeMessage);
                    });
                    // On reload or when user leaves the current page
                    $(window).unload(function (e) {
                        // Stop the timer
                        clearInterval(myInterval);
                        var closeMessage = "Live chat closed after " + myInterval + " seconds";
                        // Push close event and the total usage time
                        ga.pushEvent("Promo panel", pageURL, closeMessage);
                    });

                });
            }

            // This is used solely to track mobile activity on developer services pages
            function developerServices() {
                // First check if the device is mobile using the global func
                if (ww.confirmDevice.mobileDevice) {
                    // Check URL contains relevant form
                    var url = window.location.href;
                    var pageURL = document.URL;
                    var pageTitle = document.title;
                    if (url.search("Connection-to-a-Water-Main") >= 0) {
                        ga.pushEvent("Dev services accessed via mobile", pageURL, pageTitle);
                    }
                }
            }

            function inYourArea() {

                // keep checking for geolocation
                var checkForInYourAreaMarkup;
                checkForInYourAreaMarkup = setInterval(function () {
                    if (ww.inYourArea.ganalyticsCallback) {
                        clearInterval(checkForInYourAreaMarkup);

                        // Push event on click of any tabs
                        $(".tab-btns").find("a").on("click", function (e) {
                            var tabLabel = $(this).text().trim();
                            ga.pushEvent("In your area", "Tab clicked", tabLabel);
                        });

                        // Push event on "more info" links
                        $('.map').on('click', 'a.more-info-window', function (e) {
                            setTimeout(function () {
                                var moreInfoContent = $(".more-info-content.open").find("h3").text().trim();
                                ga.pushEvent("In your area", "More information clicked", moreInfoContent);
                            }, 500);
                        });

                        // Push event on post code lookup (return key)
                        var postCodeField = $('.postcode-lookup' + gaHandle);
                        postCodeField.find("input:text").on("keydown", function (e) {
                            if (e.keyCode === 13) {
                                var postCodeValue = $(this).val();
                                ga.pushEvent("In your area", "Post code entry", postCodeValue);
                            }
                        });

                        // Push event on post code lookup (submit button click)
                        postCodeField.find("input:submit").on("click", function (e) {
                            var postCodeValue = $(this).siblings("input:text").val();
                            ga.pushEvent("In your area", "Post code entry", postCodeValue);
                        });

                    } else if (ww.inYourArea.ganalyticsCallback === false) {
                        clearInterval(checkForInYourAreaMarkup);
                    } else {
                        setTimeout(function () {
                            clearInterval(checkForInYourAreaMarkup);
                        }, 5000);
                    }
                }, 500);
            }

            function externalLinksAndFiles() {

                // State which file types to check for
                var filetypes = /\.(zip|exe|pdf|doc*|xls*|ppt*|mp3)$/i,
                    baseHref = '';

                // If undefined - set baseHref
                if ($('base').attr('href') != undefined) {
                    baseHref = $('base').attr('href');
                }

                // Check if each link is an external address or a download file
                $('a').each(function () {

                    // Store href attribute
                    var href = $(this).attr('href');

                    // Check if hfref matches the domain
                    if (href && (href.match(/^https?\:/i)) && (!href.match(document.domain))) {
                        // Bind push event to track external link
                        $(this).click(function () {
                            // Remove the :http//
                            var extLink = href.replace(/^https?\:\/\//i, '');
                            // Push event to GA
                            ga.pushEvent("Resource", "Outbound link", extLink);
                        });
                    }

                        // If href matches selected filetypes
                    else if (href && href.match(filetypes)) {
                        // Bind click event to the link
                        $(this).click(function () {

                            // State extensions
                            var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined,
                                exten2 = extension[0].toUpperCase();

                            // If word doc
                            if (exten2 == "DOC") {
                                useLabel = DOC;
                                // If PDF
                            } else if (exten2 == "PDF") {
                                useLabel = PDF;
                                // If MP3
                            } else if (exten2 == "MP3") {
                                useLabel = MP3;
                                // If doc download
                            } else {
                                useLabel = "Document_Download";
                            }

                            // State file path to match url
                            var filePath = href;
                            // Push event to GA
                            ga.pushEvent("Resource", useLabel, filePath);
                        });
                    }
                });
            }
        },

        // Global push function - with language
        pushEvent: function (category, action, label) {
            // Set Language
            var Language,
                chosenLanguage = $(".language-selector").find(":submit").val();

            // The current language is the OPPOSITE of the chosenLanguage var
            if (chosenLanguage === "Cymraeg") {
                language = "English";
            } else {
                language = "Welsh";
            }

            // Push event for site language chosen
            _gaq.push(['_setCustomVar', 1, 'Language', Language, 1]);
            // Push event tracking data
            _gaq.push(['_trackEvent', category, action, label]);
        },
    };
})(jQuery);