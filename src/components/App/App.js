import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
