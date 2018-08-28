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
      mapElementXs.cssText = "width:100%; height: 500px;";
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
        const styles = [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#4f595d"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ];
        mapXs.addStyle({
          styles: styles,
          mapTypeId: 'map_style'
        });
        mapXs.setStyle('map_style');
              }

            } , 100);
  });
}

autocomplete();


