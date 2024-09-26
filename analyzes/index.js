const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

// Открыть модалку
openModalBtn.addEventListener('click', () => {
    modal.classList.add('open');
    overlay.classList.add('show');
});

// Закрыть модалку при клике на крестик
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    overlay.classList.remove('show');
});



let fr_heig = document.querySelector(".tBody")
let he_null1 = document.querySelector(".he_null1")
let fr_heig2 = document.querySelector(".tBody2")
let he_null11 = document.querySelector(".he_null11")
let fr_heig3 = document.querySelector(".tBody3")
let he_null111 = document.querySelector(".he_null111")
let fr_heig4 = document.querySelector(".tBody4")
let he_null1111 = document.querySelector(".he_null1111")


he_null1.onclick = () => {
    fr_heig.classList.toggle('heigt_bdWeek')
    he_null1.classList.toggle('rotateBtn')
}

he_null11.onclick = () => {
    fr_heig2.classList.toggle('heigt_bdWeek')
    he_null11.classList.toggle('rotateBtn')
}

he_null111.onclick = () => {
    fr_heig3.classList.toggle('heigt_bdWeek')
    he_null111.classList.toggle('rotateBtn')
}
he_null1111.onclick = () => {
    fr_heig4.classList.toggle('heigt_bdWeek')
    he_null1111.classList.toggle('rotateBtn')
}