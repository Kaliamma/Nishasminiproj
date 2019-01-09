var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 9.9986196,
			lng: 76.3457364
		},
		zoom: 15
	});
}