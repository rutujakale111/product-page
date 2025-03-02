import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <span className="item-name">{item.name}</span>
                <span className="item-price">₹{item.price}</span>
                <div className="item-quantity">
                  <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          
          {/* Total Price Section */}
          <div className="cart-total">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
