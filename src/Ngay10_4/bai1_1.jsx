import React from 'react';
import ProductCard from './bai1';

// component cha
const App = () => {
    return (
        <>
            <h1>Cửa hàng của tôi</h1>
            <ProductCard name="Laptop Dell" price="15.000.000đ" />
            <ProductCard name="Chuột Logitech" price="500.000đ" />
            <ProductCard name="Bàn phím cơ" price="1.200.000đ" />
        </>
    );
}

export default App;