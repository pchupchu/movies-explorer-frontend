import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter">
      <input
        type="checkbox"
        className="filter__input"
        id="short-film"
        name="short-film"
      />
      <label htmlFor="short-film" className="filter__title">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
