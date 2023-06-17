import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesAll from "../MoviesAll/MoviesAll";
import { useState } from "react";
import { SHORT_FILM_DURATION } from "../../utils/constants";

function Movies({
  loggedIn,
  isLoading,
  onLoading,
  movies,
  onMovieLike,
  onMovieDislike,
  savedMovies,
}) {
  const [isAllMoviesChecked, setIsAllMoviesChecked] = useState(
    JSON.parse(localStorage.getItem("isAllMoviesChecked")) || false
  );
  const [searchOfMovies, setSearchOfMovies] = useState(
    localStorage.getItem("searchOfMovies") || ""
  );
  const [searchResults, setSearchResults] = useState(
    JSON.parse(localStorage.getItem("searchResults")) || []
  );

  function handleCheckedFilm() {
    setIsAllMoviesChecked(!isAllMoviesChecked);
    localStorage.setItem("isAllMoviesChecked", !isAllMoviesChecked);
  }

  const handleChangeSearch = (e) => {
    setSearchOfMovies(e.target.value);
    localStorage.setItem("searchOfMovies", e.target.value);
  };

  function handleSubmitSearch(e) {
    e.preventDefault();
    const results = !searchOfMovies
      ? movies
      : movies.filter((movie) =>
          movie.nameRU.toLowerCase().includes(searchOfMovies)
        );
    localStorage.setItem("searchResults", JSON.stringify(results));
    setSearchResults(results);
    console.log(results);
  }

  const resultMovies = isAllMoviesChecked
    ? searchResults.filter((movie) => movie.duration <= SHORT_FILM_DURATION)
    : searchResults;

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm
          onLoading={onLoading}
          search={searchOfMovies}
          isChecked={isAllMoviesChecked}
          onCheckedFilm={handleCheckedFilm}
          onChangeSearchTerm={handleChangeSearch}
          onSubmitSearch={handleSubmitSearch}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesAll
            onMovieLike={onMovieLike}
            onMovieDislike={onMovieDislike}
            savedMovies={savedMovies}
            searchResults={resultMovies}
            isChecked={isAllMoviesChecked}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
