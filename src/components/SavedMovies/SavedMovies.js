import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ loggedIn, onSearchFilm, onMovieDislike }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="saved-movies">
        <SearchForm onSearchFilm={onSearchFilm} />
        <MoviesCardList onMovieDislike={onMovieDislike} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
