/////////////////// Start objects

function Dz(html, js, win, fun) {
    this.js = js;
    this.fun = fun;
    this.html = html;
    this.win = win
    this.jsBr = (function (js) {
        return js.replace(/;/g, ';<Br>');

    })(this.js);
}

/////////////////// End of objects


//

