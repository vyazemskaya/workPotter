//date-slider
let swiper;

document.addEventListener('DOMContentLoaded', function () {
  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  swiper = new Swiper('.swiper-container', {
    loop: false,
    spaceBetween: 30,
    slidesOffsetAfter: 26.5 * fontSize,
    effect: 'slide',
    speed: 550,
    nested: true,
    freeMode: true,
    freeModeMomentum: true,
    freeModeMomentumRatio: 0.5,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 0.3,
    breakpoints: {
      769: {
        slidesPerView: 9.5,
      },
      320: {
        slidesPerView: 3.5,     
      }
    },
    navigation: {
      nextEl: '.menu__paggination-icon',
    },
  });
});

//set swiper active element
const elements = document.querySelectorAll('.menu__date-item');

const currentClass = 'item--current';

const setActive = (elements, target) => {
  elements.forEach((item) => {
    if(target !== item && item.classList.contains(currentClass)){
      item.classList.remove(currentClass);
      target.classList.add(currentClass);
    }
  });
}

elements.forEach((elem) => {
  elem.addEventListener('click', () => setActive(elements, elem))
})

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

//:hover popup
document.addEventListener('DOMContentLoaded', function() {
  const target = document.querySelectorAll('.card__icon-wrapper');
  
  target.forEach((element) => {
    const popupParent = element.parentNode;
    const popup = popupParent.querySelector('.card-box-popup');
    element.addEventListener('mouseover', (e) => {  
      popup.style.display = 'flex';
    });

    element.addEventListener('mouseout', (e) => {
      popup.style.display = 'none';
    });
  });
});

//filter popup
const openBtn = document.querySelector('.menu__filter-button');
const exitBtn = document.querySelector('.filter__button-bar-close');
const closeBtn = document.querySelector('.filter__head-button');
const acceptBtn = document.querySelector('.filter__button-bar-accept');
const filter = document.querySelector('.filter');

openBtn.addEventListener('click', ()=>{
  filter.classList.add('filter--active');
})

closeBtn.addEventListener('click', ()=>{
  filter.classList.remove('filter--active');
})

acceptBtn.addEventListener('click', ()=>{
  filter.classList.remove('filter--active');
})

closeBtn.addEventListener('click', ()=>{
  filter.classList.remove('filter--active');
})

