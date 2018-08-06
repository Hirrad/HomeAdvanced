///// Begin 4-05
var win405=`5. (циклы)<br>
- При помощи цикла for выведите чётные числа от 2 до 10.<br>`;

var js405=`for(var i=2; i<=10; i++){
    var elCreate =document.createElement('p');
    elCreate.textContent=i;
    elWin.appendChild(elCreate);
}`;

var html405='';

var fun405 = function(){
    elWin.innerHTML='';
    for(var i=2; i<=10; i++){
        var elCreate =document.createElement('p');
        elCreate.textContent=i;
        elWin.appendChild(elCreate);
    }
};

TextWindows[405]=new Dz(html405,js405,win405,fun405);
///// End 4-05
