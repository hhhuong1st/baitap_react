import React, { useState, memo, useCallback } from 'react';

const ProductCard = memo(({ product, onAddToCart }) => {
  console.log("=> Render Con:", product.name);
  
  return (
    <>
      {product.name} - {product.price}$
      <button onClick={() => onAddToCart(product)}>Add</button>
    </>
  );
});

// --- COMPONENT CHA ---
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'iPhone', price: 1000 },
    { id: 2, name: 'Samsung', price: 900 }
  ]);
  const [cart, setCart] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = useCallback((p) => {
    setCart(curr => [...curr, p]);
  }, []); // [] = Chỉ tạo 1 lần duy nhất

  return (
    <>
      <input 
        placeholder="Gõ để test render..." 
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />

      <p>Giỏ hàng: {cart.length}</p>
      
      {products.map(p => (
        <ProductCard 
          key={p.id} 
          product={p} 
          onAddToCart={handleAdd} 
        />
      ))}
    </>
  );
};

export default ProductList;