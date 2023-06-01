import { Link } from "react-router-dom";
import "./AboutMe.css";
import student from "../../../images/student.png";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__header">Студент</h2>
      <div className="student__container">
        <img className="student__photo" src={student} alt="студент" />
        <div className="student__about">
          <h3 className="student__name">Виталий</h3>
          <p className="student__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="student__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link to="https://github.com/pchupchu" className="student__link">
            Github
          </Link>
        </div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
