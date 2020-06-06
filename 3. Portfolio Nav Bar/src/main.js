
/*
var navopts = document.getElementsByClassName('.navopts');
navopts.document.addEventListener(click, getNavoptElement);

// needs a "get child id" method
function getNavoptElement () {
    // is clicked get element  
    // implement this variable into a while loop
}

While  getElemtById('element').styleListImage.contains = "url( '../images/select/pointer-selected.svg' )"  // This should be a variable which gets element in from a click event {
    // other nav elements are listed here with the other image 
            document.getElementById('navopt2').style.listStyleImage = "url( '../images/select/pointer.svg' )";
}

/* Page must be loaded before ID requests otherwise return null */
window.onload = function () {

    /* Navbar option scroll, bulletpoint, bp-reset function */
    /* Sorting into variable */
    var opt1 = document.getElementById("navopt1");
    var opt2 = document.getElementById("navopt2");
    var opt3 = document.getElementById("navopt3");
    var opt4 = document.getElementById("navopt4");
    var opt5 = document.getElementById("navopt5");
   
    /* onclick event handler executing funcions*/
    opt1.addEventListener("click", pointSwitchHome);
    opt2.addEventListener("click", pointSwitchAbout);
    opt3.addEventListener("click", pointSwitchProjects);
    opt4.addEventListener("click", pointSwitchContact);
    opt5.addEventListener("click", pointSwitchSocial);

    /* Scroll into view and replaces bulletpoint to selected */
    function pointSwitchHome () {
        document.getElementById('portfolio').scrollIntoView();
        opt1.style.listStyleImage = "url( '../images/select/pointer-selected.svg' )";
        
        if (opt1.style.listStyleImage = "url( '../images/select/pointer-selected.svg' )") {
            opt2.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt3.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt4.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt5.style.listStyleImage = "url( '../images/select/pointer.svg' )";
        }

        else {
            opt1.style.listStyleImage = "url( '../images/select/pointer.svg' )";
        }
    }

    function pointSwitchAbout () {
        document.getElementById('about').scrollIntoView();
        opt2.style.listStyleImage = "url( '../images/select/pointer-selected.svg' )";

        if (opt2.style.listStyleImage = "url( '../images/select/pointer-selected.svg' )") {
            opt1.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt3.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt4.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt5.style.listStyleImage = "url( '../images/select/pointer.svg' )";
        }

        else {
            opt2.style.listStyleImage = "url( '../images/select/pointer.svg' )";
        }
    }

    function pointSwitchProjects () {
        document.getElementById('projects').scrollIntoView();
        opt3.style.listStyleImage = "url( '../images/select/pointer-selected.svg' )";

        if (opt3.style.listStyleImage = "url( '../images/select/pointer-selected.svg' )") {
            opt1.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt2.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt4.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt5.style.listStyleImage = "url( '../images/select/pointer.svg' )";
        }
        else {
            opt3.style.listStyleImage = "url( '../images/select/pointer.svg' )";
        }
    }

    function pointSwitchContact () {
        document.getElementById('contact').scrollIntoView();
        opt4.style.listStyleImage = "url( '../images/select/pointer-selected.svg' )";

        if (opt4.style.listStyleImage = "url( '../images/select/pointer-selected.svg' )") {
            opt1.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt2.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt3.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt5.style.listStyleImage = "url( '../images/select/pointer.svg' )";
        }

        else {
            opt4.style.listStyleImage = "url( '../images/select/pointer.svg' )";
        }
    }

    function pointSwitchSocial () {
        document.getElementById('social').scrollIntoView();
        opt5.style.listStyleImage = "url( '../images/select/pointer-selected.svg' )";

        if (opt5.style.listStyleImage = "url( '../images/select/pointer-selected.svg' )") {
            opt1.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt2.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt3.style.listStyleImage = "url( '../images/select/pointer.svg' )";
            opt4.style.listStyleImage = "url( '../images/select/pointer.svg' )";
        }

        else {
            opt5.style.listStyleImage = "url( '../images/select/pointer.svg' )";
        }
    }

    /* About section link */
    /*var cta = document.getElementById('cta');
    cta.addEventListener("click", scrollContact);

    function scrollContact () {
    document.getElementById('contact').scrollIntoView();
    };*/
};


