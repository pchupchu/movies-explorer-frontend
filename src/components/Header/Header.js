import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

// function Header({ loggedIn, isEmail, isBurger, handleBurgerMenu, signOut }) {
function Header() {
  // function goProfile() {
  //   navigate("/profile", { replace: true });
  // }

  const [isBurger, setIsBurger] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function handleBurgerMenu() {
    setIsBurger(!isBurger);
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <>
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
          <Link to="/profile" className="header__link header__link_profile">
            Аккаунт
          </Link>
        </div>
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
      </header>
      <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
    </>
  );
}

export default Header;
