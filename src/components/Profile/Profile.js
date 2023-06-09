import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header />
      <main className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
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
              defaultValue={"Виталий"}
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
              defaultValue={"pochta@yandex.ru"}
            />
          </fieldset>
          {/* <button type="submit" className="profile__form-button">
            Сохранить
          </button> */}
        </form>
        <button type="button" className="profile__button">
          Редактировать
        </button>
        <Link className="profile__button profile__link" to="/signup">
          Выйти из аккаунта
        </Link>
      </main>
    </>
  );
}

export default Profile;
