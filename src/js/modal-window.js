(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-window]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[modal-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();
