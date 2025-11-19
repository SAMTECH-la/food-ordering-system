import React from "react";
import Sidebar from "./Sidebar";

const Messages = () => {
  const messages = [
    { id: 1, user: "Samarth", message: "My order is delayed!" },
    { id: 2, user: "Soham", message: "Food was delicious!" },
    { id: 3, user: "Shital", message: "Add more vegan options please." },
  ];

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h2>💬 Customer Messages</h2>
        {messages.map((msg) => (
          <div className="msg-card" key={msg.id}>
            <strong>{msg.user}</strong>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
