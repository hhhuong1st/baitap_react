import React, { useState } from 'react';
import './bt.css'; 

const DanhSachGiamGia = () => {
  const [danhSachHang, setDanhSachHang] = useState([
    { id: 1, ten: "Giày chạy bộ", gia: "1.200.000", isSale: true },
    { id: 2, ten: "Áo khoác gió", gia: "500.000", isSale: false },
    { id: 3, ten: "Mũ bảo hiểm", gia: "350.000", isSale: true },
  ]);

  return (
    <div className="product-container">
      {danhSachHang.map((sp) => (
        <div key={sp.id} className="product-card">
          {sp.isSale && <span className="sale-badge">🔥 Sale</span>}
          <h3>{sp.ten}</h3>
          <p className={`price ${sp.isSale ? 'sale-price' : ''}`}>
            {sp.gia} VNĐ
          </p>
          
        </div>
      ))}
    </div>
  );
};

export default DanhSachGiamGia;