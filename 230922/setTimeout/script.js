// setTimeout : 지연된 시간 후에 실행되는 함수
// setTimeout(함수, 시간 : 1s = 1000ms  기본값 ms)
setTimeout(() => {
    console.log('1번째')    
}, 1000)

setTimeout(() => {
    console.log('2번째')    
}, 3000)

setTimeout(() => {
    console.log('3번째')    
}, 500)

let index = 0;
// 1초 뒤에 index값을 1로 변경해서 console로 출력

setTimeout(() => {
    console.log(index+1)
},1000);

setTimeout(() => {
    document.body.style.backgroundColor = 'purple';
},1000);



// setInterval : 정해진 시간마다 반복 실행하는 비동기 함수
// setInterval(함수, 시간)
setInterval(() => {
    index++;
    console.log(index);
    document.body.textContent = index;
}, 1000);


