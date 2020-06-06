const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        links.forEach((link, index) => {
            console.log('index');
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                 link.style.animation = `navFade 0.5s ease forwards ${index / 4 + 0.6}s`
            }
        });

        burger.classList.toggle('switch');


    });
};


navSlide();