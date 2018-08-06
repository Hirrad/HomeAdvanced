///// Begin 5-01
let win501=`- Создать папку css с парой файлов стилей<br>
- Создать текстовый файл с именами этих файлов, записанными через пробел<br>
- Написать скрипт для node, который будет:<br>
  читать файл с именами,<br>
  разбивать строку имен по пробелу на массив имен,<br>
  читать сами файлы,<br>
  склеивать в одну строку,<br>
  записывать в новый файл.<br>
- Выложить текст скрипта на codepen и прислать как ДЗ.<br>`;

let js501=`var fs = require('fs');
    const jsList=fs.readFileSync('./src/js/HomeWorkJs/05/jsList.txt', 'utf8');
    var list = jsList.split(' ').reduce(function (list, currentValue) {
        return list + fs.readFileSync(\`./src/js/HomeWorkJs/04/\${currentValue}\`, \`utf8\`)

    },0);
    fs.writeFile('./src/js/HomeWorkJs/05/script.txt', list);`;

let html501='';

let fun501 = function(){
    elWin.innerHTML='var fs = require(\'fs\');\n' +
        '    const jsList=fs.readFileSync(\'./src/js/HomeWorkJs/05/jsList.txt\', \'utf8\');\n' +
        '    var list = jsList.split(\' \').reduce(function (list, currentValue) {\n' +
        '        return list + fs.readFileSync(`./src/js/HomeWorkJs/04/\${currentValue}`, `utf8`)\n' +
        '\n' +
        '    },0);\n' +
        '    fs.writeFile(\'./src/js/HomeWorkJs/05/script.txt\', list);';

};

TextWindows[501]=new Dz(html501,js501,win501,fun501);
////// End 5-01
















