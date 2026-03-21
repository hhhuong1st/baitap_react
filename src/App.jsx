// import React from 'react';
// const NameList = () => {
//   const names = ["An", "Bình", "Chi"];

//   return (
//     <ul>
//       {names.map((name, index) => (
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
//   );
// };
// export default NameList;



























// Bài 2
// import React from 'react';

// const ProductList = () => {
//   const products = [
//     { id: 1, name: "Book", price: 80 },
//     { id: 2, name: "Pen", price: 20 }
//   ];

//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>
//           {product.name} - Giá: {product.price}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ProductList;








// Bài 3
// import React from 'react';

// const ProductCards = () => {
//   const products = [
//     { id: 1, name: "Book", price: 80 },
//     { id: 2, name: "Pen", price: 20 }
//   ];

//   return (
//     <div>
//       {products.map(product => (
//         <div className="card" key={product.id}>
//           <h4>{product.name}</h4>
//           <p>Giá: {product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCards;








// Bài 4
import React from 'react';

const FilteredProducts = () => {
  // Dữ liệu giả lập 10 sản phẩm
  const products = [
    { id: 1, name: "Book", price: 80 },
    { id: 2, name: "Pen", price: 20 },
    { id: 3, name: "Pencil", price: 10 },
    { id: 4, name: "Backpack", price: 150 },
    { id: 5, name: "Eraser", price: 5 },
    { id: 6, name: "Ruler", price: 15 },
    { id: 7, name: "Notebook", price: 55 },
    { id: 8, name: "Marker", price: 60 },
    { id: 9, name: "Stapler", price: 45 },
    { id: 10, name: "Calculator", price: 200 }
  ];

  // Lọc các sản phẩm có giá >= 50
  const expensiveProducts = products.filter(product => product.price >= 50);

  return (
    <div>
      <h3>{"Sản phẩm có giá >= 50:"}</h3>
      <ul>
        {expensiveProducts.map(product => (
          <li key={product.id}>
            {product.name} - Giá: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredProducts;