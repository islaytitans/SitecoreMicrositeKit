var helpU = helpU || {};

helpU.personalise = (function ($) {

    var exports = {},
        _$section1,
        _$submitButton,
        _$firstnameInput,
        _$guideText,
        _firstName;

    function _bindVariables() {
        _$section1 = $('#step-1');
        _$submitButton = _$section1.find('button');
        _$firstnameInput = $('[id*="Firstname"]');
        _$guideText = $('.guide').children('p');
    }

    function _bindEvents() {
        _$submitButton.on('click', function () {
            if (_$section1.hasClass('valid')) {
                _firstName = _$firstnameInput.val();

                _$guideText.each(function () {
                    var requiredText = $(this).text().replace('{Name}', _firstName);
                    $(this).text(requiredText);
                })
            }
        });
    }

    exports.init = function () {
        _bindVariables();
        _bindEvents();
    }

    return exports;

})(jQuery);