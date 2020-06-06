
$(window).scroll(function() {

    var top_of_element = $("#projects").offset().top;
    var half_of_element = $("#projects").offset().top + $("#projects").outerHeight()/2;
    var half_of_screen = $(window).scrollTop() + $(window).innerHeight()/2;
    var top_of_screen = $(window).scrollTop();
    if ((half_of_screen > top_of_element) && (top_of_screen < half_of_element)){
        $('li').css('color', '#02B9C7');
        $('li').hover(function() {
            $(this).css('color', '#A877FF' );
        }, function() {
            $(this).css('color', '#02B9C7');
        })

    } else {
        $('li').css('color', '#A877FF');
        $('li').hover(function() {
            $(this).css('color', '#02B9C7');
    }, function() {
        $(this).css('color', '#A877FF');

    })
}});


