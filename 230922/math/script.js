// console.log('running...');

// // PI
// // console.log(Math.PI)

// // 절대값
// console.log(Math.abs(-1));
// console.log(Math.abs(1));
// console.log(Math.abs('-1'));

// // 반올림
// console.log(Math.round(1.4));
// console.log(Math.round(1.5));

// // 올림
// console.log(Math.ceil(1.2));
// console.log(Math.ceil(-1.2));

// //버림
// console.log(Math.floor(1.9999999999999))
// console.log(Math.floor(-1.9999999999999))

// // 랜덤 : 0부터 0.9999999999
// console.log(Math.random());
// // Math.random() * (최대값 - 최소값 + 1) + 최소값;
let max = 45;
let min = 1;
const random = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(random);
for(let i = 0; i < 6; i++) {
    // 중복제거
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
}

const randomGenerator = (min, max) => {
    return console.log(Math.random() * (max - min + 1) + min);
}

randomGenerator(1,10);
