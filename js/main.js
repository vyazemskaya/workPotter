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
const x = window.matchMedia('(min-width: 768px)');

// gsap animations (scroll trigger)
if (video) {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.smooth-scroll'),
    smooth: true,
    scroller: '.smooth-scroll',
    getDirection: true,
    smoothMobile: true,
    mobile: {
      breakpoint: 0,
      getDirection: true,
    },
    tablet: {
      breakpoint: 0,
      getDirection: true,
    },
  });

  locoScroll.on('scroll', ScrollTrigger.update);

  ScrollTrigger.scrollerProxy('.smooth-scroll', {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector('.smooth-scroll').style.transform
      ? 'transform'
      : 'fixed',
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.hero__box-inner',
        scroller: '.smooth-scroll',
        scrub: !0,
        start: () => 'top top',
        end: () => 'bottom top',
        invalidateOnRefresh: !0,
        pin: '.hero__banner',
        overwrite: 'auto',
        onUpdate: (self) => {
          if (self.progress >= 0.7) {
            document.documentElement.classList.add('_revealed');
            logo.src = './img/main/logo-white.svg';
          } else {
            document.documentElement.classList.remove('_revealed');
            logo.src = './img/logo.png';
          }
          if (self.progress >= 0.6) {
            heroTitle.classList.add('_revealed');
          } else {
            heroTitle.classList.remove('_revealed');
          }
        },
        onEnter: (e) => {
          gsap.fromTo(
            '.hero__box-inner',
            {
              'clip-path': 'inset(50% 0%)',
              alpha: 0,
            },
            {
              duration: 1,
              alpha: 1,
              'clip-path': x.matches ? 'inset(45% 0%)' : 'inset(46% 0%)',
              delay: 0.6,
            }
          );
          gsap.fromTo(
            '.hero__desc-word-1',
            {
              'margin-right': x.matches ? '15rem' : '13rem',
              alpha: 0,
            },
            {
              duration: 1,
              alpha: 1,
              'margin-right': x.matches ? '10rem' : '10rem',
              delay: 0.6,
            }
          );
          gsap.fromTo(
            '.hero__desc-word-2',
            {
              'margin-left': x.matches ? '15rem' : '20rem',
              alpha: 0,
            },
            {
              duration: 1,
              alpha: 1,
              'margin-left': x.matches ? '10rem' : '15rem',
              delay: 0.6,
            }
          );
          gsap.fromTo(
            '.hero__desc-word-3',
            {
              'margin-right': x.matches ? '12rem' : '20rem',
              alpha: 0,
            },
            {
              duration: 1,
              alpha: 1,
              'margin-right': x.matches ? '10rem' : '5rem',
              delay: 0.6,
            }
          );
        },
        onLeave: (e) => {
          e.refresh();
          header.style.transform = 'translateY(-100%)';
        },
        onEnterBack: (e) => (header.style.transform = 'translateY(0)'),
      },
      ease: 'none',
    })
    .fromTo(
      '.hero__box-inner',
      {
        'clip-path': x.matches ? 'inset(45% 0%)' : 'inset(46% 0%)',
      },
      {
        'clip-path': 'inset(0% 0%)',
      },
      '0'
    )
    .fromTo(
      '.hero__desc-word-1',
      {
        'margin-right': x.matches ? '10rem' : '10rem',
      },
      {
        'margin-right': '0',
      },
      '0'
    )
    .fromTo(
      '.hero__desc-word-2',
      {
        'margin-left': x.matches ? '10rem' : '15rem',
      },
      {
        'margin-left': '0',
      },
      '0'
    )
    .fromTo(
      '.hero__desc-word-3',
      {
        'margin-right': x.matches ? '10rem' : '5rem',
      },
      {
        'margin-right': '0',
      },
      '0'
    );
  gsap.timeline({
    scrollTrigger: {
      trigger: '.hero__box-inner',
      scrub: !0,
      scroller: '.smooth-scroll',
      start: () => '5% top',
      end: () => 'bottom top',
      invalidateOnRefresh: !0,
      overwrite: 'auto',
      onEnter: (e) => {
        document.getElementById('banner-video').play();
      },
    },
    ease: 'none',
  });

  window.addEventListener('load', () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      const swiperHero = new Swiper('.hero__content-list', {
        slidesPerView: 'auto',
      });
    }
  });

  window.addEventListener('resize', function () {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.hero__box-inner',
        scrub: !0,
        scroller: '.smooth-scroll',
        start: () => 'top top',
        end: () => 'bottom top',
        invalidateOnRefresh: !0,
        pin: '.hero__banner',
        overwrite: 'auto',
      },
      ease: 'none',
    });

    ScrollTrigger.refresh();
  });

  ScrollTrigger.addEventListener('refresh', () => {
    locoScroll.update();
  });
  ScrollTrigger.refresh();

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
}
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
if (FORM) {
  FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validation(FORM)) {
      FORM.submit();
    }
  });
}
