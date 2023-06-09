import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

function Header({ loggedIn }) {
  loggedIn = true;
  const location = useLocation();

  const [isBurger, setIsBurger] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function handleBurgerMenu() {
    setIsBurger(!isBurger);
    setIsNavbarOpen(!isNavbarOpen);
    if (!isBurger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <>
      <header
        className={`header ${location.pathname === "/" ? "header__main" : ""}`}
      >
        <div className="header__navigation">
          <Link to="/">
            <img className="header__logo" src={logo} alt="главная страница" />
          </Link>
          {loggedIn ? <Navigation /> : null}
        </div>
        {loggedIn ? (
          <>
            <Link to="/profile" className="header__link header__link_profile">
              Аккаунт
            </Link>
            <div className="header__burger" onClick={handleBurgerMenu}>
              <span
                className={`header__burger-line ${
                  isBurger ? "header__burger-line_active" : ""
                }`}
              ></span>
              <span
                className={`header__burger-line ${
                  isBurger ? "header__burger-line_active" : ""
                }`}
              ></span>
              <span
                className={`header__burger-line ${
                  isBurger ? "header__burger-line_active" : ""
                }`}
              ></span>
            </div>
            <Navbar
              isNavbarOpen={isNavbarOpen}
              setIsNavbarOpen={setIsNavbarOpen}
            />
          </>
        ) : (
          <div className="header__links">
            <Link to="/signup" className="header__link">
              Регистрация
            </Link>
            <Link to="/signin" className="header__link header__link_sign-in">
              Войти
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
