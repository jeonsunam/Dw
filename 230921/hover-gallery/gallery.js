const data = [
    { title: '진돗개1', url: 'img/pexels-photo-1805164.webp' },
    { title: '진돗개2', url: 'img/pexels-photo-2023384.webp' },
    { title: '진돗개3', url: 'img/pexels-photo-3361739.webp' },
    { title: '진돗개4', url: 'img/pexels-photo-4587971.webp' },
    { title: '진돗개5', url: 'img/pexels-photo-4587991.webp' }
]

// 1. list에 목록
const list = document.getElementById('list');
const img = document.getElementById('img');
console.log(list)


for (let i = 0; i < data.length; i++) {
    list.innerHTML += `<li class = "button">${data[i].title}</li>`;
}
    
    
// .button 클래스를 가진 요소들을 모두 가져옴
const buttons = document.querySelectorAll('.button');

const image = document.getElementById('image')

const title = document.getElementById('title');
for (let i = 0; i < buttons.length; i++) {

    buttons[0].classList.add('check');
    title.textContent = data[0].title;

    console.log(i);

    buttons[i].addEventListener('click', () => {

        console.log(data[i].url);

        image.src = data[i].url;
        title.innerText = data[i].title;
        
        // 모든 버튼에서 check 클래스 제거
        for(let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('check');
        }
        // 클릭한 버튼에 check 클래스 추가
        buttons[i].classList.add('check');
    }) 
}



