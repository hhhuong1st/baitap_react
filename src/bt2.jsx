import React, { useState } from 'react';
import './bt.css'; // <--- Nhớ import file CSS bạn vừa tạo

const ShoppingCartApp = () => {
  const [products] = useState([
    { id: 1, name: "Áo thun basic", price: 199000, image: "https://product.hstatic.net/1000184601/product/women_hong-dom-rose-smoke__1__c96f93ca92504cd39c45be07fff94774_master.png" },
    { id: 2, name: "Quần jean nam", price: 399000, image: "https://navysi.vn/wp-content/uploads/2024/11/TS081B.jpg" },
    { id: 3, name: "Giày sneaker", price: 799000, image: "https://www.chapi.vn/img/product/2025/2/28/giay-the-thao-nam-nhe-thoang-khi-bmeirui-9-500x500.jpg" }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
  <div className="container-main">
    <header className="shop-header">
      <h2>Cửa hàng Online</h2>
      <div className="cart-status">🛒 Giỏ hàng: {cart.length}</div>
    </header>

    <div className="product-grid">
      {products.map(item => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <p className="price">{item.price.toLocaleString()} VNĐ</p>
          <button className="btn-action" onClick={() => addToCart(item)}>
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
    
    <div className="cart-info">
      <h3>Sản phẩm đã chọn:</h3>
      {cart.map((item, index) => (
        <li key={index} className="cart-item">
          <span>{item.name}</span>
          <strong>{item.price.toLocaleString()} VNĐ</strong>
        </li>
      ))}
    </div>
  </div>
);
};

export default ShoppingCartApp;