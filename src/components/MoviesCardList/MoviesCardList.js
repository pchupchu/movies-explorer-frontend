import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ isLiked, movies }) {
  return (
    <ul className="movies-list">
      {movies.map((movie) => {
        return <MoviesCard key={movie.id} movie={movie} isLiked={isLiked} />;
      })}
    </ul>
  );
}

export default MoviesCardList;
