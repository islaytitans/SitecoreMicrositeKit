var helpU = helpU || {};

helpU.vendor = (function ($) {

    var exports = {};

    function _bindEvents(vendorFields) {
        $('.toggle-vendor-off').on('click', function (e) {
            var $vendorFields = $(this).parents('.vendor-fields')
            e.preventDefault();
            _hideVendorFields($vendorFields.siblings('.toggle-vendor-on'), $vendorFields)
        })

        $('.toggle-vendor-on').on('click', function (e) {
            e.preventDefault();
            _showVendorFields(this, $(this).siblings('.vendor-fields'));
        })
    }

    function _hideVendorFields(toggle, vendorFields) {
        var $vendorFields = $(vendorFields);
        $(toggle).removeClass('hidden');
        $vendorFields
            .addClass('hidden')
            .find('input').attr('disabled', 'disabled');
    }

    function _showVendorFields(toggle, vendorFields) {
        var $vendorFields = $(vendorFields);
        $(toggle).addClass('hidden');
        $vendorFields
            .removeClass('hidden')
            .find('input').removeAttr('disabled');
    }

    exports.init = function () {
        _hideVendorFields(null, $('.vendor-fields'));
        _bindEvents();
    }

    return exports;

})(jQuery)