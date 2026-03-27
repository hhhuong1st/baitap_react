import React, { useState } from 'react';
import './bt.css';

const WishlistApp = () => {
  // 1. Dữ liệu ban đầu có thêm thuộc tính isFavorite: false
  const [products, setProducts] = useState([
    { id: 1, name: "Áo thun basic", price: 199000, isFavorite: false, image: "https://product.hstatic.net/1000184601/product/women_hong-dom-rose-smoke__1__c96f93ca92504cd39c45be07fff94774_master.png" },
    { id: 2, name: "Quần jean nam", price: 399000, isFavorite: false, image: "https://navysi.vn/wp-content/uploads/2024/11/TS081B.jpg" },
    { id: 3, name: "Giày sneaker", price: 799000, isFavorite: false, image: "https://www.chapi.vn/img/product/2025/2/28/giay-the-thao-nam-nhe-thoang-khi-bmeirui-9-500x500.jpg" }
  ]);

  // 2. Hàm xử lý Thả tim / Bỏ tim
  const toggleWishlist = (id) => {
    const newProducts = products.map((item) => {
      if (item.id === id) {
        // Trả về object cũ nhưng đảo ngược giá trị isFavorite
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item; // Các item khác giữ nguyên
    });
    setProducts(newProducts);
  };

  // 3. Lọc ra danh sách các món đã được thả tim để hiển thị riêng
  const wishlist = products.filter(item => item.isFavorite);

  return (
    <div className="container-main">
      <header className="shop-header">
        <h2>Sản phẩm yêu thích</h2>
        <div className="cart-status" style={{ backgroundColor: '#eb4d4b' }}>
          ❤️ Yêu thích: {wishlist.length}
        </div>
      </header>

      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="card" style={{ position: 'relative' }}>
            <button 
              onClick={() => toggleWishlist(item.id)}
              style={heartBtnStyle}
            >
              {item.isFavorite ? '❤️' : '🤍'}
            </button>

            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="price">{item.price.toLocaleString()} VNĐ</p>
            <button className="btn-action">Xem chi tiết</button>
          </div>
        ))}
      </div>

      {/* Danh sách Wishlist tóm tắt phía dưới */}
      <div className="cart-info">
        <h3>💖 Danh sách Wishlist của bạn:</h3>
        {wishlist.length === 0 ? (
          <p>Bạn chưa yêu thích sản phẩm nào.</p>
        ) : (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {wishlist.map(item => (
              <span key={item.id} style={tagStyle}>
                {item.name} <button onClick={() => toggleWishlist(item.id)} style={{border:'none', background:'none', cursor:'pointer'}}>×</button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Style bổ sung
const heartBtnStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '35px',
  height: '35px',
  cursor: 'pointer',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1
};

const tagStyle = {
  background: '#fff',
  border: '1px solid #eb4d4b',
  color: '#eb4d4b',
  padding: '5px 15px',
  borderRadius: '20px',
  fontSize: '14px',
  fontWeight: 'bold'
};

export default WishlistApp;