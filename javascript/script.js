// Menu mobile
const mobileBtn = document.getElementById('mobile-cta');
const navMenu = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
  navMenu.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
  navMenu.classList.remove('menu-btn');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    navMenu.classList.remove('menu-btn');
    mobileBtnExit.classList.remove('menu-btn');
  })
);

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

// Email
function validate() {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let message = document.getElementById('message');
  let sendBtn = document.getElementById('sendBtn');

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value == '' || email.value == '' || phone.value == '' || message.value == '') {
      emptyerror();
    } else {
      // sendmail(name.value, email.value, phone.value, message.value);
      success();
    }
  });
}

validate();

function emptyerror() {
  swal({
    title: 'Oh no....',
    text: 'Pesan Harus Diisi',
    icon: 'error',
  });
}

function success() {
  swal({
    title: 'Good job!',
    text: 'Terima Kasih',
    icon: 'success',
  });
}
