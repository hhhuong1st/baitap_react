import React, { useState, memo, useCallback } from 'react';

const ProductCard = memo(({ product, isFavorite, onToggle }) => {
  console.log("=> Render:", product.name);

  return (
    <>
      {product.name}
      <button onClick={() => onToggle(product.id)}>
        {isFavorite ? "❤️ Remove" : "🤍 Add"}
      </button>
    </>
  );
});

// --- COMPONENT CHA: ProductList ---
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: "iPhone 15" },
    { id: 2, name: "Samsung S24" },
    { id: 3, name: "MacBook M3" }
  ]);

  const [wishlist, setWishlist] = useState([]); // Chứa ID sản phẩm: [1, 2]
  const [text, setText] = useState(""); // Để test render khi gõ phím

  // LOGIC: Hàm đảo ngược trạng thái (Toggle)
  // Dùng useCallback để "ghim" hàm, không bị tạo lại khi gõ text
  const toggleWishlist = useCallback((id) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(id)) {
        // Nếu đã có thì xóa đi
        return prevWishlist.filter((item) => item !== id);
      } else {
        // Nếu chưa có thì thêm vào
        return [...prevWishlist, id];
      }
    });
  }, []); // Để mảng rỗng vì dùng functional update (prevWishlist)

  return (
    <>
      <h2>Wishlist Logic</h2>
      
      <input 
        placeholder="Gõ để test render..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />

      <p>Yêu thích: {wishlist.join(", ")}</p>

      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onToggle={toggleWishlist}
          isFavorite={wishlist.includes(p.id)}
        />
      ))}
    </>
  );
};

export default ProductList;