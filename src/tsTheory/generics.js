"use strict";
// Generics (<>)
var myArray = [1, 2, 3]; //определили свой тип (по умолчанию Array<>). Определили в кач generic число. Теперь стандартные методы массива не работают.
[1, 2, 3].map(function (f) { return f + 1; }); //Напоминание метода map ->[2,3,4]
['1', '2', '3'].map(function (f) { return f + 1; });
myArray.map(function (f, index, arr) { return f + 1; });
//--
function identity(arg) {
    return arg;
}
var result10 = identity(12);
function getLen(arr) {
    return arr.length;
}
getLen([1, 2, 3, '4']);
function withType(arg) {
    return {
        type: typeof arg,
        value: arg
    };
}
var result11 = withType(123); //главный вызов ф. Передаем арг тип => определяется U как number => interface определился T=U=number
var omittedObject = {
    type: 'asd' //останется только type.
};
var picked = {
    isEmpty: true,
    value: 123,
};
var partial = { //добавляет к каждому ключу "?", поэтому можно писать любой ключ. Но при неумелом использовании может привести к множеству "if"ов.
};
//# sourceMappingURL=generics.js.map