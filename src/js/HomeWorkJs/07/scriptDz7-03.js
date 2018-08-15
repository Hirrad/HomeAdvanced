///// Begin 7-03
let win703 = `Переписать поиск по wiki, используя Promise.`;

let js703 = `let conteinerAjax = document.createElement('div');
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

        return new Promise(function (resolve, reject) {

            if (body.search != '') {
                time && clearTimeout(time);
                time = setTimeout(resolve, 500,body)
            }
            else {
                reject('Something went wrong!')
            }
        });

    }

    var time;
    textPressAjax.addEventListener('input', () => {

        search().then((body) => {
            // log(body);
            var apiUrl = 'https://ru.wikipedia.org/w/api.php';
            var http = new XMLHttpRequest();
            http.open('POST', apiUrl);
            http.addEventListener('readystatechange', function () {

                if (this.readyState == 4) {
                    var seachText = JSON.parse(this.responseText);
                    if (this.status == 200) {
                        for (var i = 0; i < seachText[1].length && i < 10; i++) {

                            var spanPressAjax = document.createElement('span');
                            spanPressAjax.classList.add('ajax__text');
                            spanPressAjax.innerHTML = \`<a href="\${seachText[3][i]}" target="_blank">\${seachText[1][i]}</a>\`;
                            conteinerAjax.appendChild(spanPressAjax);
                        }
                    }
                }
            });
            http.send(body);
        });

    });


    function remuveDom() {
        while (conteinerAjax.childElementCount != 1) {
            conteinerAjax.lastElementChild.remove()
        }
    }
`;

let html703 = '';

let fun703 = function () {
    elWin.innerHTML = html703;
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

        return new Promise(function (resolve, reject) {

            if (body.search != '') {
                time && clearTimeout(time);
                time = setTimeout(resolve, 500,body)
            }
            else {
                reject('Something went wrong!')
            }
        });

    }

    var time;
    textPressAjax.addEventListener('input', () => {

        search().then((body) => {
            // log(body);
            var apiUrl = 'https://ru.wikipedia.org/w/api.php';
            var http = new XMLHttpRequest();
            http.open('POST', apiUrl);
            http.addEventListener('readystatechange', function () {

                if (this.readyState == 4) {
                    var seachText = JSON.parse(this.responseText);
                    if (this.status == 200) {
                        for (var i = 0; i < seachText[1].length && i < 10; i++) {

                            var spanPressAjax = document.createElement('span');
                            spanPressAjax.classList.add('ajax__text');
                            spanPressAjax.innerHTML = `<a href="${seachText[3][i]}" target="_blank">${seachText[1][i]}</a>`;
                            conteinerAjax.appendChild(spanPressAjax);
                        }
                    }
                }
            });
            http.send(body);
        });

    });


    function remuveDom() {
        while (conteinerAjax.childElementCount != 1) {
            conteinerAjax.lastElementChild.remove()
        }
    }

}

TextWindows[703] = new Dz(html703, js703, win703, fun703);
////// End 7-03



