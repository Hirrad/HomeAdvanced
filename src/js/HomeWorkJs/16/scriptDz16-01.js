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
