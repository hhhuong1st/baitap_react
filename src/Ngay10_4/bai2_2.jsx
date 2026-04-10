
import ProductCard from './text';

function App() {
    const productData = {
        id: 1,
        name: "Áo thun",
        price: 199000
    };

    return (
        <>
            <h1>Danh sách sản phẩm</h1>
            <ProductCard product={productData} />
        </>
    );
}

export default App;