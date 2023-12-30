const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click' , () => {
        console.log('Bar clicked');
        nav.classList.add('active');
    });
} 

if (close) {
    close.addEventListener('click', () => {
        console.log('Close clicked');
        nav.classList.remove('active');
    });
}
