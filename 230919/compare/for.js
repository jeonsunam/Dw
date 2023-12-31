// for.js
// for문 - 일정 횟수만큼 반복하기 위해서 사용
console.log('for문 연습');

// for(초기화 변수, 조건, 증감)
// i = index번호

// 중첩안한 사례
for(let i = 0; i< 10; i++) {
    console.log(`i : ${i}`);
}

// 중첩한 사례
for(let i = 0; i< 10; i++) {
    console.log(`i : ${i}`);
    for(let j = 0; j < 10; j++) {
        console.log(`j : ${j}`);
    }
}

const pokemon = [`피카츄`, `이브이`, `라이츄`, `파이리`, `꼬부기`, `야통이`, `삼색이`, `연님이`, `래기`];

for(let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i]);
}

// 구구단을 출력해주세요
// 1단 혹은 2단부터 9단까지 출력
const style =  `background-color:red; color:white; padding: 2px 8px; font-size: 18px: font-weight: bold`
for(let i = 1; i < 10; i++) {
    console.log(`%c${i}단`, style);
    for(let j = 1; j<10; j++) {
        console.log(`%c${i} x ${j} = ${i * j}`, style);
    }
}

let star = '';
for(let i = 0; i < 5; i++) {
    star += '*';
    console.log(star);
}
