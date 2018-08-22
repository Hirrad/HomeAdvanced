// .

//
// })
// })


///// Begin 10-01
let win1001=`Сделать 2 страницы: index.html и offline.html<br>
Первая страница должна иметь textarea.<br>
    Если мы написали там что-то, то этот текст должен записываться в localStorage.<br>
    Если мы обновили страницу, то мы должны увидеть наш текст и мочь продолжить писать дальше.<br>
    Если мы отключили интернет, то должна показываться вторая страница, которая просто отображает текст (без textarea).<br>
document.querySelector('#task10').addEventListener('input',e=> {<br>
    // localStorage.setItem('textArea', '')<br>
    log(document.querySelector('#task10').value)<br>`;

let js1001=`var textArea10=document.querySelector('#task10');
    var imgElement=document.querySelector('body > section > main > section.conteinerWin__text > img');
    var textArea10duscribe =document.querySelector('body > section > main > section.conteinerWin__text > section > section:nth-child(2) > textarea');
    var setButtonTextArea=document.querySelector('body > section > main > section.conteinerWin__text > button');

//проверяем загрузилась ли картинка
    if(imgElement.complete && imgElement.naturalHeight !== 0){
        textArea10.value=!!localStorage.getItem('textArea')?localStorage.getItem('textArea'):'';
        setButtonTextArea.onclick=setTextAreaValue;
        window.onunload = setTextAreaValue;
    }

    else{
        textArea10duscribe.value=localStorage.getItem('textArea');
    }

//Вставляем данные из localSorage
    function setTextAreaValue() {
        localStorage.setItem('textArea',  document.querySelector('#task10').value)
    }`;

let html1001='<section class="blok10">\n' +
    '                <section class="twoBlock10">\n' +
    '                    <textarea name="task10" id="task10" cols="30" rows="10" autofocus></textarea>\n' +
    '\n' +
    '                </section>\n' +
    '                <section class="twoBlock10">\n' +
    '                    <textarea name="task10"  cols="30" rows="10" data-textarea10="area" disabled></textarea>\n' +
    '                </section>\n' +
    '\n' +
    '            </section>\n' +
    '            <button>Сохранить</button>\n' +
    '            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" class="noDisplay" alt="">';

let fun1001 = function(){
    elWin.innerHTML=html1001;
    var textArea10=document.querySelector('#task10');
    var imgElement=document.querySelector('body > section > main > section.conteinerWin__text > img');
    var textArea10duscribe =document.querySelector('body > section > main > section.conteinerWin__text > section > section:nth-child(2) > textarea');
    var setButtonTextArea=document.querySelector('body > section > main > section.conteinerWin__text > button');

//проверяем загрузилась ли картинка
    if(imgElement.complete && imgElement.naturalHeight !== 0){
        textArea10.value=!!localStorage.getItem('textArea')?localStorage.getItem('textArea'):'';
        setButtonTextArea.onclick=setTextAreaValue;
        window.onunload = setTextAreaValue;
    }

    else{
        textArea10duscribe.value=localStorage.getItem('textArea');
    }

//Вставляем данные из localSorage
    function setTextAreaValue() {
        localStorage.setItem('textArea',  document.querySelector('#task10').value)
    }
};

TextWindows[1001]=new Dz(html1001,js1001,win1001,fun1001);
////// End 10-01












// console.log('loading: ' + document.readyState);
//
//
//
// document.addEventListener('DOMContentLoaded', function() {
//
//     console.log('document@DOMContentLoaded: ' + document.readyState);
//
// });
//
// window.onload = function() {
//
//     console.log('window@load: ' + document.readyState);
//
// };
//
//
// function imgLoaded(imgElement) {
//     log( );
// }
//
