/**
 * #number : 변해야 할 숫자
 * #inc : 증가 버튼
 * #dec : 감소 버튼
 */

const num = document.getElementById('number');
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');
const bar = document.querySelector('.bar');
// console.log(num, inc, dec);

// 증감할 값이 들어있는 변수
let counter = 0;

// inc : increment(증가)하는 일
inc.addEventListener('click', () => {
    
    if(counter < 100 ) {
    console.log('증가');
    counter += 10;
    num.innerText = (counter);
    inc.style.transform = `rotate(${counter}deg)`
    bar.style.width = `${counter}%`;
}
})

// dec : decrement(감소)하는 일
dec.addEventListener('click', () => {
    // console.log('감소');

    if (counter > 0) {
        counter -= 10;
        num.innerText = (counter);
        bar.style.width = `${counter}%`;
    }
    
    
    console.log('감소');
    dec.style.transform = `rotate(${counter}deg)`
})




