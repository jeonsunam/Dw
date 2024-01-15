import React from "react";
import Chat from "./Chat";

const App = () => {
  const userId = "user1"; // 각 사용자에게 고유한 식별자 부여

  return (
    <div>
      <h1>1:1 Chat App</h1>
      <Chat userId={userId} />
    </div>
  );
};

export default App;
