import GMaps from 'gmaps/gmaps.js';
import { autocomplete } from '../components/autocomplete';
import { geolocate } from '../components/geolocation';
geolocate();


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

// Map dans la tab
const eventTabMapBtn = document.getElementById("map-xs");
console.log(eventTabMapBtn);
if (eventTabMapBtn) {
  eventTabMapBtn.addEventListener('click', () => {
    window.setTimeout( () => {
      const mapElementXs = document.getElementById('map_xs');
      mapElementXs.cssText = "width:100%; height: 500px;";
      if (mapElementXs) { // don't try to build a map if there's no div#map to inject in
        const mapXs = new GMaps({ el: '#map_xs', lat: 0, lng: 0, disableDefaultUI: true, });
        const markersXs = JSON.parse(mapElementXs.dataset.markers);
        const markersXsClick = markersXs.map((marker) => {
          marker.click = () => { displayDetails(marker.id) };
          return marker;
        })
        mapXs.addMarkers(markersXsClick);



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

// Petite map
const theParent = document.querySelector(".card-container");
if (theParent) {
theParent.addEventListener('click', doTheMap, false)
function doTheMap(e) {
  if (e.target.getAttribute("class") === "fas fa-map-marker-alt map-hidden map-cursor") {
    const maps = document.querySelectorAll('.card-map > div');
    maps.forEach((map) => {map.classList.add('hidden')});
    const maps2 = document.querySelectorAll('.card-map > i');
    maps2.forEach((map) => {map.classList.add('hidden')});
    document.querySelectorAll('.map-hidden').forEach(btn => {btn.classList.add('hidden')});
    document.querySelectorAll('.map-show').forEach(btn => {btn.classList.remove('hidden')});
  }
  if (e.target.getAttribute("class") === "fas fa-map-marker-alt map-show map-cursor") {
    const maps = document.querySelectorAll('.card-map > div');
    maps.forEach((map) => {map.classList.add('hidden')})
    var id_for = e.target.getAttribute("id");
    var div_to_toggle = document.getElementById(id_for);
    div_to_toggle.classList.remove('hidden')
    const id = e.target.dataset.eventId;
    const durationDiv = document.getElementById(`duration-${id}`);
    durationDiv.classList.remove('hidden');
    const walkingDiv = document.getElementById(`walking-${id}`);
    walkingDiv.classList.remove('hidden');
    document.getElementById(`map-hidden-${id}`).classList.remove('hidden');
    e.target.classList.add('hidden');
    const mapXxs = new GMaps({ el: `#${id_for}`, lat: 0, lng: 0, disableDefaultUI: true, });

    const markersXxs = JSON.parse(div_to_toggle.dataset.markers);
    var markerId = markersXxs.find(function(marker) {
      return marker.id === id;
    });

    var markerUser = markersXxs[markersXxs.length - 1];
    mapXxs.addMarkers([markerId, markerUser]);

    const duration = mapXxs.getRoutes({
      origin: [markerUser.lat, markerUser.lng],
      destination: [markerId.lat, markerId.lng],
      callback: function(e){
        durationDiv.innerText = e[0].legs[0].duration.text;
      }
    });

    if (markersXxs.length === 0) {
      mapXxs.setZoom(2);
    } else if (markersXxs.length === 1) {
      mapXxs.setCenter(markersXxs[0].lat, markersXxs[0].lng);
      mapXxs.setZoom(14);
    } else {
      mapXxs.fitLatLngBounds(markersXxs);
    }

    mapXxs.drawRoute({
      origin: [markerUser.lat, markerUser.lng],
      destination: [markerId.lat, markerId.lng],
      travelMode: 'walking',
      strokeColor: '#A20910',
      strokeOpacity: 1,
      strokeWeight: 3,
    });

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
    mapXxs.addStyle({
      styles: styles,
      mapTypeId: 'map_style'
    });
    mapXxs.setStyle('map_style');

  }
};
}
// if (eventTabMapBtnXxs) {
//   eventTabMapBtnXxs.addEventListener('click', () => {
//     window.setTimeout( () => {
//       const mapElementXxs = document.getElementById('map_xxs');
//       mapElementXxs.cssText = "width:100%; height: 500px;";
//       if (mapElementXxs) { // don't try to build a map if there's no div#map to inject in
//         const mapXxs = new GMaps({ el: '#map_xxs', lat: 0, lng: 0 });
//         const markersXxs = JSON.parse(mapElementXxs.dataset.markers);
//         mapXxs.addMarkers(markersXxs);

//         if (markersXxs.length === 0) {
//           mapXxs.setZoom(2);
//         } else if (markersXxs.length === 1) {
//           mapXxs.setCenter(markersXxs[0].lat, markersXxs[0].lng);
//           mapXxs.setZoom(14);
//         } else {
//           mapXxs.fitLatLngBounds(markersXxs);
//         }

//         const styles = [
//             {
//                 "featureType": "administrative",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                     {
//                         "color": "#444444"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "landscape",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "color": "#f2f2f2"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "poi",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "visibility": "off"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "saturation": -100
//                     },
//                     {
//                         "lightness": 45
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road.highway",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "visibility": "simplified"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road.arterial",
//                 "elementType": "labels.icon",
//                 "stylers": [
//                     {
//                         "visibility": "off"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "transit",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "visibility": "off"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "water",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "color": "#4f595d"
//                     },
//                     {
//                         "visibility": "on"
//                     }
//                 ]
//             }
//         ];
//         mapXxs.addStyle({
//           styles: styles,
//           mapTypeId: 'map_style'
//         });
//         mapXxs.setStyle('map_style');
//               }



//             } , 100);
//   });
// }


autocomplete();


