import { useState } from "react";
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function closePopup() {
    setIsInfoTooltipOpen(false);
  }

  function handleSuccess() {
    setIsSuccess(true);
    setIsInfoTooltipOpen(true);
  }

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
          element={<Movies loggedIn={loggedIn} isLiked={isLiked} />}
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
