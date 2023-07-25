/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Banner
const banner = document.getElementById('banner');
const bannerBox = document.getElementById('banner-animate');
const bannerVideo = document.getElementById('banner-video');
const logo = document.getElementById('logo');
const header = document.querySelector('.header');
const headerBasketSvg = document.querySelector('.header__basket-icon');
const basket = headerBasketSvg.querySelectorAll('path');
const heroTitle = document.querySelector('.hero__title');
const burgerButton = document.querySelector('.header__nav-open');
const video = document.getElementById('banner-video');

let counter = 0;
video?.addEventListener('loadedmetadata', () => {
  if (counter === 0) {
    setTimeout(() => {
      bannerBox.classList.add('active');
    }, 1000);

    setTimeout(() => {
      logo.src = './img/main/logo-white.svg';
      header.classList.add('header--active');
      heroTitle.classList.add('hero__title--active');
      burgerButton.classList.add('header__nav-open--active');
      basket.forEach((element) => {
        element.classList.add('header__basket-icon--active');
      });
    }, 1400);
    counter++;
  }
  bannerVideo.play();
});

window.addEventListener('load', () => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    const swiperHero = new Swiper('.hero__content-list', {
      slidesPerView: 'auto',
    });
  }
});

// Rates
function handleMouseOver(e) {
  const thisEl = e.currentTarget;

  document.querySelectorAll('.rates__btn, [data-tab]').forEach((el) => {
    el.classList.remove('active');
  });

  [thisEl, document.querySelector(`[data-tab='${thisEl.id}']`)].forEach(
    (el) => {
      el.classList.add('active');
    }
  );
}

document.querySelectorAll('.rates__btn').forEach((btn) => {
  btn.addEventListener('mouseover', handleMouseOver);
  btn.addEventListener('touchstart', handleMouseOver);
});

//mobile slider
if (typeof Swiper !== 'undefined') {
  const swiperMobile = new Swiper('.swiper.mobile-block', {
    speed: 1000,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 6 * fontSize,
        centeredSlides: true,
      },
    },
  });

  // Popular
  const swiperPopular = new Swiper('.popular__slider', {
    loop: true,
    navigation: {
      nextEl: '.popular__slider-btn-next',
      prevEl: '.popular__slider-btn-prev',
    },
    a11y: {
      prevSlideMessage: 'Назад',
      nextSlideMessage: 'Вперёд',
    },
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });
}
const popularTitle = document.getElementById('title-popular');

const observerPopular = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      popularTitle.classList.add('active');
    } else {
      popularTitle.classList.remove('active');
    }
  },
  {
    threshold: [0.4],
  }
);
if (popularTitle) {
  observerPopular.observe(popularTitle);
}

// Formats
if (typeof Swiper !== 'undefined') {
  const swiperFormats = new Swiper('.formats__slider', {
    speed: 1000,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: '3.4%',
      },
    },
  });

  // Reviews
  const swiperReviews = new Swiper('.reviews__slider', {
    speed: 1000,
    spaceBetween: '10%',
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: '10%',
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
    },
    on: {
      setTranslate(swiper, transition) {
        // console.log(swiper);
        // console.log(swiper.snapGrid, swiper.translate, transition);
      },
    },
  });

  //Choices
  let swiperChoice;

  const setSwiper = () => {
    const cards = document.querySelectorAll('.choice__card');

    if (window.innerWidth <= 768) {
      cards.forEach((card) => {
        card.classList.add('swiper-slide');
      });

      if (!swiperChoice) {
        swiperChoice = new Swiper('.choice__slider', {
          speed: 1000,
          slidesPerView: 'auto',
          spaceBetween: '3%',
        });
      } else {
        swiperChoice.update();
      }
    } else {
      cards.forEach((card) => {
        card.classList.remove('swiper-slide');
      });

      if (swiperChoice) {
        swiperChoice.destroy();
        swiperChoice = undefined;
      }
    }
  };

  document.addEventListener('DOMContentLoaded', setSwiper);
  window.addEventListener('resize', setSwiper);
}

//:hover popup

document.addEventListener('DOMContentLoaded', function () {
  const target = document.querySelectorAll('.popular__card-rating');

  target.forEach((element) => {
    const popupParent = element.parentNode;
    const popup = popupParent.querySelector('.popular__card-box-popup');
    element.addEventListener('mouseover', (e) => {
      popup.style.display = 'flex';
    });

    element.addEventListener('mouseout', (e) => {
      popup.style.display = 'none';
    });
  });
});

//validation

const BUTTON = document.querySelector('.back-call__form-btn');
const FORM = document.querySelector('.back-call__form');

const setError = (parent, error, errorIcon, string, errorInput) => {
  error.textContent = string;
  parent.append(error);
  errorInput.classList.add('back-call__form-item--error');
  errorIcon.classList.add('form__error-icon--show');
};

const validation = (form) => {
  let result = true;
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    const parent = input.parentNode;
    const errorExist = parent.querySelector('.back-call__form-error');
    const errorIcon = parent.querySelector('.form__error-icon');
    const errorInput = parent.querySelector('input');
    const value = input.value;

    if (errorExist) {
      errorIcon.classList.remove('form__error-icon--show');
      errorInput.classList.remove('back-call__form-item--error');
      errorExist.remove();
    }

    const error = document.createElement('p');
    error.classList.add('back-call__form-error');

    if (value === '') {
      setError(
        parent,
        error,
        errorIcon,
        'Поле должно быть заполнено',
        errorInput
      );
      result = false;
    } else if (input.id === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError(
          parent,
          error,
          errorIcon,
          'Неверный формат электронной почты',
          errorInput
        );
        result = false;
      }
    } else if (input.id === 'tel') {
      const phoneRegex =
        /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
      if (!phoneRegex.test(value)) {
        setError(
          parent,
          error,
          errorIcon,
          'Неверный формат номера телефона',
          errorInput
        );
        result = false;
      }
    } else if (input.id === 'name') {
      const numberRegex = /\d/;
      if (numberRegex.test(value)) {
        setError(
          parent,
          error,
          errorIcon,
          'Поле не может содержать цифры',
          errorInput
        );
        result = false;
      }
    } else if (value.length < 2) {
      setError(
        parent,
        error,
        errorIcon,
        'Минимальная длина поля - 2 символа',
        errorInput
      );
      result = false;
    }
  }

  return result;
};
if(FORM) {
  FORM.addEventListener('submit', (event) => {
    event.preventDefault();
  
    if (validation(FORM)) {
      FORM.submit();
    }
  });
}
