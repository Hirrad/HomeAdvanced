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