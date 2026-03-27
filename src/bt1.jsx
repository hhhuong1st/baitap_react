import React, { useState } from 'react';
import './bt.css';

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: "Áo thun basic", price: 199000, image: "https://product.hstatic.net/1000184601/product/women_hong-dom-rose-smoke__1__c96f93ca92504cd39c45be07fff94774_master.png" },
    { id: 2, name: "Quần jean nam", price: 399000, image: "https://navysi.vn/wp-content/uploads/2024/11/TS081B.jpg" },
    { id: 3, name: "Giày sneaker", price: 799000, image: "https://www.chapi.vn/img/product/2025/2/28/giay-the-thao-nam-nhe-thoang-khi-bmeirui-9-500x500.jpg" },
    { id: 3, name: "Giày sneaker", price: 799000, image: "https://www.chapi.vn/img/product/2025/2/28/giay-the-thao-nam-nhe-thoang-khi-bmeirui-9-500x500.jpg" },
    { id: 3, name: "Giày sneaker", price: 799000, image: "https://www.chapi.vn/img/product/2025/2/28/giay-the-thao-nam-nhe-thoang-khi-bmeirui-9-500x500.jpg" },
    
  ]);

  return (
  <div className="container-main">
    <h2>Danh sách sản phẩm</h2>
    <div className="product-grid">
      {products.map(item => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p className="price">{item.price.toLocaleString()} VNĐ</p>
          <button className="btn-action">Xem chi tiết</button>
        </div>
      ))}
    </div>
  </div>
);
};

export default ProductList;