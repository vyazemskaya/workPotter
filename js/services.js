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
