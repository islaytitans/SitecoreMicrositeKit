var ww = ww || {};
// Confirm device type via client side JS
// Useful for mobile only JS etc
(function ($) {
    ww.confirmDevice = {
        mobileDevice: "undefined",
        init: function () {
            if ($('body').hasClass("tablet") || $('body').hasClass("mobile")) {
                this.mobileDevice = true;
            } else {
                this.mobileDevice = false;
            }
        }
    }
})(jQuery);