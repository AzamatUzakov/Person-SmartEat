const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

// Открыть модалку
openModalBtn.addEventListener('click', () => {
    modal.classList.add('open');
});

// Закрыть модалку при клике на крестик
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open');
});

// Закрыть модалку при клике на затемнение
