import React, { useState } from "react";
import Sidebar from "./Sidebar";
import foodItems from "../data";

const ManageMenu = () => {
  const [menu, setMenu] = useState(foodItems);

  const handleDelete = (id) => {
    setMenu(menu.filter((item) => item.id !== id));
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h2>🍽️ Manage Menu</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Food</th>
              <th>Restaurant</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item) => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.name} className="admin-img" /></td>
                <td>{item.name}</td>
                <td>{item.restaurant}</td>
                <td>₹{item.price}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(item.id)}>🗑 Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMenu;
