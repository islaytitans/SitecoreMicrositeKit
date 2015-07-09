(function ($, window, document, undefined) {

    $.fn.tabs = function (options) {

        var defaults = {
            updateFormAction: true,
            openFirst: true,
            title: 'h3',
            panel: 'div',
            activeClass: 'selected',
            hashPrefix: 'tpf',
            queryStrName: 'tab',
            shownClass: 'js-open',
            hiddenClass: 'js-closed',
            idPrefix: 'cid',
            containerClass: '',
            links: []
        };

        var options = $.extend(defaults, options);

        this.each(function () {

            var $tabs = $(this);
            $tabs.addClass(options.containerClass);

            $(options.title, this).each(function (index) {

                var $panel = "";

                if ($(this).hasClass('title')) {
                    $panel = $(this).next(options.panel);
                } else {
                    var $parent = $(this).parent();
                    if ($parent.hasClass('scfForm')) {
                        $panel = $parent;
                        $panel.addClass("panel");
                    }
                }

                var elementId = $panel.attr('id');
                // if not then create a dynamic ID
                if (!elementId) {
                    elementId = options.idPrefix + index;
                    $panel.attr('id', elementId);
                }
                var imgSrc = $('.cat-icon', this).attr('src');

                //create array based on ID and text
                var linkDetails = [elementId, $(this).text(), imgSrc];
                options.links.push(linkDetails);
                //$(this).remove();

                $panel.addClass(options.hiddenClass);

            });

            if ($(options.title, this).length == 0) {
                return;
            }

            $($tabs).prepend(createAnchorList(options.links));

            $(">ul>li>a", $tabs).click(function (e) {
                changeHashFromLink($(this), $tabs);
                e.preventDefault();
            });


            $(window).on('hashchange', function () {
                loadTab($tabs);
            });

            if (options.openFirst) {
                openInitialTab($tabs);
            }


        });

        function changeHashFromLink($tablink) {
            var linkHash = $tablink.attr("href");

            /* Need to add unique modifier to the hash so that it doesn't correspond to any ID on the page and therefore prevents default hash behavior where the page scrolls to that ID  */
            var targetHash = linkHash.replace("#", "#" + options.hashPrefix);

            window.location.hash = targetHash;
        }
        function loadTab($tabs) {

            var hash = window.location.hash;
            /* Need to remove unique modifier to the hash  */
            hash = hash.replace(options.hashPrefix, "");
            //ensure all tabs are not selected
            $(">ul>li", $tabs).removeClass("selected");

            var $tablink = $('a[href^="' + hash + '"]', $tabs);
            $tablink.parent().addClass(options.activeClass);

            //hide any current shown panel
            $("." + options.shownClass, $tabs).addClass(options.hiddenClass).removeClass(options.shownClass);

            var $tab = $(hash);

            $tab.removeClass(options.hiddenClass).addClass(options.shownClass);

            if (options.updateFormAction) {
                var formAction = $('form').attr("action");
                var hashIndex = formAction.indexOf("#" + options.hashPrefix);
                if (hashIndex > 0) {
                    formAction = formAction.substr(0, hashIndex);
                }
                formAction += window.location.hash;
                $('form').attr("action", formAction);
            }
        }

        function openInitialTab($tabsContainer) {

            /* Using the Hash so that tabs are Bookmarkable */
            var initialHash = window.location.hash;
            var $activeTab = "";

            if (initialHash.indexOf(options.hashPrefix) > 0) {

                loadTab($tabsContainer);
                ///* Strip out the unique modifier */
                //initialHash = initialHash.replace(options.hashPrefix, "");
                //$activeTab = $('a[href^="' + initialHash + '"]', $tabsContainer);



            } else {

                /* if tab index is being passed through  as traditional query string e.g. ?tab=1 */
                var tabIndexQueryString = parseInt(getParameterByName(options.queryStrName));
                if (tabIndexQueryString > 0) {
                    $activeTab = $('ul>li a', $tabsContainer).eq(tabIndexQueryString - 1);
                }

                /* else if tab index is being passed through as workaround query string ?tab1 (Sitecore issue where querystring = is encoded)  */
                tabIndexQueryString = getUrlVars();

                var indexOfTabQs = tabIndexQueryString.indexOf(options.queryStrName);

                if (indexOfTabQs >= 0) {

                    var indexOfTabInt = indexOfTabQs + options.queryStrName.length;

                    tabIndexQueryString = tabIndexQueryString.substr(indexOfTabInt, indexOfTabInt + 1);
                    var tabIndex = parseInt(tabIndexQueryString);
                    if (tabIndex > 0) {
                        var formAction = $('form').attr("action");
                        formAction = formAction.replace(options.queryStrName + tabIndex, "");
                        $('form').attr("action", formAction);
                        $activeTab = $('ul>li a', $tabsContainer).eq(tabIndex - 1);
                        if (typeof window.history.replaceState != "undefined") {
                            window.history.replaceState({}, '', formAction);
                        }

                    }

                }
                if (!$activeTab.length > 0) {

                    /* if no tab then default to the first */
                    $activeTab = $('ul>li:first a', $tabsContainer);
                }

                $activeTab.trigger('click');
            }

        }
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        function getUrlVars() {

            var urlVars = window.location.href.slice(window.location.href.indexOf('?') + 1);

            return urlVars;
        }
        function createAnchorList(links) {

            // Create the list element:            
            var list = document.createElement('ul');
            for (var i = 0; i < links.length; i++) {

                var linkItem = links[i];

                // Create the list item:
                var liItem = document.createElement('li');
                var aItem = document.createElement('a');
                if (linkItem[2] != undefined) {
                    var imgItem = document.createElement('img');
                    imgItem.src = linkItem[2];
                    aItem.appendChild(imgItem);

                }
                // Set its contents:
                aItem.appendChild(document.createTextNode(linkItem[1]));
                aItem.href = "#" + linkItem[0];
                liItem.appendChild(aItem);

                // Add it to the list:
                list.appendChild(liItem);
            }

            // Finally, return the constructed list:
            return list;
        }

    }

})(jQuery, window, document);