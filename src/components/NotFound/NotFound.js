import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__text-container">
        <p className="not-found__number">404</p>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <Link className="not-found__link" to="/">
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
