const init = () => {
  const map = new ymaps.Map('root', {
    center: [55.807749, 37.570141],
    zoom: 17,
    type: 'yandex#map',
    yandexMapDisablePoiInteractivity: true,
    controls: []
  });

  const customIcon = new ymaps.Placemark(
    [55.807749, 37.570141], // Координаты метки
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: './img/contacts/geo-icon.svg',
      iconImageSize: [118, 118], // Размеры иконки для больших экранов (по умолчанию)
      iconImageOffset: [-16, -32]
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
    suppressObsoleteBrowserNotifier: true
  });

  map.geoObjects.add(customIcon);

  const swiper = new Swiper('.swiper-container', {
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
          }
        }
      },
      320: {
        slidesPerView: 3.7,
        spaceBetween: 10,
        on: {
          init: function () {
            customIcon.options.set('iconImageSize', [98, 98]);
          }
        }
      }
    }
  });
};

ymaps.ready(init);