// Открытие и закрытие модального окна
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModal = document.querySelector('.close');

// Открытие модалки
openModalBtn.onclick = function () {
    modal.style.display = 'block'; // Показываем модалку
    setTimeout(() => {
        modal.classList.add('open'); // Анимация открывается после изменения display
    }, 10); // Небольшая задержка для плавного перехода
}

// Закрытие модалки
closeModal.onclick = function () {
    modal.classList.remove('open');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Подождем завершения анимации
}

// Закрытие модалки по клику вне её содержимого
window.onclick = function (event) {
    if (event.target === modal) {
        modal.classList.remove('open');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

let tMonth_hiden = document.querySelector('.tMonth_hiden')
let he_nullMainWeek = document.querySelector('.he_nullMainWeek')

let fr_heig = document.querySelector(".tBody")
let he_null1 = document.querySelector(".he_null1")
let he_null2 = document.querySelector(".he_null2")
let tBodyMonth = document.querySelector(".tBodyMonth")
let tBodyMonthday2 = document.querySelector(".tBodyMonthday2")
let he_null3 = document.querySelector(".he_null3")
let tBodyMonthday3 = document.querySelector(".tBodyMonthday3")
let he_null4 = document.querySelector(".he_null4")
let tBodyMonthday4 = document.querySelector(".tBodyMonthday4")
let he_null5 = document.querySelector(".he_null5")
let tBodyMonthday5 = document.querySelector(".tBodyMonthday5")
let he_null6 = document.querySelector(".he_null6")
let tBodyMonthday6 = document.querySelector(".tBodyMonthday6")
let he_null7 = document.querySelector(".he_null7")
let tBodyMonthday7 = document.querySelector(".tBodyMonthday7")
let he_null8 = document.querySelector(".he_null8")


let tMonth_hidenD2 = document.querySelector('.tMonth_hidenD2')
let he_nullMainWeekday2Ma = document.querySelector('.he_nullMainWeekday2Ma')


let he_nullw1 = document.querySelector('.he_nullw1')
let tBodyMonthw1 = document.querySelector('.tBodyMonthw1')
let he_nullw2 = document.querySelector('.he_nullw2')
let tBodyMonthw2 = document.querySelector('.tBodyMonthw2')
let he_nullw3 = document.querySelector('.he_nullw3')
let tBodyMonthw3 = document.querySelector('.tBodyMonthw3')
let he_nullw4 = document.querySelector('.he_nullw4')
let tBodyMonthw4 = document.querySelector('.tBodyMonthw4')
let he_nullw5 = document.querySelector('.he_nullw5')
let tBodyMonthw5 = document.querySelector('.tBodyMonthw5')
let he_nullw6 = document.querySelector('.he_nullw6')
let tBodyMonthw6 = document.querySelector('.tBodyMonthw6')
let he_nullw7 = document.querySelector('.he_nullw7')
let tBodyMonthw7 = document.querySelector('.tBodyMonthw7')




let tMonth_hidenD3 = document.querySelector('.tMonth_hidenD3')
let he_nullMainWeekday3Ma = document.querySelector('.he_nullMainWeekday3Ma')


let he_nullw11 = document.querySelector('.he_nullw11')
let tBodyMonthw11 = document.querySelector('.tBodyMonthw11')
let he_nullw22 = document.querySelector('.he_nullw22')
let tBodyMonthw22 = document.querySelector('.tBodyMonthw22')
let he_nullw33 = document.querySelector('.he_nullw33')
let tBodyMonthw33 = document.querySelector('.tBodyMonthw33')
let he_nullw44 = document.querySelector('.he_nullw44')
let tBodyMonthw44 = document.querySelector('.tBodyMonthw44')
let he_nullw55 = document.querySelector('.he_nullw55')
let tBodyMonthw55 = document.querySelector('.tBodyMonthw55')
let he_nullw66 = document.querySelector('.he_nullw66')
let tBodyMonthw66 = document.querySelector('.tBodyMonthw66')
let he_nullw77 = document.querySelector('.he_nullw77')
let tBodyMonthw77 = document.querySelector('.tBodyMonthw77')





let tMonth_hidenD4 = document.querySelector('.tMonth_hidenD4')
let he_nullMainWeekday4Ma = document.querySelector('.he_nullMainWeekday4Ma')

let he_nullw111 = document.querySelector('.he_nullw111')
let tBodyMonthw111 = document.querySelector('.tBodyMonthw111')
let he_nullw222 = document.querySelector('.he_nullw222')
let tBodyMonthw222 = document.querySelector('.tBodyMonthw222')
let he_nullw333 = document.querySelector('.he_nullw333')
let tBodyMonthw333 = document.querySelector('.tBodyMonthw333')
let he_nullw444 = document.querySelector('.he_nullw444')
let tBodyMonthw444 = document.querySelector('.tBodyMonthw444')
let he_nullw555 = document.querySelector('.he_nullw555')
let tBodyMonthw555 = document.querySelector('.tBodyMonthw555')
let he_nullw666 = document.querySelector('.he_nullw666')
let tBodyMonthw666 = document.querySelector('.tBodyMonthw666')
let he_nullw777 = document.querySelector('.he_nullw777')
let tBodyMonthw777 = document.querySelector('.tBodyMonthw777')




let ingridientsBT1 = document.querySelector('.ingridientsBT1')
let IngrBodyMonth1 = document.querySelector('.IngrBodyMonth')

let ingridientsBT2 = document.querySelector('.ingridientsBT2')
let IngrBodyMonth2 = document.querySelector('.IngrBodyMonth2')


let ingridientsBT3 = document.querySelector('.ingridientsBT3')
let IngrBodyMonth3 = document.querySelector('.IngrBodyMonth3')

let ingridientsBT4 = document.querySelector('.ingridientsBT4')
let IngrBodyMonth4 = document.querySelector('.IngrBodyMonth4')




let Month_btn = document.querySelector('.first_bt')
let oneMonthCont = document.querySelector('.pneMonthContainer')
let second_section = document.querySelector('.second_section')

Month_btn.onclick = () => {
    oneMonthCont.style.display = "block"
    second_section.style.display = "none"
}

he_null1.onclick = () => {
    fr_heig.classList.toggle('heigt_bdWeek')
    he_null1.classList.toggle('rotateBtn')
    console.log("click");

}




he_nullMainWeekday2Ma.onclick = () => {
    tMonth_hidenD2.classList.toggle('heigt_bdWeek')
    he_nullMainWeekday2Ma.classList.toggle('rotateBtn')
    console.log("click");

}


he_nullMainWeekday3Ma.onclick = () => {
    tMonth_hidenD3.classList.toggle('heigt_bdWeek')
    he_nullMainWeekday3Ma.classList.toggle('rotateBtn')
    console.log("click");

}



he_nullMainWeekday4Ma.onclick = () => {
    tMonth_hidenD4.classList.toggle('heigt_bdWeek')
    he_nullMainWeekday4Ma.classList.toggle('rotateBtn')
    console.log("click");

}

he_nullMainWeek.onclick = () => {
    tMonth_hiden.classList.toggle('heigt_bdWeek')
    he_nullMainWeek.classList.toggle('rotateBtn')
    console.log("click");

}

// Группа 1 - первая коллекция блоков и кнопок
const group1Blocks = [
    { button: he_null2, block: tBodyMonth },
    { button: he_null3, block: tBodyMonthday2 },
    { button: he_null4, block: tBodyMonthday3 },
    { button: he_null5, block: tBodyMonthday4 },
    { button: he_null6, block: tBodyMonthday5 },
    { button: he_null7, block: tBodyMonthday6 },
    { button: he_null8, block: tBodyMonthday7 },
    { button: ingridientsBT1, block: IngrBodyMonth1 }
];

// Группа 2 - вторая коллекция блоков и кнопок
const group2Blocks = [
    { button: he_nullw1, block: tBodyMonthw1 },
    { button: he_nullw2, block: tBodyMonthw2 },
    { button: he_nullw3, block: tBodyMonthw3 },
    { button: he_nullw4, block: tBodyMonthw4 },
    { button: he_nullw5, block: tBodyMonthw5 },
    { button: he_nullw6, block: tBodyMonthw6 },
    { button: he_nullw7, block: tBodyMonthw7 },
    { button: ingridientsBT2, block: IngrBodyMonth2 }
];

// Группа 3 - третья коллекция блоков и кнопок
const group3Blocks = [
    { button: he_nullw11, block: tBodyMonthw11 },
    { button: he_nullw22, block: tBodyMonthw22 },
    { button: he_nullw33, block: tBodyMonthw33 },
    { button: he_nullw44, block: tBodyMonthw44 },
    { button: he_nullw55, block: tBodyMonthw55 },
    { button: he_nullw66, block: tBodyMonthw66 },
    { button: he_nullw77, block: tBodyMonthw77 },
    { button: ingridientsBT3, block: IngrBodyMonth3 }
];

// Группа 4 - четвертая коллекция блоков и кнопок
const group4Blocks = [
    { button: he_nullw111, block: tBodyMonthw111 },
    { button: he_nullw222, block: tBodyMonthw222 },
    { button: he_nullw333, block: tBodyMonthw333 },
    { button: he_nullw444, block: tBodyMonthw444 },
    { button: he_nullw555, block: tBodyMonthw555 },
    { button: he_nullw666, block: tBodyMonthw666 },
    { button: he_nullw777, block: tBodyMonthw777 },
    { button: ingridientsBT4, block: IngrBodyMonth4 }
];

// Функция для закрытия всех блоков в одной группе
function closeGroupBlocks(group, currentButton) {
    group.forEach(({ block, button }) => {
        if (button !== currentButton) {
            block.classList.remove('heigt_bdWeek');
            button.classList.remove('rotateBtn');
        }
    });
}

// Добавляем обработчики для первой группы
group1Blocks.forEach(({ button, block }) => {
    button.onclick = () => {
        closeGroupBlocks(group1Blocks, button); // Закрываем только остальные блоки в группе
        block.classList.toggle('heigt_bdWeek'); // Открытие/закрытие блока
        button.classList.toggle('rotateBtn'); // Открытие/закрытие кнопки
        console.log("click group 1");
    };
});

// Добавляем обработчики для второй группы
group2Blocks.forEach(({ button, block }) => {
    button.onclick = () => {
        closeGroupBlocks(group2Blocks, button); // Закрываем только остальные блоки в группе
        block.classList.toggle('heigt_bdWeek'); // Открытие/закрытие блока
        button.classList.toggle('rotateBtn'); // Открытие/закрытие кнопки
        console.log("click group 2");
    };
});

// Добавляем обработчики для третьей группы
group3Blocks.forEach(({ button, block }) => {
    button.onclick = () => {
        closeGroupBlocks(group3Blocks, button); // Закрываем только остальные блоки в группе
        block.classList.toggle('heigt_bdWeek'); // Открытие/закрытие блока
        button.classList.toggle('rotateBtn'); // Открытие/закрытие кнопки
        console.log("click group 3");
    };
});

// Добавляем обработчики для четвертой группы
group4Blocks.forEach(({ button, block }) => {
    button.onclick = () => {
        closeGroupBlocks(group4Blocks, button); // Закрываем только остальные блоки в группе
        block.classList.toggle('heigt_bdWeek'); // Открытие/закрытие блока
        button.classList.toggle('rotateBtn'); // Открытие/закрытие кнопки
        console.log("click group 4");
    };
});


document.querySelectorAll('.recipeBtn').forEach(button => {
    button.addEventListener('click', function () {
        const modal = document.getElementById('customModal');
        const modalText = document.getElementById('custom-modal-text');

        // Show modal and start the animation
        modal.classList.add('active');

        // Set modal content to button's ID
        modalText.textContent = `You clicked on button with ID: ${this.id}`;
    });
});

document.querySelector('.close-modal-btn').addEventListener('click', function () {
    const modal = document.getElementById('customModal');

    // Hide modal by moving it back up
    modal.classList.remove('active');
});


document.addEventListener('DOMContentLoaded', function() {
    // Найдем все элементы с классом tBodyMonthday2
    const dayBlocks = document.querySelectorAll('.tBodyMonthdayAll2');

    dayBlocks.forEach(function(dayBlock) {
        // Найдем все чекбоксы в текущем блоке
        const checkboxes = dayBlock.querySelectorAll('.chekedInp');

        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                // Находим элемент с классом .days_box
                const dayBox = dayBlock.previousElementSibling;

                // Проверяем, что dayBox существует
                if (dayBox) {
                    // Находим элемент с текстом, который нужно изменить
                    const textElement = dayBox.querySelector('.text-to-color');
                    
                    // Проверяем, что textElement существует
                    if (textElement) {
                        // Добавляем или убираем класс в зависимости от состояния чекбокса
                        if (this.checked) {
                            textElement.classList.add('strikethrough'); // Добавляем стиль
                        } else {
                            textElement.classList.remove('strikethrough'); // Убираем стиль
                        }
                    } else {
                        console.error('Text element not found');
                    }
                } else {
                    console.error('Day box not found');
                }
            });
        });
    });
});
