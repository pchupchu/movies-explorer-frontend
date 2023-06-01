import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <Link
            to="https://github.com/pchupchu/how-to-learn"
            className="portfolio__link"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <p className="portfolio__link-text">↗</p>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            to="https://github.com/pchupchu/russian-travel"
            className="portfolio__link"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <p className="portfolio__link-text">↗</p>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            to="https://react-mesto-auth-mu.vercel.app/"
            className="portfolio__link"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <p className="portfolio__link-text">↗</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
