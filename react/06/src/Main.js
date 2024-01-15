import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Container from "./Container";
import ChatReady from "./ChatReady";
import Chat from "./Chat";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Container />} />
        <Route path="1" element={<App />} />
        <Route path="/2" element={<ChatReady />} />
        <Route path="/3" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
