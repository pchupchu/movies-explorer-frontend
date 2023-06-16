import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  movies,
  moviesNumber,
  onMovieLike,
  onMovieDislike,
  savedMovies,
}) {
  const location = useLocation();

  const isMoviesAll = location.pathname === "/movies";

  const moviesCardList = isMoviesAll
    ? movies.slice(0, moviesNumber)
    : savedMovies;

  return (
    <ul className="movies-list">
      {moviesCardList &&
        moviesCardList.map((movie) => {
          const isFilmLiked = savedMovies.some(
            (savedMovie) => savedMovie.nameRU === movie.nameRU
          );
          const _id = isFilmLiked
            ? savedMovies.find(
                (savedMovie) => savedMovie.nameRU === movie.nameRU
              )._id
            : undefined;

          return (
            <MoviesCard
              _id={_id}
              key={movie.id}
              movie={movie}
              isFilmLiked={isFilmLiked}
              onMovieLike={onMovieLike}
              onMovieDislike={onMovieDislike}
              savedMovies={savedMovies}
              isMoviesAll={isMoviesAll}
            />
          );
        })}
    </ul>
  );
}

export default MoviesCardList;
