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
import * as apiMain from "../../utils/MainApi";
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

  function handleLoading() {
    setIsLoading(true);
  }

  function handleEditProfile() {
    setIsEdit(!isEdit);
  }

  // Загрузка всех фильмов (включая сохраненные)
  useEffect(() => {
    setIsLoading(true);
    if (loggedIn) {
      Promise.all([apiMovies.getMovies(), apiMain.getSavedMovies()])
        .then(([moviesRes, savedMoviesRes]) => {
          setMovies(moviesRes);
          setSavedMovies(savedMoviesRes.data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
        .finally(() => setIsLoading(false));
    }
  }, [loggedIn]);

  // Загрузка данных пользователя
  useEffect(() => {
    if (loggedIn) {
      apiMain
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
    apiMain
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
    apiMain
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
        apiMain
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

  // Выход из приложения
  function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("isAllMoviesChecked");
    localStorage.removeItem("searchOfMovies");
    setLoggedIn(false);
    setCurrentUser({});
    navigate("/", { replace: true });
  }

  // Обновление данных пользователя
  function handleUpdateUser(user) {
    apiMain
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

  // Добавление лайка
  function handleMovieLike(movie) {
    apiMain
      .setNewMovie(movie)
      .then((res) => {
        setSavedMovies((state) => [...state, res.data]);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  // Удаление лайка
  function handleMovieDislike(_id) {
    apiMain
      .deleteMovie(_id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== _id));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
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
                isLoading={isLoading}
                onLoading={handleLoading}
                movies={movies}
                onMovieLike={handleMovieLike}
                onMovieDislike={handleMovieDislike}
                savedMovies={savedMovies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                loggedIn={loggedIn}
                onMovieDislike={handleMovieDislike}
                savedMovies={savedMovies}
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
