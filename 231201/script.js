const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

// 로딩시점에 첫번째 input요소 focus
window.addEventListener("load", () => inputs[0].focus());

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", () => {
    const currentInput = input;
    // sibling : 형제 / previousElementSibling : 이전요소형제
    const prevInput = input.previousElementSibling;
    const nextInput = input.nextElementSibling;

    if (
      // hasAttribute : 속성을 가지고있는지 확인
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      //   return; : 아무것도 적지 않으면 실행멈추는용도
      return;
    }

    // 백스페이스로 지우는 로직 구현
    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        // 백스페이스키가 입력된 input값과 같거나 오른쪽에 있으면 값을 지우고 + disabled 상태로 전환 + 왼쪽으로 이동
        if (index1 <= index2) {
          input.setAttribute("disabled", true); // disabled 속성 추가
          input.value = "";
          if (prevInput) {
            prevInput.focus();
          }
        }
        // 제일 왼쪽에 있는 input은 disabled 되면 안됨.
        if (index1 === 0) {
          inputs[0].removeAttribute("disabled");
          inputs[0].focus();
        }
      });
    }

    if (
      !inputs[inputs.length - 1].hasAttribute("disabled") &&
      inputs[inputs.length - 1].value !== ""
    ) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});
