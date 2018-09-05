///// Begin 4-01
let win401=`1. (переменные)<br>
- Объявите две переменные: admin и name.<br>
- Запишите в name строку "Harry".<br>
- Скопируйте значение из name в admin.<br>
- Выведите admin (должно вывести "Harry").<br>`;

let js401=`var admin, name;
name="Harry";
admin=name;
console.log(admin);`;

let html401='';

let fun401 = function(){
    elWin.innerHTML='';
    var admin, name;
    name="Harry";
    admin=name;
    console.log(admin);
};

TextWindows[401]=new Dz(html401,js401,win401,fun401);
////// End 4-01

