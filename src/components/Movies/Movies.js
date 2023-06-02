import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <section className="movies">
      <Header />
      <MoviesCardList />
      <Footer />
    </section>
  );
}

export default Movies;
