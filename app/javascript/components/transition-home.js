function clickDownToAnchor() {
  const element = document.getElementById('arrow-down');
  if (element) {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      element.classList.add('hidden')
      const infoanchor = document.getElementById('information')
      infoanchor.scrollIntoView({
            behavior: 'smooth'
      });
    });
  }
}

function scrollToAnchor() {
  const element = document.getElementById('arrow-down');
  if (element) {
    window.addEventListener('wheel', function (event) {
      if (event.deltaY < 0) {
        element.classList.remove('hidden')
      }
      if (event.deltaY > 0) {
        element.classList.add('hidden')
      }
    });
  }
}

function clickUpToAnchor() {
  const element = document.getElementById('arrow-up');
  if (element) {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      const arrow_down = document.getElementById('arrow-down');
      arrow_down.classList.remove('hidden')
      const infoanchor = document.getElementById('home-top')
      infoanchor.scrollIntoView({
            behavior: 'smooth'
      });
    });
  }
}


export { scrollToAnchor, clickDownToAnchor, clickUpToAnchor };
