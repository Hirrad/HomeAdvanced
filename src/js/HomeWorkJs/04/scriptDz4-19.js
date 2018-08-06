///// Begin 4-19
var win419=`19. (events)
Сделать какой-то header с кнопкой "Обратный звонок".
   По нажатию на кнопку должен появляться выпадающий блок,
    в котором будет поле для ввода телефона и кнопка "Да!".
   По нажатию но кнопку проверяем значение поля (el.value)
 Если оно пустое, то ничего не делаем.
   Если оно не пустое, то выводим значение в консоль и прячем блок.
   Клик за пределами блока должен прятать блок.`;

var js419=`var button, educationOnOff, phone;
button=document.querySelector('#buttonConteiner__button');
educationOnOff=document.querySelector('.formOnOff');
phone=document.querySelector('#phone');
button.addEventListener('click', function (e){

    educationOnOff.style.display='inline';

} );
educationOnOff.addEventListener('submit', function (e){

    e.preventDefault();

        if(phone.value==0){
        alert('Вы не ввели телефонный номер!');
    }
    else {
        alert(phone.value);
        phone.value = '';
        educationOnOff.style.display = 'none';

    }

} );
educationOnOff.firstElementChild.addEventListener('click', function (e){
;
    if(e.target.tagName=='ARTICLE'){
        educationOnOff.style.display='none';
    }

} );`;

var html419=`<article class="buttonConteiner" id="buttonConteiner">
        <a href="#" class="button_src"><button class="buttonConteiner__button" id="buttonConteiner__button">Обратный звонок</button></a>
    </article>
    <section class="formOnOff">
    <article class="conteiner_form" id="conteiner_form">

        <form action="index1.html" class="conteiner_form__form"><label for="phone" class="conteiner_form__input">Введите телефон и нажмите ОК</label><input type="text" id="phone" class="conteiner_form__input">
            <input type="submit" value="OK!">
        </form>
    </article>
    </section>`;

var fun419 = function(){
    elWin.innerHTML=`<article class="buttonConteiner" id="buttonConteiner">
        <a href="#" class="button_src"><button class="buttonConteiner__button" id="buttonConteiner__button">Обратный звонок</button></a>
    </article>
    <section class="formOnOff">
    <article class="conteiner_form" id="conteiner_form">

        <form action="index1.html" class="conteiner_form__form"><label for="phone" class="conteiner_form__input">Введите телефон и нажмите ОК</label><input type="text" id="phone" class="conteiner_form__input">
            <input type="submit" value="OK!">
        </form>
    </article>
    </section>`;

var button, educationOnOff, phone;
button=document.querySelector('#buttonConteiner__button');
educationOnOff=document.querySelector('.formOnOff');
phone=document.querySelector('#phone');
button.addEventListener('click', function (e){

    educationOnOff.style.display='inline';

} );
educationOnOff.addEventListener('submit', function (e){

    e.preventDefault();

        if(phone.value==0){
        alert('Вы не ввели телефонный номер!');
    }
    else {
        alert(phone.value);
        phone.value = '';
        educationOnOff.style.display = 'none';

    }

} );
educationOnOff.firstElementChild.addEventListener('click', function (e){
;
    if(e.target.tagName=='ARTICLE'){
        educationOnOff.style.display='none';
    }

} );
}

TextWindows[419]=new Dz(html419,js419,win419,fun419);

////// End 4-19


