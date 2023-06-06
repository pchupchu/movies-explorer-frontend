import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <Link
        to="/movies"
        className={`navigation__link ${
          location.pathname === "/movies" ? "navigation__link_active" : ""
        }`}
      >
        Фильмы
      </Link>
      <Link
        to="/saved-movies"
        className={`navigation__link ${
          location.pathname === "/saved-movies" ? "navigation__link_active" : ""
        }`}
      >
        Сохранённые фильмы
      </Link>
    </nav>
  );
}

export default Navigation;
