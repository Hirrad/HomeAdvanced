///// Begin 14-01
let win1401=`1. Сделать форму с:<br>
- валидацией полей на обязательные<br>
- валидацией полей на тип "ящик" (наличие собаки, точки и длина более 4 символов)<br>
- отправка имитируется через setTimeout<br>
- состояниями is-loading, is-error, is-success с соответсвующими сообщениями<br>
- у поля password должен быть переключатель, меняющий полю тип text/password<br>`;

let js1401='$(\'form[name="registerForm"]>div>input\').on(\'blur\', function (e) {\n' +
    '\n' +
    '    let el = $(this);\n' +
    '    validatorForm(el, \'email\', \'Вы ввели некоректрый email\');\n' +
    '    validatorForm(el, \'text\', \'Ваше имя не должно быть короче 6 символов и не длинее 15\');\n' +
    '    validatorForm(el, \'password\', \'Пароль должен быть не меньше 6 цыфр\');\n' +
    '\n' +
    '})\n' +
    '\n' +
    '$(\'form[name="registerForm"]\').submit(function (e) {\n' +
    '\n' +
    '    e.preventDefault();\n' +
    '    let el = $(this);\n' +
    'if((el.serializeObject()).noValue && !($(\'span\').hasClass(\'isError-hint\'))){\n' +
    '    $(\'div\').removeClass(\'isError isCorrectly\');\n' +
    '    el[0].reset();\n' +
    '    alert(\'Спасибо за регистрацию!\')\n' +
    '}\n' +
    '    e.preventDefault()\n' +
    '\n' +
    '})\n' +
    '\n' +
    '$.fn.serializeObject = function () {\n' +
    '    let object = new Object();\n' +
    '    object.noValue=true;\n' +
    '    let array = $(this).serializeArray();\n' +
    '    $.each(array, function (i, value) {\n' +
    '        if (object[value.name] != \'undefined\' && object[value.name]!=value.name) {\n' +
    '            object[value.name] = value.value || \'\';\n' +
    '            if(value.value==\'\') object.noValue=false;\n' +
    '        }\n' +
    '    })\n' +
    '    return (object);\n' +
    '}\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'function validatorForm(element, type, massage) {\n' +
    '    let error = new Object();\n' +
    '    // let errorMassage= massage;\n' +
    '    //if value =0 output error\n' +
    '    if (element.val() != 0) {\n' +
    '        delete error.value;\n' +
    '        // we carry out the validation of email\n' +
    '        if (element.attr(\'type\') == \'email\' && type == \'email\') {\n' +
    '            element.parent().removeClass(\'isCorrectly isError\');\n' +
    '            var pattern = /^([a-z0-9_\\.-])+@[a-z0-9-]+\\.([a-z]{2,4}\\.)?[a-z]{2,4}$/i;//проверка на правельное написание email\n' +
    '            if (pattern.test(element.val())) {\n' +
    '                //удаляем выведеную ошибку если она сесть\n' +
    '                element.prev().remove();\n' +
    '                //присваем галочку при true проверке\n' +
    '                element.before($(`<span class="loader"></span>`));\n' +
    '                setTimeout( ()=> {\n' +
    '                    element.parent().find(\'.loader\').remove();\n' +
    '                    element.parent().addClass(\'isCorrectly\');\n' +
    '\n' +
    '                },2000);\n' +
    '                // element.parent().addClass(\'isCorrectly\');\n' +
    '                //передайом что в этом инпуте нет ошибки\n' +
    '                error[element.attr(\'name\')] = true;\n' +
    '            } else {\n' +
    '                //присваеваем крестик как ошибку\n' +
    '                element.parent().addClass(\'isError\');\n' +
    '                //удаляем предыдущую ошибку если она есть\n' +
    '                if (element.prev().hasClass(\'isError-hint\')) element.prev().remove();\n' +
    '                element.before($(`<span class="isError-hint">${massage}</span>`));\n' +
    '                //передайом что в этом инпуте ошибка\n' +
    '                error[element.attr(\'name\')] = false;\n' +
    '            }\n' +
    '        }\n' +
    '        // we carry out the validation of text\n' +
    '        else if (element.attr(\'type\') == \'text\' && type == \'text\') {\n' +
    '            element.parent().removeClass(\'isCorrectly isError\');\n' +
    '            if (element.val().length >= 6 && element.val().length <= 15) {\n' +
    '                element.prev().remove();\n' +
    '                element.before($(`<span class="loader"></span>`));\n' +
    '                setTimeout( ()=> {\n' +
    '                    element.parent().find(\'.loader\').remove();\n' +
    '                    element.parent().addClass(\'isCorrectly\');\n' +
    '\n' +
    '                },2000);\n' +
    '                // element.parent().addClass(\'isCorrectly\');\n' +
    '                error[element.attr(\'name\')] = true;\n' +
    '            } else {\n' +
    '                element.parent().addClass(\'isError\');\n' +
    '                if (element.prev().hasClass(\'isError-hint\')) element.prev().remove();\n' +
    '                element.before($(`<span class="isError-hint">${massage}</span>`));\n' +
    '                error[element.attr(\'name\')] = false;\n' +
    '            }\n' +
    '        }\n' +
    '        // we carry out the validation of password\n' +
    '        //провиряем пароль не короче 6, и не совпадение при повторном введение.\n' +
    '        else if (element.attr(\'type\') == \'password\' && type == \'password\') {\n' +
    '\n' +
    '            element.parent().removeClass(\'isCorrectly isError\');// при каждой проверке удаляем метки ошибок\n' +
    '\n' +
    '            if (element.val().length >= 6) {\n' +
    '                if (element.prev().hasClass(\'isError-hint\')) element.prev().remove();\n' +
    '                let pass = element.parent().parent().find(\'[type="password"]\').eq(0);//сохраняем значение пароля\n' +
    '                let passReType = element.parent().parent().find(\'[type="password"]\').eq(1);// сохраняем значение повторного ввода пароля\n' +
    '                //если пароли совпадают\n' +
    '                if (pass.val() == passReType.val()) {\n' +
    '                    //убираем сообщение об ошибке\n' +
    '                    if (pass.prev().hasClass(\'isError-hint\')) pass.prev().remove() && passReType.prev().remove();\n' +
    '                    //присваем галочку при true проверке\n' +
    '                    pass.parent().addClass(\'isCorrectly\') && passReType.parent().addClass(\'isCorrectly\');\n' +
    '                    //передайом что в этом инпуте нет ошибки\n' +
    '                    error[pass.attr(\'name\')] = true;\n' +
    '                    log(error);\n' +
    '\n' +
    '                }\n' +
    '                //если пароли не совпадают выводим ошибку\n' +
    '                else {\n' +
    '\n' +
    '                    //присваевам крестик как ошибку\n' +
    '                    passReType.parent().addClass(\'isError\');\n' +
    '                    //удаляем предыдущую ошибку если она есть\n' +
    '                    if (passReType.prev().hasClass(\'isError-hint\')) passReType.prev().remove();\n' +
    '                    //выводим ошибку о не совпадению пароля\n' +
    '                    passReType.before($(`<span class="isError-hint">Пароли не совпадают</span>`));\n' +
    '                    error[pass.attr(\'name\')] = false;\n' +
    '                }\n' +
    '            }\n' +
    '            //если пароль не содержит 6 и больше символов, вывобим ошибку\n' +
    '            else {\n' +
    '                //присваевам крестик как ошибку\n' +
    '                element.parent().addClass(\'isError\');\n' +
    '                //удаляем предыдущую ошибку если она есть\n' +
    '                if (element.prev().hasClass(\'isError-hint\')) element.prev().remove();\n' +
    '                //выводим ошибку о коротком пароле\n' +
    '                element.before($(`<span class="isError-hint">${massage}</span>`));\n' +
    '\n' +
    '            }\n' +
    '\n' +
    '        }\n' +
    '\n' +
    '    }\n' +
    '    //если я обязательные к заполнению поля ничего не введенно выводим ошибку\n' +
    '    else {\n' +
    '        element.parent().removeClass(\'isCorrectly\');\n' +
    '        element.parent().addClass(\'isError\');\n' +
    '        //удаляем предыдущую ошибку если она есть\n' +
    '        if (element.prev().hasClass(\'isError-hint\')) element.prev().remove();\n' +
    '        element.before($(\'<span class="isError-hint">Обязательное поле для заполнения</span>\'));\n' +
    '        error.value = false;\n' +
    '    }\n' +
    '    return error;\n' +
    '}';

let html1401='<div class="content">\n' +
    '                <div class="login">\n' +
    '                    <div class="login_img ">\n' +
    '                        LOGIN TO ACCOUNT\n' +
    '                    </div>\n' +
    '                    <div class="login_form">\n' +
    '                        <form class="form_login" name="loginForm"  action="index.html" method="post">\n' +
    '                            <input type="text" name="usernameLogin" value="" placeholder="USERNAME...">\n' +
    '                            <input type="password" name="passwordLogin" value="" placeholder="PASSWORD...">\n' +
    '                            <input class="ButtonLogin" type="submit" name="" value="LOGIN">\n' +
    '\n' +
    '                        </form>\n' +
    '                    </div>\n' +
    '                    <div class="login_footer">\n' +
    '                        FORGOT PASSWORD OR USERNAME <a href="#">CLICK HERE</a>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="register">\n' +
    '                    <div class="register_account">\n' +
    '                        OR REGISTER ACCOUNT WHEN NOT HAVE YET\n' +
    '                    </div>\n' +
    '                    <div class="register_form">\n' +
    '                        <form class="form" name="registerForm"  action="#" method="post" novalidate>\n' +
    '                            <div><input  type="text" name="usernameRegister" value="" placeholder="Username..." maxlength="15"></div>\n' +
    '\n' +
    '                            <div><input type="email" name="emailRegister" value="" placeholder="Email..." ></div>\n' +
    '                            <div><input type="password" name="passwordRegister"  placeholder="Password..."></div>\n' +
    '                    <div><input type="password" name="passwordReTypeRegister"  placeholder="Password re-type..."></div>\n' +
    '                            <div><input class="ButtonRegister" type="submit" name="" value="REGISTER"></div>\n' +
    '                        </form>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>';

let fun1401 = function(){
    elWin.innerHTML=html1401;
    $('form[name="registerForm"]>div>input').on('blur', function (e) {

        let el = $(this);
        validatorForm(el, 'email', 'Вы ввели некоректрый email');
        validatorForm(el, 'text', 'Ваше имя не должно быть короче 6 символов и не длинее 15');
        validatorForm(el, 'password', 'Пароль должен быть не меньше 6 цыфр');

    })

    $('form[name="registerForm"]').submit(function (e) {

        e.preventDefault();
        let el = $(this);
        if((el.serializeObject()).noValue && !($('span').hasClass('isError-hint'))){
            $('div').removeClass('isError isCorrectly');
            el[0].reset();
            alert('Спасибо за регистрацию!')
        }
        e.preventDefault()

    })

    $.fn.serializeObject = function () {
        let object = new Object();
        object.noValue=true;
        let array = $(this).serializeArray();
        $.each(array, function (i, value) {
            if (object[value.name] != 'undefined' && object[value.name]!=value.name) {
                object[value.name] = value.value || '';
                if(value.value=='') object.noValue=false;
            }
        })
        return (object);
    }




    function validatorForm(element, type, massage) {
        let error = new Object();
        // let errorMassage= massage;
        //if value =0 output error
        if (element.val() != 0) {
            delete error.value;
            // we carry out the validation of email
            if (element.attr('type') == 'email' && type == 'email') {
                element.parent().removeClass('isCorrectly isError');
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;//проверка на правельное написание email
                if (pattern.test(element.val())) {
                    //удаляем выведеную ошибку если она сесть
                    element.prev().remove();
                    //присваем галочку при true проверке
                    element.before($(`<span class="loader"></span>`));
                    setTimeout( ()=> {
                        element.parent().find('.loader').remove();
                        element.parent().addClass('isCorrectly');

                    },2000);
                    // element.parent().addClass('isCorrectly');
                    //передайом что в этом инпуте нет ошибки
                    error[element.attr('name')] = true;
                } else {
                    //присваеваем крестик как ошибку
                    element.parent().addClass('isError');
                    //удаляем предыдущую ошибку если она есть
                    if (element.prev().hasClass('isError-hint')) element.prev().remove();
                    element.before($(`<span class="isError-hint">${massage}</span>`));
                    //передайом что в этом инпуте ошибка
                    error[element.attr('name')] = false;
                }
            }
            // we carry out the validation of text
            else if (element.attr('type') == 'text' && type == 'text') {
                element.parent().removeClass('isCorrectly isError');
                if (element.val().length >= 6 && element.val().length <= 15) {
                    element.prev().remove();
                    element.before($(`<span class="loader"></span>`));
                    setTimeout( ()=> {
                        element.parent().find('.loader').remove();
                        element.parent().addClass('isCorrectly');

                    },2000);
                    // element.parent().addClass('isCorrectly');
                    error[element.attr('name')] = true;
                } else {
                    element.parent().addClass('isError');
                    if (element.prev().hasClass('isError-hint')) element.prev().remove();
                    element.before($(`<span class="isError-hint">${massage}</span>`));
                    error[element.attr('name')] = false;
                }
            }
            // we carry out the validation of password
            //провиряем пароль не короче 6, и не совпадение при повторном введение.
            else if (element.attr('type') == 'password' && type == 'password') {

                element.parent().removeClass('isCorrectly isError');// при каждой проверке удаляем метки ошибок

                if (element.val().length >= 6) {
                    if (element.prev().hasClass('isError-hint')) element.prev().remove();
                    let pass = element.parent().parent().find('[type="password"]').eq(0);//сохраняем значение пароля
                    let passReType = element.parent().parent().find('[type="password"]').eq(1);// сохраняем значение повторного ввода пароля
                    //если пароли совпадают
                    if (pass.val() == passReType.val()) {
                        //убираем сообщение об ошибке
                        if (pass.prev().hasClass('isError-hint')) pass.prev().remove() && passReType.prev().remove();
                        //присваем галочку при true проверке
                        pass.parent().addClass('isCorrectly') && passReType.parent().addClass('isCorrectly');
                        //передайом что в этом инпуте нет ошибки
                        error[pass.attr('name')] = true;
                        log(error);

                    }
                    //если пароли не совпадают выводим ошибку
                    else {

                        //присваевам крестик как ошибку
                        passReType.parent().addClass('isError');
                        //удаляем предыдущую ошибку если она есть
                        if (passReType.prev().hasClass('isError-hint')) passReType.prev().remove();
                        //выводим ошибку о не совпадению пароля
                        passReType.before($(`<span class="isError-hint">Пароли не совпадают</span>`));
                        error[pass.attr('name')] = false;
                    }
                }
                //если пароль не содержит 6 и больше символов, вывобим ошибку
                else {
                    //присваевам крестик как ошибку
                    element.parent().addClass('isError');
                    //удаляем предыдущую ошибку если она есть
                    if (element.prev().hasClass('isError-hint')) element.prev().remove();
                    //выводим ошибку о коротком пароле
                    element.before($(`<span class="isError-hint">${massage}</span>`));

                }

            }

        }
        //если я обязательные к заполнению поля ничего не введенно выводим ошибку
        else {
            element.parent().removeClass('isCorrectly');
            element.parent().addClass('isError');
            //удаляем предыдущую ошибку если она есть
            if (element.prev().hasClass('isError-hint')) element.prev().remove();
            element.before($('<span class="isError-hint">Обязательное поле для заполнения</span>'));
            error.value = false;
        }
        return error;
    }
};

TextWindows[1401]=new Dz(html1401,js1401,win1401,fun1401);
////// End 14-01

















// $('form[name="registerForm"]>div>input').on('blur', function (e) {
//
//     let el = $(this);
//     validatorForm(el, 'email', 'Вы ввели некоректрый email');
//     validatorForm(el, 'text', 'Ваше имя не должно быть короче 6 символов и не длинее 15');
//     validatorForm(el, 'password', 'Пароль должен быть не меньше 6 цыфр');
//
// })
//
// $('form[name="registerForm"]').submit(function (e) {
//
//     e.preventDefault();
//     let el = $(this);
// if((el.serializeObject()).noValue && !($('span').hasClass('isError-hint'))){
//     $('div').removeClass('isError isCorrectly');
//     el[0].reset();
//     alert('Спасибо за регистрацию!')
// }
//     e.preventDefault()
//
// })
//
// $.fn.serializeObject = function () {
//     let object = new Object();
//     object.noValue=true;
//     let array = $(this).serializeArray();
//     $.each(array, function (i, value) {
//         if (object[value.name] != 'undefined' && object[value.name]!=value.name) {
//             object[value.name] = value.value || '';
//             if(value.value=='') object.noValue=false;
//         }
//     })
//     return (object);
// }
//
//
//
//
// function validatorForm(element, type, massage) {
//     let error = new Object();
//     // let errorMassage= massage;
//     //if value =0 output error
//     if (element.val() != 0) {
//         delete error.value;
//         // we carry out the validation of email
//         if (element.attr('type') == 'email' && type == 'email') {
//             element.parent().removeClass('isCorrectly isError');
//             var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;//проверка на правельное написание email
//             if (pattern.test(element.val())) {
//                 //удаляем выведеную ошибку если она сесть
//                 element.prev().remove();
//                 //присваем галочку при true проверке
//                 element.before($(`<span class="loader"></span>`));
//                 setTimeout( ()=> {
//                     element.parent().find('.loader').remove();
//                     element.parent().addClass('isCorrectly');
//
//                 },2000);
//                 // element.parent().addClass('isCorrectly');
//                 //передайом что в этом инпуте нет ошибки
//                 error[element.attr('name')] = true;
//             } else {
//                 //присваеваем крестик как ошибку
//                 element.parent().addClass('isError');
//                 //удаляем предыдущую ошибку если она есть
//                 if (element.prev().hasClass('isError-hint')) element.prev().remove();
//                 element.before($(`<span class="isError-hint">${massage}</span>`));
//                 //передайом что в этом инпуте ошибка
//                 error[element.attr('name')] = false;
//             }
//         }
//         // we carry out the validation of text
//         else if (element.attr('type') == 'text' && type == 'text') {
//             element.parent().removeClass('isCorrectly isError');
//             if (element.val().length >= 6 && element.val().length <= 15) {
//                 element.prev().remove();
//                 element.before($(`<span class="loader"></span>`));
//                 setTimeout( ()=> {
//                     element.parent().find('.loader').remove();
//                     element.parent().addClass('isCorrectly');
//
//                 },2000);
//                 // element.parent().addClass('isCorrectly');
//                 error[element.attr('name')] = true;
//             } else {
//                 element.parent().addClass('isError');
//                 if (element.prev().hasClass('isError-hint')) element.prev().remove();
//                 element.before($(`<span class="isError-hint">${massage}</span>`));
//                 error[element.attr('name')] = false;
//             }
//         }
//         // we carry out the validation of password
//         //провиряем пароль не короче 6, и не совпадение при повторном введение.
//         else if (element.attr('type') == 'password' && type == 'password') {
//
//             element.parent().removeClass('isCorrectly isError');// при каждой проверке удаляем метки ошибок
//
//             if (element.val().length >= 6) {
//                 if (element.prev().hasClass('isError-hint')) element.prev().remove();
//                 let pass = element.parent().parent().find('[type="password"]').eq(0);//сохраняем значение пароля
//                 let passReType = element.parent().parent().find('[type="password"]').eq(1);// сохраняем значение повторного ввода пароля
//                 //если пароли совпадают
//                 if (pass.val() == passReType.val()) {
//                     //убираем сообщение об ошибке
//                     if (pass.prev().hasClass('isError-hint')) pass.prev().remove() && passReType.prev().remove();
//                     //присваем галочку при true проверке
//                     pass.parent().addClass('isCorrectly') && passReType.parent().addClass('isCorrectly');
//                     //передайом что в этом инпуте нет ошибки
//                     error[pass.attr('name')] = true;
//                     log(error);
//
//                 }
//                 //если пароли не совпадают выводим ошибку
//                 else {
//
//                     //присваевам крестик как ошибку
//                     passReType.parent().addClass('isError');
//                     //удаляем предыдущую ошибку если она есть
//                     if (passReType.prev().hasClass('isError-hint')) passReType.prev().remove();
//                     //выводим ошибку о не совпадению пароля
//                     passReType.before($(`<span class="isError-hint">Пароли не совпадают</span>`));
//                     error[pass.attr('name')] = false;
//                 }
//             }
//             //если пароль не содержит 6 и больше символов, вывобим ошибку
//             else {
//                 //присваевам крестик как ошибку
//                 element.parent().addClass('isError');
//                 //удаляем предыдущую ошибку если она есть
//                 if (element.prev().hasClass('isError-hint')) element.prev().remove();
//                 //выводим ошибку о коротком пароле
//                 element.before($(`<span class="isError-hint">${massage}</span>`));
//
//             }
//
//         }
//
//     }
//     //если я обязательные к заполнению поля ничего не введенно выводим ошибку
//     else {
//         element.parent().removeClass('isCorrectly');
//         element.parent().addClass('isError');
//         //удаляем предыдущую ошибку если она есть
//         if (element.prev().hasClass('isError-hint')) element.prev().remove();
//         element.before($('<span class="isError-hint">Обязательное поле для заполнения</span>'));
//         error.value = false;
//     }
//     return error;
// }

