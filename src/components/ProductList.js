import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import "../styles.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

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
            <Link to="/payment">
              <button className="buy-now-btn">Buy Now</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
