//date-slider
let swiperMenu;

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper !== 'undefined') {
    swiperMenu = new Swiper('.menu-swiper', {
      speed: 550,
      nested: true,
      freeMode: false,
      edgeSwipeThreshold: false, // Предотвратить перетаскивание слайдов за край
      breakpoints: {
        769: {
          slidesPerView: 9.5,
          slidesPerGroup: 1,
        },
        320: {
          slidesPerView: 3.5,
        },
      },
      navigation: {
        nextEl: '.menu__paggination-icon',
      },
    });
  }
});

//set swiper active element
const elements = document.querySelectorAll('.menu__date-item');

const currentClass = 'item--current';

const setActive = (elements, target) => {
  elements.forEach((item) => {
    if (target !== item && item.classList.contains(currentClass)) {
      item.classList.remove(currentClass);
      target.classList.add(currentClass);
    }
  });
};

elements.forEach((elem) => {
  elem.addEventListener('click', () => setActive(elements, elem));
});

//checks for filters
const checks = document.querySelectorAll('.filter__item');

checks.forEach((box) => {
  box.addEventListener('click', () => {
    box.classList.toggle('filter__item--checked');
  });
});

//search-input
const searchInput = document.querySelector('.search__input');
const placeholder = document.querySelector('.search__placeholder-wrapper');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 0) {
      placeholder.style.opacity = 0;
    } else {
      placeholder.style.opacity = 1;
    }
  });
}

//:hover popup
document.addEventListener('DOMContentLoaded', function () {
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

if (openBtn) {
  openBtn.addEventListener('click', () => {
    filter.classList.toggle('filter--active');
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    filter.classList.remove('filter--active');
  });
}

if (acceptBtn) {
  acceptBtn.addEventListener('click', () => {
    filter.classList.remove('filter--active');
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    filter.classList.remove('filter--active');
  });
}
