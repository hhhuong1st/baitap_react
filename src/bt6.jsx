import React, { useState } from 'react';
import './bt.css'; 

const UngDungChonSanPham = () => {
  const danhSachHang = [
    { id: 1, ten: "iPhone 15", gia: "25tr" },
    { id: 2, ten: "Samsung S24", gia: "23tr" },
    { id: 3, ten: "Pixel 8", gia: "18tr" },
  ];

  const [maSoDangChon, setMaSoDangChon] = useState(false);

  return (
    <div className="product-container">
      {danhSachHang.map((monHang) => (
        <div
          key={monHang.id}
          onClick={() => setMaSoDangChon(monHang.id === maSoDangChon ? false : monHang.id)}
          className={`product-card ${monHang.id === maSoDangChon ? 'active' : 'normal'}`}
        >
          <h3>{monHang.ten}</h3>
          <p>{monHang.gia}</p>
          {monHang.id === maSoDangChon ? '✅ Đang chọn' : '⚪ Chưa chọn'}
        </div>
      ))}
    </div>
  );
};

export default UngDungChonSanPham;