const box = document.querySelector('.box');

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(let i = 0; i < 100; i++) {
    const circle = document.createElement('span');
    circle.classList.add('circle');
    box.append(circle);
    console.log(box);
    circle.style.left = `${random(0, 100)}%`;
    circle.style.top = `${random(0, 100)}%`;
    
}