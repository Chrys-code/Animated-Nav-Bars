document.addEventListener('scroll', () => {

    // Get wrapper, bottom of viewport
    const wrapper = document.querySelector('.wrapper');
    const windowBottom = window.innerHeight;

    // This single scroll function is supported by scroll.js
    // scroll.js changes back transition to 0.6s ease upon scroll end
    //if(window.scroll = true) {
       // wrapper.style.transition = "none";
    //};

        if(wrapper.style.height !== windowBottom) {

            // Get scroll movement value
            // Considering scrollBY since its value is relative to the inital position
            var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset :
            (document.documentElement || document.body.parentNode || document.body).scrollTop;

            // Resize the box height of wrapper (CSS  translate-origin = "bottom right" given corner for rotation)
            // With this code I resize the box height to match with the bottom-left corner of nav-links which is another rotation point
            wrapper.style.height = windowBottom + (scrollTop) + 'px';
            };
});

            // As a result the two div, nav-links and wrapper rotates around almost the same points (-10% by width from wrapper(could be 0%)) 
            // even when user scrolls to the middle of the page or straight down

            // P.S.: Page is scrollable even after rotation(-45deg), however transition makes it broken.
            // overwrite transitions in JS with a start/stop method could solve the problem (Solved in scroll.js). 
