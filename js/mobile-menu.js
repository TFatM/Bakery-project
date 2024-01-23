var mobileMenu = document.querySelector('.mobile-menu');
var menuBtnOpen = document.querySelector('.menu-btn-open');
var menuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

