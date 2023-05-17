const init = () => {
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
      iconImageHref: '../img/_contacts/geo-icon.svg', // Путь к изображению кастомного указателя
      iconImageSize: [68, 68], // Размеры изображения указателя
      iconImageOffset: [-16, -32] // Смещение изображения указателя относительно точки координат
    })

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
  
    // Другие опции карты
    map.options.set({
      suppressMapOpenBlock: true, // Удаление блока с кнопкой "Открыть в Яндекс.Картах"
      suppressObsoleteBrowserNotifier: true // Отключение уведомления о устаревшем браузере
    })
    
  map.geoObjects.add(customIcon);
};

ymaps.ready(init);