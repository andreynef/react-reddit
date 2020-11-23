/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar generateRandomId_1 = __webpack_require__(/*! ./utils/react/generateRandomId */ \"./src/utils/react/generateRandomId.ts\");\r\n//Прога по генерации шаблонов компонент (установка: npm install -g yo generator-react-ts-component-dir):\r\n//В консоли набрать: yo react-ts-component-dir BLABLAComp ./src/shared. Пример 'yo react-ts-component-dir [component_name] [path] [--styles] [--less] [--sass]'\r\nvar someState = {\r\n    openedThread: 'private',\r\n    bookmark: 'myPosts',\r\n    list: [\r\n        { author: 'Pupkin Who', date: '2 months ago', avatar: 'url1', title: 'Реализация намеченных плановых заданий', karma: '255', commentsAmount: 2, isSaved: false },\r\n        { author: 'Pupkin Why', date: '1 months ago', avatar: 'url2', title: 'some title2', karma: '234', commentsAmount: 3, isSaved: true },\r\n        { author: 'Pupkin What', date: '3 months ago', avatar: 'url3', title: 'some title3', karma: '46', commentsAmount: 4, isSaved: true },\r\n        { author: 'Pupkin Where', date: '2 year ago', avatar: 'url4', title: 'some title4', karma: '56756', commentsAmount: 5, isSaved: false },\r\n        { author: 'Pupkin When', date: '5 months ago', avatar: 'url5', title: 'some title5', karma: '67867766', commentsAmount: 6, isSaved: true },\r\n    ].map(generateRandomId_1.addRandomId) //к кажд элементу будет добавлен 'id'\r\n};\r\nvar ass = someState.list.map(function (item) { return item.id; });\r\nconsole.log(ass);\r\nfunction AppComponent(_a) {\r\n    var openedThread = _a.openedThread, bookmark = _a.bookmark, list = _a.list;\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardList, { list: list, openedThread: openedThread, bookmark: bookmark }))));\r\n}\r\nexports.App = root_1.hot(function () {\r\n    return (react_1.default.createElement(AppComponent, { openedThread: someState.openedThread, bookmark: someState.bookmark, list: someState.list }));\r\n}); // HOC. Если используются Hooks, тобишь UseState итд\r\n// export const App = hot(AppComponent);//если не используются Hooks.\r\n// {/*<DropdownNoAbsolute*/}\r\n// {/*  onClose={()=>console.log('closed!!!')}//слушатели. Если закрыт то выполнить это.*/}\r\n// {/*  onOpen={()=>console.log('opened!!!')}*/}\r\n// {/*  // isOpen={false}//можно передать изначальное состояние*/}\r\n// {/*  button={<button>dropdown button</button>}*/}\r\n// // {/*>/!* Контейнер с логикой дропа *!/*/}\r\n// {/*  <p>text1</p>/!*children*!/*/}\r\n// {/*  <p>text2</p>/!*children*!/*/}\r\n// {/*  <p>text3</p>/!*children*!/*/}\r\n// {/*  <p>text4</p>/!*children*!/*/}\r\n// </DropdownNoAbsolute>\r\n// <Icon size={20} mobileSize={28} color={EColors.green} bold>Label1</Icon>\r\n// <Break size={8} inline mobileSize={16}/>\r\n// <Icon size={20}>Label2</Icon>\r\n// <Break size={8} top/>\r\n// <Icon size={20} mobileSize={10}>Label3</Icon>\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexHtmlTemplate.js":
/*!*****************************************!*\
  !*** ./src/server/indexHtmlTemplate.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexHtmlTemplate = void 0;\r\nexports.indexHtmlTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <title>Reddit</title>\\n    <meta charset=\\\"utf-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n<body>\\n    <div id=\\\"react_root\\\">\" + content + \"</div>\\n</body>\\n</html>\\n\"; };\r\n\n\n//# sourceURL=webpack:///./src/server/indexHtmlTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar indexHtmlTemplate_1 = __webpack_require__(/*! ./indexHtmlTemplate */ \"./src/server/indexHtmlTemplate.js\");\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar app = express_1.default(); //инициализация. Теперь app это instance нашего приложения\r\napp.use('/static', express_1.default.static('./dist/client')); //спец роут кот будет раздавать статические файлы. По urlу /static будут доступны все файлы кот лежат в папке dist/client.\r\napp.get('/', function (req, res) {\r\n    res.send(indexHtmlTemplate_1.indexHtmlTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log('file server.js is speaking : \"Server started on http://localhost:3000\"');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\")); //из библиотеки. (npm i classnames @types/classnames).\r\nfunction Break(props) {\r\n    var _a, _b, _c, _d, _e;\r\n    var size = props.size, desktopSize = props.desktopSize, mobileSize = props.mobileSize, tabletSize = props.tabletSize, _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g;\r\n    var classes = classnames_1.default(//ф из библиотеки кот мерджит названия стилей в одну строку.\r\n    break_css_1.default[\"s\" + size], (_a = {}, _a[break_css_1.default[\"mobile_s\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"desktop_s\" + mobileSize]] = desktopSize, _b), (_c = {}, _c[break_css_1.default[\"tablet_s\" + mobileSize]] = tabletSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e));\r\n    return (react_1.default.createElement(\"div\", { className: classes }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--rnbuA\",\n\t\"s8\": \"break__s8--2ubV4\",\n\t\"s12\": \"break__s12--3dSW2\",\n\t\"s14\": \"break__s14--3Qsx1\",\n\t\"s16\": \"break__s16--2bop2\",\n\t\"s20\": \"break__s20--PBhCB\",\n\t\"s30\": \"break__s30--THHWU\",\n\t\"s50\": \"break__s50--37the\",\n\t\"inline\": \"break__inline--22pcx\",\n\t\"top\": \"break__top--25ISJ\",\n\t\"desktop_s50\": \"break__desktop_s50--z1Ts6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar CardControls_1 = __webpack_require__(/*! ./CardControls */ \"./src/shared/CardsList/Card/CardControls/index.ts\");\r\nvar CardHeader_1 = __webpack_require__(/*! ./CardHeader */ \"./src/shared/CardsList/Card/CardHeader/index.ts\");\r\nvar CardPreview_1 = __webpack_require__(/*! ./CardPreview */ \"./src/shared/CardsList/Card/CardPreview/index.ts\");\r\nfunction Card(_a) {\r\n    var item = _a.item, bookmark = _a.bookmark, openedThread = _a.openedThread;\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(CardHeader_1.CardHeader, { bookmark: bookmark, commentsAmount: item.commentsAmount, title: item.title, date: item.date, author: item.author, id: item.id }),\r\n        react_1.default.createElement(CardPreview_1.CardPreview, { isSaved: item.isSaved, id: item.id }),\r\n        react_1.default.createElement(CardControls_1.CardControls, { commentsAmount: item.commentsAmount, bookmark: bookmark, openedThread: openedThread })));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/Actions/Actions.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/Actions/Actions.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Actions = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar actions_css_1 = __importDefault(__webpack_require__(/*! ./actions.css */ \"./src/shared/CardsList/Card/CardControls/Actions/actions.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../Break */ \"./src/shared/Break/index.ts\");\r\nfunction Actions(_a) {\r\n    var openedThread = _a.openedThread, bookmark = _a.bookmark;\r\n    return (react_1.default.createElement(\"div\", { className: actions_css_1.default.actions }, openedThread === \"private\" ?\r\n        react_1.default.createElement(react_1.default.Fragment, null,\r\n            bookmark === 'myPosts' && (react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icons_1.StatisticIcon, null)),\r\n                react_1.default.createElement(Break_1.Break, { size: 14 }),\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icons_1.ShareIcon, null)),\r\n                react_1.default.createElement(Break_1.Break, { size: 14 }),\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icons_1.GarbageIcon, null)))),\r\n            bookmark === 'saved' && (react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icons_1.ShareIcon, null)),\r\n                react_1.default.createElement(Break_1.Break, { size: 14 }),\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icons_1.RemoveCrossIcon, null)))),\r\n            (bookmark === 'seen' || bookmark === 'commented') && (react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icons_1.ShareIcon, null)),\r\n                react_1.default.createElement(Break_1.Break, { size: 14 }),\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icons_1.SaveIcon, null)))))\r\n        :\r\n            react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icons_1.ShareIcon, null)),\r\n                react_1.default.createElement(Break_1.Break, { size: 14 }),\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icons_1.SaveIcon, null)))));\r\n}\r\nexports.Actions = Actions;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/Actions/Actions.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/Actions/actions.css":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/Actions/actions.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"actions\": \"actions__actions--2OeTp\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/Actions/actions.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/Actions/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/Actions/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Actions */ \"./src/shared/CardsList/Card/CardControls/Actions/Actions.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/Actions/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/CardControls.css":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/CardControls.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"CardControls__controls--2k_hZ\",\n\t\"controlsCommentsContainer\": \"CardControls__controlsCommentsContainer--169ag\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/CardControls.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/CardControls.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/CardControls.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardControls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CardControls_css_1 = __importDefault(__webpack_require__(/*! ./CardControls.css */ \"./src/shared/CardsList/Card/CardControls/CardControls.css\"));\r\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts\");\r\nvar Actions_1 = __webpack_require__(/*! ./Actions */ \"./src/shared/CardsList/Card/CardControls/Actions/index.ts\");\r\nvar CommentsButton_1 = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/CardControls/CommentsButton/index.ts\");\r\nfunction CardControls(_a) {\r\n    var bookmark = _a.bookmark, commentsAmount = _a.commentsAmount, openedThread = _a.openedThread;\r\n    return (react_1.default.createElement(\"div\", { className: CardControls_css_1.default.controls },\r\n        react_1.default.createElement(KarmaCounter_1.KarmaCounter, null),\r\n        react_1.default.createElement(\"div\", { className: CardControls_css_1.default.controlsCommentsContainer },\r\n            react_1.default.createElement(CommentsButton_1.CommentsButton, { bookmark: bookmark, commentsAmount: commentsAmount })),\r\n        react_1.default.createElement(Actions_1.Actions, { openedThread: openedThread, bookmark: bookmark })));\r\n}\r\nexports.CardControls = CardControls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/CardControls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/Comment/Comment.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/Comment/Comment.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar comment_css_1 = __importDefault(__webpack_require__(/*! ./comment.css */ \"./src/shared/CardsList/Card/CardControls/Comment/comment.css\"));\r\nvar MetaData_1 = __webpack_require__(/*! ../../CardHeader/MetaData */ \"./src/shared/CardsList/Card/CardHeader/MetaData/index.ts\");\r\nfunction Comment(_a) {\r\n    var commentsAmount = _a.commentsAmount;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: comment_css_1.default.meta },\r\n            react_1.default.createElement(MetaData_1.MetaData, null)),\r\n        react_1.default.createElement(\"p\", { className: comment_css_1.default.text }, \"\\u0411\\u0430\\u043D\\u0430\\u043B\\u044C\\u043D\\u044B\\u0435, \\u043D\\u043E \\u043D\\u0435\\u043E\\u043F\\u0440\\u043E\\u0432\\u0435\\u0440\\u0436\\u0438\\u043C\\u044B\\u0435 \\u0432\\u044B\\u0432\\u043E\\u0434\\u044B, \\u0430 \\u0442\\u0430\\u043A\\u0436\\u0435 \\u043C\\u043D\\u043E\\u0433\\u0438\\u0435 \\u0438\\u0437\\u0432\\u0435\\u0441\\u0442\\u043D\\u044B\\u0435 \\u043B\\u0438\\u0447\\u043D\\u043E\\u0441\\u0442\\u0438 \\u043B\\u0438\\u0448\\u044C \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0444\\u0440\\u0430\\u043A\\u0446\\u0438\\u043E\\u043D\\u043D\\u044B\\u0445 \\u0440\\u0430\\u0437\\u043D\\u043E\\u0433\\u043B\\u0430\\u0441\\u0438\\u0439 \\u0438 \\u0440\\u0430\\u0441\\u0441\\u043C\\u043E\\u0442\\u0440\\u0435\\u043D\\u044B \\u0438\\u0441\\u043A\\u043B\\u044E\\u0447\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E \\u0432 \\u0440\\u0430\\u0437\\u0440\\u0435\\u0437\\u0435 \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u0438\\u043D\\u0433\\u043E\\u0432\\u044B\\u0445 \\u0438 \\u0444\\u0438\\u043D\\u0430\\u043D\\u0441\\u043E\\u0432\\u044B\\u0445 \\u043F\\u0440\\u0435\\u0434\\u043F\\u043E\\u0441\\u044B\\u043B\\u043E\\u043A. \\u0422\\u0430\\u043A\\u0438\\u043C \\u043E\\u0431\\u0440\\u0430\\u0437\\u043E\\u043C, \\u043F\\u043E\\u0441\\u0442\\u043E\\u044F\\u043D\\u043D\\u043E\\u0435 \\u0438\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E-\\u043F\\u0440\\u043E\\u043F\\u0430\\u0433\\u0430\\u043D\\u0434\\u0438\\u0441\\u0442\\u0441\\u043A\\u043E\\u0435 \\u043E\\u0431\\u0435\\u0441\\u043F\\u0435\\u0447\\u0435\\u043D\\u0438\\u0435 \\u043D\\u0430\\u0448\\u0435\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438 \\u044F\\u0432\\u043B\\u044F\\u0435\\u0442\\u0441\\u044F \\u043A\\u0430\\u0447\\u0435\\u0441\\u0442\\u0432\\u0435\\u043D\\u043D\\u043E \\u043D\\u043E\\u0432\\u043E\\u0439 \\u0441\\u0442\\u0443\\u043F\\u0435\\u043D\\u044C\\u044E \\u043F\\u0440\\u043E\\u0433\\u0440\\u0435\\u0441\\u0441\\u0430 \\u043F\\u0440\\u043E\\u0444\\u0435\\u0441\\u0441\\u0438\\u043E\\u043D\\u0430\\u043B\\u044C\\u043D\\u043E\\u0433\\u043E \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0430.\"),\r\n        react_1.default.createElement(\"div\", { className: comment_css_1.default.more },\r\n            \"+ \\u0435\\u0449\\u0435 \",\r\n            commentsAmount,\r\n            \" \\u0432\\u0430\\u0448\\u0438\\u0445 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u044F\")));\r\n}\r\nexports.Comment = Comment;\r\n//из 15 модуля\r\n// const Comment = props =>{//dumb component\r\n//   return (\r\n//     <li\r\n//       className=\"listItem\"\r\n//       id={props.id}\r\n//     >\r\n//       <div className=\"listHeader\">\r\n//         <div className=\"listHeader__name\">{props.name}</div>\r\n//         <button\r\n//           type=\"button\"\r\n//           className=\"listHeader__cross\"\r\n//           aria-label=\"удалить\"\r\n//           onClick={props.handleDelete}\r\n//         >\r\n//         </button>\r\n//       </div>\r\n//       <div className=\"listItem__text\">{props.text}</div>\r\n//       <div className=\"listItem__date\">{props.date}</div>\r\n//     </li>\r\n//   );\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/Comment/comment.css":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/Comment/comment.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"comment__item--3Ku7c\",\n\t\"visualThreadContainer\": \"comment__visualThreadContainer--jckDz\",\n\t\"arrows\": \"comment__arrows--3JDdf\",\n\t\"line\": \"comment__line--4IT7I\",\n\t\"textContainer\": \"comment__textContainer--15WnW\",\n\t\"actionsContainer\": \"comment__actionsContainer--2WMdL\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/Comment/comment.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/Comment/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/Comment/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comment */ \"./src/shared/CardsList/Card/CardControls/Comment/Comment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/Comment/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/CommentsButton/CommentsButton.tsx":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/CommentsButton/CommentsButton.tsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/CardsList/Card/CardControls/CommentsButton/commentsbutton.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar Comment_1 = __webpack_require__(/*! ../Comment */ \"./src/shared/CardsList/Card/CardControls/Comment/index.ts\");\r\nfunction CommentsButton(_a) {\r\n    var bookmark = _a.bookmark, commentsAmount = _a.commentsAmount;\r\n    return (react_1.default.createElement(\"div\", { className: commentsbutton_css_1.default.commentsButtonContainer },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { isInline: true, button: react_1.default.createElement(\"button\", { className: commentsbutton_css_1.default.commentsButton },\r\n                react_1.default.createElement(Icons_1.CommentIcon, null),\r\n                react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n                bookmark === 'commented' ? react_1.default.createElement(\"span\", null, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\") : react_1.default.createElement(\"span\", null, commentsAmount)) },\r\n            react_1.default.createElement(\"div\", { className: commentsbutton_css_1.default.commentsDropdown },\r\n                react_1.default.createElement(Comment_1.Comment, { commentsAmount: commentsAmount })))));\r\n}\r\nexports.CommentsButton = CommentsButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/CommentsButton/commentsbutton.css":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/CommentsButton/commentsbutton.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbutton__commentsButton--G6Qs-\",\n\t\"commentsDropdown\": \"commentsbutton__commentsDropdown--3ZmtI\",\n\t\"commentsButtonContainer\": \"commentsbutton__commentsButtonContainer--326vO\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/CommentsButton/index.ts":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/CommentsButton/index.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/CardControls/CommentsButton/CommentsButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/KarmaCounter/KarmaCounter.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/KarmaCounter/KarmaCounter.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar karmacounter_css_1 = __importDefault(__webpack_require__(/*! ./karmacounter.css */ \"./src/shared/CardsList/Card/CardControls/KarmaCounter/karmacounter.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../Break */ \"./src/shared/Break/index.ts\");\r\nfunction KarmaCounter() {\r\n    return (react_1.default.createElement(\"div\", { className: karmacounter_css_1.default.karmaCounter },\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.up },\r\n            react_1.default.createElement(Icons_1.ArrowFilledIcon, null)),\r\n        react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n        react_1.default.createElement(\"span\", { className: karmacounter_css_1.default.karmaValue }, \"234\"),\r\n        react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.down },\r\n            react_1.default.createElement(Icons_1.ArrowFilledIcon, null))));\r\n}\r\nexports.KarmaCounter = KarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/CardControls/KarmaCounter/KarmaCounter.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/KarmaCounter/karmacounter.css":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/KarmaCounter/karmacounter.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaValue\": \"karmacounter__karmaValue--3KxsJ\",\n\t\"down\": \"karmacounter__down--37VgQ\",\n\t\"karmaCounter\": \"karmacounter__karmaCounter--1c_eJ\",\n\t\"up\": \"karmacounter__up--3A7iX\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/KarmaCounter/karmacounter.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardControls */ \"./src/shared/CardsList/Card/CardControls/CardControls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/ActionsContent/ActionsContent.tsx":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/ActionsContent/ActionsContent.tsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ActionsContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar EColors_1 = __webpack_require__(/*! ../../../../../utils/enums/EColors */ \"./src/utils/enums/EColors.tsx\");\r\nvar actionsContent_css_1 = __importDefault(__webpack_require__(/*! ./actionsContent.css */ \"./src/shared/CardsList/Card/CardHeader/ActionsContent/actionsContent.css\"));\r\nvar CommentsButton_1 = __webpack_require__(/*! ../../CardControls/CommentsButton */ \"./src/shared/CardsList/Card/CardControls/CommentsButton/index.ts\");\r\nfunction ActionsContent(_a) {\r\n    var bookmark = _a.bookmark, commentsAmount = _a.commentsAmount;\r\n    return (react_1.default.createElement(\"div\", { className: actionsContent_css_1.default.actionsContentContainer },\r\n        bookmark === 'seen' && (react_1.default.createElement(\"button\", { className: actionsContent_css_1.default.buttonSeen },\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(Icons_1.AyeIcon, null),\r\n                react_1.default.createElement(Break_1.Break, { size: 4, inline: true }),\r\n                react_1.default.createElement(Text_1.Text, { size: 10, color: EColors_1.EColors.gray99, tabletSize: 14 }, \"3 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")))),\r\n        bookmark === 'saved' && (react_1.default.createElement(\"button\", null,\r\n            react_1.default.createElement(Icons_1.RemoveCrossIcon, null),\r\n            react_1.default.createElement(Break_1.Break, { size: 4, inline: true }),\r\n            react_1.default.createElement(Text_1.Text, { size: 10, color: EColors_1.EColors.gray99, tabletSize: 14 }, \"\\u0423\\u0431\\u0440\\u0430\\u0442\\u044C \\u0438\\u0437 \\u0441\\u043F\\u0438\\u0441\\u043A\\u0430\"))),\r\n        bookmark === 'myPosts' && (react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(Icons_1.StatisticIcon, null),\r\n                react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n                react_1.default.createElement(Text_1.Text, { size: 10, color: EColors_1.EColors.gray99, tabletSize: 14 }, \"\\u0421\\u0442\\u0430\\u0442\\u0438\\u0441\\u0442\\u0438\\u043A\\u0430 \\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u0430\\u0446\\u0438\\u0438\")),\r\n            react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(Icons_1.ShareIcon, null),\r\n                react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n                react_1.default.createElement(Text_1.Text, { size: 10, color: EColors_1.EColors.gray99, tabletSize: 14 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n            react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(Icons_1.GarbageIcon, null),\r\n                react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n                react_1.default.createElement(Text_1.Text, { size: 10, color: EColors_1.EColors.gray99, tabletSize: 14 }, \"\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C\")))),\r\n        bookmark === 'commented' && (react_1.default.createElement(\"div\", { className: actionsContent_css_1.default.actionCommentContainer },\r\n            react_1.default.createElement(CommentsButton_1.CommentsButton, { bookmark: bookmark, commentsAmount: commentsAmount })))));\r\n}\r\nexports.ActionsContent = ActionsContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/ActionsContent/ActionsContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/ActionsContent/actionsContent.css":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/ActionsContent/actionsContent.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"actionSeen\": \"actionsContent__actionSeen--3Y_kN\",\n\t\"actionsContentContainer\": \"actionsContent__actionsContentContainer--176PB\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/ActionsContent/actionsContent.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/ActionsContent/index.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/ActionsContent/index.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ActionsContent */ \"./src/shared/CardsList/Card/CardHeader/ActionsContent/ActionsContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/ActionsContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/CardHeader.css":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/CardHeader.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardHeaderContainer\": \"CardHeader__cardHeaderContainer--2_LdG\",\n\t\"metaMenuContainer\": \"CardHeader__metaMenuContainer--3HYaz\",\n\t\"titleContainer\": \"CardHeader__titleContainer--EH7Ag\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/CardHeader.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/CardHeader.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/CardHeader.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardHeader = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CardHeader_css_1 = __importDefault(__webpack_require__(/*! ./CardHeader.css */ \"./src/shared/CardsList/Card/CardHeader/CardHeader.css\"));\r\nvar MetaData_1 = __webpack_require__(/*! ./MetaData */ \"./src/shared/CardsList/Card/CardHeader/MetaData/index.ts\");\r\nvar ActionsContent_1 = __webpack_require__(/*! ./ActionsContent */ \"./src/shared/CardsList/Card/CardHeader/ActionsContent/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/CardHeader/Menu/index.ts\");\r\nvar NotStandardLink_1 = __webpack_require__(/*! ../../../../utils/react/NotStandardLink */ \"./src/utils/react/NotStandardLink.tsx\");\r\nfunction CardHeader(_a) {\r\n    var bookmark = _a.bookmark, commentsAmount = _a.commentsAmount, title = _a.title, date = _a.date, author = _a.author, id = _a.id;\r\n    var handleClick = function () {\r\n        alert('title is pressed. Used NotStandardLink, which is - preventDefault(stopPropagation(props.onClick)');\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: CardHeader_css_1.default.cardHeaderContainer },\r\n        react_1.default.createElement(\"div\", { className: CardHeader_css_1.default.metaMenuContainer },\r\n            react_1.default.createElement(MetaData_1.MetaData, { date: date, author: author }),\r\n            react_1.default.createElement(Menu_1.Menu, { id: id })),\r\n        react_1.default.createElement(\"h2\", { className: CardHeader_css_1.default.titleContainer },\r\n            react_1.default.createElement(NotStandardLink_1.NotStandardLink, { href: \"#post-url\", text: title, onClick: handleClick })),\r\n        react_1.default.createElement(ActionsContent_1.ActionsContent, { bookmark: bookmark, commentsAmount: commentsAmount })));\r\n}\r\nexports.CardHeader = CardHeader;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/CardHeader.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/Menu/Menu.tsx":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/Menu/Menu.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/CardHeader/Menu/menu.css\"));\r\nvar MenuItemsList_1 = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardsList/Card/CardHeader/Menu/MenuItemsList/index.ts\");\r\nfunction Menu(_a) {\r\n    var id = _a.id;\r\n    return (react_1.default.createElement(Dropdown_1.Dropdown //контейнер с логикой дропа\r\n    , { button: react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n            react_1.default.createElement(Icons_1.MenuIcon, null)) },\r\n        react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown },\r\n            react_1.default.createElement(MenuItemsList_1.MenuItemsList, { id: id }),\r\n            react_1.default.createElement(\"button\", { className: menu_css_1.default.closeButton },\r\n                react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/Menu/MenuItemsList/MenuItemsList.tsx":
/*!***********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menuitemslist_css_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.css */ \"./src/shared/CardsList/Card/CardHeader/Menu/MenuItemsList/menuitemslist.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../../Break */ \"./src/shared/Break/index.ts\");\r\nfunction MenuItemsList(_a) {\r\n    var id = _a.id;\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_css_1.default.menuItemsList },\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return console.log(id, ' Comment btn has been pressed'); } },\r\n            react_1.default.createElement(Icons_1.CommentIcon, null),\r\n            react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12 }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return console.log(id, ' Share bth has been pressed'); } },\r\n            react_1.default.createElement(Icons_1.ShareIcon, null),\r\n            react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return console.log(id, ' Hide btn has been pressed'); } },\r\n            react_1.default.createElement(Icons_1.BlockIcon, null),\r\n            react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return console.log(id, ' Save btn has been pressed'); } },\r\n            react_1.default.createElement(Icons_1.SaveIcon, null),\r\n            react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12 }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return console.log(id, ' Complain btn has been pressed'); } },\r\n            react_1.default.createElement(Icons_1.WarningIcon, null),\r\n            react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\r\n}\r\nexports.MenuItemsList = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/Menu/MenuItemsList/index.ts":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/Menu/MenuItemsList/index.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardsList/Card/CardHeader/Menu/MenuItemsList/MenuItemsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/Menu/MenuItemsList/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/Menu/MenuItemsList/menuitemslist.css":
/*!***********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/Menu/MenuItemsList/menuitemslist.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"menuitemslist__menuItemsList--3Tlfd\",\n\t\"menuItem\": \"menuitemslist__menuItem--1tO-F\",\n\t\"divider\": \"menuitemslist__divider--2yENb\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/Menu/MenuItemsList/menuitemslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/Menu/index.ts":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/Menu/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/CardHeader/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/Menu/menu.css":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/Menu/menu.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--3wjY3\",\n\t\"menuButton\": \"menu__menuButton--3sAmx\",\n\t\"dropdown\": \"menu__dropdown--ZnNkn\",\n\t\"closeButton\": \"menu__closeButton--uVmqb\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/MetaData/MetaData.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/MetaData/MetaData.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MetaData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar metadata_css_1 = __importDefault(__webpack_require__(/*! ./metadata.css */ \"./src/shared/CardsList/Card/CardHeader/MetaData/metadata.css\"));\r\nfunction MetaData(_a) {\r\n    var author = _a.author, date = _a.date;\r\n    return (react_1.default.createElement(\"div\", { className: metadata_css_1.default.metaData },\r\n        react_1.default.createElement(\"div\", { className: metadata_css_1.default.userLink },\r\n            react_1.default.createElement(\"img\", { className: metadata_css_1.default.avatar, src: \"https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg\", alt: \"avatar\" }),\r\n            react_1.default.createElement(\"a\", { href: \"#user-url\", className: metadata_css_1.default.userName }, author)),\r\n        react_1.default.createElement(\"span\", { className: metadata_css_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: metadata_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\"),\r\n            date)));\r\n}\r\nexports.MetaData = MetaData;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/MetaData/MetaData.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/MetaData/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/MetaData/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MetaData */ \"./src/shared/CardsList/Card/CardHeader/MetaData/MetaData.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/MetaData/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/MetaData/metadata.css":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/MetaData/metadata.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"metaData\": \"metadata__metaData--3AAQK\",\n\t\"userLink\": \"metadata__userLink--2psvd\",\n\t\"avatar\": \"metadata__avatar--2zvD8\",\n\t\"userName\": \"metadata__userName--3Wv_v\",\n\t\"createdAt\": \"metadata__createdAt--3mVMI\",\n\t\"publishedLabel\": \"metadata__publishedLabel--1b_r_\",\n\t\"username\": \"metadata__username--3qzVj\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/MetaData/metadata.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardHeader */ \"./src/shared/CardsList/Card/CardHeader/CardHeader.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardPreview/CardPreview.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardPreview/CardPreview.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardPreview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar cardPreview_css_1 = __importDefault(__webpack_require__(/*! ./cardPreview.css */ \"./src/shared/CardsList/Card/CardPreview/cardPreview.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nfunction CardPreview(_a) {\r\n    var isSaved = _a.isSaved;\r\n    return (react_1.default.createElement(\"div\", { className: cardPreview_css_1.default.previewContainer },\r\n        react_1.default.createElement(\"img\", { className: cardPreview_css_1.default.previewImg, src: 'https://i.pinimg.com/originals/fd/a9/ec/fda9ec08daa846f974323a22ee0b48ea.jpg', alt: 'previewPic' }),\r\n        isSaved &&\r\n            react_1.default.createElement(\"div\", { className: cardPreview_css_1.default.marker },\r\n                react_1.default.createElement(\"div\", { className: cardPreview_css_1.default.markerPartOne },\r\n                    react_1.default.createElement(Icons_1.SaveIcon, null),\r\n                    react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n                    react_1.default.createElement(Text_1.Text, { size: 10 }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u043D\\u043E\\u0435\")),\r\n                react_1.default.createElement(\"div\", { className: cardPreview_css_1.default.markerPartTwo },\r\n                    react_1.default.createElement(Icons_1.ArrowFilledIcon, null)))));\r\n}\r\nexports.CardPreview = CardPreview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardPreview/CardPreview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardPreview/cardPreview.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardPreview/cardPreview.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"previewContainer\": \"cardPreview__previewContainer--3bycu\",\n\t\"previewImg\": \"cardPreview__previewImg--1oKGu\",\n\t\"marker\": \"cardPreview__marker--2mRVZ\",\n\t\"markerPartOne\": \"cardPreview__markerPartOne--2uhep\",\n\t\"markerPartTwo\": \"cardPreview__markerPartTwo--XCgCD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardPreview/cardPreview.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardPreview/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardPreview/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardPreview */ \"./src/shared/CardsList/Card/CardPreview/CardPreview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardPreview/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardList.tsx":
/*!*******************************************!*\
  !*** ./src/shared/CardsList/CardList.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar cardlist_css_1 = __importDefault(__webpack_require__(/*! ./cardlist.css */ \"./src/shared/CardsList/cardlist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar EmptyCard_1 = __webpack_require__(/*! ./EmptyCard */ \"./src/shared/CardsList/EmptyCard/index.ts\");\r\nvar FaceHmm_1 = __webpack_require__(/*! ./FaceHmm */ \"./src/shared/CardsList/FaceHmm/index.ts\");\r\nfunction CardList(_a) {\r\n    var bookmark = _a.bookmark, openedThread = _a.openedThread, list = _a.list;\r\n    var allCards;\r\n    if (list.length == 0) {\r\n        allCards =\r\n            react_1.default.createElement(\"ul\", { className: cardlist_css_1.default.cardList },\r\n                react_1.default.createElement(EmptyCard_1.EmptyCard, null),\r\n                react_1.default.createElement(EmptyCard_1.EmptyCard, null),\r\n                react_1.default.createElement(EmptyCard_1.EmptyCard, null),\r\n                react_1.default.createElement(EmptyCard_1.EmptyCard, null),\r\n                react_1.default.createElement(FaceHmm_1.FaceHmm, null));\r\n    }\r\n    else {\r\n        // allCards= <GenericList list={list} />;\r\n        allCards = list.map(function (item, i) {\r\n            return react_1.default.createElement(Card_1.Card, { key: item.id, item: item, bookmark: bookmark, openedThread: openedThread });\r\n        });\r\n    }\r\n    return (react_1.default.createElement(\"ul\", { className: cardlist_css_1.default.cardList }, allCards));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/EmptyCard/EmptyCard.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/EmptyCard/EmptyCard.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EmptyCard = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar emptycard_css_1 = __importDefault(__webpack_require__(/*! ./emptycard.css */ \"./src/shared/CardsList/EmptyCard/emptycard.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../Break */ \"./src/shared/Break/index.ts\");\r\nfunction EmptyCard(_a) {\r\n    var id = _a.id, isSaved = _a.isSaved;\r\n    return (react_1.default.createElement(\"li\", { className: emptycard_css_1.default.emptyCard },\r\n        react_1.default.createElement(\"div\", { className: emptycard_css_1.default.textContent },\r\n            react_1.default.createElement(\"div\", { className: emptycard_css_1.default.metaMenu },\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.meta },\r\n                    react_1.default.createElement(\"div\", { className: emptycard_css_1.default.ava }),\r\n                    react_1.default.createElement(\"div\", { className: emptycard_css_1.default.name }),\r\n                    react_1.default.createElement(\"div\", { className: emptycard_css_1.default.date })),\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.menu },\r\n                    react_1.default.createElement(Icons_1.MenuIcon, null))),\r\n            react_1.default.createElement(\"div\", { className: emptycard_css_1.default.title }),\r\n            react_1.default.createElement(\"div\", { className: emptycard_css_1.default.headerActions },\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.headerActionsIcon }),\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.headerActionsText }))),\r\n        react_1.default.createElement(\"div\", { className: emptycard_css_1.default.preview }),\r\n        react_1.default.createElement(\"div\", { className: emptycard_css_1.default.controls },\r\n            react_1.default.createElement(\"div\", { className: emptycard_css_1.default.karma },\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.up },\r\n                    react_1.default.createElement(Icons_1.ArrowFilledIcon, null)),\r\n                react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n                react_1.default.createElement(\"span\", null, \"234\"),\r\n                react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.down },\r\n                    react_1.default.createElement(Icons_1.ArrowFilledIcon, null))),\r\n            react_1.default.createElement(\"div\", { className: emptycard_css_1.default.controlActionsContainer },\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.controlActionOne }),\r\n                react_1.default.createElement(Break_1.Break, { size: 16 }),\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.controlActionTwo })))));\r\n}\r\nexports.EmptyCard = EmptyCard;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/EmptyCard/EmptyCard.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/EmptyCard/emptycard.css":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/EmptyCard/emptycard.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"emptyCard\": \"emptycard__emptyCard--3zlpq\",\n\t\"textContent\": \"emptycard__textContent--3uQ_D\",\n\t\"metaMenu\": \"emptycard__metaMenu--2EGiF\",\n\t\"meta\": \"emptycard__meta--xW0M0\",\n\t\"ava\": \"emptycard__ava--3n9QC\",\n\t\"name\": \"emptycard__name--1B9m3\",\n\t\"date\": \"emptycard__date--uN6iV\",\n\t\"menu\": \"emptycard__menu--3HZ_4\",\n\t\"title\": \"emptycard__title--c4rfm\",\n\t\"headerActions\": \"emptycard__headerActions--3pks0\",\n\t\"headerActionsIcon\": \"emptycard__headerActionsIcon--7j09A\",\n\t\"headerActionsText\": \"emptycard__headerActionsText--1RSq7\",\n\t\"preview\": \"emptycard__preview--19lwl\",\n\t\"controls\": \"emptycard__controls--2YAL9\",\n\t\"karma\": \"emptycard__karma--BlaEa\",\n\t\"down\": \"emptycard__down--clfNX\",\n\t\"controlActionsContainer\": \"emptycard__controlActionsContainer--2yfTq\",\n\t\"controlActionOne\": \"emptycard__controlActionOne--2i0Jv\",\n\t\"controlActionTwo\": \"emptycard__controlActionTwo--5GrD-\",\n\t\"username\": \"emptycard__username--wCc3j\",\n\t\"card\": \"emptycard__card--3MDhg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/EmptyCard/emptycard.css?");

/***/ }),

/***/ "./src/shared/CardsList/EmptyCard/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/EmptyCard/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./EmptyCard */ \"./src/shared/CardsList/EmptyCard/EmptyCard.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/EmptyCard/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/FaceHmm/FaceHmm.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CardsList/FaceHmm/FaceHmm.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FaceHmm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar facehmm_css_1 = __importDefault(__webpack_require__(/*! ./facehmm.css */ \"./src/shared/CardsList/FaceHmm/facehmm.css\"));\r\nfunction FaceHmm(_a) {\r\n    var id = _a.id, isSaved = _a.isSaved;\r\n    return (react_1.default.createElement(\"div\", { className: facehmm_css_1.default.face },\r\n        react_1.default.createElement(\"img\", { src: 'https://c7.uihere.com/files/54/214/491/rick-sanchez-morty-smith-rick-and-morty-season-1-adult-swim-rick-and-morty.jpg', alt: 'face' }),\r\n        react_1.default.createElement(\"span\", null, \"\\u0425\\u043C\\u043C... \\u0437\\u0434\\u0435\\u0441\\u044C \\u043F\\u043E\\u043A\\u0430 \\u043F\\u0443\\u0441\\u0442\\u043E\")));\r\n}\r\nexports.FaceHmm = FaceHmm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/FaceHmm/FaceHmm.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/FaceHmm/facehmm.css":
/*!**************************************************!*\
  !*** ./src/shared/CardsList/FaceHmm/facehmm.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"face\": \"facehmm__face--9BnJ8\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/FaceHmm/facehmm.css?");

/***/ }),

/***/ "./src/shared/CardsList/FaceHmm/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/CardsList/FaceHmm/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./FaceHmm */ \"./src/shared/CardsList/FaceHmm/FaceHmm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/FaceHmm/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/cardlist.css":
/*!*******************************************!*\
  !*** ./src/shared/CardsList/cardlist.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardList\": \"cardlist__cardList--1dvkB\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardlist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardList */ \"./src/shared/CardsList/CardList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", null, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n//универсальный компонент-шаблон с логикой DropdownNoAbsolute. Контейнер с 2мя блоками (на что жать и что выпадает). Без стилей, только логика.\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar NOOP = function () { }; //ф кот ничего не делает. Обертка.\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c, _d = _a.isInline, isInline = _d === void 0 ? false : _d;\r\n    var _e = react_1.default.useState(isOpen), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];\r\n    react_1.default.useEffect(function () {\r\n        setIsDropdownOpen(isOpen);\r\n        // console.log('setting local state to what comes from store. Deps:[storeState]')\r\n    }, [isOpen]);\r\n    react_1.default.useEffect(function () {\r\n        isDropdownOpen ? onOpen() : onClose();\r\n        // console.log('doing smth depending on local state. Deps:[localState]')\r\n    }, [isDropdownOpen]);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.dropdownContainer },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\r\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children))),\r\n        (isDropdownOpen && isInline) && (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\r\n            children,\r\n            react_1.default.createElement(\"button\", { className: dropdown_css_1.default.closeButton, onClick: function () { return setIsDropdownOpen(false); } },\r\n                react_1.default.createElement(Icons_1.CrossIcon, null))))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n// export function DropdownTest({button, children, isOpen, onClose=NOOP, onOpen=NOOP, isInline=false}: IDropdownProps) {//ф onClose и onOpen всегда в наличии благодаря NOOP обертке. Тоесть если сверху не переданы пропсы этих методов то ставятся заглушки ничего не выполняющие.\r\n//   const divRef = React.useRef<HTMLDivElement>(null);\r\n//   // State for our modal\r\n//   const [isModalOpen, setModalOpen] = useState(false);\r\n//   // Call hook passing in the ref and a function to call on outside click\r\n//   useOnClickOutside(ref, () => setModalOpen(false));\r\n//\r\n//   return (\r\n//     <div style={{ padding: '50px' }}>\r\n//       {isModalOpen ? (\r\n//         <div ref={divRef}>\r\n//           <span>Hey, I'm a modal<br /> Click anywhere outside of me to close</span>\r\n//         </div>\r\n//       ) : (\r\n//         <button onClick={() => setModalOpen(true)}>Open Modal</button>\r\n//\r\n//       )}\r\n//     </div>\r\n//   );\r\n// }\r\n//\r\n// function useOnClickOutside(ref, handler) {\r\n//   useEffect(\r\n//     () => {\r\n//       const listener = event => {\r\n//         // Do nothing if clicking ref's element or descendent elements\r\n//         if (!ref.current || ref.current.contains(event.target)) {\r\n//           return;\r\n//         }\r\n//\r\n//         handler(event);\r\n//       };\r\n//\r\n//       document.addEventListener('mousedown', listener);\r\n//       document.addEventListener('touchstart', listener);\r\n//\r\n//       return () => {\r\n//         document.removeEventListener('mousedown', listener);\r\n//         document.removeEventListener('touchstart', listener);\r\n//       };\r\n//     },\r\n//     // Add ref and handler to effect dependencies\r\n//     // It's worth noting that because passed in handler is a new ...\r\n//     // ... function on every render that will cause this effect ...\r\n//     // ... callback/cleanup to run every render. It's not a big deal ...\r\n//     // ... but to optimize you can wrap handler in useCallback before ...\r\n//     // ... passing it into this hook.\r\n//     [ref, handler]\r\n//   );\r\n// }\r\n//\r\n//\r\n//\r\n//\r\n// const modalStyle = {\r\n//   position: 'absolute',\r\n//   top: '50%',\r\n//   left: '50%',\r\n//   transform: 'translate(-50%, -50%)',\r\n//   maxWidth: '400px',\r\n//   width: '100%',\r\n//   padding: '50px',\r\n//   textAlign: 'center',\r\n//   fontSize: '1.2rem',\r\n//   backgroundColor: 'white',\r\n//   boxShadow: '0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)'\r\n// };\r\n// function ClickOutside({ children, onClick }) {\r\n//   const refs = React.Children.map(children, () => React.createRef());\r\n//   const handleClick = e => {\r\n//     const isOutside = refs.every(ref => {\r\n//       return !ref.current.contains(e.target);\r\n//     });\r\n//     if (isOutside) {\r\n//       onClick();\r\n//     }\r\n//   };\r\n//\r\n//   useEffect(() => {\r\n//     document.addEventListener(\"click\", handleClick);\r\n//\r\n//     return function() {\r\n//       document.removeEventListener(\"click\", handleClick);\r\n//     };\r\n//   });\r\n//\r\n//   return React.Children.map(children, (element, idx) =>\r\n//     React.cloneElement(element, { ref: refs[idx] })\r\n//   );\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"dropDownContainer\": \"dropdown__dropDownContainer--2f7AN\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\",\n\t\"closeButton\": \"dropdown__closeButton--1oEX7\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/AnoIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/AnoIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AnoIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction AnoIcon() {\r\n    return (React.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.AnoIcon = AnoIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/AnoIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ArrowFilledIcon.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Icons/ArrowFilledIcon.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ArrowFilledIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ArrowFilledIcon() {\r\n    return (React.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.ArrowFilledIcon = ArrowFilledIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ArrowFilledIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ArrowIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/ArrowIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ArrowIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar icons_css_1 = __importDefault(__webpack_require__(/*! ./icons.css */ \"./src/shared/Icons/icons.css\"));\r\nfunction ArrowIcon(_a) {\r\n    var isOpen = _a.isOpen;\r\n    return (React.createElement(React.Fragment, null,\r\n        isOpen && (React.createElement(\"svg\", { className: icons_css_1.default.up, width: \"10\", height: \"6\", viewBox: \"0 0 10 6\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            React.createElement(\"path\", { d: \"M5 0L10 5.46588L9.45862 6L5 1.12595L0.541381 6L0 5.46588L5 0Z\" }))),\r\n        !isOpen && (React.createElement(\"svg\", { width: \"10\", height: \"6\", viewBox: \"0 0 10 6\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            React.createElement(\"path\", { d: \"M5 0L10 5.46588L9.45862 6L5 1.12595L0.541381 6L0 5.46588L5 0Z\" })))));\r\n}\r\nexports.ArrowIcon = ArrowIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ArrowIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/AyeIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/AyeIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AyeIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction AyeIcon() {\r\n    return (React.createElement(\"svg\", { width: \"12\", height: \"8\", viewBox: \"0 0 16 11\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M8 0C4.36364 0 1.25818 2.28067 0 5.5C1.25818 8.71933 4.36364 11 8 11C11.6364 11 14.7418 8.71933 16 5.5C14.7418 2.28067 11.6364 0 8 0ZM8 9.16667C5.99273 9.16667 4.36364 7.524 4.36364 5.5C4.36364 3.476 5.99273 1.83333 8 1.83333C10.0073 1.83333 11.6364 3.476 11.6364 5.5C11.6364 7.524 10.0073 9.16667 8 9.16667ZM8 3.3C6.79273 3.3 5.81818 4.28267 5.81818 5.5C5.81818 6.71733 6.79273 7.7 8 7.7C9.20727 7.7 10.1818 6.71733 10.1818 5.5C10.1818 4.28267 9.20727 3.3 8 3.3Z\", fill: \"#999999\" })));\r\n}\r\nexports.AyeIcon = AyeIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/AyeIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/BlockIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/BlockIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BlockIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction BlockIcon() {\r\n    return (React.createElement(\"svg\", { width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" })));\r\n}\r\nexports.BlockIcon = BlockIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/BlockIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/CommentIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/CommentIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentIcon() {\r\n    return (React.createElement(\"svg\", { width: \"12\", height: \"12\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentIcon = CommentIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/CommentIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/CrossIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/CrossIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CrossIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction CrossIcon() {\r\n    return (React.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M13.3633 3.05176e-05L13.9996 0.636391L0.636345 14L-7.09307e-07 13.3636L13.3633 3.05176e-05Z\", fill: \"#ADADAD\" }),\r\n        React.createElement(\"path\", { d: \"M14 13.3636L13.3637 13.9999L0.000372653 0.636349L0.636719 -1.2067e-05L14 13.3636Z\", fill: \"#ADADAD\" })));\r\n}\r\nexports.CrossIcon = CrossIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/CrossIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/EnvelopeIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/EnvelopeIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EnvelopeIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction EnvelopeIcon() {\r\n    return (React.createElement(\"svg\", { width: \"12\", height: \"10\", viewBox: \"0 0 20 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.EnvelopeIcon = EnvelopeIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/EnvelopeIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/GarbageIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/GarbageIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GarbageIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction GarbageIcon() {\r\n    return (React.createElement(\"svg\", { width: \"8\", height: \"10\", viewBox: \"0 0 10 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M0.714286 10.6667C0.714286 11.4 1.35714 12 2.14286 12H7.85714C8.64286 12 9.28571 11.4 9.28571 10.6667V2.66667H0.714286V10.6667ZM2.14286 4H7.85714V10.6667H2.14286V4ZM7.5 0.666667L6.78571 0H3.21429L2.5 0.666667H0V2H10V0.666667H7.5Z\", fill: \"#999999\" })));\r\n}\r\nexports.GarbageIcon = GarbageIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/GarbageIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon() {\r\n    return (React.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/PencilIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/PencilIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PencilIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction PencilIcon() {\r\n    return (React.createElement(\"svg\", { width: \"19\", height: \"19\", viewBox: \"0 0 19 19\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006V5.04006Z\", fill: \"#999999\" })));\r\n}\r\nexports.PencilIcon = PencilIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/PencilIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/RemoveCrossIcon.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Icons/RemoveCrossIcon.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RemoveCrossIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction RemoveCrossIcon() {\r\n    return (React.createElement(\"svg\", { width: \"13\", height: \"13\", viewBox: \"0 0 13 13\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M6.5 0C2.9055 0 0 2.9055 0 6.5C0 10.0945 2.9055 13 6.5 13C10.0945 13 13 10.0945 13 6.5C13 2.9055 10.0945 0 6.5 0ZM9.75 8.8335L8.8335 9.75L6.5 7.4165L4.1665 9.75L3.25 8.8335L5.5835 6.5L3.25 4.1665L4.1665 3.25L6.5 5.5835L8.8335 3.25L9.75 4.1665L7.4165 6.5L9.75 8.8335Z\", fill: \"#999999\" })));\r\n}\r\nexports.RemoveCrossIcon = RemoveCrossIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/RemoveCrossIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/RocketIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/RocketIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RocketIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction RocketIcon() {\r\n    return (React.createElement(\"svg\", { width: \"9\", height: \"11\", viewBox: \"0 0 14 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M14 16L10.6225 14.76C11.235 13.536 11.6725 12.272 11.9437 10.984L14 16ZM3.3775 14.76L0 16L2.05625 10.984C2.3275 12.272 2.765 13.536 3.3775 14.76ZM7 0C7 0 11.375 1.6 11.375 8C11.375 10.48 10.7188 12.6 9.91375 14.264C9.625 14.84 9.00375 15.2 8.3125 15.2H5.6875C4.99625 15.2 4.375 14.84 4.08625 14.264C3.29 12.6 2.625 10.48 2.625 8C2.625 1.6 7 0 7 0ZM7 8C7.9625 8 8.75 7.28 8.75 6.4C8.75 5.52 7.9625 4.8 7 4.8C6.0375 4.8 5.25 5.52 5.25 6.4C5.25 7.28 6.0375 8 7 8Z\", fill: \"#CC6633\" })));\r\n}\r\nexports.RocketIcon = RocketIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/RocketIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction SaveIcon() {\r\n    return (React.createElement(\"svg\", { width: \"10\", height: \"10\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.SaveIcon = SaveIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/SearchIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/SearchIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction SearchIcon() {\r\n    return (React.createElement(\"svg\", { width: \"19\", height: \"19\", viewBox: \"0 0 19 19\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M13.5792 11.9497H12.721L12.4168 11.6564C13.4814 10.418 14.1224 8.81018 14.1224 7.06118C14.1224 3.16124 10.9611 0 7.06118 0C3.16124 0 0 3.16124 0 7.06118C0 10.9611 3.16124 14.1224 7.06118 14.1224C8.81018 14.1224 10.418 13.4814 11.6564 12.4168L11.9497 12.721V13.5792L17.3814 19L19 17.3814L13.5792 11.9497ZM7.06118 11.9497C4.3562 11.9497 2.17267 9.76615 2.17267 7.06118C2.17267 4.3562 4.3562 2.17267 7.06118 2.17267C9.76615 2.17267 11.9497 4.3562 11.9497 7.06118C11.9497 9.76615 9.76615 11.9497 7.06118 11.9497Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.SearchIcon = SearchIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/SearchIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ShareIcon() {\r\n    return (React.createElement(\"svg\", { width: \"8\", height: \"10\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.ShareIcon = ShareIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/StatisticIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/Icons/StatisticIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.StatisticIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction StatisticIcon() {\r\n    return (React.createElement(\"svg\", { width: \"13\", height: \"8\", viewBox: \"0 0 16 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M11.2 0L13.032 1.90833L9.128 5.975L5.928 2.64167L0 8.825L1.128 10L5.928 5L9.128 8.33333L14.168 3.09167L16 5V0H11.2Z\", fill: \"#999999\" })));\r\n}\r\nexports.StatisticIcon = StatisticIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/StatisticIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/WarningIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/WarningIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.WarningIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction WarningIcon() {\r\n    return (React.createElement(\"svg\", { width: \"14\", height: \"12\", viewBox: \"0 0 14 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\", fill: \"#999999\" })));\r\n}\r\nexports.WarningIcon = WarningIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/WarningIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/icons.css":
/*!************************************!*\
  !*** ./src/shared/Icons/icons.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"up\": \"icons__up--_ZzMD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icons/icons.css?");

/***/ }),

/***/ "./src/shared/Icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/Icons/BlockIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/Icons/WarningIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./AnoIcon */ \"./src/shared/Icons/AnoIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./EnvelopeIcon */ \"./src/shared/Icons/EnvelopeIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/Icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/Icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SearchIcon */ \"./src/shared/Icons/SearchIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./RocketIcon */ \"./src/shared/Icons/RocketIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./AyeIcon */ \"./src/shared/Icons/AyeIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./StatisticIcon */ \"./src/shared/Icons/StatisticIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./GarbageIcon */ \"./src/shared/Icons/GarbageIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentIcon */ \"./src/shared/Icons/CommentIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CrossIcon */ \"./src/shared/Icons/CrossIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./RemoveCrossIcon */ \"./src/shared/Icons/RemoveCrossIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./PencilIcon */ \"./src/shared/Icons/PencilIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ArrowIcon */ \"./src/shared/Icons/ArrowIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ArrowFilledIcon */ \"./src/shared/Icons/ArrowFilledIcon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return ( //children это удобн способ ренделить одни комп в др комп не привязывая их к др др с пом imports\r\n    react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = void 0;\r\n//типа шаблон для текста, размер и цвет кот меняется через входящие пропсы\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\")); //из библиотеки. (npm i classnames @types/classnames).\r\nvar EColors_1 = __webpack_require__(/*! ../../utils/enums/EColors */ \"./src/utils/enums/EColors.tsx\");\r\nfunction Text(props) {\r\n    var _a, _b, _c, _d, _e, _f;\r\n    var _g = props.As, As = _g === void 0 ? 'span' : _g, children = props.children, size = props.size, desktopSize = props.desktopSize, mobileSize = props.mobileSize, tabletSize = props.tabletSize, _h = props.color, color = _h === void 0 ? EColors_1.EColors.black : _h, _j = props.bold, bold = _j === void 0 ? false : _j, _k = props.isActive, isActive = _k === void 0 ? false : _k, _l = props.border, border = _l === void 0 ? false : _l, _m = props.href, href = _m === void 0 ? '#someUrl' : _m, _o = props.reset, reset = _o === void 0 ? false : _o;\r\n    var classes = classnames_1.default(//ф из библиотеки кот мерджит названия стилей в одну строку.\r\n    text_css_1.default[\"s\" + size], (_a = {}, _a[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"d\" + desktopSize]] = desktopSize, _b), (_c = {}, _c[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _c), text_css_1.default[color], (_d = {}, _d[text_css_1.default.bold] = bold, _d), (_e = {}, _e[text_css_1.default.border] = border, _e), (_f = {}, _f[text_css_1.default.reset] = reset, _f));\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"bold\": \"text__bold--gb02H\",\n\t\"border\": \"text__border--3zMU1\",\n\t\"reset\": \"text__reset--2UdSH\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"white\": \"text__white--13JGE\",\n\t\"grayF4\": \"text__grayF4--2X2jV\",\n\t\"grayF3\": \"text__grayF3--1zp-f\",\n\t\"grayD9\": \"text__grayD9--3Y4yY\",\n\t\"grayC4\": \"text__grayC4--3U0c5\",\n\t\"gray99\": \"text__gray99--DhweW\",\n\t\"gray66\": \"text__gray66--3ORMR\",\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/utils/enums/EColors.tsx":
/*!*************************************!*\
  !*** ./src/utils/enums/EColors.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EColors = void 0;\r\nvar EColors;\r\n(function (EColors) {\r\n    EColors[\"black\"] = \"black\";\r\n    EColors[\"orange\"] = \"orange\";\r\n    EColors[\"green\"] = \"green\";\r\n    EColors[\"white\"] = \"white\";\r\n    EColors[\"grayF4\"] = \"grayF4\";\r\n    EColors[\"grayF3\"] = \"grayF3\";\r\n    EColors[\"grayD9\"] = \"grayD9\";\r\n    EColors[\"grayC4\"] = \"grayC4\";\r\n    EColors[\"gray99\"] = \"gray99\";\r\n    EColors[\"gray66\"] = \"gray66\";\r\n})(EColors = exports.EColors || (exports.EColors = {}));\r\n\n\n//# sourceURL=webpack:///./src/utils/enums/EColors.tsx?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// ф кот возвращает обьект с доп ключом со значением value. assoc('key', value)(obj)\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assocNoTs = exports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n}\r\nexports.assoc = assoc;\r\nfunction assocNoTs(key, value) {\r\n    return function (someObj) {\r\n        var _a;\r\n        return (__assign(__assign({}, someObj), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n}\r\nexports.assocNoTs = assocNoTs;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/react/NotStandardLink.tsx":
/*!*********************************************!*\
  !*** ./src/utils/react/NotStandardLink.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotStandardLink = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preventDefault_1 = __webpack_require__(/*! ./preventDefault */ \"./src/utils/react/preventDefault.tsx\");\r\nvar stopPropagation_1 = __webpack_require__(/*! ./stopPropagation */ \"./src/utils/react/stopPropagation.tsx\");\r\nfunction NotStandardLink(props) {\r\n    // const handleClick = (e:React.SyntheticEvent<HTMLAnchorElement>) => {//ручной старый вариант\r\n    //   e.stopPropagation();\r\n    //   e.preventDefault();\r\n    //   props.onClick();\r\n    // }\r\n    return (react_1.default.createElement(\"a\", { href: props.href, onClick: preventDefault_1.preventDefault(stopPropagation_1.stopPropagation(props.onClick)) }, props.text)\r\n    // <a href={\"#\"} onClick={preventAll(props.onClick)}>Hello</a>//или сразу все\r\n    );\r\n}\r\nexports.NotStandardLink = NotStandardLink;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/NotStandardLink.tsx?");

/***/ }),

/***/ "./src/utils/react/generateRandomId.ts":
/*!*********************************************!*\
  !*** ./src/utils/react/generateRandomId.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n//nanoid библиотека по генерации уник ID. Более надежна если есть большие списки.\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.addRandomId = exports.assignRandomId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\"); // ф кот возвращает ф возвращающая обьект с доп ключом со значением value ([key]: value). Принимает 2 арг: key, value.\r\nexports.generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.assignRandomId = assoc_1.assoc('id', exports.generateRandomString()); //вызов ф один раз. Вернет функцию с ожидающим принимающим аргументом в виде обьекта к которому в дальнейшем нужно будет добавить доп ключ 'id' с уже сгенерированным значением generateRandomString().\r\nexports.addRandomId = function (someObj) { return assoc_1.assoc('id', exports.generateRandomString())(someObj); }; //ф возвр ф assignRandomId\r\n// = export const addRandomId = assoc('id', generateRandomString())(someObj)\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomId.ts?");

/***/ }),

/***/ "./src/utils/react/preventDefault.tsx":
/*!********************************************!*\
  !*** ./src/utils/react/preventDefault.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.preventDefault = void 0;\r\nfunction preventDefault(fn) {\r\n    return function (e) {\r\n        e.preventDefault(); //...выполняет превент...\r\n        fn(e); // и передает в наш начальный callback наш event дальше\r\n    };\r\n}\r\nexports.preventDefault = preventDefault;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/preventDefault.tsx?");

/***/ }),

/***/ "./src/utils/react/stopPropagation.tsx":
/*!*********************************************!*\
  !*** ./src/utils/react/stopPropagation.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.stopPropagationNoTs = exports.stopPropagation = void 0;\r\nfunction stopPropagation(fn) {\r\n    return function (e) {\r\n        e.stopPropagation();\r\n        fn(e);\r\n    };\r\n}\r\nexports.stopPropagation = stopPropagation;\r\nfunction stopPropagationNoTs(someFn) {\r\n    return function (e) {\r\n        e.stopPropagation();\r\n        someFn(e);\r\n    };\r\n}\r\nexports.stopPropagationNoTs = stopPropagationNoTs;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/stopPropagation.tsx?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });