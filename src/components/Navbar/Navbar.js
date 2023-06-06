import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isNavbarOpen }) {
  return (
    <div className={`navbar__hidden ${isNavbarOpen ? "navbar__opened" : ""}`}>
      <div className={"navbar__container"}>
        {/* <div className="navbar__links-wrapper"> */}
        <ul className="navbar__links">
          <li>
            <Link to="/" className="navbar__link">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/movies" className="navbar__link navbar__link_active">
              Фильмы
            </Link>
          </li>
          <li>
            <Link to="/saver-movies" className="navbar__link">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to="/profile" className="navbar__link">
          Аккаунт
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Navbar;
