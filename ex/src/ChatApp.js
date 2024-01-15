import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/compat/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/compat/auth";
import ChatComponent from "./ChatComponent";

const firebaseConfig = {
  apiKey: "AIzaSyD-4c_7gQbrZSpy5KmoK3_BQpewcHecei0",
  authDomain: "dwos-b7eb5.firebaseapp.com",
  databaseURL: "https://dwos-b7eb5-default-rtdb.firebaseio.com",
  projectId: "dwos-b7eb5",
  storageBucket: "dwos-b7eb5.appspot.com",
  messagingSenderId: "19129191890",
  appId: "1:19129191890:web:f6aa77b392283f93f78c0b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const ChatApp = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recipientUid, setRecipientUid] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // 사용자 인증 상태 변경 리스너 등록
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 로그인한 사용자 정보 업데이트
        setUser(user);
      } else {
        // 로그아웃한 경우 사용자 정보 초기화
        setUser(null);
      }
    });

    return () => {
      // 컴포넌트 언마운트 시 리스너 제거
      unsubscribe();
    };
  }, [auth]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {/* 채팅 컴포넌트 */}
      {user && (
        <ChatComponent
          user={user}
          recipientUid={recipientUid}
          setRecipientUid={setRecipientUid}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          messages={messages}
          setMessages={setMessages}
        />
      )}
    </div>
  );
};

export default ChatApp;
