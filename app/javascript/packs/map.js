import GMaps from 'gmaps/gmaps.js';
import { autocomplete } from '../components/autocomplete';

// const mapElement = document.getElementById('map');
// if (mapElement) { // don't try to build a map if there's no div#map to inject in
//   const map = new GMaps({ el: '#map', lat: 0, lng: 0 });
//   const markers = JSON.parse(mapElement.dataset.markers);
//   map.addMarkers(markers);
//   if (markers.length === 0) {
//     map.setZoom(2);
//   } else if (markers.length === 1) {
//     map.setCenter(markers[0].lat, markers[0].lng);
//     map.setZoom(14);
//   } else {
//     map.fitLatLngBounds(markers);
//   }
// }

// petite map
const eventTabMapBtn = document.getElementById("map-xs");
if (eventTabMapBtn) {
  eventTabMapBtn.addEventListener('click', () => {
    window.setTimeout( () => {
      const mapElementXs = document.getElementById('map_xs');
      mapElementXs.cssText = "width:100%; height: 600px;";
      if (mapElementXs) { // don't try to build a map if there's no div#map to inject in
        const mapXs = new GMaps({ el: '#map_xs', lat: 0, lng: 0 });
        const markersXs = JSON.parse(mapElementXs.dataset.markers);
        mapXs.addMarkers(markersXs);
        if (markersXs.length === 0) {
          mapXs.setZoom(2);
        } else if (markersXs.length === 1) {
          mapXs.setCenter(markersXs[0].lat, markersXs[0].lng);
          mapXs.setZoom(14);
        } else {
          mapXs.fitLatLngBounds(markersXs);
        }
      }
    } , 100);
  });
}

autocomplete();

// const styles = [ /* the style copied from https://snazzymaps.com/ */ ];


// map.addStyle({
//   styles: styles,
//   mapTypeId: 'map_style'
// });
// map.setStyle('map_style');

