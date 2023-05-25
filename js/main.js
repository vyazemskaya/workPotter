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
video.addEventListener('loadeddata', () => {
  const observerBanner = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && counter === 0) {
        bannerBox.classList.add('active');
        bannerBox.addEventListener(
          'transitionstart',
          () => {
            setTimeout(() => {
              logo.src = './img/main/logo-white.svg';
              header.classList.add('header--active');
              heroTitle.classList.add('hero__title--active');
              burgerButton.classList.add('header__nav-open--active');
              basket.forEach((element) => {
                element.classList.add('header__basket-icon--active');
              });
            }, 300);
            counter++;
          },
          { once: true }
        );

        bannerVideo.play();
      }
    },
    {
      threshold: [0.3],
    }
  );
  observerBanner.observe(bannerBox);
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
const swiperMobile = new Swiper('.swiper.mobile-block', {
  speed: 1000,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
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
observerPopular.observe(popularTitle);

// Formats

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

//:hover popup

document.addEventListener('DOMContentLoaded', function () {
  const target = document.querySelectorAll('.popular__card-rating');

  target.forEach((element) => {
    const popupParent = element.parentNode;
    const popup = popupParent.querySelector('.popular__card-box-popup');

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

FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validation(FORM)) {
    FORM.submit();
  }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcblxyXG4vLyBCYW5uZXJcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhbm5lcicpO1xyXG5jb25zdCBiYW5uZXJCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyLWFuaW1hdGUnKTtcclxuY29uc3QgYmFubmVyVmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyLXZpZGVvJyk7XHJcblxyXG5jb25zdCBvYnNlcnZlckJhbm5lciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAoW2VudHJ5XSkgPT4ge1xyXG4gICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgIGJhbm5lckJveC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgYmFubmVyVmlkZW8ucGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFubmVyQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBiYW5uZXJWaWRlby5wYXVzZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGhyZXNob2xkOiBbMC40XSxcclxuICB9XHJcbik7XHJcbm9ic2VydmVyQmFubmVyLm9ic2VydmUoYmFubmVyQm94KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY4cHgpJykubWF0Y2hlcykge1xyXG4gICAgY29uc3Qgc3dpcGVySGVybyA9IG5ldyBTd2lwZXIoJy5oZXJvX19jb250ZW50LWxpc3QnLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBSYXRlc1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmF0ZXNfX2J0bicpLmZvckVhY2goKGJ0biwgXywgYXJyKSA9PiB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0aGlzRWwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgWy4uLmFyciwgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFiXScpXS5mb3JFYWNoKChlbCkgPT5cclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICk7XHJcbiAgICBbdGhpc0VsLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YWI9JyR7dGhpc0VsLmlkfSddYCldLmZvckVhY2goXHJcbiAgICAgIChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8gUG9wdWxhclxyXG5jb25zdCBzd2lwZXJQb3B1bGFyID0gbmV3IFN3aXBlcignLnBvcHVsYXJfX3NsaWRlcicsIHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5wb3B1bGFyX19zbGlkZXItYnRuLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnBvcHVsYXJfX3NsaWRlci1idG4tcHJldicsXHJcbiAgfSxcclxuICBhMTF5OiB7XHJcbiAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J3QsNC30LDQtCcsXHJcbiAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0JLQv9C10YDRkdC0JyxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICB9LFxyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHBvcHVsYXJUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1wb3B1bGFyJyk7XHJcblxyXG5jb25zdCBvYnNlcnZlclBvcHVsYXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgKFtlbnRyeV0pID0+IHtcclxuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICBwb3B1bGFyVGl0bGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb3B1bGFyVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICB0aHJlc2hvbGQ6IFswLjRdLFxyXG4gIH1cclxuKTtcclxub2JzZXJ2ZXJQb3B1bGFyLm9ic2VydmUocG9wdWxhclRpdGxlKTtcclxuXHJcbi8vIEZvcm1hdHNcclxuY29uc3Qgc3dpcGVyRm9ybWF0cyA9IG5ldyBTd2lwZXIoJy5mb3JtYXRzX19zbGlkZXInLCB7XHJcbiAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogJzMuNCUnLFxyXG4gICAgfSxcclxuICAgIDMyMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG4vLyBSZXZpZXdzXHJcbmNvbnN0IHN3aXBlclJldmlld3MgPSBuZXcgU3dpcGVyKCcucmV2aWV3c19fc2xpZGVyJywge1xyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAnMzAlJyxcclxuICAgIH0sXHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb246IHtcclxuICAgIHNldFRyYW5zbGF0ZShzd2lwZXIsIHRyYW5zaXRpb24pIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coc3dpcGVyKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coc3dpcGVyLnNuYXBHcmlkLCBzd2lwZXIudHJhbnNsYXRlLCB0cmFuc2l0aW9uKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
