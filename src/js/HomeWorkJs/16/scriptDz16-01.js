///// Begin 16-01
let win1601=`Выбрать любой смайл (например из скайпа или слэка) и нарисовать его на канвасе.
По клику/наведению на смайл (не на весь канвас) он должен моргать.
<br>`;

let js1601='var x = 8;\n' +
    'var ctx;\n' +
    'clipSmail(false);//рисуем на canvas смайл без анимации\n' +
    'function clipSmail(i = true) {\n' +
    '\n' +
    '    ctx = smile.getContext(\'2d\');\n' +
    '    ctx.clearRect(0, 0, smile.width, smile.height);\n' +
    '    smile.width = $(\'#smile\')[0].clientWidth;\n' +
    '    smile.height = $(\'#smile\')[0].clientHeight;\n' +
    '\n' +
    '    ctx.beginPath();\n' +
    '\n' +
    '    ctx.fillStyle = \'#FFE073\';\n' +
    '    ctx.arc(35, 35, 30, 0, Math.PI * 2, true); // Внешняя окружность\n' +
    '    ctx.fill();\n' +
    '    ctx.stroke();\n' +
    '    ctx.closePath();\n' +
    '\n' +
    '    ctx.beginPath();\n' +
    '    ctx.fillStyle = \'#fff\';\n' +
    '    ctx.moveTo(20, 45);\n' +
    '    ctx.arc(35, 45, 15, 0, Math.PI, false);  // рот (по часовой стрелке)\n' +
    '    ctx.moveTo(25, 20);\n' +
    '\n' +
    '    ctx.fill();\n' +
    '    ctx.stroke();\n' +
    '    ctx.closePath();\n' +
    '    ctx.lineWidth = 1;\n' +
    '\n' +
    '\n' +
    '    drawEllipse(ctx, [50, 25], [8, 5], Math.PI / 2, 10); //правый глаз\n' +
    '    drawEllipse(ctx, [20, 25], [1, 5], Math.PI / 2, 10);// левый зрачек\n' +
    '    if (x > 0 && x != 9 && i) {\n' +
    '        drawEllipse(ctx, [20, 25], [x, 5], Math.PI / 2, 10);// левый глаз анимация\n' +
    '        var requestAnimation = requestAnimationFrame(clipSmail);// запускаем анимацию\n' +
    '    }\n' +
    '    else {\n' +
    '        x = 8;\n' +
    '        cancelAnimationFrame(requestAnimation); //прекращаем анимацию\n' +
    '        drawEllipse(ctx, [20, 25], [8, 5], Math.PI / 2, 10);// возвращаем глаз в первоначальное положение\n' +
    '    }\n' +
    '    x -= 0.35;\n' +
    '};\n' +
    '$(\'#smile\')[0].addEventListener(\'click\', function (e) {\n' +
    '//проверям кликаем ли мышкой в проскости смайла\n' +
    '    if (Math.sqrt(Math.pow(e.offsetX - 35, 2) + Math.pow(e.offsetY - 35, 2)) <= 30) {\n' +
    '        //если все ок запускаем анимацию\n' +
    '        requestAnimationFrame(clipSmail);\n' +
    '    }\n' +
    '\n' +
    '\n' +
    '})\n' +
    '//рисуем элипс\n' +
    'function drawEllipse(ctx, coords, sizes, angle) {\n' +
    '    ctx.beginPath();\n' +
    '    ctx.save(); // сохраняем стейт контекста\n' +
    '    ctx.translate(coords[0], coords[1]); // перемещаем координаты в центр эллипса\n' +
    '    ctx.rotate(angle); // поворачиваем координатную сетку на нужный угол\n' +
    '    ctx.scale(1, sizes[1] / sizes[0]); // сжимаем по вертикали\n' +
    '    ctx.arc(0, 0, sizes[0], 0, Math.PI * 2); // рисуем круг\n' +
    '    ctx.restore(); // восстанавливает стейт, иначе обводка и заливка будут сплющенными и повёрнутыми\n' +
    '    ctx.fillStyle = \'#000\';\n' +
    '    ctx.fill();\n' +
    '    ctx.stroke(); // обводим\n' +
    '    ctx.closePath();\n' +
    '}\n';

let html1601='<canvas id="smile"></canvas>';

let fun1601 = function(){
    elWin.innerHTML=html1601;
    var x = 8;
    var ctx;
    clipSmail(false);//рисуем на canvas смайл без анимации
    function clipSmail(i = true) {

        ctx = smile.getContext('2d');
        ctx.clearRect(0, 0, smile.width, smile.height);
        smile.width = $('#smile')[0].clientWidth;
        smile.height = $('#smile')[0].clientHeight;

        ctx.beginPath();

        ctx.fillStyle = '#FFE073';
        ctx.arc(35, 35, 30, 0, Math.PI * 2, true); // Внешняя окружность
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.moveTo(20, 45);
        ctx.arc(35, 45, 15, 0, Math.PI, false);  // рот (по часовой стрелке)
        ctx.moveTo(25, 20);

        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.lineWidth = 1;


        drawEllipse(ctx, [50, 25], [8, 5], Math.PI / 2, 10); //правый глаз
        drawEllipse(ctx, [20, 25], [1, 5], Math.PI / 2, 10);// левый зрачек
        if (x > 0 && x != 9 && i) {
            drawEllipse(ctx, [20, 25], [x, 5], Math.PI / 2, 10);// левый глаз анимация
            var requestAnimation = requestAnimationFrame(clipSmail);// запускаем анимацию
        }
        else {
            x = 8;
            cancelAnimationFrame(requestAnimation); //прекращаем анимацию
            drawEllipse(ctx, [20, 25], [8, 5], Math.PI / 2, 10);// возвращаем глаз в первоначальное положение
        }
        x -= 0.35;
    };
    $('#smile')[0].addEventListener('click', function (e) {
//проверям кликаем ли мышкой в проскости смайла
        if (Math.sqrt(Math.pow(e.offsetX - 35, 2) + Math.pow(e.offsetY - 35, 2)) <= 30) {
            //если все ок запускаем анимацию
            requestAnimationFrame(clipSmail);
        }


    })
//рисуем элипс
    function drawEllipse(ctx, coords, sizes, angle) {
        ctx.beginPath();
        ctx.save(); // сохраняем стейт контекста
        ctx.translate(coords[0], coords[1]); // перемещаем координаты в центр эллипса
        ctx.rotate(angle); // поворачиваем координатную сетку на нужный угол
        ctx.scale(1, sizes[1] / sizes[0]); // сжимаем по вертикали
        ctx.arc(0, 0, sizes[0], 0, Math.PI * 2); // рисуем круг
        ctx.restore(); // восстанавливает стейт, иначе обводка и заливка будут сплющенными и повёрнутыми
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.stroke(); // обводим
        ctx.closePath();
    }

};

TextWindows[1601]=new Dz(html1601,js1601,win1601,fun1601);
////// End 16-01










