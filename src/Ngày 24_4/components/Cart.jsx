import React from 'react';
import CartItem from './CartItem';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity }) => {
  console.log("Rendering Cart");
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="cart-drawer" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-cart" onClick={onClose}>&times;</button>
        </div>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                onUpdateQuantity={onUpdateQuantity} 
              />
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toLocaleString()}</span>
          </div>
          <button className="checkout-btn" disabled={cartItems.length === 0}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
