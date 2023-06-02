import { Link } from "react-router-dom";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <p className="promo__text">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <Link to="/#project" className="promo__link">
        Узнать больше
      </Link>
    </section>
  );
}

export default Promo;
