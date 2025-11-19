import React from "react";

const MessageBox = ({ msg }) => (
  <div className={`message ${msg.sender === "user" ? "text-end" : "text-start"}`}>
    <span>{msg.text}</span>
  </div>
);

export default MessageBox;
