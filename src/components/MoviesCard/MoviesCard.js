import { Link, useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ isLiked, movie }) {
  const location = useLocation();

  const movieApi = "https://api.nomoreparties.co/";

  return (
    <li className="movie">
      <Link to={movie.trailerLink} target="_blank">
        <img
          className="movie__picture"
          src={`${movieApi}${movie.image.url}`}
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
        ></button>
      )}
      <div className="movie__description">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <div className="movie__length-container">
          <p className="movie__length">{movie.duration}</p>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
