import React, { useState } from "react";
import MessageBox from "../components/MessageBox";

function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "restaurant" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "We’re preparing your order 🍴", sender: "restaurant" }]);
    }, 2000);
    setInput("");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">💬 Chat with Restaurant</h2>
      <div className="chat-window mx-auto p-3 rounded shadow">
        {messages.map((msg, i) => (
          <MessageBox key={i} msg={msg} />
        ))}
      </div>

      <div className="d-flex mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-warning ms-2" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
