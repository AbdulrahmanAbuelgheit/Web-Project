var nav = document.getElementById("navbar"),
    btn1 = document.getElementById("scroll-up");
function x() {
    "use strict";
    if (window.scrollY > 20) {
        window.console.log("done");
        nav.classList.add("bar");
    } else {
        nav.classList.remove("bar");
    }
    

}

window.onscroll = x;
btn1.onclick = function () {
    "use strict";
    window.scrollTo(0, 0);
};


































