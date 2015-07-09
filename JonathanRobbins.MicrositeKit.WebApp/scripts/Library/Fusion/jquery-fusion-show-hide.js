// ===========================================
// Fusionworkshop - show hide plugin
// created date: 26/11/2014
// last update date: 26/11/2014
// author: Matthew Neil
// ===========================================
(function ($, window, document, undefined) {
    $.fn.showHide = function (options) {
        var settings = $.extend({
            panel: 'ul',
            closedClass: 'closed',
            clickOption: 'a',
            animateTimer: 500,
        }, options);
    		return $(settings.clickOption, this).on('click', function () {            
            $(this, settings.clickOption).parent().find(settings.panel).slideToggle(settings.animateTimer);
            $(this, settings.clickOption).toggleClass(settings.closedClass);
        });
    };
})(jQuery, window, document);