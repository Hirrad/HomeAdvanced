'use strict';

// var d = document;
// var btn = document.querySelector('.btn');
//
// btn.addEventListener('click', e => console.log('click 1'));
//
// btn.addEventListener('click', e => console.log('click 2'), true);
//
// btn.onclick = e => console.log('click 3');
//

// 1. (переменные)
// - Объявите две переменные: admin и name.
// - Запишите в name строку "Harry".
// - Скопируйте значение из name в admin.
// - Выведите admin (должно вывести "Harry").

// var admin, name;
// name="Harry";
// admin=name;
// console.log(admin);

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

// 3. (if/else)
//     - Объявите переменную с каким-то числом.
// - Используя конструкцию if..else, напишите код,
//     который выводит в консоль:
//     • 1, если значение больше нуля,
//   • -1, если значение меньше нуля,
//   • 0, если значение равно нулю.
//
// var textNumber=document.getElementById('textNumber');
// var textNumberPrevious= textNumber.previousElementSibling;
// textNumberPrevious.textContent='Введите число и нажмите Enter';
// var elDiv=document.createElement('b');
//
//
//
// document.body.insertBefore(elDiv, textNumber );
// console.log(textNumberPrevious);
//
//
//
//
// function Num(e){
//     var text = this.previousElementSibling;
//
//
//     if(isNaN(this.value)&&e.keyCode=='13'){
//         text.textContent='Вы ввели не число! Введите число!';
//     }
//     else if(this.value && e.keyCode=='13'){
//
//         switch(true) {
//             case(this.value > 0)  :   text.textContent = "Положительное"; break;
//             case(this.value < 0)  :   text.textContent = "Отрицательное"; break;
//             case(this.value == 0) :   text.textContent= "Равно нулю";
//         }
//     }
// e/
// }
// textNumber.addEventListener('keypress', Num, fese);


//4.Switch не до eланая
// function choice(element) {
//     switch (element) {
//         case '0': return 'Ноль'; break;
//         case '1': return 'Один'; break;
//         case '2': return 'Два'; break;
//         case '3': return 'Три'; break;
//         case '4': return 'Четыри'; break;
//         case '5': return 'Пять'; break;
//         case '6': return 'Шесть'; break;
//         case '7': return 'Семь'; break;
//         case '8': return 'Восемь'; break;
//         case '9': return 'Девять';
//     }
// return units;
//
// }
// choice(4);
// console.log(units);
// // var textNumber=document.geeElementById('textNumber');
// function numberWords(e){
//     var units, dicker, oneDozen;
//     console.log(this.value.length);
//     elPrevious=this.previousElementSibling;
//     console.log(this.value[0], this.value[1]);
//     if(e.target.value.length>2) {
//         this.value='';
//
//
//         elPrevious.textContent='Вы должны ввести не больше 2 цифр!';
//
//
//     }
//     else if(e.keyCode='13' && this.value[1]==undefined){
//         // console.log('Эденицы первый иф '+this.value[0]);
//         choice(this.value[0]);
//         console.log('получилось?' +units);
//
//     }
// else if (e.keyCode='13' && this.value[0]=='1' && this.value.length=='2') {
//     switch (this.value) {
//         case '10':
//             return oneDozen = 'Десять';
//             break;
//         case '11':
//             return oneDozen = 'Одинадцать';
//             break;
//         case '12':
//             return oneDozen = 'Двенадцать';
//             break;
//         case '13':
//             return oneDozen = 'Тринадцать';
//             break;
//         case '14':
//             return oneDozen = 'Четырнадцать';
//             break;
//         case '15':
//             return oneDozen = 'Пятьнадцать';
//             break;
//         case '16':
//             return oneDozen = 'Шестьнадцать';
//             break;
//         case '17':
//             return oneDozen = 'Семьнадцать';
//             break;
//         case '18':
//             return oneDozen = 'Восемьнадцать';
//             break;
//         case '19':
//             return oneDozen = 'Девятьнадцать';
//
//     }
// }
// else if (e.keyCode='13' && this.value[0]!=='1' && this.value.length=='2'){
//         switch (this.value) {
//             case '2': return dicker='Двадцать'; break;
//             case '3': return dicker='Тридцать'; break;
//             case '4': return dicker='Сорок'; break;
//             case '5': return dicker='пятьдесят'; break;
//             case '6': return dicker='Шестьдесят'; break;
//             case '7': return dicker='Семьдесят'; break;
//             case '8': return dicker='Восемьдесят'; break;
//             case '9': return dicker='Девяность';
//
//
//         }
// }


//     console.log(`эденицы = ${units} десятки = ${dicker} от 10 до 19=${oneDozen}`);
// }
// textNumber.addEventListener('keypress', numberWords, false);

//5.Цыклы
// var el=document.getElementsByTagName('body');
//
// console.log(el);
// for(var i=2; i<=10; i++){
//     var elCreate =document.createElement('p');
//     elCreate.textContent=i;
//     el[0].appendChild(elCreate);
// }
// 6.Цыклы

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

// 7.Цыклы
// var el=document.getElementsByTagName('label');
// // el[0].textContent='test';
// // console.log(el[0]);
// function isSipmle(num) {
//     text=`Число ${num} является простым`;
//    out: for (num, i=2; i<num; i++){
//        if(num%i==0) text=`Число ${num} является составным`;
//         continue out;
//    }
//    return text;
// }
// console.log(isSipmle(9951));
// console.log(isSipmle(21))

// 8. (объекты)
// Создайте объект пользователя со свойствами age, isAdmin и методом grant.
//     Вызов метода grant должен проверять возраст и:
//     - если он больше 18, переключать isAdmin в true
// - если он меньше 18, переключать isAdmin в false

// function User (age) {
//
//
//     this.age= age;
//     this.isAdmin= false;
//     this.grant = () => (this.age>18)?(this.isAdmin = true):(this.isAdmin = false);
//
// }
//
// var us=new User(19);
// console.log(us);
// us.grant();
// console.log(us);

// 9. (цепные вызовы)
// Напишите цепочку вызовов, которая превращает одну строку в другую:
//     "Some time ago I was here" --> "Yesterday I was here and there"
// "10, 20, 30, 40" --> "10; 20; 30; 40"

// var stringEl='Some time ago I was here';
// replaceStringEl=stringEl.replace('Some time ago','Yesterday').concat(' and there');
// console.log(replaceStringEl);

// 10. (массивы)
// Создайте массив, сделайте его копию и отсортируйте копию.
//     var nums, nums2;
// nums = [6, 4, 9, 3, 4, 2];
// // ваш код
// console.log(nums);  // [6, 4, 9, 3, 5, 2]
// console.log(nums2); // [2, 3, 4, 5, 6, 9]

// var nums = [6, 4, 9, 3, 4, 2];
// nums.splice(4,1,5);
// console.log(nums);
// console.log(nums.sort((a,b)=>a-b));

// 11. (функции/строки)
// function addClass(string, add){
//
//     var stringEl=string.split(' ');
//     if(string.split(' ').some(function (value) {
//         return value==add;
//
//     })){}
//     else{
//         stringEl.push(add);
//     }
//     string=stringEl.join(' ');
//     return string;
// }
//
// function removeClass(string, add){
// var stringEl=string.split(' ').filter(function (value) {
//
//
//         return  value!=add;
//     });
//     string=stringEl.join(' ');
//     return string;
//
// }
// function toggleClass(string,add){
//     var stringEl=string.split(' ').filter(function (value) {
//
//
//         return  value!=add;
//     });
//
//     if(stringEl.length==string.split(' ').length) stringEl.push(add);
//     string=stringEl.join(' ');
//     return string;
// }
//
// var str = "menu top green";
//
// str = addClass(str, 'new');
// str = addClass(str, 'top');
// str = addClass(str, 'me');
// //
// console.log(str); // "menu top green new me"
// //
// str = removeClass(str, 'to');
// str = removeClass(str, 'new');
// console.log(str);
// str = toggleClass(str, 'green');
// str = toggleClass(str, 'red');
//
// console.log(str); // "menu top me red"


// 12. (функции/строки)
// function toCamelCase(string){
// var nam,i=0,replaceString;//инициализация переменых
//
//         while (true){//начинаем цыкл без условия
//             num=string.indexOf('-',i);// если дефис есть выдас индекс его, если нет -1
//             if(num==-1) break;
//             replaceString=string.split('');
//             i=num+1;
//            replaceString.splice(num,2,replaceString[i].toUpperCase());//удаляем и заменяем верхним регистром
//            string=replaceString.join('');
//         }
//
// return string;
// }
//
//
// console.log(toCamelCase("background-color")); // 'backgroundColor';
// console.log(toCamelCase("list-style-image")); // 'listStyleImage';
// console.log(toCamelCase("-webkit-transition")); // 'WebkitTransition';
//
// 13. (объекты/массивы)
// var names, total, sorted;
// var users = [
//     {name: "Alex", cash: 43},
//     {name: "John", cash: 274},
//     {name: "Carl", cash: 82},
//     {name: "Bill", cash: 14}
// ];
//
// /* some magic */
//
//
// names = (function (object) {
//     var ob = new Array();
//     for (var key in object) {
//         ob.push(object[key].name);
//     }
//     return ob;
// })(users);
//
// total = (function (object) {
//     var ob = 0;
//     for (var key in object) {
//         ob += object[key].cash;
//     }
//     return ob;
// })(users);
//
// sorted = (function (object) {
//     var usersClon = [];
//     for (var key in object) {
//         usersClon[key] = object[key];
//     }
//
//    return usersClon.sort((a, b) => a.cash - b.cash);
//
// })(users);
//
//
// console.log(names); // ["Alex", "John", "Carl", "Bill"]
// console.log(total); // 413
// console.log(sorted); // [{name:"Bill",cash:14},{name:"Alex",cash:43},{name:"Carl",cash:82},{name:"John",cash:274}]
// console.log(users); // [{name:"Alex",cash:43},{name:"John",cash:274},{name:"Carl",cash:82},{name:"Bill",cash:14}]

// 14. (Math)
// Напишите функцию getRandom, которая принимает параметры min и max.
//     Функция должна возвращать случайное целое число от min до max.
// function getRandom(min, max) {
//     return Math.floor(Math.random() * ((max+1) - min)) + min;
// }
// console.log(getRandom(2,17));

// 15. (parseInt)
// Сделать функцию для конвертирования цвета,
//     которая принимает цвет в формате хекс и возвращает масив из 3 значений.
//     function hexToRGB("#ff00FF"); // [255, 0, 255]
// function hexToRGB("#ff00447733"); // null
// Можно сделать функцию и для обратной конвертации.

//
// function hexToRgb(color) {
//     color = color.replace('#', '').split('');
//     var colorArray = [], colorRgb;
//
//     if (color.length == 3) {
//         for (var i = 0; i < color.length; i++) {
//             colorArray.push(parseInt(color[i], 16));
//         }
//         return colorArray;
//     }
//     else if (color.length == 6) {
//
//         for (var i = 0; i < color.length; i++) {
//             colorArray.push(parseInt(color[i] + color[i + 1], 16));
//             ++i;
//         }
//
//         return colorArray;
//     }
//     else {
//         return 'Вы ввели некорректное значение!';
//     }
// }
//
// console.log(hexToRgb("#ff00FF"));
// console.log(hexToRgb("#ff00447733"));
// console.log(hexToRgb("#ed4c4c"));

// 16. (events/DOM)
// Сделать кнопку. По клику на эту кнопку менять текст кнопки (btn.innerText) так,
//     чтоб на кнопке было написано количество кликов.
//     То есть, кнопка будет менять свой текст так:
//     Начальный текст: "Кнопка"
// Кликнули один раз: "Кликов: 1"
// Кликнули второй раз: "Кликов: 2"
// И так далее...
//
// var button = document.querySelector('.button');
//
// var clickButton = function () {
//     var count = 0;
//     return function () {
//         return count += 1;
//     }
//
// }
// var count = clickButton();
//
// if (button.addEventListener) {
//     button.addEventListener('click', function (e) {
//         e.target.textContent = `Кликов: ${count()}`;
//     });
// } else {
//     button.attachEvent('onclick', function(e) {
//         e.srcElement.textContent = `Кликов: ${count()}`;
//     });
// }

// 17. (events/scroll)
// Сделать страницу текста, например такую:
//     ((h2>lorem5)+((p>lorem100)*4)+button>lorem1)*5
//
// Самая нижняя кнопка должна плавно скролить в самый верх страницы.
//     Остальные кнопки должны скролить к заголовку, который за кнопкой.
//     Для плавного скрола понадобится setInterval.
//     Изменить позицию скрола - window.scrollTo(x, y).
//     window.scrollX и window.scrollY хранят текущую позицию.
//     Находить элементы на странице мы научились в уроке.
//     Взять позицию элемента относительно страницы можно так:
//     el.getBoundingClientRect()
//
//
// 18. (events)
// Сделать форму, в которой будет чекбокс "У меня есть образование".
//     Когда он включается, то должно появлять поле для ввода образование.
//     Когда он выключается, то это поле должно прятаться.
//     Значение чекбокса проверяется через el.checked
//
// var textEducation, educationOnOff;
// educationOnOff=document.querySelector('#educationOnOff');
// textEducation=document.querySelector('#textEducation');
// educationOnOff.addEventListener('change', function (e){
//
//     console
//     if(e.target.checked){
//         textEducation.style.display='inline';
//         textEducation.value='';
//
//     }
//     else{
//         textEducation.style.display='none';
//     }
// } );
//
// 19. (events)
// Сделать какой-то header с кнопкой "Обратный звонок".
//     По нажатию на кнопку должен появляться выпадающий блок,
//     в котором будет поле для ввода телефона и кнопка "Да!".
//     По нажатию но кнопку проверяем значение поля (el.value)
// Если оно пустое, то ничего не делаем.
//     Если оно не пустое, то выводим значение в консоль и прячем блок.
//     Клик за пределами блока должен прятать блок.

var button, educationOnOff, phone;
button = document.querySelector('#buttonConteiner__button');
educationOnOff = document.querySelector('.formOnOff');
phone = document.querySelector('#phone');
button.addEventListener('click', function (e) {

    educationOnOff.style.display = 'inline';
});
educationOnOff.addEventListener('submit', function (e) {

    e.preventDefault();

    console.log(phone.value);
    if (phone.value == 0) {
        alert('Вы не ввели телефонный номер!');
    } else {
        alert(phone.value);
        phone.value = '';
        educationOnOff.style.display = 'none';
    }
});
educationOnOff.firstElementChild.addEventListener('click', function (e) {
    // console.log(e.target.tagName);
    if (e.target.tagName == 'ARTICLE') {
        educationOnOff.style.display = 'none';
    }
});

//var inputForm= function () {
//   var form, article, section, label, inputPhone, inputButton;
console.log('Hello World');