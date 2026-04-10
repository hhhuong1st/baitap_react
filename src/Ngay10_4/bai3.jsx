const ProductCard = ({ product }) => {
    return (
        <>
            <h3>{product.name}</h3>
            <p>Giá: {product.price} USD</p>
        </>
    );
};

export default ProductCard;