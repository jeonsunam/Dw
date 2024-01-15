import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import ChatApp from "./ChatApp";
import App from "./App";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<ChatApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
