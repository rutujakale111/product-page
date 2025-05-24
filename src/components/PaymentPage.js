import React from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>No product selected for payment.</div>;
  }

  const handlePayment = () => {
    alert(`Processing payment for ${product.title}`);
    // Add payment logic here
  };

  return (
    <div className="payment-page">
      <h1 className="payment-heading">Proceed to Payment</h1>

      <img src={product.image} alt={product.title} className="product-image" />

      <h2 className="product-title">{product.title}</h2>

      <p className="product-description">{product.description}</p>

      <p className="product-price">Amount: ₹{(product.price * 80).toFixed(2)}</p>

      <button className="pay-btn" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
