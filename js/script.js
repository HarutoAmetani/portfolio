const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navlinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // navlinks.forEach((link, index) => {
    //     if(link.style.animation) {
    //         link.style.animation = "";
    //     }else {
    //         link.style.animation = `navLinksFade 0.5s ease forwards ${
    //             index / 7 + 0.4
    //         }s`;
    //     }
    // });
    burger.classList.toggle("toggle");
});