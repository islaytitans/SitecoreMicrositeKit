; (function ($, window, document, undefined) {

    $.fn.accordion = function (options) {

        var defaults = {
            updateFormAction: true,
            openFirst: true,
            title: 'h3',
            panel: 'div',
            activeClass: 'selected',
            hashPrefix: 'accordion',
            shownClass: 'shown',
            hiddenClass: 'js-closed',
            idPrefix: 'CID',
            links: []

        };

        var options = $.extend(defaults, options);

        this.each(function () {

            var $container = $(this);

            $(options.title).each(function (index) {

                var $panel = $(this).next(options.panel);
                var elementId = $panel.attr('id');
                // if not then create a dynamic ID
                if (!elementId) {
                    elementId = options.idPrefix + index;
                    $panel.attr('id', elementId);
                }
                
                $(this).wrapInner("<a href='#" + elementId + "'></div>");
                $panel.addClass(options.hiddenClass);
            });

           // $($tabs).prepend(createAnchorList(options.links));

            $("h3 > a", this).click(function () {

                $(" h3 ", $container).removeClass("selected");

                $("." + options.shownClass, $container).addClass(options.hiddenClass).removeClass(options.shownClass);

                $(this).parent().addClass(options.activeClass);

                var $tab = $(this).attr("href");
                ///* Need to add unique modifier to the hash so that it doesn't correspond to any ID on the page and therefore prevents default hash behavior where the page scrolls to that ID  */
                window.location.hash = $tab + "tab";

                if (options.updateFormAction) {
                    $('form').attr("action", $('form').attr("action") + $tab + options.hashPrefix);
                }

                $($tab, $container).removeClass(options.hiddenClass).addClass(options.shownClass);

                return false;
            });

            
            if (options.openFirst) {

                /* Using the Hash so that tabs are Bookmarkable */
                var initialHash = window.location.hash;
                
                var $activeTab;
                if (initialHash) {
                    /* Strip out the unique modifier */
                    initialHash = initialHash.replace(options.hashPrefix, "");
                    $activeTab = $('a[href^="' + initialHash + '"]', $container);
                } else {
                    /* if no tab then default to the first */
                    $activeTab = $('h3:first a', $container);
                }
                $activeTab.trigger("click");

            }
            


        });

        function createAnchorList(links) {

            // Create the list element:
            var list = document.createElement('ul');

            for (var i = 0; i < links.length; i++) {

                var linkItem = links[i];

                // Create the list item:
                var liItem = document.createElement('li');
                var aItem = document.createElement('a');

                // Set its contents:
                aItem.appendChild(document.createTextNode(linkItem[1]));
                aItem.href = "#" + linkItem[0];
                liItem.appendChild(aItem);

                // Add it to the list:
                list.appendChild(liItem);
            }

            // Finally, return the constructed list:
            return list;
        };

    }

})(jQuery, window, document);