///// Begin 8-01



let win801=`Есть сайт, на котором человек регистрируется и может указать, что у него есть собака.<br>
    В зависимости от этого получим такие варианты:<br>
    var user1 = { name: "Harry", dog: null };<br>
var user2 = { name: "David", dog: { name: "Lucky" } };<br>
После регистрации владельцам собаки предлагается скидка,<br>
    за которую отвечает вот такой код:<br>
    function notify() {<br>
        console.log("You have a dog! Use this code for 50% off: UG4H6QE");<br>
    }
function checkDogOwner(user, callback) {<br>
    if (user && user.dog) {<br>
        callback();<br>
    }
}
// on registration success<br>
checkDogOwner(user, notify);<br>

Вам нужно покрыть тестами работу функции checkDogOwner.<br>`;

let js801=`describe("function checkDogOwner() test", function () {
    var user,
        spy,
        callBack;

    beforeEach(function() {
        user = { name: "David", dog: { name: "Lucky" } };
        spy = {
            foo: function() {}
        };
        spyOn(spy, "foo");
        callBack = function() {
            spy.foo();
        };
    });

    it("function exist", function () {
        expect(checkDogOwner).toBeDefined();
    });

    it("type of checkDogOwner is function", function () {
        expect(typeof checkDogOwner).toBe("function");
    });

    it("function have 2 expected arguments", function () {
        expect(checkDogOwner.length).toBe(2);
    });

    it("function returns undefined", function () {
        expect(checkDogOwner()).toBe(void(0));
        expect(checkDogOwner(user, callBack)).toBe(void(0));
    });

    it("function call with one any argument throw exeption", function () {
        expect(() => checkDogOwner(user)).toThrow();
    });

    it("function call with second non-function callback argument throw exeption", function () {
        callBack = 6;
        expect(() => checkDogOwner(user, callBack)).toThrow();
    });

    it("function call callback function if first argument has not-null dog propertie", function () {
        checkDogOwner(user, callBack);
        expect(spy.foo).toHaveBeenCalled();
    });

    it("function don't call callback function if first argument has null or undefined dog propertie", function () {
        user = 5;
        checkDogOwner(user, callBack);
        expect(spy.foo).not.toHaveBeenCalled();
    });
});
`;

let html801='Спасибо за подсказки Ивану!';

let fun801 = function(){
    elWin.innerHTML=html401;

};

TextWindows[801]=new Dz(html801,js801,win801,fun801);
////// End 8-01




