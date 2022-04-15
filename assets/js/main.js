// Change Main Slider 
var slideIndex = 0;

function changeSlider() {
    var i;
    var mainSlides = document.querySelectorAll('.main-slider');
    for (i of mainSlides) {
        i.style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > mainSlides.length) {
        slideIndex = 1;
    }
    mainSlides[slideIndex-1].style.display = 'flex';
    setTimeout(changeSlider, 5000);
}

changeSlider();

