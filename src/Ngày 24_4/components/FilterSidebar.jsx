import React from 'react';

const FilterSidebar = React.memo(({ categories, selectedCategory, onSelectCategory }) => {
  console.log("Rendering FilterSidebar");
  return (
    <div className="filter-sidebar">
      <h3>Categories</h3>
      <button 
        className={`category-item ${selectedCategory === 'All' ? 'active' : ''}`}
        onClick={() => onSelectCategory('All')}
      >
        All Products
      </button>
      {categories.map((cat) => (
        <button 
          key={cat}
          className={`category-item ${selectedCategory === cat ? 'active' : ''}`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
});

export default FilterSidebar;
