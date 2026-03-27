import React, { useState } from 'react';
import './bt.css';

const QuantityApp = () => {
  const [products] = useState([
    { id: 1, name: "Áo thun basic", price: 199000, image: "https://product.hstatic.net/1000184601/product/women_hong-dom-rose-smoke__1__c96f93ca92504cd39c45be07fff94774_master.png" },
    { id: 2, name: "Quần jean nam", price: 399000, image: "https://navysi.vn/wp-content/uploads/2024/11/TS081B.jpg" },
    { id: 3, name: "Giày sneaker", price: 799000, image: "https://www.chapi.vn/img/product/2025/2/28/giay-the-thao-nam-nhe-thoang-khi-bmeirui-9-500x500.jpg" }
  ]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);

    if (isExist) {
      setCart(cart.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Hàm giảm số lượng
  const handleDecrease = (id) => {
    setCart(cart.map((item) => 
      (item.id === id && item.quantity > 1) 
      ? { ...item, quantity: item.quantity - 1 } 
      : item
    ));
  };

  // Hàm xóa sản phẩm khỏi giỏ
  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Tính tổng tiền
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="container-main">
      <header className="shop-header">
        <h2>Quản lý số lượng</h2>
        <div className="cart-status">🛒 {cart.length} loại hàng</div>
      </header>

      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="price">{item.price.toLocaleString()} VNĐ</p>
            <button className="btn-action" onClick={() => handleAddToCart(item)}>
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>

      <div className="cart-info">
        <h3>Giỏ hàng của bạn</h3>
        {cart.length === 0 ? <p>Chưa có sản stone nào.</p> : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name} ({item.price.toLocaleString()}đ)</span>
                <div>
                  <button onClick={() => handleDecrease(item.id)} style={btnSmall}>-</button>
                  <span style={{ margin: '0 10px', fontWeight: 'bold' }}>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)} style={btnSmall}>+</button>
                  <button onClick={() => handleRemove(item.id)} style={btnDel}>Xóa</button>
                </div>
              </div>
            ))}
            <h4 style={{ textAlign: 'right', marginTop: '20px', color: 'red' }}>
              Tổng thanh toán: {totalPrice.toLocaleString()} VNĐ
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};
const btnSmall = { width: '30px', cursor: 'pointer', border: '1px solid #ddd' };
const btnDel = { marginLeft: '20px', color: 'red', border: 'none', background: 'none', cursor: 'pointer' };

export default QuantityApp;