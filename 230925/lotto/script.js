console.log('running.....');

// min : 최솟값, max : 최댓값을 이용한 난수생성
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const result = document.getElementById('result');
const generate = document.getElementById('generate');
const li = document.querySelectorAll('#result > li');

let lottoNumber = [];

generate.addEventListener('click', () => {
    generate.classList.add('processing');
    generate.innerText = "로또 번호 생성중";
    if(lottoNumber.length > 0) {
        lottoNumber = [];
    }

for (let i = 0; lottoNumber.length < 6; i++) {
    // random 변수에 난수 생성한 값 할당
    const random = randomNumber(1, 45);
    // lottoNumber 내부에 random과 일치하는 값이 없는지 true/false
    const isEntry = lottoNumber.includes(random);
    // console.log(inEntry);
    // !(not)값을 뒤집어준다. true => false, false => true
    // isEntry === true, !isEntry === false
    !isEntry ? lottoNumber.push(random) : '';
    // console.log(lottoNumber);
    // if (!isEntry) {
    //     lottoNumber.push(random);
    // }
}

    lottoNumber = lottoNumber.sort((a, b) => a - b);

    let timer = 500;

    for (let i = 0; i < lottoNumber.length; i++) {
        setTimeout(() => {
        li[i].textContent = lottoNumber[i];
        
    },timer * i)
    }
    setTimeout(() => {
        generate.classList.remove('processing');
        generate.innerText = "로또번호 생성";
    },timer * lottoNumber.length)
    
    // 배열중에 '어떤값'이 존재하는 유무에 따라 true, false
})