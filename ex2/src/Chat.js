import React, { useState, useEffect } from "react";
import { database, ref, push, onValue } from "./firebase";

const Chat = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const messagesRef = ref(database, "messages");

    // 새 메시지 수신
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setMessages(messageList);
      }
    });

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const messagesRef = ref(database, "messages");
      push(messagesRef, {
        userId,
        text: newMessage,
      });
      setNewMessage("");
    }
  };

  return (
    <div>
      <div
        style={{
          height: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {messages.map((message) => (
          <div key={message.id}>
            {message.userId === userId ? "You: " : "Other: "}
            {message.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
