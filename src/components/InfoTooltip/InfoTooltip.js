import { useEffect } from "react";
import fail from "../../images/fail.png";
import success from "../../images/success.png";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose, isSuccess }) {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img
          className="popup__icon"
          src={isSuccess ? success : fail}
          alt={isSuccess ? "весёлый кот" : "грустный кот"}
        />
        <h2 className="popup__title">
          {isSuccess
            ? "Информация Вашего профиля обновлена успешно!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
