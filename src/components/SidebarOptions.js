

import React ,{useState} from 'react';
import "../css/SidebarOptions.css";

const SidebarOptions = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  // Array of categories
  const categories = ['HTML', 'CSS', 'Javascript', 'ReactJs', 'Angular','Others'];

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    setActiveCategory(category);
  };

  return (
    <div className='sidebarOptions'>
      <h4>Categories</h4>
      {/* Use map to render buttons */}
      {categories.map(category => (
        <button 
          key={category} 
          className={activeCategory === category ? 'options-button active' : 'options-button'}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default SidebarOptions;

