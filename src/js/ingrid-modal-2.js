(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-ingrid-open-2]'),
    closeModalBtn: document.querySelector('[data-modal-ingrid-close-2]'),
    modal: document.querySelector('[data-modal-ingrid-2]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();