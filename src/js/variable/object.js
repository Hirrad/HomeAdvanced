/////////////////// Start objects

function Dz(html, js, win, fun) {
    this.js = js;
    this.fun = fun;
    this.html = html;
    this.htmlBr= function (html) {
        return '<pre><code class="language-markup">'+html+'</code></pre>';
    };
    this.win = win;
    // this.jsBr = (function (js) {
    //     return js.replace(/;/g, ';<Br>');
    //
    // })(this.js);
    this.jsBr= (function (js) {
        return '<pre><code class="language-javascript">'+js+'</code></pre>';
    })(this.js);
}

/////////////////// End of objects


//

