var ww = ww || {};

(function ($) {
	ww.ipadViewportChangedReset = {
		init: function () {
			$(window).load(function () {
				ww.viewport.reset();
			});
		}
	};
})(jQuery);
