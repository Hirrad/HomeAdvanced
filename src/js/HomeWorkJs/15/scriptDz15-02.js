///// Begin 15-02
let win1502=`1. (переменные)<br>
- Объявите две переменные: admin и name.<br>
- Запишите в name строку "Harry".<br>
- Скопируйте значение из name в admin.<br>
- Выведите admin (должно вывести "Harry").<br>`;

let js1502='$(\'select\').wSelect();\n' +
    '\n' +
    '    $(\'#selectSocialNetwork\').change(function() {\n' +
    '        console.log($(this).val());\n' +
    '    });\n' +
    '\n' +
    '// $(\'#selectSocialNetwork\').val(\'Twiter\').change(); // should see in console\n' +
    '    $(\'#selectSocialNetwork\').val(\'Skype\').wSelect(\'change\'); // should see the selected option change to three\n' +
    '    $(\'#selectSocialNetwork\').append(\'<option value="Facebook" data-icon="./img/facebook.png">Facebook</option>\').wSelect(\'reset\');\n';

let html1502=' <select id="selectSocialNetwork">\n' +
    '                <option value="">Select</option>\n' +
    '                <option value="Twiter" data-icon="./img/twitter.png">Twiter</option>\n' +
    '                <option value="Skype" data-icon="./img/skype.png" >Skype</option>\n' +
    '\n' +
    '            </select>';

let fun1502 = function(){
    elWin.innerHTML=html1502;
    $('select').wSelect();

    $('#selectSocialNetwork').change(function() {
        // console.log($(this).val());
    });

// $('#selectSocialNetwork').val('Twiter').change(); // should see in console
    $('#selectSocialNetwork').val('Skype').wSelect('change'); // should see the selected option change to three
    $('#selectSocialNetwork').append('<option value="Facebook" data-icon="./img/facebook.png">Facebook</option>').wSelect('reset');

};

TextWindows[1502]=new Dz(html1502,js1502,win1502,fun1502);
////// End 15-02


