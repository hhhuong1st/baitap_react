import React, { useState } from 'react';
import './bt.css'; 

const DanhSachKhoHang = () => {
  const [danhSachHang, setDanhSachHang] = useState([
    { id: 1, ten: "iPhone 15", gia: "25tr", conHang: true },
    { id: 2, ten: "Samsung S24", gia: "23tr", conHang: false },
    { id: 3, ten: "Pixel 8", gia: "18tr", conHang: true },
  ]);


  const daoTrangThaiKho = (idCanTim) => {
    const mangMoiCapNhat = danhSachHang.map((monHang) => {
      if (monHang.id === idCanTim) {
        return { ...monHang, conHang: !monHang.conHang };
      }
      return monHang;
    });
    
    setDanhSachHang(mangMoiCapNhat);
  };

  return (
    <div className="product-container">
      {danhSachHang.map((monHang) => (
        <div key={monHang.id} className="product-card">
          <h3>{monHang.ten}</h3>
          <p>Giá: {monHang.gia}</p>

          <div className={`status-label ${monHang.conHang ? 'con-hang' : 'het-hang'}`}>
            {monHang.conHang ? '✅ Còn hàng' : '❌ Hết hàng'}
          </div>

          <button className="btn-toggle" onClick={() => daoTrangThaiKho(monHang.id)}>
            Cập nhật kho
          </button>
        </div>
      ))}
    </div>
  );
};

export default DanhSachKhoHang;