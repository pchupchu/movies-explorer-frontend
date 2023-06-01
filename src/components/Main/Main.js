import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import "./Main.css";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";

function Main() {
  return (
    <section className="main">
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </section>
  );
}

export default Main;
