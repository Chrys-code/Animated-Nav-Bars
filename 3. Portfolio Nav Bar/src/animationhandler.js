// Navopt color change upon reach project section 
$(window).scroll(function() {
   

    var top_of_element = $("#speed").offset().top;
    var bottom_of_element = $("#speed").offset().top + $("#speed").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();
    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        $("g#speed_outterframe").addClass("outterframe");
        $("g#speed_innerframe").addClass("innerframe");

        $("g#responsive_outterframe").addClass("outterframe");
        $("g#responsive_innerframe").addClass("innerframe");

        $("g#dynamic_outterframe").addClass("outterframe");
        $("g#dynamic_innerframe").addClass("innerframe");

    } else {
        $("g#speed_outterframe").removeClass("outterframe");
        $("g#speed_innerframe").removeClass("innerframe");

        $("g#responsive_outterframe").removeClass("outterframe");
        $("g#responsive_innerframe").removeClass("innerframe");

        $("g#dynamic_outterframe").removeClass("outterframe");
        $("g#dynamic_innerframe").removeClass("innerframe");

    }
});