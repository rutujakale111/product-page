import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "../styles.css"; 

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h2>My Store</h2>
      <Link to="/cart" className="cart-icon">
        <FaShoppingCart size={24} />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </Link>
    </nav>
  );
};

export default Navbar;

