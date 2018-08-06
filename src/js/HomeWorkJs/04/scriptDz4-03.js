///// Begin 4-03
var win403=` - Объявите переменную с каким-то числом.<br>
 - Используя конструкцию if..else, напишите код,<br>
    который выводит в консоль:<br>
    • 1, если значение больше нуля,<br>
   • -1, если значение меньше нуля,<br>
   • 0, если значение равно нулю.`;

var js403=`var textNumber=document.getElementById('textNumber');
var textNumberPrevious= textNumber.previousElementSibling;
textNumberPrevious.textContent='Введите число и нажмите Enter';
var elDiv=document.createElement('b');



document.body.insertBefore(elDiv, textNumber );
console.log(textNumberPrevious);





textNumber.addEventListener('keypress', function(e){
    var text = this.previousElementSibling;


    if(isNaN(this.value)&&e.keyCode=='13'){
        text.textContent='Вы ввели не число! Введите число!';
    }
    else if(this.value && e.keyCode=='13'){

        switch(true) {
            case(this.value > 0)  :   text.textContent = "Положительное"; break;
            case(this.value < 0)  :   text.textContent = "Отрицательное"; break;
            case(this.value == 0) :   text.textContent= "Равно нулю";
        }
    }

});`;

var html403='<label for="textNumber">Введите число от 0 до 99</label>\n' +
    '<input type="text" id="textNumber">';

var fun403 = function(){
    elWin.innerHTML=html403;
    var textNumber=document.getElementById('textNumber');
    var textNumberPrevious= textNumber.previousElementSibling;
    textNumberPrevious.textContent='Введите число и нажмите Enter';
    var elDiv=document.createElement('b');



    elWin.insertBefore(elDiv, elWin.lastElementChild );






    textNumber.addEventListener('keypress', function(e){
        var text = this.previousElementSibling;


        if(isNaN(this.value)&&e.keyCode=='13'){
            text.textContent='Вы ввели не число! Введите число!';
        }
        else if(this.value && e.keyCode=='13'){

            switch(true) {
                case(this.value > 0)  :   text.textContent = "Число положительное"; break;
                case(this.value < 0)  :   text.textContent = "Число отрицательное"; break;
                case(this.value == 0) :   text.textContent= "Число равно нулю";
            }
        }

    });
};

TextWindows[403]=new Dz(html403,js403,win403,fun403);
///// End 4-03








