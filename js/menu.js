//date-slider
let swiper

document.addEventListener('DOMContentLoaded', function () {
  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  swiper = new Swiper('.swiper-container', {
    slidesPerView: 9,
    loop: false,
    spaceBetween: 3 * fontSize,
    slidesOffsetAfter: 26.5 * fontSize,
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

window.addEventListener('resize', function() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    swiper.params.slidesPerView = 3.7;
    swiper.params.spaceBetween = 1 * fontSize;
  } else {
    swiper.params.slidesPerView = 9;
    swiper.params.spaceBetween = 3 * fontSize;
  }

  swiper.update();
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

//:hover popup
document.addEventListener('DOMContentLoaded', function() {
  const target = document.querySelectorAll('.card__icon-wrapper');
  
  target.forEach((element) => {
    const popupParent = element.parentNode;
    const popup = popupParent.querySelector('.card-box-popup');
    
    element.addEventListener('mouseover', () => {
      popup.style.display = 'flex';
    });

    element.addEventListener('mouseout', () => {
      popup.style.display = 'none';
    });

    element.addEventListener('touchstart', () => {
      popup.style.display = 'flex';
    });

    element.addEventListener('touchend', () => {
      popup.style.display = 'none';
    });
  });
});