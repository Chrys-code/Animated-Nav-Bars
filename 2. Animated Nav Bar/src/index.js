const slideIn = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-links li');
    const nav = document.querySelector('.nav-links');
    const wrapper = document.querySelector('.wrapper');

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
        wrapper.classList.toggle('wrapper-active');
        burger.classList.toggle('switch');

        navLinks.forEach((link, index ) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                 link.style.animation = `navFade 0.5s ease forwards ${index / 4 + 0.6}s`
            }
        });

    });
};

slideIn();