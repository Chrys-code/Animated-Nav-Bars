const navHandler = document.querySelector('.nav-handler');
const nav = document.querySelector('.side-nav');
const navLinks = document.querySelectorAll('.nav-links li');
const navHandlerImage = document.querySelector('#nav-handlerimg');
const navBorder = document.querySelector('.nav-border');

navHandler.addEventListener('click', () => {

    nav.classList.toggle('nav-active');
    navHandlerImage.classList.toggle('handler-active');
    navBorder.classList.toggle('border-active');
    
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navFade 0.6s ease forwards ${index / 4 + 0.6}s`
        }

    });
});
