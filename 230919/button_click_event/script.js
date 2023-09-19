// script.js
/**
 * const 이용해서 title이란 변수에
 * h1#title요소를 담아주세요
 */
const title = document.getElementById('title');
console.log(title);

// 1. button 가져와서 변수에 담는다.
const button = document.getElementById('btn');
console.log(button);
// 2. container 가져와서 변수에 담는다.
const container = document.querySelector('.container');
console.log(container);
// 3. button 클릭했을때 container에 bg 클래스를 추가한다.
button.addEventListener('click', () => {
    container.classList.add('bg');
})


// 제목을 클릭했을때, alert 창에 클릭 이라는 문구가 출력
// addEventListener('이벤트이름', 실행할 함수)
title.addEventListener('click', () => {
    // alert('클릭');
    // 클릭을 했을때 컬러가 red가 되도록 변경
    if(title.style.color === 'red') {
        title.style.color = 'black';
    }
    else {
        title.style.color = 'red';
    }
})