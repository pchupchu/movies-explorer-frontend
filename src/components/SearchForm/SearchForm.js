import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm({
  onChangeSearchTerm,
  isChecked,
  search,
  onCheckedFilm,
  onSubmitSearch,
  isValid,
  error,
}) {
  return (
    <div className="search">
      <form className="search__form" onSubmit={onSubmitSearch} noValidate>
        <input
          type="text"
          className="search__input"
          id="film"
          name="film"
          placeholder="Фильм"
          required
          value={search || ""}
          onChange={onChangeSearchTerm}
        />
        <span
          className={`search__form-error ${
            isValid ? "" : "search__form-error_active"
          }`}
        >
          {error}
        </span>
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox isChecked={isChecked} onCheckedFilm={onCheckedFilm} />
    </div>
  );
}

export default SearchForm;
