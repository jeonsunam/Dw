/**
 * .color : 색깔이 반영되는 곳
 * .plus : 수치를 증가시키는 버튼
 * .minus : 수치를 감소시키는 버튼
 * .hue : 반영된 수치가 나타나는 곳 (범위 : 0 ~ 360)
 */

const color = document.querySelector('.color');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const hue = document.querySelector('.hue');

// console.log(color, plus, minus, hue);

let value = 0;

// changeHue : 컬러값을 변경해주는 함수
const changeHue = (param) => {
    hue.textContent = param;
    color.style.backgroundColor = `hsl(${value}, 50%, 50%)`
}



// 수치가 증가하는 버튼
plus.addEventListener('click', () => {

    if(value < 360) {   
    value += 10;
    console.log(value);
    changeHue(value);
    // hue.innerText = (`${value}`);
    // color.style.backgroundColor = (`hsl(${value}, 50%, 50%)`)
}
})

// 수치가 감소하는 버튼
minus.addEventListener('click', () => {
    if(value > 0) {
    value -= 10;
    changeHue(value);
    // console.log(value);
    // hue.innerText = (`${value}`);
    // color.style.backgroundColor = (`hsl(${value}, 50%, 50%)`)
}
})

