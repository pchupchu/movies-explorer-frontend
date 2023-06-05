import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/movies" className="navigation__link navigation__link_active">
        Фильмы
      </Link>
      <Link to="/saved-movies" className="navigation__link">
        Сохранённые фильмы
      </Link>
    </nav>
  );
}

export default Navigation;
