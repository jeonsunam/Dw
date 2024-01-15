import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import New from "./New";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // 새로고침 했을 때 스크롤의 위치가 제멋대로 인것을 초기화해주기 위한 코드
    // onbeforeunload = 사용자가 해당페이지를 떠날때 닫을때 표시
    // scrollTo(x, y)
    window.onbeforeunload = () => window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
