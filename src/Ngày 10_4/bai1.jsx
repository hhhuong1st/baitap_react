const ProductCard = (props) => {
    return (
        <>
            <h3>Tên sản phẩm: {props.name}</h3>
            <p>Giá tiền: {props.price} VNĐ</p>
        </>
    );
};

export default ProductCard;

