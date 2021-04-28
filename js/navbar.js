var navbar = document.getElementById("navbar");
var splashHeight = window.innerHeight - navbar.clientHeight;

window.onscroll = function() {navbarScroll()};

function navbarScroll() {
    if (window.pageYOffset > splashHeight) {
        navbar.style.background = "#2d3e50";
        navbar.style.boxShadow = "0 0 20px rgba(0,0,0, 0.6)";
    } else {
        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";
    }
}
