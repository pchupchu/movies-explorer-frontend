import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="auth">
      <Link to="/">
        <img className="auth__logo" src={logo} alt="главная страница" />
      </Link>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form className="auth__form">
        <label className="auth__form-label">
          Имя
          <input
            type="email"
            className="auth__form-item"
            id="name"
            name="name"
            placeholder="Имя"
            minLength="6"
            maxLength="30"
            required
          />
          <span className={`auth__form-error auth__form-error_active`}></span>
        </label>
        <label className="auth__form-label">
          E-mail
          <input
            type="email"
            className="auth__form-item"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <span className={`auth__form-error auth__form-error_active`}></span>
        </label>
        <label className="auth__form-label">
          Пароль
          <input
            type="password"
            className="auth__form-item"
            id="password"
            name="password"
            placeholder="Пароль"
            minLength="6"
            maxLength="30"
            required
          />
          <span className={`auth__form-error auth__form-error_active`}></span>
        </label>
        <button type="submit" className="auth__form-button">
          Зарегистрироваться
        </button>
      </form>
      <span className="login__text">
        {"Уже зарегистрированы? "}
        <Link className="login__text login__link" to="/signup">
          Войти
        </Link>
      </span>
    </section>
  );
}

export default Register;
