(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      openModalBtn1: document.querySelector('[data-modal-open-two]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      closeModalBtn1: document.querySelector('[data-modal-close-two]'),
      modal: document.querySelector('[data-modal]'),
      modal1: document.querySelector('[data-modal-two]'),
    };
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', toggleModal1);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn1.addEventListener('click', toggleModal1);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      
    }
    function toggleModal1() {
      
      refs.modal1.classList.toggle('is-hidden1');
    }
  })();