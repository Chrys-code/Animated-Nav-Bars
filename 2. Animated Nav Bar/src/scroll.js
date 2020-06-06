$(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $('.wrapper').css('transition', '0.6s ease');
    }, 250));

    $('.wrapper').css('transition', 'none');

});

// Scroll function is used to neglect transitions during scrolling
// 1. Set transition when scroll end
// 2. Set transition to none when scrolling