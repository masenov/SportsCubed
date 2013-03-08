var infoWindow = new google.maps.InfoWindow();
function mapInitialize() {
	var edi = new google.maps.LatLng(55.930, -3.195);
    map = new google.maps.Map(document.getElementById('map_canvas'), {
      center: edi,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
	//allLayer();
}  
function createLayer ( whereClause ) {
	layer = new google.maps.FusionTablesLayer({
		query: {
			select: 'Location',
			from: '1J_7WexkZsb-vRYcS7TTRqs6BikiNEQeAHJI6D2w',
			where: whereClause
		},
		map: map,
		suppressInfoWindows: true
	});
	google.maps.event.addListener(layer, 'click', function(e) {
		windowControl(e, infoWindow, map);
	});
	return layer;
}
function windowControl(e, infoWindow, map) {
	infoWindow.setOptions({
		content: e.infoWindowHtml,
		position: e.latLng,
		pixelOffset: e.pixelOffset
	});
    infoWindow.open(map);
}
function allLayer () {
	layer = new google.maps.FusionTablesLayer({
		query: {
			select: 'Location',
			from: '1J_7WexkZsb-vRYcS7TTRqs6BikiNEQeAHJI6D2w',
		},
		map: map,
		suppressInfoWindows: true
	});
	google.maps.event.addListener(layer, 'click', function(e) {
		windowControl(e, infoWindow, map);
	});
	return layer;
}