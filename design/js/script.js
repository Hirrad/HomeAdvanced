'use strict';

///////////////////// Beginning of variablesBe

var TextWindows = {},
    elJs,
    elHtml,
    elWin,
    el,
    menuFirstLevel,
    jsText,
    htmlText,
    winText,
    elTask,
    winTask;

jsText = 'Тут будет js';
htmlText = 'Тут будет html';
winText = 'Тут будет Выводимая информация';
winTask = 'Задание';

el = document.querySelector('.menu__first-level').parentElement.children[1];
elJs = document.querySelector('.conteinerWin__flex__js');
elHtml = document.querySelector('.conteinerWin__flex__html');
elWin = document.querySelector('.conteinerWin__text');
elTask = document.querySelector('.conteinerWin__task');

menuFirstLevel = document.querySelector('.menu__first-level');
elJs.innerHTML = jsText;
elHtml.innerHTML = htmlText;
elWin.innerHTML = winText;
elTask.innerHTML = winTask;
//
/////////////////////End of variables
/////////////////// Start objects

function Dz(html, js, win, fun) {
    this.js = js;
    this.fun = fun;
    this.html = html;
    this.win = win;
    this.jsBr = function (js) {
        return js.replace(/;/g, ';<Br>');
    }(this.js);
}

/////////////////// End of objects
///// Begin 401
var win401 = '1. (\u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435)<br>\n- \u041E\u0431\u044A\u044F\u0432\u0438\u0442\u0435 \u0434\u0432\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435: admin \u0438 name.<br>\n- \u0417\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 name \u0441\u0442\u0440\u043E\u043A\u0443 "Harry".<br>\n- \u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437 name \u0432 admin.<br>\n- \u0412\u044B\u0432\u0435\u0434\u0438\u0442\u0435 admin (\u0434\u043E\u043B\u0436\u043D\u043E \u0432\u044B\u0432\u0435\u0441\u0442\u0438 "Harry").<br>';

var js401 = 'var admin, name;\nname="Harry";\nadmin=name;\nconsole.log(admin);';

var html401 = '';

var fun401 = function fun401() {
    var admin, name;
    name = "Harry";
    admin = name;
    console.log(admin);
};

TextWindows[401] = new Dz(html401, js401, win401, fun401);
///// End 401


// 2. (переменные)
// - Выберите какую-то формулу (например, математическую)
// - Объявите необходимые переменные
// - Выведите в консоль результат работы формулы
// Пример:
//     Я возьму формулу длины окружности (2 * Пи * радиус)
// Переменные и вывод у меня получатся такие:
//     var pi = 3.1415;
// var R = 10;
// console.log(2 * pi * R);


// var triangleSide_01=prompt("Введите значение стороны 1");
// var triangleSide_02=prompt("Введите значение стороны 2");
// var triangleSide_03=prompt("Введите значение стороны 3");
// triangleSide_01=parseInt(triangleSide_01);//перевожу значение в числа
// triangleSide_02=parseInt(triangleSide_02);//перевожу значение в числа
// triangleSide_03=parseInt(triangleSide_03);//перевожу значение в числа
// //проверяю существует ли треугольник с данными сторонами
// if (triangleSide_01+triangleSide_02>triangleSide_03 && triangleSide_01+triangleSide_03>triangleSide_02&&triangleSide_02+triangleSide_03>triangleSide_01) {
//
// //проверяю является ли треугольник прямоугольным
//     if (triangleSide_01 == Math.max(triangleSide_01, triangleSide_02, triangleSide_03) && Math.pow(triangleSide_01, 2) == Math.pow(triangleSide_02, 2) + Math.pow(triangleSide_03, 2)) {
//         Squre = (triangleSide_02 * triangleSide_03) / 2
//         radiusDescribed = (triangleSide_03 + triangleSide_02 - triangleSide_01) / 2;
//         console.log("Площадь прямоугольного треугольника=", Squre);
//         console.log("Радиус вписаной окружности в прямоугольный треугольник=", radiusDescribed);
//     }
//     else if (triangleSide_02 == Math.max(triangleSide_01, triangleSide_02, triangleSide_03) && Math.pow(triangleSide_02, 2) == Math.pow(triangleSide_01, 2) + Math.pow(triangleSide_03, 2)) {
//         Squre = (triangleSide_01 * triangleSide_03) / 2
//         radiusDescribed = (triangleSide_03 + triangleSide_01 - triangleSide_02) / 2;
//         console.log("Площадь прямоугольного треугольника=", Squre);
//         console.log("Радиус вписаной окружности в прямоугольный треугольник=", radiusDescribed);
//     }
//     else if (triangleSide_03 == Math.max(triangleSide_01, triangleSide_02, triangleSide_03) && Math.pow(triangleSide_03, 2) == Math.pow(triangleSide_01, 2) + Math.pow(triangleSide_02, 2)) {
//         Squre = (triangleSide_01 * triangleSide_02) / 2
//         radiusDescribed = (triangleSide_02 + triangleSide_01 - triangleSide_03) / 2;
//         console.log("Площадь прямоугольного треугольника=", Squre);
//         console.log("Радиус прямоугольного треугольника=", radiusDescribed);
//     }
//     //прверяю правельный ли треугольник, если да вычисляю по другой формуле
//     else if (triangleSide_03 == triangleSide_02 &&triangleSide_02 == triangleSide_01) {
//         Squre = (Math.sqrt(3) * Math.pow(triangleSide_01, 2)) / 4
//         radiusDescribed = (triangleSide_01) / (2 * Math.sqrt(3));
//         console.log("Площадь правильного треугольника=", Squre);
//         console.log("Радиус правильного треугольника=", radiusDescribed);
//     }
//     //если треугольник не прямоугольный, считаем по общим формулам
//     else {
//         perimetr = (triangleSide_01 + triangleSide_02 + triangleSide_03);// нахожу периметр
//         semipPerimeter = (perimetr / 2);// нахожу полупериметр
//         Squre = Math.sqrt(semipPerimeter * (semipPerimeter - triangleSide_01) * (semipPerimeter - triangleSide_02) * (semipPerimeter - triangleSide_03)).toFixed(8);// нахожу площадь через формулу Герона
//         radiusDescribed = (Squre / semipPerimeter).toFixed(8);//нахожу радиус вписаного круга
//         console.log("Радиус треугольника=", radiusDescribed);
//         console.log("Площадь треугольника=", Squre);
//     }
//     perimetr = (triangleSide_01 + triangleSide_02 + triangleSide_03);// нахожу периметр
//     console.log("Периметр треугольника", perimetr);
// }
// else {
//     alert("Вы ввели данные при которых треугольник не существует! Помните, что сумма любых двоих сторон должна быть больше третей!!!")
// }
// // 3. (if/else)
// //     - Объявите переменную с каким-то числом.
// // - Используя конструкцию if..else, напишите код,
// //     который выводит в консоль:
// //     • 1, если значение больше нуля,
// //   • -1, если значение меньше нуля,
// //   • 0, если значение равно нулю.
// //

///// Begin 403
var win403 = ' - \u041E\u0431\u044A\u044F\u0432\u0438\u0442\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E \u0441 \u043A\u0430\u043A\u0438\u043C-\u0442\u043E \u0447\u0438\u0441\u043B\u043E\u043C.<br>\n - \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E if..else, \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u043E\u0434,<br>\n    \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C:<br>\n    \u2022 1, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0443\u043B\u044F,<br>\n   \u2022 -1, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 \u043D\u0443\u043B\u044F,<br>\n   \u2022 0, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0432\u043D\u043E \u043D\u0443\u043B\u044E.';

var js403 = 'var textNumber=document.getElementById(\'textNumber\');\nvar textNumberPrevious= textNumber.previousElementSibling;\ntextNumberPrevious.textContent=\'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter\';\nvar elDiv=document.createElement(\'b\');\n\n\n\ndocument.body.insertBefore(elDiv, textNumber );\nconsole.log(textNumberPrevious);\n\n\n\n\n\ntextNumber.addEventListener(\'keypress\', function(e){\n    var text = this.previousElementSibling;\n\n\n    if(isNaN(this.value)&&e.keyCode==\'13\'){\n        text.textContent=\'\u0412\u044B \u0432\u0432\u0435\u043B\u0438 \u043D\u0435 \u0447\u0438\u0441\u043B\u043E! \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E!\';\n    }\n    else if(this.value && e.keyCode==\'13\'){\n\n        switch(true) {\n            case(this.value > 0)  :   text.textContent = "\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435"; break;\n            case(this.value < 0)  :   text.textContent = "\u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"; break;\n            case(this.value == 0) :   text.textContent= "\u0420\u0430\u0432\u043D\u043E \u043D\u0443\u043B\u044E";\n        }\n    }\n\n});';

var html403 = '<label for="textNumber">Введите число от 0 до 99</label>\n' + '<input type="text" id="textNumber">';

var fun403 = function fun403() {
    elWin.innerHTML = html403;
    var textNumber = document.getElementById('textNumber');
    var textNumberPrevious = textNumber.previousElementSibling;
    textNumberPrevious.textContent = 'Введите число и нажмите Enter';
    var elDiv = document.createElement('b');

    elWin.insertBefore(elDiv, elWin.lastElementChild);

    textNumber.addEventListener('keypress', function (e) {
        var text = this.previousElementSibling;

        if (isNaN(this.value) && e.keyCode == '13') {
            text.textContent = 'Вы ввели не число! Введите число!';
        } else if (this.value && e.keyCode == '13') {

            switch (true) {
                case this.value > 0:
                    text.textContent = "Число положительное";break;
                case this.value < 0:
                    text.textContent = "Число отрицательное";break;
                case this.value == 0:
                    text.textContent = "Число равно нулю";
            }
        }
    });
};

TextWindows[403] = new Dz(html403, js403, win403, fun403);
///// End 403


var win419 = '19. (events)\n\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043A\u0430\u043A\u043E\u0439-\u0442\u043E header \u0441 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A".\n   \u041F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u043E\u044F\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0439 \u0431\u043B\u043E\u043A,\n    \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432\u043E\u0434\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438 \u043A\u043D\u043E\u043F\u043A\u0430 "\u0414\u0430!".\n   \u041F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u043D\u043E \u043A\u043D\u043E\u043F\u043A\u0443 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F (el.value)\n \u0415\u0441\u043B\u0438 \u043E\u043D\u043E \u043F\u0443\u0441\u0442\u043E\u0435, \u0442\u043E \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0434\u0435\u043B\u0430\u0435\u043C.\n   \u0415\u0441\u043B\u0438 \u043E\u043D\u043E \u043D\u0435 \u043F\u0443\u0441\u0442\u043E\u0435, \u0442\u043E \u0432\u044B\u0432\u043E\u0434\u0438\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C \u0438 \u043F\u0440\u044F\u0447\u0435\u043C \u0431\u043B\u043E\u043A.\n   \u041A\u043B\u0438\u043A \u0437\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u043C\u0438 \u0431\u043B\u043E\u043A\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u044F\u0442\u0430\u0442\u044C \u0431\u043B\u043E\u043A.';

var js419 = 'var button, educationOnOff, phone;\nbutton=document.querySelector(\'#buttonConteiner__button\');\neducationOnOff=document.querySelector(\'.formOnOff\');\nphone=document.querySelector(\'#phone\');\nbutton.addEventListener(\'click\', function (e){\n\n    educationOnOff.style.display=\'inline\';\n\n} );\neducationOnOff.addEventListener(\'submit\', function (e){\n\n    e.preventDefault();\n\n        if(phone.value==0){\n        alert(\'\u0412\u044B \u043D\u0435 \u0432\u0432\u0435\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440!\');\n    }\n    else {\n        alert(phone.value);\n        phone.value = \'\';\n        educationOnOff.style.display = \'none\';\n\n    }\n\n} );\neducationOnOff.firstElementChild.addEventListener(\'click\', function (e){\n;\n    if(e.target.tagName==\'ARTICLE\'){\n        educationOnOff.style.display=\'none\';\n    }\n\n} );';

var html419 = '<article class="buttonConteiner" id="buttonConteiner">\n        <a href="#" class="button_src"><button class="buttonConteiner__button" id="buttonConteiner__button">\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A</button></a>\n    </article>\n    <section class="formOnOff">\n    <article class="conteiner_form" id="conteiner_form">\n\n        <form action="index1.html" class="conteiner_form__form"><label for="phone" class="conteiner_form__input">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u041E\u041A</label><input type="text" id="phone" class="conteiner_form__input">\n            <input type="submit" value="OK!">\n        </form>\n    </article>\n    </section>';

var fun419 = function fun419() {
    elWin.innerHTML = '<article class="buttonConteiner" id="buttonConteiner">\n        <a href="#" class="button_src"><button class="buttonConteiner__button" id="buttonConteiner__button">\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A</button></a>\n    </article>\n    <section class="formOnOff">\n    <article class="conteiner_form" id="conteiner_form">\n\n        <form action="index1.html" class="conteiner_form__form"><label for="phone" class="conteiner_form__input">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u041E\u041A</label><input type="text" id="phone" class="conteiner_form__input">\n            <input type="submit" value="OK!">\n        </form>\n    </article>\n    </section>';

    var button, educationOnOff, phone;
    button = document.querySelector('#buttonConteiner__button');
    educationOnOff = document.querySelector('.formOnOff');
    phone = document.querySelector('#phone');
    button.addEventListener('click', function (e) {

        educationOnOff.style.display = 'inline';
    });
    educationOnOff.addEventListener('submit', function (e) {

        e.preventDefault();

        if (phone.value == 0) {
            alert('Вы не ввели телефонный номер!');
        } else {
            alert(phone.value);
            phone.value = '';
            educationOnOff.style.display = 'none';
        }
    });
    educationOnOff.firstElementChild.addEventListener('click', function (e) {
        ;
        if (e.target.tagName == 'ARTICLE') {
            educationOnOff.style.display = 'none';
        }
    });
};

TextWindows[419] = new Dz(html419, js419, win419, fun419);

///////////////////// beginning of events

el.addEventListener('click', function (e) {

    if (e.target.getAttribute('class') == 'menu__third-level finish') {
        var numberEl = e.target.parentElement.parentElement.parentElement.firstElementChild.dataset.number;
        var numberEl2 = e.target.dataset.number;
        elJs.innerHTML = TextWindows[numberEl + numberEl2].jsBr;
        elHtml.textContent = TextWindows[numberEl + numberEl2].html;
        elTask.innerHTML = TextWindows[numberEl + numberEl2].win;
        TextWindows[numberEl + numberEl2].fun();
    }
});

menuFirstLevel.addEventListener('mouseover', function () {
    elJs.innerHTML = jsText;
    elHtml.innerHTML = htmlText;
    elTask.textContent = winTask;
    elWin.innerHTML = winText;
    console.clear();
});

///////////////////// end of events