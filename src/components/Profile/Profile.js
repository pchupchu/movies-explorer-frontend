import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Profile({
  loggedIn,
  signOut,
  onUpdateUser,
  isError,
  isEdit,
  onEditProfile,
}) {
  const user = useContext(CurrentUserContext);
  const { values, setValues, handleChange, isValid, setIsValid, errors } =
    useFormAndValidation();

  useEffect(() => {
    if (user.name) {
      setValues(user);
      setIsValid(false);
    }
  }, [user, setValues, setIsValid]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <h2 className="profile__title">{`Привет, ${user.name}!`}</h2>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <fieldset className="profile__form-section">
            <label htmlFor="name" className="profile__form-label">
              Имя
            </label>
            <input
              type="text"
              className="profile__form-item"
              id="name"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="30"
              pattern="^[A-Za-zА-Яа-яЁё\-\s]+"
              required
              value={values.name || ""}
              onChange={handleChange}
              disabled={!isEdit}
            />
            <span
              className={`profile__form-error profile__form-error_input ${
                isValid ? "" : "profile__form-error_active"
              }`}
            >
              {errors.name}
            </span>
          </fieldset>
          <fieldset className="profile__form-section">
            <label htmlFor="email" className="profile__form-label">
              E-mail
            </label>
            <input
              type="email"
              className="profile__form-item"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={values.email || ""}
              onChange={handleChange}
              disabled={!isEdit}
            />
            <span
              className={`profile__form-error profile__form-error_input ${
                isValid ? "" : "profile__form-error_active"
              }`}
            >
              {errors.email}
            </span>
          </fieldset>

          {isEdit ? (
            <>
              <span className="profile__form-error profile__form-error_active">
                {isError}
              </span>
              <button
                type="submit"
                disabled={!isValid}
                className={`profile__form-button ${
                  isValid ? "" : "profile__form-button_inactive"
                }`}
              >
                Сохранить
              </button>{" "}
            </>
          ) : null}
        </form>
        {!isEdit ? (
          <>
            <button
              type="button"
              className="profile__button"
              onClick={onEditProfile}
            >
              Редактировать
            </button>
            <Link
              className="profile__button profile__link"
              to="/"
              onClick={signOut}
            >
              Выйти из аккаунта
            </Link>
          </>
        ) : null}
      </main>
    </>
  );
}

export default Profile;
