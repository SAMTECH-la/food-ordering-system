import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  const [orderId, setOrderId] = useState("");

  // Generate Order ID on page load
  useEffect(() => {
    const id = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(id);
  }, []);

  return (
    <div className="container text-center py-5">
      <div className="success-box mx-auto p-4 rounded shadow-lg" style={{ maxWidth: "450px" }}>
        
        <div className="text-success fs-1 mb-3">✔️</div>
        <h2 className="fw-bold">Order Placed Successfully!</h2>

        <p className="mt-3 fs-5">
          Your order has been placed.  
          <br />Thank you for choosing <strong>FoodieHub</strong> 🍔✨
        </p>

        <div className="order-id-box mt-4 p-3 bg-light rounded">
          <h5 className="fw-bold">Order ID:</h5>
          <p className="text-primary fs-4 fw-bold">{orderId}</p>
        </div>

        <div className="mt-4 d-flex justify-content-around">
          <Link to="/home" className="btn btn-primary px-4">🏠 Home</Link>
          <Link to="/order-status" className="btn btn-success px-4">📦 Track Order</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
