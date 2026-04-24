import React, { useState, useEffect } from 'react';

const ShoppingCart = () => {
  const [cartCount, setCartCount] = useState(() => {
    const savedCart = localStorage.getItem('myCart');
    return savedCart ? parseInt(savedCart) : 0;
  });

  useEffect(() => {
    localStorage.setItem('myCart', cartCount);

  }, [cartCount]);

  return (
    <>
      <p>Số lượng: <strong>{cartCount}</strong></p>
      <button onClick={() => setCartCount(cartCount + 1)}>Thêm món</button>
      <button onClick={() => setCartCount(0)}>Xóa hết</button>
    </>
  );
};

export default ShoppingCart;