import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  moviesNumber,
  onMovieLike,
  onMovieDislike,
  savedMovies,
  searchResults,
}) {
  const location = useLocation();

  const isMoviesAll = location.pathname === "/movies";

  // const moviesCardList = isMoviesAll
  //   ? movies.slice(0, moviesNumber)
  //   : savedMovies;

  const moviesCardList = isMoviesAll
    ? searchResults.slice(0, moviesNumber)
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
              key={movie.id || movie._id}
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
