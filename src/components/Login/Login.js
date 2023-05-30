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
      <form className="login__form">
        <label className="login__form-label">
          E-mail
          <input
            type="email"
            className="login__form-item"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <span className={`login__form-error login__form-error_active`}>
            Что-то пошло не так...
          </span>
        </label>
        <label className="login__form-label">
          Пароль
          <input
            type="password"
            className="login__form-item"
            id="password"
            name="password"
            placeholder="Пароль"
            minLength="6"
            maxLength="30"
            required
          />
          <span className={`login__form-error login__form-error_active`}>
            Что-то пошло не так...
          </span>
        </label>
        <button type="submit" className="login__form-button">
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
