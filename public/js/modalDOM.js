const showModal = document.querySelector('.modal-appear');
const modal = document.querySelector('.modal');
const hideModal = document.querySelector('.close');

const getModal = () => {
  modal.style.display = 'flex';
};
const closeModal = () => {
  modal.style.display = 'none';
};
showModal.addEventListener('click', getModal);
hideModal.addEventListener('click', closeModal);
