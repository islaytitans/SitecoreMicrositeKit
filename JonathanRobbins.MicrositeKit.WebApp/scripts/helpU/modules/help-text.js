var helpU = helpU || {};

helpU.helpText = (function ($) {

    var exports = {},
        _$helpText = $('.help-text'),
        _$fieldWithHelpText = _$helpText.siblings('input, select'),
        _closeBtnMarkup = $('#help-close-btn').html(),
        _resizeTimer;

    function _bindEvents() {
        _$fieldWithHelpText.on('focus', function () {
            var index = $(this).siblings('.help-toggle').data('help-toggle')
            _showHelpText('[data-help-text="' + index + '"]');
        });
        _$fieldWithHelpText.on('blur', function () {
            var index = $(this).siblings('.help-toggle').data('help-toggle')
            _hideHelpText('[data-help-text="' + index + '"]');
        });
        $('.help-toggle').on('click', function (e) {
            e.preventDefault();
            var indexNum = $(this).data('help-toggle'),
                $helpText = $('[data-help-text="' + indexNum + '"]');

            if ($helpText.hasClass('active')) {
                _hideHelpText($helpText);
            } else {
                _showHelpText($helpText);
            }
        });

        $(window).resize(function () {
           
        });

    }

    function _indexHelpText() {
        for (var i = 1; i < _$helpText.length; i++) {
            _$helpText.eq(i).attr('data-help-text', i).siblings('.help-toggle').attr('data-help-toggle', i);
        }
    }

    function _addHelpToggles() {
        var helpToggle = '<a href="#!" class="help-toggle">?</a>';
        $(helpToggle).insertAfter('.help-available').parent().addClass('helper-styling');;
    }

    function _addTheCloseLink() {
        $('.help-text.active').append(_closeBtnMarkup)
    }

    function _removeTheCloseLink() {
        $('.close-help-text').remove()
    }

    function _setHelpTextIndicator() {
       _$fieldWithHelpText.addClass('help-available');
    }

    function _hideHelpText(el) {
        $(el).removeClass('active').addClass('hidden');
        _removeTheCloseLink();
    }

    function _showHelpText(el) {
        $('.help-text').removeClass('active').addClass('hidden');
        $(el).addClass('active').removeClass('hidden');
        _removeTheCloseLink();
        _addTheCloseLink();
        _bindCloseLink();
    }

    function _bindCloseLink() {
        $('.close-help-text').on('click', function (e) {
            e.preventDefault();
            _hideHelpText($(this).parents('.help-text')) 
        })
    }

    function _positionHelpText() {
    		if (window.matchMedia !== undefined) {
    			if (!window.matchMedia("(min-width: 768px)").matches) {
    				return;
    			}
    		}
        $('.form-section').each(function (i) {
            var placeholder = $(this).find('.js-helptext-placeholder');
            $(this).find('.help-text').appendTo(placeholder);
        });
    }
    

    exports.init = function () {
        _setHelpTextIndicator();
        _hideHelpText('.help-text');
        _addHelpToggles();
        _indexHelpText();
        _positionHelpText();
        _bindEvents();
        
    }

    return exports;

})(jQuery);