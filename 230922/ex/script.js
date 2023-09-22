const sidebar = document.getElementById('sidebar');
const trigger = document.getElementById('trigger');
const text = document.querySelector('.text');
const overlay = document.querySelector('.overlay');

trigger.addEventListener('click', () => {

    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active')
        text.classList.remove('show');

    }
    else {
        sidebar.classList.add('active')
        text.classList.add('show');
        overlay.classList.add('open');
    }


})

overlay.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active')
        text.classList.remove('show');
        overlay.classList.remove('open');
    }
    else {
        // overlay.classList.remove('open');
    }
})