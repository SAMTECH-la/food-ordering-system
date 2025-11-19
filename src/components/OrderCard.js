import React from "react";

const OrderCard = ({ item, addToCart }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-lg border-0 rounded-4 food-card">
        <img src={item.image} className="card-img-top rounded-top-4" alt={item.name} />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{item.name}</h5>
          <p className="text-muted mb-1">{item.category}</p>
          <p className="text-danger fs-5 fw-semibold">₹{item.price}</p>
          <button className="btn btn-danger px-4 rounded-pill" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
