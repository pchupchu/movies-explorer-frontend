import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__links">
          <li>
            <Link to="https://practicum.yandex.ru/" className="footer__link">
              Яндекс.Практикум
            </Link>
          </li>
          <li>
            <Link to="https://github.com/pchupchu" className="footer__link">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
