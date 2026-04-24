import React from 'react';

const CartItem = React.memo(({ item, onUpdateQuantity }) => {
  console.log(`Rendering CartItem: ${item.name}`);
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-info">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">${item.price}</p>
      </div>
      <div className="cart-item-controls">
        <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
        <span className="qty-display">{item.quantity}</span>
        <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
      </div>
    </div>
  );
});

export default CartItem;
