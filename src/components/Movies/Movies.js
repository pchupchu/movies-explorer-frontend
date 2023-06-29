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

  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");

  function handleCheckedFilm() {
    setIsAllMoviesChecked(!isAllMoviesChecked);
    localStorage.setItem("isAllMoviesChecked", !isAllMoviesChecked);
  }

  const handleChangeSearch = (e) => {
    setSearchOfMovies(e.target.value);
    localStorage.setItem("searchOfMovies", e.target.value);
    setIsValid(true);
  };

  function handleSubmitSearch(e) {
    e.preventDefault();
    const results = !searchOfMovies
      ? movies
      : movies.filter((movie) =>
          movie.nameRU.toLowerCase().includes(searchOfMovies.toLowerCase())
        );
    localStorage.setItem("searchResults", JSON.stringify(results));
    setSearchResults(results);
    setIsValid(e.target.closest("form").checkValidity());
    setError(e.target.validationMessage);
    if (searchOfMovies.trim().length === 0) {
      setIsValid(false);
      setError("Нужно ввести ключевое слово");
    }
  }

  const resultMovies = isAllMoviesChecked
    ? searchResults.filter((movie) => movie.duration <= SHORT_FILM_DURATION)
    : searchResults;

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm
          search={searchOfMovies}
          isChecked={isAllMoviesChecked}
          onCheckedFilm={handleCheckedFilm}
          onChangeSearchTerm={handleChangeSearch}
          onSubmitSearch={handleSubmitSearch}
          isValid={isValid}
          error={error}
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
            isValid={isValid}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
