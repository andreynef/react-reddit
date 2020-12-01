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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./myHooks/useToken */ \"./src/myHooks/useToken.tsx\");\r\nvar tokenContext_1 = __webpack_require__(/*! ./shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\n//Прога по генерации шаблонов компонент (установка: npm install -g yo generator-react-ts-component-dir):\r\n//В консоли набрать: yo react-ts-component-dir BLABLAComp ./src/shared. Пример 'yo react-ts-component-dir [component_name] [path] [--styles] [--less] [--sass]'\r\nfunction AppComponent() {\r\n    var token = useToken_1.useToken()[0]; //теперь есть токен на клиенте (записан в window.__token__). Далее прокидываем его в пропсы нужн компонентов, либо напрямую используя контекст оборачивая в Provider.\r\n    // const {Provider} = tokenContext;//создаем контекст и оборачиваем все содержимое App в Provider. Либо создаем свой на основе него.\r\n    return (react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },\r\n        react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(Content_1.Content, null,\r\n                react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                    react_1.default.createElement(CardsList_1.CardList, null))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); }); // HOC. Если используются Hooks, тобишь UseState итд\r\n// export const App = hot(AppComponent);//если не используются Hooks.\r\n// {/*<DropdownNoAbsolute*/}\r\n// {/*  onClose={()=>console.log('closed!!!')}//слушатели. Если закрыт то выполнить это.*/}\r\n// {/*  onOpen={()=>console.log('opened!!!')}*/}\r\n// {/*  // isOpen={false}//можно передать изначальное состояние*/}\r\n// {/*  button={<button>dropdown button</button>}*/}\r\n// // {/*>/!* Контейнер с логикой дропа *!/*/}\r\n// {/*  <p>text1</p>/!*children*!/*/}\r\n// {/*  <p>text2</p>/!*children*!/*/}\r\n// {/*  <p>text3</p>/!*children*!/*/}\r\n// {/*  <p>text4</p>/!*children*!/*/}\r\n// </DropdownNoAbsolute>\r\n// <Icon size={20} mobileSize={28} color={EColors.green} bold>Label1</Icon>\r\n// <Break size={8} inline mobileSize={16}/>\r\n// <Icon size={20}>Label2</Icon>\r\n// <Break size={8} top/>\r\n// <Icon size={20} mobileSize={10}>Label3</Icon>\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/myHooks/usePostsData.ts":
/*!*************************************!*\
  !*** ./src/myHooks/usePostsData.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nfunction usePostsData() {\r\n    function getFewKeys(obj) {\r\n        return {\r\n            'author': obj.author,\r\n            'id': obj.id,\r\n            'data': new Date(obj.created).toLocaleString('ru'),\r\n            'avatar': \"https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg\",\r\n            'title': obj.title,\r\n            'karma': 25,\r\n            'commentsAmount': 25,\r\n            'isSaved': true,\r\n        };\r\n    }\r\n    var _a = react_1.useState({}), data = _a[0], setData = _a[1]; //создание своего локального стейта\r\n    react_1.useEffect(function () {\r\n        axios_1.default.get('https://www.reddit.com/r/javascript/best.json', {})\r\n            .then(function (resp) {\r\n            var dataArr = resp.data.data.children.map(function (item) { return getFewKeys(item.data); });\r\n            setData({ list: dataArr });\r\n        })\r\n            .catch(console.log);\r\n    }, []);\r\n    return [data];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/myHooks/usePostsData.ts?");

/***/ }),

/***/ "./src/myHooks/useToken.tsx":
/*!**********************************!*\
  !*** ./src/myHooks/useToken.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useToken() {\r\n    var _a = react_1.useState(''), token = _a[0], setToken = _a[1];\r\n    react_1.useEffect(function () {\r\n        if (window.__token__) {\r\n            setToken(window.__token__);\r\n        }\r\n    }, []);\r\n    return [token]; //либо просто token. Тжсм.\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/myHooks/useToken.tsx?");

/***/ }),

/***/ "./src/myHooks/useUserData.ts":
/*!************************************!*\
  !*** ./src/myHooks/useUserData.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nfunction useUserData() {\r\n    var _a = react_1.useState({}), data = _a[0], setData = _a[1]; //создание своего стейта\r\n    var token = react_1.useContext(tokenContext_1.tokenContext); //добавлен еще хук чтобы было все вместе связанное с UserData и не нужно передавать token в useUserData (token).\r\n    react_1.useEffect(function () {\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: \"bearer \" + token }\r\n        })\r\n            .then(function (resp) {\r\n            console.log('sdsdsdsdsd', resp.data);\r\n            setData({ name: resp.data.name, iconImg: resp.data.icon_img.split(\"?\")[0] }); //ловим ответ и сетим ниже только нужные данные. Подробности в доке www.reddit.com/dev/api/oauth\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/myHooks/useUserData.ts?");

/***/ }),

/***/ "./src/server/indexHtmlTemplate.js":
/*!*****************************************!*\
  !*** ./src/server/indexHtmlTemplate.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexHtmlTemplate = void 0;\r\nexports.indexHtmlTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <title>Reddit App Andrey</title>\\n    <meta charset=\\\"utf-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <script>\\n      window.__token__ = '\" + token + \"';//\\u0442\\u043E\\u043A\\u0435\\u043D \\u043F\\u0440\\u0438\\u0445\\u043E\\u0434\\u0438\\u0442 \\u0438\\u0437 \\u0441\\u0435\\u0440\\u0432\\u0435\\u0440\\u0430 \\u043F\\u043E\\u0441\\u043B\\u0435 \\u0430\\u043A\\u0441\\u0438\\u043E\\u0441 \\u043E\\u0442\\u0432\\u0435\\u0442\\u0430\\n    </script>\\n</head>\\n<body>\\n    <div id=\\\"react_root\\\">\" + content + \"</div>\\n</body>\\n</html>\\n\"; };\r\n\n\n//# sourceURL=webpack:///./src/server/indexHtmlTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar indexHtmlTemplate_1 = __webpack_require__(/*! ./indexHtmlTemplate */ \"./src/server/indexHtmlTemplate.js\");\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar Reddit_1 = __webpack_require__(/*! ../shared/Reddit */ \"./src/shared/Reddit/index.js\");\r\nvar app = express_1.default(); //инициализация. Теперь app это instance нашего приложения\r\napp.use('/static', express_1.default.static('./dist/client')); //спец роут кот будет раздавать статические файлы. По url'у '/static' будут доступны все файлы кот лежат в папке 'dist/client'.\r\napp.get('/', function (req, res) {\r\n    res.send(indexHtmlTemplate_1.indexHtmlTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.get('/auth', function (req, res) {\r\n    Reddit_1.getAccessTokenRequest(req)\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        // data { // то что приходит\r\n        //   access_token: '712161124719-R3TVWpHcJWJFGnXNX_o2Fb4A-E8eOg',\r\n        //     token_type: 'bearer',\r\n        //     expires_in: 3600,\r\n        //     refresh_token: '712161124719-ic1EYQ2-3GJ6B0LTIROZyLvwf1-_Ig',\r\n        //     scope: 'identity read submit'\r\n        // }\r\n        // Теперь сервер имеет токен. Остается его передать клиенту - проброс пропами в HTMLTemplate.       !!!\r\n        console.log('data[access_token]:', data['access_token']);\r\n        res.send(indexHtmlTemplate_1.indexHtmlTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.listen(3000, function () {\r\n    console.log('file server.js is speaking : \"Server started on http://localhost:3000\"');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar CardControls_1 = __webpack_require__(/*! ./CardControls */ \"./src/shared/CardsList/Card/CardControls/index.ts\");\r\nvar CardHeader_1 = __webpack_require__(/*! ./CardHeader */ \"./src/shared/CardsList/Card/CardHeader/index.ts\");\r\nvar CardPreview_1 = __webpack_require__(/*! ./CardPreview */ \"./src/shared/CardsList/Card/CardPreview/index.ts\");\r\nfunction Card(_a) {\r\n    var item = _a.item;\r\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(CardHeader_1.CardHeader, { commentsAmount: item.commentsAmount, title: item.title, date: item.date, author: item.author }),\r\n        react_1.default.createElement(CardPreview_1.CardPreview, { isSaved: item.isSaved, id: item.id }),\r\n        react_1.default.createElement(CardControls_1.CardControls, { commentsAmount: item.commentsAmount })));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/Actions/Actions.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/Actions/Actions.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Actions = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar actions_css_1 = __importDefault(__webpack_require__(/*! ./actions.css */ \"./src/shared/CardsList/Card/CardControls/Actions/actions.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../supportingComponents/Break */ \"./src/shared/supportingComponents/Break/index.ts\");\r\nvar bookmark = 'seen';\r\nvar openedThread = \"private\";\r\n// interface IActionsProps {\r\n//   openedThread: string;\r\n// }\r\nfunction Actions() {\r\n    return (react_1.default.createElement(\"div\", { className: actions_css_1.default.actions }, openedThread === \"private\" ?\r\n        react_1.default.createElement(react_1.default.Fragment, null, (bookmark === 'seen' || bookmark === 'commented') && (react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(Icons_1.ShareIcon, null)),\r\n            react_1.default.createElement(Break_1.Break, { size: 14 }),\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(Icons_1.SaveIcon, null)))))\r\n        :\r\n            react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icons_1.ShareIcon, null)),\r\n                react_1.default.createElement(Break_1.Break, { size: 14 }),\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icons_1.SaveIcon, null)))));\r\n}\r\nexports.Actions = Actions;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/Actions/Actions.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardControls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CardControls_css_1 = __importDefault(__webpack_require__(/*! ./CardControls.css */ \"./src/shared/CardsList/Card/CardControls/CardControls.css\"));\r\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts\");\r\nvar Actions_1 = __webpack_require__(/*! ./Actions */ \"./src/shared/CardsList/Card/CardControls/Actions/index.ts\");\r\nvar CommentsButton_1 = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/CardControls/CommentsButton/index.ts\");\r\nfunction CardControls(_a) {\r\n    var commentsAmount = _a.commentsAmount;\r\n    return (react_1.default.createElement(\"div\", { className: CardControls_css_1.default.controls },\r\n        react_1.default.createElement(KarmaCounter_1.KarmaCounter, null),\r\n        react_1.default.createElement(\"div\", { className: CardControls_css_1.default.controlsCommentsContainer },\r\n            react_1.default.createElement(CommentsButton_1.CommentsButton, { commentsAmount: commentsAmount })),\r\n        react_1.default.createElement(Actions_1.Actions, null)));\r\n}\r\nexports.CardControls = CardControls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/CardControls.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/CardsList/Card/CardControls/CommentsButton/commentsbutton.css\"));\r\nvar Break_1 = __webpack_require__(/*! ../../../../supportingComponents/Break */ \"./src/shared/supportingComponents/Break/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar Comment_1 = __webpack_require__(/*! ../Comment */ \"./src/shared/CardsList/Card/CardControls/Comment/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../supportingComponents/Icon */ \"./src/shared/supportingComponents/Icon/index.ts\");\r\nvar EIcons_1 = __webpack_require__(/*! ../../../../../utils/enums/EIcons */ \"./src/utils/enums/EIcons.tsx\");\r\nvar bookmark = 'commented';\r\nfunction CommentsButton(_a) {\r\n    var commentsAmount = _a.commentsAmount;\r\n    return (react_1.default.createElement(\"div\", { className: commentsbutton_css_1.default.commentsButtonContainer },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { isInline: true, button: react_1.default.createElement(\"button\", { className: commentsbutton_css_1.default.commentsButton },\r\n                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.comment }),\r\n                react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n                bookmark === 'commented' ? react_1.default.createElement(\"span\", null, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\") : react_1.default.createElement(\"span\", null, commentsAmount)) },\r\n            react_1.default.createElement(\"div\", { className: commentsbutton_css_1.default.commentsDropdown },\r\n                react_1.default.createElement(Comment_1.Comment, { commentsAmount: commentsAmount })))));\r\n}\r\nexports.CommentsButton = CommentsButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/CommentsButton/CommentsButton.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar karmacounter_css_1 = __importDefault(__webpack_require__(/*! ./karmacounter.css */ \"./src/shared/CardsList/Card/CardControls/KarmaCounter/karmacounter.css\"));\r\nvar Break_1 = __webpack_require__(/*! ../../../../supportingComponents/Break */ \"./src/shared/supportingComponents/Break/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../supportingComponents/Icon */ \"./src/shared/supportingComponents/Icon/index.ts\");\r\nvar EIcons_1 = __webpack_require__(/*! ../../../../../utils/enums/EIcons */ \"./src/utils/enums/EIcons.tsx\");\r\nfunction KarmaCounter() {\r\n    var karma = 234;\r\n    return (react_1.default.createElement(\"div\", { className: karmacounter_css_1.default.karmaCounter },\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.up },\r\n            react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.arrowFilled })),\r\n        react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n        react_1.default.createElement(\"span\", { className: karmacounter_css_1.default.karmaValue }, karma),\r\n        react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.down },\r\n            react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.arrowFilled }))));\r\n}\r\nexports.KarmaCounter = KarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/KarmaCounter/KarmaCounter.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ActionsContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../../supportingComponents/Text */ \"./src/shared/supportingComponents/Text/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../supportingComponents/Break */ \"./src/shared/supportingComponents/Break/index.ts\");\r\nvar EColors_1 = __webpack_require__(/*! ../../../../../utils/enums/EColors */ \"./src/utils/enums/EColors.tsx\");\r\nvar actionsContent_css_1 = __importDefault(__webpack_require__(/*! ./actionsContent.css */ \"./src/shared/CardsList/Card/CardHeader/ActionsContent/actionsContent.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../supportingComponents/Icon */ \"./src/shared/supportingComponents/Icon/index.ts\");\r\nvar EIcons_1 = __webpack_require__(/*! ../../../../../utils/enums/EIcons */ \"./src/utils/enums/EIcons.tsx\");\r\nvar bookmark = 'seen';\r\nfunction ActionsContent(_a) {\r\n    var commentsAmount = _a.commentsAmount;\r\n    return (react_1.default.createElement(\"div\", { className: actionsContent_css_1.default.actionsContentContainer }, bookmark === 'seen' && (react_1.default.createElement(\"button\", { className: actionsContent_css_1.default.buttonSeen },\r\n        react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.eye }),\r\n        react_1.default.createElement(Break_1.Break, { size: 4, inline: true }),\r\n        react_1.default.createElement(Text_1.Text, { size: 10, color: EColors_1.EColors.gray99, tabletSize: 14 }, \"3 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")))));\r\n}\r\nexports.ActionsContent = ActionsContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/ActionsContent/ActionsContent.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardHeader = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CardHeader_css_1 = __importDefault(__webpack_require__(/*! ./CardHeader.css */ \"./src/shared/CardsList/Card/CardHeader/CardHeader.css\"));\r\nvar MetaData_1 = __webpack_require__(/*! ./MetaData */ \"./src/shared/CardsList/Card/CardHeader/MetaData/index.ts\");\r\nvar ActionsContent_1 = __webpack_require__(/*! ./ActionsContent */ \"./src/shared/CardsList/Card/CardHeader/ActionsContent/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/CardHeader/Menu/index.ts\");\r\nvar NotStandardLink_1 = __webpack_require__(/*! ../../../../utils/react/NotStandardLink */ \"./src/utils/react/NotStandardLink.tsx\");\r\nfunction CardHeader(_a) {\r\n    var commentsAmount = _a.commentsAmount, title = _a.title, date = _a.date, author = _a.author;\r\n    var handleClick = function () {\r\n        alert('title is pressed. Used NotStandardLink, which is - preventDefault(stopPropagation(props.onClick)');\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: CardHeader_css_1.default.cardHeaderContainer },\r\n        react_1.default.createElement(\"div\", { className: CardHeader_css_1.default.metaMenuContainer },\r\n            react_1.default.createElement(MetaData_1.MetaData, { date: date, author: author }),\r\n            react_1.default.createElement(Menu_1.Menu, null)),\r\n        react_1.default.createElement(\"h2\", { className: CardHeader_css_1.default.titleContainer },\r\n            react_1.default.createElement(NotStandardLink_1.NotStandardLink, { href: \"#post-url\", text: title, onClick: handleClick })),\r\n        react_1.default.createElement(ActionsContent_1.ActionsContent, { commentsAmount: commentsAmount })));\r\n}\r\nexports.CardHeader = CardHeader;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/CardHeader.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/Menu/Menu.tsx":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/Menu/Menu.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../supportingComponents/Text */ \"./src/shared/supportingComponents/Text/index.ts\");\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/CardHeader/Menu/menu.css\"));\r\nvar MenuDropList_1 = __webpack_require__(/*! ./MenuDropList/MenuDropList */ \"./src/shared/CardsList/Card/CardHeader/Menu/MenuDropList/MenuDropList.tsx\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../supportingComponents/Icon */ \"./src/shared/supportingComponents/Icon/index.ts\");\r\nvar EIcons_1 = __webpack_require__(/*! ../../../../../utils/enums/EIcons */ \"./src/utils/enums/EIcons.tsx\");\r\nfunction Menu() {\r\n    return (react_1.default.createElement(Dropdown_1.Dropdown //контейнер с логикой дропа\r\n    , { button: //на что жать.\r\n        react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n            react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.menu })) },\r\n        react_1.default.createElement(\"div\", { className: menu_css_1.default.menuDropdown },\r\n            react_1.default.createElement(MenuDropList_1.MenuDropList, null),\r\n            react_1.default.createElement(\"button\", { className: menu_css_1.default.closeButton },\r\n                react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/Menu/MenuDropList/MenuDropList.tsx":
/*!*********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/Menu/MenuDropList/MenuDropList.tsx ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuDropList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menuDropList_css_1 = __importDefault(__webpack_require__(/*! ./menuDropList.css */ \"./src/shared/CardsList/Card/CardHeader/Menu/MenuDropList/menuDropList.css\"));\r\nvar GenericList_1 = __webpack_require__(/*! ../../../../../../utils/GenericList */ \"./src/utils/GenericList.tsx\");\r\nvar MenuDropListItem_1 = __webpack_require__(/*! ./MenuDropListItem/MenuDropListItem */ \"./src/shared/CardsList/Card/CardHeader/Menu/MenuDropList/MenuDropListItem/MenuDropListItem.tsx\");\r\nvar generateRandomId_1 = __webpack_require__(/*! ../../../../../../utils/react/generateRandomId */ \"./src/utils/react/generateRandomId.ts\");\r\nfunction MenuDropList() {\r\n    var menuTextArr = [\r\n        { text: 'Комментарии' },\r\n        { text: 'Поделиться' },\r\n        { text: 'Скрыть' },\r\n        { text: 'Сохранить' },\r\n        { text: 'Пожаловаться' },\r\n    ].map(generateRandomId_1.addRandomId); //MenuDropList будет вызван n (Card) раз и у кажд эл этого списка будет сгенерен новый id. Итого На сайте 100шт 'комментариев' и у кажд свой id.\r\n    var listForGenericList = menuTextArr.map(function (item) { return ( //добавляем к этому массиву свойства генерика чтобы потом его применить в рендере.\r\n    {\r\n        id: item.id,\r\n        className: menuDropList_css_1.default.menuItem,\r\n        onClick: function () { return console.log('id:', item.id); },\r\n        children: react_1.default.createElement(MenuDropListItem_1.MenuDropListItem, { text: item.text }),\r\n    }); });\r\n    return ( //генерим генерик на выходе\r\n    react_1.default.createElement(\"ul\", { className: menuDropList_css_1.default.menuDropList },\r\n        react_1.default.createElement(GenericList_1.GenericList, { list: listForGenericList })));\r\n}\r\nexports.MenuDropList = MenuDropList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/Menu/MenuDropList/MenuDropList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/Menu/MenuDropList/MenuDropListItem/MenuDropListItem.tsx":
/*!******************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/Menu/MenuDropList/MenuDropListItem/MenuDropListItem.tsx ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuDropListItem = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../supportingComponents/Text */ \"./src/shared/supportingComponents/Text/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../../../supportingComponents/Break */ \"./src/shared/supportingComponents/Break/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../../supportingComponents/Icon */ \"./src/shared/supportingComponents/Icon/index.ts\");\r\nvar EIcons_1 = __webpack_require__(/*! ../../../../../../../utils/enums/EIcons */ \"./src/utils/enums/EIcons.tsx\");\r\nexports.MenuDropListItem = function (_a) {\r\n    var text = _a.text;\r\n    var name;\r\n    if (text === 'Комментарии') {\r\n        name = EIcons_1.EIcons.comment;\r\n    }\r\n    if (text === 'Поделиться') {\r\n        name = EIcons_1.EIcons.share;\r\n    }\r\n    if (text === 'Скрыть') {\r\n        name = EIcons_1.EIcons.block;\r\n    }\r\n    if (text === 'Сохранить') {\r\n        name = EIcons_1.EIcons.save;\r\n    }\r\n    if (text === 'Пожаловаться') {\r\n        name = EIcons_1.EIcons.warning;\r\n    }\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(Icon_1.Icon, { name: name, size: 14 }),\r\n        react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n        react_1.default.createElement(Text_1.Text, { size: 12 }, text)));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/Menu/MenuDropList/MenuDropListItem/MenuDropListItem.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardHeader/Menu/MenuDropList/menuDropList.css":
/*!*********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardHeader/Menu/MenuDropList/menuDropList.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuDropList\": \"menuDropList__menuDropList--2quvG\",\n\t\"menuItem\": \"menuDropList__menuItem--20fi6\",\n\t\"divider\": \"menuDropList__divider--3bO3m\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/Menu/MenuDropList/menuDropList.css?");

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

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--3wjY3\",\n\t\"menuButton\": \"menu__menuButton--3sAmx\",\n\t\"menuDropdown\": \"menu__menuDropdown--1v3Gm\",\n\t\"closeButton\": \"menu__closeButton--uVmqb\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardHeader/Menu/menu.css?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardPreview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar cardPreview_css_1 = __importDefault(__webpack_require__(/*! ./cardPreview.css */ \"./src/shared/CardsList/Card/CardPreview/cardPreview.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../supportingComponents/Break */ \"./src/shared/supportingComponents/Break/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../supportingComponents/Text */ \"./src/shared/supportingComponents/Text/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../supportingComponents/Icon */ \"./src/shared/supportingComponents/Icon/index.ts\");\r\nvar EIcons_1 = __webpack_require__(/*! ../../../../utils/enums/EIcons */ \"./src/utils/enums/EIcons.tsx\");\r\nfunction CardPreview(_a) {\r\n    var isSaved = _a.isSaved, id = _a.id;\r\n    return (react_1.default.createElement(\"div\", { className: cardPreview_css_1.default.previewContainer },\r\n        react_1.default.createElement(\"img\", { className: cardPreview_css_1.default.previewImg, src: 'https://i.pinimg.com/originals/fd/a9/ec/fda9ec08daa846f974323a22ee0b48ea.jpg', alt: 'previewPic' }),\r\n        isSaved &&\r\n            react_1.default.createElement(\"div\", { className: cardPreview_css_1.default.marker },\r\n                react_1.default.createElement(\"div\", { className: cardPreview_css_1.default.markerPartOne },\r\n                    react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.save, size: 10 }),\r\n                    react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n                    react_1.default.createElement(Text_1.Text, { size: 10 }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u043D\\u043E\\u0435\")),\r\n                react_1.default.createElement(\"div\", { className: cardPreview_css_1.default.markerPartTwo },\r\n                    react_1.default.createElement(Icons_1.ArrowFilledIcon, null)))));\r\n}\r\nexports.CardPreview = CardPreview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardPreview/CardPreview.tsx?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardlist_css_1 = __importDefault(__webpack_require__(/*! ./cardlist.css */ \"./src/shared/CardsList/cardlist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar EmptyCard_1 = __webpack_require__(/*! ./EmptyCard */ \"./src/shared/CardsList/EmptyCard/index.ts\");\r\nvar FaceHmm_1 = __webpack_require__(/*! ./FaceHmm */ \"./src/shared/CardsList/FaceHmm/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../utils/GenericList */ \"./src/utils/GenericList.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ../context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar generateRandomId_1 = __webpack_require__(/*! ../../utils/react/generateRandomId */ \"./src/utils/react/generateRandomId.ts\");\r\nfunction CardList() {\r\n    var listTemplate = [\r\n        { author: 'Pupkin Who', date: '10/10/2020', avatar: 'url1', title: 'Реализация намеченных плановых заданий', karma: '255', commentsAmount: 2, isSaved: false },\r\n        { author: 'Pupkin Why', date: '10/10/2020', avatar: 'url2', title: 'some title2', karma: 234, commentsAmount: 3, isSaved: true },\r\n        { author: 'Pupkin What', date: '10/10/2020', avatar: 'url3', title: 'some title3', karma: 46, commentsAmount: 4, isSaved: true },\r\n        { author: 'Pupkin Where', date: '10/10/2020', avatar: 'url4', title: 'some title4', karma: 56756, commentsAmount: 5, isSaved: false },\r\n        { author: 'Pupkin When', date: '10/10/2020', avatar: 'url5', title: 'some title5', karma: 67867766, commentsAmount: 6, isSaved: true },\r\n    ].map(generateRandomId_1.addRandomId); //к кажд обьекту массива будет добавлен id вида id: 6r26er235re\r\n    var list = react_1.useContext(postsContext_1.postsContext).list;\r\n    var listVary = listTemplate; //list?list:listTemplate\r\n    var cardsForGenericList = listVary.map(function (item) { return ({\r\n        id: item.id,\r\n        children: react_1.default.createElement(Card_1.Card, { item: item }),\r\n    }); });\r\n    return (react_1.default.createElement(\"ul\", { className: cardlist_css_1.default.cardList },\r\n        listVary.length === 0 && (react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(EmptyCard_1.EmptyCard, null),\r\n            react_1.default.createElement(EmptyCard_1.EmptyCard, null),\r\n            react_1.default.createElement(EmptyCard_1.EmptyCard, null),\r\n            react_1.default.createElement(EmptyCard_1.EmptyCard, null),\r\n            react_1.default.createElement(FaceHmm_1.FaceHmm, null))),\r\n        listVary.length !== 0 && react_1.default.createElement(GenericList_1.GenericList, { list: cardsForGenericList })));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/EmptyCard/EmptyCard.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/EmptyCard/EmptyCard.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EmptyCard = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar emptycard_css_1 = __importDefault(__webpack_require__(/*! ./emptycard.css */ \"./src/shared/CardsList/EmptyCard/emptycard.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../supportingComponents/Break */ \"./src/shared/supportingComponents/Break/index.ts\");\r\nfunction EmptyCard(_a) {\r\n    var id = _a.id, isSaved = _a.isSaved;\r\n    return (react_1.default.createElement(\"li\", { className: emptycard_css_1.default.emptyCard },\r\n        react_1.default.createElement(\"div\", { className: emptycard_css_1.default.textContent },\r\n            react_1.default.createElement(\"div\", { className: emptycard_css_1.default.metaMenu },\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.meta },\r\n                    react_1.default.createElement(\"div\", { className: emptycard_css_1.default.ava }),\r\n                    react_1.default.createElement(\"div\", { className: emptycard_css_1.default.name }),\r\n                    react_1.default.createElement(\"div\", { className: emptycard_css_1.default.date })),\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.menu },\r\n                    react_1.default.createElement(Icons_1.MenuIcon, null))),\r\n            react_1.default.createElement(\"div\", { className: emptycard_css_1.default.title }),\r\n            react_1.default.createElement(\"div\", { className: emptycard_css_1.default.headerActions },\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.headerActionsIcon }),\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.headerActionsText }))),\r\n        react_1.default.createElement(\"div\", { className: emptycard_css_1.default.preview }),\r\n        react_1.default.createElement(\"div\", { className: emptycard_css_1.default.controls },\r\n            react_1.default.createElement(\"div\", { className: emptycard_css_1.default.karma },\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.up },\r\n                    react_1.default.createElement(Icons_1.ArrowFilledIcon, null)),\r\n                react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n                react_1.default.createElement(\"span\", null, \"234\"),\r\n                react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.down },\r\n                    react_1.default.createElement(Icons_1.ArrowFilledIcon, null))),\r\n            react_1.default.createElement(\"div\", { className: emptycard_css_1.default.controlActionsContainer },\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.controlActionOne }),\r\n                react_1.default.createElement(Break_1.Break, { size: 16 }),\r\n                react_1.default.createElement(\"div\", { className: emptycard_css_1.default.controlActionTwo })))));\r\n}\r\nexports.EmptyCard = EmptyCard;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/EmptyCard/EmptyCard.tsx?");

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

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nvar SearchGroup_1 = __webpack_require__(/*! ./SearchGroup */ \"./src/shared/Header/SearchGroup/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.headerContainer },\r\n        react_1.default.createElement(SearchGroup_1.SearchGroup, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null)));\r\n}\r\nexports.Header = Header;\r\n// -----------\r\n//func Header\r\n// const {Consumer} = tokenContext;// вариант чер Consumer и в рендере <Consumer>{(what)=><Component what={what}>}<Consumer/>\r\n// const token = useContext(tokenContext);//вариант чер хук\r\n//\r\n//render\r\n// <Consumer>\r\n//   {(contextttt)=>(\r\n//     <UserBlock context={contextttt}/>\r\n//   )}\r\n// </Consumer>\r\n// -------------------\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchGroup/NewMessages/NewMessages.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/Header/SearchGroup/NewMessages/NewMessages.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NewMessages = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar newMessages_css_1 = __importDefault(__webpack_require__(/*! ./newMessages.css */ \"./src/shared/Header/SearchGroup/NewMessages/newMessages.css\"));\r\nvar Break_1 = __webpack_require__(/*! ../../../supportingComponents/Break */ \"./src/shared/supportingComponents/Break/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../supportingComponents/Icon */ \"./src/shared/supportingComponents/Icon/index.ts\");\r\nvar EIcons_1 = __webpack_require__(/*! ../../../../utils/enums/EIcons */ \"./src/utils/enums/EIcons.tsx\");\r\nvar Text_1 = __webpack_require__(/*! ../../../supportingComponents/Text */ \"./src/shared/supportingComponents/Text/index.ts\");\r\nvar EColors_1 = __webpack_require__(/*! ../../../../utils/enums/EColors */ \"./src/utils/enums/EColors.tsx\");\r\nfunction NewMessages() {\r\n    var newMessages = 8;\r\n    return (react_1.default.createElement(\"button\", { className: newMessages_css_1.default.messagesButton },\r\n        react_1.default.createElement(\"div\", { className: newMessages_css_1.default.messagesTextContainer },\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: EColors_1.EColors.white }, newMessages)),\r\n        react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n        react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.envelope })));\r\n}\r\nexports.NewMessages = NewMessages;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchGroup/NewMessages/NewMessages.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchGroup/NewMessages/index.ts":
/*!************************************************************!*\
  !*** ./src/shared/Header/SearchGroup/NewMessages/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NewMessages */ \"./src/shared/Header/SearchGroup/NewMessages/NewMessages.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchGroup/NewMessages/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchGroup/NewMessages/newMessages.css":
/*!*******************************************************************!*\
  !*** ./src/shared/Header/SearchGroup/NewMessages/newMessages.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"messagesButton\": \"newMessages__messagesButton--3qmV1\",\n\t\"messagesTextContainer\": \"newMessages__messagesTextContainer--twdib\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchGroup/NewMessages/newMessages.css?");

/***/ }),

/***/ "./src/shared/Header/SearchGroup/SearchBlock/SearchBlock.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/Header/SearchGroup/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchGroup/SearchBlock/searchblock.css\"));\r\nvar Break_1 = __webpack_require__(/*! ../../../supportingComponents/Break */ \"./src/shared/supportingComponents/Break/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../supportingComponents/Icon */ \"./src/shared/supportingComponents/Icon/index.ts\");\r\nvar EIcons_1 = __webpack_require__(/*! ../../../../utils/enums/EIcons */ \"./src/utils/enums/EIcons.tsx\");\r\nfunction SearchBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.search }),\r\n        react_1.default.createElement(Break_1.Break, { size: 4, tabletSize: 12 }),\r\n        react_1.default.createElement(\"input\", { placeholder: 'поиск' })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchGroup/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchGroup/SearchBlock/index.ts":
/*!************************************************************!*\
  !*** ./src/shared/Header/SearchGroup/SearchBlock/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchGroup/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchGroup/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchGroup/SearchBlock/searchblock.css":
/*!*******************************************************************!*\
  !*** ./src/shared/Header/SearchGroup/SearchBlock/searchblock.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3vTjO\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchGroup/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchGroup/SearchGroup.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchGroup/SearchGroup.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchGroup = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchgroup_css_1 = __importDefault(__webpack_require__(/*! ./searchgroup.css */ \"./src/shared/Header/SearchGroup/searchgroup.css\"));\r\nvar NewMessages_1 = __webpack_require__(/*! ./NewMessages */ \"./src/shared/Header/SearchGroup/NewMessages/index.ts\");\r\nvar UserBlock_1 = __webpack_require__(/*! ../UserBlock */ \"./src/shared/Header/UserBlock/index.ts\");\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchGroup/SearchBlock/index.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ../../context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nfunction SearchGroup() {\r\n    return (react_1.default.createElement(\"div\", { className: searchgroup_css_1.default.searchGroup },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(UserBlock_1.UserBlock, null)),\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(NewMessages_1.NewMessages, null)));\r\n}\r\nexports.SearchGroup = SearchGroup;\r\n{ /*<Break size={16} mobileSize={16} tabletSize={30} desktopSize={50}/>*/ }\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchGroup/SearchGroup.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchGroup/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchGroup/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchGroup */ \"./src/shared/Header/SearchGroup/SearchGroup.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchGroup/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchGroup/searchgroup.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchGroup/searchgroup.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchGroup\": \"searchgroup__searchGroup--2xT5y\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchGroup/searchgroup.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    var openedThread = 'private';\r\n    return (react_1.default.createElement(\"div\", { className: threadtitle_css_1.default.threadContainer },\r\n        react_1.default.createElement(\"div\", { className: threadtitle_css_1.default.titleContainer },\r\n            react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, openedThread === 'private' ? 'Личный кабинет' : 'Дискуссии'))));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"titleContainer\": \"threadtitle__titleContainer--3XIDP\",\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\",\n\t\"threadContainer\": \"threadtitle__threadContainer--25qU6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/UserBlock/UserBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/UserBlock/UserBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar userBlock_css_1 = __importDefault(__webpack_require__(/*! ./userBlock.css */ \"./src/shared/Header/UserBlock/userBlock.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../supportingComponents/Icon */ \"./src/shared/supportingComponents/Icon/index.ts\");\r\nvar EIcons_1 = __webpack_require__(/*! ../../../utils/enums/EIcons */ \"./src/utils/enums/EIcons.tsx\");\r\nvar Text_1 = __webpack_require__(/*! ../../supportingComponents/Text */ \"./src/shared/supportingComponents/Text/index.ts\");\r\nvar EColors_1 = __webpack_require__(/*! ../../../utils/enums/EColors */ \"./src/utils/enums/EColors.tsx\");\r\nvar Reddit_1 = __webpack_require__(/*! ../../Reddit */ \"./src/shared/Reddit/index.js\");\r\nvar userContext_1 = __webpack_require__(/*! ../../context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nfunction UserBlock() {\r\n    var _a = react_1.useContext(userContext_1.userContext), name = _a.name, iconImg = _a.iconImg;\r\n    var href = Reddit_1.getRedditAuthUrl();\r\n    console.log(href);\r\n    return ( //--> <a> --> www.reddit.com --> server.js '/auth' + код --> запрос токена --> ответ --> html шаблон window.__token__ --> App\r\n    react_1.default.createElement(\"a\", { href: href, className: userBlock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userBlock_css_1.default.avatarBox }, iconImg\r\n            ? react_1.default.createElement(\"img\", { className: userBlock_css_1.default.avatarImg, src: iconImg, alt: \"user avatar\" })\r\n            : react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.anonymous, size: 28 })),\r\n        react_1.default.createElement(\"div\", { className: userBlock_css_1.default.username },\r\n            react_1.default.createElement(Text_1.Text, { size: 20, color: name ? EColors_1.EColors.black : EColors_1.EColors.grayC4 }, name || 'User'))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/UserBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/UserBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/UserBlock/userBlock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/UserBlock/userBlock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userBlock__userBox--3T6I1\",\n\t\"avatarBox\": \"userBlock__avatarBox--3_Sxx\",\n\t\"avatarImg\": \"userBlock__avatarImg--1Gbjj\",\n\t\"username\": \"userBlock__username--1QzDi\",\n\t\"avatarText\": \"userBlock__avatarText--qZlem\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/UserBlock/userBlock.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"headerContainer\": \"header__headerContainer--2006E\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/AnonymousIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/Icons/AnonymousIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AnonymousIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction AnonymousIcon() {\r\n    return (React.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.AnonymousIcon = AnonymousIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/AnonymousIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ArrowARightIcon.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Icons/ArrowARightIcon.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ArrowARightIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ArrowARightIcon() {\r\n    return (React.createElement(\"svg\", { width: \"16\", height: \"18\", viewBox: \"0 0 16 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z\", fill: \"#999999\" })));\r\n}\r\nexports.ArrowARightIcon = ArrowARightIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ArrowARightIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ArrowCircleIcon.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Icons/ArrowCircleIcon.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ArrowCircleIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ArrowCircleIcon() {\r\n    return (React.createElement(\"svg\", { width: \"22\", height: \"16\", viewBox: \"0 0 22 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z\", fill: \"#999999\" })));\r\n}\r\nexports.ArrowCircleIcon = ArrowCircleIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ArrowCircleIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ArrowDownIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/Icons/ArrowDownIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ArrowDownIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ArrowDownIcon() {\r\n    return (React.createElement(\"svg\", { width: \"14\", height: \"17\", viewBox: \"0 0 14 17\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z\", fill: \"#999999\" })));\r\n}\r\nexports.ArrowDownIcon = ArrowDownIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ArrowDownIcon.tsx?");

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

/***/ "./src/shared/Icons/ArrowsLeftRightIcon.tsx":
/*!**************************************************!*\
  !*** ./src/shared/Icons/ArrowsLeftRightIcon.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ArrowsLeftRightIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ArrowsLeftRightIcon() {\r\n    return (React.createElement(\"svg\", { width: \"20\", height: \"12\", viewBox: \"0 0 20 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z\", fill: \"#999999\" })));\r\n}\r\nexports.ArrowsLeftRightIcon = ArrowsLeftRightIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ArrowsLeftRightIcon.tsx?");

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

/***/ "./src/shared/Icons/ChatIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/ChatIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ChatIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ChatIcon() {\r\n    return (React.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z\", fill: \"#999999\" })));\r\n}\r\nexports.ChatIcon = ChatIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ChatIcon.tsx?");

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

/***/ "./src/shared/Icons/EyeIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/EyeIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EyeIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction EyeIcon() {\r\n    return (React.createElement(\"svg\", { width: \"12\", height: \"8\", viewBox: \"0 0 16 11\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M8 0C4.36364 0 1.25818 2.28067 0 5.5C1.25818 8.71933 4.36364 11 8 11C11.6364 11 14.7418 8.71933 16 5.5C14.7418 2.28067 11.6364 0 8 0ZM8 9.16667C5.99273 9.16667 4.36364 7.524 4.36364 5.5C4.36364 3.476 5.99273 1.83333 8 1.83333C10.0073 1.83333 11.6364 3.476 11.6364 5.5C11.6364 7.524 10.0073 9.16667 8 9.16667ZM8 3.3C6.79273 3.3 5.81818 4.28267 5.81818 5.5C5.81818 6.71733 6.79273 7.7 8 7.7C9.20727 7.7 10.1818 6.71733 10.1818 5.5C10.1818 4.28267 9.20727 3.3 8 3.3Z\", fill: \"#999999\" })));\r\n}\r\nexports.EyeIcon = EyeIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/EyeIcon.tsx?");

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

/***/ "./src/shared/Icons/GraphIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/GraphIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GraphIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction GraphIcon() {\r\n    return (React.createElement(\"svg\", { width: \"13\", height: \"8\", viewBox: \"0 0 13 8\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M9.1 0L10.5885 1.52667L7.4165 4.78L4.8165 2.11333L0 7.06L0.9165 8L4.8165 4L7.4165 6.66667L11.5115 2.47333L13 4V0H9.1Z\", fill: \"#999999\" })));\r\n}\r\nexports.GraphIcon = GraphIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/GraphIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/HyperlinkIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/Icons/HyperlinkIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.HyperlinkIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction HyperlinkIcon() {\r\n    return (React.createElement(\"svg\", { width: \"20\", height: \"10\", viewBox: \"0 0 20 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z\", fill: \"#999999\" })));\r\n}\r\nexports.HyperlinkIcon = HyperlinkIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/HyperlinkIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ManIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/ManIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ManIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ManIcon() {\r\n    return (React.createElement(\"svg\", { width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z\", fill: \"#999999\" })));\r\n}\r\nexports.ManIcon = ManIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ManIcon.tsx?");

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

/***/ "./src/shared/Icons/MicrophoneIcon.tsx":
/*!*********************************************!*\
  !*** ./src/shared/Icons/MicrophoneIcon.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MicrophoneIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction MicrophoneIcon() {\r\n    return (React.createElement(\"svg\", { width: \"20\", height: \"18\", viewBox: \"0 0 20 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z\", fill: \"#999999\" })));\r\n}\r\nexports.MicrophoneIcon = MicrophoneIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MicrophoneIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MountainsIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/Icons/MountainsIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MountainsIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction MountainsIcon() {\r\n    return (React.createElement(\"svg\", { width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z\", fill: \"#999999\" })));\r\n}\r\nexports.MountainsIcon = MountainsIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MountainsIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/PaperIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/PaperIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PaperIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction PaperIcon() {\r\n    return (React.createElement(\"svg\", { width: \"16\", height: \"20\", viewBox: \"0 0 16 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z\", fill: \"#999999\" })));\r\n}\r\nexports.PaperIcon = PaperIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/PaperIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/PdfIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/PdfIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PdfIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction PdfIcon() {\r\n    return (React.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z\", fill: \"#999999\" })));\r\n}\r\nexports.PdfIcon = PdfIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/PdfIcon.tsx?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/Icons/BlockIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/Icons/WarningIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./AnonymousIcon */ \"./src/shared/Icons/AnonymousIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./EnvelopeIcon */ \"./src/shared/Icons/EnvelopeIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/Icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/Icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SearchIcon */ \"./src/shared/Icons/SearchIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./RocketIcon */ \"./src/shared/Icons/RocketIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./EyeIcon */ \"./src/shared/Icons/EyeIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./StatisticIcon */ \"./src/shared/Icons/StatisticIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./GarbageIcon */ \"./src/shared/Icons/GarbageIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentIcon */ \"./src/shared/Icons/CommentIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CrossIcon */ \"./src/shared/Icons/CrossIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./RemoveCrossIcon */ \"./src/shared/Icons/RemoveCrossIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./PencilIcon */ \"./src/shared/Icons/PencilIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ArrowIcon */ \"./src/shared/Icons/ArrowIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ArrowFilledIcon */ \"./src/shared/Icons/ArrowFilledIcon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/index.ts?");

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

/***/ "./src/shared/Reddit/index.js":
/*!************************************!*\
  !*** ./src/shared/Reddit/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getAccessTokenRequest = exports.getRedditAuthUrl = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar REDIRECT_URI = 'http://localhost:3000/auth';\r\nvar DURATION = 'permanent'; //or 'temporary' for logging out every 1h.\r\nvar SCOPE = 'read submit identity';\r\nvar TYPE = 'code';\r\nvar SECRET = 'tmfKWhwSI8JQfEcXqJgu3PNXLXo11w';\r\nfunction getRedditAuthUrl() {\r\n    return \"https://www.reddit.com/api/v1/authorize?client_id=\" + 'vjlerDRAsrT9zA' + \"&response_type=\" + TYPE + \"&state=random_string&redirect_uri=\" + REDIRECT_URI + \"&duration=\" + DURATION + \"&scope=\" + SCOPE;\r\n}\r\nexports.getRedditAuthUrl = getRedditAuthUrl;\r\nfunction getAccessTokenRequest(req) {\r\n    return axios_1.default.post(//запрос на API reddit c определенными параметрами для получения access_token.\r\n    'https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n        auth: { username: 'vjlerDRAsrT9zA', password: 'RD2BDYxwYPnDsixEt7GmfPQbXutB5Q' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' } //указ тип дабы не было ошибок\r\n    });\r\n}\r\nexports.getAccessTokenRequest = getAccessTokenRequest;\r\n\n\n//# sourceURL=webpack:///./src/shared/Reddit/index.js?");

/***/ }),

/***/ "./src/shared/context/postsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/postsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = exports.postsContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../myHooks/usePostsData */ \"./src/myHooks/usePostsData.ts\");\r\nexports.postsContext = react_1.default.createContext({});\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = usePostsData_1.usePostsData()[0]; //предоставление контекста. Там есть данные о постах\r\n    //пометка. Контекст это глоб переменная. И он обновляется только когда передается нов обьект в кач value.\r\n    return (react_1.default.createElement(exports.postsContext.Provider, { value: data }, children));\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/postsContext.tsx?");

/***/ }),

/***/ "./src/shared/context/tokenContext.ts":
/*!********************************************!*\
  !*** ./src/shared/context/tokenContext.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.tokenContext = react_1.default.createContext(''); //пустой, но потом через запишем туда токен\r\n\n\n//# sourceURL=webpack:///./src/shared/context/tokenContext.ts?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../myHooks/useUserData */ \"./src/myHooks/useUserData.ts\");\r\nexports.userContext = react_1.default.createContext({}); //здесь будут лежать данные кот предоставляет useUserData\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = useUserData_1.useUserData()[0]; //предоставление контекста. Там есть токен и data (name,iconImg)\r\n    //пометка. Контекст это глоб переменная. И он обновляется только когда передается нов обьект в кач value.\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "./src/shared/supportingComponents/Break/Break.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/supportingComponents/Break/Break.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/supportingComponents/Break/break.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\")); //из библиотеки. (npm i classnames @types/classnames).\r\nfunction Break(props) {\r\n    var _a, _b, _c, _d, _e;\r\n    var size = props.size, desktopSize = props.desktopSize, mobileSize = props.mobileSize, tabletSize = props.tabletSize, _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g;\r\n    var classes = classnames_1.default(//ф из библиотеки кот мерджит названия стилей в одну строку. Арг через запятую.\r\n    break_css_1.default[\"s\" + size], (_a = {}, _a[break_css_1.default[\"m\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"d\" + desktopSize]] = desktopSize, _b), (_c = {}, _c[break_css_1.default[\"t\" + tabletSize]] = tabletSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e));\r\n    return (react_1.default.createElement(\"div\", { className: classes }) //При большом приложении будет слишком много лишних дивов что не оч хор.\r\n    );\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/supportingComponents/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/supportingComponents/Break/break.css":
/*!*********************************************************!*\
  !*** ./src/shared/supportingComponents/Break/break.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--3z9et\",\n\t\"s8\": \"break__s8--3hLFr\",\n\t\"s12\": \"break__s12--_ZzCo\",\n\t\"s14\": \"break__s14--3wLzU\",\n\t\"s16\": \"break__s16--3pI1J\",\n\t\"s20\": \"break__s20--dmive\",\n\t\"s30\": \"break__s30--2owLD\",\n\t\"s50\": \"break__s50--XRqTB\",\n\t\"inline\": \"break__inline--5Apfx\",\n\t\"top\": \"break__top--3LXv8\",\n\t\"desktop_s50\": \"break__desktop_s50--3wESN\",\n\t\"m4\": \"break__m4--lQNkr\",\n\t\"m8\": \"break__m8--jUGZt\",\n\t\"m12\": \"break__m12--2Vwt4\",\n\t\"m14\": \"break__m14--1dtbW\",\n\t\"m16\": \"break__m16--1kNU6\",\n\t\"m20\": \"break__m20--1IgDt\",\n\t\"m30\": \"break__m30--1aP-X\",\n\t\"m50\": \"break__m50--1LklS\",\n\t\"t4\": \"break__t4--iXDTK\",\n\t\"t8\": \"break__t8--2BZme\",\n\t\"t12\": \"break__t12--3QkRu\",\n\t\"t14\": \"break__t14--1xKmU\",\n\t\"t16\": \"break__t16--1APlC\",\n\t\"t20\": \"break__t20--2FcGT\",\n\t\"t30\": \"break__t30--20-gV\",\n\t\"t50\": \"break__t50--2eDmE\",\n\t\"d4\": \"break__d4--ZuO0j\",\n\t\"d8\": \"break__d8--2gVdg\",\n\t\"d12\": \"break__d12--1r1zz\",\n\t\"d14\": \"break__d14--3K-hq\",\n\t\"d16\": \"break__d16--5Sdgw\",\n\t\"d20\": \"break__d20--yVzyK\",\n\t\"d30\": \"break__d30--snhBx\",\n\t\"d50\": \"break__d50--3FBbS\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/supportingComponents/Break/break.css?");

/***/ }),

/***/ "./src/shared/supportingComponents/Break/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/supportingComponents/Break/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/supportingComponents/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/supportingComponents/Break/index.ts?");

/***/ }),

/***/ "./src/shared/supportingComponents/Icon/Icon.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/supportingComponents/Icon/Icon.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/supportingComponents/Icon/icon.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar ArrowARightIcon_1 = __webpack_require__(/*! ../../Icons/ArrowARightIcon */ \"./src/shared/Icons/ArrowARightIcon.tsx\");\r\nvar ArrowCircleIcon_1 = __webpack_require__(/*! ../../Icons/ArrowCircleIcon */ \"./src/shared/Icons/ArrowCircleIcon.tsx\");\r\nvar ArrowDownIcon_1 = __webpack_require__(/*! ../../Icons/ArrowDownIcon */ \"./src/shared/Icons/ArrowDownIcon.tsx\");\r\nvar ArrowsLeftRightIcon_1 = __webpack_require__(/*! ../../Icons/ArrowsLeftRightIcon */ \"./src/shared/Icons/ArrowsLeftRightIcon.tsx\");\r\nvar ChatIcon_1 = __webpack_require__(/*! ../../Icons/ChatIcon */ \"./src/shared/Icons/ChatIcon.tsx\");\r\nvar GraphIcon_1 = __webpack_require__(/*! ../../Icons/GraphIcon */ \"./src/shared/Icons/GraphIcon.tsx\");\r\nvar HyperlinkIcon_1 = __webpack_require__(/*! ../../Icons/HyperlinkIcon */ \"./src/shared/Icons/HyperlinkIcon.tsx\");\r\nvar ManIcon_1 = __webpack_require__(/*! ../../Icons/ManIcon */ \"./src/shared/Icons/ManIcon.tsx\");\r\nvar MicrophoneIcon_1 = __webpack_require__(/*! ../../Icons/MicrophoneIcon */ \"./src/shared/Icons/MicrophoneIcon.tsx\");\r\nvar MountainsIcon_1 = __webpack_require__(/*! ../../Icons/MountainsIcon */ \"./src/shared/Icons/MountainsIcon.tsx\");\r\nvar PaperIcon_1 = __webpack_require__(/*! ../../Icons/PaperIcon */ \"./src/shared/Icons/PaperIcon.tsx\");\r\nvar PdfIcon_1 = __webpack_require__(/*! ../../Icons/PdfIcon */ \"./src/shared/Icons/PdfIcon.tsx\");\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Icon(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.size, size = _d === void 0 ? 16 : _d, name = props.name, desktopSize = props.desktopSize, mobileSize = props.mobileSize, tabletSize = props.tabletSize;\r\n    var classes = classnames_1.default(icon_css_1.default['iconContainer'], icon_css_1.default[\"s\" + size], (_a = {}, _a[icon_css_1.default[\"m\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[icon_css_1.default[\"d\" + desktopSize]] = desktopSize, _b), (_c = {}, _c[icon_css_1.default[\"t\" + tabletSize]] = tabletSize, _c));\r\n    return (react_1.default.createElement(\"div\", { className: classes },\r\n        name === 'menu' && react_1.default.createElement(Icons_1.MenuIcon, null),\r\n        name === 'block' && react_1.default.createElement(Icons_1.BlockIcon, null),\r\n        name === 'comment' && react_1.default.createElement(Icons_1.CommentIcon, null),\r\n        name === 'save' && react_1.default.createElement(Icons_1.SaveIcon, null),\r\n        name === 'share' && react_1.default.createElement(Icons_1.ShareIcon, null),\r\n        name === 'warning' && react_1.default.createElement(Icons_1.WarningIcon, null),\r\n        name === 'eye' && react_1.default.createElement(Icons_1.EyeIcon, null),\r\n        name === 'envelope' && react_1.default.createElement(Icons_1.EnvelopeIcon, null),\r\n        name === 'anonymous' && react_1.default.createElement(Icons_1.AnonymousIcon, null),\r\n        name === 'a' && react_1.default.createElement(ArrowARightIcon_1.ArrowARightIcon, null),\r\n        name === 'arrowCircle' && react_1.default.createElement(ArrowCircleIcon_1.ArrowCircleIcon, null),\r\n        name === 'arrowDown' && react_1.default.createElement(ArrowDownIcon_1.ArrowDownIcon, null),\r\n        name === 'arrowFilled' && react_1.default.createElement(Icons_1.ArrowFilledIcon, null),\r\n        name === 'arrow' && react_1.default.createElement(Icons_1.ArrowIcon, null),\r\n        name === 'arrowsLeftRight' && react_1.default.createElement(ArrowsLeftRightIcon_1.ArrowsLeftRightIcon, null),\r\n        name === 'chat' && react_1.default.createElement(ChatIcon_1.ChatIcon, null),\r\n        name === 'garbage' && react_1.default.createElement(Icons_1.GarbageIcon, null),\r\n        name === 'graph' && react_1.default.createElement(GraphIcon_1.GraphIcon, null),\r\n        name === 'hyperlink' && react_1.default.createElement(HyperlinkIcon_1.HyperlinkIcon, null),\r\n        name === 'man' && react_1.default.createElement(ManIcon_1.ManIcon, null),\r\n        name === 'microphone' && react_1.default.createElement(MicrophoneIcon_1.MicrophoneIcon, null),\r\n        name === 'mountain' && react_1.default.createElement(MountainsIcon_1.MountainsIcon, null),\r\n        name === 'paper' && react_1.default.createElement(PaperIcon_1.PaperIcon, null),\r\n        name === 'pdf' && react_1.default.createElement(PdfIcon_1.PdfIcon, null),\r\n        name === 'pencil' && react_1.default.createElement(Icons_1.PencilIcon, null),\r\n        name === 'remove' && react_1.default.createElement(Icons_1.RemoveCrossIcon, null),\r\n        name === 'rocket' && react_1.default.createElement(Icons_1.RocketIcon, null),\r\n        name === 'search' && react_1.default.createElement(Icons_1.SearchIcon, null),\r\n        name === 'statistic' && react_1.default.createElement(Icons_1.StatisticIcon, null)));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/supportingComponents/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/supportingComponents/Icon/icon.css":
/*!*******************************************************!*\
  !*** ./src/shared/supportingComponents/Icon/icon.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"iconContainer\": \"icon__iconContainer--rb6ki\",\n\t\"s20\": \"icon__s20--29EY8\",\n\t\"s18\": \"icon__s18--3Zrrm\",\n\t\"s16\": \"icon__s16--VvlPn\",\n\t\"s14\": \"icon__s14--8xvDc\",\n\t\"s12\": \"icon__s12--3gncI\",\n\t\"s10\": \"icon__s10--3Lci7\",\n\t\"m20\": \"icon__m20--3zcSx\",\n\t\"m18\": \"icon__m18--3dfx0\",\n\t\"m16\": \"icon__m16--3AZpQ\",\n\t\"m14\": \"icon__m14--2cIQm\",\n\t\"m12\": \"icon__m12--2Mp5z\",\n\t\"m10\": \"icon__m10--3sGYz\",\n\t\"t20\": \"icon__t20--2SvVk\",\n\t\"t18\": \"icon__t18--3CDgo\",\n\t\"t16\": \"icon__t16--2Z2Lk\",\n\t\"t14\": \"icon__t14--bAmX6\",\n\t\"t12\": \"icon__t12--3LAHm\",\n\t\"t10\": \"icon__t10--3Y1Tl\",\n\t\"d20\": \"icon__d20--2MRPM\",\n\t\"d18\": \"icon__d18--2Gpw0\",\n\t\"d16\": \"icon__d16--2-GXA\",\n\t\"d14\": \"icon__d14--3HohR\",\n\t\"d12\": \"icon__d12--26qey\",\n\t\"d10\": \"icon__d10--14Kuv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/supportingComponents/Icon/icon.css?");

/***/ }),

/***/ "./src/shared/supportingComponents/Icon/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/supportingComponents/Icon/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/supportingComponents/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/supportingComponents/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/supportingComponents/Text/Text.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/supportingComponents/Text/Text.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// шаблон для текста, размер и цвет кот меняется через входящие пропсы\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/supportingComponents/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\")); //из библиотеки. (npm i classnames @types/classnames).\r\nvar EColors_1 = __webpack_require__(/*! ../../../utils/enums/EColors */ \"./src/utils/enums/EColors.tsx\");\r\nfunction Text(props) {\r\n    var _a, _b, _c, _d, _e, _f;\r\n    var _g = props.As, As = _g === void 0 ? 'span' : _g, children = props.children, size = props.size, desktopSize = props.desktopSize, mobileSize = props.mobileSize, tabletSize = props.tabletSize, _h = props.color, color = _h === void 0 ? EColors_1.EColors.black : _h, _j = props.bold, bold = _j === void 0 ? false : _j, _k = props.isActive, isActive = _k === void 0 ? false : _k, _l = props.myDevBorder, myDevBorder = _l === void 0 ? false : _l, _m = props.href, href = _m === void 0 ? '#someUrl' : _m, _o = props.reset, reset = _o === void 0 ? false : _o;\r\n    var classes = classnames_1.default(//ф из библиотеки кот мерджит названия стилей в одну строку.\r\n    text_css_1.default[\"s\" + size], (_a = {}, _a[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"d\" + desktopSize]] = desktopSize, _b), (_c = {}, _c[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _c), text_css_1.default[color], (_d = {}, _d[text_css_1.default.bold] = bold, _d), (_e = {}, _e[text_css_1.default.myDevBorder] = myDevBorder, _e), (_f = {}, _f[text_css_1.default.reset] = reset, _f));\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/supportingComponents/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/supportingComponents/Text/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/supportingComponents/Text/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/supportingComponents/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/supportingComponents/Text/index.ts?");

/***/ }),

/***/ "./src/shared/supportingComponents/Text/text.css":
/*!*******************************************************!*\
  !*** ./src/shared/supportingComponents/Text/text.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"bold\": \"text__bold--SkXQ2\",\n\t\"border\": \"text__border--1o_lx\",\n\t\"reset\": \"text__reset--WmBrS\",\n\t\"black\": \"text__black--iwnRw\",\n\t\"orange\": \"text__orange--1hkou\",\n\t\"green\": \"text__green--2eeYx\",\n\t\"white\": \"text__white---kSLU\",\n\t\"grayF4\": \"text__grayF4--2fziM\",\n\t\"grayF3\": \"text__grayF3--Qccdq\",\n\t\"grayD9\": \"text__grayD9--2JvG4\",\n\t\"grayC4\": \"text__grayC4--2-4RN\",\n\t\"gray99\": \"text__gray99--28d1E\",\n\t\"gray66\": \"text__gray66--18ILI\",\n\t\"s28\": \"text__s28--3BD4A\",\n\t\"s20\": \"text__s20--1Lpbz\",\n\t\"s16\": \"text__s16--1gxKI\",\n\t\"s14\": \"text__s14--3dOqS\",\n\t\"s12\": \"text__s12--gcVfo\",\n\t\"s10\": \"text__s10--76GMG\",\n\t\"m28\": \"text__m28--tEzVa\",\n\t\"m20\": \"text__m20--1hEOA\",\n\t\"m16\": \"text__m16--vXHVa\",\n\t\"m14\": \"text__m14--3nUlL\",\n\t\"m12\": \"text__m12--13jYh\",\n\t\"m10\": \"text__m10--l3rbg\",\n\t\"t28\": \"text__t28--2wf-P\",\n\t\"t20\": \"text__t20--3GGFF\",\n\t\"t16\": \"text__t16--3n8pW\",\n\t\"t14\": \"text__t14--22X5t\",\n\t\"t12\": \"text__t12--14lG4\",\n\t\"t10\": \"text__t10--25rtI\",\n\t\"d28\": \"text__d28--2pRy9\",\n\t\"d20\": \"text__d20--3HMFh\",\n\t\"d16\": \"text__d16--1BxnF\",\n\t\"d14\": \"text__d14--YJeI4\",\n\t\"d12\": \"text__d12--1dyvv\",\n\t\"d10\": \"text__d10--ry2jL\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/supportingComponents/Text/text.css?");

/***/ }),

/***/ "./src/utils/GenericList.tsx":
/*!***********************************!*\
  !*** ./src/utils/GenericList.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar noop = function () { };\r\nfunction GenericList(_a) {\r\n    var list = _a.list;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\r\n        var _b = _a.As, As = _b === void 0 ? 'li' : _b, children = _a.children, _c = _a.onClick, onClick = _c === void 0 ? noop : _c, className = _a.className, id = _a.id, href = _a.href;\r\n        return (react_1.default.createElement(As //As заменяется на переданный сверху тэг. По умолчанию задан Li.\r\n        , { className: className, onClick: function () { return onClick(id); }, key: id, href: href }, children));\r\n    })));\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/utils/GenericList.tsx?");

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

/***/ "./src/utils/enums/EIcons.tsx":
/*!************************************!*\
  !*** ./src/utils/enums/EIcons.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EIcons = void 0;\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"block\"] = \"block\";\r\n    EIcons[\"comment\"] = \"comment\";\r\n    EIcons[\"share\"] = \"share\";\r\n    EIcons[\"save\"] = \"save\";\r\n    EIcons[\"warning\"] = \"warning\";\r\n    EIcons[\"menu\"] = \"menu\";\r\n    EIcons[\"eye\"] = \"eye\";\r\n    EIcons[\"anonymous\"] = \"anonymous\";\r\n    EIcons[\"a\"] = \"a\";\r\n    EIcons[\"arrowCircle\"] = \"arrowCircle\";\r\n    EIcons[\"arrowDown\"] = \"arrowDown\";\r\n    EIcons[\"arrowFilled\"] = \"arrowFilled\";\r\n    EIcons[\"arrow\"] = \"arrow\";\r\n    EIcons[\"arrowsLeftRight\"] = \"arrowsLeftRight\";\r\n    EIcons[\"chat\"] = \"chat\";\r\n    EIcons[\"garbage\"] = \"garbage\";\r\n    EIcons[\"graph\"] = \"graph\";\r\n    EIcons[\"hyperlink\"] = \"hyperlink\";\r\n    EIcons[\"man\"] = \"man\";\r\n    EIcons[\"microphone\"] = \"microphone\";\r\n    EIcons[\"mountain\"] = \"mountain\";\r\n    EIcons[\"paper\"] = \"paper\";\r\n    EIcons[\"pdf\"] = \"pdf\";\r\n    EIcons[\"pencil\"] = \"pencil\";\r\n    EIcons[\"remove\"] = \"remove\";\r\n    EIcons[\"rocket\"] = \"rocket\";\r\n    EIcons[\"search\"] = \"search\";\r\n    EIcons[\"statistic\"] = \"statistic\";\r\n    EIcons[\"envelope\"] = \"envelope\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\n\n\n//# sourceURL=webpack:///./src/utils/enums/EIcons.tsx?");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

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