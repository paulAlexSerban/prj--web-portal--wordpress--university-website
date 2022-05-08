import { addMarker, centerMap } from './GoogleMapUtils';

class GMap {
  constructor() {
    this.init();
  }

  setupDomReferences() {
    this.acfMap = document.querySelector('.acf-map');
    this.markers = this.acfMap.querySelectorAll('.marker');
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
      addMarker(x, this.map);
    });

    centerMap(this.map); /* 2 */
  }

  init() {
    this.setupDomReferences();
    this.newMap(this.acfMap);
  }
}

export default GMap;
