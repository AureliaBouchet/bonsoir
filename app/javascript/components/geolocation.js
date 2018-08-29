import geocoder from 'geocoder';

function geolocate() {
  const banner = document.getElementById('search-box-home');
  if (banner) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        geocoder.reverseGeocode(position.coords.latitude, position.coords.longitude, function (err, data ) {
          console.log(data.results[0].formatted_address);
          const geolocation_address = document.querySelector("#search-box-home #location");
          console.log(geolocation_address);
          geolocation_address.placeholder = data.results[0].formatted_address;
        });
      },
      function(error) {
        console.log(error)
      }
    );
  }
}

export { geolocate };
