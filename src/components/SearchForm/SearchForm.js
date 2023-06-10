import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm({ onSearchFilm }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearchFilm();
  }

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          id="film"
          name="film"
          placeholder="Фильм"
          required
        />
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
