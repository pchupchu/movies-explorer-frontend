import "./MoviesButton.css";

function MoviesButton({ addMovies }) {
  return (
    <button onClick={addMovies} className="movies-button" type="button">
      Ещё
    </button>
  );
}

export default MoviesButton;
