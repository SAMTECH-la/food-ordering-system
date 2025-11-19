// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item or increase quantity
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((it) => it.name === item.name);
      if (existing) {
        return prev.map((it) =>
          it.name === item.name ? { ...it, qty: it.qty + 1 } : it
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // Increase qty
  const increaseQty = (name) => {
    setCart((prev) =>
      prev.map((it) =>
        it.name === name ? { ...it, qty: it.qty + 1 } : it
      )
    );
  };

  // Decrease qty
  const decreaseQty = (name) => {
    setCart((prev) =>
      prev
        .map((it) =>
          it.name === name ? { ...it, qty: it.qty - 1 } : it
        )
        .filter((it) => it.qty > 0)
    );
  };

  // ✅ CLEAR CART AFTER PAYMENT
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
