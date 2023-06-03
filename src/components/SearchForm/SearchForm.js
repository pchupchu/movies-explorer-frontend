import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        {/* <label className="search__label"> */}
        <input
          type="film"
          className="search__input"
          id="film"
          name="film"
          placeholder="Фильм"
          required
        />
        {/* </label> */}
        <button className="search__button" type="button"></button>
      </form>
    </div>
  );
}

export default SearchForm;
