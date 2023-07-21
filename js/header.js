const menu = document.getElementById('menu');
const openMenu = document.getElementById('menu-open');
const closeMenu = document.getElementById('menu-close');
const links = document.querySelectorAll('.header__nav-link');

openMenu.addEventListener('click', () => {
  openMenu.style.zIndex = '0';
  menu.classList.add('active');
  document.body.classList.add('no-scroll');
});

closeMenu.addEventListener('click', () => {
  openMenu.style.zIndex = '10';
  openMenu.style.pointerEvents = 'auto';
  menu.classList.remove('active');
  document.body.classList.remove('no-scroll');
});

links.forEach((el) =>
  el.addEventListener('click', () => {
    openMenu.style.opacity = '1';
    openMenu.style.pointerEvents = 'auto';
    menu.classList.remove('active');
  })
);
document.body.addEventListener('click', (e) => {
  if (
    !openMenu.contains(e.target) &&
    !menu.contains(e.target) &&
    menu.classList.contains('active')
  )
    menu.classList.remove('active');
});

//работа с обработкой модально окна для карзины.
const cartBtn = document.querySelector('.header__basket');
const cartModal = document.querySelector('.cart-modal');
const closeModalBtn = document.querySelector('.cart-modal__remove-all');

const activeClass = 'cart-modal--open';

cartBtn.addEventListener('click', (event) => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 769) {
    return;
  }

  event.preventDefault();
  cartModal.classList.toggle(activeClass);
});

closeModalBtn.addEventListener('click', () => {
  cartModal.classList.toggle(activeClass);
});
