import { Link } from "react-router-dom";
import "./AuthPage.css";
import logo from "../../images/logo.svg";

function Auth({ ...props }) {
  return (
    <main className="auth">
      <Link to="/">
        <img className="auth__logo" src={logo} alt="главная страница" />
      </Link>
      <h2 className="auth__title">{props.title}</h2>
      <form className="auth__form" onSubmit={props.onSubmit} noValidate>
        {props.children}
        <button
          type="submit"
          disabled={!props.isValid}
          className={`auth__form-button
          auth__${props.btnClassName}
          ${props.isValid ? "" : "auth__form-button_inactive"}`}
        >
          {props.btnText}
        </button>
      </form>
      <span className="auth__text">
        {props.text}
        <Link className="auth__link" to={props.link}>
          {props.linkText}
        </Link>
      </span>
    </main>
  );
}

export default Auth;
