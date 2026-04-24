import React, { useState, useEffect } from 'react';

const ShoppingCart = () => {
  // 1. Danh sách sản phẩm để chọn
  const products = [
    { id: 1, name: "iPhone 15", price: 1000 },
    { id: 2, name: "Samsung S24", price: 900 },
    { id: 3, name: "Sony WH-1000", price: 300 }
  ];

  // 2. State giỏ hàng: Lưu mảng các tên sản phẩm
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('myCartItems');
    return saved ? JSON.parse(saved) : 0;
  });

  // 3. Tự động lưu mảng sản phẩm vào máy khi có thay đổi
  useEffect(() => {
    localStorage.setItem('myCartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // 4. Hàm xử lý khi bấm nút "Mua"
  const handleBuy = (productName) => {
    // Thêm tên sản phẩm mới vào danh sách cũ
    setCartItems([...cartItems, productName]);
  };

  return (
    <>
      <h2>Cửa hàng</h2>
      {products.map(p => (
        <div key={p.id}>
          <span>{p.name} - ${p.price} </span>
          <button onClick={() => handleBuy(p.name)}>Mua ngay</button>
        </div>
      ))}

      <hr />
      <h3>Giỏ hàng của bạn ({cartItems.length} món)</h3>

      {cartItems.length === 0 ? <p>Chưa có món nào.</p> : (
        <ul>
          {cartItems.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}

      <button onClick={() => setCartItems([])}>Xóa sạch giỏ hàng</button>
    </>
  );
};

export default ShoppingCart;