import { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    {id:1, name:"Book"},
    {id:2, name:"Pen"}
  ]);

  const remove = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };


  return(
    <ul>
      {products.map(p => (
        <li key={p.id}>
          {p.name}
          <button onClick={() => remove(p.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};
export default updateObject