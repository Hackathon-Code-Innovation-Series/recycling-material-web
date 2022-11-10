const openModal = document.getElementById('modal--open');
const modal = document.getElementById('modal');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
});