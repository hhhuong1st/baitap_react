import React, { useState } from 'react';
import './bt.css';

const CategoryFilterApp = () => {
  const [products] = useState([
    { id: 1, name: "Áo thun basic", category: "Áo", price: 199000, image: "https://product.hstatic.net/1000184601/product/women_hong-dom-rose-smoke__1__c96f93ca92504cd39c45be07fff94774_master.png" },
    { id: 2, name: "Quần jean nam", category: "Quần", price: 399000, image: "https://navysi.vn/wp-content/uploads/2024/11/TS081B.jpg" },
    { id: 3, name: "Giày sneaker", category: "Giày", price: 799000, image: "https://www.chapi.vn/img/product/2025/2/28/giay-the-thao-nam-nhe-thoang-khi-bmeirui-9-500x500.jpg" },
    { id: 4, name: "Áo sơ mi trắng", category: "Áo", price: 250000, image: "https://via.placeholder.com/200" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filteredProducts = selectedCategory === "Tất cả" 
    ? products 
    : products.filter(item => item.category === selectedCategory);

  return (
    <div className="container-main">
      <h2>Lọc theo danh mục</h2>

      <div style={filterContainerStyle}>
        {["Tất cả", "Áo", "Quần", "Giày"].map(cat => (
          <button 
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              ...filterBtnStyle,
              backgroundColor: selectedCategory === cat ? "#007bff" : "#eee",
              color: selectedCategory === cat ? "white" : "#333"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <span style={badgeStyle}>{item.category}</span>
            <h4>{item.name}</h4>
            <p className="price">{item.price.toLocaleString()} VNĐ</p>
            <button className="btn-action">Xem chi tiết</button>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && <p>Không có sản phẩm nào thuộc danh mục này.</p>}
    </div>
  );
};

// Style bổ sung cho bộ lọc
const filterContainerStyle = { marginBottom: '30px', display: 'flex', justifyContent: 'center', gap: '10px' };
const filterBtnStyle = { padding: '10px 20px', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', transition: '0.3s' };
const badgeStyle = { fontSize: '12px', background: '#f0f0f0', padding: '2px 8px', borderRadius: '10px', color: '#666' };

export default CategoryFilterApp;