import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Payment = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handlePayment = () => {
    // Simulate payment
    setTimeout(() => {
      clearCart(); // 🔥 Empty cart after payment
      navigate("/order-success");
    }, 1000);
  };

  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold">Payment Page</h2>
      <p className="mt-3">Complete your payment to proceed</p>

      <button className="btn btn-warning px-4 mt-3" onClick={handlePayment}>
        Pay Now 💳
      </button>

      <br />

      {/* Back Button */}
      <button
        className="btn btn-secondary px-4 mt-3"
        onClick={() => navigate("/cart")}
      >
        ⬅ Back to Cart
      </button>
    </div>
  );
};

export default Payment;
