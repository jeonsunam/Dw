import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";

function Main() {
  // 라우터
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
