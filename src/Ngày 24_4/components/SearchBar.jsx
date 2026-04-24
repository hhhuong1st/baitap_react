import React from 'react';

const SearchBar = React.memo(({ searchQuery, onSearchChange }) => {
  console.log("Rendering SearchBar");
  return (
    <div className="search-container">
      <input 
        type="text" 
        className="search-input"
        placeholder="Search products..." 
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
});

export default SearchBar;
