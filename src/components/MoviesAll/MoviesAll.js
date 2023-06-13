import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesButton from "../MoviesButton/MoviesButton";
import { useEffect, useState } from "react";
import { SCREEN_L, SCREEN_S } from "../../utils/constants";

function MoviesAll({ isLiked, movies }) {
  const [pageWidth, setPageWidth] = useState(
    document.documentElement.clientWidth
  );

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

  const moviesPerPage =
    pageWidth > SCREEN_L ? 12 : pageWidth > SCREEN_S ? 8 : 5;

  const [moviesNumber, setMoviesNumber] = useState(moviesPerPage);

  const moviesAddNumber = pageWidth > SCREEN_L ? 3 : 2;

  function addMovies() {
    setMoviesNumber(moviesNumber + moviesAddNumber);
  }

  return (
    <>
      <MoviesCardList
        isLiked={isLiked}
        movies={movies}
        moviesNumber={moviesNumber}
      />
      <MoviesButton addMovies={addMovies} />
    </>
  );
}

export default MoviesAll;
