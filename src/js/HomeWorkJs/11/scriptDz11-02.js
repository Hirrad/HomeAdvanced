///// Begin 11-02
let win1102=`Написать функции (желательно как можно короче):<br>
const getInitials = ...;<br>
console.log(getInitials({ firstName: "Andy", lastName: "Davidson" })); // A.D.<br>
console.log(getInitials({ firstName: "Andy" })); // A.<br>
console.log(getInitials({ lastName: "Davidson" })); // D.<br>

// ---<br>
const doubleArray = ...;<br>

console.log(doubleArray([1, 2, 3])); // [1, 2, 3, 1, 2, 3]<br>
console.log(doubleArray([{ one: 1, two: 2 }])); // [{ one: 1, two: 2 }, { one: 1, two: 2 }]<br>

// ---<br>
const merge = ...<br>

console.log(merge({ one: 1, two: 2 }, { two: 22, three: 3 })); // { one: 1, two: 22, three: 3 }<br>`;

let js1102=`const doubleArray=function (a) {
    return  [...a,...a]
}
const merge = function (a) {

    var result=new Object(),i=0;
    while(arguments[i]){
        Object.assign(result,arguments[i])
        i++;
    }
    return result
}
const getInitials=function ({firstName, lastName}={}) {
    return \${firstName ? (firstName[0].toUpperCase() + '.') : ''}\${lastName ? (lastName[0].toUpperCase() + '.') : ''};
}`;

let html1102='';

let fun1102 = function(){
    elWin.innerHTML='';
    const doubleArray=function (a) {
        return  [...a,...a]
    }
    const merge = function (a) {

        var result=new Object(),i=0;
        while(arguments[i]){
            Object.assign(result,arguments[i])
            i++;
        }
        return result
    }
    const getInitials=function ({firstName, lastName}={}) {
        return `${firstName?(firstName[0].toUpperCase()+'.'):''}${lastName?(lastName[0].toUpperCase()+'.'):''}`;
    };
};

TextWindows[1102]=new Dz(html1102,js1102,win1102,fun1102);
////// End 11-02





