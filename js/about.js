const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

const rootSwiper = () => {
  const ROOT = document.querySelector('#root');
  const checkScreenResolution = () => {
    const screenWidth = window.innerWidth;
    return screenWidth < 785;
  };
  if (ROOT) {
    const resolution = checkScreenResolution();
    const swiperInstance = ROOT.swiper;

    if (resolution && !swiperInstance) {
      ROOT.classList.add('swiper');
      ROOT.classList.add('mySwiper');
      if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.mySwiper', {});
      }
    } else if (!resolution && swiperInstance) {
      swiperInstance.destroy();
      ROOT.classList.remove('swiper');
      ROOT.classList.remove('mySwiper');
    }
  }
};

if (rootSwiper()) {
  const debounce = (func, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleScreenResize = debounce(rootSwiper, 200);

  window.addEventListener('resize', handleScreenResize);

  rootSwiper();
}
