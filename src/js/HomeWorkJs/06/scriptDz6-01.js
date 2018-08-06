///// Begin 6-01
let win601 = `Сделать поле ввода и подписать на событие keydown, по которому нужно брать значение поля (напечатанный текст) и отправлять его в API Wiki.<br>

    Из ответа API нужно формировать список autocomplete и вставлять его как подсказку под полем ввода.<br>

    Выглядеть должно так: http://take.ms/m08P9<br>

     Клик на любой вариант должен открывать страницу в новой вкладке.<br>

    Напоминаю, что:<br>

- создать элемент можно командой var a = document.createElement('a')<br>

   - ссылку к элементу можно добавить командой a.href = "http://site.com"<br>

    - содержимое элементу можно добавить командой a.innerHTML = "Some text"<br>

  - чтоб открывало в новой вкладке, добавляем атрибут a.target = "_blank"<br>

    - вставить элемент в страницу можно командой<br>

document.querySelector('.results').appendChild(a)`;

let js601 = `let conteinerAjax = document.createElement('div');
let textPressAjax = document.createElement('input');
conteinerAjax.classList.add('ajax');
textPressAjax.setAttribute('id', 'textPressAjax');
textPressAjax.classList.add('ajax__search');
textPressAjax.setAttribute('value', 'Поиск...');
textPressAjax.maxLength='20';
elWin.appendChild(conteinerAjax);
console.log(textPressAjax);
conteinerAjax.appendChild(textPressAjax);
textPressAjax.addEventListener('focus', function (e) {
    if (e.target.value == 'Поиск...') {
        e.target.value = '';
    }
})
textPressAjax.addEventListener('blur', function (e) {
    setTimeout(remuveDom, 500);
})
textPressAjax.addEventListener('input', axajSearch);
function search() {
    var seachText, spanPressAjax;
    if (conteinerAjax.childElementCount != 1) {
        remuveDom()
    }
    var params = {
        action: 'opensearch',
        origin: '*',
        format: 'json',
        search: ''
    };
    params.search = textPressAjax.value;
    var body = Object.keys(params)
        .map(function (prop) {
            return prop + '=' + params[prop];
        })
        .join('&');
    var apiUrl = 'https://ru.wikipedia.org/w/api.php';
    var http = new XMLHttpRequest();
    http.open('POST', apiUrl);
    http.addEventListener('readystatechange', function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                seachText = JSON.parse(this.responseText);
                console.log(seachText.length);
                for (var i = 0; i < seachText[1].length && i < 10; i++) {
                    spanPressAjax = document.createElement('span');
                    spanPressAjax.classList.add('ajax__text');
                    spanPressAjax.innerHTML = \`<a href="\${seachText[3][i]}" target="_blank">\${seachText[1][i]}</a>\`;
                    conteinerAjax.appendChild(spanPressAjax);
                }
            }
        }
    })
    http.send(body);
}
var time;
function axajSearch() {
    time && clearTimeout(time);
    time=setTimeout(search,500);
}
function remuveDom() {
    while (conteinerAjax.childElementCount != 1) {
        conteinerAjax.lastElementChild.remove()
    }
}`;

let html601 = '';

let fun601 = function () {
    elWin.innerHTML = '';
    let conteinerAjax = document.createElement('div');
    let textPressAjax = document.createElement('input');

    conteinerAjax.classList.add('ajax');


    textPressAjax.setAttribute('id', 'textPressAjax');
    textPressAjax.classList.add('ajax__search');
    textPressAjax.setAttribute('value', 'Поиск...');
    textPressAjax.maxLength = '20';
    elWin.appendChild(conteinerAjax);

    conteinerAjax.appendChild(textPressAjax);

    textPressAjax.addEventListener('focus', function (e) {

        if (e.target.value == 'Поиск...') {
            e.target.value = '';
        }
    })

    textPressAjax.addEventListener('blur', function (e) {


        setTimeout(remuveDom, 500);

    })


    textPressAjax.addEventListener('input', axajSearch);


    function search() {
        var seachText, spanPressAjax;


        if (conteinerAjax.childElementCount != 1) {
            remuveDom()
        }
        var params = {
            action: 'opensearch',
            origin: '*',
            format: 'json',
            search: ''
        };
        params.search = textPressAjax.value;
        var body = Object.keys(params)
            .map(function (prop) {
                return prop + '=' + params[prop];
            })
            .join('&');
        var apiUrl = 'https://ru.wikipedia.org/w/api.php';
        var http = new XMLHttpRequest();
        http.open('POST', apiUrl);
        http.addEventListener('readystatechange', function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
// success callback
                    seachText = JSON.parse(this.responseText);
                    console.log(seachText.length);

                    for (var i = 0; i < seachText[1].length && i < 10; i++) {

                        spanPressAjax = document.createElement('span');
                        spanPressAjax.classList.add('ajax__text');
                        spanPressAjax.innerHTML = `<a href="${seachText[3][i]}" target="_blank">${seachText[1][i]}</a>`;
                        conteinerAjax.appendChild(spanPressAjax);
                    }


                }
            }
        })

        http.send(body);


    }

    var time;

    function axajSearch() {
        time && clearTimeout(time);
        time = setTimeout(search, 500);

    }

    function remuveDom() {
        while (conteinerAjax.childElementCount != 1) {
            conteinerAjax.lastElementChild.remove()
        }

    }
};

TextWindows[601] = new Dz(html601, js601, win601, fun601);
////// End 6-01

