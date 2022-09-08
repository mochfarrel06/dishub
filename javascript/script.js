// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navbar = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});

// Faqs
const accor = document.querySelectorAll('.accordion-item-header');

accor.forEach((accorItems) => {
  accorItems.addEventListener('click', (event) => {
    const current = document.querySelector('.accordion-item-header.active');
    if (current && current !== accorItems) {
      current.classList.toggle('active');
      current.nextElementSibling.style.maxHeight = 0;
    }

    accorItems.classList.toggle('active');
    const accorbody = accorItems.nextElementSibling;
    if (accorItems.classList.contains('active')) {
      accorbody.style.maxHeight = accorbody.scrollHeight + 'px';
    } else {
      accorbody.style.maxHeight = 0;
    }
  });
});
