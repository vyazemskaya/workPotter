const menu = document.getElementById('menu');
const openMenu = document.getElementById('menu-open');
const closeMenu = document.getElementById('menu-close');
const links = document.querySelectorAll('.header__nav-link');

openMenu.addEventListener('click', () => menu.classList.add('active'));
closeMenu.addEventListener('click', () => menu.classList.remove('active'));
links.forEach((el) =>
  el.addEventListener('click', () => menu.classList.remove('active'))
);
document.body.addEventListener('click', (e) => {
  if (
    !openMenu.contains(e.target) &&
    !menu.contains(e.target) &&
    menu.classList.contains('active')
  )
    menu.classList.remove('active');
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJoZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbmNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtb3BlbicpO1xyXG5jb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jbG9zZScpO1xyXG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1saW5rJyk7XHJcblxyXG5vcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xyXG5jbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxubGlua3MuZm9yRWFjaCgoZWwpID0+XHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxyXG4pO1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoXHJcbiAgICAhb3Blbk1lbnUuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAhbWVudS5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgIG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKVxyXG4gIClcclxuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6ImhlYWRlci5qcyJ9
