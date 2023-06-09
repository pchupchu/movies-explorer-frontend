import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Login() {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  return (
    <main className="login">
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
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          <span
            className={`auth__form-error ${
              isValid ? "" : "auth__form-error_active"
            }`}
          >
            {errors.email}
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
            value={values.password || ""}
            onChange={handleChange}
            required
          />
          <span
            className={`auth__form-error ${
              isValid ? "" : "auth__form-error_active"
            }`}
          >
            {errors.password}
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
    </main>
  );
}

export default Login;
