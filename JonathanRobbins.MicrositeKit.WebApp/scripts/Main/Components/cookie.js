var ww = ww || {};

(function ($) {
	ww.cookie = {
		value: function (name) {
			var regEx = new RegExp(name + "=([^;]+)");
			cookie = regEx.exec(document.cookie);
			cookieInfo = (cookie != null) ? unescape(cookie[1]) : null;
			value = (cookie != null) ? cookieInfo.toString().replace(name + '=', '') : '';
			// if it has a value and is not expired
			if (value.length > 0 && document.cookie.indexOf(name) !== -1) {
				return value;
			} else {
				return false;
			}
		},
		update: function (name, value, days) {
			// this is done to clear any exsisting cookie values otherwise it just appends
			updateRunner(name, "", -1);
			// do the update
			updateRunner(name, value, days);
			function updateRunner(name, value, days) {
				if (days) {
					var date = new Date();
					date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
					var expires = "; expires=" + date.toGMTString();
				}
				else var expires = "";
				document.cookie = name + "=" + value + expires + "; path=/";
			}
		}
	};
})(jQuery);