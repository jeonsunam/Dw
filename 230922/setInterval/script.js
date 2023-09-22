console.log('running....')

/**
 * #counter : 숫자가 변해야할 곳
 * #start : 숫자가 증가하도록 작동하는 버튼
 * #stop : 숫자 증가를 멈추는 버튼
 */

const counter = document.getElementById('counter');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const reset = document.getElementById('reset');
// console.log(counter, startBtn, stopBtn);

let index = 0;
let timerId;
startBtn.addEventListener('click', () => {
    // 만약 timerId에 값이 들어있다면
    if(timerId) {
        // setInterval함수 취소
        clearInterval(timerId);
    }
    // 비어있는 timerId에 setInterval 함수 할당
    timerId = setInterval(() => {
        // index값 증가
        index++;
        // 증가된 index값을 counter 내용으로 할당
        console.log(index);
        counter.textContent = index;
    }, 100)
})

stopBtn.addEventListener('click', () => {
    clearInterval(timerId)
})

reset.addEventListener('click', () => {
    index = 0;
    counter.textContent = index;
    clearInterval(timerId)
})