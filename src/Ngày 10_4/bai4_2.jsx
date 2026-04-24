import React, { useState } from 'react';
import ProductCard from './ProductCard';

const App = () => {

    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: "Áo thun", price: 199000 },
        { id: 2, name: "Quần Jean", price: 350000 }
    ];

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <>
            <h2>Giỏ hàng hiện tại: {cart.length} sản phẩm</h2>
            {products.map(item => (
                <ProductCard
                    key={item.id}
                    product={item}
                    onAddToCart={handleAddToCart}
                />
            ))}
        </>
    );
};

export default App;