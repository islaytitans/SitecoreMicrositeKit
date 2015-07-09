var ww = ww || {};

(function ($) {
    ww.menuUtilities = {
        openClass: 'open',
        bodyClass: '.stage',
        searchSelClass: '',
        langSelClass: '',        

        init: function () {            
            this.bindEvents();
        },

        bindEvents: function () {
        	if ($('.search_area').length === 0) {
        		$('.icon-search').on('click', function () {
        			ww.menuUtilities.searchOpenClose(this);
        		});
        		$('.lang-selector').on('click', function () {
        			ww.menuUtilities.LangOpenClose(this);
        		});
        	} else {

        		$('.icon-search').on('click', function () {
        			if ($('.search_area input[type=text]').val().length > 0) {
        				if (getParameterByName('q') !== $('.search_area input[type=text]').val()) {
        					$('.search_area input[type=submit]').trigger('click');
        				}
        			} else {
        				$('.search_area input[type=text]').first().focus().trigger('touchstart'); //trigger touchstart
        				$('input').on('touchstart', function () {
        					$(this).focus();
        				});
        			}
        		});

        		function getParameterByName(name) {
        			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
									results = regex.exec(location.search);
        			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        		}
        	}
        },
        removeClassName: function(){
            $('.icon-search, .search-dropdown, .lang-selector, .lang-dropdown, .stage, .lang-selector-btn').removeClass(ww.menuUtilities.openClass);
        },
        
        searchOpenClose: function (trigger) {
            var $trigger = $(trigger);
            $trigger.toggleClass(ww.menuUtilities.openClass);


            $('.stage, .search-dropdown').toggleClass(ww.menuUtilities.openClass);

            if ($('.lang-selector, .lang-dropdown').hasClass(ww.menuUtilities.openClass)) {
                ww.menuUtilities.removeClassName();
                $trigger.toggleClass(ww.menuUtilities.openClass);
                setTimeout (function(){                    
                        $('.search-dropdown').toggleClass(ww.menuUtilities.openClass);
                        $(ww.menuUtilities.bodyClass).toggleClass(ww.menuUtilities.openClass);
                }, 500);
                
            }
        },

        LangOpenClose: function (trigger) {
            var $trigger = $(trigger);
            $trigger.toggleClass(ww.menuUtilities.openClass);
            $('.lang-selector-btn').toggleClass(ww.menuUtilities.openClass);

            if ($('.icon-search, .search-dropdown').hasClass(ww.menuUtilities.openClass)) {
                ww.menuUtilities.removeClassName();
                $trigger.toggleClass(ww.menuUtilities.openClass);
                setTimeout(function () {                                    
                    $('.lang-dropdown, .lang-selector-btn').toggleClass(ww.menuUtilities.openClass);
                    $(ww.menuUtilities.bodyClass).toggleClass(ww.menuUtilities.openClass);               
                }, 500);
            }
        }

    };
})(jQuery);