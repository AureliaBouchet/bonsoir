// import geocoder from 'geocoder';

function geolocate() {
  const banner = document.getElementById('search-box-home');
  if (banner) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const csrfToken = document.querySelector("meta[name='csrf-token']").content;

        fetch(
          '/geocoding',
          {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "X-CSRF-Token": csrfToken
            },
            credentials: 'same-origin',
            body: JSON.stringify({ lat: latitude, lng: longitude })
          }
        )
        .then(response => response.json())
        .then((data) => {
          const geolocation_address = document.querySelector("#search-box-home #location");
          geolocation_address.placeholder = data.address;
        });

        // geocoder.reverseGeocode(position.coords.latitude, position.coords.longitude, function (err, data ) {
        //   if (data.status === "OK") {
        //     const geolocation_address = document.querySelector("#search-box-home #location");
        //     geolocation_address.placeholder = data.results[0].formatted_address;
        //   } else {
        //     console.log(data.status);
        //   }
        // });
      },
      function(error) {
        console.log(error);
      }
    );
  }
}

export { geolocate };
