import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ isLiked, movies, moviesNumber }) {
  return (
    <ul className="movies-list">
      {movies.slice(0, moviesNumber).map((movie) => {
        return <MoviesCard key={movie.id} movie={movie} isLiked={isLiked} />;
      })}
    </ul>
  );
}

export default MoviesCardList;
