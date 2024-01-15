// Chat.js
import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const Chat = ({ currentUserUid, match }) => {
  const { chatId } = match.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Firestore에서 채팅 메시지 가져오기
    const unsubscribe = onSnapshot(
      query(
        collection(firestore, "chats", chatId, "messages").orderBy("timestamp")
      ),
      (snapshot) => {
        const messageList = snapshot.docs.map((doc) => doc.data());
        setMessages(messageList);
      }
    );

    return () => unsubscribe();
  }, [chatId]);

  const sendMessage = async () => {
    // Firestore에 메시지 추가
    await addDoc(collection(firestore, "chats", chatId, "messages"), {
      senderUid: currentUserUid,
      text: newMessage,
      timestamp: serverTimestamp(),
    });

    setNewMessage("");
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            {message.senderUid === currentUserUid ? "You:" : "Other User:"}{" "}
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
