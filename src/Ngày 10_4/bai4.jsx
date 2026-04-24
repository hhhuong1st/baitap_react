const ProductCard = ({ product, onAddToCart }) => {
    return (
        <>
            <h3>{product.name}</h3>
            <p>Giá: {product.price} VNĐ</p>
            <button onClick={() => onAddToCart(product)}>
                Thêm vào giỏ hàng
            </button>
        </>
    );
};

export default ProductCard;