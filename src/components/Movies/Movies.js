import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesButton from "./MoviesButton/MoviesButton";

function Movies() {
  return (
    <section className="movies">
      <Header />
      <MoviesCardList />
      <MoviesButton />
      <Footer />
    </section>
  );
}

export default Movies;
