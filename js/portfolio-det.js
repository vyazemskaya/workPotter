const swiperReviews = new Swiper('.swiper__portfolio-det', {
  loop: true,
  autoPlay: true,
  spaceBetween: '10%',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    769: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});
