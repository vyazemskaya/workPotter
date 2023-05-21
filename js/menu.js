document.addEventListener('DOMContentLoaded', function () {
  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 9,
    loop: false,
    spaceBetween: 3 * fontSize,
    slidesOffsetAfter: 16.5 * fontSize,
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