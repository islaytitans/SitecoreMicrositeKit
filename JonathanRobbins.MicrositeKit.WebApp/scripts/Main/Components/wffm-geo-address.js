var ww = ww || {};

(function ($) {

		// FIXME: Breaks JS if lat / long inst defined

    ww.wffmGeoAddress = {
			 
    		html5Lat: '',
    		html5Lon: '',

        init: function () {
            this.bindEvents();
        },

        bindEvents: function () {
            //Get userlocation
            navigator.geolocation.getCurrentPosition(function (loc) {
                ww.wffmGeoAddress.html5Lat = loc.coords.latitude;
                ww.wffmGeoAddress.html5Lon = loc.coords.longitude;

                var url = "/api/LocationServices/GetAddressFromGeo?longitude=" + this.html5Lon + "&latitude=" + this.html5Lat;

                jQuery.ajax({
                    type: 'POST',
                    url: url,
                    dataType: "json",
                    success: function (address) {

                        $("input[value='$street']").val(address.Street);
                        $("input[value='$town']").val(address.Town);
                        $("input[value='$postcode']").val(address.Postcode);

                        console.log(address);
                    },
                    error: function (request, status, error) {
                        console.log(error);
                    }
                });

            });


            //post to service
            //get back JSON object of address
            //Select control values and replace
        }
    };
})(jQuery);