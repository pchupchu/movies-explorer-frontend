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
import Preloader from "../Preloader/Preloader";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        <Route path="/profile" element={<Profile loggedIn={loggedIn} />} />
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/movies" element={<Movies loggedIn={loggedIn} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies loggedIn={loggedIn} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/load" element={<Preloader />} />
      </Routes>
    </div>
  );
}

export default App;
