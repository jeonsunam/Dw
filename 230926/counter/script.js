const dataList = document.querySelectorAll('[data-counter]')
console.log(dataList)

// 반복문을 이용해서 dataList안에 있는 data-counter 값을 콘솔로 출력 

// html : data-counter, js : element.dataset.counter
// for(let i = 0; i < dataList.length; i++){
//     const target = dataList[i].dataset.counter
//     const timerText = dataList[i].querySelector('.timer');
//     const step = Math.floor(target / 200);
//     console.log(step);
//     let index = 0;
//     setInterval(() => {
//         if(index < target){
//             // 증가
//             index = index + step;
//             timerText.textContent = index;
//             // console.log(index)            
//         }
//     },10)
// }

dataList.forEach(item => {
    const target = item.dataset.counter;
    const timerText = item.querySelector('.timer');
    const step = Math.floor(target / 200);
    let index = 0;
    setInterval(() => {
        if(index < target) {
            index = index + step;
            timerText.textContent = index;
        }
    })
})