import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js"; // ./는 현재폴더를 의미함.

const root = ReactDOM.createRoot(document.getElementById("root"));
// const product = "MacBook";
// const price = 2000;
// <App  props /> = props : 내가보내고 싶은 이름(매개변수)을 사용해서 보낸다
root.render(<App />);
// root.render(
//   <div>
//     <h1>나만의 {product} 주문하기</h1>
//   </div>
// );
