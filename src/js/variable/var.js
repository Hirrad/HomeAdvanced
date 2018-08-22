///////////////////// Beginning of variablesBe

let TextWindows= {}, elJs,elHtml, elWin, el,menuFirstLevel, jsText, htmlText,winText,elTask,winTask;


jsText='Тут будет js';
htmlText='Тут будет html';
winText='Тут будет Выводимая информация';
winTask='Задание';

el =document.querySelector('.menu__first-level').parentElement.children[1];
elJs=document.querySelector('.conteinerWin__flex__js');
// elHtml=document.querySelector('.conteinerWin__flex__html');
elHtml=document.querySelector('body > section > main > div > section.conteinerWin__flex__html > pre > code');
elWin=document.querySelector('.conteinerWin__text');
elTask=document.querySelector('.conteinerWin__task');

menuFirstLevel=document.querySelector('.menu__first-level');
elJs.innerHTML = jsText;
elHtml.innerHTML = htmlText;
// elWin.innerHTML = winText;
elTask.innerHTML=winTask;
//
/////////////////////End of variables