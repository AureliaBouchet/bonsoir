import Typed from 'typed.js';
const home = document.getElementById('search-box-home')
function loadDynamicLogoText() {
if (home) {
  new Typed('#logo-typed-text', {
    strings: ["Bonsoir.", "B.", "B."],
    typeSpeed: 200,
    loop: true,
  });
}

}
function loadDynamicLogoTextNavbar() {
const navbar = document.querySelector(('.navbar-wagon'))
if (navbar){
  new Typed('#logo-typed-text', {
    strings: ["B."],
    typeSpeed: 300,
    loop: true,
  });
  }
}

export { loadDynamicLogoText };
export { loadDynamicLogoTextNavbar };
