"use strict";
var str = 'string';
var num = 2;
var nan = NaN;
var obj = {};
var arr = [];
var nul = null;
var sym = Symbol();
var und = undefined;
var _void = void 0;
var bool = true;
var fn = function () { };
var tsStr = 'asd'; //тс автоматом определил тип, так что не обязательно припысывать :string
function sumJS(arr) {
    return arr.concat([1]);
}
function sumTS(arr) {
    return arr.reduce(function (a, v) { return a + v; });
}
function sumTSConcat(a) {
    return a.concat('Hello ', 'World');
}
var tsNumber = 2;
var tsString = 'str';
var result = tsString + tsNumber;
var resultTwo = parseInt(tsString) - tsNumber;
// if (typeof tsString === 'number') {
//     const resultTwo = tsString - tsNumber;
// }
// Union type
var strOrNumber = '2';
var strOrNumber1 = '2';
var strOrNumber2 = '2';
var strOrNumber3 = '2';
var strOrNumber4 = '2';
// Array
var tsArray = [1, 2, 3];
var tsArrayGeneric = [];
var unionArray = [1, 2, '2'];
var unionArray2 = [1, 2, '2'];
// Tuple
var myTuple = [1, '2'];
var value1 = myTuple[0], value2 = myTuple[1];
var myObj = { a: 1, b: '2' }; //тс автоматом определит тип, так что не обязательно припысывать :MyObjType (const myObj= {a: 1, b: '2'};)
var value = myObj.b;
var myObj2 = {
    a: 2,
    b: '123',
    c: [1],
    e: undefined,
};
var val = myObj2.c;
var val2 = myObj2.e;
;
var ApiAnswer = { key: 'asd', key2: 'asd' };
var val3 = ApiAnswer.randomkey; //увидит тип string
//типизация функций
var Methods;
(function (Methods) {
    Methods[Methods["add"] = 0] = "add";
    Methods[Methods["sub"] = 1] = "sub";
})(Methods || (Methods = {}));
function calculate(method, left, right) {
    switch (method) {
        case Methods.add: return left + right;
        case Methods.sub: return left - right;
    }
}
var sum = calculate(Methods.add, 2, 2);
var ArrowFn = function () { return 2; }; //либо FnInterface вместо TypeFn
var some = '2'; //any не желательно
some.reduce();
var un = '2';
if (typeof un === 'string') {
    un.concat();
}
function neverFn() {
    throw new Error('my exception');
}
var someValue = neverFn();
//# sourceMappingURL=examples.js.map