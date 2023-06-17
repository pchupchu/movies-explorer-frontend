import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useState, useEffect } from "react";
import { SHORT_FILM_DURATION } from "../../utils/constants";

function SavedMovies({ loggedIn, onMovieDislike, savedMovies }) {
  const [isSavedMoviesChecked, setIsSavedMoviesChecked] = useState(false);
  const [searchOfSavedMovies, setSearchOfSavedMovies] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(savedMovies);
  }, [setSearchResults, savedMovies]);

  function handleCheckedFilm() {
    setIsSavedMoviesChecked(!isSavedMoviesChecked);
  }

  const handleChangeSearch = (e) => {
    setSearchOfSavedMovies(e.target.value);
  };

  function handleSubmitSearch(e) {
    e.preventDefault();
    const results = !searchOfSavedMovies
      ? savedMovies
      : savedMovies.filter((movie) =>
          movie.nameRU.toLowerCase().includes(searchOfSavedMovies)
        );
    setSearchResults(results);
    console.log(results);
  }

  const resultMovies = isSavedMoviesChecked
    ? searchResults.filter((movie) => movie.duration <= SHORT_FILM_DURATION)
    : searchResults;

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="saved-movies">
        <SearchForm
          isChecked={isSavedMoviesChecked}
          search={searchOfSavedMovies}
          onCheckedFilm={handleCheckedFilm}
          onChangeSearchTerm={handleChangeSearch}
          onSubmitSearch={handleSubmitSearch}
        />
        <MoviesCardList
          onMovieDislike={onMovieDislike}
          savedMovies={resultMovies}
          isChecked={isSavedMoviesChecked}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
