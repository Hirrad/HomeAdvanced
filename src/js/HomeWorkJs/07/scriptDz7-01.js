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


let win701=`Сделать форму с селектами (например, такую http://take.ms/OLk4v).<br>
 При сохранении формы данные должны записываться в localStorage.<br>
  Форма отправляться не должна.<br>
 После обновления страницы элементы должны быть выбраны те, которые сохранялись.<br>`;

let js701='var elSelect=document.querySelectorAll(\'.conteinerSelect\'); //первый вариант\n' +
    '    var submit=document.querySelector(\'#formFruits\');\n' +
    '    var i=0;\n' +
    '    while(elSelect[i]){\n' +
    '        elSelect[i].addEventListener(\'click\',function (e) {\n' +
    '            if(e.target.classList.contains(\'up\')||e.target.classList.contains(\'down\'))\n' +
    '            {\n' +
    '                var first, last, next;\n' +
    '                first = e.target.parentNode.previousElementSibling.firstElementChild;\n' +
    '                last = e.target.parentNode.previousElementSibling.lastElementChild;\n' +
    '                next = first.nextElementSibling;\n' +
    '                if (e.target.classList.contains(\'up\')) {\n' +
    '                    first.removeAttribute(\'selected\', \'\');\n' +
    '                    e.target.parentNode.previousElementSibling.insertBefore(last, first);\n' +
    '                    last.setAttribute(\'selected\', \'\');\n' +
    '                }\n' +
    '                if (e.target.classList.contains(\'down\')) {\n' +
    '                    first.removeAttribute(\'selected\', \'\');\n' +
    '                    e.target.parentNode.previousElementSibling.appendChild(first);\n' +
    '                    next.setAttribute(\'selected\', \'\');\n' +
    '                }\n' +
    '            }\n' +
    '        });\n' +
    '        i++;\n' +
    '    }\n' +
    '    submit.addEventListener(\'submit\',function (e) {\n' +
    '        var form=document.querySelectorAll(\'select\');\n' +
    '        var i=0;\n' +
    '        while(form[i]){\n' +
    '            localStorage.setItem(`${form[i].getAttribute(\'name\')}`, `${form[i].value}`);\n' +
    '            i++;\n' +
    '        }\n' +
    '        e.preventDefault();\n' +
    '        alert(\'Ваш выбор сохранен!\')\n' +
    '    })\n' +
    '    ;(function (element){\n' +
    '        var i=0,j=0,name, value, select;\n' +
    '        var el=document.querySelectorAll(element);\n' +
    '        HTMLCollection.prototype.filter=Array.prototype.filter;\n' +
    '        for(;i<el.length;i++){\n' +
    '            name=el[i].getAttribute(\'name\');\n' +
    '            value=localStorage.getItem(name);\n' +
    '            select=el[i].children.filter(function (el){return el.getAttribute(\'value\')==value})\n' +
    '            select[0].setAttribute(\'selected\',\'\');\n' +
    '        }\n' +
    '    })(\'.selectFormFruits\');';

let html701='<div class="selectEvent">\n'+
    '        <article class="conteinerSelect">\n' +
    '            <label for="andy">Andy</label>\n' +
    '            <select name="andy" id="andy" form="formFruits" class="selectFormFruits">\n' +
    '                <option value="apple">Apple</option>\n' +
    '                <option value="orange">Orange</option>\n' +
    '                <option value="carrot">Carrot</option>\n' +
    '                <option value="cherry">Cherry</option>\n' +
    '            </select>\n' +
    '            <div class="upDown"><figure class="up" ></figure><figure class="down"></figure></div>\n' +
    '        </article>\n' +
    '        <article class="conteinerSelect">\n' +
    '            <label for="harry">Harry</label>\n' +
    '            <select name="harry" id="harry" form="formFruits" class="selectFormFruits" >\n' +
    '                <option value="apple">Apple</option>\n' +
    '                <option value="orange">Orange</option>\n' +
    '                <option value="carrot">Carrot</option>\n' +
    '                <option value="cherry">Cherry</option>\n' +
    '            </select>\n' +
    '            <div class="upDown"><figure class="up" ></figure><figure class="down"></figure></div>\n' +
    '        </article>\n' +
    '        </div>\n' +
    '        <form id="formFruits" >\n' +
    '            <input type="submit" value="Save">\n' +
    '        </form>';

let fun701 = function(){
    elWin.innerHTML=html701;
    var elSelect=document.querySelectorAll('.conteinerSelect'); //первый вариант
    var submit=document.querySelector('#formFruits');
    var i=0;
    while(elSelect[i]){
        elSelect[i].addEventListener('click',function (e) {
            if(e.target.classList.contains('up')||e.target.classList.contains('down'))
            {
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
    submit.addEventListener('submit',function (e) {
        var form=document.querySelectorAll('select');
        var i=0;
        while(form[i]){
            localStorage.setItem(`${form[i].getAttribute('name')}`, `${form[i].value}`);
            i++;
        }
        e.preventDefault();
        alert('Ваш выбор сохранен!')
    })
    ;(function (element){
        var i=0,j=0,name, value, select;
        var el=document.querySelectorAll(element);
        HTMLCollection.prototype.filter=Array.prototype.filter;
        for(;i<el.length;i++){
            name=el[i].getAttribute('name');
            value=localStorage.getItem(name);
            select=el[i].children.filter(function (el){return el.getAttribute('value')==value})
            select[0].setAttribute('selected','');
        }
    })('.selectFormFruits');
};

TextWindows[701]=new Dz(html701,js701,win701,fun701);
////// End 7-01



