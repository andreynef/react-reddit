"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarWarsNameClass = void 0;
var react_1 = __importDefault(require("react"));
// import styles from './StarWarsNameClass.css';
var unique_names_generator_1 = require("unique-names-generator");
var StarWarsNameClass = /** @class */ (function (_super) {
    __extends(StarWarsNameClass, _super);
    function StarWarsNameClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StarWarsNameClass.prototype.render = function () {
        return (react_1.default.createElement("section", null,
            react_1.default.createElement("span", null, this.randomName()),
            react_1.default.createElement("div", null),
            react_1.default.createElement("button", { className: true }),
            " I need a name!"));
        section >
        ;
        ;
    };
    StarWarsNameClass.prototype.randomName = function () {
        return unique_names_generator_1.uniqueNamesGenerator({ dictionaries: [unique_names_generator_1.starWars], length: 1 });
    };
    return StarWarsNameClass;
}(react_1.default.PureComponent));
exports.StarWarsNameClass = StarWarsNameClass;
//# sourceMappingURL=renamedNewfile.js.map