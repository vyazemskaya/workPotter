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