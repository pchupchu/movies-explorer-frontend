import "./Login.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import Auth from "../AuthPage/AuthPage";

function Login() {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Auth
      title="Рады видеть!"
      btnClassName="login-button"
      btnText="Войти"
      text="Ещё не зарегистрированы? "
      link="/signup"
      linkText="Регистрация"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
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
          className={`login__form-error ${
            isValid ? "" : "login__form-error_active"
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
          className={`login__form-error ${
            isValid ? "" : "login__form-error_active"
          }`}
        >
          {errors.password}
        </span>
      </label>
    </Auth>
  );
}

export default Login;
