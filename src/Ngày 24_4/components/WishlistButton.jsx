import React from 'react';

const WishlistButton = ({ isWishlisted, onToggleWishlist }) => {
  return (
    <button 
      className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onToggleWishlist();
      }}
      title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
    >
      {isWishlisted ? '❤️' : '🤍'}
    </button>
  );
};

export default WishlistButton;
