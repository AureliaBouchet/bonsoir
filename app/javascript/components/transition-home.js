function scrollDownToAnchor() {
  const element = document.getElementById('arrow-down');
console.log(element);
  if (element) {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      // const anchordown = document.querySelector('#arrow-down .link')
      // console.log(anchordown);
      const infoanchor = document.getElementById('information')
      infoanchor.scrollIntoView({
            behavior: 'smooth'
      });
    });
  }
}

function scrollUpToAnchor() {
  const element = document.getElementById('arrow-up');
console.log(element);
  if (element) {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      // const anchordown = document.querySelector('#arrow-down .link')
      // console.log(anchordown);
      const infoanchor = document.getElementById('home-top')
      infoanchor.scrollIntoView({
            behavior: 'smooth'
      });
    });
  }
}


export { scrollDownToAnchor, scrollUpToAnchor };
