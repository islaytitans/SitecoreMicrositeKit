var ww = ww || {};

function live_chat_callback() {
	ww.synthetix.loadLiveChat();
}

(function ($) {
	ww.synthetix = {
		init: function () {
			// if there an FAQ widget on the page
			if ($('#synthetix_faqtAgent').length > 0 || $('#synthetix_liveChat_availability').length > 0) {
				// no conflict
				jq = jQuery.noConflict();
				// add js files
				var scripts = [
					"https://synthetix-ec1.com/clients/welshwater/integrated/faq/fa_engine.js",
					"https://synthetix-ec1.com/clients/welshwater/integrated/faq/liveChat_client.js",
					"https://synthetix-ec1.com/clients/welshwater/integrated/faq/liveChat_custom_functions.js",
					"https://synthetix.info/answers/FAQTAGENT-WELSHWATER-MASTER/lc_quality2.js",
					"https://synthetix.info/answers/FAQTAGENT-WELSHWATER_ENG-LIVE/kb_feedback.js"
				];
				$.each(scripts, function (i) {
					var script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = this;
					$("head").append(script);
				});

				// add css files
				var cssFiles = [
					"https://synthetix-ec1.com/clients/welshwater/integrated/faq/css/faqtAgent.css",
					"https://synthetix-ec1.com/clients/welshwater/integrated/faq/css/liveChat.css"
				];
				$.each(cssFiles, function () {
					$('head').append('<link rel="stylesheet" href="' + this + '" type="text/css" />');
				});
			}
		},
		loadLiveChat: function () {
			check_if_chat_agents_are_online();
		}
	};
})(jQuery);

