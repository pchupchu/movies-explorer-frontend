import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesButton from "../MoviesButton/MoviesButton";

function MoviesAll({ isLiked }) {
  return (
    <>
      <MoviesCardList isLiked={isLiked} />
      <MoviesButton />
    </>
  );
}

export default MoviesAll;
