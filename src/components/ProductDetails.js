import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("Default");
  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p className="price">₹{(product.price * 80).toFixed(2)}</p>
      <p>{product.description}</p>

      <div className="options">
        <label>Color:</label>
        <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
          <option value="Default">Default</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
        </select>
      </div>

      <div className="options">
        <label>Size:</label>
        <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>

      <div className="delivery">
        <label>Delivery to:</label>
        <input type="text" placeholder="Enter location" />
      </div>

      <p><strong>Seller:</strong> {product.category}</p>
      <p><strong>Ratings:</strong> ⭐ {product.rating?.rate} ({product.rating?.count} reviews)</p>

      <div className="button-group">
        <button className="cart-btn" onClick={() => alert("Added to cart!")}>Add to Cart</button>
        <button className="buy-btn" onClick={() => alert("Redirecting to payment...")}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
