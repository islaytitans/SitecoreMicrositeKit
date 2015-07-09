var ww = ww || {};

(function ($) {
	ww.waterQuality = {
		init: function () {
			// add class to page header to style just for IYA
			$('.page_hd').addClass('IYA');

			// move pannel if on mobile
			if ($('body').hasClass('mobile')) {
				$('.postcode-lookup__promo-panel').detach().insertAfter($('.wq-IYA'));
			}

			// water quaklity table hack
			ww.inYourArea.waterQualityTableHack();

			// water quality navigation
			ww.inYourArea.waterQualityTabs();

			// move accordion tabs if needed
			this.moveAccordionTabs();
		},

		moveAccordionTabs: function () {
			var otherAccordionTitles;
			$('.wq-IYA').append('<div class="tab-btns-mobile-copy"></div>');
			$('.tab-btns-mobile a').each(function (i) {
				if ($(this).find('h2').attr('class') === 'js-active title') {
					otherAccordionTitles = i;
				}
				if (i > otherAccordionTitles) {
					$(this).appendTo('.tab-btns-mobile-copy');
				}
			});
		}
	};
})(jQuery);