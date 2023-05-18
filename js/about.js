const setSwipper = () => {
  const ROOT = document.querySelector('#root');
  const checkScreenResolution = () => {
    const screenWidth = window.innerWidth;
    return screenWidth < 785;
  };

  const resolution = checkScreenResolution();
  const swiperInstance = ROOT.swiper;

  if (resolution && !swiperInstance) {
    ROOT.classList.add('swiper');
    ROOT.classList.add('mySwiper');
    const swiper = new Swiper(".mySwiper", {});
  } else if (!resolution && swiperInstance) {
    swiperInstance.destroy();
    ROOT.classList.remove('swiper');
    ROOT.classList.remove('mySwiper');
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

const handleScreenResize = debounce(setSwipper, 200);

window.addEventListener("resize", handleScreenResize);

setSwipper();