import logo from "./assets/logo.png";
import Board from "./Board";
// 함수형 컴포넌트방식 : 컴포넌트를 함수형으로 만든것(변수형으로도 만들 수도 있다.)
// 함수형 컴포넌트를 만들때에는 함수명의 첫 글자는 반드시 대문자여야 한다. 소문자는 (함수로 인식함 / 함수형 컴포넌트가 아니게됨)
// 함수형 컴포넌트 안에서는 JSX문법으로 만든 리액트 엘리먼트를 리턴해줘야 한다.
function App() {
  //   console.log(props.productName, props.priceName);
  //   const name = props.productName;
  //   const price = props.priceName;
  //   const { name, price } = props; 구조분해

  // JSX문법 : return
  return (
    // 리액트 엘리먼트 : 문법 안에있는 태그
    <div>
      <div>
        <img src={logo} alt="주사위게임 로고" />
        <h1>주사위게임</h1>
        <div>
          <button>던지기</button>
          <button>처음부터</button>
        </div>
      </div>
      <div>
        <Board name="나" color="blue" />
        <Board name="상대" color="red" />
      </div>
    </div>
  );
}

// 외부파일에서 사용할 수 있게 export
export default App;
