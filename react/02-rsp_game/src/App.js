import HandIcon from "./HandIcon";
import reset from "./assets/ic-reset.svg";
import HandButton from "./HandButton";
import "./HandIcon.css";
import { generateRandomHand } from "./utils";

function App() {
  const handleButtonClick = (value) => {
    alert(`${value} ${generateRandomHand()}`);
  };

  return (
    <div>
      <h1>가위바위보</h1>
      <img src={reset} alt="초기화" />
      <div className="App-scores">
        <div>
          <div>0</div>
          <div>나</div>
        </div>
        <div>:</div>
        <div>
          <div>0</div>
          <div>상대</div>
        </div>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          {/* 가위바위보 내는곳 */}
          <div>
            <div className="Hand">
              <HandIcon
                value={handleButtonClick()}
                className="Hand-icon"
                rand={generateRandomHand()}
              />
            </div>
            <div>VS</div>
            <div className="Hand">
              <HandIcon value="paper" className="Hand-icon" />
            </div>
          </div>
          {/* 배점 */}
          <div>
            <span>배점</span>
            <input type="number" min={1} max={9} />
            <span>배</span>
          </div>
          {/* 기록 */}
          <div>
            <h2>승부기록</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <HandButton onClick={handleButtonClick} value="rock" />
        <HandButton onClick={handleButtonClick} value="sissor" />
        <HandButton onClick={handleButtonClick} value="paper" />
      </div>
    </div>
  );
}

export default App;
