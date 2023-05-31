import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about">
      <h2 className="about__header">О проекте</h2>
      <ul className="about__list">
        <li>
          <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
          <p className="about__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li>
          <h3 className="about__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th className="about__table-header about__table-header_backend">
              1 неделя
            </th>
            <th className="about__table-header">4 недели</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="about__table-data">Back-end</td>
            <td className="about__table-data">Front-end</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default AboutProject;
