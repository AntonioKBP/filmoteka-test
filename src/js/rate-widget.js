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

const btn = document.querySelector('.rate-widget-open-btn-icon');
const submitBtn = document.querySelector('.rate-widget__btn');
btn.onclick = function () {
  modal.style.display = 'block';
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

submitBtn.addEventListener('click', onCloseModal);

function onCloseModal(e) {
  e.preventDefault();
}
