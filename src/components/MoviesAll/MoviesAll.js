import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesButton from "../MoviesButton/MoviesButton";

function MoviesAll({ isLiked, movies }) {
  return (
    <>
      <MoviesCardList isLiked={isLiked} movies={movies} />
      <MoviesButton />
    </>
  );
}

export default MoviesAll;
