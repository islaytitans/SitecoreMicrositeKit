function onPositionUpdate(position) {
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	var url = document.getElementById("hfStoreUserCoordinatesUrl").value;

	jQuery.ajax({
		type: 'POST',
		url: url + lat + '/' + lng,
		dataType: "jsonp",
		succes: function (msg) {
			console.log("success");
		},
		error: function (request, status, error) {
			console.log(error);
		}
	});
}

if (navigator.geolocation)
	navigator.geolocation.getCurrentPosition(onPositionUpdate);
else
	console.log("navigator.geolocation is not available");