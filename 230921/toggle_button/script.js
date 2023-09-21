
const toggle = document.querySelector('.toggle');
const swi = document.querySelector('.switch');

// classList 객체에 대한 정보 조회
console.log(toggle.classList);

// add 메소드를 이용해 class "active" 추가
// toggle.classList.add('active');

// class "active" 제거
// toggle.classList.remove('active');

// class "active"가 존재하는지 유무
console.log(toggle.classList.contains('active'));

// toggle을 클릭했을때
// active가 있다면 제거, 없다면 추가

toggle.addEventListener('click', () => {
    
    // 1. 3항 연산자
    // toggle.classList.contains('active') ? toggle.classList.remove('active') : toggle.classList.add('active');

    // 2. 이벤트
    // if(toggle.classList.contains('active'))
    // {
    //     toggle.classList.remove('active');
    // }
    // else
    // {
    //     toggle.classList.add('active');
    // }

    // 3. toggle 메소드
    // element.classList.toggle('메소드');
    // element에 '클래스'가 있다면 삭제, 없으면 추가해주는 메소드
    toggle.classList.toggle('active');
})




// for(let i = 0; i < 2; i++) {
//     swi.addEventListener('click', () => {
        
//         toggle.classList.add('active');
        
//     })
//     if(toggle.classList.contains('active'))
//         {
//         toggle.classList.remove('active');
//     }
// }