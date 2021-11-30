var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");

let currentSlide = 1;

var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
        dots.forEach((dot) => {
            dot.classList.remove("active");
        });
    });

    slides[manual].classList.add('active');
    dots[manual].classList.add('active');
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});
var repeat = function (activeclass) {
    let active = document.getElementsByClassName('active');
    let i = 1;
    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeslide)=>{
                activeslide.classList.remove('active');
            });
            slides[i].classList.add("active");
            dots[i].classList.add("active");
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (slides.length <= i) {
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();