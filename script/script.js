
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  menu.addEventListener("click", (event) => {
    if(event.target){
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)



//feedback
const slides = document.querySelector('.slides-review');
const slide = document.querySelectorAll('.feedback__slide');
const pagination = document.querySelector('.pagination');

let currentIndex = 0;
let totalSlides = slide.length;

for (let i = 0; i < totalSlides; i++) {
  const span = document.createElement('span');
  if (i === 0) span.classList.add('active');
  pagination.appendChild(span);
}

const bullets = document.querySelectorAll('.pagination span');

function updateSlider(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  bullets.forEach((bullet, i) => {
    bullet.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider(currentIndex);
}

let slideInterval = setInterval(nextSlide, 4000);

bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    clearInterval(slideInterval);
    currentIndex = index;
    updateSlider(currentIndex);
    slideInterval = setInterval(nextSlide, 4000); 
  });
});

