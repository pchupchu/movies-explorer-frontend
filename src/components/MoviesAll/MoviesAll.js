import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesButton from "../MoviesButton/MoviesButton";
import { useEffect, useState } from "react";
import { SCREEN_L, SCREEN_S } from "../../utils/constants";

function MoviesAll({
  onMovieLike,
  onMovieDislike,
  savedMovies,
  searchResults,
  isChecked,
  isValid,
}) {
  const [pageWidth, setPageWidth] = useState(
    document.documentElement.clientWidth
  );

  const moviesPerPage =
    pageWidth > SCREEN_L ? 12 : pageWidth > SCREEN_S ? 8 : 5;

  const moviesAddNumber = pageWidth > SCREEN_L ? 3 : 2;

  const [moviesNumber, setMoviesNumber] = useState(moviesPerPage);

  useEffect(() => {
    let timer;
    const resize = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(
        setPageWidth(document.documentElement.clientWidth),
        1000
      );
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  function addMovies() {
    setMoviesNumber(moviesNumber + moviesAddNumber);
  }

  return (
    <>
      <MoviesCardList
        moviesNumber={moviesNumber}
        onMovieLike={onMovieLike}
        onMovieDislike={onMovieDislike}
        savedMovies={savedMovies}
        searchResults={searchResults}
        isChecked={isChecked}
        isValid={isValid}
      />
      {isValid && searchResults.length >= moviesNumber ? (
        <MoviesButton addMovies={addMovies} />
      ) : null}
    </>
  );
}

export default MoviesAll;
