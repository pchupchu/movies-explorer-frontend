import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";

function Login() {
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
          <span className={`form__item-error form__item-error_active`}>
            Что-то пошло не так...
          </span>
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
          <span className={`form__item-error form__item-error_active`}>
            Что-то пошло не так...
          </span>
        </label>
        <button type="submit" className="form__button login__button">
          Войти
        </button>
      </form>
      <span className="login__text">
        {"Ещё не зарегистрированы? "}
        <Link className="login__text login__link" to="/signup">
          Регистрация
        </Link>
      </span>
    </section>
  );
}

export default Login;
