// 6. (циклы)
// Натуральное число называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, число n простое, если при делении на любое число от 2 до n-1 есть остаток.
//     Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

///// Begin 4-06
var win406=`1. (переменные)<br>
- Объявите две переменные: admin и name.<br>
- Запишите в name строку "Harry".<br>
- Скопируйте значение из name в admin.<br>
- Выведите admin (должно вывести "Harry").<br>`;

let js406=`var admin, name;
name="Harry";
admin=name;
console.log(admin);`;

let html406='';

let fun406 = function(){
    elWin.innerHTML='';
    var admin, name;
    name="Harry";
    admin=name;
    console.log(admin);
};

TextWindows[401]=new Dz(html401,js401,win401,fun401);
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