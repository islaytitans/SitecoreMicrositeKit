/**
 * VALIDATION JS
 * *************
 * hide / show section
 * nav
 * igation bar
 * disable/enable next button and breadcrub
 */
var helpU = helpU || {};

helpU.navigation = (function ($) {

	var exports = {},
			form = '.helpU',
			invalid = 'invalid',
			valid = 'valid',
			$section = $(form).find('section'),
			breadcrumbLinkHTML = [];


	// ----------------------------- //
	// SECTION INIT
	// ----------------------------- //

	function _sectionsInit(form) {
		var navigationMarkUp = $(form).find('#breadcrumb-nav').html(),
				nextBtnMarkUp = $(form).find('#next-actions').html(),
				amountOfSection = $section.length;

		// hide all sections
		$section.hide();

		$section.each(function (i) {
			var $this = $(this),
					i = i + 1;

			// add ID to section
			$this.attr('id', 'step-' + i);

			// add breadcrum nav and next btn
			$this.find('.wrapper').append(nextBtnMarkUp);
			$this.find('.wrapper .actions').prepend(navigationMarkUp)
			
			// always show the first section
			if (i === 1) {
				$this.show();
				// then for the rest
			} else {
				// if it is valid then show
				if ($this.hasClass(valid)) {
					$this.show();
				}
			}

			if (i === amountOfSection - 1) {
				$this.find('.wrapper .actions .btn-next').addClass('summary-init');
			}

			// once run through all remove the next btn on the last section and append the submit
			if (i === amountOfSection) {
				var lastAction = $(form).find('.actions').last();

				$this.find('.wrapper .actions .btn-next').remove();
				$this.find('.wrapper .actions').append(lastAction.find('input[type=submit]'));
				lastAction.remove();

				// disable all buttons
				//$(form).find('.btn-next').prop('disabled', true);
				
				// add the correct amount of breadcrumbs to an array
				var	$breadcrumbs = $(form).find('.wrapper .actions .breadcrumb ol'),
						breadcrumbLink = $breadcrumbs.html();
				// empty exsisting breadcrumbs
				$breadcrumbs.empty();
				// add needed breadcrumbs
				$section.each(function (i) {
					$breadcrumbs.append(breadcrumbLink);					
					if (i + 1 === amountOfSection) {
						$(form).find('.wrapper .actions .breadcrumb').each(function (i) {
							var i = i + 1;
							$(this).find('li').each(function (i) {
								var i = i + 1,
										$link = $(this).find('a');
								$link.attr('href', '#step-' + i).addClass('step-' + i).append(' ' + i);;

								if (i === 1) {
									$link.addClass('active');
								}
							});
							// current breadcrumb link
							$(this).find('li a.step-' + i).addClass('current');
						});
					}
				});
			}
		});
	}


	// ----------------------------- //
	// NAVIGATION
	// ----------------------------- //

	function _nextBtn(form) {
		$(form).find('.btn-next').each(function () {
			$(this).on('click', function () {
			    var thisSection = $(this).closest('.form-section'),
                    nextSection = thisSection.next('.form-section'),
					nextSectionNumber = nextSection.attr('id');

			    $(form).find('.actions').find('a.' + nextSectionNumber).addClass('active');

				if (thisSection.hasClass('valid')) {
				    nextSection.show();
				    // scroll to next section
				    $('html, body').animate({
				        scrollTop: nextSection.offset().top
				    }, 350);
				}
				
			});
		})
	}

	function _breadcrumb() {
		$(form).find('.actions .breadcrumb').each(function () {
			$(this).find('a').on('click', function (e) {
				// if isn't active
				if ($(this).hasClass('active')) {
					$('html, body').animate({
						scrollTop: $($.attr(this, 'href')).offset().top
					}, 350);
					return false;
				} else {
					e.preventDefault();
				}
			});
		});
	}

	function _summary() {
		$(form).on('click', '.summary-box a', function (e) {
		    e.preventDefault();
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 350);
		});
	}


	// ----------------------------- //
	// RETURN FUNCTION
	// ----------------------------- //
	exports.init = function () {
		_sectionsInit(form);
		_nextBtn(form);
		_breadcrumb();
		_summary();
	}

	return exports;

})(jQuery);