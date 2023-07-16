export const menu = (() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
  };
  const link = document.querySelectorAll('.nav__link');
  link.forEach(a => a.addEventListener('click', removeLink));

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }
  function removeLink() {
    refs.menu.classList.remove('is-open');
    refs.body.classList.remove('no-scroll');
  }
})();
