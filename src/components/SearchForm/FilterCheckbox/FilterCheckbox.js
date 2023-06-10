import "./FilterCheckbox.css";
import { useState } from "react";

function FilterCheckbox() {
  const [isShortFilm, setIsShortFilm] = useState(false);

  function handleShortFilm() {
    setIsShortFilm(!isShortFilm);
  }

  return (
    <div className="filter">
      <input
        type="checkbox"
        className="filter__input"
        id="short-film"
        name="short-film"
        onClick={handleShortFilm}
      />
      <label htmlFor="short-film" className="filter__title">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
