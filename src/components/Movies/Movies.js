import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesAll from "../MoviesAll/MoviesAll";

function Movies({ isLiked, loggedIn, isLoading, onSearchFilm }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm onSearchFilm={onSearchFilm} />
        {isLoading ? <Preloader /> : <MoviesAll isLiked={isLiked} />}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
