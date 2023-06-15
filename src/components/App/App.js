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
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  function closePopup() {
    setIsInfoTooltipOpen(false);
  }

  function handleSearchFilm() {
    setIsLoading(true);
  }

  function handleEditProfile() {
    setIsEdit(!isEdit);
  }

  useEffect(() => {
    setIsLoading(true);
    apiMovies
      .getMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }, []);

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

  function handleSuccessReg(name, email, password) {
    auth
      .register(password, email, name)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        if (err === CONFLICT_ERROR) {
          setIsError(CONFLICT_ERROR_MESSAGE);
        } else {
          setIsError(SERVER_ERROR_MESSAGE);
        }
      })
      .finally(setTimeout(() => setIsError(""), 3500));
  }

  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setLoggedIn(false);
        if (err === BED_REQUEST_ERROR) {
          setIsError(BED_REQUEST_ERROR_MESSAGE);
        } else {
          setIsError(SERVER_ERROR_MESSAGE);
        }
      })
      .finally(setTimeout(() => setIsError(""), 3500));
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
              setCurrentUser(res.data);
            }
          })
          .catch((err) => console.log(`Ошибка: ${err}`));
      }
    }
  };

  function signOut() {
    localStorage.removeItem("token");
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
        setIsInfoTooltipOpen(true);
        setTimeout(() => handleEditProfile(), 3500);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsSuccess(false);
        setIsInfoTooltipOpen(false);
        if (err === CONFLICT_ERROR) {
          setIsError(CONFLICT_ERROR_MESSAGE);
        } else {
          setIsError(SERVER_ERROR_MESSAGE);
        }
      })
      .finally(setTimeout(() => setIsError(""), 3500));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/signin"
            element={<Login handleLogin={handleLogin} isError={isError} />}
          />
          <Route
            path="/signup"
            element={
              <Register handleSuccessReg={handleSuccessReg} isError={isError} />
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
                isError={isError}
                isEdit={isEdit}
                onEditProfile={handleEditProfile}
              />
            }
          />
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closePopup}
          isSuccess={isSuccess}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
