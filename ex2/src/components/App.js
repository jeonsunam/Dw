// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ChatList from "./ChatList";
import Chat from "./Chat";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    // 사용자 인증 상태 변화 감지
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <Router>
      <div>
        <h1>Chat App</h1>
        {currentUser ? (
          <div>
            <Route
              path="/chat/:chatId"
              render={(props) => (
                <Chat currentUserUid={currentUser.uid} {...props} />
              )}
            />
            <Route
              path="/chat"
              render={() => <ChatList currentUserUid={currentUser.uid} />}
            />
          </div>
        ) : (
          <p>Please log in.</p>
        )}
      </div>
    </Router>
  );
};

export default App;
