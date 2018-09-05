///// Begin 15-01
let win1501=`1. (переменные)<br>
- Объявите две переменные: admin и name.<br>
- Запишите в name строку "Harry".<br>
- Скопируйте значение из name в admin.<br>
- Выведите admin (должно вывести "Harry").<br>`;

let js1501='$(document).ready(function () {\n' +
    '    let imageSlide = $(\'.bxSlider\').bxSlider(\n' +
    '        {\n' +
    '            mode: \'fade\',\n' +
    '            hideControlOnEnd: true,\n' +
    '            adaptiveWidth: true,\n' +
    '            adaptiveHeight: true,\n' +
    '            adaptiveHeightSpeed: 500,\n' +
    '            touchEnabled: true,\n' +
    '            responsive: true,\n' +
    '            captions: true,\n' +
    '            slideWidth: 500,\n' +
    '            slideHeight: 312,\n' +
    '            onSlideNext: function ($slideElement,oldIndex,NewIndex) {\n' +
    '                //предпросмотр для правой кнопки\n' +
    '                if(imageSlide.getSlideElement(1+NewIndex)[0])  var slideNext = imageSlide.getSlideElement(1+NewIndex)[0].firstChild.cloneNode();\n' +
    '                else var slideNext = imageSlide.getSlideElement(0)[0].firstChild.cloneNode();\n' +
    '                if(imageSlide.getSlideElement(oldIndex)[0])  var slidePrev = imageSlide.getSlideElement(oldIndex)[0].firstChild.cloneNode();\n' +
    '                else var slidePrev = imageSlide.getSlideElement(0)[0].firstChild.cloneNode();\n' +
    '                $(\'.bx-previewNext\').html(\'\').html(slideNext);\n' +
    '                $(\'.bx-previewPrev\').html(\'\').html(slidePrev);\n' +
    '            },\n' +
    '            onSlidePrev: function ($slideElement,oldIndex) {\n' +
    '                //предпросмотр для левой кнопки\n' +
    '                if(imageSlide.getSlideElement(oldIndex-2)[0])  var slidePrev = imageSlide.getSlideElement(oldIndex-2)[0].firstChild.cloneNode();\n' +
    '                else var slidePrev = imageSlide.getSlideElement(imageSlide.getSlideCount())[0].firstChild.cloneNode();\n' +
    '                if(imageSlide.getSlideElement(oldIndex)[0])  var slideNext = imageSlide.getSlideElement(oldIndex)[0].firstChild.cloneNode();\n' +
    '                else var slideNext = imageSlide.getSlideElement(imageSlide.getSlideCount()-1)[0].firstChild.cloneNode();\n' +
    '                $(\'.bx-previewNext\').html(\'\').html(slideNext);\n' +
    '                $(\'.bx-previewPrev\').html(\'\').html(slidePrev);\n' +
    '            }\n' +
    '        }\n' +
    '    );\n' +
    '    $(\'.bx-previewNext\').html(imageSlide.getSlideElement(1)[0].firstChild.cloneNode());\n' +
    '    $(\'.bx-previewPrev\').html(imageSlide.getSlideElement(imageSlide.getSlideCount()-1)[0].firstChild.cloneNode());\n' +
    '});';

let html1501='<div class="slider">\n' +
    '                <div class="bxSlider">\n' +
    '                    <div><img src="/img/background.jpg"/></div>\n' +
    '                    <div><img src="/img/charaterWithHair.png"/></div>\n' +
    '                    <div><img src="/img/charaterWithoutHair.png"/></div>\n' +
    '                    <div><img src="/img/header-img.png"/></div>\n' +
    '                    <div><img src="/img/background.jpg"/></div>\n' +
    '                    <div><img src="/img/charaterWithHair.png"/></div>\n' +
    '                    <div><img src="/img/charaterWithoutHair.png"/></div>\n' +
    '                    <div><img src="/img/header-img.png"/></div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="bx-previewPrev"></div>\n' +
    '                <div class="bx-previewNext"></div>\n' +
    '            </div>';

let fun1501 = function(){
    elWin.innerHTML=html1501;
    $(document).ready(function () {
        let imageSlide = $('.bxSlider').bxSlider(
            {
                mode: 'fade',
                hideControlOnEnd: true,
                adaptiveWidth: true,
                adaptiveHeight: true,
                adaptiveHeightSpeed: 500,
                touchEnabled: true,
                responsive: true,
                captions: true,
                slideWidth: 500,
                slideHeight: 312,
                onSlideNext: function ($slideElement,oldIndex,NewIndex) {
                    //предпросмотр для правой кнопки
                    if(imageSlide.getSlideElement(1+NewIndex)[0])  var slideNext = imageSlide.getSlideElement(1+NewIndex)[0].firstChild.cloneNode();
                    else var slideNext = imageSlide.getSlideElement(0)[0].firstChild.cloneNode();
                    if(imageSlide.getSlideElement(oldIndex)[0])  var slidePrev = imageSlide.getSlideElement(oldIndex)[0].firstChild.cloneNode();
                    else var slidePrev = imageSlide.getSlideElement(0)[0].firstChild.cloneNode();
                    $('.bx-previewNext').html('').html(slideNext);
                    $('.bx-previewPrev').html('').html(slidePrev);
                },
                onSlidePrev: function ($slideElement,oldIndex) {
                    //предпросмотр для левой кнопки
                    if(imageSlide.getSlideElement(oldIndex-2)[0])  var slidePrev = imageSlide.getSlideElement(oldIndex-2)[0].firstChild.cloneNode();
                    else var slidePrev = imageSlide.getSlideElement(imageSlide.getSlideCount())[0].firstChild.cloneNode();
                    if(imageSlide.getSlideElement(oldIndex)[0])  var slideNext = imageSlide.getSlideElement(oldIndex)[0].firstChild.cloneNode();
                    else var slideNext = imageSlide.getSlideElement(imageSlide.getSlideCount()-1)[0].firstChild.cloneNode();
                    $('.bx-previewNext').html('').html(slideNext);
                    $('.bx-previewPrev').html('').html(slidePrev);
                }
            }
        );
        $('.bx-previewNext').html(imageSlide.getSlideElement(1)[0].firstChild.cloneNode());
        $('.bx-previewPrev').html(imageSlide.getSlideElement(imageSlide.getSlideCount()-1)[0].firstChild.cloneNode());
    });
};

TextWindows[1501]=new Dz(html1501,js1501,win1501,fun1501);
////// End 15-01














