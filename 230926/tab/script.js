console.log('running...');
const tabBtn = document.querySelectorAll('.tab-button');
const tabItem = document.querySelectorAll('.tab-item');
console.log(tabBtn);

tabBtn.forEach((Btn, i) => {
    Btn.addEventListener('click', () => {
        tabBtn.forEach((Btn1, j) => {
            Btn1.classList.remove('selected');
            tabItem[j].classList.remove('show');
        })
        Btn.classList.add('selected');
        tabItem[i].classList.add('show');
    })
})



// for (let i = 0; i < tabBtn.length; i++) {
//     tabBtn[i].addEventListener('click', () => {
//         for (let j = 0; j < tabBtn.length; j++) {
//             tabBtn[j].classList.remove('selected');
//             tabItem[j].classList.remove('show');
//         }
//         tabBtn[i].classList.add('selected');
//             tabItem[i].classList.add('show');


//     })
// }

