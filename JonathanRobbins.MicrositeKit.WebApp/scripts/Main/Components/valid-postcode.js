var ww = ww || {};

(function ($) {
	ww.validPostcode = {
		// TODO: confirm these are all the postcodes within Main
		init: function (postcode) {
			postcode = postcode.replace(/\s/g, "");
			var regex = /^(LL|SY|LD|HR|NP|CF|SA|CH)[0-9]{1,2} ?([0-9][A-Z]{2})?$/i;
			return regex.test(postcode);
		}
	};
})(jQuery);