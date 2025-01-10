import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ icon, label, isActive, onClick }) => {
  return (
    <div
      className={`category-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="icon">{icon}</div>
      <p>{label}</p>
    </div>
  );
};

export default CategoryCard;