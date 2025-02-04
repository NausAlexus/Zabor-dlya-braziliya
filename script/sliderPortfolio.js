let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {

    const slideWidth = slides[0].clientWidth;
    const offset = index * slideWidth;
    document.querySelector('.slider').style.transform = `translateX(-${offset}px)`;
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) currentSlide = slides.length - 2;
    if (currentSlide >= slides.length - 1) currentSlide = 0;
    showSlide(currentSlide);
}

showSlide(currentSlide);