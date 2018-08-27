///// Begin 12-01
let win1201=`Сделать кнопку в виде плюса, на которую можно нажать и выбрать файл (или несколько).<br>

Под кнопкой должны наполняться два списка:<br>
- в левый список нужно писать файлы, которые картинки<br>
- в правый список нужно писать файлы, которые не картинки<br>
- записывать нужно имена файлов и их размер<br>
- размер должен быть в человеческом виде (например, 5.2 Мб вместо 5292344 байт)<br>

Кто планирует стать классным программистом - может также сделать:<br>
- кроме имени картинки выводить предпросмотр размером auto x 30px<br>
- возможность удаления отдельных строк из списка<br>
- вывод ошибки, если был выбран файл размером более 5 Мб (прятать ошибку - при клике на кнопку плюса)<br>`;

let js1201=`document.querySelector('.inputImageMultiple').addEventListener('change',function(e){
    loadImg(e);
    })
document.querySelector('.inputImageMultiple').addEventListener('drop',function(e){
    loadImg(e);
})
//Type checking func- tions for type
function testTypeImage(fileType, type) {
    let arrTypeImage=type.filter(i=>{
        return i==fileType.type.split('/')[1];//берем только вторую часть типа
    })
    return arrTypeImage.length;
}
//Size Checking Funcures
function testSize(testFile, maxSize) {
    return testFile.size<maxSize?true:false}

    function exchangeByteForMb(byte) {
        return (byte/(Math.pow(1024,2))).toFixed(2)
    }


// The function of deleting a parent block by its element
function deleteImg(block, blockDeleteClass) {
    document.querySelector(block).addEventListener('click', (e) => {
if(e.target.classList.contains(blockDeleteClass)){
    e.preventDefault();
    e.target.parentElement.remove();
}
        })

}
deleteImg('.startFlex','deleteImg');
deleteImg('.startFlex__column','infoNoImage__info__delete');

//function for processing the downloaded image
function loadImg(e) {
    var files=e.target.files;
    if(files.length){
        [].forEach.call(files, function (file) {
            const reader = new FileReader();
            //проветка на тип зашруженного файла и размер
            exchangeByteForMb(file.size)>5&&console.log('55');
            if(testTypeImage(file,['gif','jpeg','pjpeg','png'])&&exchangeByteForMb(file.size)<5){
                reader.onload = function(e) {
                    var fileData = e.target.result;//base64
                    var error = e.target.error;
                    error&&log('Файл не загрузился!');
                    var block = \`<div class="blockFlexImgInfo">
                               <img src="\${fileData}" alt="">
                             <a href="#" class="deleteImg "></a>
                        <div class="blockFlexImgInfo__name">\${file.name.split('.')[0]}</div>
                        <div class="blockFlexImgInfo__size">\${exchangeByteForMb(file.size)} Mb</div>
                    </div>\`;
                    document.querySelector('.blockFlexImg__square').insertAdjacentHTML('afterEnd', block);
                };
                reader.readAsDataURL(file);
            }
            else if(testTypeImage(file,['gif','jpeg','pjpeg','png'])){
                var errorSize=document.createElement('div');
                errorSize.classList.add('errorSizeImg');
                errorSize.innerHTML=\`Error: \${file.name.split('.')[0]} превышает  максимальный размер 5 Mb!\`;
                document.querySelector('.errorSizeImgConteiner').appendChild(errorSize);

                setTimeout( ()=> document.querySelector('.errorSizeImg').remove(),7000);

                log (66666);
            }
            else {
                var blockNoImage=\`<article class="infoNoImage">
                        <div class="flex">
                            <pre class="infoNoImage__info-maxSize">\${file.name.split('.')[0]}</pre>
                            <pre class="infoNoImage__info">\${file.type.split('/')[1]}</pre>
                            <pre class="infoNoImage__info">\${exchangeByteForMb(file.size)} Mb</pre>
                        </div>
                        <pre class="infoNoImage__info__delete ">Delete </pre>
                    </article>\`;
                document.querySelector('.startFlex__column').insertAdjacentHTML('beforeEnd', blockNoImage);
            }
        });
        
        e.target.value='';
    }
}`;

let html1201='<section class="block10 positionReletive">\n' +
    '                <article class="errorSizeImgConteiner">\n' +
    '                </article>\n' +
    '\n' +
    '                <section class="twoBlock10 startFlex">\n' +
    '                    <div class="blockFlexImg__square">\n' +
    '                        <input type="file" class="inputImageMultiple" multiple>\n' +
    '                    </div>\n' +
    '                </section>\n' +
    '                <section class="twoBlock10 startFlex__column">\n' +
    '                </section>\n' +
    '            </section>';

let fun1201 = function(){
    elWin.innerHTML=html1201;
    document.querySelector('.inputImageMultiple').addEventListener('change',function(e){
        loadImg(e);
    })
    document.querySelector('.inputImageMultiple').addEventListener('drop',function(e){
        loadImg(e);
    })
//Type checking func- tions for type
    function testTypeImage(fileType, type) {
        let arrTypeImage=type.filter(i=>{
            return i==fileType.type.split('/')[1];//берем только вторую часть типа
        })
        return arrTypeImage.length;
    }
//Size Checking Funcures
    function testSize(testFile, maxSize) {
        return testFile.size<maxSize?true:false}

    function exchangeByteForMb(byte) {
        return (byte/(Math.pow(1024,2))).toFixed(2)
    }


// The function of deleting a parent block by its element
    function deleteImg(block, blockDeleteClass) {
        document.querySelector(block).addEventListener('click', (e) => {
            if(e.target.classList.contains(blockDeleteClass)){
                e.preventDefault();
                e.target.parentElement.remove();
            }
        })

    }
    deleteImg('.startFlex','deleteImg');
    deleteImg('.startFlex__column','infoNoImage__info__delete');

//function for processing the downloaded image
    function loadImg(e) {
        var files=e.target.files;
        if(files.length){
            [].forEach.call(files, function (file) {
                const reader = new FileReader();
                //проветка на тип зашруженного файла и размер
                exchangeByteForMb(file.size)>5&&console.log('55');
                if(testTypeImage(file,['gif','jpeg','pjpeg','png'])&&exchangeByteForMb(file.size)<5){
                    reader.onload = function(e) {
                        var fileData = e.target.result;//base64
                        var error = e.target.error;
                        error&&log('Файл не загрузился!');
                        var block = `<div class="blockFlexImgInfo">
                               <img src="${fileData}" alt="">
                             <a href="#" class="deleteImg "></a>
                        <div class="blockFlexImgInfo__name">${file.name.split('.')[0]}</div>
                        <div class="blockFlexImgInfo__size">${exchangeByteForMb(file.size)} Mb</div>
                    </div>`;
                        document.querySelector('.blockFlexImg__square').insertAdjacentHTML('afterEnd', block);
                    };
                    reader.readAsDataURL(file);
                }
                else if(testTypeImage(file,['gif','jpeg','pjpeg','png'])){
                    var errorSize=document.createElement('div');
                    errorSize.classList.add('errorSizeImg');
                    errorSize.innerHTML=`Error: ${file.name.split('.')[0]} превышает  максимальный размер 5 Mb!`;
                    document.querySelector('.errorSizeImgConteiner').appendChild(errorSize);

                    setTimeout( ()=> document.querySelector('.errorSizeImg').remove(),7000);

                    log (66666);
                }
                else {
                    var blockNoImage=`<article class="infoNoImage">
                        <div class="flex">
                            <pre class="infoNoImage__info-maxSize">1. ${file.name.split('.')[0]}</pre>
                            <pre class="infoNoImage__info">${file.type.split('/')[1]}</pre>
                            <pre class="infoNoImage__info">${exchangeByteForMb(file.size)} Mb</pre>
                        </div>
                        <pre class="infoNoImage__info__delete ">Delete </pre>
                    </article>`;
                    document.querySelector('.startFlex__column').insertAdjacentHTML('beforeEnd', blockNoImage);
                }
            });

            e.target.value='';
        }
    }
};

TextWindows[1201]=new Dz(html1201,js1201,win1201,fun1201);
////// End 12-01

























