import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart, wishlist, onToggleWishlist }) => {
  console.log("Rendering ProductList");
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart}
          isWishlisted={wishlist.includes(product.id)}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
      {products.length === 0 && <p>No products found.</p>}
    </div>
  );
};

export default ProductList;
