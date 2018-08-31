function DisplayingSearchWhenClick() {
  const button = document.getElementById('search');

  if (button) {
    button.addEventListener('click', () => {
      const search = document.querySelector('.search-banner');
      const search_navbar = document.getElementById('search-navbar');
      console.log(search)

      search.classList.toggle('search-hidden');
      search_navbar.classList.toggle('search-hidden');

      // navbar.classList.toggle('small-navbar');
      // navbar.classList.toggle('big-navbar');
      // button.classList.toggle('btn-background-lighter')
    });
  }
}

export { DisplayingSearchWhenClick };
