import { Link } from "react-router-dom";
import "./AboutMe.css";
import student from "../../../images/student.png";

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__header">Студент</h2>
      <div className="student__about">
        <img className="student__photo" src={student} alt="студент" />
        <h3 className="student__name">Виталий</h3>
        <h4 className="student__profession">Фронтенд-разработчик, 30 лет</h4>
        <p className="student__description">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
      </div>
      <Link to="https://github.com/pchupchu" className="student__link">
        Github
      </Link>
    </section>
  );
}

export default AboutMe;
