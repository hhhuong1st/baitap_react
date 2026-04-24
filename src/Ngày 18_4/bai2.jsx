import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  console.log("Render Con: " + product.name);
  
  return (
    <>
      {product.name}
      <button onClick={() => onAddToCart(product)}>Add</button>
    </>
  );
};

// --- COMPONENT CHA ---
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'iPhone' },
    { id: 2, name: 'Samsung' }
  ]);
  const [cart, setCart] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = (p) => {
    setCart([...cart, p]);
  };

  return (
    <>
      <input 
        placeholder="Gõ để xem console..." 
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