import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__navigation">
        <Link to="/">
          <img className="header__logo" src={logo} alt="главная страница" />
        </Link>
        <Navigation />
      </div>
      <div className="header__links">
        {/* <Link to="/signup" className="header__link">
          Регистрация
        </Link>
        <Link to="/signin" className="header__link header__link_sign-in">
          Войти
        </Link> */}
        <Link to="/signup" className="header__link header__link_profile">
          Аккаунт
        </Link>
      </div>
    </header>
  );
}

export default Header;
