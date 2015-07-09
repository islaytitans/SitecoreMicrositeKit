var ww = ww || {};

(function ($) {
	ww.getCoordinate = {

		lat: 'undefined',

		long: 'undefined',

		accuracy: 'undefined',

		aquired: 'undefined',

		init: function () {
			if (navigator.geolocation) {
				var geolocation = navigator.geolocation.watchPosition(this.geoSuccess, this.geoError, this.geoOptions);

				window.setTimeout(function () {
					window.navigator.geolocation.clearWatch(geolocation)
				}, 5000);
			} else {
				ww.getCoordinate.aquired = false;
				console.log('Geolocation not supported')
			}
		},

		geoOptions: function () {
			return options = {
				// TODO: check if high accuracy is required
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 250
			}
		},

		geoSuccess: function (pos) {
			var crd = pos.coords;
			var lat = crd.latitude,
					long = crd.longitude,
					acra = crd.accuracy;

			ww.getCoordinate.lat = lat;
			ww.getCoordinate.long = long;
			ww.getCoordinate.accuracy = acra;

			ww.getCoordinate.aquired = true;
		},

		geoError: function (err) {
			ww.getCoordinate.aquired = false;
			console.log('ERROR(' + err.code + '): ' + err.message);
		}
	};
})(jQuery);
