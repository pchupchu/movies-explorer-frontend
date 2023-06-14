import "./Register.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import Auth from "../AuthPage/AuthPage";

function Register({ handleSuccessReg }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleSuccessReg(values.name, values.email, values.password);
    console.log(values);
  }

  return (
    <Auth
      title="Добро пожаловать!"
      btnClassName="register-button"
      btnText="Зарегистрироваться"
      text="Уже зарегистрированы? "
      link="/signin"
      linkText="Войти"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="register__form-label">
        Имя
        <input
          type="text"
          className="register__form-item"
          id="name"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        <span
          className={`register__form-error ${
            isValid ? "" : "register__form-error_active"
          }`}
        >
          {errors.name}
        </span>
      </label>
      <label className="register__form-label">
        E-mail
        <input
          type="email"
          className="register__form-item"
          id="email"
          name="email"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <span
          className={`register__form-error ${
            isValid ? "" : "register__form-error_active"
          }`}
        >
          {errors.email}
        </span>
      </label>
      <label className="register__form-label">
        Пароль
        <input
          type="password"
          className="register__form-item"
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
          className={`register__form-error ${
            isValid ? "" : "register__form-error_active"
          }`}
        >
          {errors.password}
        </span>
      </label>
    </Auth>
  );
}

export default Register;
