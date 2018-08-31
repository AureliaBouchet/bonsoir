function formGeoloc() {
  const form = document.querySelector('.new-search-bar');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const geolocation_address = document.getElementById('location');
      if(geolocation_address.value === "") {
        geolocation_address.value = geolocation_address.placeholder
      }
      form.submit();
    });
  }
}



export { formGeoloc };


