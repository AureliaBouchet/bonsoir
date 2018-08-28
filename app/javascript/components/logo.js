import Typed from 'typed.js';

function loadDynamicLogoText() {
  new Typed('#logo-typed-text', {
    strings: ["Bonsoir.", "B."],
    typeSpeed: 200,
    loop: true
  });
}

export { loadDynamicLogoText };
