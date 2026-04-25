import React from 'react';
import hahaGif from '../../haha.gif';

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

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <img 
          src={hahaGif} 
          alt="fun-gif" 
          style={{ 
            width: '100%',
            maxWidth: '200px',
            borderRadius: '12px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }} 
        />
      </div>

    </div>
  );
});

export default FilterSidebar;
