import Typed from 'typed.js';

function loadDynamicLogoText() {
  new Typed('#logo-typed-text', {
    strings: ["Bonsoir.", "B.", "B."],
    typeSpeed: 400,
    loop: true,
  });
}

export { loadDynamicLogoText };
