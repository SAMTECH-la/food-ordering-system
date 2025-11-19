import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ItemTypes.css";
import foodItems from "../data";
import { useCart } from "../context/CartContext";

const ItemTypes = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { addToCart, increaseQty, decreaseQty, cart } = useCart();

  const selectedCategory = foodItems.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (!selectedCategory)
    return (
      <h2 className="text-center mt-4">Item Not Found</h2>
    );

  return (
    <div className="item-types-container">
      <h2>🍽️ {selectedCategory.name} Types</h2>

      <div className="item-grid">
        {selectedCategory.types.map((item) => {
          const inCart = cart.find((c) => c.name === item.name);

          return (
            <div key={item.id} className="item-card">
              <img src={item.image} className="item-image" alt="" />

              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>⭐ {item.popularity}</p>

              {inCart ? (
                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.name)}>-</button>
                  <span>{inCart.qty}</span>
                  <button onClick={() => increaseQty(item.name)}>+</button>
                </div>
              ) : (
                <button onClick={() => addToCart(item)} className="add-to-cart-btn">
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
};

export default ItemTypes;
