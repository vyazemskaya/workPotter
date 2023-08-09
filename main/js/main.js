const fontSize = parseFloat(
  getComputedStyle(document.documentElement).fontSize
);

const checkScreenResolution = () => {
  const screenWidth = window.innerWidth;
  return screenWidth < 785;
};

const initSwiper = () => {
  const ROOT = document.querySelector('#slider-mob');
  if (ROOT) {
    const resolution = checkScreenResolution();
    const swiperInstance = ROOT.swiper;

    if (resolution && !swiperInstance) {
      ROOT.classList.add('swiper');
      ROOT.classList.add('mySwiper');
      if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.mySwiper', {
          slidesPerView: 1,
          slidesPerGroup: 1
        });
      }
    } else if (!resolution && swiperInstance) {
      swiperInstance.destroy();
      ROOT.classList.remove('swiper');
      ROOT.classList.remove('mySwiper');
    }
  }
};

const debounce = (func, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const handleScreenResize = debounce(initSwiper, 200);

window.addEventListener('resize', handleScreenResize);

initSwiper();
if (typeof ymaps !== 'undefined' && typeof ymaps !== 'null') {
  const init = () => {
    const map = new ymaps.Map('root', {
      center: [55.807749, 37.570141],
      zoom: 17,
      type: 'yandex#map',
      yandexMapDisablePoiInteractivity: true,
      controls: [],
    });

    const customIcon = new ymaps.Placemark(
      [55.807749, 37.570141], // Координаты метки
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: './img/contacts/geo-icon.svg',
        iconImageSize: [118, 118], // Размеры иконки для больших экранов (по умолчанию)
        iconImageOffset: [-16, -32],
      }
    );

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');

    map.options.set({
      suppressMapOpenBlock: true,
      suppressObsoleteBrowserNotifier: true,
    });

    map.geoObjects.add(customIcon);
    if (typeof Swiper !== 'undefined') {
      const swiperContacts = new Swiper('.swiper-container', {
        loop: false,
        spaceBetween: 30,
        slidesOffsetAfter: 26.5,
        effect: 'slide',
        speed: 550,
        nested: true,
        freeMode: true,
        freeModeMomentum: true,
        freeModeMomentumRatio: 0.5,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 0.3,
        breakpoints: {
          768: {
            slidesPerView: 9.5,
            spaceBetween: 10,
            on: {
              init: function () {
                customIcon.options.set('iconImageSize', [118, 118]);
              },
            },
          },
          320: {
            slidesPerView: 3.7,
            spaceBetween: 10,
            on: {
              init: function () {
                customIcon.options.set('iconImageSize', [98, 98]);
              },
            },
          },
        },
      });
    }
  };
  ymaps.ready(init);
}

/*!
 * float-sidebar - A lightweight (2kb gzipped), zero-dependency javascript library for making a sidebar float
 * @version v1.2.4
 * @link https://github.com/vursen/FloatSidebar.js
 * @author Sergey Vinogradov
 * @license MIT
 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.FloatSidebar=n():t.FloatSidebar=n()}(window,(function(){return function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var i,o="START";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u,a=(r(i={},o,(function(t,n){var e=n.$sideInner;e.style.position="absolute",e.style.top="0",e.style.bottom="auto"})),r(i,"TOP_FIXED",(function(t,n){var e=n.$sideInner;e.style.position="fixed",e.style.top=t.topSpacing+"px",e.style.bottom="auto"})),r(i,"UNFIXED",(function(t,n){var e=n.$sideInner;e.style.position="absolute",e.style.top=t.sideInnerTop-t.startPoint+"px",e.style.bottom="auto"})),r(i,"BOTTOM_FIXED",(function(t,n){var e=n.$sideInner;e.style.position="fixed",e.style.top="auto",e.style.bottom=t.bottomSpacing+"px"})),r(i,"FINISH",(function(t,n){var e=n.$sideInner;e.style.position="absolute",e.style.top="auto",e.style.bottom="0"})),i);function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var p=(s(u={},o,[{to:"FINISH",when:function(t){return[!0===t.isSideInnerWithinPath,t.viewportTop+t.sideInnerHeight+t.bottomSpacing>t.finishPoint,t.viewportBottom>t.finishPoint]}},{to:"BOTTOM_FIXED",when:function(t){return[!0===t.isSideInnerWithinPath,!1===t.isSideInnerWithinViewport,t.viewportBottom>t.sideInnerBottom+t.bottomSpacing]}},{to:"TOP_FIXED",when:function(t){return[!0===t.isSideInnerWithinPath,!0===t.isSideInnerWithinViewport,t.viewportTop>t.startPoint-t.topSpacing]}}]),s(u,"TOP_FIXED",[{to:o,when:function(t){return[!1===t.isSideInnerWithinPath]}},{to:o,when:function(t){return[t.viewportTop<=t.startPoint-t.topSpacing]}},{to:"FINISH",when:function(t){return[t.sideInnerBottom>t.finishPoint]}},{to:"UNFIXED",when:function(t){return["down"===t.scrollDirection,!1===t.isSideInnerWithinViewport]}}]),s(u,"UNFIXED",[{to:o,when:function(t){return[!1===t.isSideInnerWithinPath]}},{to:o,when:function(t){return[t.viewportTop<=t.startPoint-t.topSpacing]}},{to:"FINISH",when:function(t){return[t.viewportBottom>t.finishPoint]}},{to:"TOP_FIXED",when:function(t){return["up"===t.scrollDirection,t.viewportTop<=t.sideInnerTop-t.topSpacing]}},{to:"TOP_FIXED",when:function(t){return[!0===t.isSideInnerWithinViewport,t.viewportBottom>=t.sideInnerBottom+t.bottomSpacing]}},{to:"BOTTOM_FIXED",when:function(t){return[!1===t.isSideInnerWithinViewport,t.viewportBottom>t.sideInnerBottom+t.bottomSpacing]}}]),s(u,"BOTTOM_FIXED",[{to:o,when:function(t){return[!1===t.isSideInnerWithinPath]}},{to:o,when:function(t){return[!0===t.isSideInnerWithinPath,t.sideInnerTop<=t.startPoint-t.topSpacing]}},{to:"UNFIXED",when:function(t){return["up"===t.scrollDirection]}},{to:"TOP_FIXED",when:function(t){return[!0===t.isSideInnerWithinViewport]}},{to:"FINISH",when:function(t){return[t.sideInnerBottom>t.finishPoint]}}]),s(u,"FINISH",[{to:o,when:function(t){return[!1===t.isSideInnerWithinPath]}},{to:o,when:function(t){return[t.viewportTop<=t.startPoint-t.topSpacing]}},{to:"BOTTOM_FIXED",when:function(t){return[t.sideInnerBottom+t.bottomSpacing<=t.finishPoint,t.viewportBottom<t.finishPoint]}},{to:"TOP_FIXED",when:function(t){return[t.viewportTop<=t.sideInnerTop-t.topSpacing]}}]),u);var c=function(t){var n=t.actions,e=t.transitions,i=t.initialState;return{findTransitionFor:function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e[i].find((function(t){return t.when.apply(void 0,n).every((function(t){return t}))}))},performTransition:function(t){var e=t.to;return function(){i=e,n[e].apply(n,arguments)}}}};var f=function(t,n){var e=t.getBoundingClientRect();return{top:e.top+n,bottom:e.bottom+n,height:e.height}};var d=function(t,n){var e=n.$viewport,i=n.$relative,o=n.$sideInner,r=n.$sideOuter,u=n.topSpacing,a=n.bottomSpacing,s={},p=function(){var t,n=function(t){var n=t.clientHeight||t.innerHeight,e=t.scrollTop||t.pageYOffset;return{top:e,bottom:e+n,height:n}}(e),p=f(o,n.top),c=f(r,n.top),d=f(i,n.top),h=(t=n.top,s.viewportTop<t?"down":s.viewportTop>t?"up":"notChanged"),l=c.top,I=d.bottom,v=I-l,w=p.height+u+a<n.height,m=p.height<v,g=Math.max(p.height,v);return{startPoint:l,finishPoint:I,topSpacing:u,bottomSpacing:a,scrollDirection:h,isSideInnerWithinPath:m,isSideInnerWithinViewport:w,sideOuterHeight:g,viewportTop:n.top,viewportBottom:n.bottom,sideInnerTop:p.top,sideInnerBottom:p.bottom,sideInnerHeight:p.height}},c=function(){var n=p();t(s,n),s=n},d=function(t){var n=void 0;return function(){n||(n=requestAnimationFrame((function(){n=null,t()})))}}(c);return{start:function(){e.addEventListener("scroll",d),e.addEventListener("resize",d),c()},stop:function(){e.removeEventListener("scroll",d),e.removeEventListener("resize",d)},tick:c}};n.default=function(t){var n=t.viewport||window,e=t.sidebar,i=t.sidebarInner||e.firstElementChild,r=t.relative,u=t.topSpacing||0,s=t.bottomSpacing||0,f=t.onStateChange,h=c({actions:a,transitions:p,initialState:o}),l=d((function(t,n){var o=h.findTransitionFor(n);o&&(h.performTransition(o)(n,{$sideInner:i,$sideOuter:e,$relative:r}),f&&f(o.to)),I(t,n)}),{$viewport:n,$sideOuter:e,$sideInner:i,$relative:r,topSpacing:u,bottomSpacing:s}),I=function(t,n){Math.abs((t.sideOuterHeight||0)-n.sideOuterHeight)>=1&&(e.style.height=n.sideOuterHeight+"px")};return requestAnimationFrame((function(){e.style.willChange="height",i.style.width="inherit",i.style.transform="translateZ(0)",i.style.willChange="transform",l.start()})),{forceUpdate:function(){l.tick()},destroy:function(){l.stop()}}}}]).default}));
const menu = document.getElementById('menu');
const openMenu = document.getElementById('menu-open');
const closeMenu = document.getElementById('menu-close');
const links = document.querySelectorAll('.header__nav-link');
if (openMenu) {
  openMenu.addEventListener('click', () => {
    openMenu.style.zIndex = '0';
    menu.classList.add('active');
    document.body.classList.add('no-scroll');
  });
}
if (closeMenu) {
  closeMenu.addEventListener('click', () => {
    openMenu.style.zIndex = '10';
    openMenu.style.pointerEvents = 'auto';
    menu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
}
if (links) {
  links.forEach((el) =>
    el.addEventListener('click', () => {
      openMenu.style.opacity = '1';
      openMenu.style.pointerEvents = 'auto';
      menu.classList.remove('active');
    })
  );
  document.body.addEventListener('click', (e) => {
    if (
      !openMenu.contains(e.target) &&
      !menu.contains(e.target) &&
      menu.classList.contains('active')
    )
      menu.classList.remove('active');
  });
}
// Banner
const banner = document.getElementById('banner');
const bannerBox = document.getElementById('banner-animate');
const bannerVideo = document.getElementById('banner-video');
const logo = document.getElementById('logo');
const header = document.querySelector('.header');
const headerBasketSvg = document.querySelector('.header__basket-icon');
const basket = headerBasketSvg.querySelectorAll('path');
const heroTitle = document.querySelector('.hero__title');
const heroAnchor = document.querySelector('.hero__mouse');
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
            heroAnchor.classList.add('_revealed');
          } else {
            heroTitle.classList.remove('_revealed');
            heroAnchor.classList.remove('_revealed');
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
}
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

//date-slider
let swiperMenu;

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper !== 'undefined') {
    swiperMenu = new Swiper('.menu-swiper', {
      speed: 550,
      breakpoints: {
        769: {
          slidesPerView: 9.5,
          slidesPerGroup: 1,
        },
        320: {
          slidesPerView: 3.5,
          spaceBetween: 70,
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

var sidebar = document.querySelector('.sidebar');
var content = document.querySelector('.content');
if (sidebar && content)
  var floatSidebar = FloatSidebar({
    sidebar: sidebar,
    relative: content,
    topSpacing: 40,
   
  });

const btn = document.querySelector('#btn');
const frm = document.querySelector('.payment__form');

const isError = (parent, error, errorIcon, string) => {
  error.textContent = string;
  parent.append(error);
  parent.classList.add('form__item--error');
  errorIcon.classList.add('form__error-icon--show');
};

const validate = (form) => {
  let result = true;
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    const parent = input.parentNode;
    const errorExist = parent.querySelector('.form__error');
    const errorIcon = parent.querySelector('.form__error-icon');
    const value = input.value;

    if (errorExist) {
      errorIcon.classList.remove('form__error-icon--show');
      parent.classList.remove('form__item--error');
      errorExist.remove();
    }

    const error = document.createElement('p');
    error.classList.add('form__error');

    if (value === '') {
      isError(parent, error, errorIcon, 'Обязательное поле');
      result = false;
    } else if (input.id === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isError(parent, error, errorIcon, 'Неверный формат электронной почты');
        result = false;
      }
    } else if (input.id === 'phone-number') {
      const phoneRegex =
        /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
      if (!phoneRegex.test(value)) {
        isError(parent, error, errorIcon, 'Неверный формат номера телефона');
        result = false;
      }
    } else if (input.id === 'name') {
      const numberRegex = /\d/;
      if (numberRegex.test(value)) {
        isError(parent, error, errorIcon, 'Поле не может содержать цифры');
        result = false;
      }
    } else if (input.id === 'location') {
      const numberOnlyRegex = /^\d+$/;
      if (numberOnlyRegex.test(value)) {
        isError(
          parent,
          error,
          errorIcon,
          'Адрес не может содержать только цифры'
        );
        result = false;
      }
    } else if (value.length < 2) {
      isError(parent, error, errorIcon, 'Минимальная длина поля - 2 символа');
      result = false;
    }
  }
  return result;
};

if (frm) {
  frm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validate(frm)) {
      alert(validate(frm));
      frm.submit();
    }
  });
}

if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    touchRatio: 1,
    loop: false,
    spaceBetween: 18.15 * fontSize,
    effect: 'slide',
    speed: 550,
    nested: true,
  });
}
