import React, { useState } from 'react';
import './bt.css';

const WishlistApp = () => {
  const [danhsachSanPham, setDanhSachSanPham] = useState([
    { id: 1, ten: "Áo thun basic", gia: 199000, daThich: false, hinhAnh: "https://product.hstatic.net/1000184601/product/women_hong-dom-rose-smoke__1__c96f93ca92504cd39c45be07fff94774_master.png" },
    { id: 2, ten: "Quần jean nam", gia: 399000, daThich: false, hinhAnh: "https://navysi.vn/wp-content/uploads/2024/11/TS081B.jpg" },
    { id: 3, ten: "Giày sneaker", gia: 799000, daThich: false, hinhAnh: "https://www.chapi.vn/img/product/2025/2/28/giay-the-thao-nam-nhe-thoang-khi-bmeirui-9-500x500.jpg" }
  ]);

  const xuLyThaTim = (idCuaMonDo) => {
    const khoHangMoi = danhsachSanPham.map((monDo) => {
      if (monDo.id === idCuaMonDo) {
        return { ...monDo, daThich: !monDo.daThich };
      }
      return monDo; 
    });
    setDanhSachSanPham(khoHangMoi); 
  };

  const danhSachYeuThich = danhsachSanPham.filter(monDo => monDo.daThich);

  return (
    <div className="container-main">
      <header className="shop-header">
        <h2>Sản phẩm yêu thích</h2>
        <div className="cart-status" style={{ backgroundColor: '#eb4d4b' }}>
          ❤️ Yêu thích: {danhSachYeuThich.length}
        </div>
      </header>

      <div className="product-grid">
        {danhsachSanPham.map((monDo) => (
          <div key={monDo.id} className="card" style={{ position: 'relative' }}>
            {/* Nút thả tim */}
            <button 
              onClick={() => xuLyThaTim(monDo.id)}
              style={heartBtnStyle}
            >
              {monDo.daThich ? '❤️' : '🤍'}
            </button>

            <img src={monDo.hinhAnh} alt={monDo.ten} />
            <h4>{monDo.ten}</h4>
            <p className="price">{monDo.gia.toLocaleString()} VNĐ</p>
            <button className="btn-action">Xem chi tiết</button>
          </div>
        ))}
      </div>

      {/* Danh sách Wishlist tóm tắt phía dưới */}
      <div className="cart-info">
        <h3>💖 Danh sách yêu thích của bạn:</h3>
        {danhSachYeuThich.length === 0 ? (
          <p>Bạn chưa yêu thích sản phẩm nào.</p>
        ) : (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {danhSachYeuThich.map(monDo => (
              <span key={monDo.id} style={tagStyle}>
                {monDo.ten} 
                <button 
                  onClick={() => xuLyThaTim(monDo.id)} 
                  style={{border:'none', background:'none', cursor:'pointer', marginLeft: '5px'}}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Phần Style giữ nguyên như cũ ---
const heartBtnStyle = { position: 'absolute', top: '10px', right: '10px', background: 'white', border: 'none', borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 };
const tagStyle = { background: '#fff', border: '1px solid #eb4d4b', color: '#eb4d4b', padding: '5px 15px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' };

export default WishlistApp;