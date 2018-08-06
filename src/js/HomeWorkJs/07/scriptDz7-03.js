//
// 3.
// Переписать поиск по wiki, используя Promise.

///// Begin 7-03
let win703 = `Переписать поиск по wiki, используя Promise.`;

let js703 = `textPressAjax.addEventListener('focus', function (e) {
    if (e.target.value == 'Поиск...') {
        e.target.value = '';
    }
})
textPressAjax.addEventListener('blur', function (e) {
    setTimeout(remuveDom, 500);
})


function search(time) {
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

        var apiUrl = 'https://ru.wikipedia.org/w/api.php';
        var http = new XMLHttpRequest();
        http.open('POST', apiUrl);

        http.addEventListener('readystatechange', function () {
            if (this.readyState == 4) {
                seachText = JSON.parse(this.responseText);
                this.status == 200?resolve(seachText):reject('Error');
            }
        });
        http.send(body);
    });

}
var time;
textPressAjax.addEventListener('input', ()=>{
    search().then((data)=>{
        time && clearTimeout(time);
        time = setTimeout( ()=>{
            for (var i = 0; i < data[1].length && i < 10; i++) {

                var spanPressAjax = document.createElement('span');
                spanPressAjax.classList.add('ajax__text');
                spanPressAjax.innerHTML = \`<a href="\${data[3][i]}" target="_blank">\${data[1][i]}</a>\`;
                conteinerAjax.appendChild(spanPressAjax);
            }
        }  , 500,[data]);
    })

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


    function search(time) {
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

            var apiUrl = 'https://ru.wikipedia.org/w/api.php';
            var http = new XMLHttpRequest();
            http.open('POST', apiUrl);

            http.addEventListener('readystatechange', function () {
                if (this.readyState == 4) {
                    seachText = JSON.parse(this.responseText);
                    this.status == 200?resolve(seachText):reject('Error');
                }
            });
            http.send(body);
        });

    }
    var time;
    textPressAjax.addEventListener('input', ()=>{
        search().then((data)=>{
            time && clearTimeout(time);
            time = setTimeout( ()=>{
                for (var i = 0; i < data[1].length && i < 10; i++) {

                    var spanPressAjax = document.createElement('span');
                    spanPressAjax.classList.add('ajax__text');
                    spanPressAjax.innerHTML = `<a href="${data[3][i]}" target="_blank">${data[1][i]}</a>`;
                    conteinerAjax.appendChild(spanPressAjax);
                }
            }  , 600,[data]);
        })

    });



    function remuveDom() {
        while (conteinerAjax.childElementCount != 1) {
            conteinerAjax.lastElementChild.remove()
        }
    }

};

TextWindows[703] = new Dz(html703, js703, win703, fun703);
////// End 7-03
