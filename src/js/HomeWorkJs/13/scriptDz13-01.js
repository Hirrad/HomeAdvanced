///// Begin 13-01
let win1301=`- сделать спрайт со своими иконками<br>
- написать стили для этих иконок, чтоб можно было потом только указывать класс<br>
(пример, <i class="icon icon-circle"></i>)<br>`;

let js1301='$iconBackground: #6b96ad;\n' +
    '$iconSpitit:"../img/icon.png";\n' +
    '$maxCalum : 9;\n' +
    '$i: 0;\n' +
    '$widthBoth: -42.52;\n' +
    '.icon{\n' +
    '  background: $iconBackground;\n' +
    '  background-image: url($iconSpitit);\n' +
    '  width: 42.52px;\n' +
    '  height: 42.52px;\n' +
    '}\n' +
    '\n' +
    '@while $maxCalum>0 {\n' +
    '  .icon-#{$i} {\n' +
    '    background-position: $widthBoth+px 0px;\n' +
    '  }\n' +
    '  .icon-#{$i + 9} {\n' +
    '    background-position: $widthBoth+px #{-42.52}px;\n' +
    '  }\n' +
    '  .icon-#{$i + 18} {\n' +
    '    background-position: $widthBoth+px #{-85.04}px;\n' +
    '  }\n' +
    '  .icon-#{$i + 27} {\n' +
    '    background-position: $widthBoth+px #{-127.56}px;\n' +
    '  }\n' +
    '  .icon-#{$i + 36} {\n' +
    '    background-position: $widthBoth+px #{-170.08}px;\n' +
    '  }\n' +
    '  $maxCalum: $maxCalum - 1;\n' +
    '  $i: $i + 1;\n' +
    '  $widthBoth: $widthBoth - 42.52;\n' +
    '}\n' +
    '\n';

let html1301='<!--div.flex>div.icon.icon-$*36-->\n' +
    '\n' +
    '            <div class="flex">\n' +
    '                <div class="icon icon-1"></div>\n' +
    '                <div class="icon icon-2"></div>\n' +
    '                <div class="icon icon-3"></div>\n' +
    '                <div class="icon icon-4"></div>\n' +
    '                <div class="icon icon-5"></div>\n' +
    '                <div class="icon icon-6"></div>\n' +
    '                <div class="icon icon-7"></div>\n' +
    '                <div class="icon icon-8"></div>\n' +
    '                <div class="icon icon-9"></div>\n' +
    '                <div class="icon icon-10"></div>\n' +
    '                <div class="icon icon-11"></div>\n' +
    '                <div class="icon icon-12"></div>\n' +
    '                <div class="icon icon-13"></div>\n' +
    '                <div class="icon icon-14"></div>\n' +
    '                <div class="icon icon-15"></div>\n' +
    '                <div class="icon icon-16"></div>\n' +
    '                <div class="icon icon-17"></div>\n' +
    '                <div class="icon icon-18"></div>\n' +
    '                <div class="icon icon-19"></div>\n' +
    '                <div class="icon icon-20"></div>\n' +
    '                <div class="icon icon-21"></div>\n' +
    '                <div class="icon icon-22"></div>\n' +
    '                <div class="icon icon-23"></div>\n' +
    '                <div class="icon icon-24"></div>\n' +
    '                <div class="icon icon-25"></div>\n' +
    '                <div class="icon icon-26"></div>\n' +
    '                <div class="icon icon-27"></div>\n' +
    '                <div class="icon icon-28"></div>\n' +
    '                <div class="icon icon-29"></div>\n' +
    '                <div class="icon icon-30"></div>\n' +
    '                <div class="icon icon-31"></div>\n' +
    '                <div class="icon icon-32"></div>\n' +
    '                <div class="icon icon-33"></div>\n' +
    '                <div class="icon icon-34"></div>\n' +
    '                <div class="icon icon-35"></div>\n' +
    '                <div class="icon icon-36"></div>\n' +
    '            </div>';

let fun1301 = function(){
    elWin.innerHTML=html1301;

};

TextWindows[1301]=new Dz(html1301,js1301,win1301,fun1301);
////// End 13-01





