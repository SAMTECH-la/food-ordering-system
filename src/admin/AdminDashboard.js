import React from "react";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h2>📊 Dashboard Overview</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Total Orders</h4>
            <p>145</p>
          </div>
          <div className="stat-card">
            <h4>Revenue</h4>
            <p>₹12,340</p>
          </div>
          <div className="stat-card">
            <h4>Active Restaurants</h4>
            <p>5</p>
          </div>
          <div className="stat-card">
            <h4>Messages</h4>
            <p>18</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
