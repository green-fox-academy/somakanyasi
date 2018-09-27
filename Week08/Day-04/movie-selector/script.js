'use strict';

window.onload = () => {

  const genres = document.querySelector('#genre');
  const movies = document.querySelector('#movies');

  genres.addEventListener('change', (event) => {
    if (event.target.value === "sci-fi") {
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].className === "sci-fi") {
          movies[i].disabled = false;
        } else {
          movies[i].disabled = true;
        }
      }
    } else if (event.target.value === "drama") {
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].className === "drama") {
          movies[i].disabled = false;
        } else {
          movies[i].disabled = true;
        }
      }
    } else if (event.target.value === "comedy") {
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].className === "comedy") {
          movies[i].disabled = false;
        } else {
          movies[i].disabled = true;
        }
      }
    }
  });


}
