/**
 * 1. if marker contains HTML, add it to an infoWindow
 * 2. create info window
 * 3. show info window when marker is clicked
 */

export function addMarker(marker, map) {
  const latlng = new window.google.maps.LatLng(
    marker.getAttribute("data-lat"),
    marker.getAttribute("data-lng")
  );

  const markerPin = new window.google.maps.Marker({
    position: latlng,
    map,
  });

  map.markers.push(markerPin);

  if (marker.innerHTML) {
    /* 1 */
    console.log(marker.innerHTML);
    const infoWindow = new window.google.maps.InfoWindow({
      /* 2 */ content: marker.innerHTML,
    });

    window.google.maps.event.addListener(markerPin, "click", () => {
      /* 3 */
      infoWindow.open(map, markerPin);
    });
  }
}

/**
 * 1. loop through all markers and create bounds
 * 2. only 1 marker?
 * 3. set center of map
 * 4. fit to bounds
 */

export function centerMap(map) {
  const bounds = new window.google.maps.LatLngBounds();

  map.markers.forEach((marker) => {
    /* 1 */
    const latlng = new window.google.maps.LatLng(
      marker.position.lat(),
      marker.position.lng()
    );

    bounds.extend(latlng);
  });

  if (map.markers.length === 1) {
    /* 2 */
    map.setCenter(bounds.getCenter()); /* 3 */
    map.setZoom(16);
  } else {
    map.fitBounds(bounds); /* 4 */
  }
}
