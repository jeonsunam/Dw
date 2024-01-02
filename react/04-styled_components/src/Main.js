import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HelloStyled from "./components/01/HelloStyled";
import Nesting from "./components/02/Nesting";
import Practice1 from "./components/03/Practice1";
import Practice2 from "./components/04/Practice2";
import DynamicStyling from "./components/05/DynamicStyling";
import Practice3 from "./components/06/Practice3";
import Inheritance from "./components/07/Inheritance";
import Reuse from "./components/08/Reuse";
import Practice4 from "./components/09/Practice4";
import Login from "./components/10/Login";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 절대경로 = "/" 처음에 바로 보여주기 위해서 index사용(여러개 있을시에 맨처음에) */}
        {/* <Route path="/" element={<App/>} ></Route> */}
        <Route path="/" element={<App />}>
          <Route path="01" element={<HelloStyled />}></Route>
          <Route path="02" element={<Nesting />}></Route>
          <Route path="03" element={<Practice1 />}></Route>
          <Route path="04" element={<Practice2 />}></Route>
          <Route path="05" element={<DynamicStyling />}></Route>
          <Route path="06" element={<Practice3 />}></Route>
          <Route path="07" element={<Inheritance />}></Route>
          <Route path="08" element={<Reuse />}></Route>
          <Route path="09" element={<Practice4 />}></Route>
          <Route path="10" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
