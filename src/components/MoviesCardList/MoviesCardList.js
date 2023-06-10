import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ isLiked }) {
  return (
    <ul className="movies-list">
      <MoviesCard isLiked={isLiked} />
      <MoviesCard isLiked={true} />
      <MoviesCard isLiked={isLiked} />
      <MoviesCard isLiked={isLiked} />
      <MoviesCard isLiked={isLiked} />
    </ul>
  );
}

export default MoviesCardList;
