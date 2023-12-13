import HandIcon from "./HandIcon";
import reset from "./assets/ic-reset.svg";
import HandButton from "./HandButton";
import "./HandIcon.css";
import { generateRandomHand } from "./utils";
import { useState } from "react";
import { compareHand } from "./utils";
import "./App.css";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function App() {
  // 내가내는 기본값 [value, 함수]
  const [hand, setHand] = useState("rock");
  // 상대가 내는 기본값
  const [otherHand, setOtherHand] = useState("rock");
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  const [isWin, setIsWin] = useState(0);

  // 재등록하기 위해서는 리턴받고 useState를 한번 실행해야함
  // 리액트에 등록해야 재렌더링가능

  // useState 내부 중요함!!

  // let value;

  // function useState(initialValue) {
  //   if (value === undefined) {
  //     value = initialValue;
  //   }

  //   const setState = (newValue) => {
  //     value = newValue;
  //   };

  //   return [value, setState];
  // }

  const handleButtonClick = (value) => {
    const nextOtherHand = generateRandomHand();
    const nextHistory = getResult(value, nextOtherHand);
    const comparison = compareHand(value, nextOtherHand);
    setIsWin(comparison);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
    setHand(value);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistory]);
    // gameHistory.push(nextHistory);
    // alert(`${value} ${generateRandomHand()}`);
  };

  const handleBetChange = (e) => {
    // 콘솔 파랑색 함수 검정색 문자?
    // 이벤트가 발생한 것의 value값

    // 넘어오는 값은 문자열로 넘어와서 number로 변경
    let num = Number(e.target.value);
    if (num > 9) num %= 10;
    if (num < 0) num = 1;
    num = Math.floor(num);
    setBet(num);
    // console.log(num);
  };

  const handleClearClick = () => {
    setHand("rock");
    setOtherHand("rock");
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
    setIsWin(0);
  };

  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <img
        className="App-reset"
        src={reset}
        alt="초기화"
        onClick={handleClearClick}
      />
      <div className="App-scores">
        <div className="Score">
          <div className="Score-num">{score}</div>
          <div className="Score-name">나</div>
        </div>
        <div className="App-versus">:</div>
        <div className="Score">
          <div className="Score-num">{otherScore}</div>
          <div className="Score-name">상대</div>
        </div>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          {/* 가위바위보 내는곳 */}
          <div className="App-hands">
            <div
              className={`Hand ${isWin == 0 ? "" : isWin == 1 ? "winner" : ""}`}
            >
              <HandIcon value={hand} className="Hand-icon" />
            </div>
            <div className="App-versus">VS</div>
            <div
              className={`Hand ${isWin == 0 ? "" : isWin == 1 ? "" : "winner"}`}
            >
              <HandIcon value={otherHand} className="Hand-icon" />
            </div>
          </div>
          {/* 배점 */}
          <div className="App-bet">
            <span>배점</span>
            <input
              type="number"
              min={1}
              max={9}
              value={bet}
              // type이 number여도 보낼때는 문자열로 보내진다.
              onChange={handleBetChange}
            />
            <span>배</span>
          </div>
          {/* 기록 */}
          <div className="App-history">
            <h2>승부기록</h2>
            <p>{gameHistory.join(", ")}</p>
          </div>
        </div>
      </div>
      <div>
        <HandButton onClick={handleButtonClick} value="rock" />
        <HandButton onClick={handleButtonClick} value="scissor" />
        <HandButton onClick={handleButtonClick} value="paper" />
      </div>
    </div>
  );
}

export default App;
