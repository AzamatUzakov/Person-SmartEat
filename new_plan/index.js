const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

// Открыть модалку
openModalBtn.addEventListener('click', () => {
    modal.classList.add('open');
});

// Закрыть модалку при клике на крестик
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    overlay.classList.remove('show');
});

