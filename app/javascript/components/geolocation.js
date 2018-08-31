import geocoder from 'geocoder';

function geolocate() {
  const banner = document.getElementById('search-box-home');
  if (banner) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        geocoder.selectProvider("google",{"key": banner.dataset.googleApiBrowserKey});
        geocoder.reverseGeocode(position.coords.latitude, position.coords.longitude, function (err, data ) {
          if (data.status === "OK") {
            const geolocation_address = document.querySelector("#search-box-home #location");
            geolocation_address.placeholder = data.results[0].formatted_address;
          } else {
            console.log(data.status);
          }
        });
      },
      function(error) {
        console.log(error);
      }
    );
  }
}

export { geolocate };
