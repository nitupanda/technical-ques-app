import React, { useState } from "react";
import "../css/SidebarOptions.css";

const SidebarOptions = ({ onTypeSelect }) => {
  // Define array of categories
  const categories = ["HTML", "CSS", "JavaScript", "React.js", "Angular"];

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  // Function to handle button click and pass the selected type to parent component
  const handleTypeSelect = (type) => {
    setSelectedCategory(type);
    onTypeSelect(type);
  };

  return (
    <div className="sidebarOptions">
      <h4>Categories</h4>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`options-button ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => handleTypeSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default SidebarOptions;
