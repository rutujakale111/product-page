import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import "../styles.css";

const ProductList = () => {
  const [products, setProducts] = useState([]); // ✅ DEFINE products
  const { addToCart } = useCart();              // ✅ DEFINE addToCart
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleBuyNow = (product) => {
    navigate("/payment", { state: { product } }); // ✅ Pass product data if needed
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
          </Link>
          <h3>{product.title}</h3>
          <p>₹{(product.price * 80).toFixed(2)}</p>
          <div className="button-container">
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
              Add to Cart
            </button>
            <button onClick={() => handleBuyNow(product)} className="buy-now-btn">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList; // ✅ EXPORT DEFAULT
