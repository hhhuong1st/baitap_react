import React, { useState } from 'react';
import './bt.css';

const QuantityApp = () => {
  const [products] = useState([
    { id: 1, name: "Áo thun basic", price: 199000, image: "https://product.hstatic.net/1000184601/product/women_hong-dom-rose-smoke__1__c96f93ca92504cd39c45be07fff94774_master.png" },
    { id: 2, name: "Quần jean nam", price: 399000, image: "https://navysi.vn/wp-content/uploads/2024/11/TS081B.jpg" },
    { id: 3, name: "Giày sneaker", price: 799000, image: "https://www.chapi.vn/img/product/2025/2/28/giay-the-thao-nam-nhe-thoang-khi-bmeirui-9-500x500.jpg" }
  ]);

  const [cart, setCart] = useState([]);

  // 1. Thêm hoặc Tăng số lượng
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

  // 2. Giảm số lượng - Nếu đang là 1 mà giảm tiếp thì Xóa
  const handleDecrease = (id) => {
    const targetItem = cart.find(item => item.id === id);
    
    if (targetItem.quantity > 1) {
      setCart(cart.map((item) => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      // Nếu quantity bằng 1, thực hiện xóa luôn
      handleRemove(id);
    }
  };

  // 3. Cho phép khách tự nhập số lượng
  const handleInputChange = (id, value) => {
    const newQuantity = parseInt(value);
    
    if (isNaN(newQuantity) || newQuantity <= 0) {
      // Nếu nhập bậy hoặc bằng 0 thì xóa khỏi giỏ
      handleRemove(id);
    } else {
      setCart(cart.map((item) => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="container-main">
      <header className="shop-header">
        <h2>Quản lý giỏ hàng nâng cao</h2>
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
        {cart.length === 0 ? <p>Chưa có sản phẩm nào.</p> : (
          <div>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #ccc' }}>
                  <th>Sản phẩm</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '10px 0' }}>{item.name}</td>
                    <td>{item.price.toLocaleString()}đ</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button onClick={() => handleDecrease(item.id)} style={btnSmall}>-</button>
                        <input 
                          type="number" 
                          value={item.quantity} 
                          onChange={(e) => handleInputChange(item.id, e.target.value)}
                          style={inputStyle}
                        />
                        <button onClick={() => handleAddToCart(item)} style={btnSmall}>+</button>
                      </div>
                    </td>
                    <td style={{ fontWeight: 'bold' }}>
                      {(item.price * item.quantity).toLocaleString()}đ
                    </td>
                    <td>
                      <button onClick={() => handleRemove(item.id)} style={btnDel}>Xóa</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <h4 style={{ textAlign: 'right', marginTop: '20px', color: 'red', fontSize: '1.2rem' }}>
              Tổng cộng thanh toán: {totalPrice.toLocaleString()} VNĐ
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

const btnSmall = { width: '25px', height: '25px', cursor: 'pointer', border: '1px solid #ddd', background: '#f9f9f9' };
const btnDel = { color: 'red', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' };
const inputStyle = { width: '40px', textAlign: 'center', margin: '0 5px', border: '1px solid #ddd', borderRadius: '4px' };

export default QuantityApp;