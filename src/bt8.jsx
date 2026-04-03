import React, { useState } from 'react';
import './bt.css'; 

const DanhSachGioHang = () => {
  const [danhSachHang, setDanhSachHang] = useState([
    { id: 1, ten: "iPhone 15 Pro", daThem: false },
    { id: 2, ten: "Ốp lưng MagSafe", daThem: false },
    { id: 3, ten: "Sạc dự phòng 20W", daThem: true },
  ]);

  const handleThemGioHang = (idCanSua) => {
    const mangMoi = danhSachHang.map((item) => {
      if (item.id === idCanSua) {
        return { ...item, daThem: !item.daThem };
      }
      return item;
    });
    setDanhSachHang(mangMoi);
  };

  return (
    <div className="product-container">
      {danhSachHang.map((sp) => (
        <div key={sp.id} className="product-card">
          <h3>{sp.ten}</h3>
          
          <button
            onClick={() => handleThemGioHang(sp.id)}
            className={`btn-cart ${sp.daThem ? 'btn-added' : 'btn-none'}`}
          >
            {sp.daThem ? '✅ Đã thêm' : '🛒 Thêm vào giỏ'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DanhSachGioHang;