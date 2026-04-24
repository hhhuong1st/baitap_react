import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const mockData = [
        { id: 1, name: "iPhone 15 Pro", price: 999 },
        { id: 2, name: "Samsung Galaxy S24", price: 899 },
        { id: 3, name: "MacBook Air M3", price: 1199 },
      ];
      setProducts(mockData);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sản phẩm nổi bật</h2>

      {loading ? (
        <p>Đang tải...</p>
      ) : (
        products.map(item => (
          <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <p>Tên: {item.name}</p>
            <p>Giá: {item.price}$</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;