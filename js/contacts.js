const init = () => {
  const currentwidth = window.innerWidth;
  const size = [currentwidth > 768 ? 118 : 98, currentwidth > 768 ? 118 : 98];

  const map = new ymaps.Map('root', {
    center: [55.807749, 37.570141],
    zoom: 18,
    type: 'yandex#map',
    yandexMapDisablePoiInteractivity: true,
    controls: []
  });



  const customIcon = new ymaps.Placemark(
    [55.807749, 37.570141], // Координаты метки
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: '../img/contacts/geo-icon.svg', 
      iconImageSize: size,
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
};

ymaps.ready(init);