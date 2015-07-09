var ww = ww || {};

(function ($) {
    ww.backToTop = {
        init: function () {
            this.bindEvents();
        },
        bindEvents: function () {            
            $('.back-to-top a').on('click', function () {
                $('html, body').animate({ scrollTop: 0 }, 400);
                return false;                
            });            
        }
    };
})(jQuery);  