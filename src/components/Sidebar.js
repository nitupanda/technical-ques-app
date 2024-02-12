
import React, { useState } from 'react';
import SidebarOptions from './SidebarOptions';

const Sidebar = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category); // Pass the selected category up to the parent component
  };

  return (
    <div className='sidebar'>
      <SidebarOptions onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
    </div>
  );
};

export default Sidebar;


