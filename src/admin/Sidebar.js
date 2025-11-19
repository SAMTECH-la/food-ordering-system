import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <h3>Admin Panel</h3>
      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/menu">Manage Menu</Link></li>
        <li><Link to="/admin/orders">Manage Orders</Link></li>
        <li><Link to="/admin/messages">Messages</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
