const swiperWrapper = document.querySelector('.swiper-wrapper');
console.log(swiperWrapper);

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



for (let i = 0; i < 100; i++) {
    // const snow = document.createElement('span');
    // snow.classList.add('snow');
    // wrapper.append(snow);
    const size = randomGenerator(3, 10);
    snow.style.left = `${randomGenerator(0, 100)}%`
    snow.style.animationDuration = `${randomGenerator(10, 30)}s`
    snow.style.animationDelay = `${randomGenerator(0, 30)}s`
    snow.style.opacity = Math.random();
    snow.style.width = `${size}px`
    snow.style.height = `${size}px`
    // snow.style.scale = `${randomGenerator(1, 2)}`
    snow.style.filter = `blur(${randomGenerator(1, 3)}px)`
    // snow.style.top = `${randomGenerator(0, 100)}%`
}