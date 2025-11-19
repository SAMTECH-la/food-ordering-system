import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const goToPayment = () => {
    navigate("/payment");
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <h4 className="mt-4 text-center">Cart is Empty</h4>
      ) : (
        cart.map((item) => (
          <div
            key={item.name}
            className="d-flex align-items-center justify-content-between p-3 mb-3 shadow rounded bg-light"
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "90px",
                height: "90px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <div className="ms-3 flex-grow-1">
              <h5 className="fw-bold">{item.name}</h5>
              <p className="text-muted mb-1">₹{item.price}</p>

              <div className="d-flex align-items-center gap-3">
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => decreaseQty(item.name)}
                >
                  -
                </button>

                <span className="fw-bold">{item.qty}</span>

                <button
                  className="btn btn-sm btn-outline-success"
                  onClick={() => increaseQty(item.name)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-end fw-bold fs-5">
              ₹{item.price * item.qty}
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <>
          <h3 className="mt-4 fw-bold">Total: ₹{total}</h3>

          <button
            className="btn btn-warning btn-lg mt-3 fw-semibold w-100"
            style={{ borderRadius: "12px" }}
            onClick={goToPayment}
          >
            🛍️ Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
