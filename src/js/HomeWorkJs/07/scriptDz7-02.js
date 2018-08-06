///// Begin 7-02
let win702=`Сделать функцию (используя Promise), которая откладывает выполнение.<br>
function delay(ms){ /* ваш код тут */ }<br>
function doStuff() { console.log('А вот и я!'); }<br>
delay(2000).then(doStuff);<br>
 Если в delay не передалось число, то делаем свою ошибку, напsример "Please specify duration".<br>
 Если в delay передалось не число, то делаем свою ошибку, например "Duration is required to be a number".<br>`;

let js702=`var log;
elWin.innerHTML='html702';
log(document.querySelectorAll('.promis')[0]);
function doStuff() { document.querySelectorAll('.promis')[1].textContent='<'img 'src='https://i.gifer.com/4dlj.gif'>' }
var delay=function (ms) {
    ms&&( document.querySelectorAll('.promis')[0].textContent='Я появлюсь через '+(ms/1000)+' секунды');
    if(typeof ms=='number'){
    }
    var tr= new Promise(function (resolve, reject) {
        if(typeof ms=='number'){
            setTimeout( resolve, ms) ;
        }
        else{
            reject(ms)
        }
    });
    return tr;
};

delay(2000).then(doStuff).catch((r)=>log('Please enter a valid delay. You entered: '+r));`;

let html702='<div class="promis"></div><div class="promis"></div>';

let fun702 = function(){
    var log;
    elWin.innerHTML=html702;

    function doStuff() { document.querySelectorAll('.promis')[1].innerHTML='<img src="https://i.gifer.com/4dlj.gif">' }
    var delay=function (ms) {
        ms&&( document.querySelectorAll('.promis')[0].textContent='Я появлюсь через '+(ms/1000)+' секунды');
        if(typeof ms=='number'){
        }
        var tr= new Promise(function (resolve, reject) {
            if(typeof ms=='number'){
                setTimeout( resolve, ms) ;
            }
            else{
                reject(ms)
            }
        });
        return tr;
    };

    delay(4000).then(doStuff).catch((r)=>log('Please enter a valid delay. You entered: '+r));
};

TextWindows[702]=new Dz(html702,js702,win702,fun702);
////// End 7-02







