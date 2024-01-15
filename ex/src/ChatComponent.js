import React, { useEffect, useState } from "react";
import { ref, push, onValue } from "firebase/compat/database";

const database = getDatabase(app);

const ChatComponent = ({
  user,
  recipientUid,
  setRecipientUid,
  newMessage,
  setNewMessage,
  messages,
  setMessages,
}) => {
  const [recipientEmail, setRecipientEmail] = useState("");

  useEffect(() => {
    if (recipientUid) {
      // 채팅 상대방의 이메일 가져오기
      // 이 부분에서는 채팅 상대방의 이메일을 가져오는 Firebase Realtime Database 쿼리를 작성해야 합니다.
      // 여기서는 간단한 예제로 recipientUid를 이메일로 사용하는 방식을 사용합니다.
      setRecipientEmail(`${recipientUid}@example.com`);
    }
  }, [recipientUid]);

  useEffect(() => {
    if (user && recipientUid) {
      // 로그인한 사용자와 채팅 상대방의 메시지 리스너 등록
      const messagesRef = ref(database, `messages/${user.uid}_${recipientUid}`);
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

      return () => {
        // 컴포넌트 언마운트 시 메시지 리스너 제거
        unsubscribe();
      };
    }
  }, [user, recipientUid, setMessages]);

  const sendMessage = () => {
    if (newMessage.trim() !== "" && recipientUid) {
      // 메시지 전송
      const messagesRef = ref(database, `messages/${user.uid}_${recipientUid}`);
      push(messagesRef, {
        senderUid: user.uid,
        senderEmail: user.email,
        recipientUid,
        recipientEmail,
        text: newMessage,
      });

      setNewMessage("");
    }
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.senderEmail}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Type your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <br />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
