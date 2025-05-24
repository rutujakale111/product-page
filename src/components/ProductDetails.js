import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));

    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        const filtered = response.data.filter((p) => p.id !== parseInt(id));
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        setRelatedProducts(shuffled.slice(0, 4));
      })
      .catch((error) => console.error("Error fetching related products:", error));
  }, [id]);

  const handleBuyNow = () => {
    navigate("/payment", { state: { product } });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-page">
      <div className="main-product">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>₹{(product.price * 80).toFixed(2)}</p>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>

      <h3>Related Products</h3>
      <div className="related-products">
        {relatedProducts.map((relProd) => (
          <div key={relProd.id} className="related-product-card">
            <Link to={`/product/${relProd.id}`}>
              <img src={relProd.image} alt={relProd.title} />
              <h4>{relProd.title}</h4>
              <p>₹{(relProd.price * 80).toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
