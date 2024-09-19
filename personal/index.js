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





he_null2.onclick = () => {
    tBodyMonth.classList.toggle('heigt_bdWeek')
    he_null2.classList.toggle('rotateBtn')
    console.log("click");

}
he_null3.onclick = () => {
    tBodyMonthday2.classList.toggle('heigt_bdWeek')
    he_null3.classList.toggle('rotateBtn')
    console.log("click");

}
he_null4.onclick = () => {
    tBodyMonthday3.classList.toggle('heigt_bdWeek')
    he_null4.classList.toggle('rotateBtn')
    console.log("click");

}
he_null5.onclick = () => {
    tBodyMonthday4.classList.toggle('heigt_bdWeek')
    he_null5.classList.toggle('rotateBtn')
    console.log("click");

}
he_null6.onclick = () => {
    tBodyMonthday5.classList.toggle('heigt_bdWeek')
    he_null6.classList.toggle('rotateBtn')
    console.log("click");

}
he_null7.onclick = () => {
    tBodyMonthday6.classList.toggle('heigt_bdWeek')
    he_null7.classList.toggle('rotateBtn')
    console.log("click");

}
he_null8.onclick = () => {
    tBodyMonthday7.classList.toggle('heigt_bdWeek')
    he_null8.classList.toggle('rotateBtn')
    console.log("click");

}



//////////////////next Week///////////////



he_nullw1.onclick = () => {
    tBodyMonthw1.classList.toggle('heigt_bdWeek')
    he_nullw1.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw2.onclick = () => {
    tBodyMonthw2.classList.toggle('heigt_bdWeek')
    he_nullw2.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw3.onclick = () => {
    tBodyMonthw3.classList.toggle('heigt_bdWeek')
    he_nullw3.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw4.onclick = () => {
    tBodyMonthw4.classList.toggle('heigt_bdWeek')
    he_nullw4.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw5.onclick = () => {
    tBodyMonthw5.classList.toggle('heigt_bdWeek')
    he_nullw5.classList.toggle('rotateBtn')
    console.log("click");

}


he_nullw6.onclick = () => {
    tBodyMonthw6.classList.toggle('heigt_bdWeek')
    he_nullw6.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw7.onclick = () => {
    tBodyMonthw7.classList.toggle('heigt_bdWeek')
    he_nullw7.classList.toggle('rotateBtn')
    console.log("click");

}



////////////////////////////next week/////////////////



he_nullw11.onclick = () => {
    tBodyMonthw11.classList.toggle('heigt_bdWeek')
    he_nullw11.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw22.onclick = () => {
    tBodyMonthw22.classList.toggle('heigt_bdWeek')
    he_nullw22.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw33.onclick = () => {
    tBodyMonthw33.classList.toggle('heigt_bdWeek')
    he_nullw33.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw44.onclick = () => {
    tBodyMonthw44.classList.toggle('heigt_bdWeek')
    he_nullw44.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw55.onclick = () => {
    tBodyMonthw55.classList.toggle('heigt_bdWeek')
    he_nullw55.classList.toggle('rotateBtn')
    console.log("click");

}


he_nullw66.onclick = () => {
    tBodyMonthw66.classList.toggle('heigt_bdWeek')
    he_nullw66.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw77.onclick = () => {
    tBodyMonthw77.classList.toggle('heigt_bdWeek')
    he_nullw77.classList.toggle('rotateBtn')
    console.log("click");

}



////////////////////////////next week/////////////////



he_nullw111.onclick = () => {
    tBodyMonthw111.classList.toggle('heigt_bdWeek')
    he_nullw111.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw222.onclick = () => {
    tBodyMonthw222.classList.toggle('heigt_bdWeek')
    he_nullw222.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw333.onclick = () => {
    tBodyMonthw333.classList.toggle('heigt_bdWeek')
    he_nullw333.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw444.onclick = () => {
    tBodyMonthw444.classList.toggle('heigt_bdWeek')
    he_nullw444.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw555.onclick = () => {
    tBodyMonthw555.classList.toggle('heigt_bdWeek')
    he_nullw555.classList.toggle('rotateBtn')
    console.log("click");

}


he_nullw666.onclick = () => {
    tBodyMonthw666.classList.toggle('heigt_bdWeek')
    he_nullw666.classList.toggle('rotateBtn')
    console.log("click");

}
he_nullw777.onclick = () => {
    tBodyMonthw777.classList.toggle('heigt_bdWeek')
    he_nullw777.classList.toggle('rotateBtn')
    console.log("click");

}



