import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm({
  onLoading,
  onChangeSearchTerm,
  isChecked,
  search,
  onCheckedFilm,
  onSubmitSearch,
}) {
  return (
    <div className="search">
      <form className="search__form" onSubmit={onSubmitSearch}>
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
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox isChecked={isChecked} onCheckedFilm={onCheckedFilm} />
    </div>
  );
}

export default SearchForm;
