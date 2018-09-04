function formGeoloc() {
  const form = document.querySelector('.new-search-bar');
  // const banner = document.getElementById('search-box-home');
  console.log(form)
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const geolocation_address = document.getElementById('location');
      console.log(geolocation_address)
      if(geolocation_address.value === "") {
        geolocation_address.value = geolocation_address.placeholder
      }
       form.submit();
    });
  }
}



export { formGeoloc };


