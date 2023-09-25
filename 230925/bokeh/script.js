const container = document.querySelector('.container')

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const addSnow = () => {
    const snow = document.createElement('span');
    snow.classList.add('snow');
    container.append(snow);
    const size = random(5, 8);
    snow.style.width = `${size}px`
    snow.style.height = `${size}px`
    snow.style.left = `${random(0, 100)}%`
    snow.style.top = `${random(0, 100)}%`
    snow.style.animationDelay = `${random(0, 10)}s`
    snow.style.backgroundColor = `hsl(${random(0, 360)}, ${random(0, 100)}%, ${random(0, 100)}%)`
    snow.style.filter = `blur(${random(0.5, 1)}px)`
    snow.style.opacity = Math.random();
}

for(let i = 0; i < 50; i++) {
    addSnow();
}