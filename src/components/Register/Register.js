import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="главная страница" />
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="form login__form">
        <label className="form__label">
          E-mail
          <input
            type="email"
            className="form__item"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <span className={`form__item-error}`}></span>
        </label>
        <label className="form__label">
          Пароль
          <input
            type="password"
            className="form__item"
            id="password"
            name="password"
            placeholder="Пароль"
            minLength="6"
            maxLength="30"
            required
          />
          <span className={`form__item-error}`}></span>
        </label>
        <button type="submit" className="form__button login__button">
          Зарегистрироваться
        </button>
      </form>
      <Link className="login__link" to="/signin">
        Уже зарегистрированы? Войти
      </Link>
    </section>
  );
}

export default Register;
