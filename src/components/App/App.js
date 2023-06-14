import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
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
// import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute"

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isSuccessReg, setIsSuccessReg] = useState(false);
  const [isUserName, setIsUserName] = useState("");

  function closePopup() {
    setIsInfoTooltipOpen(false);
  }

  function handleSuccess() {
    setIsSuccess(true);
    setIsInfoTooltipOpen(true);
  }

  function handleSearchFilm() {
    setIsLoading(true);
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
    auth
      .getProfileInfo()
      .then((res) => {
        setCurrentUser(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  function handleSuccessReg(name, email, password) {
    auth
      .register(password, email, name)
      .then((res) => {
        if (res) {
          console.log(res);
          setIsSuccessReg(true);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsSuccessReg(false);
      });
  }

  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
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
              handleUserName(res.data.name);
            }
          })
          .catch((err) => console.log(`Ошибка: ${err}`));
      }
    }
  };

  function signOut() {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  }

  function handleUserName(name) {
    setIsUserName(name);
  }

  function handleUpdateUser(user) {
    auth
      .setProfileInfo(user)
      .then((res) => {
        console.log(res.data);
        setCurrentUser(res.data);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register handleSuccessReg={handleSuccessReg} />}
          />

          <Route
            path="/profile"
            element={
              <Profile
                loggedIn={loggedIn}
                handleSuccess={handleSuccess}
                signOut={signOut}
                onUpdateUser={handleUpdateUser}
                isUserName={isUserName}
                handleUserName={handleUserName}
              />
            }
          />
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route
            path="/movies"
            element={
              <Movies
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
            element={<SavedMovies loggedIn={loggedIn} />}
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
