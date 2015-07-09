// ===========================================
// Fusionworkshop - open close plugin
// created date: 26/11/2014
// last update date: 26/11/2014
// author: Matthew Neil
// ===========================================
(function ($, window, document, undefined) {
    $.fn.openClose = function (options) {
        var settings = $.extend({
            panel: 'div',
            openClass: 'open',            
        }, options);
        return $(this).on('click', function () {
            $(this).toggleClass(settings.openClass);
            $(settings.panel).toggleClass(settings.openClass);
        });
    };
})(jQuery, window, document);