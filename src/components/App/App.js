import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
