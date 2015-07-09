//====================================
// Main
//====================================

// load google maps api - TODO: needs to be investigated how to do this in the same function as the rest of the google maps code
var ww = ww || {};

(function ($) {
	ww.init = function () {
		this.confirmDevice.init();
		this.getCoordinate.init();
		this.emergencyWork.init();
		$('.incident-msg').showHide();
		$('.info-msg').showHide();
		this.mobileMenu.init();
		this.menuUtilities.init();
		this.mobileSubMenu.init();
		$('.social-media').openClose({
			panel: '.network-channels',
		});
		this.backToTop.init();
		this.liveChat.init();
		this.searchPagination.init();
		//this.wffmGeoAddress.init();
		this.forms.init();
		if ($('#in-your-area').length > 0) {
			this.inYourArea.init();
		}
		if ($('.wq-IYA').length > 0) {
			this.waterQuality.init();
		}
		//this.autoPopulateFormAddress.init();
		this.synthetix.init();
		this.feedbackPanel.init();
		this.gaTrackingEvents.init();
		$('.carousel').owlCarousel({
			center: true,
			loop: true,
			margin: 20,
			responsive: {
				0: {
					items: 1,
					stagePadding: 100
				},
				330: {
					stagePadding: 190
				},
				370: {
					items: 1,
					stagePadding: 100
				},
				450: {
					items: 1,
					stagePadding: 160
				},
				550: {
					items: 1,
					stagePadding: 190
				},
				570: {
					items: 1,
					stagePadding: 245
				},
				736: {
					items: 3
				}
			}
		});
	};

	$(document).ready(function () {
		ww.init();
	});

})(jQuery);
// ====================================================================================
// Console Log
// Ensures using console.log doesn't cause errors in browsers that do not support it
// ====================================================================================
if (typeof console === "undefined") {
	window.console = {
		log: function () { }
	};
}