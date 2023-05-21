//date-slider
document.addEventListener('DOMContentLoaded', function () {
  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 9,
    loop: false,
    spaceBetween: 3 * fontSize,
    slidesOffsetAfter: 16.5 * fontSize,
    effect: 'slide',
    speed: 550,
    nested: true, 
    freeMode: true, 
    freeModeMomentum: true, 
    freeModeMomentumRatio: 0.5, 
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 0.3, 
  });
});

//checks for filters
const checks = document.querySelectorAll('.filter__item')

checks.forEach((box) => {
  box.addEventListener('click', () => {
    box.classList.toggle('filter__item--checked')
  })
})

//search-input
const searchInput = document.querySelector('.search__input');
const placeholder = document.querySelector('.search__placeholder-wrapper');

searchInput.addEventListener('input', function () {
  if (searchInput.value !== '') {
    placeholder.style.opacity = 0;
  } else {
    placeholder.style.opacity = 1;
  }
});