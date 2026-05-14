import { useEffect, useState } from "react";
import axios from "axios";
import "../../style/sections/Chat.css";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const token = localStorage.getItem("token");

  const fetchMessages = async () => {
    try {
      const res = await axios.get("/api/messages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (Array.isArray(res.data)) {
        setMessages(res.data);
      } else {
        setMessages([]);
      }
    } catch (err) {
      console.log("fetch error", err);
      setMessages([]);
    }
  };

  const sendMessage = async () => {
    if (!text.trim()) return;

    try {
      const res = await axios.post(
        "/api/messages",
        { text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessages((prev) => [...prev, res.data]);
      setText("");
    } catch (err) {
      console.log("send error", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
<div className="chat-container">

  {/* HEADER */}
  <div className="chat-header">
    <div className="chat-user">
      <img src="https://picsum.photos/40" className="chat-avatar" />
      
      <div>
        <div className="chat-name">Dr. Sarah Johnson</div>
        <div className="chat-status-text">
          <span className="chat-status-dot"></span>
          Online • Typing...
        </div>
      </div>
    </div>

    <div className="chat-header-actions">
      <button className="icon-btn">📞</button>
      <button className="icon-btn">🎥</button>
      <button className="icon-btn">⋮</button>
    </div>
  </div>

  {/* MESSAGES */}
  <div className="chat-messages">
    <div className="message received">
      <p>Hello! How can I help you?</p>
      <span className="time">10:30</span>
    </div>

    <div className="message sent">
      <p>Hi! I need help</p>
      <span className="time">10:32</span>
    </div>
  </div>

  {/* INPUT */}
  <div className="chat-input-container">
    <div className="chat-left-actions">
      <button className="circle-btn">📎</button>
      <button className="circle-btn">😊</button>
    </div>

    <input className="chat-input" placeholder="Type message..." />

    <button className="send-btn">➤</button>
  </div>

</div>
  );
}