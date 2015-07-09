var ww = ww || {};

(function ($) {
	ww.mobileMenu = {
		init: function () {
			this.bindEvents();
		},
		bindEvents: function () {

			var $body = $('body');

			$('.menu-icon').on('click', function () {
				$(this).toggleClass('open-marker');
				$body.toggleClass('menu-open');
				$('.level-1, .level-2').removeClass('open');
				//if ($body.hasClass('menu-open')) {
				//    $body.css('overflow-x', 'hidden'); 
				//} else {
				//    setTimeout(function () {
				//        $body.css('overflow-x', 'auto');
				//    }, 400);
				//}
			});

			$('.next-menu-options').on('click', function () {
				$(this).parent().parent().toggleClass('open');
				$(this).next('.level-2').toggleClass('open');
			});


			$('.level-2').each(function () {
				$(this).prepend('<li><a href="#!" class="go-back">back</a></li>');
			});

			$('.go-back').on('click', function () {
				$(this).closest('.level-1').removeClass('open');
				$('.level-2').removeClass('open');
			});
		}
	};
})(jQuery);