import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import QuestionListPage from "./pages/QuestionListPage";
import CoursePage from "./pages/CoursePage";
import Login from "./components/Login";

function Main() {
  // 라우터
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            {/* :(콜론)을 사용하면 동적으로 바뀌는애다 */}
            <Route path=":courseSlug" element={<CoursePage />} />
          </Route>
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            {/* <Route path="" element={<QuestionListPage />} /> */}
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
