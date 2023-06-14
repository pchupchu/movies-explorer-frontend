import { Link } from "react-router-dom";
import { useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Profile({
  loggedIn,
  handleSuccess,
  signOut,
  onUpdateUser,
  isUserName,
  handleUserName,
}) {
  const user = useContext(CurrentUserContext);
  const { values, setValues, handleChange, isValid } = useFormAndValidation();

  const [isEdit, setIsEdit] = useState(false);

  function handleEditProfile() {
    setIsEdit(!isEdit);
  }

  useEffect(() => {
    if (user.name) {
      setValues(user);
    }
  }, [user, setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
    handleUserName(values.name);
    handleSuccess();
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <h2 className="profile__title">{`Привет, ${isUserName}!`}</h2>
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
              required
              value={values.name || ""}
              onChange={handleChange}
              disabled={!isEdit}
            />
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
          </fieldset>

          {isEdit ? (
            <>
              <span
                className={`profile__form-error ${
                  isValid ? "" : "profile__form-error_active"
                }`}
              >
                При обновлении профиля произошла ошибка.
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
              onClick={handleEditProfile}
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
