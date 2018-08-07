// 6. (циклы)


///// Begin 4-06
var win406=`Натуральное число называется простым, если оно ни на что не делится, кроме себя и 1.<br>
Другими словами, число n простое, если при делении на любое число от 2 до n-1 есть остаток.<br>
    Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.<br>
P.S. Код также должен легко модифицироваться для любых других интервалов.<br>`;

let js406=`function simple(min,max) {

    var sim=[];
    out: for ( min; min <= max; min++) {

            for (devision = 2; devision < min; devision++) {
                if (min % devision == 0)
                {
                    continue out;
                }
            }
            sim.push(min);
            // alert( i ); // простое
        }

    return sim;
}
console.log(simple(2,10));`;

let html406='';

let fun406 = function(){
    elWin.innerHTML='';
    function simple(min,max) {

        var sim=[];
        out: for ( min; min <= max; min++) {

            for (devision = 2; devision < min; devision++) {
                if (min % devision == 0)
                {
                    continue out;
                }
            }
            sim.push(min);
            // alert( i ); // простое
        }

        return sim;
    }
    console.log(simple(2,10));
};

TextWindows[406]=new Dz(html406,js406,win406,fun406);
////// End 4-06

// elWin.innerHTML=`<p><label for="min">Введите минимальное число </label><input type="text" id="min"></p><p><label for="min">Введите максимальное число </label><input type="text" id="max"></p>`;
//
// var ell= document.getElementsByTagName("input");
// log( ell.getAttribute('id'));
// ell.addEventListener('input', (e)=>{
//     var max,min;
//     log(e.target);
//     if(e.target.getAttribute('id')=='min'){
//         min=e.target.value;
//     }
//     else{
//         max=e.target.value;
//     }
//
//     min&&max?simple(min,max):log('что то не так');
//     // log(e.target.value);
//     // // if()
// })
//
// function simple(min,max) {
//
//     var sim=[];
//     out: for ( min; min <= max; min++) {
//
//         for (var devision = 2; devision < min; devision++) {
//             if (min % devision == 0)
//             {
//                 continue out;
//             }
//         }
//         sim.push(min);
//         // alert( i ); // простое
//     }
//
//     return sim;
// }
// console.log(simple(2,10));


elWin.innerHTML='<pre><code data-language="js">def openFile(path):\n' +
    '    file = open(path, "r")\n' +
    '    content = file.read()\n' +
    '    file.close()\n' +
    '    return content</code></pre>'

