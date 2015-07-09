var ww = ww || {};

(function ($) {
	ww.loadGoogleScript = {
		init: function (callback) {
			// TODO: Add API key
			// Make sure that Google Maps API is loaded.
			if (typeof google !== 'object' || typeof google.maps !== 'object') {
				// callback of gmapDependant once api has loaded
				if (callback.length > 0) {
					var script_src = 'http://maps.google.com/maps/api/js?v=3.4&sensor=false&callback=' + callback;
				} else {
					var script_src = 'http://maps.google.com/maps/api/js?v=3.4&sensor';
				}
				jQuery.getScript(script_src);
			}
		}
	};
})(jQuery);