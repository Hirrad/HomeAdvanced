//вывод в консоль
var log = function (el) {
    return console.log(el);
}
//конец вывода в консоль


//для рисования сетки canvas
function eventWindowLoaded () {
    canvasApp(); //包含整个Canvas应用程序
}
function canvasSupport (e) {

    return !!e.getContext;

}
function canvasApp () {
    var myCanvas = document.getElementById('smile');

    if (!canvasSupport(myCanvas)) {
        return;
    }

    var ctx = myCanvas.getContext('2d');

    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;

    function drawScreen () {
        // 横线与竖线的是距
        var dx = 50;
        var dy = 50;

        // 初始坐标原点
        var x = 0;
        var y = 0;
        var w = myCanvas.width;
        var h = myCanvas.height;

        // 单个步长所表示的长度

        var xy = 10;

        ctx.lineWidth = 1;

        // 画横线
        while (y < h) {
            y = y + dy;
            ctx.moveTo(x, y);
            ctx.lineTo(w, y);
            ctx.stroke();

            //横坐标的数字
            ctx.font = "1px Calibri";
            ctx.fillText(xy, x, y);
            xy += 10;
        }

        // 画竖线
        y =0;
        xy =10;
        while (x < w) {
            x = x + dx;
            ctx.moveTo(x, y);
            ctx.lineTo(x,h);
            ctx.stroke();
            //纵坐标的数字
            ctx.font = "1px Calibri";
            ctx.fillText(xy,x,10);
            xy+=10;
        }
    }

    drawScreen();

}
///// конец рисования сетки для canvas

/// function random for min to max
function getRandom(min, max) {
    return Math.floor(Math.random() * ((max+1) - min)) + min;
}
////