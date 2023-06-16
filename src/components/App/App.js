import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as apiMovies from "../../utils/MoviesApi";
import * as auth from "../../utils/MainApi";
import {
  BED_REQUEST_ERROR,
  BED_REQUEST_ERROR_MESSAGE,
  CONFLICT_ERROR,
  CONFLICT_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
} from "../../utils/constants";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});

  //Статус пользователя
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") || false
  );
  const [isLiked, setIsLiked] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  function closePopup() {
    setIsInfoTooltipOpen(false);
    if (!isError || isSuccess) {
      setIsEdit(false);
    }
  }

  function handleSearchFilm() {
    setIsLoading(true);
  }

  function handleEditProfile() {
    setIsEdit(!isEdit);
  }

  //Загрузка всех фильмов
  useEffect(() => {
    setIsLoading(true);
    if (loggedIn) {
      apiMovies
        .getMovies()
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
        .finally(() => setIsLoading(false));
    }
  }, [loggedIn]);

  //Загрузка всех сохраненных фильмов

  useEffect(() => {
    if (loggedIn) {
      auth
        .getProfileInfo()
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [loggedIn]);

  //Регистрация
  function handleSuccessReg(name, email, password) {
    auth
      .register(password, email, name)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsSuccess(false);
        if (err === CONFLICT_ERROR) {
          setIsError(CONFLICT_ERROR_MESSAGE);
        } else {
          setIsError(SERVER_ERROR_MESSAGE);
        }
        setTimeout(() => setIsInfoTooltipOpen(true), 800);
      });
  }

  //Логин
  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem("loggedIn", "true");
          navigate("/movies", { replace: true });
          setIsSuccess(true);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setLoggedIn(false);
        setIsSuccess(false);
        if (err === BED_REQUEST_ERROR) {
          setIsError(BED_REQUEST_ERROR_MESSAGE);
        } else {
          setIsError(SERVER_ERROR_MESSAGE);
        }
      })
      .finally(setTimeout(() => setIsInfoTooltipOpen(true), 800));
  }

  useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleTokenCheck = () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      if (token) {
        auth
          .getContent(token)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              localStorage.setItem("loggedIn", "true");
              setCurrentUser(res.data);
            }
          })
          .catch((err) => console.log(`Ошибка: ${err}`));
      }
    }
  };

  function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    setCurrentUser({});
    navigate("/", { replace: true });
  }

  function handleUpdateUser(user) {
    auth
      .setProfileInfo(user)
      .then((res) => {
        setCurrentUser(res.data);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsSuccess(false);
        if (err === CONFLICT_ERROR) {
          setIsError(CONFLICT_ERROR_MESSAGE);
        } else {
          setIsError(SERVER_ERROR_MESSAGE);
        }
      })
      .finally(setTimeout(() => setIsInfoTooltipOpen(true), 800));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/signin"
            element={
              <ProtectedRouteElement
                element={Login}
                handleLogin={handleLogin}
                loggedIn={!loggedIn}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRouteElement
                loggedIn={!loggedIn}
                element={Register}
                handleSuccessReg={handleSuccessReg}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                element={Profile}
                loggedIn={loggedIn}
                signOut={signOut}
                onUpdateUser={handleUpdateUser}
                isEdit={isEdit}
                onEditProfile={handleEditProfile}
              />
            }
          />

          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                element={Movies}
                loggedIn={loggedIn}
                isLiked={isLiked}
                isLoading={isLoading}
                onSearchFilm={handleSearchFilm}
                movies={movies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                loggedIn={loggedIn}
              />
            }
          />
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closePopup}
          isSuccess={isSuccess}
          isError={isError}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
