import React, { useState } from 'react';
import './bt.css'; 

const ShopDarkMode = () => {
  // 1. State: true là Dark Mode, false là Light Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const danhSachHang = [
    { id: 1, ten: "iPhone 15 Pro", gia: "25tr" },
    { id: 2, ten: "MacBook Air M2", gia: "28tr" },
  ];

  return (
    /* 2. Dán class động vào thẻ bao ngoài cùng của toàn bộ trang */
    <div className={`shop-container ${isDarkMode ? 'dark' : 'light'}`}>
      
      <header className="shop-header">
        <h2>Cửa hàng Công nghệ</h2>
        {/* 3. Nút bấm để chuyển đổi chế độ */}
        <button className="btn-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '☀️ Chế độ sáng' : '🌙 Chế độ tối'}
        </button>
      </header>

      <div className="product-grid">
        {danhSachHang.map((sp) => (
          <div key={sp.id} className="product-card">
            <h3>{sp.ten}</h3>
            <p>Giá: {sp.gia}</p>
            <button className="btn-buy">Mua ngay</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopDarkMode;