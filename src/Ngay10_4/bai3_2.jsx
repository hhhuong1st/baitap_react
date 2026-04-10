import ProductCard from '.test_2';

const App = () => {
    const products = [
        { id: 1, name: "Áo thun", price: 100 },
        { id: 2, name: "Quần Jean", price: 200 },
        { id: 3, name: "Giày Sneaker", price: 500 }
    ];

    return (
        <>
            {products.map((item) => (
                <ProductCard
                    key={item.id}
                    product={item}
                />
            ))}
        </>
    );
};
export default App;