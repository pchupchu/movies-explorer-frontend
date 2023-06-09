import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isNavbarOpen }) {
  const location = useLocation();

  return (
    <div className={`navbar__hidden ${isNavbarOpen ? "navbar__opened" : ""}`}>
      <div className={"navbar__container"}>
        <ul className="navbar__links">
          <li>
            <Link
              to="/"
              className={`navbar__link ${
                location.pathname === "/" ? "navbar__link_active" : ""
              }`}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className={`navbar__link ${
                location.pathname === "/movies" ? "navbar__link_active" : ""
              }`}
            >
              Фильмы
            </Link>
          </li>
          <li>
            <Link
              to="/saved-movies"
              className={`navbar__link ${
                location.pathname === "/saved-movies"
                  ? "navbar__link_active"
                  : ""
              }`}
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>

        <Link
          to="/profile"
          className={`navbar__link navbar__link_profile ${
            location.pathname === "/profile" ? "navbar__link_active" : ""
          }`}
        >
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
