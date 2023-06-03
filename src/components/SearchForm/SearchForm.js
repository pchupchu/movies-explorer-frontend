import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <input
          type="film"
          className="search__input"
          id="film"
          name="film"
          placeholder="Фильм"
          required
        />
        <button className="search__button" type="button"></button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
