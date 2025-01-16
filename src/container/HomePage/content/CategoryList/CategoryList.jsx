import React, { useState } from "react";
import CategoryCard from "../../../../components/CategoryCard.jsx";
import "./CategoryList.css";

const categories = [
  { id: 1, label: "Phones", icon: "📱" },
  { id: 2, label: "Computers", icon: "💻" },
  { id: 3, label: "SmartWatch", icon: "⌚" },
  { id: 4, label: "Camera", icon: "📷" },
  { id: 5, label: "HeadPhones", icon: "🎧" },
  { id: 6, label: "Gaming", icon: "🎮" },
];

const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
  };

  

  return (
    <div className="category-list">
      <div className="category-container">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            icon={category.icon}
            label={category.label}
            isActive={activeCategory === category.id}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;