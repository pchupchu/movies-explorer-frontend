import { Link, useLocation } from "react-router-dom";
import "./MoviesCard.css";
import PJHarvy from "../../images/PJHarvy.jpg";

function MoviesCard() {
  const location = useLocation();
  return (
    <li className="movie">
      <Link to="/">
        <img
          className="movie__picture"
          src={PJHarvy}
          alt="Пи Джей Харви: A dog called money"
        />
      </Link>
      <button
        className={`movie__button ${
          location.pathname === "/movies"
            ? "movie__like-button"
            : "movie__dislike-button"
        }`}
        type="button"
      ></button>
      <div className="movie__description">
        <h2 className="movie__title">Пи Джей Харви: A dog called money</h2>
        <div className="movie__length-container">
          <p className="movie__length">1.17</p>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
