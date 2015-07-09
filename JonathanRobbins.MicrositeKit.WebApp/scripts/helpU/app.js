var helpU = helpU || {};

helpU.app = (function ($) {

    var exports = {};
	
    exports.init = function () {
        $('body').removeClass('no-js').addClass('js');
        // Check if there are multiple sections (therefore not the prequalification page)
        if ($('.form-section').length > 1) {
            // Set the last stage as the summary section
            $('.form-section').last().addClass('summary-section');
            helpU.navigation.init();
        }
        helpU.validation.init();
        helpU.helpText.init();
        helpU.personalise.init();
        helpU.vendor.init();
        helpU.summary.init();
    }

    return exports;
})(jQuery);


jQuery(document).ready(function () {
    helpU.app.init();
});