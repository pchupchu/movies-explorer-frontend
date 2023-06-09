import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesButton from "../MoviesButton/MoviesButton";
import SearchForm from "../SearchForm/SearchForm";

function Movies({ isLiked }) {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList isLiked={isLiked} />
      <MoviesButton />
      <Footer />
    </>
  );
}

export default Movies;
