const show = document.querySelectorAll('.image');
console.log(show);

for(let i = 0; i < show.length; i++) {
    
    show[i].addEventListener('click', () => {
        
        for(let j = 0; j < show.length; j++) {
            show[j].classList.remove('show');
        }

        show[i].classList.add('show');
    })
}