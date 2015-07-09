var ww = ww || {};

(function ($) {
	ww.mobileSubMenu = {
		init: function () {
			if (ww.confirmDevice.mobileDevice) {
				this.bindEvents();
				var currentPage = $('.sub-menu').find('.current').first().find('a').text();
				$('.sub-menu').find('.current').first().remove();
				$('.sub-menu-section h3').empty().html(currentPage);
			}
		},
		bindEvents: function () {
			$('.sub-menu-section').click(function () {
				$(this, '.menu-bar').toggleClass('open');
				$('.tier_one').slideToggle();
			});
		}
	};
})(jQuery);
