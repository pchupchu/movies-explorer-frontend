import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <Header />
      <Promo />
      <AboutProject />
    </section>
  );
}

export default Main;
