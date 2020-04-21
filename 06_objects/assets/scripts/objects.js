const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (!movies.length) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  for (const movie of filteredMovies) {
    const movieEl = document.createElement("li");
    const { info } = movie;
    // const { getFormattedTitle } = movie;
    let text = movie.getFormattedTitle() + " - ";
    for (const key in info) {
      if (key !== "title") {
        text += `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  }
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value.trim();
  const extraName = document.getElementById("extra-name").value.trim();
  const extraValue = document.getElementById("extra-value").value.trim();

  if (!title || !extraName || !extraValue) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle: function () {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value.trim();
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
