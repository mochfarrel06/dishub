// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navbar = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});
