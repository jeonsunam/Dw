import { useState } from "react";
import { getMember } from "./api/firebase";
import { useNavigate } from "react-router-dom";
import Chat from "./Chat";

function App() {
  const [values, setValues] = useState({
    id: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { memberObj, message } = await getMember(values);

    if (message === undefined) {
      // (키값, 데이터)
      // 배열이든 객체든 문자열로 바꿔주는 JSON.stringfy
      localStorage.setItem("chat", JSON.stringify(memberObj));

      // localStorage.getItem("key");
      // localStorage.removeItem("key");

      // alert("로그인에 성공했습니다.");
      // window.location.href = "/";
      // setMember(memberObj);
      navigate("/2");
    } else {
      alert(message);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>아이디</label>
        <input
          type="id"
          name="id"
          id="id"
          placeholder="styled@DW.kr"
          onChange={handleValueChange}
        />
        <label>비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호"
          onChange={handleValueChange}
        />
        <button type="submit">로그인 하기</button>
      </form>
    </div>
  );
}

export default App;
