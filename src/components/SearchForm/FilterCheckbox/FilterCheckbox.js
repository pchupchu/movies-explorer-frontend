import "./FilterCheckbox.css";

function FilterCheckbox({ isChecked, onCheckedFilm }) {
  return (
    <div className="filter">
      <input
        type="checkbox"
        className="filter__input"
        id="short-film"
        name="short-film"
        onChange={onCheckedFilm}
        checked={isChecked}
      />
      <label htmlFor="short-film" className="filter__title">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
