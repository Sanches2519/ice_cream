(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-ice-cream]"),
      closeModalBtn: document.querySelector("[data-modal-ice-cream-close]"),
      modal: document.querySelector("[modal-ice-cream-backdrop]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("open")
      refs.modal.classList.toggle("hidden");
    }
  })();