import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ isLiked }) {
  isLiked = true;
  return (
    <ul className="movies-list">
      <MoviesCard />
      <MoviesCard isLiked={isLiked} />
      <MoviesCard />
    </ul>
  );
}

export default MoviesCardList;
