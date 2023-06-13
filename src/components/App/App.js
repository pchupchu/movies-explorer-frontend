import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as apiMovies from "../../utils/MoviesApi";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="app">
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        <Route
          path="/profile"
          element={
            <Profile loggedIn={loggedIn} handleSuccess={handleSuccess} />
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
  );
}

export default App;
