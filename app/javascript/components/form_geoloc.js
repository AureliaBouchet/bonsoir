function formGeoloc() {
  const form = document.querySelector('.new-search-bar');
  console.log(form)
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const geolocation_address = document.getElementById('location');
      if(geolocation_address.value === ""){

      geolocation_address.value = geolocation_address.placeholder

      }

      console.log(geolocation_address.placeholder);
      console.log(geolocation_address.value);
      form.submit();
    });
  }
}



export { formGeoloc };


