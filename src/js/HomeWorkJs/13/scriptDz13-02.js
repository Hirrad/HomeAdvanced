///// Begin 13-02
let win1302=`- написать css-функцию для подключения шрифта, чтоб можно было не копировать большую страшную конструкцию, а писать так:<br>
$name = "Proxima Nova"<br>
$path = "fonts/proxima/"<br>
font($name, $path, "Proxima")<br>
font($name, $path, "ProximaBold", "bold")<br>
font($name, $path, "ProximaBoldItalic", "bold", "italic")<br>`;

let js1302=`// =============================================================================
// String Replace
// =============================================================================

@function str-replace($string, $search, $replace: "") {
  $index: str-index($string, $search);

  @if $index {
    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);
  }

  @return $string;
}

// =============================================================================
// Font Face
// =============================================================================

@mixin font-face($name, $path, $weight: null, $style: null, $exts: eot woff2 woff ttf svg) {
  $src: null;

  $extmods: (
          eot: "?",
          svg: "#" + str-replace($name, " ", "_")
  );

  $formats: (
          otf: "opentype",
          ttf: "truetype"
  );

  @each $ext in $exts {
    $extmod: if(map-has-key($extmods, $ext), $ext + map-get($extmods, $ext), $ext);
    $format: if(map-has-key($formats, $ext), map-get($formats, $ext), $ext);
    $src: append($src, url(quote($path + "." + $extmod)) format(quote($format)), comma);
  }

  @font-face {
    font-family: quote($name);
    font-style: $style;
    font-weight: $weight;
    src: $src;
  }
}`;

let html1302='';

let fun1302 = function(){
    elWin.innerHTML='';

};

TextWindows[1302]=new Dz(html1302,js1302,win1302,fun1302);
////// End 13-02





