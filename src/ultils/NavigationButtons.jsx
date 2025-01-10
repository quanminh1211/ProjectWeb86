import React from "react";
import "./NavigationButtons.css";

const NavigationButtons = ({ onPrev, onNext }) => {
  return (
    <div className="navigation-buttons">
      <button onClick={onPrev}>&larr;</button>
      <button onClick={onNext}>&rarr;</button>
    </div>
  );
};

export default NavigationButtons;