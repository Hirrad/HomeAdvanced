'use strict';

///////////////////// Beginning of variablesBe

var TextWindows = {},
    elJs = void 0,
    elHtml = void 0,
    elWin = void 0,
    el = void 0,
    menuFirstLevel = void 0,
    jsText = void 0,
    htmlText = void 0,
    winText = void 0,
    elTask = void 0,
    winTask = void 0;

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


//


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
var log = function log(el) {
    return console.log(el);
};
///// Begin 4-01
var win401 = '1. (\u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435)<br>\n- \u041E\u0431\u044A\u044F\u0432\u0438\u0442\u0435 \u0434\u0432\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435: admin \u0438 name.<br>\n- \u0417\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 name \u0441\u0442\u0440\u043E\u043A\u0443 "Harry".<br>\n- \u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437 name \u0432 admin.<br>\n- \u0412\u044B\u0432\u0435\u0434\u0438\u0442\u0435 admin (\u0434\u043E\u043B\u0436\u043D\u043E \u0432\u044B\u0432\u0435\u0441\u0442\u0438 "Harry").<br>';

var js401 = 'var admin, name;\nname="Harry";\nadmin=name;\nconsole.log(admin);';

var html401 = '';

var fun401 = function fun401() {
    elWin.innerHTML = '';
    var admin, name;
    name = "Harry";
    admin = name;
    console.log(admin);
};

TextWindows[401] = new Dz(html401, js401, win401, fun401);
////// End 4-01


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
///// Begin 4-03
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
///// End 4-03


///// Begin 4-05
var win405 = '5. (\u0446\u0438\u043A\u043B\u044B)<br>\n- \u041F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0446\u0438\u043A\u043B\u0430 for \u0432\u044B\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0451\u0442\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u043E\u0442 2 \u0434\u043E 10.<br>';

var js405 = 'for(var i=2; i<=10; i++){\n    var elCreate =document.createElement(\'p\');\n    elCreate.textContent=i;\n    elWin.appendChild(elCreate);\n}';

var html405 = '';

var fun405 = function fun405() {
    elWin.innerHTML = '';
    for (var i = 2; i <= 10; i++) {
        var elCreate = document.createElement('p');
        elCreate.textContent = i;
        elWin.appendChild(elCreate);
    }
};

TextWindows[405] = new Dz(html405, js405, win405, fun405);
///// End 4-05

// 6. (циклы)
// Натуральное число называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, число n простое, если при делении на любое число от 2 до n-1 есть остаток.
//     Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

///// Begin 4-06
var win406 = '1. (\u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435)<br>\n- \u041E\u0431\u044A\u044F\u0432\u0438\u0442\u0435 \u0434\u0432\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435: admin \u0438 name.<br>\n- \u0417\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 name \u0441\u0442\u0440\u043E\u043A\u0443 "Harry".<br>\n- \u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437 name \u0432 admin.<br>\n- \u0412\u044B\u0432\u0435\u0434\u0438\u0442\u0435 admin (\u0434\u043E\u043B\u0436\u043D\u043E \u0432\u044B\u0432\u0435\u0441\u0442\u0438 "Harry").<br>';

var js406 = 'var admin, name;\nname="Harry";\nadmin=name;\nconsole.log(admin);';

var html406 = '';

var fun406 = function fun406() {
    elWin.innerHTML = '';
    var admin, name;
    name = "Harry";
    admin = name;
    console.log(admin);
};

TextWindows[401] = new Dz(html401, js401, win401, fun401);
////// End 4-06

// function simple(min,max) {
//
//     var sim=[];
//     out: for ( min; min <= max; min++) {
//
//             for (devision = 2; devision < min; devision++) {
//                 if (min % devision == 0)
//                 {
//                     continue out;
//                 }
//             }
//             sim.push(min);
//             // alert( i ); // простое
//         }
//
//     return sim;
// }
// console.log(simple(2,10));


///// Begin 4-19
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

////// End 4-19


///// Begin 5-01
var win501 = '- \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443 css \u0441 \u043F\u0430\u0440\u043E\u0439 \u0444\u0430\u0439\u043B\u043E\u0432 \u0441\u0442\u0438\u043B\u0435\u0439<br>\n- \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u0444\u0430\u0439\u043B \u0441 \u0438\u043C\u0435\u043D\u0430\u043C\u0438 \u044D\u0442\u0438\u0445 \u0444\u0430\u0439\u043B\u043E\u0432, \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u043C\u0438 \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0431\u0435\u043B<br>\n- \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043A\u0440\u0438\u043F\u0442 \u0434\u043B\u044F node, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442:<br>\n  \u0447\u0438\u0442\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u0441 \u0438\u043C\u0435\u043D\u0430\u043C\u0438,<br>\n  \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u0438\u043C\u0435\u043D \u043F\u043E \u043F\u0440\u043E\u0431\u0435\u043B\u0443 \u043D\u0430 \u043C\u0430\u0441\u0441\u0438\u0432 \u0438\u043C\u0435\u043D,<br>\n  \u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0430\u043C\u0438 \u0444\u0430\u0439\u043B\u044B,<br>\n  \u0441\u043A\u043B\u0435\u0438\u0432\u0430\u0442\u044C \u0432 \u043E\u0434\u043D\u0443 \u0441\u0442\u0440\u043E\u043A\u0443,<br>\n  \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0432 \u043D\u043E\u0432\u044B\u0439 \u0444\u0430\u0439\u043B.<br>\n- \u0412\u044B\u043B\u043E\u0436\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0441\u043A\u0440\u0438\u043F\u0442\u0430 \u043D\u0430 codepen \u0438 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u043A\u0430\u043A \u0414\u0417.<br>';

var js501 = 'var fs = require(\'fs\');\n    const jsList=fs.readFileSync(\'./src/js/HomeWorkJs/05/jsList.txt\', \'utf8\');\n    var list = jsList.split(\' \').reduce(function (list, currentValue) {\n        return list + fs.readFileSync(`./src/js/HomeWorkJs/04/${currentValue}`, `utf8`)\n\n    },0);\n    fs.writeFile(\'./src/js/HomeWorkJs/05/script.txt\', list);';

var html501 = '';

var fun501 = function fun501() {
    elWin.innerHTML = 'var fs = require(\'fs\');\n' + '    const jsList=fs.readFileSync(\'./src/js/HomeWorkJs/05/jsList.txt\', \'utf8\');\n' + '    var list = jsList.split(\' \').reduce(function (list, currentValue) {\n' + '        return list + fs.readFileSync(`./src/js/HomeWorkJs/04/\${currentValue}`, `utf8`)\n' + '\n' + '    },0);\n' + '    fs.writeFile(\'./src/js/HomeWorkJs/05/script.txt\', list);';
};

TextWindows[501] = new Dz(html501, js501, win501, fun501);
////// End 5-01


///// Begin 6-01
var win601 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 keydown, \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u043D\u0443\u0436\u043D\u043E \u0431\u0440\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F (\u043D\u0430\u043F\u0435\u0447\u0430\u0442\u0430\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442) \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0435\u0433\u043E \u0432 API Wiki.<br>\n\n    \u0418\u0437 \u043E\u0442\u0432\u0435\u0442\u0430 API \u043D\u0443\u0436\u043D\u043E \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A autocomplete \u0438 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0435\u0433\u043E \u043A\u0430\u043A \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443 \u043F\u043E\u0434 \u043F\u043E\u043B\u0435\u043C \u0432\u0432\u043E\u0434\u0430.<br>\n\n    \u0412\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u0434\u043E\u043B\u0436\u043D\u043E \u0442\u0430\u043A: http://take.ms/m08P9<br>\n\n     \u041A\u043B\u0438\u043A \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435.<br>\n\n    \u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u044E, \u0447\u0442\u043E:<br>\n\n- \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u043E\u0436\u043D\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 var a = document.createElement(\'a\')<br>\n\n   - \u0441\u0441\u044B\u043B\u043A\u0443 \u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 a.href = "http://site.com"<br>\n\n    - \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 a.innerHTML = "Some text"<br>\n\n  - \u0447\u0442\u043E\u0431 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u043B\u043E \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0430\u0442\u0440\u0438\u0431\u0443\u0442 a.target = "_blank"<br>\n\n    - \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043C\u043E\u0436\u043D\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439<br>\n\ndocument.querySelector(\'.results\').appendChild(a)';

var js601 = 'let conteinerAjax = document.createElement(\'div\');\nlet textPressAjax = document.createElement(\'input\');\nconteinerAjax.classList.add(\'ajax\');\ntextPressAjax.setAttribute(\'id\', \'textPressAjax\');\ntextPressAjax.classList.add(\'ajax__search\');\ntextPressAjax.setAttribute(\'value\', \'\u041F\u043E\u0438\u0441\u043A...\');\ntextPressAjax.maxLength=\'20\';\nelWin.appendChild(conteinerAjax);\nconsole.log(textPressAjax);\nconteinerAjax.appendChild(textPressAjax);\ntextPressAjax.addEventListener(\'focus\', function (e) {\n    if (e.target.value == \'\u041F\u043E\u0438\u0441\u043A...\') {\n        e.target.value = \'\';\n    }\n})\ntextPressAjax.addEventListener(\'blur\', function (e) {\n    setTimeout(remuveDom, 500);\n})\ntextPressAjax.addEventListener(\'input\', axajSearch);\nfunction search() {\n    var seachText, spanPressAjax;\n    if (conteinerAjax.childElementCount != 1) {\n        remuveDom()\n    }\n    var params = {\n        action: \'opensearch\',\n        origin: \'*\',\n        format: \'json\',\n        search: \'\'\n    };\n    params.search = textPressAjax.value;\n    var body = Object.keys(params)\n        .map(function (prop) {\n            return prop + \'=\' + params[prop];\n        })\n        .join(\'&\');\n    var apiUrl = \'https://ru.wikipedia.org/w/api.php\';\n    var http = new XMLHttpRequest();\n    http.open(\'POST\', apiUrl);\n    http.addEventListener(\'readystatechange\', function () {\n        if (this.readyState == 4) {\n            if (this.status == 200) {\n                seachText = JSON.parse(this.responseText);\n                console.log(seachText.length);\n                for (var i = 0; i < seachText[1].length && i < 10; i++) {\n                    spanPressAjax = document.createElement(\'span\');\n                    spanPressAjax.classList.add(\'ajax__text\');\n                    spanPressAjax.innerHTML = `<a href="${seachText[3][i]}" target="_blank">${seachText[1][i]}</a>`;\n                    conteinerAjax.appendChild(spanPressAjax);\n                }\n            }\n        }\n    })\n    http.send(body);\n}\nvar time;\nfunction axajSearch() {\n    time && clearTimeout(time);\n    time=setTimeout(search,500);\n}\nfunction remuveDom() {\n    while (conteinerAjax.childElementCount != 1) {\n        conteinerAjax.lastElementChild.remove()\n    }\n}';

var html601 = '';

var fun601 = function fun601() {
    elWin.innerHTML = '';
    var conteinerAjax = document.createElement('div');
    var textPressAjax = document.createElement('input');

    conteinerAjax.classList.add('ajax');

    textPressAjax.setAttribute('id', 'textPressAjax');
    textPressAjax.classList.add('ajax__search');
    textPressAjax.setAttribute('value', 'Поиск...');
    textPressAjax.maxLength = '20';
    elWin.appendChild(conteinerAjax);

    conteinerAjax.appendChild(textPressAjax);

    textPressAjax.addEventListener('focus', function (e) {

        if (e.target.value == 'Поиск...') {
            e.target.value = '';
        }
    });

    textPressAjax.addEventListener('blur', function (e) {

        setTimeout(remuveDom, 500);
    });

    textPressAjax.addEventListener('input', axajSearch);

    function search() {
        var seachText, spanPressAjax;

        if (conteinerAjax.childElementCount != 1) {
            remuveDom();
        }
        var params = {
            action: 'opensearch',
            origin: '*',
            format: 'json',
            search: ''
        };
        params.search = textPressAjax.value;
        var body = Object.keys(params).map(function (prop) {
            return prop + '=' + params[prop];
        }).join('&');
        var apiUrl = 'https://ru.wikipedia.org/w/api.php';
        var http = new XMLHttpRequest();
        http.open('POST', apiUrl);
        http.addEventListener('readystatechange', function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    // success callback
                    seachText = JSON.parse(this.responseText);
                    console.log(seachText.length);

                    for (var i = 0; i < seachText[1].length && i < 10; i++) {

                        spanPressAjax = document.createElement('span');
                        spanPressAjax.classList.add('ajax__text');
                        spanPressAjax.innerHTML = '<a href="' + seachText[3][i] + '" target="_blank">' + seachText[1][i] + '</a>';
                        conteinerAjax.appendChild(spanPressAjax);
                    }
                }
            }
        });

        http.send(body);
    }

    var time;

    function axajSearch() {
        time && clearTimeout(time);
        time = setTimeout(search, 500);
    }

    function remuveDom() {
        while (conteinerAjax.childElementCount != 1) {
            conteinerAjax.lastElementChild.remove();
        }
    }
};

TextWindows[601] = new Dz(html601, js601, win601, fun601);
////// End 6-01


///// Begin 7-01

// var elSelect=document.querySelectorAll('.conteinerSelect'); //первый вариант
// // var elSelect=document.querySelectorAll('.upDown');
// // log(elSelect);
// var submit=document.querySelector('#formFruits');
// // console.log(submit);
// var i=0;
// while(elSelect[i]){
//     // log(elSelect[i]);
//     elSelect[i].addEventListener('click',function (e) {
//
//
//         if(e.target.classList.contains('up')||e.target.classList.contains('down'))
//         {
//             var first, last, next;
//
//
//             first = e.target.parentNode.previousElementSibling.firstElementChild;
//             // log(e.target.parentNode.previousElementSibling);
//             last = e.target.parentNode.previousElementSibling.lastElementChild;
//             // log(last);
//             next = first.nextElementSibling;
//
//
//
//             if (e.target.classList.contains('up')) {
//                 first.removeAttribute('selected', '');
//                 e.target.parentNode.previousElementSibling.insertBefore(last, first);
//
//                 last.setAttribute('selected', '');
//
//             }
//             if (e.target.classList.contains('down')) {
//                 first.removeAttribute('selected', '');
//                 e.target.parentNode.previousElementSibling.appendChild(first);
//                 next.setAttribute('selected', '');
//
//             }
//
//         }
//     });
// i++;
// }
//
// submit.addEventListener('submit',function (e) {
//     var form=document.querySelectorAll('select');
//     var i=0;
//     while(form[i]){
//         // console.log(form[i].value);
//         // console.log(form[i].getAttribute('name'));
//         localStorage.setItem(`${form[i].getAttribute('name')}`, `${form[i].value}`);
//         i++;
//     }
//     // console.log(form[1].form[i].value);
//     // var formData = new FormData(document.getElementById('formFruits'));
//     // console.log(e.target);
//     e.preventDefault();
//     alert('Ваш выбор сохранен!')
//     // console.log(formData);
//
// })
// ;(function (element){
//     var i=0,j=0,name, value, select;
//     var el=document.querySelectorAll(element);
//     // NodeList.prototype.filter=Array.prototype.filter;
//     HTMLCollection.prototype.filter=Array.prototype.filter;
//     // NodeList.prototype.filter=Array.prototype.filter;
//     // var er=el.filter(function (el){return el.getAttribute('name')=='harry'});
//     // log(er);
//     // console.log(el);
//     // log(el);
//     for(;i<el.length;i++){
//         name=el[i].getAttribute('name');
//         // log(name);
//         value=localStorage.getItem(name);
//         // log(value);
//         select=el[i].children.filter(function (el){return el.getAttribute('value')==value})
//         select[0].setAttribute('selected','');
//     }
//
//     // console.log(el[0].getAttribute('id'));
//     // while(localStorage.getItem(`${el[i].getAttribute('name')}`)){
//     //     el.firstElementChild.setAttribute('selected','');
//     // }
// })('.selectFormFruits');


var win701 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \u0441 \u0441\u0435\u043B\u0435\u043A\u0442\u0430\u043C\u0438 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0442\u0430\u043A\u0443\u044E http://take.ms/OLk4v).<br>\n \u041F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0444\u043E\u0440\u043C\u044B \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0432 localStorage.<br>\n  \u0424\u043E\u0440\u043C\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430.<br>\n \u041F\u043E\u0441\u043B\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u044B \u0442\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u043B\u0438\u0441\u044C.<br>';

var js701 = 'var elSelect=document.querySelectorAll(\'.conteinerSelect\'); //первый вариант\n' + '    var submit=document.querySelector(\'#formFruits\');\n' + '    var i=0;\n' + '    while(elSelect[i]){\n' + '        elSelect[i].addEventListener(\'click\',function (e) {\n' + '            if(e.target.classList.contains(\'up\')||e.target.classList.contains(\'down\'))\n' + '            {\n' + '                var first, last, next;\n' + '                first = e.target.parentNode.previousElementSibling.firstElementChild;\n' + '                last = e.target.parentNode.previousElementSibling.lastElementChild;\n' + '                next = first.nextElementSibling;\n' + '                if (e.target.classList.contains(\'up\')) {\n' + '                    first.removeAttribute(\'selected\', \'\');\n' + '                    e.target.parentNode.previousElementSibling.insertBefore(last, first);\n' + '                    last.setAttribute(\'selected\', \'\');\n' + '                }\n' + '                if (e.target.classList.contains(\'down\')) {\n' + '                    first.removeAttribute(\'selected\', \'\');\n' + '                    e.target.parentNode.previousElementSibling.appendChild(first);\n' + '                    next.setAttribute(\'selected\', \'\');\n' + '                }\n' + '            }\n' + '        });\n' + '        i++;\n' + '    }\n' + '    submit.addEventListener(\'submit\',function (e) {\n' + '        var form=document.querySelectorAll(\'select\');\n' + '        var i=0;\n' + '        while(form[i]){\n' + '            localStorage.setItem(`${form[i].getAttribute(\'name\')}`, `${form[i].value}`);\n' + '            i++;\n' + '        }\n' + '        e.preventDefault();\n' + '        alert(\'Ваш выбор сохранен!\')\n' + '    })\n' + '    ;(function (element){\n' + '        var i=0,j=0,name, value, select;\n' + '        var el=document.querySelectorAll(element);\n' + '        HTMLCollection.prototype.filter=Array.prototype.filter;\n' + '        for(;i<el.length;i++){\n' + '            name=el[i].getAttribute(\'name\');\n' + '            value=localStorage.getItem(name);\n' + '            select=el[i].children.filter(function (el){return el.getAttribute(\'value\')==value})\n' + '            select[0].setAttribute(\'selected\',\'\');\n' + '        }\n' + '    })(\'.selectFormFruits\');';

var html701 = '<div class="selectEvent">\n' + '        <article class="conteinerSelect">\n' + '            <label for="andy">Andy</label>\n' + '            <select name="andy" id="andy" form="formFruits" class="selectFormFruits">\n' + '                <option value="apple">Apple</option>\n' + '                <option value="orange">Orange</option>\n' + '                <option value="carrot">Carrot</option>\n' + '                <option value="cherry">Cherry</option>\n' + '            </select>\n' + '            <div class="upDown"><figure class="up" ></figure><figure class="down"></figure></div>\n' + '        </article>\n' + '        <article class="conteinerSelect">\n' + '            <label for="harry">Harry</label>\n' + '            <select name="harry" id="harry" form="formFruits" class="selectFormFruits" >\n' + '                <option value="apple">Apple</option>\n' + '                <option value="orange">Orange</option>\n' + '                <option value="carrot">Carrot</option>\n' + '                <option value="cherry">Cherry</option>\n' + '            </select>\n' + '            <div class="upDown"><figure class="up" ></figure><figure class="down"></figure></div>\n' + '        </article>\n' + '        </div>\n' + '        <form id="formFruits" >\n' + '            <input type="submit" value="Save">\n' + '        </form>';

var fun701 = function fun701() {
    elWin.innerHTML = html701;
    var elSelect = document.querySelectorAll('.conteinerSelect'); //первый вариант
    var submit = document.querySelector('#formFruits');
    var i = 0;
    while (elSelect[i]) {
        elSelect[i].addEventListener('click', function (e) {
            if (e.target.classList.contains('up') || e.target.classList.contains('down')) {
                var first, last, next;
                first = e.target.parentNode.previousElementSibling.firstElementChild;
                last = e.target.parentNode.previousElementSibling.lastElementChild;
                next = first.nextElementSibling;
                if (e.target.classList.contains('up')) {
                    first.removeAttribute('selected', '');
                    e.target.parentNode.previousElementSibling.insertBefore(last, first);
                    last.setAttribute('selected', '');
                }
                if (e.target.classList.contains('down')) {
                    first.removeAttribute('selected', '');
                    e.target.parentNode.previousElementSibling.appendChild(first);
                    next.setAttribute('selected', '');
                }
            }
        });
        i++;
    }
    submit.addEventListener('submit', function (e) {
        var form = document.querySelectorAll('select');
        var i = 0;
        while (form[i]) {
            localStorage.setItem('' + form[i].getAttribute('name'), '' + form[i].value);
            i++;
        }
        e.preventDefault();
        alert('Ваш выбор сохранен!');
    });(function (element) {
        var i = 0,
            j = 0,
            name,
            value,
            select;
        var el = document.querySelectorAll(element);
        HTMLCollection.prototype.filter = Array.prototype.filter;
        for (; i < el.length; i++) {
            name = el[i].getAttribute('name');
            value = localStorage.getItem(name);
            select = el[i].children.filter(function (el) {
                return el.getAttribute('value') == value;
            });
            select[0].setAttribute('selected', '');
        }
    })('.selectFormFruits');
};

TextWindows[701] = new Dz(html701, js701, win701, fun701);
////// End 7-01


///// Begin 7-02
var win702 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E (\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F Promise), \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043E\u0442\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435.<br>\nfunction delay(ms){ /* \u0432\u0430\u0448 \u043A\u043E\u0434 \u0442\u0443\u0442 */ }<br>\nfunction doStuff() { console.log(\'\u0410 \u0432\u043E\u0442 \u0438 \u044F!\'); }<br>\ndelay(2000).then(doStuff);<br>\n \u0415\u0441\u043B\u0438 \u0432 delay \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043B\u043E\u0441\u044C \u0447\u0438\u0441\u043B\u043E, \u0442\u043E \u0434\u0435\u043B\u0430\u0435\u043C \u0441\u0432\u043E\u044E \u043E\u0448\u0438\u0431\u043A\u0443, \u043D\u0430\u043Fs\u0440\u0438\u043C\u0435\u0440 "Please specify duration".<br>\n \u0415\u0441\u043B\u0438 \u0432 delay \u043F\u0435\u0440\u0435\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0435 \u0447\u0438\u0441\u043B\u043E, \u0442\u043E \u0434\u0435\u043B\u0430\u0435\u043C \u0441\u0432\u043E\u044E \u043E\u0448\u0438\u0431\u043A\u0443, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "Duration is required to be a number".<br>';

var js702 = 'var log;\nelWin.innerHTML=\'html702\';\nlog(document.querySelectorAll(\'.promis\')[0]);\nfunction doStuff() { document.querySelectorAll(\'.promis\')[1].textContent=\'<\'img \'src=\'https://i.gifer.com/4dlj.gif\'>\' }\nvar delay=function (ms) {\n    ms&&( document.querySelectorAll(\'.promis\')[0].textContent=\'\u042F \u043F\u043E\u044F\u0432\u043B\u044E\u0441\u044C \u0447\u0435\u0440\u0435\u0437 \'+(ms/1000)+\' \u0441\u0435\u043A\u0443\u043D\u0434\u044B\');\n    if(typeof ms==\'number\'){\n    }\n    var tr= new Promise(function (resolve, reject) {\n        if(typeof ms==\'number\'){\n            setTimeout( resolve, ms) ;\n        }\n        else{\n            reject(ms)\n        }\n    });\n    return tr;\n};\n\ndelay(2000).then(doStuff).catch((r)=>log(\'Please enter a valid delay. You entered: \'+r));';

var html702 = '<div class="promis"></div><div class="promis"></div>';

var fun702 = function fun702() {
    var log;
    elWin.innerHTML = html702;

    function doStuff() {
        document.querySelectorAll('.promis')[1].innerHTML = '<img src="https://i.gifer.com/4dlj.gif">';
    }
    var delay = function delay(ms) {
        ms && (document.querySelectorAll('.promis')[0].textContent = 'Я появлюсь через ' + ms / 1000 + ' секунды');
        if (typeof ms == 'number') {}
        var tr = new Promise(function (resolve, reject) {
            if (typeof ms == 'number') {
                setTimeout(resolve, ms);
            } else {
                reject(ms);
            }
        });
        return tr;
    };

    delay(4000).then(doStuff).catch(function (r) {
        return log('Please enter a valid delay. You entered: ' + r);
    });
};

TextWindows[702] = new Dz(html702, js702, win702, fun702);
////// End 7-02


//
// 3.
// Переписать поиск по wiki, используя Promise.

///// Begin 7-03
var win703 = '\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0438\u0441\u043A \u043F\u043E wiki, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F Promise.';

var js703 = 'textPressAjax.addEventListener(\'focus\', function (e) {\n    if (e.target.value == \'\u041F\u043E\u0438\u0441\u043A...\') {\n        e.target.value = \'\';\n    }\n})\ntextPressAjax.addEventListener(\'blur\', function (e) {\n    setTimeout(remuveDom, 500);\n})\n\n\nfunction search(time) {\n        var seachText, spanPressAjax;\n    if (conteinerAjax.childElementCount != 1) {\n        remuveDom()\n    }\n\n    var params = {\n        action: \'opensearch\',\n        origin: \'*\',\n        format: \'json\',\n        search: \'\'\n    };\n    params.search = textPressAjax.value;\n    var body = Object.keys(params)\n        .map(function (prop) {\n            return prop + \'=\' + params[prop];\n        })\n        .join(\'&\');\n    return new Promise(function (resolve, reject) {\n\n        var apiUrl = \'https://ru.wikipedia.org/w/api.php\';\n        var http = new XMLHttpRequest();\n        http.open(\'POST\', apiUrl);\n\n        http.addEventListener(\'readystatechange\', function () {\n            if (this.readyState == 4) {\n                seachText = JSON.parse(this.responseText);\n                this.status == 200?resolve(seachText):reject(\'Error\');\n            }\n        });\n        http.send(body);\n    });\n\n}\nvar time;\ntextPressAjax.addEventListener(\'input\', ()=>{\n    search().then((data)=>{\n        time && clearTimeout(time);\n        time = setTimeout( ()=>{\n            for (var i = 0; i < data[1].length && i < 10; i++) {\n\n                var spanPressAjax = document.createElement(\'span\');\n                spanPressAjax.classList.add(\'ajax__text\');\n                spanPressAjax.innerHTML = `<a href="${data[3][i]}" target="_blank">${data[1][i]}</a>`;\n                conteinerAjax.appendChild(spanPressAjax);\n            }\n        }  , 500,[data]);\n    })\n\n});\n\n\n\nfunction remuveDom() {\n    while (conteinerAjax.childElementCount != 1) {\n        conteinerAjax.lastElementChild.remove()\n    }\n}\n';

var html703 = '';

var fun703 = function fun703() {
    elWin.innerHTML = html703;
    var conteinerAjax = document.createElement('div');
    var textPressAjax = document.createElement('input');
    conteinerAjax.classList.add('ajax');
    textPressAjax.setAttribute('id', 'textPressAjax');
    textPressAjax.classList.add('ajax__search');
    textPressAjax.setAttribute('value', 'Поиск...');
    textPressAjax.maxLength = '20';
    elWin.appendChild(conteinerAjax);
    conteinerAjax.appendChild(textPressAjax);
    textPressAjax.addEventListener('focus', function (e) {
        if (e.target.value == 'Поиск...') {
            e.target.value = '';
        }
    });
    textPressAjax.addEventListener('blur', function (e) {
        setTimeout(remuveDom, 500);
    });

    function search(time) {
        var seachText, spanPressAjax;
        if (conteinerAjax.childElementCount != 1) {
            remuveDom();
        }

        var params = {
            action: 'opensearch',
            origin: '*',
            format: 'json',
            search: ''
        };
        params.search = textPressAjax.value;
        var body = Object.keys(params).map(function (prop) {
            return prop + '=' + params[prop];
        }).join('&');
        return new Promise(function (resolve, reject) {

            var apiUrl = 'https://ru.wikipedia.org/w/api.php';
            var http = new XMLHttpRequest();
            http.open('POST', apiUrl);

            http.addEventListener('readystatechange', function () {
                if (this.readyState == 4) {
                    seachText = JSON.parse(this.responseText);
                    this.status == 200 ? resolve(seachText) : reject('Error');
                }
            });
            http.send(body);
        });
    }
    var time;
    textPressAjax.addEventListener('input', function () {
        search().then(function (data) {
            time && clearTimeout(time);
            time = setTimeout(function () {
                for (var i = 0; i < data[1].length && i < 10; i++) {

                    var spanPressAjax = document.createElement('span');
                    spanPressAjax.classList.add('ajax__text');
                    spanPressAjax.innerHTML = '<a href="' + data[3][i] + '" target="_blank">' + data[1][i] + '</a>';
                    conteinerAjax.appendChild(spanPressAjax);
                }
            }, 600, [data]);
        });
    });

    function remuveDom() {
        while (conteinerAjax.childElementCount != 1) {
            conteinerAjax.lastElementChild.remove();
        }
    }
};

TextWindows[703] = new Dz(html703, js703, win703, fun703);
////// End 7-03