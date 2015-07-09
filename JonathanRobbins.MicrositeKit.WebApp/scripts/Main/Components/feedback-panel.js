var ww = ww || {};

ww.feedbackPanel = (function ($, liveChat) {

    var exports = {};
    var panel;
    var openBtn;
    var closeBtn;
    var optOutBtn;
    var body;


    /**
     * Private parts
     */

    function _optOut() {
        exports.hidePanel();
        exports.hideTab();
    }

    function _bindEvents() {
        openBtn.on('click', function (e) {
            exports.showPanel();
        })
        closeBtn.on('click', function (e) {
            exports.hidePanel();
        });
        optOutBtn.on('click', function (e) {
            _optOut();
        });
    }

    function _bindEls() {
        panel = $('.feedback-pnl');
        openBtn = $('.feedback-pnl-open');
        closeBtn = $('.feedback-pnl-close');
        optOutBtn = $('.btn-optout');
        body = $('body');
    }


    /**
     * Public parts
     */

    exports.twerk = function(time) {
        var time = time || 500;
        var el = $('.feedback-pnl-tab');

        el.addClass('twerk');
        setTimeout(function () {
            el.removeClass('twerk');
        }, time)
    }

    exports.showPanel = function () {
        body.addClass('feedback-open');
        panel.addClass('open');
        if ($('.live-chat').hasClass('open')) {
            liveChat.hideLiveChatPromo();
        }
    }

    exports.hidePanel = function () {
        body.removeClass('feedback-open');
        panel.removeClass('open');
        if ($('.live-chat').hasClass('hide')) {
            liveChat.showLiveChatPromo();
        }
    }

    exports.hideTab = function () {
        $('.feedback-pnl-tab').addClass('closed');
    }

    exports.showTab = function () {
        $('.feedback-pnl-tab').removeClass('closed');
    }

    exports.init = function () {
        // Check if the panel should be shown, if not get out of here!
        if (!$('#hfShowForm').val('True')) {
            return;
        }
        _bindEls();
        _bindEvents();
        // Has the user seen an animation this session? Y show them a twerk. N get out of here!
        if ($('#hfAnimateTab').val('True')) {
            this.twerk();
        }
    }


    return exports;

})(jQuery, ww.liveChat);