import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="not-found">
      <div className="not-found__text-container">
        <p className="not-found__number">404</p>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button className="not-found__link" onClick={() => navigate(-1)}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;
