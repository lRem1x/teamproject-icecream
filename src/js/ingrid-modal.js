(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-ingrid-open]'),
    closeModalBtn: document.querySelector('[data-modal-ingrid-close]'),
    modal: document.querySelector('[data-modal-ingrid]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
