let currentSlide = 0;
const slidesP = document.querySelectorAll('.slide');

function showSlide(index) {

    const slideWidth = slidesP[0].clientWidth;
    const offset = index * slideWidth;
    document.querySelector('.slider').style.transform = `translateX(-${offset}px)`;
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) currentSlide = slidesP.length - 2;
    if (currentSlide >= slidesP.length - 1) currentSlide = 0;
    showSlide(currentSlide);
}

showSlide(currentSlide);