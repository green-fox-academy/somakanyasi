'use strict';

window.onload = () => {

  const genres = document.querySelector('#genre');
  const movies = document.querySelector('#movies');
  const selectedMovie = document.querySelector('#selectedMovie')


  genres.addEventListener('change', (event) => {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].className === event.target.value) {
        movies[i].style.display = 'block';
      } else {
        movies[i].style.display = 'none';
      }
    }
  });

  movies.addEventListener('change', () => {
    selectedMovie.textContent = movies.options[movies.selectedIndex].text;
  });
}
