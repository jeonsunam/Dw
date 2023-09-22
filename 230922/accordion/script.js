const item = document.querySelectorAll('.list-item');
// const list = document.querySelector('.list');

// .list-item 클래스를 가진 모든 요소를 가져와서 반복문처리

// for (let i = 0; i < item.length; i++) {

    // 그 요소중 i번째 요소를 클릭했을때

//     item[i].addEventListener('click', () => {

        // .list-item 클래스를 가진 모든 요소를 반복문 처리

//         for (let j = 0; j < item.length; j++) {

            // .list-item 클래스를 가진 모든 요소에서 selected 클래스를 제거

//             item[j].classList.remove('selected');

//         }

            // 클릭한 i번째 요소에 selected 클래스를 추가
            
//         item[i].classList.add('selected');

// item.forEach(list => {
//     list.addEventListener('click', () => {
//         list.classList.toggle('selected');
//     })
// })

item.forEach(list => {
    list.addEventListener('click', () => {
        item.forEach(lists => lists.classList.remove('selected'))
        list.classList.add('selected');
    })
})

// 변수
// 변수를 선언하는 방법
