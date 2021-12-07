class GMap {
  constructor() {
    this.init();
  }

  setupDomReferences() {
    this.acfMap = document.querySelector('.acf-map');
    this.markers = this.acfMap.querySelectorAll('.marker');
  }

  /**
   * 1. if marker contains HTML, add it to an infoWindow
   * 2. create info window
   * 3. show info window when marker is clicked
   */

  addMarker(marker, map) {
    this.latlng = new window.google.maps.LatLng(marker.getAttribute('data-lat'), marker.getAttribute('data-lng'));

    this.marker = new window.google.maps.Marker({
      position: this.latlng,
      map,
    });

    map.markers.push(this.marker);

    if (marker.innerHTML) { /* 1 */
      console.log(marker.innerHTML);
      this.infowindow = new window.google.maps.InfoWindow({ /* 2 */
        content: marker.innerHTML,
      });

      window.google.maps.event.addListener(this.marker, 'click', () => { /* 3 */
        this.infowindow.open(map, this.marker);
      });
    }
  }

  /**
   * 1. loop through all markers and create bounds
   * 2. only 1 marker?
   * 3. set center of map
   * 4. fit to bounds
   */

  centerMap(map) {
    this.bounds = new window.google.maps.LatLngBounds();

    map.markers.forEach((marker) => { /* 1 */
      this.latlng = new window.google.maps.LatLng(marker.position.lat(), marker.position.lng());

      this.bounds.extend(this.latlng);
    });

    if (map.markers.length === 1) { /* 2 */
      map.setCenter(this.bounds.getCenter()); /* 3 */
      map.setZoom(16);
    } else {
      map.fitBounds(this.bounds); /* 4 */
    }
  }

  /**
   * 1. add markers
   * 2. center map
   */

  newMap(el) {
    this.args = {
      zoom: 16,
      center: { lat: 0, lng: 0 },
    };

    this.map = new window.google.maps.Map(el, this.args);
    this.map.markers = [];

    this.markers.forEach((x) => { /* 1 */
      this.addMarker(x, this.map);
    });

    this.centerMap(this.map); /* 2 */
  }

  init() {
    this.setupDomReferences();
    this.newMap(this.acfMap);
  }
}

export default GMap;
