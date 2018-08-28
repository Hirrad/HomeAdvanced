///// Begin 13-02
let win1302=`- написать css-функцию для подключения шрифта, чтоб можно было не копировать большую страшную конструкцию, а писать так:<br>
$name = "Proxima Nova"<br>
$path = "fonts/proxima/"<br>
font($name, $path, "Proxima")<br>
font($name, $path, "ProximaBold", "bold")<br>
font($name, $path, "ProximaBoldItalic", "bold", "italic")<br>`;

let js1302='// =============================================================================\n' +
    '// String Replace\n' +
    '// =============================================================================\n' +
    '\n' +
    '@function str-replace($string, $search, $replace: "") {\n' +
    '  $index: str-index($string, $search);\n' +
    '\n' +
    '  @if $index {\n' +
    '    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);\n' +
    '  }\n' +
    '\n' +
    '  @return $string;\n' +
    '}\n' +
    '\n' +
    '// =============================================================================\n' +
    '// Font Face\n' +
    '// =============================================================================\n' +
    '\n' +
    '@mixin font-face($name, $path, $weight: null, $style: null, $exts: eot woff2 woff ttf svg) {\n' +
    '  $src: null;\n' +
    '\n' +
    '  $extmods: (\n' +
    '          eot: "?",\n' +
    '          svg: "#" + str-replace($name, " ", "_")\n' +
    '  );\n' +
    '\n' +
    '  $formats: (\n' +
    '          otf: "opentype",\n' +
    '          ttf: "truetype"\n' +
    '  );\n' +
    '\n' +
    '  @each $ext in $exts {\n' +
    '    $extmod: if(map-has-key($extmods, $ext), $ext + map-get($extmods, $ext), $ext);\n' +
    '    $format: if(map-has-key($formats, $ext), map-get($formats, $ext), $ext);\n' +
    '    $src: append($src, url(quote($path + "." + $extmod)) format(quote($format)), comma);\n' +
    '  }\n' +
    '\n' +
    '  @font-face {\n' +
    '    font-family: quote($name);\n' +
    '    font-style: $style;\n' +
    '    font-weight: $weight;\n' +
    '    src: $src;\n' +
    '  }\n' +
    '}';

let html1302='';

let fun1302 = function(){
    elWin.innerHTML='';

};

TextWindows[1302]=new Dz(html1302,js1302,win1302,fun1302);
////// End 13-02





