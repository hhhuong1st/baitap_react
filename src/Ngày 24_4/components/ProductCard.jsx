import React from 'react';
import WishlistButton from './WishlistButton';

const ProductCard = React.memo(({ product, onAddToCart, isWishlisted, onToggleWishlist }) => {
  console.log(`Rendering ProductCard: ${product.name}`);
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <WishlistButton 
        isWishlisted={isWishlisted} 
        onToggleWishlist={() => onToggleWishlist(product.id)} 
      />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h4 className="product-name">{product.name}</h4>
        <span className="product-price">${product.price}</span>
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
});

export default ProductCard;
