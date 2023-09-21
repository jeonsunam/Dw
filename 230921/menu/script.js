// .menu-item이라는클래스가 붙은 요소들은 모두 가져와야함

/**
 * .getElementById = 아이디를 기반으로 요소를 탐색해서 가져오는 기능
 * .querySelector = 범용으로 사용. tag, id, class기반으로 탐색해서 가져올 수 있다.
 * .querySelectorAll = 기본적인 동작은 querySelector같은데, 복수의 요소를 취할때 사용
 */

const menuItem = document.querySelectorAll('.menu-item');
console.log(menuItem);

// for문 대신에 쓰는 방법
// menuItem.forEach(item => {
//     item.addEventListener('click', () => {
//         menuItem.forEach(button => button.classList.remove('active'));
//         item.classList.add('active');
//     })
// })


for (let i = 0; i < menuItem.length; i++) {
    
    menuItem[i].addEventListener('click', (e) => {
        console.log(menuItem[i].classList.contains('active'));

        // if(menuItem[i].classList.contains('active')) {
        //     menuItem[i].classList.add('active');
        // }
        // else {
            
        //     menuItem[i].classList.remove('active');
        // }


            for (let j = 0; j < menuItem.length; j++) {
                // menuItem[j].classList.contains('active')
                menuItem[j].classList.remove('active');
            }
            menuItem[i].classList.add('active');
        
        })
    }

// 변수의 스코프(scope)
// let 키워드로 선언된 변수의 scope는 블록단위이다.
// 변수를 선언할때 원칙 - 동일한 이름으로 선언할 수 없다.
// scope다르다면, 동일한 이름을 사용해도, 영역이 다르기 때문에 가능하다.


// console.log(menuItem[menuItem.length-1]);
// menuItem[4].addEventListener('click', (e) => {
//     // 기본적으로 발생하는 이벤트를 취소하는 메소드
//     e.preventDefault();
//     // 이벤트 전파를 막는 메소드
//     e.stopPropagation();
//     // active 클래스 추가
//     menuItem[4].classList.add('active');
// })

// menuItem[0].addEventListener('click', (e) => {
//     menuItem[0].classList.remove('active');
// })
// for (let i = 0; i < )