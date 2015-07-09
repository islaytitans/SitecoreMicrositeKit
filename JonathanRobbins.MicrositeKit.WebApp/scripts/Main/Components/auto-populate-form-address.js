var ww = ww || {};

(function ($) {
	ww.autoPopulateFormAddress = {		

		populated: 'underfined',

		address1: $('.auto-address-line-1'),
		address2: $('.auto-address-line-2'),
		address3: $('.auto-address-line-3'),
		postcode: $("label:contains('Postcode')").parent().find('input'),

		init: function () {
			if (this.address1.length > 0) {
				var checkForGeolocation;
				checkForGeolocation = setInterval(
					// check if geolocation has been aquired or declined
					function checkForAutoPostcode() {
						// has been aquired
						if (ww.getCoordinate.aquired === true) {
							clearInterval(checkForGeolocation);
							
							ww.loadGoogleScript.init('ww.autoPopulateFormAddress.populateAddress')

						// failed stop check and don't d anything
						} else if (ww.getCoordinate.aquired === false) {
							clearInterval(checkForGeolocation);
						}
					},
				500);
			}
		},

		getAddress: function (callback) {
			
			// vars
			var lat = ww.getCoordinate.lat,
					lng = ww.getCoordinate.long,
					geocoder = new google.maps.Geocoder(),
					latlng = new google.maps.LatLng(lat, lng),
					address = [];

			// start gmap geocoder - input the lat/long then run the results
			geocoder.geocode({ 'latLng': latlng }, function (results, status) {

				// if successful
				if (status === google.maps.GeocoderStatus.OK) {

					// vars
					var searchAddressComponents = results[0].address_components,
							houseNo,
							street,
							town,
							countryShort,
							country,
							postcode,
							length = searchAddressComponents.length,
							i = 0;


					// loop through the array
					$.each(searchAddressComponents, function () {
						// add one to index
						i += 1;
						// look for street number
						if ($.inArray('street_number', this.types) > -1) {
							houseNo = this.long_name;
						}
						// look for street name
						if ($.inArray('route', this.types) > -1) {
							street = this.long_name;
						}
						// look for postal town
						if ($.inArray('postal_town', this.types) > -1) {
							town = this.long_name;
						}
						// look for postal town
						if ($.inArray('country', this.types) > -1) {
							country = this.long_name;
						}
						// look for postal town
						if ($.inArray('postal_code', this.types) > -1) {
							postcode = this.long_name;
						}
						// look for postal town
						if ($.inArray('country', this.types) > -1) {
							countryShort = this.short_name;
						}
						// once each is completed - index is equal to length
						if (i === length) {
							// if there is a postcode and its in GB
							if (ww.validPostcode.init(postcode) && countryShort === 'GB') {
								address = [houseNo, street, town, country, postcode]
								// then return postcode
								callback(address);
							} else {
								console.log('Geocode was not successful for the following reason: POSTCODE NOT WITHIN Main COVERAGE');
							}
						}
					});
				} else {
					console.log("Google Maps had some trouble finding" + results + ' - ' + status);
				}
			});
		},

		populateAddress: function () {
			ww.autoPopulateFormAddress.getAddress(function (address) {				
				var line1;
				// amount of information populated based on accuracy
				if (address[0].length > 0 && ww.getCoordinate.accuracy < 100) {
					line1 = address[0] + ' ' + address[1];
				} else if (ww.getCoordinate.accuracy < 300) {
					line1 = address[1];
				}
				
				// updae values
				ww.autoPopulateFormAddress.address1.val(line1);
				ww.autoPopulateFormAddress.address2.val(address[2]);
				ww.autoPopulateFormAddress.address3.val(address[3]);
				ww.autoPopulateFormAddress.postcode.val(address[4]);

				$('input.required, select.required, textarea.required').each(function () {
					checkIfValid($(this));
				});

				function checkIfValid($this) {
					// check if is has a value after removing whitespace
					var notempty = $.trim($this.val()).length > 0
					// if it is empty
					if (notempty) {
						$this.removeClass('invalid');
					}
				}

			});
		}
	}
})(jQuery);