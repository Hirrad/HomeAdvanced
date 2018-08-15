///// Begin 8-02
let win802 = `Написать тесты для проверки работы метода splice, который есть у массивов.<br>
То есть, в данном случае мы пишем только тесты, которые будут работать с массивами и активно использовать метод splice.<br>
Проверить нужно каждую мелочь работы этого метода:<br>
есть ли метод вообще, правильные ли переданы параметры<br>
(напомню, что некоторые параметры не обязательные),<br>
какой результат возвращает метод, правильно ли он отрабатывает в принципе.<br>`;

let js802 = `describe('splice', function () {
    var arr,ar,arrayFun, funArray;

    beforeEach(function () {
        arr = ["Я", "ненавижу", "Jasmine", "!"];
        ar;

    });
    it('does the function exist', function () {
        expect((function(){
		return Array.prototype.hasOwnProperty('splice')
		})()).toBe(true);
        

    })

    it('Will issue a function with two parameters', function () {
        expect((function () {
            ar = arr.splice(0, 1);
            return ar;

        })()).toEqual(["Я"]);
        expect((function () {
            ar = arr.splice(1, 2);
            return ar;

        })()).toEqual(["Jasmine", "!"]);

    })
    it('how an array with two parameters changes', function () {
        expect((function () {
            arr.splice(0, 1);
            return arr;

        })()).toEqual(["ненавижу", "Jasmine", "!"]);

        expect((function () {
            arr.splice(1, 2);
            return arr;

        })()).toEqual(["ненавижу"]);


    })
    it('Will issue a function with 1 parameter', function () {
        expect((function () {
            ar = arr.splice(3);
            return ar;

        })()).toEqual(["!"]);

        expect((function () {
            ar = arr.splice(1);
            return ar;

        })()).toEqual(["ненавижу", "Jasmine"]);
    })

    it('how the array changes with a function with 1 parameter', function () {
        expect((function () {
            arr.splice(3);
            return arr;

        })()).toEqual(["Я", "ненавижу", "Jasmine"]);

        expect((function () {
            arr.splice(1);
            return arr;

        })()).toEqual(["Я"]);
    })

    it('how the array changes with the function of replacement and insertion', function () {
        expect((function () {
            arr.splice(1, 0, "реально");
            return arr;

        })()).toEqual(["Я", "реально", "ненавижу", "Jasmine", "!"]);

        expect((function () {
            arr.splice(0, 5, "Правда!");
            return arr;

        })()).toEqual(["Правда!"]);
    })
    it('that returns a function with a replacement or an insertion', function () {
        expect((function () {
            ar =arr.splice(1, 0, "реально");
            return ar;

        })()).toEqual([]);

        expect((function () {
            ar=arr.splice(0, 5, "Правда!");
            return ar;

        })()).toEqual(["Я", "реально", "ненавижу", "Jasmine", "!"]);
    })
    it('If nothing is passed to the function or an empty string is passed', function () {
        expect((function () {
            ar =arr.splice();
            return ar;

        })()).toEqual([]);

        expect((function () {
            ar=arr.splice('');
            return ar;

        })()).toEqual(["Я", "ненавижу", "Jasmine", "!"]);

        expect((function () {
            arr.splice('');
            return arr;

        })()).toEqual([]);

        expect((function () {
            arr.splice();
            return arr;

        })()).toEqual([]);
    })

})
`;

let html802 = '';

let fun802 = function () {
    elWin.innerHTML = '';

};

TextWindows[802] = new Dz(html802, js802, win802, fun802);
////// End 4-01
