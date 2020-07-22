"use strict";
// Old constructor example
// function OldConstructor(fieldValue) {
//     this.field = fieldValue || 123;
// }
//
// OldConstructor.prototype.method = function() {
//     return this.field;
// }
//
// const instance = new OldConstructor();
// instance.method();// -> 123
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//new ES6 version
var Constructor = /** @class */ (function () {
    function Constructor(arg) {
        this.field = 123;
        this.privateField = 123;
        this.field = arg;
    }
    Constructor.prototype.publicMethod = function () {
        return this.field;
    };
    Constructor.prototype.privateMethod = function () {
        return this.field + 1;
    };
    Constructor.prototype.protectedMethod = function () {
        return this.field + 2;
    };
    return Constructor;
}());
var instance = new Constructor(123);
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.childMethod = function () {
    };
    Child.prototype.protectedMethod = function () {
        return _super.prototype.protectedMethod.call(this);
    };
    Child.prototype.publicMethod = function () {
        return _super.prototype.publicMethod.call(this);
    };
    return Child;
}(Constructor));
//абстрактные классы
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    AbstractClass.prototype.protectedMethod = function () {
        return this.abstractField;
    };
    return AbstractClass;
}());
var NewChild = /** @class */ (function (_super) {
    __extends(NewChild, _super);
    function NewChild() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.abstractField = 123;
        return _this;
    }
    NewChild.prototype.abstractMethod = function () {
        return this.protectedMethod();
    };
    return NewChild;
}(AbstractClass));
var NewClass = /** @class */ (function () {
    function NewClass() {
        this.field = '123';
    }
    NewClass.prototype.method = function () {
        return "";
    };
    return NewClass;
}());
var MyComponent = /** @class */ (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            state1: '123'
        };
        return _this;
    }
    MyComponent.prototype.render = function () {
        return (React.createElement("div", null, this.props.prop1));
    };
    return MyComponent;
}(React.Component));
//# sourceMappingURL=classExample.js.map