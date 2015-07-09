var ww = ww || {};

(function ($) {
	ww.viewport = {
		reset: function () {
			// only run on mobile
			if ($('body').hasClass("mobile")) {
				var width = $('.wrapper').outerWidth(true);
				var getMetaContent = $('meta[name=viewport]').attr('content');
				// if being targetted through SC
				var getMetaID = $('meta[name=viewport]').attr('id');
				$('meta[name=viewport]').remove();
				$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />');
				$('meta[name=viewport]').remove();
				if ($('body').hasClass('tablet')) {
					$('head').append('<meta name="viewport" content="width=' + width + ', initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />');
				} else {
					if (getMetaID !== null || getMetaID !== undefined && getMetaContent !== null || getMetaContent !== undefined) {
						$('head').append('<meta id="' + getMetaID + '" name="viewport" content="' + getMetaContent + '">');
					} else if (getMetaID !== null || getMetaID !== undefined) {
						$('head').append('<meta name="viewport" content="' + getMetaContent + '">');
					} else {
						$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />');
					}
				}
			}
		},
		changed: function (callback) {	
			// only run on mobile
			if ($('body').hasClass("mobile")) {
				if (document.addEventListener) {
					window.addEventListener("orientationchange", function () {
						ww.viewport.reset();
					}, false);
				} else if (document.attachEvent) {
					window.attachEvent("orientationchange", function () {
						ww.viewport.reset();
					}, false);
				}
			}
		}
	};
})(jQuery);