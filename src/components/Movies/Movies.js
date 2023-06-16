import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesAll from "../MoviesAll/MoviesAll";

function Movies({
  loggedIn,
  isLoading,
  onSearchFilm,
  movies,
  onMovieLike,
  onMovieDislike,
  savedMovies,
}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm onSearchFilm={onSearchFilm} />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesAll
            movies={movies}
            onMovieLike={onMovieLike}
            onMovieDislike={onMovieDislike}
            savedMovies={savedMovies}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
