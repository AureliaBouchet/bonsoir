function DisplayingSearchWhenClick() {
  const button = document.getElementById('search');

  if (button) {
    button.addEventListener('click', () => {
      const search = document.querySelector('.search-banner');
      const search_navbar = document.getElementById('search-navbar');
      console.log(search)

      search.classList.toggle('search-hidden');
      search_navbar.classList.toggle('search-hidden');

    });
  }
}

export { DisplayingSearchWhenClick };
