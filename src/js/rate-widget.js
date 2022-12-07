// (() => {
//   const refs = {
//     openMobileMenuBtn: document.querySelector('[data-mobile-menu-open]'),
//     closeMobileMenuBtn: document.querySelector('[data-mobile-menu-close]'),
//     mobileMenu: document.querySelector('[data-mobile-menu]'),
//   };

//   refs.openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
//   refs.closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);

//   function toggleMobileMenu() {
//     refs.mobileMenu.classList.toggle('is-hidden');
//   }
// })();

const modal = document.getElementById('myModal');

const btn = document.getElementById('myBtn');

const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
