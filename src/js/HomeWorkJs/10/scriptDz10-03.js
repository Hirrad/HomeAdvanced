///// Begin 10-03
let win1003=`Сделать страницу (вот такую: http://take.ms/saNQe), которая будет добавлять персонажей.<br>
Первая и вторая галочка включают поля ввода для указания пользовательских настроек.<br>
Третья галочка не имеет дополнительного поля.<br>
Левый персонаж - это настройки по-умолчанию (в коде оно должно быть прототипом или фабрикой).<br>
То есть левый персонаж был добавлен с выключенными галочками, правый персонаж был добавлен с пользовательскими настройками.<br>
<br>
PS: постарайтесь написать свой код так, чтоб разбить всю логику на функции: выполняется одна функция,<br>
потом в конце своей работы вызывает другую функцию, в которую передает результаты, и т.д.<br>
Например:<br>
function handleAdd() {<br>
  /* вешается на клик */<br>
  /* собрали данные с полей в один объект options */<br>
  createCharacter(options);<br>
}<br>
function createCharacter(options) {<br>
  /* собирает элемент с использованием document.createElement */<br>
  addToPage(character);<br>
}
function addToPage(character) {<br>
  /* вставляет элемент в нужный блок */<br>
}<br>`;

let js1003=`// рисуем человечка CharInfoArray-обэкт с описанием, elDom -где рисовать
    function canvasChar(CharInfoArray, elDom) {
        var properties = CharInfoArray;
        if (elDom != undefined) {
            var el = document.querySelector(elDom)
            var ctx = el.getContext('2d');
            el.width = document.querySelector('.character').clientWidth;
            el.height = document.querySelector('.character').clientHeight;
        }
        else {
            var section, convas, elDivCanvas, Convas, ctx;
            section = document.createElement('section');
            section.classList.add('character');
            convas = document.createElement('canvas');
            convas.classList.add('canvasChar');
            convas.setAttribute('data-char', properties.charCount);
            elDivCanvas = document.querySelector('.showingCharacters');
            elDivCanvas.appendChild(section);
            section.appendChild(convas);
            convas = Array.prototype.slice.call(document.querySelectorAll('canvas'));
            Convas = convas.filter(value => value.dataset.char == properties.charCount);
            ctx = Convas[0].getContext('2d');
            Convas[0].width = document.querySelector('.character').clientWidth;
            Convas[0].height = document.querySelector('.character').clientHeight;
        }

        ctx.lineWidth = .2;
        ctx.strokeStyle = properties.colorPants;
        ctx.fillStyle = properties.colorPants;

// рисуем штаны
        ctx.beginPath();
        ctx.moveTo(20, 110);
        ctx.lineTo(70, 110);
        ctx.lineTo(70, 170);
        ctx.lineTo(50, 170);
        ctx.lineTo(50, 130);
        ctx.lineTo(40, 130);
        ctx.lineTo(40, 170);
        ctx.lineTo(20, 170);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // Рисуем руки
        ctx.beginPath();
        ctx.strokeStyle = '#0f0105';
        ctx.fillStyle = '#0f0105'
        ctx.fillRect(0, 66, 90, 13);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

//рисуем туловище
        ctx.strokeStyle = properties.colorTShirt;
        ctx.fillStyle = properties.colorTShirt;
        ctx.beginPath();
        ctx.moveTo(70, 110);
        ctx.lineTo(20, 110);
        ctx.lineTo(20, 78);
        ctx.arc(45, 78, 25.9, getRadians(180), getRadians(360));
        ctx.stroke(); // *22
        ctx.fill();
        ctx.stroke();

//Рисуем голову
        ctx.beginPath();
        ctx.strokeStyle = '#d2b48c';
        ctx.fillStyle = '#d2b48c';
        ctx.moveTo(39, 52);
        ctx.lineTo(39, 49);
        ctx.lineTo(50, 49);
        ctx.lineTo(50, 52);
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#d2b48c';
        ctx.fillStyle = '#d2b48c';
        ctx.arc(45, 28, 23, getRadians(180), getRadians(360), true)
        ctx.lineTo(70, 20);
        ctx.lineTo(21, 20);
        ctx.lineTo(21, 25);
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        //рисуем рот
        ctx.beginPath();
        ctx.strokeStyle = '#fffacd';
        ctx.fillStyle = '#0f0f0f';
        ctx.lineWidth = 1;
        ctx.arc(45, 35, 10, getRadians(0), getRadians(180));
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        // Рисум глаза
        // Левый глаз
        ctx.beginPath();
        ctx.moveTo(38, 23);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ffffff';//цвет глазного яблока левого
        ctx.fillStyle = '#0a0407';//цвет зрачка левого
        ctx.arc(35, 23, 4, getRadians(0), getRadians(360));

        //Правый глаз
        ctx.strokeStyle = '#ffffff';//цвет глазного яблока правого
        ctx.fillStyle = '#0a0407';//цвет зрачка правого
        ctx.moveTo(57, 23);
        ctx.arc(55, 23, 4, getRadians(0), getRadians(360));
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        //Рисуем волосы
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(20, 20);
        ctx.strokeStyle = properties.colorHair;
        ctx.fillStyle = properties.colorHair;
        ctx.lineTo(20, 9);
        ctx.quadraticCurveTo(45, -8, 70, 9);
        ctx.lineTo(70, 20);
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#100550';
        ctx.fillStyle = '#100550';
        ctx.font = "14px Georgia";
        ctx.textAlign = 'center';
        ctx.fillText(properties.nameChar, 45, 190);
        ctx.closePath();

        //рисуем Рисунок
        if (properties.pictureChar == 'true') {
            ctx.beginPath();
            ctx.strokeStyle = '#70a000';
            ctx.fillStyle = '#70a000'
            ctx.fillRect(31, 70, 30, 30);
            ctx.strokeStyle = '#fff';
            ctx.fillStyle = '#fff';
            ctx.font = "24px Georgia";
            ctx.textAlign = 'center';

            ctx.fillText('H', 45, 93);
            ctx.closePath();
            ctx.stroke(); // *22
            ctx.fill();
        }
    }

//Функция преобразования градусов в радианы
    function getRadians(degrees) {
        return (Math.PI / 180) * degrees;
    }

//Функуия скрытия инпутов
    let noDisply = function (el, elNoDisply, displyValue, elInput) {
        // var textInput = 'Введите имя';
        var elForm = document.querySelector(elNoDisply);
        document.querySelector(el).addEventListener('change', (e) => {
            elForm.classList.toggle('noDisplay');
            if (elForm.dataset.input=='inputName') return elForm.value='';
        })
        // var textInput = 'Введите имя';
        // var elFormChar = document.querySelector(el);
        // elFormChar.addEventListener('change', (e) => {
        //     var colorHareArray = Array.prototype.slice.call(document.querySelectorAll(elNoDisply));
        //     if (e.target.checked) {
        //         return colorHareArray.map((i) => {
        //             i.style.display = displyValue;
        //         })
        //     }
        //     colorHareArray.map((i) => {
        //         i.style.display = 'none'
        //     })
        //     if (elInput) {
        //         document.querySelector(elInput).value = textInput;
        //     }
        // })
    }

    noDisply('#checkColorPants', '#inputColorPants');
    noDisply('#checkColorHair', '#inputColorHair');
    noDisply('#checkColorT-shirt', '#inputColorT-shirt');
    noDisply('#checkName', '#inputName');

//функция скрытия первоначального текста в input
//     let inputFocusBlur = function (el) {
//         var elInput = document.querySelector(el);
//         // elInput.addEventListener('focus', (e) => {
//         //     if (e.target.value = 'Введите имя') {
//         //         return e.target.value = '';
//         //     }
//         // })
//         // elInput.addEventListener('blur', (e) => {
//         //     if (e.target.value == '') {
//         //         return e.target.value = 'Введите имя';
//         //     }
//         // })
//         // elInput.addEventListener('input', (e) => {
//         //
//         //     if (e.target.classList.contains('noDisplay')) return log('ty');
//         // })
//     }
//     inputFocusBlur('.inputName');

    const Default = {

        constructor: function (nameChar, colorHair, pictureChar, colorPants, colorTShirt) {

            this.nameChar = nameChar,
                this.colorHair = colorHair,
                this.pictureChar = pictureChar,
                this.colorPants = colorPants,
                this.colorTShirt = colorTShirt
            return this;
        },
        _nameChar: 'Nameless',
        _colorHair: 'A3FF58',
        _colorPants: '3028FF',
        _colorTShirt: 'FF5F18',
        _picture: 'false',
        get charDrawing() {
            canvasChar(this.charInfo)
        },
        get charInfo() {
            var nameChar = this.nameChar != '' && this.nameChar != undefined && this.nameChar != 'Введите имя' ? this.nameChar : this._nameChar;
            var colorHair = this.colorHair != '' && this.colorHair != undefined ? ('#' + this.colorHair) : ('#' + this._colorHair);
            var colorPants = this.colorPants != '' && this.colorPants != undefined ? ('#' + this.colorPants) : ('#' + this._colorPants);
            var colorTShirt = this.colorTShirt != '' && this.colorTShirt != undefined ? ('#' + this.colorTShirt) : ('#' + this._colorTShirt);
            if (this.pictureChar == ('true' || 'false')) {
                var pictureChar = this.pictureChar;
            }
            else {
                var pictureChar = this._picture;
            }
            var charCount = this.count;
            return {nameChar, colorHair, pictureChar, colorPants, colorTShirt, charCount}
        },
        count: 0,
        id: 0,
        get iDChar() {
            ++this.id;
            return this.id;
        },
        get countChar() {
            ++this.count;
            return this.count;
        }
    }
    const CharDefault = Object.create(Default);
    CharDefault.constructor = function (nameChar, colorHair, pictureChar, colorPants, colorTShirt, count) {
        Default.constructor.apply(this, arguments);
        this.count = count;
        return this;
    };

    const User = {};
    function addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt) {
        var cg = Object.create(CharDefault);
        User[Default.iDChar] = cg.constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt, Default.countChar);
        return User;
    }

    function showChars() {
        document.getElementsByName('formCharacter')[0].addEventListener('submit', (e) => {
            let {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = getValue();
            e.preventDefault();
            addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
            document.querySelector('.showingCharacters').innerHTML = '';
            for (var i = 1; i <= Default.count; i++) {
                User[i].charDrawing;
            }

        })
    }

    showChars();

//Собирает данные с формы
    let getValue = function () {
        var elInput = Array.prototype.slice.call(document.querySelectorAll('input'));
        var {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = Default;

//проверяем отмеченны ли чекбоксы
        elInput[0].checked == true ? nameChar = elInput[1].value : nameChar;
        elInput[2].checked == true ? colorHair = elInput[3].value : colorHair;
        elInput[4].checked == true ? colorPants = elInput[5].value : colorPants;
        elInput[6].checked == true ? colorTShirt = elInput[7].value : colorTShirt;
        elInput[8].checked == true ? pictureChar = 'true' : pictureChar;
        var charOnline = Object.create(CharDefault).constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
        return charOnline;
    }


    canvasChar(Default.charInfo, '#canvasChar');

    function showCharOnline() {
        document.querySelector('checkIn');
        var el = document.querySelector('.checkIn');
        el.addEventListener('change', (e) => {
            let charOnline = getValue();
            canvasChar(charOnline.charInfo, '#canvasChar');
        })
    }

    showCharOnline();`;

let html1003=`
<article class="blockC">
            <div class="characterCheckIn">
            <section id="character" class="character">
            <canvas id="canvasChar" class="canvasChar"></canvas>
            </section>

            <section id="checkIn" class="checkIn">
            <div class="checkIn__check">


            <label for="checkName" class="newCheckbox "><input type="checkbox" name="checkName"
            class="checkCharacter" id="checkName"
            form="formCharacter"> <span></span>
            Укажите имя </label>
            <input type="text" class="inputName noDisplay" placeholder="Введите имя"  data-input="inputName" id="inputName"  maxlength="11"
            form="formCharacter">
            </div>
            <div class="checkIn__check">


            <label for="checkColorHair" class="newCheckbox"><input type="checkbox" name="checkHair"
            class="checkCharacter"
            id="checkColorHair"
            form="formCharacter"> <span></span>
            Указать цвет волос </label>

            <input class="jscolor noDisplay" id="inputColorHair" value="">
            <!--form="formCharacter" value="blond"-->
            <!--id="colorHairBlond" name="colorHair"><span></span></label><label for="colorHairBlond" class="radio">Блондин <input type="radio" class="colorHair"-->
            <!--form="formCharacter" value="blond"-->
            <!--id="colorHairBlond" name="colorHair"><span></span></label>
            <input class="jscolor" value="">
            <!--<label for="colorHairBlond" class="radio">Блондин <input type="radio" class="colorHair"-->
            <!--form="formCharacter" value="blond"-->
            <!--id="colorHairBlond" name="colorHair"><span></span></label>-->
            <!--<label for="colorHairАire" class="radio">Огненый <input type="radio" class="colorHair"-->
            <!--form="formCharacter" value="fire"-->
            <!--id="colorHairАire" name="colorHair"><span></span></label>-->
            <!--<label for="colorHairBlanks" class="radio">Брюнет <input type="radio" class="colorHair"-->
            <!--form="formCharacter" value="blanks"-->
            <!--id="colorHairBlanks" name="colorHair"><span></span></label>-->


            </div>
            <div class="checkIn__check">
            <label for="checkColorPants" class="newCheckbox"><input type="checkbox" name="checkHair"
            class="checkCharacter"
            id="checkColorPants"
            form="formCharacter"> <span></span>
            Указать цвет штанов </label>

            <input class="jscolor noDisplay" id="inputColorPants">
            </div>
            <div class="checkIn__check">
            <label for="checkColorT-shirt" class="newCheckbox"><input type="checkbox" name="checkHair"
            class="checkCharacter"
            id="checkColorT-shirt"
            form="formCharacter">
            <span></span>
            Указать цвет футболки </label>

            <input class="jscolor noDisplay" id="inputColorT-shirt">
            </div>
            <div class="checkIn__check">


            <label for="checkPicture" class="newCheckbox"><input type="checkbox" name="checkPicture"
            class="checkCharacter"
            id="checkPicture"
            form="formCharacter"> <span></span>
            С рисунком </label>

            </div>


            <form action="#" name="formCharacter" id="formCharacter">
            <input type="submit" value="Добавить Персонажа">
            </form>

            </section>

            </div>
            <section id="showingCharacters" class="showingCharacters">

            </section>

            </article>
            `;

let fun1003 = function(){
    elWin.innerHTML=html1003;
    // рисуем человечка CharInfoArray-обэкт с описанием, elDom -где рисовать
    function canvasChar(CharInfoArray, elDom) {
        var properties = CharInfoArray;
        if (elDom != undefined) {
            var el = document.querySelector(elDom)
            var ctx = el.getContext('2d');
            el.width = document.querySelector('.character').clientWidth;
            el.height = document.querySelector('.character').clientHeight;
        }
        else {
            var section, convas, elDivCanvas, Convas, ctx;
            section = document.createElement('section');
            section.classList.add('character');
            convas = document.createElement('canvas');
            convas.classList.add('canvasChar');
            convas.setAttribute('data-char', properties.charCount);
            elDivCanvas = document.querySelector('.showingCharacters');
            elDivCanvas.appendChild(section);
            section.appendChild(convas);
            convas = Array.prototype.slice.call(document.querySelectorAll('canvas'));
            Convas = convas.filter(value => value.dataset.char == properties.charCount);
            ctx = Convas[0].getContext('2d');
            Convas[0].width = document.querySelector('.character').clientWidth;
            Convas[0].height = document.querySelector('.character').clientHeight;
        }

        ctx.lineWidth = .2;
        ctx.strokeStyle = properties.colorPants;
        ctx.fillStyle = properties.colorPants;

// рисуем штаны
        ctx.beginPath();
        ctx.moveTo(20, 110);
        ctx.lineTo(70, 110);
        ctx.lineTo(70, 170);
        ctx.lineTo(50, 170);
        ctx.lineTo(50, 130);
        ctx.lineTo(40, 130);
        ctx.lineTo(40, 170);
        ctx.lineTo(20, 170);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // Рисуем руки
        ctx.beginPath();
        ctx.strokeStyle = '#0f0105';
        ctx.fillStyle = '#0f0105'
        ctx.fillRect(0, 66, 90, 13);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

//рисуем туловище
        ctx.strokeStyle = properties.colorTShirt;
        ctx.fillStyle = properties.colorTShirt;
        ctx.beginPath();
        ctx.moveTo(70, 110);
        ctx.lineTo(20, 110);
        ctx.lineTo(20, 78);
        ctx.arc(45, 78, 25.9, getRadians(180), getRadians(360));
        ctx.stroke(); // *22
        ctx.fill();
        ctx.stroke();

//Рисуем голову
        ctx.beginPath();
        ctx.strokeStyle = '#d2b48c';
        ctx.fillStyle = '#d2b48c';
        ctx.moveTo(39, 52);
        ctx.lineTo(39, 49);
        ctx.lineTo(50, 49);
        ctx.lineTo(50, 52);
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#d2b48c';
        ctx.fillStyle = '#d2b48c';
        ctx.arc(45, 28, 23, getRadians(180), getRadians(360), true)
        ctx.lineTo(70, 20);
        ctx.lineTo(21, 20);
        ctx.lineTo(21, 25);
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        //рисуем рот
        ctx.beginPath();
        ctx.strokeStyle = '#fffacd';
        ctx.fillStyle = '#0f0f0f';
        ctx.lineWidth = 1;
        ctx.arc(45, 35, 10, getRadians(0), getRadians(180));
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        // Рисум глаза
        // Левый глаз
        ctx.beginPath();
        ctx.moveTo(38, 23);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ffffff';//цвет глазного яблока левого
        ctx.fillStyle = '#0a0407';//цвет зрачка левого
        ctx.arc(35, 23, 4, getRadians(0), getRadians(360));

        //Правый глаз
        ctx.strokeStyle = '#ffffff';//цвет глазного яблока правого
        ctx.fillStyle = '#0a0407';//цвет зрачка правого
        ctx.moveTo(57, 23);
        ctx.arc(55, 23, 4, getRadians(0), getRadians(360));
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        //Рисуем волосы
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(20, 20);
        ctx.strokeStyle = properties.colorHair;
        ctx.fillStyle = properties.colorHair;
        ctx.lineTo(20, 9);
        ctx.quadraticCurveTo(45, -8, 70, 9);
        ctx.lineTo(70, 20);
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#100550';
        ctx.fillStyle = '#100550';
        ctx.font = "14px Georgia";
        ctx.textAlign = 'center';
        ctx.fillText(properties.nameChar, 45, 190);
        ctx.closePath();

        //рисуем Рисунок
        if (properties.pictureChar == 'true') {
            ctx.beginPath();
            ctx.strokeStyle = '#70a000';
            ctx.fillStyle = '#70a000'
            ctx.fillRect(31, 70, 30, 30);
            ctx.strokeStyle = '#fff';
            ctx.fillStyle = '#fff';
            ctx.font = "24px Georgia";
            ctx.textAlign = 'center';

            ctx.fillText('H', 45, 93);
            ctx.closePath();
            ctx.stroke(); // *22
            ctx.fill();
        }
    }

//Функция преобразования градусов в радианы
    function getRadians(degrees) {
        return (Math.PI / 180) * degrees;
    }

//Функуия скрытия инпутов
    let noDisply = function (el, elNoDisply, displyValue, elInput) {
        // var textInput = 'Введите имя';
        var elForm = document.querySelector(elNoDisply);
        document.querySelector(el).addEventListener('change', (e) => {
            elForm.classList.toggle('noDisplay');
            if (elForm.dataset.input=='inputName') return elForm.value='';
        })
        // var textInput = 'Введите имя';
        // var elFormChar = document.querySelector(el);
        // elFormChar.addEventListener('change', (e) => {
        //     var colorHareArray = Array.prototype.slice.call(document.querySelectorAll(elNoDisply));
        //     if (e.target.checked) {
        //         return colorHareArray.map((i) => {
        //             i.style.display = displyValue;
        //         })
        //     }
        //     colorHareArray.map((i) => {
        //         i.style.display = 'none'
        //     })
        //     if (elInput) {
        //         document.querySelector(elInput).value = textInput;
        //     }
        // })
    }

    noDisply('#checkColorPants', '#inputColorPants');
    noDisply('#checkColorHair', '#inputColorHair');
    noDisply('#checkColorT-shirt', '#inputColorT-shirt');
    noDisply('#checkName', '#inputName');

//функция скрытия первоначального текста в input
//     let inputFocusBlur = function (el) {
//         var elInput = document.querySelector(el);
//         // elInput.addEventListener('focus', (e) => {
//         //     if (e.target.value = 'Введите имя') {
//         //         return e.target.value = '';
//         //     }
//         // })
//         // elInput.addEventListener('blur', (e) => {
//         //     if (e.target.value == '') {
//         //         return e.target.value = 'Введите имя';
//         //     }
//         // })
//         // elInput.addEventListener('input', (e) => {
//         //
//         //     if (e.target.classList.contains('noDisplay')) return log('ty');
//         // })
//     }
//     inputFocusBlur('.inputName');

    const Default = {

        constructor: function (nameChar, colorHair, pictureChar, colorPants, colorTShirt) {

            this.nameChar = nameChar,
                this.colorHair = colorHair,
                this.pictureChar = pictureChar,
                this.colorPants = colorPants,
                this.colorTShirt = colorTShirt
            return this;
        },
        _nameChar: 'Nameless',
        _colorHair: 'A3FF58',
        _colorPants: '3028FF',
        _colorTShirt: 'FF5F18',
        _picture: 'false',
        get charDrawing() {
            canvasChar(this.charInfo)
        },
        get charInfo() {
            var nameChar = this.nameChar != '' && this.nameChar != undefined && this.nameChar != 'Введите имя' ? this.nameChar : this._nameChar;
            var colorHair = this.colorHair != '' && this.colorHair != undefined ? ('#' + this.colorHair) : ('#' + this._colorHair);
            var colorPants = this.colorPants != '' && this.colorPants != undefined ? ('#' + this.colorPants) : ('#' + this._colorPants);
            var colorTShirt = this.colorTShirt != '' && this.colorTShirt != undefined ? ('#' + this.colorTShirt) : ('#' + this._colorTShirt);
            if (this.pictureChar == ('true' || 'false')) {
                var pictureChar = this.pictureChar;
            }
            else {
                var pictureChar = this._picture;
            }
            var charCount = this.count;
            return {nameChar, colorHair, pictureChar, colorPants, colorTShirt, charCount}
        },
        count: 0,
        id: 0,
        get iDChar() {
            ++this.id;
            return this.id;
        },
        get countChar() {
            ++this.count;
            return this.count;
        }
    }
    const CharDefault = Object.create(Default);
    CharDefault.constructor = function (nameChar, colorHair, pictureChar, colorPants, colorTShirt, count) {
        Default.constructor.apply(this, arguments);
        this.count = count;
        return this;
    };

    const User = {};
    function addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt) {
        var cg = Object.create(CharDefault);
        User[Default.iDChar] = cg.constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt, Default.countChar);
        return User;
    }

    function showChars() {
        document.getElementsByName('formCharacter')[0].addEventListener('submit', (e) => {
            let {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = getValue();
            e.preventDefault();
            addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
            document.querySelector('.showingCharacters').innerHTML = '';
            for (var i = 1; i <= Default.count; i++) {
                User[i].charDrawing;
            }

        })
    }

    showChars();

//Собирает данные с формы
    let getValue = function () {
        var elInput = Array.prototype.slice.call(document.querySelectorAll('input'));
        var {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = Default;

//проверяем отмеченны ли чекбоксы
        elInput[0].checked == true ? nameChar = elInput[1].value : nameChar;
        elInput[2].checked == true ? colorHair = elInput[3].value : colorHair;
        elInput[4].checked == true ? colorPants = elInput[5].value : colorPants;
        elInput[6].checked == true ? colorTShirt = elInput[7].value : colorTShirt;
        elInput[8].checked == true ? pictureChar = 'true' : pictureChar;
        var charOnline = Object.create(CharDefault).constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
        return charOnline;
    }


    canvasChar(Default.charInfo, '#canvasChar');

    function showCharOnline() {
        document.querySelector('checkIn');
        var el = document.querySelector('.checkIn');
        el.addEventListener('change', (e) => {
            let charOnline = getValue();
            canvasChar(charOnline.charInfo, '#canvasChar');
        })
    }

    showCharOnline();
};

TextWindows[1003]=new Dz(html1003,js1003,win1003,fun1003);
////// End 10-03


















// // рисуем человечка CharInfoArray-обэкт с описанием, elDom -где рисовать
// function canvasChar(CharInfoArray, elDom) {
//     var properties = CharInfoArray;
//     if (elDom != undefined) {
//         var el = document.querySelector(elDom)
//         var ctx = el.getContext('2d');
//         el.width = document.querySelector('.character').clientWidth;
//         el.height = document.querySelector('.character').clientHeight;
//     }
//     else {
//         var section, convas, elDivCanvas, Convas, ctx;
//         section = document.createElement('section');
//         section.classList.add('character');
//         convas = document.createElement('canvas');
//         convas.classList.add('canvasChar');
//         convas.setAttribute('data-char', properties.charCount);
//         elDivCanvas = document.querySelector('.showingCharacters');
//         elDivCanvas.appendChild(section);
//         section.appendChild(convas);
//         convas = Array.prototype.slice.call(document.querySelectorAll('canvas'));
//         Convas = convas.filter(value => value.dataset.char == properties.charCount);
//         ctx = Convas[0].getContext('2d');
//         Convas[0].width = document.querySelector('.character').clientWidth;
//         Convas[0].height = document.querySelector('.character').clientHeight;
//     }
//
//     ctx.lineWidth = .2;
//     ctx.strokeStyle = properties.colorPants;
//     ctx.fillStyle = properties.colorPants;
//
// // рисуем штаны
//     ctx.beginPath();
//     ctx.moveTo(20, 110);
//     ctx.lineTo(70, 110);
//     ctx.lineTo(70, 170);
//     ctx.lineTo(50, 170);
//     ctx.lineTo(50, 130);
//     ctx.lineTo(40, 130);
//     ctx.lineTo(40, 170);
//     ctx.lineTo(20, 170);
//     ctx.closePath();
//     ctx.stroke();
//     ctx.fill();
//
//     // Рисуем руки
//     ctx.beginPath();
//     ctx.strokeStyle = '#0f0105';
//     ctx.fillStyle = '#0f0105'
//     ctx.fillRect(0, 66, 90, 13);
//     ctx.closePath();
//     ctx.stroke();
//     ctx.fill();
//
// //рисуем туловище
//     ctx.strokeStyle = properties.colorTShirt;
//     ctx.fillStyle = properties.colorTShirt;
//     ctx.beginPath();
//     ctx.moveTo(70, 110);
//     ctx.lineTo(20, 110);
//     ctx.lineTo(20, 78);
//     ctx.arc(45, 78, 25.9, getRadians(180), getRadians(360));
//     ctx.stroke(); // *22
//     ctx.fill();
//     ctx.stroke();
//
// //Рисуем голову
//     ctx.beginPath();
//     ctx.strokeStyle = '#d2b48c';
//     ctx.fillStyle = '#d2b48c';
//     ctx.moveTo(39, 52);
//     ctx.lineTo(39, 49);
//     ctx.lineTo(50, 49);
//     ctx.lineTo(50, 52);
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     ctx.beginPath();
//     ctx.strokeStyle = '#d2b48c';
//     ctx.fillStyle = '#d2b48c';
//     ctx.arc(45, 28, 23, getRadians(180), getRadians(360), true)
//     ctx.lineTo(70, 20);
//     ctx.lineTo(21, 20);
//     ctx.lineTo(21, 25);
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     //рисуем рот
//     ctx.beginPath();
//     ctx.strokeStyle = '#fffacd';
//     ctx.fillStyle = '#0f0f0f';
//     ctx.lineWidth = 1;
//     ctx.arc(45, 35, 10, getRadians(0), getRadians(180));
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     // Рисум глаза
//     // Левый глаз
//     ctx.beginPath();
//     ctx.moveTo(38, 23);
//     ctx.lineWidth = 3;
//     ctx.strokeStyle = '#ffffff';//цвет глазного яблока левого
//     ctx.fillStyle = '#0a0407';//цвет зрачка левого
//     ctx.arc(35, 23, 4, getRadians(0), getRadians(360));
//
//     //Правый глаз
//     ctx.strokeStyle = '#ffffff';//цвет глазного яблока правого
//     ctx.fillStyle = '#0a0407';//цвет зрачка правого
//     ctx.moveTo(57, 23);
//     ctx.arc(55, 23, 4, getRadians(0), getRadians(360));
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     //Рисуем волосы
//     ctx.beginPath();
//     ctx.lineWidth = 1;
//     ctx.moveTo(20, 20);
//     ctx.strokeStyle = properties.colorHair;
//     ctx.fillStyle = properties.colorHair;
//     ctx.lineTo(20, 9);
//     ctx.quadraticCurveTo(45, -8, 70, 9);
//     ctx.lineTo(70, 20);
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     ctx.beginPath();
//     ctx.strokeStyle = '#100550';
//     ctx.fillStyle = '#100550';
//     ctx.font = "14px Georgia";
//     ctx.textAlign = 'center';
//     ctx.fillText(properties.nameChar, 45, 190);
//     ctx.closePath();
//
//     //рисуем Рисунок
//     if (properties.pictureChar == 'true') {
//         ctx.beginPath();
//         ctx.strokeStyle = '#70a000';
//         ctx.fillStyle = '#70a000'
//         ctx.fillRect(31, 70, 30, 30);
//         ctx.strokeStyle = '#fff';
//         ctx.fillStyle = '#fff';
//         ctx.font = "24px Georgia";
//         ctx.textAlign = 'center';
//
//         ctx.fillText('H', 45, 93);
//         ctx.closePath();
//         ctx.stroke(); // *22
//         ctx.fill();
//     }
// }
//
// //Функция преобразования градусов в радианы
// function getRadians(degrees) {
//     return (Math.PI / 180) * degrees;
// }
//
// //Функуия скрытия инпутов
// let noDisply = function (el, elNoDisply, displyValue, elInput) {
//     var textInput = 'Введите имя';
//     var elFormChar = document.querySelector(el);
//     elFormChar.addEventListener('change', (e) => {
//         var colorHareArray = Array.prototype.slice.call(document.querySelectorAll(elNoDisply));
//         if (e.target.checked) {
//             return colorHareArray.map((i) => {
//                 i.style.display = displyValue;
//             })
//         }
//         colorHareArray.map((i) => {
//             i.style.display = 'none'
//         })
//         if (elInput) {
//             document.querySelector(elInput).value = textInput;
//         }
//     })
// }
//
// noDisply('#checkColorPants', '#inputColorPants', 'flex');
// noDisply('#checkColorHair', '#inputColorHair', 'flex');
// noDisply('#checkColorT-shirt', '#inputColorT-shirt', 'flex');
// noDisply('#checkName', '#inputName', 'flex', '.inputName');
//
// //функция скрытия первоначального текста в input
// let inputFocusBlur = function (el) {
//     var elInput = document.querySelector(el);
//     elInput.addEventListener('focus', (e) => {
//         if (e.target.value = 'Введите имя') {
//             return e.target.value = '';
//         }
//     })
//     elInput.addEventListener('blur', (e) => {
//         if (e.target.value == '') {
//             return e.target.value = 'Введите имя';
//         }
//     })
//     elInput.addEventListener('input', (e) => {
//         if (e.target.style.display == 'none') return e.target.value = 'Введите имя';
//     })
// }
// inputFocusBlur('.inputName');
//
// const Default = {
//
//     constructor: function (nameChar, colorHair, pictureChar, colorPants, colorTShirt) {
//
//         this.nameChar = nameChar,
//             this.colorHair = colorHair,
//             this.pictureChar = pictureChar,
//             this.colorPants = colorPants,
//             this.colorTShirt = colorTShirt
//         return this;
//     },
//     _nameChar: 'Nameless',
//     _colorHair: 'A3FF58',
//     _colorPants: '3028FF',
//     _colorTShirt: 'FF5F18',
//     _picture: 'false',
//     get charDrawing() {
//         canvasChar(this.charInfo)
//     },
//     get charInfo() {
//         var nameChar = this.nameChar != '' && this.nameChar != undefined && this.nameChar != 'Введите имя' ? this.nameChar : this._nameChar;
//         var colorHair = this.colorHair != '' && this.colorHair != undefined ? ('#' + this.colorHair) : ('#' + this._colorHair);
//         var colorPants = this.colorPants != '' && this.colorPants != undefined ? ('#' + this.colorPants) : ('#' + this._colorPants);
//         var colorTShirt = this.colorTShirt != '' && this.colorTShirt != undefined ? ('#' + this.colorTShirt) : ('#' + this._colorTShirt);
//         if (this.pictureChar == ('true' || 'false')) {
//             var pictureChar = this.pictureChar;
//         }
//         else {
//             var pictureChar = this._picture;
//         }
//         var charCount = this.count;
//         return {nameChar, colorHair, pictureChar, colorPants, colorTShirt, charCount}
//     },
//     count: 0,
//     id: 0,
//     get iDChar() {
//         ++this.id;
//         return this.id;
//     },
//     get countChar() {
//         ++this.count;
//         return this.count;
//     }
// }
// const CharDefault = Object.create(Default);
// CharDefault.constructor = function (nameChar, colorHair, pictureChar, colorPants, colorTShirt, count) {
//     Default.constructor.apply(this, arguments);
//     this.count = count;
//     return this;
// };
//
// const User = {};
// function addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt) {
//     var cg = Object.create(CharDefault);
//     User[Default.iDChar] = cg.constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt, Default.countChar);
//     return User;
// }
//
// function showChars() {
//     document.getElementsByName('formCharacter')[0].addEventListener('submit', (e) => {
//         let {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = getValue();
//         e.preventDefault();
//         addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
//         document.querySelector('.showingCharacters').innerHTML = '';
//         for (var i = 1; i <= Default.count; i++) {
//             User[i].charDrawing;
//                     }
//
//     })
// }
//
// showChars();
//
// //Собирает данные с формы
// let getValue = function () {
//     var elInput = Array.prototype.slice.call(document.querySelectorAll('input'));
//     var {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = Default;
//
// //проверяем отмеченны ли чекбоксы
//     elInput[0].checked == true ? nameChar = elInput[1].value : nameChar;
//     elInput[2].checked == true ? colorHair = elInput[3].value : colorHair;
//     elInput[4].checked == true ? colorPants = elInput[5].value : colorPants;
//     elInput[6].checked == true ? colorTShirt = elInput[7].value : colorTShirt;
//     elInput[8].checked == true ? pictureChar = 'true' : pictureChar;
//     var charOnline = Object.create(CharDefault).constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
//     return charOnline;
// }
//
//
// canvasChar(Default.charInfo, '#canvasChar');
//
// function showCharOnline() {
//     document.querySelector('checkIn');
//     var el = document.querySelector('.checkIn');
//     el.addEventListener('change', (e) => {
//         let charOnline = getValue();
//         canvasChar(charOnline.charInfo, '#canvasChar');
//     })
// }
//
// showCharOnline();




