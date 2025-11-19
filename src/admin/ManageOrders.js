import React, { useState } from "react";
import Sidebar from "./Sidebar";

const ManageOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, item: "Pizza", user: "Samarth", status: "Preparing" },
    { id: 2, item: "Burger", user: "Soham", status: "Delivered" },
    { id: 3, item: "Pasta", user: "Shital", status: "Accepted" },
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map((order) => order.id === id ? { ...order, status: newStatus } : order));
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h2>📦 Manage Orders</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Item</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.user}</td>
                <td>{order.item}</td>
                <td>{order.status}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                  >
                    <option>Accepted</option>
                    <option>Preparing</option>
                    <option>Out for Delivery</option>
                    <option>Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
