var modal = document.querySelector('.backdrop');
var modalBtnOpen = document.querySelector('.modal-btn-open');
var modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.toggle ("is-hidden");
  }
} 

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
