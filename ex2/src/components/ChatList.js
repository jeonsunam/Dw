// ChatList.js
import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

const ChatList = ({ currentUserUid }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Firestore에서 현재 사용자의 채팅 목록 가져오기
    const unsubscribe = onSnapshot(
      query(collection(firestore, "chats"), "array-contains", currentUserUid),
      (snapshot) => {
        const chatList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChats(chatList);
      }
    );

    return () => unsubscribe();
  }, [currentUserUid]);

  return (
    <div>
      <h2>Chat List</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chat/${chat.id}`}>{chat.otherUserName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
