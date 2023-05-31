import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="главная страница" />
      </Link>
      <div className="header__links">
        <Link to="/signup" className="header__link">
          Регистрация
        </Link>
        <Link to="/signin" className="header__link header__link_sign-in">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
