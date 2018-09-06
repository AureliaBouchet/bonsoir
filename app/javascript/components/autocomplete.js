function autocomplete() {
  document.addEventListener("DOMContentLoaded", function() {
    var userLocation = document.getElementById('location');
console.log(userLocation)
    if (userLocation) {
      var autocomplete = new google.maps.places.Autocomplete(userLocation, { types: [ 'geocode' ], componentRestrictions: {country: 'fr'} });
      google.maps.event.addDomListener(userLocation, 'keydown', function(e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Do not submit the form on Enter.
        }
      });
    }
  });
}

export { autocomplete };
