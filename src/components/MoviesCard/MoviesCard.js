import { Link, useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { MOVIES_URL } from "../../utils/constants";
import { useState } from "react";

function MoviesCard({
  movie,
  onMovieLike,
  onMovieDislike,
  isFilmLiked,
  isMoviesAll,
  _id,
}) {
  const location = useLocation();

  const [isLiked, setIsLiked] = useState(isFilmLiked);

  function timeConvert(time) {
    const minutes = time % 60;
    const hours = Math.floor(time / 60);
    return `${hours}ч ${minutes.toString().padStart(2, "0")}м`;
  }
  function handleLikes() {
    if (isMoviesAll && isLiked) {
      setIsLiked(false);
      onMovieDislike(_id);
    } else if (isMoviesAll && !isLiked) {
      setIsLiked(true);
      onMovieLike(movie);
    } else {
      onMovieDislike(_id);
    }
  }

  return (
    <li className="movie">
      <Link to={movie.trailerLink} target="_blank">
        <img
          className="movie__picture"
          src={`${MOVIES_URL}${movie.image.url}`}
          alt={movie.nameRU}
        />
      </Link>

      {location.pathname === "/saved-movies" ? (
        <button
          className="movie__button movie__dislike-button"
          type="button"
        ></button>
      ) : (
        <button
          className={`movie__button ${
            isLiked ? "movie__liked-button" : "movie__like-button"
          }`}
          type="button"
          onClick={handleLikes}
        ></button>
      )}
      <div className="movie__description">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <div className="movie__length-container">
          <p className="movie__length">{timeConvert(movie.duration)}</p>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
