var ww = ww || {};

(function ($) {
	ww.searchPagination = {
		init: function () {
			var el = $('.search-pagination');

			if (el.length > 0) {
				var elOffset = el.offset().top;

			$(window).on('scroll', function () {
				var scrollTop = $(window).scrollTop(),
						distance = (elOffset - scrollTop);
				
				if (distance <= 0) {
					el.addClass('fixed');
				} else {
					el.removeClass('fixed');
				}
			});
		}
		}
	};
})(jQuery);