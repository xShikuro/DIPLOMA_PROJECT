import { useState, useRef, useEffect } from "react";
import "../style/components/ChatWidget.css";

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm an AI-consulatant Axios. How can I help you?",
      sender: "bot"
    }
  ]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  const toggleChat = () => setOpen(prev => !prev);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = {
      id: Date.now(),
      text: input,
      sender: "user"
    };
    setInput("");



    {/* Answering + typing */}
    setMessages(prev => [
      ...prev,
      userMessage,
      { id: Date.now() + 1, typing: true, sender: "bot" }
    ]);
    {/* Answering + typing */}




    

    {/* Imitation of answering */}
    setTimeout(() => {
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => !msg.typing);

        return [
          ...withoutTyping,
          {
            id: Date.now(),
            text: "Спасибо за сообщение. Скоро я смогу отвечать с помощью ИИ 🙂",
            sender: "bot"
          }
        ];
      });
    }, 1200);
    {/* Imitation of answering */}

  };







  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <button className="chat-button" onClick={toggleChat}>
        <i className="fa-solid fa-message"></i>
      </button>

      {open && (
        <div className="chat-window">

          <div className="chat-header">
            <span>Axios AI</span>
            <span className="chat-close" onClick={toggleChat}>✕</span>
          </div>

          <div className="chat-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`chat-message ${msg.sender}`}>
                {msg.typing ? (
                  <div className="typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Введите сообщение..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>

        </div>
      )}
    </>
  );
}

export default ChatWidget;