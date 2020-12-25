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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EIcons = void 0;
var EIcons;
(function (EIcons) {
    EIcons["block"] = "block";
    EIcons["comment"] = "comment";
    EIcons["cross"] = "cross";
    EIcons["share"] = "share";
    EIcons["save"] = "save";
    EIcons["warning"] = "warning";
    EIcons["menu"] = "menu";
    EIcons["eye"] = "eye";
    EIcons["anonymous"] = "anonymous";
    EIcons["a"] = "a";
    EIcons["arrowCircle"] = "arrowCircle";
    EIcons["arrowDown"] = "arrowDown";
    EIcons["arrowFilled"] = "arrowFilled";
    EIcons["arrow"] = "arrow";
    EIcons["arrowsLeftRight"] = "arrowsLeftRight";
    EIcons["chat"] = "chat";
    EIcons["garbage"] = "garbage";
    EIcons["graph"] = "graph";
    EIcons["hyperlink"] = "hyperlink";
    EIcons["man"] = "man";
    EIcons["microphone"] = "microphone";
    EIcons["mountain"] = "mountain";
    EIcons["paper"] = "paper";
    EIcons["pdf"] = "pdf";
    EIcons["pencil"] = "pencil";
    EIcons["remove"] = "remove";
    EIcons["rocket"] = "rocket";
    EIcons["search"] = "search";
    EIcons["statistic"] = "statistic";
    EIcons["envelope"] = "envelope";
})(EIcons = exports.EIcons || (exports.EIcons = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(50), exports);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(102), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostFewKeys = exports.postListRequestThunk = exports.setSourceAC = exports.postCardToggleVisibleAC = exports.postSeenAC = exports.postToggleSaveAC = exports.postListRequestErrorAC = exports.postListRequestSuccessAC = exports.postListRequestAC = exports.SET_SOURCE = exports.POSTCARD_TOGGLE_VISIBLE = exports.POST_SEEN = exports.POST_TOGGLE_SAVE = exports.POSTLIST_REQUEST_ERROR = exports.POSTLIST_REQUEST_SUCCESS = exports.POSTLIST_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(14));
exports.POSTLIST_REQUEST = 'POSTLIST_REQUEST';
exports.POSTLIST_REQUEST_SUCCESS = 'POSTLIST_REQUEST_SUCCESS';
exports.POSTLIST_REQUEST_ERROR = 'POSTLIST_REQUEST_ERROR';
exports.POST_TOGGLE_SAVE = 'POST_TOGGLE_SAVE';
exports.POST_SEEN = 'POST_SEEN';
exports.POSTCARD_TOGGLE_VISIBLE = 'POSTCARD_TOGGLE_VISIBLE';
exports.SET_SOURCE = 'SET_SOURCE';
exports.postListRequestAC = function () { return ({
    type: exports.POSTLIST_REQUEST,
}); };
exports.postListRequestSuccessAC = function (listArr, after) { return ({
    type: exports.POSTLIST_REQUEST_SUCCESS,
    listArr: listArr,
    after: after,
}); };
exports.postListRequestErrorAC = function (error) { return ({
    type: exports.POSTLIST_REQUEST_ERROR,
    error: error,
}); };
exports.postToggleSaveAC = function (id) { return ({
    type: exports.POST_TOGGLE_SAVE,
    id: id,
}); };
exports.postSeenAC = function (id) { return ({
    type: exports.POST_SEEN,
    id: id,
}); };
exports.postCardToggleVisibleAC = function (id) { return ({
    type: exports.POSTCARD_TOGGLE_VISIBLE,
    id: id,
}); };
exports.setSourceAC = function (source) { return ({
    type: exports.SET_SOURCE,
    source: source,
}); };
// Thunk: запроc данных в Reddit о списке постов -> успех или ошибка
exports.postListRequestThunk = function () { return function (dispatch, getState) {
    var source = getState().posts.source;
    dispatch(exports.postListRequestAC()); //пока что тупо переключает лоадинг на true
    console.log('requesting source:', source);
    axios_1.default.get("https://www.reddit.com/" + source + ".json?sr_detail=true", {
        headers: {
        // 'Content-type':'application/x-www-form-urlencoded',
        // 'Access-Control-Allow-Origin': '*',
        // 'Authorization': 'bearer 712161124719-slL4NEk0qqTq_ua8DPlu1eAEeBNCIQ',
        },
        params: {
            limit: 20,
            after: getState().posts.after,
        }
    })
        .then(function (resp) {
        var responseFilteredListArr = resp.data.data.children.map(function (item) { return getPostFewKeys(item.data); }); //выковыриваем нужные данные
        dispatch(exports.postListRequestSuccessAC(responseFilteredListArr, resp.data.data.after)); //2 данные, сам лист и метка
        console.log('resp postList:', resp.data.data.children);
    })
        .catch(function (error) {
        console.log("error from request:", error);
        dispatch(exports.postListRequestErrorAC(String(error)));
    });
}; };
function getPostFewKeys(obj) {
    return {
        'author': obj.author,
        'id': obj.id,
        'created': new Date(obj.sr_detail.created_utc * 1000).toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' }),
        'avatar': obj.sr_detail.icon_img || "https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg",
        'title': obj.title,
        'karma': 25,
        'commentsAmount': 25,
        'isSaved': false,
        'isMyPost': false,
        'isCommented': false,
        'isSeen': false,
        'isVisible': true,
        'preview2': obj.url_overridden_by_dest,
        'url': obj.url,
        'score': obj.score,
        'thumbnail': obj.thumbnail,
        'subreddit': obj.subreddit,
        'permalink': obj.permalink,
    };
}
exports.getPostFewKeys = getPostFewKeys;
// Our proxy that makes cross origin fetching possible
// const proxy = "https://cors-anywhere.herokuapp.com/";
// fetch(`${proxy}https://www.reddit.com/r/javascript/${postType}.json`)
//   .then(function(res) {
//     // Return the response in JSON format
//     return res.json();
//   })
//   .then(function(res) {
//     // We render our posts to the UI in this block
//     const postsArr = res.data.children;
//     }


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EColors = void 0;
var EColors;
(function (EColors) {
    EColors["black"] = "black";
    EColors["orange"] = "orange";
    EColors["green"] = "green";
    EColors["white"] = "white";
    EColors["grayF4"] = "grayF4";
    EColors["grayF3"] = "grayF3";
    EColors["grayD9"] = "grayD9";
    EColors["grayC4"] = "grayC4";
    EColors["gray99"] = "gray99";
    EColors["gray66"] = "gray66";
})(EColors = exports.EColors || (exports.EColors = {}));


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(89), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(108), exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.submitAnswerThunk = exports.closeAnswerAC = exports.openAnswerAC = exports.CLOSE_ANSWER = exports.OPEN_ANSWER = exports.openPostAC = exports.OPEN_POST = exports.submitCommentThunk = exports.submitCommentAC = exports.SUBMIT_COMMENT = exports.updateCommentAC = exports.UPDATE_COMMENT = exports.updateSearchAC = exports.UPDATE_SEARCH = exports.toggleRoomAC = exports.TOGGLE_ROOM = exports.setTokenAC = exports.SET_TOKEN = void 0;
//----------token---------------------
exports.SET_TOKEN = 'SET_TOKEN';
exports.setTokenAC = function (token) { return ({
    type: exports.SET_TOKEN,
    token: token,
}); };
//----------discussion or private room---------------------
exports.TOGGLE_ROOM = 'TOGGLE_ROOM';
exports.toggleRoomAC = function () { return ({
    type: exports.TOGGLE_ROOM,
}); };
//----------discussion or private room---------------------
exports.UPDATE_SEARCH = 'UPDATE_SEARCH';
exports.updateSearchAC = function (value) { return ({
    type: exports.UPDATE_SEARCH,
    value: value,
}); };
//----------commentForm---------------------
exports.UPDATE_COMMENT = 'UPDATE_COMMENT';
exports.updateCommentAC = function (comment) { return ({
    type: exports.UPDATE_COMMENT,
    comment: comment,
}); };
exports.SUBMIT_COMMENT = 'SUBMIT_COMMENT';
exports.submitCommentAC = function (comment) { return ({
    type: exports.SUBMIT_COMMENT,
    comment: comment,
}); };
exports.submitCommentThunk = function () { return function (dispatch, getState) {
    var value = getState().commentForm;
    var name = getState().profile.data.name;
    dispatch(exports.submitCommentAC());
    alert("submitted value: " + value + ". From: " + name);
    // axios...
}; };
//----------postModal---------------------
exports.OPEN_POST = 'OPEN_POST';
exports.openPostAC = function (postId) { return ({
    type: exports.OPEN_POST,
    postId: postId,
}); };
//----------AnswerModal---------------------
exports.OPEN_ANSWER = 'OPEN_ANSWER';
exports.CLOSE_ANSWER = 'CLOSE_ANSWER';
exports.openAnswerAC = function (commentId) { return ({
    type: exports.OPEN_ANSWER,
    commentId: commentId,
}); };
exports.closeAnswerAC = function () { return ({
    type: exports.CLOSE_ANSWER,
}); };
exports.submitAnswerThunk = function (commentId, text) { return function (dispatch, getState) {
    dispatch(exports.closeAnswerAC()); //пока что тупо переключает на false
    alert("axios, submitting \"" + text + "\" id: \"" + commentId + "\"");
}; };


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(52), exports);
__exportStar(__webpack_require__(53), exports);
__exportStar(__webpack_require__(54), exports);
__exportStar(__webpack_require__(55), exports);
__exportStar(__webpack_require__(56), exports);
__exportStar(__webpack_require__(57), exports);
__exportStar(__webpack_require__(58), exports);
__exportStar(__webpack_require__(59), exports);
__exportStar(__webpack_require__(60), exports);
__exportStar(__webpack_require__(61), exports);
__exportStar(__webpack_require__(62), exports);
__exportStar(__webpack_require__(63), exports);
__exportStar(__webpack_require__(64), exports);
__exportStar(__webpack_require__(65), exports);
__exportStar(__webpack_require__(66), exports);
__exportStar(__webpack_require__(67), exports);
__exportStar(__webpack_require__(68), exports);
__exportStar(__webpack_require__(70), exports);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentFewKeys = exports.openPostThunk = exports.commentsRequestErrorAC = exports.commentsRequestSuccessAC = exports.commentsRequestAC = exports.COMMENTS_REQUEST_ERROR = exports.COMMENTS_REQUEST_SUCCESS = exports.COMMENTS_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(14));
var actions_1 = __webpack_require__(11);
exports.COMMENTS_REQUEST = 'COMMENTS_REQUEST';
exports.COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
exports.COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';
exports.commentsRequestAC = function () { return ({
    type: exports.COMMENTS_REQUEST,
}); };
exports.commentsRequestSuccessAC = function (filteredDataArr) { return ({
    type: exports.COMMENTS_REQUEST_SUCCESS,
    filteredDataArr: filteredDataArr,
}); };
exports.commentsRequestErrorAC = function (error) { return ({
    type: exports.COMMENTS_REQUEST_ERROR,
    error: error,
}); };
// Thunk: запроc данных в Reddit о списке постов -> успех или ошибка
exports.openPostThunk = function (subreddit, postId) { return function (dispatch, getState) {
    dispatch(actions_1.openPostAC(postId)); //загрузить в стор postModal со всеми данными о посте
    dispatch(exports.commentsRequestAC()); //лоадинг тру
    axios_1.default.get("https://www.reddit.com/r/" + subreddit + "/comments/" + postId + ".json?sr_detail=true", {
        params: {
            limit: 10,
            depth: 5,
        }
    })
        .then(function (resp) {
        var filteredDataArr = resp.data[1].data.children.map(function (item) { return getCommentFewKeys(item.data); }); //выковыриваем нужные данные;
        dispatch(exports.commentsRequestSuccessAC(filteredDataArr));
        // console.log('resp filteredComments:',filteredDataArr);
    })
        .catch(function (error) {
        // console.log("error from comments request --->:",error);
        dispatch(exports.commentsRequestErrorAC(String(error)));
    });
}; };
function getCommentFewKeys(data) {
    return {
        'author': data.author,
        'id': data.id,
        'created': new Date(data.created * 1000).toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' }),
        'avatar': data.icon_img || "https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg",
        'score': data.score,
        'body': data.body,
        'author_flair_text': data.author_flair_text,
        'subreddit': data.subreddit,
        'replies': data.replies,
    };
}
exports.getCommentFewKeys = getCommentFewKeys;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRequestThunk = exports.profileRequestErrorAC = exports.profileRequestSuccessAC = exports.profileRequestAC = exports.PROFILE_REQUEST_ERROR = exports.PROFILE_REQUEST_SUCCESS = exports.PROFILE_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(14));
exports.PROFILE_REQUEST = 'PROFILE_REQUEST';
exports.PROFILE_REQUEST_SUCCESS = 'PROFILE_REQUEST_SUCCESS';
exports.PROFILE_REQUEST_ERROR = 'PROFILE_REQUEST_ERROR';
exports.profileRequestAC = function () { return ({
    type: exports.PROFILE_REQUEST,
}); };
exports.profileRequestSuccessAC = function (data) { return ({
    type: exports.PROFILE_REQUEST_SUCCESS,
    data: data,
}); };
exports.profileRequestErrorAC = function (error) { return ({
    type: exports.PROFILE_REQUEST_ERROR,
    error: error,
}); };
// Thunk: запроc данных в Reddit о юзере -> успех или ошибка
exports.profileRequestThunk = function () { return function (dispatch, getState) {
    dispatch(exports.profileRequestAC());
    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: "bearer " + getState().token } //достать из стора либо прокинуть его сверху.
    })
        .then(function (resp) {
        dispatch(exports.profileRequestSuccessAC({
            name: resp.data.name,
            avaUrl: resp.data.icon_img.split("?")[0],
            profileUrl: "http://reddit.com" + resp.data.subreddit.url,
            id: resp.data.id,
            inbox_count: resp.data.inbox_count,
        }));
        console.log('resp profile:', resp.data);
    })
        .catch(function (error) {
        console.log(">>>>error from Profile request:", error);
        dispatch(exports.profileRequestErrorAC(String(error)));
    });
}; };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var noop = function () { };
function GenericList(_a) {
    var list = _a.list;
    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {
        var _b = _a.As, As = _b === void 0 ? 'li' : _b, children = _a.children, _c = _a.onClick, onClick = _c === void 0 ? noop : _c, className = _a.className, id = _a.id, href = _a.href;
        return (react_1.default.createElement(As //As заменяется на переданный сверху тэг. По умолчанию задан Li.
        , { className: className, onClick: function () { return onClick(id); }, key: id, href: href }, children));
    })));
}
exports.GenericList = GenericList;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(90));
var usePortalZone_1 = __webpack_require__(91);
function Portal(_a) {
    var children = _a.children;
    // const node = document.querySelector('#modal_root');
    var node = usePortalZone_1.usePortalZone()[0];
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement(react_1.default.Fragment, null, children)), node);
}
exports.Portal = Portal;
//было
// interface IPortal {
//   children?: JSX.Element;
//   // onClose:()=>void;
// }
//
// export function Portal({children}: IPortal) {//компонент кот может рендерить любые списки.
//
//   useEffect(()=>{//блокиратор скролла. Render - on, unRender - off.
//     disableBodyScroll({ savePosition: true })
//     console.log('scroll blocked')
//     return ()=>{
//       enableBodyScroll()
//       console.log('scroll unlocked')
//     }
//   },[])
//
//
//   //--------для клика снаружи----------
//   const history = useHistory();
//   const ref = useRef<HTMLDivElement>(null);
//   useOutsideClick(ref, ()=>{history.push('/')});
//   //-----------------------------------
//
//   //----------для рендера в портал----------
//   // const node = document.querySelector('#modal_root');
//   const [node] = usePortalZone();
//   if(!node) return null;
//   //----------------------------------------
//
//   return ReactDOM.createPortal((
//     <div style={{//задний фон щиток против кликов насквозь
//       position: 'fixed',
//       top: 0,
//       bottom: 0,
//       left: 0,
//       right: 0,
//       display: 'flex',
//       justifyContent: 'center',
//       zIndex: 100,
//       width:'100%',
//       backgroundColor: 'rgba(0,0,0,0.3)',
//     }}
//     >
//       <div ref={ref}>{/*обертка для модалки за кот следит useOutsideClick*/}
//         {children}
//       </div>
//     </div>
//   ), node);
// }


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useOutsideClick = void 0;
var react_1 = __webpack_require__(0);
function useOutsideClick(ref, onClose) {
    react_1.useEffect(function () {
        // console.log('in useOutsideClick. Hanging listener on document');
        document.addEventListener('click', handleClick); //вешаем клик на весь документ/окно/браузер
        return function () {
            document.removeEventListener('click', handleClick);
            // console.log('in useOutsideClick. Removing listener from document');
        };
    }, [ref, onClose]);
    function handleClick(event) {
        // console.log('clicked element:', event.target);
        // console.log('ref element    :', ref.current);
        var _a;
        if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) { // "?" - fix: Object is possibly 'null'.
            //  в этом условии мы точно знаем что клик был вне модалки
            console.log('clicked outside!!! Closing modal');
            onClose();
        }
    }
    // useEffect(() => {//попытка вставить из примера с инета. Он работает но типизация не удается.
    //     const listener = (event:MouseEvent) => {
    //       // Do nothing if clicking ref"s element or descendent elements
    //       if (!ref.current || ref.current.contains(event.target)) {
    //         return;
    //       }
    //       onClose();
    //     };
    //
    //     document.addEventListener("mousedown", listener);
    //
    //     return () => {
    //       document.removeEventListener("mousedown", listener);
    //     };
    //   },
    //   // Add ref and handler to effect dependencies
    //   // It"s worth noting that because passed in handler is a new ...
    //   // ... function on every render that will cause this effect ...
    //   // ... callback/cleanup to run every render. It"s not a big deal ...
    //   // ... but to optimize you can wrap handler in useCallback before ...
    //   // ... passing it into this hook.
    //   [ref, onClose]
    // );
}
exports.useOutsideClick = useOutsideClick;
// if (!ref.current || ref.current.contains(event.target)) {
//   return;
// }
// handler(event);
// };
//-----------------focus--------------------
// const onButtonClick = () => {
//   // strict null checks need us to check if inputEl and current exist.
//   // but once current exists, it is of type HTMLInputElement, thus it
//   // has the method focus! ✅
//   if(inputEl && inputEl.current) {
//     inputEl.current.focus();
//   }
// };


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(95), exports);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessTokenRequest = exports.getRedditAuthUrl = void 0;
var axios_1 = __importDefault(__webpack_require__(14));
var REDIRECT_URI = 'http://localhost:3000/auth';
var DURATION = 'permanent'; //or 'temporary' for logging out every 1h.
var SCOPE = 'read submit identity';
var TYPE = 'code';
// const SECRETold = 'tmfKWhwSI8JQfEcXqJgu3PNXLXo11w';//мой личный
var SECRET = 'RD2BDYxwYPnDsixEt7GmfPQbXutB5Q'; //2й аккаунт https://www.reddit.com/prefs/apps
//используется в компоненте с кликом для перехода на странуцу Reddit авторизации.
function getRedditAuthUrl() {
    return "https://www.reddit.com/api/v1/authorize?client_id=" + 'undefined' + "&response_type=" + TYPE + "&state=random_string&redirect_uri=" + REDIRECT_URI + "&duration=" + DURATION + "&scope=" + SCOPE;
}
exports.getRedditAuthUrl = getRedditAuthUrl;
//используется в server.js для запроса в Reddit на получение access_token.
function getAccessTokenRequest(req) {
    return axios_1.default.post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=" + req.query.code + "&redirect_uri=http://localhost:3000/auth", {
        auth: {
            username: 'undefined',
            password: SECRET
        },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' } //указ тип дабы не было ошибок
    });
}
exports.getAccessTokenRequest = getAccessTokenRequest;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//----------timeout TEST---------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeoutTestThunk = exports.timeoutTestSuccessAC = exports.setTimeoutTestAC = exports.TIMEOUT_TEST_SUCCESS = exports.SET_TIMEOUT_TEST = void 0;
exports.SET_TIMEOUT_TEST = 'SET_TIMEOUT_TEST';
exports.TIMEOUT_TEST_SUCCESS = 'TIMEOUT_TEST_SUCCESS';
exports.setTimeoutTestAC = function () { return ({
    type: exports.SET_TIMEOUT_TEST,
}); };
exports.timeoutTestSuccessAC = function () { return ({
    type: exports.TIMEOUT_TEST_SUCCESS,
}); };
exports.timeoutTestThunk = function () { return function (dispatch, getState) {
    dispatch(exports.setTimeoutTestAC());
    console.log('timeout started');
    setTimeout(function () {
        dispatch(exports.timeoutTestSuccessAC());
        console.log('timeout finished');
    }, 3000);
}; };


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(173), exports);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(191), exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(26));
var server_1 = __importDefault(__webpack_require__(27));
var indexHtmlTemplate_1 = __webpack_require__(28);
var App_1 = __webpack_require__(29);
var Reddit_1 = __webpack_require__(21);
var cors = __webpack_require__(198);
var app = express_1.default(); //инициализация. Теперь app это instance нашего приложения
app.use(cors());
// app.use(cors({
//   origin: true,
//   credentials: true
// }));
app.use('/static', express_1.default.static('./dist/client')); //спец роут кот будет раздавать статические файлы. По url'у '/static' будут доступны все файлы кот лежат в папке 'dist/client'.
app.get('/auth', function (req, res) {
    Reddit_1.getAccessTokenRequest(req)
        .then(function (_a) {
        var data = _a.data;
        // data { // то что приходит в ответе:
        //   access_token: '712161124719-R3TVWpHcJWJFGnXNX_o2Fb4A-E8eOg',
        //     token_type: 'bearer',
        //     expires_in: 3600,
        //     refresh_token: '712161124719-ic1EYQ2-3GJ6B0LTIROZyLvwf1-_Ig',
        //     scope: 'identity read submit'
        // }
        // Теперь сервер имеет токен. Остается его передать клиенту - проброс пропами в HTMLTemplate.       !!!
        // console.log('data[access_token]:',data['access_token']);
        res.send(indexHtmlTemplate_1.indexHtmlTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));
    })
        .catch(console.log);
});
app.get('*', function (req, res) {
    res.send(indexHtmlTemplate_1.indexHtmlTemplate(server_1.default.renderToString(App_1.App())));
});
app.listen(3000, function () {
    console.log('file server.js is speaking : "Server started on http://localhost:3000"');
});


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexHtmlTemplate = void 0;
exports.indexHtmlTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <title>Reddit App Andrey</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <script>\n      window.__token__ = '" + token + "';//\u0442\u043E\u043A\u0435\u043D \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0438\u0437 server.js \u043F\u043E\u0441\u043B\u0435 \u0430\u043A\u0441\u0438\u043E\u0441 \u043E\u0442\u0432\u0435\u0442\u0430\n    </script>\n</head>\n<body>\n    <div id=\"react_root\">" + content + "</div>\n    <div id=\"modal_root\"></div>\n</body>\n</html>\n"; };


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//Прога по генерации шаблонов компонент (установка: npm install -g yo generator-react-ts-component-dir):
//В консоли набрать: yo react-ts-component-dir NameOfComp ./src/shared. Пример 'yo react-ts-component-dir [component_name] [path] [--styles] [--less] [--sass]'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
__webpack_require__(30);
var root_1 = __webpack_require__(31);
var Layout_1 = __webpack_require__(32);
var Content_1 = __webpack_require__(35);
var CardsList_1 = __webpack_require__(37);
var Header_1 = __webpack_require__(117);
// import {PostsContextProvider} from "./shared/context/postsContext";
var react_redux_1 = __webpack_require__(1);
var redux_1 = __webpack_require__(141);
var redux_devtools_extension_1 = __webpack_require__(142);
var actions_1 = __webpack_require__(11);
var redux_thunk_1 = __importDefault(__webpack_require__(143));
var rootReducer_1 = __webpack_require__(144);
var react_router_dom_1 = __webpack_require__(8);
var PostModal_1 = __webpack_require__(150);
//doc in reactrouter.com
var store = redux_1.createStore(//1арг reducer, 2арг action.
rootReducer_1.rootReducer, //reducer
redux_devtools_extension_1.composeWithDevTools(//expanded action. Добавляет доп возможности (по умолчанию соединение с хромовским расширением Store)
redux_1.applyMiddleware(redux_thunk_1.default)));
function AppComponent() {
    react_1.useEffect(function () {
        //---------либо------
        // const token = localStorage.getItem('reddit_token') || window.__token__;
        // if(token) {
        //   console.log('window token:',window.__token__);
        //   store.dispatch(setTokenAC(token));//при монтаже - установка токена в стор.
        //   localStorage.setItem('reddit_token', token)
        // }
        //---------либо------
        // store.dispatch(setTokenAC('712161124719-hbTeTZ8YsiSKCEKq4QTW3ZX5O8XkKA'));
        //---------либо------
        var token = window.__token__; //'undefined' or '712161124719-hbTeTZ8YsiSKCEKq4QTW3ZX5O8XkKA'
        console.log('window.__token__:', window.__token__);
        if (token !== 'undefined') {
            store.dispatch(actions_1.setTokenAC(token));
        }
    }, []);
    var _a = react_1.default.useState(false), isMounted = _a[0], setIsMounted = _a[1];
    react_1.useEffect(function () {
        setIsMounted(true);
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, isMounted && ( //только на клиенте тк на сервере браузера нет. Гибрид через Static router итд.
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Layout_1.Layout, null,
            react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement(Content_1.Content, null,
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                    react_1.default.createElement(CardsList_1.CardList, null)),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/auth/" },
                    react_1.default.createElement(CardsList_1.CardList, null))),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/post/:id' },
                react_1.default.createElement(PostModal_1.PostModal, null)))))));
}
exports.App = root_1.hot(function () {
    return react_1.default.createElement(AppComponent, null);
});
// export const App = hot(AppComponent);//если не используются Hooks.
// {/*<DropdownNoAbsolute*/}
// {/*  onClose={()=>console.log('closed!!!')}//слушатели. Если закрыт то выполнить это.*/}
// {/*  onOpen={()=>console.log('opened!!!')}*/}
// {/*  // isOpen={false}//можно передать изначальное состояние*/}
// {/*  button={<button>dropdown button</button>}*/}
// // {/*>/!* Контейнер с логикой дропа *!/*/}
// {/*  <p>text1</p>/!*children*!/*/}
// {/*  <p>text2</p>/!*children*!/*/}
// {/*  <p>text3</p>/!*children*!/*/}
// {/*  <p>text4</p>/!*children*!/*/}
// </DropdownNoAbsolute>
// <Icon size={20} mobileSize={28} color={EColors.green} bold>Label1</Icon>
// <Break size={8} inline mobileSize={16}/>
// <Icon size={20}>Label2</Icon>
// <Break size={8} top/>
// <Icon size={20} mobileSize={10}>Label3</Icon>


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_css_1 = __importDefault(__webpack_require__(34));
function Layout(_a) {
    var children = _a.children;
    return ( //children это удобн способ ренделить одни комп в др комп не привязывая их к др др с пом imports
    react_1.default.createElement("div", { className: layout_css_1.default.layout }, children));
}
exports.Layout = Layout;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function Content(_a) {
    var children = _a.children;
    return (react_1.default.createElement("main", null, children));
}
exports.Content = Content;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(38), exports);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var cardlist_css_1 = __importDefault(__webpack_require__(39));
var GenericList_1 = __webpack_require__(17);
var Card_1 = __webpack_require__(40);
var CircleLoader_1 = __webpack_require__(116);
var react_redux_1 = __webpack_require__(1);
var postsActions_1 = __webpack_require__(6);
function CardList() {
    var list = react_redux_1.useSelector(function (state) { return state.posts.list; });
    var searchInput = react_redux_1.useSelector(function (state) { return state.searchInput; });
    var isLoading = react_redux_1.useSelector(function (state) { return state.posts.isLoading; });
    var dispatch = react_redux_1.useDispatch();
    var searchedList = list.filter(function (item) { return item.title.includes("" + searchInput); });
    var bottomEl = react_1.useRef(null);
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) { //наблюдаемый элемент лежащий в позиции [0] находится в зоне видимости.
                dispatch(postsActions_1.postListRequestThunk());
                console.log('loading more');
            }
        }, {
            rootMargin: '50px',
        });
        if (bottomEl.current) { //если bottomEl отрендерен - наблюдать
            observer.observe(bottomEl.current);
        }
        return function () {
            if (bottomEl.current) {
                observer.unobserve(bottomEl.current);
            }
        };
    }, []);
    return (react_1.default.createElement("ul", { className: cardlist_css_1.default.cardList },
        list.length === 0 && !isLoading && ( //--------------!!!!!!!!!!
        react_1.default.createElement("div", { role: 'alert', style: { textAlign: 'center' } }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430")),
        react_1.default.createElement(GenericList_1.GenericList, { list: searchedList.map(function (item) { return ({
                id: item.id,
                children: react_1.default.createElement(Card_1.Card, { item: item }),
                className: cardlist_css_1.default.card
            }); }) }),
        isLoading && react_1.default.createElement("div", { style: { textAlign: 'center' } },
            react_1.default.createElement(CircleLoader_1.CircleLoader, null)),
        react_1.default.createElement("div", { ref: bottomEl })));
}
exports.CardList = CardList;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardList": "cardlist__cardList--1dvkB",
	"card": "cardlist__card--2uOc-"
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var CardControls_1 = __webpack_require__(42);
var CardHeader_1 = __webpack_require__(97);
var CardPreview_1 = __webpack_require__(113);
function Card(_a) {
    var item = _a.item;
    return (react_1.default.createElement(react_1.default.Fragment, null, item.isVisible && (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CardHeader_1.CardHeader, { commentsAmount: item.commentsAmount, title: item.title, created: item.created, author: item.author, avatar: item.avatar, postId: item.id, subreddit: item.subreddit }),
        react_1.default.createElement(CardPreview_1.CardPreview, { isSaved: item.isSaved, id: item.id, preview: item.thumbnail, postId: item.id, subreddit: item.subreddit }),
        react_1.default.createElement(CardControls_1.CardControls, { commentsAmount: item.commentsAmount, score: item.score })))));
}
exports.Card = Card;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(43), exports);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardControls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var CardControls_css_1 = __importDefault(__webpack_require__(44));
var KarmaCounter_1 = __webpack_require__(45);
var Actions_1 = __webpack_require__(83);
var CommentsButton_1 = __webpack_require__(86);
function CardControls(_a) {
    var commentsAmount = _a.commentsAmount, score = _a.score;
    return (react_1.default.createElement("div", { className: CardControls_css_1.default.controls },
        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { score: score }),
        react_1.default.createElement("div", { className: CardControls_css_1.default.controlsCommentsContainer },
            react_1.default.createElement(CommentsButton_1.CommentsButton, { commentsAmount: commentsAmount })),
        react_1.default.createElement(Actions_1.Actions, null)));
}
exports.CardControls = CardControls;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "CardControls__controls--2k_hZ",
	"controlsCommentsContainer": "CardControls__controlsCommentsContainer--169ag"
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KarmaCounter = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var karmacounter_css_1 = __importDefault(__webpack_require__(47));
var Break_1 = __webpack_require__(3);
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
function KarmaCounter(props) {
    return (react_1.default.createElement("div", { className: karmacounter_css_1.default.karmaCounter },
        react_1.default.createElement("button", { className: karmacounter_css_1.default.up },
            react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.arrowFilled })),
        react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),
        react_1.default.createElement("span", { className: karmacounter_css_1.default.karmaValue }, props.score),
        react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),
        react_1.default.createElement("button", { className: karmacounter_css_1.default.down },
            react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.arrowFilled }))));
}
exports.KarmaCounter = KarmaCounter;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"karmaValue": "karmacounter__karmaValue--3KxsJ",
	"down": "karmacounter__down--37VgQ",
	"karmaCounter": "karmacounter__karmaCounter--1c_eJ",
	"up": "karmacounter__up--3A7iX"
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var break_css_1 = __importDefault(__webpack_require__(49));
var classnames_1 = __importDefault(__webpack_require__(12)); //из библиотеки. (npm i classnames @types/classnames).
function Break(props) {
    var _a, _b, _c, _d, _e;
    var size = props.size, desktopSize = props.desktopSize, mobileSize = props.mobileSize, tabletSize = props.tabletSize, _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g;
    var classes = classnames_1.default(//ф из библиотеки кот мерджит названия стилей в одну строку. Арг через запятую.
    break_css_1.default["s" + size], (_a = {}, _a[break_css_1.default["m" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_css_1.default["d" + desktopSize]] = desktopSize, _b), (_c = {}, _c[break_css_1.default["t" + tabletSize]] = tabletSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e));
    return (react_1.default.createElement("div", { className: classes }) //При большом приложении будет слишком много лишних дивов что не оч хор.
    );
}
exports.Break = Break;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s4": "break__s4--3z9et",
	"s8": "break__s8--3hLFr",
	"s12": "break__s12--_ZzCo",
	"s14": "break__s14--3wLzU",
	"s16": "break__s16--3pI1J",
	"s20": "break__s20--dmive",
	"s30": "break__s30--2owLD",
	"s40": "break__s40--_xXy9",
	"s50": "break__s50--XRqTB",
	"inline": "break__inline--5Apfx",
	"top": "break__top--3LXv8",
	"desktop_s50": "break__desktop_s50--3wESN",
	"m4": "break__m4--lQNkr",
	"m8": "break__m8--jUGZt",
	"m12": "break__m12--2Vwt4",
	"m14": "break__m14--1dtbW",
	"m16": "break__m16--1kNU6",
	"m20": "break__m20--1IgDt",
	"m30": "break__m30--1aP-X",
	"m40": "break__m40--3ycuh",
	"m50": "break__m50--1LklS",
	"t4": "break__t4--iXDTK",
	"t8": "break__t8--2BZme",
	"t12": "break__t12--3QkRu",
	"t14": "break__t14--1xKmU",
	"t16": "break__t16--1APlC",
	"t20": "break__t20--2FcGT",
	"t30": "break__t30--20-gV",
	"t40": "break__t40--2V3VZ",
	"t50": "break__t50--2eDmE",
	"d4": "break__d4--ZuO0j",
	"d8": "break__d8--2gVdg",
	"d12": "break__d12--1r1zz",
	"d14": "break__d14--3K-hq",
	"d16": "break__d16--5Sdgw",
	"d20": "break__d20--yVzyK",
	"d30": "break__d30--snhBx",
	"d40": "break__d40--1VxxF",
	"d50": "break__d50--3FBbS"
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var icon_css_1 = __importDefault(__webpack_require__(51));
var Icons_1 = __webpack_require__(13);
var ArrowARightIcon_1 = __webpack_require__(71);
var ArrowCircleIcon_1 = __webpack_require__(72);
var ArrowDownIcon_1 = __webpack_require__(73);
var ArrowsLeftRightIcon_1 = __webpack_require__(74);
var ChatIcon_1 = __webpack_require__(75);
var GraphIcon_1 = __webpack_require__(76);
var HyperlinkIcon_1 = __webpack_require__(77);
var ManIcon_1 = __webpack_require__(78);
var MicrophoneIcon_1 = __webpack_require__(79);
var MountainsIcon_1 = __webpack_require__(80);
var PaperIcon_1 = __webpack_require__(81);
var PdfIcon_1 = __webpack_require__(82);
var classnames_1 = __importDefault(__webpack_require__(12));
function Icon(props) {
    var _a, _b, _c;
    var _d = props.size, size = _d === void 0 ? 16 : _d, name = props.name, desktopSize = props.desktopSize, mobileSize = props.mobileSize, tabletSize = props.tabletSize;
    var classes = classnames_1.default(icon_css_1.default['iconContainer'], icon_css_1.default["s" + size], (_a = {}, _a[icon_css_1.default["m" + mobileSize]] = mobileSize, _a), (_b = {}, _b[icon_css_1.default["d" + desktopSize]] = desktopSize, _b), (_c = {}, _c[icon_css_1.default["t" + tabletSize]] = tabletSize, _c));
    return (react_1.default.createElement("div", { className: classes },
        name === 'menu' && react_1.default.createElement(Icons_1.MenuIcon, null),
        name === 'block' && react_1.default.createElement(Icons_1.BlockIcon, null),
        name === 'comment' && react_1.default.createElement(Icons_1.CommentIcon, null),
        name === 'save' && react_1.default.createElement(Icons_1.SaveIcon, null),
        name === 'share' && react_1.default.createElement(Icons_1.ShareIcon, null),
        name === 'warning' && react_1.default.createElement(Icons_1.WarningIcon, null),
        name === 'eye' && react_1.default.createElement(Icons_1.EyeIcon, null),
        name === 'envelope' && react_1.default.createElement(Icons_1.EnvelopeIcon, null),
        name === 'anonymous' && react_1.default.createElement(Icons_1.AnonymousIcon, null),
        name === 'a' && react_1.default.createElement(ArrowARightIcon_1.ArrowARightIcon, null),
        name === 'arrowCircle' && react_1.default.createElement(ArrowCircleIcon_1.ArrowCircleIcon, null),
        name === 'arrowDown' && react_1.default.createElement(ArrowDownIcon_1.ArrowDownIcon, null),
        name === 'arrowFilled' && react_1.default.createElement(Icons_1.ArrowFilledIcon, null),
        name === 'arrow' && react_1.default.createElement(Icons_1.ArrowIcon, null),
        name === 'arrowsLeftRight' && react_1.default.createElement(ArrowsLeftRightIcon_1.ArrowsLeftRightIcon, null),
        name === 'chat' && react_1.default.createElement(ChatIcon_1.ChatIcon, null),
        name === 'garbage' && react_1.default.createElement(Icons_1.GarbageIcon, null),
        name === 'graph' && react_1.default.createElement(GraphIcon_1.GraphIcon, null),
        name === 'hyperlink' && react_1.default.createElement(HyperlinkIcon_1.HyperlinkIcon, null),
        name === 'man' && react_1.default.createElement(ManIcon_1.ManIcon, null),
        name === 'microphone' && react_1.default.createElement(MicrophoneIcon_1.MicrophoneIcon, null),
        name === 'mountain' && react_1.default.createElement(MountainsIcon_1.MountainsIcon, null),
        name === 'paper' && react_1.default.createElement(PaperIcon_1.PaperIcon, null),
        name === 'pdf' && react_1.default.createElement(PdfIcon_1.PdfIcon, null),
        name === 'pencil' && react_1.default.createElement(Icons_1.PencilIcon, null),
        name === 'remove' && react_1.default.createElement(Icons_1.RemoveCrossIcon, null),
        name === 'rocket' && react_1.default.createElement(Icons_1.RocketIcon, null),
        name === 'search' && react_1.default.createElement(Icons_1.SearchIcon, null),
        name === 'statistic' && react_1.default.createElement(Icons_1.StatisticIcon, null),
        name === 'cross' && react_1.default.createElement(Icons_1.CrossIcon, null)));
}
exports.Icon = Icon;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"iconContainer": "icon__iconContainer--rb6ki",
	"s20": "icon__s20--29EY8",
	"s18": "icon__s18--3Zrrm",
	"s16": "icon__s16--VvlPn",
	"s14": "icon__s14--8xvDc",
	"s12": "icon__s12--3gncI",
	"s10": "icon__s10--3Lci7",
	"m20": "icon__m20--3zcSx",
	"m18": "icon__m18--3dfx0",
	"m16": "icon__m16--3AZpQ",
	"m14": "icon__m14--2cIQm",
	"m12": "icon__m12--2Mp5z",
	"m10": "icon__m10--3sGYz",
	"t20": "icon__t20--2SvVk",
	"t18": "icon__t18--3CDgo",
	"t16": "icon__t16--2Z2Lk",
	"t14": "icon__t14--bAmX6",
	"t12": "icon__t12--3LAHm",
	"t10": "icon__t10--3Y1Tl",
	"d20": "icon__d20--2MRPM",
	"d18": "icon__d18--2Gpw0",
	"d16": "icon__d16--2-GXA",
	"d14": "icon__d14--3HohR",
	"d12": "icon__d12--26qey",
	"d10": "icon__d10--14Kuv"
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
var React = __importStar(__webpack_require__(0));
function MenuIcon() {
    return (React.createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        React.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        React.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockIcon = void 0;
var React = __importStar(__webpack_require__(0));
function BlockIcon() {
    return (React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z", fill: "#999999" })));
}
exports.BlockIcon = BlockIcon;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningIcon = void 0;
var React = __importStar(__webpack_require__(0));
function WarningIcon() {
    return (React.createElement("svg", { width: "14", height: "12", viewBox: "0 0 14 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z", fill: "#999999" })));
}
exports.WarningIcon = WarningIcon;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnonymousIcon = void 0;
var React = __importStar(__webpack_require__(0));
function AnonymousIcon() {
    return (React.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}
exports.AnonymousIcon = AnonymousIcon;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvelopeIcon = void 0;
var React = __importStar(__webpack_require__(0));
function EnvelopeIcon() {
    return (React.createElement("svg", { width: "12", height: "10", viewBox: "0 0 20 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z", fill: "#D9D9D9" })));
}
exports.EnvelopeIcon = EnvelopeIcon;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveIcon = void 0;
var React = __importStar(__webpack_require__(0));
function SaveIcon() {
    return (React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));
}
exports.SaveIcon = SaveIcon;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ShareIcon() {
    return (React.createElement("svg", { width: "8", height: "10", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
}
exports.ShareIcon = ShareIcon;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchIcon = void 0;
var React = __importStar(__webpack_require__(0));
function SearchIcon() {
    return (React.createElement("svg", { width: "19", height: "19", viewBox: "0 0 19 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M13.5792 11.9497H12.721L12.4168 11.6564C13.4814 10.418 14.1224 8.81018 14.1224 7.06118C14.1224 3.16124 10.9611 0 7.06118 0C3.16124 0 0 3.16124 0 7.06118C0 10.9611 3.16124 14.1224 7.06118 14.1224C8.81018 14.1224 10.418 13.4814 11.6564 12.4168L11.9497 12.721V13.5792L17.3814 19L19 17.3814L13.5792 11.9497ZM7.06118 11.9497C4.3562 11.9497 2.17267 9.76615 2.17267 7.06118C2.17267 4.3562 4.3562 2.17267 7.06118 2.17267C9.76615 2.17267 11.9497 4.3562 11.9497 7.06118C11.9497 9.76615 9.76615 11.9497 7.06118 11.9497Z", fill: "#C4C4C4" })));
}
exports.SearchIcon = SearchIcon;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RocketIcon = void 0;
var React = __importStar(__webpack_require__(0));
function RocketIcon() {
    return (React.createElement("svg", { width: "9", height: "11", viewBox: "0 0 14 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M14 16L10.6225 14.76C11.235 13.536 11.6725 12.272 11.9437 10.984L14 16ZM3.3775 14.76L0 16L2.05625 10.984C2.3275 12.272 2.765 13.536 3.3775 14.76ZM7 0C7 0 11.375 1.6 11.375 8C11.375 10.48 10.7188 12.6 9.91375 14.264C9.625 14.84 9.00375 15.2 8.3125 15.2H5.6875C4.99625 15.2 4.375 14.84 4.08625 14.264C3.29 12.6 2.625 10.48 2.625 8C2.625 1.6 7 0 7 0ZM7 8C7.9625 8 8.75 7.28 8.75 6.4C8.75 5.52 7.9625 4.8 7 4.8C6.0375 4.8 5.25 5.52 5.25 6.4C5.25 7.28 6.0375 8 7 8Z", fill: "#CC6633" })));
}
exports.RocketIcon = RocketIcon;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EyeIcon = void 0;
var React = __importStar(__webpack_require__(0));
function EyeIcon() {
    return (React.createElement("svg", { width: "12", height: "8", viewBox: "0 0 16 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M8 0C4.36364 0 1.25818 2.28067 0 5.5C1.25818 8.71933 4.36364 11 8 11C11.6364 11 14.7418 8.71933 16 5.5C14.7418 2.28067 11.6364 0 8 0ZM8 9.16667C5.99273 9.16667 4.36364 7.524 4.36364 5.5C4.36364 3.476 5.99273 1.83333 8 1.83333C10.0073 1.83333 11.6364 3.476 11.6364 5.5C11.6364 7.524 10.0073 9.16667 8 9.16667ZM8 3.3C6.79273 3.3 5.81818 4.28267 5.81818 5.5C5.81818 6.71733 6.79273 7.7 8 7.7C9.20727 7.7 10.1818 6.71733 10.1818 5.5C10.1818 4.28267 9.20727 3.3 8 3.3Z", fill: "#999999" })));
}
exports.EyeIcon = EyeIcon;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticIcon = void 0;
var React = __importStar(__webpack_require__(0));
function StatisticIcon() {
    return (React.createElement("svg", { width: "13", height: "8", viewBox: "0 0 16 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M11.2 0L13.032 1.90833L9.128 5.975L5.928 2.64167L0 8.825L1.128 10L5.928 5L9.128 8.33333L14.168 3.09167L16 5V0H11.2Z", fill: "#999999" })));
}
exports.StatisticIcon = StatisticIcon;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarbageIcon = void 0;
var React = __importStar(__webpack_require__(0));
function GarbageIcon() {
    return (React.createElement("svg", { width: "8", height: "10", viewBox: "0 0 10 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M0.714286 10.6667C0.714286 11.4 1.35714 12 2.14286 12H7.85714C8.64286 12 9.28571 11.4 9.28571 10.6667V2.66667H0.714286V10.6667ZM2.14286 4H7.85714V10.6667H2.14286V4ZM7.5 0.666667L6.78571 0H3.21429L2.5 0.666667H0V2H10V0.666667H7.5Z", fill: "#999999" })));
}
exports.GarbageIcon = GarbageIcon;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentIcon = void 0;
var React = __importStar(__webpack_require__(0));
function CommentIcon() {
    return (React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#999999" })));
}
exports.CommentIcon = CommentIcon;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossIcon = void 0;
var React = __importStar(__webpack_require__(0));
function CrossIcon() {
    return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M13.3633 3.05176e-05L13.9996 0.636391L0.636345 14L-7.09307e-07 13.3636L13.3633 3.05176e-05Z", fill: "#ADADAD" }),
        React.createElement("path", { d: "M14 13.3636L13.3637 13.9999L0.000372653 0.636349L0.636719 -1.2067e-05L14 13.3636Z", fill: "#ADADAD" })));
}
exports.CrossIcon = CrossIcon;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveCrossIcon = void 0;
var React = __importStar(__webpack_require__(0));
function RemoveCrossIcon() {
    return (React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 13 13", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M6.5 0C2.9055 0 0 2.9055 0 6.5C0 10.0945 2.9055 13 6.5 13C10.0945 13 13 10.0945 13 6.5C13 2.9055 10.0945 0 6.5 0ZM9.75 8.8335L8.8335 9.75L6.5 7.4165L4.1665 9.75L3.25 8.8335L5.5835 6.5L3.25 4.1665L4.1665 3.25L6.5 5.5835L8.8335 3.25L9.75 4.1665L7.4165 6.5L9.75 8.8335Z", fill: "#999999" })));
}
exports.RemoveCrossIcon = RemoveCrossIcon;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PencilIcon = void 0;
var React = __importStar(__webpack_require__(0));
function PencilIcon() {
    return (React.createElement("svg", { width: "19", height: "19", viewBox: "0 0 19 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006V5.04006Z", fill: "#999999" })));
}
exports.PencilIcon = PencilIcon;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowIcon = void 0;
var React = __importStar(__webpack_require__(0));
var icons_css_1 = __importDefault(__webpack_require__(69));
// interface IArrowIconProps {
//   isOpen?: boolean;
// }
function ArrowIcon() {
    return (React.createElement(React.Fragment, null,
        React.createElement("svg", { className: icons_css_1.default.up, width: "10", height: "6", viewBox: "0 0 10 6", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M5 0L10 5.46588L9.45862 6L5 1.12595L0.541381 6L0 5.46588L5 0Z" }))));
}
exports.ArrowIcon = ArrowIcon;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"up": "icons__up--_ZzMD"
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowFilledIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ArrowFilledIcon() {
    return (React.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" })));
}
exports.ArrowFilledIcon = ArrowFilledIcon;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowARightIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ArrowARightIcon() {
    return (React.createElement("svg", { width: "16", height: "18", viewBox: "0 0 16 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z", fill: "#999999" })));
}
exports.ArrowARightIcon = ArrowARightIcon;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowCircleIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ArrowCircleIcon() {
    return (React.createElement("svg", { width: "22", height: "16", viewBox: "0 0 22 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z", fill: "#999999" })));
}
exports.ArrowCircleIcon = ArrowCircleIcon;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowDownIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ArrowDownIcon() {
    return (React.createElement("svg", { width: "14", height: "17", viewBox: "0 0 14 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z", fill: "#999999" })));
}
exports.ArrowDownIcon = ArrowDownIcon;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowsLeftRightIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ArrowsLeftRightIcon() {
    return (React.createElement("svg", { width: "20", height: "12", viewBox: "0 0 20 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z", fill: "#999999" })));
}
exports.ArrowsLeftRightIcon = ArrowsLeftRightIcon;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ChatIcon() {
    return (React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z", fill: "#999999" })));
}
exports.ChatIcon = ChatIcon;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphIcon = void 0;
var React = __importStar(__webpack_require__(0));
function GraphIcon() {
    return (React.createElement("svg", { width: "13", height: "8", viewBox: "0 0 13 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M9.1 0L10.5885 1.52667L7.4165 4.78L4.8165 2.11333L0 7.06L0.9165 8L4.8165 4L7.4165 6.66667L11.5115 2.47333L13 4V0H9.1Z", fill: "#999999" })));
}
exports.GraphIcon = GraphIcon;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperlinkIcon = void 0;
var React = __importStar(__webpack_require__(0));
function HyperlinkIcon() {
    return (React.createElement("svg", { width: "20", height: "10", viewBox: "0 0 20 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z", fill: "#999999" })));
}
exports.HyperlinkIcon = HyperlinkIcon;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ManIcon() {
    return (React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z", fill: "#999999" })));
}
exports.ManIcon = ManIcon;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrophoneIcon = void 0;
var React = __importStar(__webpack_require__(0));
function MicrophoneIcon() {
    return (React.createElement("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z", fill: "#999999" })));
}
exports.MicrophoneIcon = MicrophoneIcon;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainsIcon = void 0;
var React = __importStar(__webpack_require__(0));
function MountainsIcon() {
    return (React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z", fill: "#999999" })));
}
exports.MountainsIcon = MountainsIcon;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperIcon = void 0;
var React = __importStar(__webpack_require__(0));
function PaperIcon() {
    return (React.createElement("svg", { width: "16", height: "20", viewBox: "0 0 16 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z", fill: "#999999" })));
}
exports.PaperIcon = PaperIcon;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfIcon = void 0;
var React = __importStar(__webpack_require__(0));
function PdfIcon() {
    return (React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z", fill: "#999999" })));
}
exports.PdfIcon = PdfIcon;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(84), exports);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var actions_css_1 = __importDefault(__webpack_require__(85));
var Icons_1 = __webpack_require__(13);
var Break_1 = __webpack_require__(3);
var bookmark = 'seen';
var openedThread = "private";
// interface IActionsProps {
//   openedThread: string;
// }
function Actions() {
    return (react_1.default.createElement("div", { className: actions_css_1.default.actions }, openedThread === "private" ?
        react_1.default.createElement(react_1.default.Fragment, null, (bookmark === 'seen' || bookmark === 'commented') && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("button", null,
                react_1.default.createElement(Icons_1.ShareIcon, null)),
            react_1.default.createElement(Break_1.Break, { size: 14 }),
            react_1.default.createElement("button", null,
                react_1.default.createElement(Icons_1.SaveIcon, null)))))
        :
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("button", null,
                    react_1.default.createElement(Icons_1.ShareIcon, null)),
                react_1.default.createElement(Break_1.Break, { size: 14 }),
                react_1.default.createElement("button", null,
                    react_1.default.createElement(Icons_1.SaveIcon, null)))));
}
exports.Actions = Actions;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"actions": "actions__actions--2OeTp"
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(87), exports);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentsbutton_css_1 = __importDefault(__webpack_require__(88));
var Break_1 = __webpack_require__(3);
var Dropdown_1 = __webpack_require__(9);
var Comment_1 = __webpack_require__(92);
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
var bookmark = 'commented';
function CommentsButton(_a) {
    var commentsAmount = _a.commentsAmount;
    return (react_1.default.createElement("div", { className: commentsbutton_css_1.default.commentsButtonContainer },
        react_1.default.createElement(Dropdown_1.Dropdown, { isInline: true, button: react_1.default.createElement("button", { className: commentsbutton_css_1.default.commentsButton },
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.comment }),
                react_1.default.createElement(Break_1.Break, { size: 4 }),
                bookmark === 'commented' ? react_1.default.createElement("span", null, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439") : react_1.default.createElement("span", null, commentsAmount)) },
            react_1.default.createElement("div", { className: commentsbutton_css_1.default.commentsDropdown },
                react_1.default.createElement(Comment_1.Comment, { commentsAmount: commentsAmount })))));
}
exports.CommentsButton = CommentsButton;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "commentsbutton__commentsButton--G6Qs-",
	"commentsDropdown": "commentsbutton__commentsDropdown--3ZmtI",
	"commentsButtonContainer": "commentsbutton__commentsButtonContainer--326vO"
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//универсальный компонент-шаблон с логикой DropdownNoAbsolute. Контейнер с 2мя блоками (на что жать и что выпадает). Без стилей, только логика.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importStar(__webpack_require__(0));
var Portal_1 = __webpack_require__(18);
var useOutsideClick_1 = __webpack_require__(19);
var NOOP = function () { }; //ф кот ничего не делает. Обертка.
function Dropdown(_a) {
    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c, _d = _a.isInline, isInline = _d === void 0 ? false : _d, _e = _a.local, local = _e === void 0 ? false : _e, arrowIcon = _a.arrowIcon, classNameButton = _a.classNameButton, classNameContainer = _a.classNameContainer, classNameChildrenContainer = _a.classNameChildrenContainer;
    var _f = react_1.useState(isOpen), isDropdownOpen = _f[0], setIsDropdownOpen = _f[1];
    var _g = react_1.useState(''), x = _g[0], setX = _g[1];
    var _h = react_1.useState(''), y = _h[0], setY = _h[1];
    react_1.useEffect(function () {
        setIsDropdownOpen(isOpen);
    }, [isOpen]);
    react_1.useEffect(function () {
        isDropdownOpen ? onOpen() : onClose();
    }, [isDropdownOpen]);
    var handleOpen = function (e) {
        // if (isOpen === undefined) {
        setIsDropdownOpen(!isDropdownOpen);
        // }
        setX(e.target.getBoundingClientRect().x); //установка координат клика -> рендер привязан к стейту: рендер там где установлены координаты
        setY(e.target.getBoundingClientRect().y);
    };
    var handleClose = function () {
        setIsDropdownOpen(false);
    };
    //--------для клика снаружи----------
    var ref = react_1.useRef(null);
    useOutsideClick_1.useOutsideClick(ref, function () { setIsDropdownOpen(false); });
    //-----------------------------------
    return (react_1.default.createElement("div", { className: classNameContainer, ref: ref },
        react_1.default.createElement("button", { onClick: handleOpen, className: classNameButton, style: isDropdownOpen ? { borderBottomRightRadius: '0', borderBottomLeftRadius: '0' } : {} },
            button,
            react_1.default.createElement("div", { style: { transform: isDropdownOpen ? 'rotate(180deg)' : 'unset' } }, arrowIcon)),
        isDropdownOpen && !local && (react_1.default.createElement(Portal_1.Portal, { children: react_1.default.createElement("div", { style: { position: 'fixed', top: y + "px", left: x + "px", zIndex: 100 }, onClick: handleClose, className: classNameChildrenContainer }, children) })),
        isDropdownOpen && local && (react_1.default.createElement("div", { onClick: handleClose, className: classNameChildrenContainer }, children))));
}
exports.Dropdown = Dropdown;
// interface IDropChild {
//   children: React.ReactNode;
// }
//
// const DropDownChildren = ({children}:IDropChild)=>{
//   const [node] = usePortalZone();
//   if(!node) return null;
//
//   return ReactDOM.createPortal((
//     {children}
//     ), node)
// }
// export function DropdownTest({button, children, isOpen, onClose=NOOP, onOpen=NOOP, isInline=false}: IDropdownProps) {//ф onClose и onOpen всегда в наличии благодаря NOOP обертке. Тоесть если сверху не переданы пропсы этих методов то ставятся заглушки ничего не выполняющие.
//   const divRef = React.useRef<HTMLDivElement>(null);
//   // State for our modal
//   const [isModalOpen, setModalOpen] = useState(false);
//   // Call hook passing in the ref and a function to call on outside click
//   useOnClickOutside(ref, () => setModalOpen(false));
//
//   return (
//     <div style={{ padding: '50px' }}>
//       {isModalOpen ? (
//         <div ref={divRef}>
//           <span>Hey, I'm a modal<br /> Click anywhere outside of me to close</span>
//         </div>
//       ) : (
//         <button onClick={() => setModalOpen(true)}>Open Modal</button>
//
//       )}
//     </div>
//   );
// }
//
// function useOnClickOutside(ref, handler) {
//   useEffect(
//     () => {
//       const listener = event => {
//         // Do nothing if clicking ref's element or descendent elements
//         if (!ref.current || ref.current.contains(event.target)) {
//           return;
//         }
//
//         handler(event);
//       };
//
//       document.addEventListener('mousedown', listener);
//       document.addEventListener('touchstart', listener);
//
//       return () => {
//         document.removeEventListener('mousedown', listener);
//         document.removeEventListener('touchstart', listener);
//       };
//     },
//     // Add ref and handler to effect dependencies
//     // It's worth noting that because passed in handler is a new ...
//     // ... function on every render that will cause this effect ...
//     // ... callback/cleanup to run every render. It's not a big deal ...
//     // ... but to optimize you can wrap handler in useCallback before ...
//     // ... passing it into this hook.
//     [ref, handler]
//   );
// }
//
//
//
//
// const modalStyle = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   maxWidth: '400px',
//   width: '100%',
//   padding: '50px',
//   textAlign: 'center',
//   fontSize: '1.2rem',
//   backgroundColor: 'white',
//   boxShadow: '0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)'
// };
// function ClickOutside({ children, onClick }) {
//   const refs = React.Children.map(children, () => React.createRef());
//   const handleClick = e => {
//     const isOutside = refs.every(ref => {
//       return !ref.current.contains(e.target);
//     });
//     if (isOutside) {
//       onClick();
//     }
//   };
//
//   useEffect(() => {
//     document.addEventListener("click", handleClick);
//
//     return function() {
//       document.removeEventListener("click", handleClick);
//     };
//   });
//
//   return React.Children.map(children, (element, idx) =>
//     React.cloneElement(element, { ref: refs[idx] })
//   );
// }


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePortalZone = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function usePortalZone() {
    var _a = react_1.default.useState(null), portalElement = _a[0], setPortalElement = _a[1];
    react_1.default.useEffect(function () {
        var portalZone = document.getElementById('portal_zone');
        if (!portalZone) { //если нет то создать
            portalZone = document.createElement('div');
            portalZone.setAttribute('id', 'portal_zone');
            document.body.appendChild(portalZone);
        }
        setPortalElement(portalZone);
    }, []);
    return [portalElement]; //всегда возвр ноду
}
exports.usePortalZone = usePortalZone;
// somewhere in component
// function Portal() {
//   const portalNode = usePortalZone();
//   ReactDOM.createPortal(..., portalNode)
// }
// const node = document.querySelector('#modal_root');//указываем место в DOM где будет отрендерен компонент
// if(!node) return null;//исправление типизации node|null на просто null.


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(93), exports);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var comment_css_1 = __importDefault(__webpack_require__(94));
var MetaData_1 = __webpack_require__(20);
function Comment(_a) {
    var commentsAmount = _a.commentsAmount;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: comment_css_1.default.meta },
            react_1.default.createElement(MetaData_1.MetaData, null)),
        react_1.default.createElement("p", { className: comment_css_1.default.text }, "\u0411\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0435, \u043D\u043E \u043D\u0435\u043E\u043F\u0440\u043E\u0432\u0435\u0440\u0436\u0438\u043C\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043C\u043D\u043E\u0433\u0438\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438 \u043B\u0438\u0448\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442 \u0444\u0440\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0430\u0437\u043D\u043E\u0433\u043B\u0430\u0441\u0438\u0439 \u0438 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u044B \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432 \u0440\u0430\u0437\u0440\u0435\u0437\u0435 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u043F\u0440\u0435\u0434\u043F\u043E\u0441\u044B\u043B\u043E\u043A. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E-\u043F\u0440\u043E\u043F\u0430\u0433\u0430\u043D\u0434\u0438\u0441\u0442\u0441\u043A\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u0448\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043D\u043E\u0432\u043E\u0439 \u0441\u0442\u0443\u043F\u0435\u043D\u044C\u044E \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430."),
        react_1.default.createElement("div", { className: comment_css_1.default.more },
            "+ \u0435\u0449\u0435 ",
            commentsAmount,
            " \u0432\u0430\u0448\u0438\u0445 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F")));
}
exports.Comment = Comment;
//из 15 модуля
// const Comment = props =>{//dumb component
//   return (
//     <li
//       className="listItem"
//       id={props.id}
//     >
//       <div className="listHeader">
//         <div className="listHeader__name">{props.name}</div>
//         <button
//           type="button"
//           className="listHeader__cross"
//           aria-label="удалить"
//           onClick={props.handleDelete}
//         >
//         </button>
//       </div>
//       <div className="listItem__text">{props.text}</div>
//       <div className="listItem__date">{props.date}</div>
//     </li>
//   );
// }


/***/ }),
/* 94 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "comment__item--3Ku7c",
	"visualThreadContainer": "comment__visualThreadContainer--jckDz",
	"arrows": "comment__arrows--3JDdf",
	"line": "comment__line--4IT7I",
	"textContainer": "comment__textContainer--15WnW",
	"actionsContainer": "comment__actionsContainer--2WMdL"
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaData = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var metadata_css_1 = __importDefault(__webpack_require__(96));
var Break_1 = __webpack_require__(3);
function MetaData(_a) {
    var author = _a.author, created = _a.created, avatar = _a.avatar;
    return (react_1.default.createElement("div", { className: metadata_css_1.default.metaData },
        react_1.default.createElement("div", { className: metadata_css_1.default.userLink },
            react_1.default.createElement("img", { className: metadata_css_1.default.avatar, src: avatar, alt: "avatar" }),
            react_1.default.createElement("a", { href: "http://reddit.com/user/" + author, className: metadata_css_1.default.userName, target: "_blank", rel: "noopener noreferrer" },
                author,
                " ")),
        react_1.default.createElement("span", { className: metadata_css_1.default.createdAt },
            react_1.default.createElement("span", { className: metadata_css_1.default.publishedLabel }, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E"),
            react_1.default.createElement(Break_1.Break, { size: 12 }),
            created)));
}
exports.MetaData = MetaData;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"metaData": "metadata__metaData--3AAQK",
	"userLink": "metadata__userLink--2psvd",
	"avatar": "metadata__avatar--2zvD8",
	"userName": "metadata__userName--3Wv_v",
	"createdAt": "metadata__createdAt--3mVMI",
	"publishedLabel": "metadata__publishedLabel--1b_r_",
	"username": "metadata__username--3qzVj"
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(98), exports);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardHeader = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var CardHeader_css_1 = __importDefault(__webpack_require__(99));
var MetaData_1 = __webpack_require__(20);
var ActionsContent_1 = __webpack_require__(100);
var Menu_1 = __webpack_require__(105);
var Title_1 = __webpack_require__(110);
function CardHeader(_a) {
    // console.log(date)
    var commentsAmount = _a.commentsAmount, title = _a.title, created = _a.created, author = _a.author, avatar = _a.avatar, postId = _a.postId, subreddit = _a.subreddit;
    return (react_1.default.createElement("div", { className: CardHeader_css_1.default.cardHeaderContainer },
        react_1.default.createElement("div", { className: CardHeader_css_1.default.metaMenuContainer },
            react_1.default.createElement(MetaData_1.MetaData, { created: created, author: author, avatar: avatar }),
            react_1.default.createElement(Menu_1.Menu, { postId: postId })),
        react_1.default.createElement(Title_1.Title, { title: title, postId: postId, subreddit: subreddit }),
        react_1.default.createElement(ActionsContent_1.ActionsContent, { commentsAmount: commentsAmount })));
}
exports.CardHeader = CardHeader;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardHeaderContainer": "CardHeader__cardHeaderContainer--2_LdG",
	"metaMenuContainer": "CardHeader__metaMenuContainer--3HYaz"
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(101), exports);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Text_1 = __webpack_require__(5);
var Break_1 = __webpack_require__(3);
var EColors_1 = __webpack_require__(7);
var actionsContent_css_1 = __importDefault(__webpack_require__(104));
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
var bookmark = 'seen';
function ActionsContent(_a) {
    var commentsAmount = _a.commentsAmount;
    return (react_1.default.createElement("div", { className: actionsContent_css_1.default.actionsContentContainer }, bookmark === 'seen' && (react_1.default.createElement("button", { className: actionsContent_css_1.default.buttonSeen },
        react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.eye }),
        react_1.default.createElement(Break_1.Break, { size: 4, inline: true }),
        react_1.default.createElement(Text_1.Text, { size: 10, color: EColors_1.EColors.gray99, tabletSize: 14 }, "3 \u0447\u0430\u0441\u0430 \u043D\u0430\u0437\u0430\u0434")))));
}
exports.ActionsContent = ActionsContent;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// шаблон для текста, размер и цвет кот меняется через входящие пропсы
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_css_1 = __importDefault(__webpack_require__(103));
var classnames_1 = __importDefault(__webpack_require__(12)); //из библиотеки. (npm i classnames @types/classnames).
var EColors_1 = __webpack_require__(7);
function Text(props) {
    var _a, _b, _c, _d, _e, _f;
    var _g = props.As, As = _g === void 0 ? 'span' : _g, children = props.children, size = props.size, desktopSize = props.desktopSize, mobileSize = props.mobileSize, tabletSize = props.tabletSize, _h = props.color, color = _h === void 0 ? EColors_1.EColors.black : _h, _j = props.bold, bold = _j === void 0 ? false : _j, _k = props.isActive, isActive = _k === void 0 ? false : _k, _l = props.myDevBorder, myDevBorder = _l === void 0 ? false : _l, _m = props.href, href = _m === void 0 ? '#someUrl' : _m, _o = props.reset, reset = _o === void 0 ? false : _o;
    var classes = classnames_1.default(//ф из библиотеки кот мерджит названия стилей в одну строку.
    text_css_1.default["s" + size], (_a = {}, _a[text_css_1.default["m" + mobileSize]] = mobileSize, _a), (_b = {}, _b[text_css_1.default["d" + desktopSize]] = desktopSize, _b), (_c = {}, _c[text_css_1.default["t" + tabletSize]] = tabletSize, _c), text_css_1.default[color], (_d = {}, _d[text_css_1.default.bold] = bold, _d), (_e = {}, _e[text_css_1.default.myDevBorder] = myDevBorder, _e), (_f = {}, _f[text_css_1.default.reset] = reset, _f));
    return (react_1.default.createElement(As, { className: classes }, children));
}
exports.Text = Text;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bold": "text__bold--SkXQ2",
	"border": "text__border--1o_lx",
	"reset": "text__reset--WmBrS",
	"black": "text__black--iwnRw",
	"orange": "text__orange--1hkou",
	"green": "text__green--2eeYx",
	"white": "text__white---kSLU",
	"grayF4": "text__grayF4--2fziM",
	"grayF3": "text__grayF3--Qccdq",
	"grayD9": "text__grayD9--2JvG4",
	"grayC4": "text__grayC4--2-4RN",
	"gray99": "text__gray99--28d1E",
	"gray66": "text__gray66--18ILI",
	"s28": "text__s28--3BD4A",
	"s20": "text__s20--1Lpbz",
	"s16": "text__s16--1gxKI",
	"s14": "text__s14--3dOqS",
	"s12": "text__s12--gcVfo",
	"s10": "text__s10--76GMG",
	"m28": "text__m28--tEzVa",
	"m20": "text__m20--1hEOA",
	"m16": "text__m16--vXHVa",
	"m14": "text__m14--3nUlL",
	"m12": "text__m12--13jYh",
	"m10": "text__m10--l3rbg",
	"t28": "text__t28--2wf-P",
	"t20": "text__t20--3GGFF",
	"t16": "text__t16--3n8pW",
	"t14": "text__t14--22X5t",
	"t12": "text__t12--14lG4",
	"t10": "text__t10--25rtI",
	"d28": "text__d28--2pRy9",
	"d20": "text__d20--3HMFh",
	"d16": "text__d16--1BxnF",
	"d14": "text__d14--YJeI4",
	"d12": "text__d12--1dyvv",
	"d10": "text__d10--ry2jL"
};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"actionSeen": "actionsContent__actionSeen--3Y_kN",
	"actionsContentContainer": "actionsContent__actionsContentContainer--176PB"
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Dropdown_1 = __webpack_require__(9);
var Text_1 = __webpack_require__(5);
var menu_css_1 = __importDefault(__webpack_require__(107));
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
var MenuButton_1 = __webpack_require__(10);
var react_redux_1 = __webpack_require__(1);
var postsActions_1 = __webpack_require__(6);
function Menu(_a) {
    var postId = _a.postId;
    var dispatch = react_redux_1.useDispatch();
    return (react_1.default.createElement(Dropdown_1.Dropdown //контейнер с логикой дропа
    , { button: //на что жать.
        react_1.default.createElement("button", { className: menu_css_1.default.menuButton },
            react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.menu })) },
        react_1.default.createElement("div", { className: menu_css_1.default.menuDropdown },
            react_1.default.createElement("div", { className: menu_css_1.default.menuSubButtonContainer },
                react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Комментарии', icon: EIcons_1.EIcons.comment, onClick: function () { return console.log('comment pressed'); }, className: menu_css_1.default.menuSubButton }),
                react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Поделиться', icon: EIcons_1.EIcons.share, onClick: function () { return console.log('Поделиться pressed'); }, className: menu_css_1.default.menuSubButton }),
                react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Скрыть', icon: EIcons_1.EIcons.block, onClick: function () { return dispatch(postsActions_1.postCardToggleVisibleAC(postId)); }, className: menu_css_1.default.menuSubButton }),
                react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Сохранить', icon: EIcons_1.EIcons.save, onClick: function () { return dispatch(postsActions_1.postToggleSaveAC(postId)); }, className: menu_css_1.default.menuSubButton }),
                react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Пожаловаться', icon: EIcons_1.EIcons.warning, onClick: function () { return console.log('Пожаловаться pressed'); }, className: menu_css_1.default.menuSubButton })),
            react_1.default.createElement("button", { className: menu_css_1.default.closeButton },
                react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))));
}
exports.Menu = Menu;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--1Tcq8",
	"menuButton": "menu__menuButton--15OvN",
	"menuDropdown": "menu__menuDropdown--2kSPY",
	"closeButton": "menu__closeButton--2Yxtn",
	"menuSubButtonContainer": "menu__menuSubButtonContainer--2cGPT",
	"menuSubButton": "menu__menuSubButton--2ZNN4",
	"divider": "menu__divider--19lpK"
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// шаблон для текста, размер и цвет кот меняется через входящие пропсы
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var menuButton_css_1 = __importDefault(__webpack_require__(109));
var classnames_1 = __importDefault(__webpack_require__(12));
var Icon_1 = __webpack_require__(4);
var Break_1 = __webpack_require__(3);
var Text_1 = __webpack_require__(5);
var EColors_1 = __webpack_require__(7);
function MenuButton(props) {
    var _a, _b, _c, _d;
    var _e = props.size, size = _e === void 0 ? 12 : _e, desktopSize = props.desktopSize, mobileSize = props.mobileSize, tabletSize = props.tabletSize, _f = props.bold, bold = _f === void 0 ? false : _f, text = props.text, onClick = props.onClick, icon = props.icon, className = props.className, _g = props.color, color = _g === void 0 ? EColors_1.EColors.gray99 : _g;
    var classes = classnames_1.default(//ф из библиотеки кот мерджит названия стилей в одну строку.
    menuButton_css_1.default["s" + size], (_a = {}, _a[menuButton_css_1.default["m" + mobileSize]] = mobileSize, _a), (_b = {}, _b[menuButton_css_1.default["d" + desktopSize]] = desktopSize, _b), (_c = {}, _c[menuButton_css_1.default["t" + tabletSize]] = tabletSize, _c), (_d = {}, _d[menuButton_css_1.default.bold] = bold, _d), className);
    return (react_1.default.createElement("button", { onClick: onClick, className: classes, style: { display: 'flex', alignItems: 'center', marginRight: '10px' } },
        icon && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Icon_1.Icon, { name: icon, size: size }),
            react_1.default.createElement(Break_1.Break, { size: 4 }))),
        react_1.default.createElement(Text_1.Text, { size: size, mobileSize: mobileSize, tabletSize: tabletSize, desktopSize: desktopSize, color: color }, text)));
}
exports.MenuButton = MenuButton;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bold": "menuButton__bold--1sDDe",
	"border": "menuButton__border--1KkvM",
	"reset": "menuButton__reset--1Ji_x",
	"black": "menuButton__black--31qV9",
	"orange": "menuButton__orange--1vqtc",
	"green": "menuButton__green--29EgD",
	"white": "menuButton__white--y003_",
	"grayF4": "menuButton__grayF4--2-ThL",
	"grayF3": "menuButton__grayF3--3wInz",
	"grayD9": "menuButton__grayD9--jx42S",
	"grayC4": "menuButton__grayC4--1HrcT",
	"gray99": "menuButton__gray99--2ffxp",
	"gray66": "menuButton__gray66--8u8wd",
	"s28": "menuButton__s28--tLgr6",
	"s20": "menuButton__s20--3ABdF",
	"s16": "menuButton__s16--3N4Xt",
	"s14": "menuButton__s14--1tzkI",
	"s12": "menuButton__s12--EeZWW",
	"s10": "menuButton__s10--2YJAx",
	"m28": "menuButton__m28--j36Hl",
	"m20": "menuButton__m20--148L7",
	"m16": "menuButton__m16--28XZ0",
	"m14": "menuButton__m14--2jtcW",
	"m12": "menuButton__m12--19RW7",
	"m10": "menuButton__m10--y_ko9",
	"t28": "menuButton__t28--2A2ih",
	"t20": "menuButton__t20--3a4WI",
	"t16": "menuButton__t16--1j0mE",
	"t14": "menuButton__t14--66nkb",
	"t12": "menuButton__t12--1sViL",
	"t10": "menuButton__t10--1Ix0y",
	"d28": "menuButton__d28--2B5fe",
	"d20": "menuButton__d20--1Qp4L",
	"d16": "menuButton__d16--2upb2",
	"d14": "menuButton__d14--3cDe5",
	"d12": "menuButton__d12--3Z7gV",
	"d10": "menuButton__d10--35oVm"
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(111), exports);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var title_css_1 = __importDefault(__webpack_require__(112));
var react_redux_1 = __webpack_require__(1);
var commentsActions_1 = __webpack_require__(15);
var react_router_dom_1 = __webpack_require__(8);
var postsActions_1 = __webpack_require__(6);
function Title(_a) {
    var title = _a.title, postId = _a.postId, subreddit = _a.subreddit;
    var dispatch = react_redux_1.useDispatch();
    var handleClick = function () {
        dispatch(commentsActions_1.openPostThunk(subreddit, postId));
        dispatch(postsActions_1.postSeenAC(postId));
    };
    return (react_1.default.createElement("h2", { className: title_css_1.default.titleContainer },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/post/" + postId, onClick: handleClick }, title)));
}
exports.Title = Title;
// было
// компонент находится здесь для лучшего поиска/структуры а рендерится через портал дабы не задевать чужие стили. Смысл в избежании влияния стилей.
// {isModalOpened && <PostModal onClose={()=>setIsModalOpened(false)}/>}


/***/ }),
/* 112 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"titleContainer": "title__titleContainer--72kHN"
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(114), exports);


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPreview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var cardPreview_css_1 = __importDefault(__webpack_require__(115));
var Icons_1 = __webpack_require__(13);
var Break_1 = __webpack_require__(3);
var Text_1 = __webpack_require__(5);
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
var react_router_dom_1 = __webpack_require__(8);
var commentsActions_1 = __webpack_require__(15);
var react_redux_1 = __webpack_require__(1);
function CardPreview(_a) {
    var isSaved = _a.isSaved, id = _a.id, preview = _a.preview, postId = _a.postId, subreddit = _a.subreddit;
    var dispatch = react_redux_1.useDispatch();
    return (react_1.default.createElement(react_router_dom_1.Link, { to: "/post/" + postId, className: cardPreview_css_1.default.previewContainer, onClick: function () { return dispatch(commentsActions_1.openPostThunk(subreddit, postId)); } },
        react_1.default.createElement("img", { className: cardPreview_css_1.default.previewImg, src: preview, alt: 'previewPic' }),
        isSaved && //если сохрен то отображается маркер.
            react_1.default.createElement("div", { className: cardPreview_css_1.default.marker },
                react_1.default.createElement("div", { className: cardPreview_css_1.default.markerPartOne },
                    react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.save, size: 10 }),
                    react_1.default.createElement(Break_1.Break, { size: 4 }),
                    react_1.default.createElement(Text_1.Text, { size: 10 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u043E\u0435")),
                react_1.default.createElement("div", { className: cardPreview_css_1.default.markerPartTwo },
                    react_1.default.createElement(Icons_1.ArrowFilledIcon, null)))));
}
exports.CardPreview = CardPreview;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"previewContainer": "cardPreview__previewContainer--3bycu",
	"previewImg": "cardPreview__previewImg--1oKGu",
	"marker": "cardPreview__marker--2mRVZ",
	"markerPartOne": "cardPreview__markerPartOne--2uhep",
	"markerPartTwo": "cardPreview__markerPartTwo--XCgCD"
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleLoader = void 0;
var React = __importStar(__webpack_require__(0));
function CircleLoader() {
    return (
    // <svg width="64px" height="64px" viewBox="0 0 128 128">
    //   <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF"/>
    //   <g>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#000000" fill-opacity="1"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(45 64 64)"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(90 64 64)"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(135 64 64)"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(180 64 64)"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(225 64 64)"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(270 64 64)"/>
    //     <path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#c0c0c0" fill-opacity="0.25" transform="rotate(315 64 64)"/>
    //     <animateTransform attributeName="transform" type="rotate" values="0 64 64;45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite">
    //
    //     </animateTransform>
    //   </g>
    // </svg>
    React.createElement("svg", { width: "64px", height: "64px", viewBox: "0 0 128 128" },
        React.createElement("g", null,
            React.createElement("path", { fill: "#ff8c00", fillOpacity: "1", d: "M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z" }),
            React.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 64 64", to: "360 64 64", dur: "720ms", repeatCount: "indefinite" }))));
}
exports.CircleLoader = CircleLoader;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(118), exports);


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(119));
var SearchGroup_1 = __webpack_require__(120);
var SortBlock_1 = __webpack_require__(132);
var Title_1 = __webpack_require__(135);
var react_redux_1 = __webpack_require__(1);
function Header() {
    var isPrivate = react_redux_1.useSelector(function (state) { return state.isPrivate; });
    return (react_1.default.createElement("header", null,
        react_1.default.createElement("div", { className: header_css_1.default.topContainer },
            react_1.default.createElement(SearchGroup_1.SearchGroup, null),
            react_1.default.createElement(Title_1.Title, null)),
        isPrivate && react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"topContainer": "header__topContainer--21BNu"
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(121), exports);


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchGroup = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var searchgroup_css_1 = __importDefault(__webpack_require__(122));
var NewMessages_1 = __webpack_require__(123);
var UserBlock_1 = __webpack_require__(126);
var SearchBlock_1 = __webpack_require__(129);
function SearchGroup() {
    return (react_1.default.createElement("div", { className: searchgroup_css_1.default.searchGroup },
        react_1.default.createElement(UserBlock_1.UserBlock, null),
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(NewMessages_1.NewMessages, null)));
}
exports.SearchGroup = SearchGroup;
{ /*<Break size={16} mobileSize={16} tabletSize={30} desktopSize={50}/>*/ }


/***/ }),
/* 122 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchGroup": "searchgroup__searchGroup--2xT5y"
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(124), exports);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMessages = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var newMessages_css_1 = __importDefault(__webpack_require__(125));
var Break_1 = __webpack_require__(3);
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
var Text_1 = __webpack_require__(5);
var EColors_1 = __webpack_require__(7);
var react_redux_1 = __webpack_require__(1);
function NewMessages() {
    var inbox_count = react_redux_1.useSelector(function (state) { return state.profile.data.inbox_count; });
    var handleClick = function (e) {
        alert('msg icon clicked');
        // console.log(event.target)
    };
    return (react_1.default.createElement("button", { className: newMessages_css_1.default.messagesButton, onClick: handleClick },
        react_1.default.createElement("div", { className: newMessages_css_1.default.messagesTextContainer },
            react_1.default.createElement(Text_1.Text, { size: 12, color: EColors_1.EColors.white }, inbox_count)),
        react_1.default.createElement(Break_1.Break, { size: 4 }),
        react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.envelope })));
}
exports.NewMessages = NewMessages;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"messagesButton": "newMessages__messagesButton--3qmV1",
	"messagesTextContainer": "newMessages__messagesTextContainer--twdib"
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(127), exports);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var react_1 = __importStar(__webpack_require__(0));
var userBlock_css_1 = __importDefault(__webpack_require__(128));
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
var Text_1 = __webpack_require__(5);
var EColors_1 = __webpack_require__(7);
var Break_1 = __webpack_require__(3);
var react_redux_1 = __webpack_require__(1);
var Reddit_1 = __webpack_require__(21);
var profileActions_1 = __webpack_require__(16);
function UserBlock() {
    var profileData = react_redux_1.useSelector(function (state) { return state.profile.data; });
    var token = react_redux_1.useSelector(function (state) { return state.token; });
    var isLoading = react_redux_1.useSelector(function (state) { return state.profile.loading; });
    var authUrl = Reddit_1.getRedditAuthUrl();
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (token !== '') {
            dispatch(profileActions_1.profileRequestThunk());
        }
    }, [token]);
    // const handleClick = ()=>{
    //   if(token === ''){
    //     window.location.assign(`${authUrl}`)
    //   }
    //   if(token !== ''){
    //     dispatch(toggleRoomAC())
    //   }
    // }
    return ( //--> <a> --> www.reddit.com --> server.js '/auth' + код --> запрос токена --> ответ --> html шаблон window.__token__ --> App
    react_1.default.createElement("a", { href: token !== '' ? profileData.profileUrl : authUrl, className: userBlock_css_1.default.userBox, target: token !== '' ? "_blank" : '' },
        react_1.default.createElement("div", { className: userBlock_css_1.default.avatarBox }, profileData.avaUrl
            ? react_1.default.createElement("img", { className: userBlock_css_1.default.avatarImg, src: profileData.avaUrl, alt: "user avatar" })
            : react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.anonymous, size: 28 })),
        react_1.default.createElement("div", { className: userBlock_css_1.default.username },
            react_1.default.createElement(Break_1.Break, { size: 12 }),
            isLoading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: EColors_1.EColors.grayC4 }, "Loading...")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: name ? EColors_1.EColors.black : EColors_1.EColors.grayC4 }, profileData.name || 'Аноним')))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userBlock__userBox--3k5CX",
	"avatarBox": "userBlock__avatarBox--3g0nu",
	"avatarImg": "userBlock__avatarImg--3oMVr",
	"username": "userBlock__username--VaiZ9",
	"avatarText": "userBlock__avatarText--2IctV"
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(130), exports);


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var searchblock_css_1 = __importDefault(__webpack_require__(131));
var Break_1 = __webpack_require__(3);
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
var react_redux_1 = __webpack_require__(1);
var actions_1 = __webpack_require__(11);
function SearchBlock() {
    var tokenFromStore = react_redux_1.useSelector(function (state) { return state.token; }); //defaultValue={`storeToken: ${tokenFromStore}`}
    var dispatch = react_redux_1.useDispatch();
    function handleChange(event) {
        dispatch(actions_1.updateSearchAC(event.target.value));
    }
    return (react_1.default.createElement("div", { className: searchblock_css_1.default.searchBlock },
        react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.search }),
        react_1.default.createElement(Break_1.Break, { size: 4, tabletSize: 12 }),
        react_1.default.createElement("input", { placeholder: 'поиск', onChange: handleChange })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--3vTjO"
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(133), exports);


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sortblock_css_1 = __importDefault(__webpack_require__(134));
var Dropdown_1 = __webpack_require__(9);
var MenuButton_1 = __webpack_require__(10);
var EIcons_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(4);
var react_redux_1 = __webpack_require__(1);
var Text_1 = __webpack_require__(5);
var Break_1 = __webpack_require__(3);
var react_router_dom_1 = __webpack_require__(8);
var EColors_1 = __webpack_require__(7);
function SortBlock() {
    var bookmark = react_redux_1.useSelector(function (state) { return state.bookmark; });
    var history = react_router_dom_1.useHistory();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: sortblock_css_1.default.buttonText },
                    bookmark === 'Просмотренное' && react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.eye, size: 10, tabletSize: 14, desktopSize: 16 }),
                    bookmark === 'Сохраненное' && react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.save, size: 10, tabletSize: 14, desktopSize: 16 }),
                    bookmark === 'Прокомментированное' && react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.comment, size: 10, tabletSize: 14, desktopSize: 16 }),
                    bookmark === 'Мои посты' && react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.pencil, size: 10, tabletSize: 14, desktopSize: 16 }),
                    react_1.default.createElement(Break_1.Break, { size: 4, tabletSize: 8, desktopSize: 8 }),
                    react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 20, desktopSize: 20 }, bookmark),
                    react_1.default.createElement(Break_1.Break, { size: 4, tabletSize: 8, desktopSize: 8 }))), classNameContainer: sortblock_css_1.default.sortBlockContainerMobile, classNameButton: sortblock_css_1.default.button, arrowIcon: react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.arrow, size: 12 }), classNameChildrenContainer: sortblock_css_1.default.dropdownWrapper, local: true },
            react_1.default.createElement("div", { className: sortblock_css_1.default.dropdownContainer },
                react_1.default.createElement("div", { className: sortblock_css_1.default.dropdownButtonsContainer },
                    bookmark !== 'Просмотренное' && react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Просмотренное', icon: EIcons_1.EIcons.eye, className: sortblock_css_1.default.actionButton, onClick: function () { return history.push("/seen"); } }),
                    bookmark !== 'Сохраненное' && react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Сохраненное', icon: EIcons_1.EIcons.save, className: sortblock_css_1.default.actionButton, onClick: function () { return history.push("/saved"); } }),
                    bookmark !== 'Прокомментированное' && react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Прокомментированное', icon: EIcons_1.EIcons.comment, className: sortblock_css_1.default.actionButton, onClick: function () { return history.push("/commented"); } }),
                    bookmark !== 'Мои посты' && react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Мои посты', icon: EIcons_1.EIcons.pencil, className: sortblock_css_1.default.actionButton, onClick: function () { return history.push("/myposts"); } })),
                react_1.default.createElement("button", { className: sortblock_css_1.default.dropdownCloseButton },
                    react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))),
        react_1.default.createElement("nav", { className: sortblock_css_1.default.sortBlockContainerDesktop },
            react_1.default.createElement("div", { className: sortblock_css_1.default.body },
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/seen", activeClassName: sortblock_css_1.default.active, className: sortblock_css_1.default.link },
                    react_1.default.createElement(Text_1.Text, { size: 20, color: EColors_1.EColors.black }, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u043E\u0435")),
                react_1.default.createElement(Break_1.Break, { size: 30 }),
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/saved", activeClassName: sortblock_css_1.default.active, className: sortblock_css_1.default.link },
                    react_1.default.createElement(Text_1.Text, { size: 20, color: EColors_1.EColors.black }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u043E\u0435")),
                react_1.default.createElement(Break_1.Break, { size: 30 }),
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/myposts", activeClassName: sortblock_css_1.default.active, className: sortblock_css_1.default.link },
                    react_1.default.createElement(Text_1.Text, { size: 20, color: EColors_1.EColors.black }, "\u041C\u043E\u0438 \u043F\u043E\u0441\u0442\u044B")),
                react_1.default.createElement(Break_1.Break, { size: 30 }),
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/commented", activeClassName: sortblock_css_1.default.active, className: sortblock_css_1.default.link },
                    react_1.default.createElement(Text_1.Text, { size: 20, color: EColors_1.EColors.black }, "\u041F\u0440\u043E\u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435"))))));
}
exports.SortBlock = SortBlock;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortBlockContainerMobile": "sortblock__sortBlockContainerMobile--3o6r1",
	"button": "sortblock__button--LC8p9",
	"buttonText": "sortblock__buttonText--3AXlt",
	"dropdownWrapper": "sortblock__dropdownWrapper--3vAMN",
	"dropdownContainer": "sortblock__dropdownContainer--1prx8",
	"dropdownButtonsContainer": "sortblock__dropdownButtonsContainer--KuIbd",
	"actionButton": "sortblock__actionButton--3TTSU",
	"dropdownCloseButton": "sortblock__dropdownCloseButton--31tp4",
	"closeButton": "sortblock__closeButton--2h6aV",
	"sortBlockContainerDesktop": "sortblock__sortBlockContainerDesktop--2Blbd",
	"body": "sortblock__body--3g9Ju",
	"link": "sortblock__link--qaf-3",
	"active": "sortblock__active--3AoLx"
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(136), exports);


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var title_css_1 = __importDefault(__webpack_require__(137));
var SourceDrop_1 = __webpack_require__(138);
var react_redux_1 = __webpack_require__(1);
function Title() {
    var isPrivate = react_redux_1.useSelector(function (state) { return state.isPrivate; });
    return (react_1.default.createElement("div", { className: title_css_1.default.threadContainer },
        react_1.default.createElement("div", { className: title_css_1.default.titleContainer },
            react_1.default.createElement("h1", { className: title_css_1.default.threadTitle }, isPrivate ? 'Личный кабинет' : 'Дискуссии')),
        !isPrivate && react_1.default.createElement(SourceDrop_1.SourceDrop, null)));
}
exports.Title = Title;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"titleContainer": "title__titleContainer--3bKr4",
	"threadTitle": "title__threadTitle--3f4jR",
	"threadContainer": "title__threadContainer--1fuM2"
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(139), exports);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceDrop = void 0;
var sourceDrop_css_1 = __importDefault(__webpack_require__(140));
var Dropdown_1 = __webpack_require__(9);
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
var react_1 = __importDefault(__webpack_require__(0));
var Break_1 = __webpack_require__(3);
var Text_1 = __webpack_require__(5);
var MenuButton_1 = __webpack_require__(10);
var react_redux_1 = __webpack_require__(1);
var postsActions_1 = __webpack_require__(6);
function SourceDrop() {
    var dispatch = react_redux_1.useDispatch();
    var source = react_redux_1.useSelector(function (state) { return state.posts.source; });
    var handleClick = function (source) {
        dispatch(postsActions_1.setSourceAC(source));
    };
    return (react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: sourceDrop_css_1.default.buttonText },
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.rocket, size: 10, tabletSize: 14, desktopSize: 16 }),
                react_1.default.createElement(Break_1.Break, { size: 4, tabletSize: 8, desktopSize: 8 }),
                react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 20, desktopSize: 20 },
                    source === 'best' && 'Лучшие',
                    source === 'r/popular' && 'Популярные',
                    source === 'top' && 'Toп',
                    source === 'rising' && 'Трендовые'),
                react_1.default.createElement(Break_1.Break, { size: 4, tabletSize: 8, desktopSize: 8 }))), classNameButton: sourceDrop_css_1.default.button, classNameChildrenContainer: sourceDrop_css_1.default.dropdownWrapper, arrowIcon: react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.arrow, size: 12 }), local: true },
        react_1.default.createElement("div", { className: sourceDrop_css_1.default.dropdownContainer },
            react_1.default.createElement("div", { className: sourceDrop_css_1.default.dropdownButtonsContainer },
                source !== 'best' && react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Лучшие', className: sourceDrop_css_1.default.actionButton, onClick: function () { return handleClick('best'); } }),
                source !== 'r/popular' && react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Популярные', className: sourceDrop_css_1.default.actionButton, onClick: function () { return handleClick('r/popular'); } }),
                source !== 'top' && react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Топ', className: sourceDrop_css_1.default.actionButton, onClick: function () { return handleClick('top'); } }),
                source !== 'rising' && react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Трендовые', className: sourceDrop_css_1.default.actionButton, onClick: function () { return handleClick('rising'); } })),
            react_1.default.createElement("button", { className: sourceDrop_css_1.default.dropdownCloseButton },
                react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))));
}
exports.SourceDrop = SourceDrop;
// return (//dropdown гемор с позиционированием -> ручная сборка без него.
//   <div className={styles.wrapper}>
//     <button className={styles.buttonContainer} style={{borderRadius:isOpen?`7px 7px 0 0`: '7px'}} onClick={()=>setIsOpen(!isOpen)}>
//       <div className={styles.buttonText}>
//         <Icon name={EIcons.rocket} size={10} tabletSize={14} desktopSize={16}/>
//         <Break size={4} tabletSize={8} desktopSize={8}/>
//         <Text size={12} tabletSize={20} desktopSize={20}>
//           {source === 'best' && 'Лучшие'}
//           {source === 'r/popular' && 'Популярные'}
//           {source === 'top' && 'Toп'}
//           {source === 'rising' && 'Трендовые'}
//         </Text>
//         <Break size={4} tabletSize={8} desktopSize={8}/>
//       </div>
//       {isOpen
//         ?
//         <div style={{transform:'rotate(0deg)'}}>
//           <Icon name={EIcons.arrow} size={12} />
//         </div>
//         :
//         <div style={{transform:'rotate(180deg)'}}>
//           <Icon name={EIcons.arrow} size={12}/>
//         </div>
//       }
//
//     </button>
//     {isOpen &&(
//       <div className={styles.dropdownWrapper}>
//         <div className={styles.dropdownContainer}>
//           <div className={styles.dropdownButtonsContainer}>
//             {source !=='best' && <MenuButton text={'Лучшие'}  className={styles.actionButton} onClick={()=>handleClick('best')}/>}
//             {source !=='r/popular' && <MenuButton text={'Популярные'}  className={styles.actionButton} onClick={()=>handleClick('r/popular')}/>}
//             {source !=='top' && <MenuButton text={'Топ'}  className={styles.actionButton} onClick={()=>handleClick('top')}/>}
//             {source !=='rising' && <MenuButton text={'Трендовые'}  className={styles.actionButton} onClick={()=>handleClick('rising')}/>}
//           </div>
//           <button className={styles.dropdownCloseButton} onClick={()=>setIsOpen(false)}>
//             <Text size={14} mobileSize={12} >
//               Закрыть
//             </Text>
//           </button>
//         </div>
//       </div>
//     )}
//   </div>
// )


/***/ }),
/* 140 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "sourceDrop__button--1sp27",
	"buttonText": "sourceDrop__buttonText--1Jrq3",
	"dropdownWrapper": "sourceDrop__dropdownWrapper--CQb1U",
	"dropdownContainer": "sourceDrop__dropdownContainer--12oMR",
	"dropdownButtonsContainer": "sourceDrop__dropdownButtonsContainer--3nHve",
	"actionButton": "sourceDrop__actionButton--hg2yC",
	"dropdownCloseButton": "sourceDrop__dropdownCloseButton--2NKMI"
};


/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var profileActions_1 = __webpack_require__(16);
var profileReducer_1 = __webpack_require__(145);
var actions_1 = __webpack_require__(11);
var initialState_1 = __webpack_require__(146);
var timeoutTestActions_1 = __webpack_require__(22);
var timeoutTestReducer_1 = __webpack_require__(147);
var postsActions_1 = __webpack_require__(6);
var commentsActions_1 = __webpack_require__(15);
var postsReducer_1 = __webpack_require__(148);
var commentsReducer_1 = __webpack_require__(149);
exports.rootReducer = function (state, action) {
    if (state === void 0) { state = initialState_1.initialState; }
    switch (action.type) {
        case actions_1.SET_TOKEN:
            return __assign(__assign({}, state), { token: action.token, isAuth: true });
        case actions_1.UPDATE_COMMENT:
            return __assign(__assign({}, state), { commentForm: action.comment });
        case actions_1.UPDATE_SEARCH:
            return __assign(__assign({}, state), { searchInput: action.value });
        case actions_1.SUBMIT_COMMENT:
            return __assign(__assign({}, state), { commentForm: '' });
        case actions_1.TOGGLE_ROOM:
            return __assign(__assign({}, state), { isPrivate: !state.isPrivate });
        case actions_1.OPEN_POST:
            var post = state.posts.list.find(function (item) { return item.id === action.postId; });
            return __assign(__assign({}, state), { postModal: post });
        case actions_1.OPEN_ANSWER:
            var comment = state.comments.list.find(function (item) { return item.id === action.commentId; });
            return __assign(__assign({}, state), { commentModal: comment, isAnswerOpen: true });
        case actions_1.CLOSE_ANSWER:
            return __assign(__assign({}, state), { isAnswerOpen: false });
        case profileActions_1.PROFILE_REQUEST:
        case profileActions_1.PROFILE_REQUEST_SUCCESS:
        case profileActions_1.PROFILE_REQUEST_ERROR:
            return __assign(__assign({}, state), { profile: profileReducer_1.profileReducer(state.profile, action) });
        case commentsActions_1.COMMENTS_REQUEST:
        case commentsActions_1.COMMENTS_REQUEST_SUCCESS:
        case commentsActions_1.COMMENTS_REQUEST_ERROR:
            return __assign(__assign({}, state), { comments: commentsReducer_1.commentsReducer(state.comments, action) });
        case postsActions_1.POSTLIST_REQUEST:
        case postsActions_1.POSTLIST_REQUEST_SUCCESS:
        case postsActions_1.POSTLIST_REQUEST_ERROR:
        case postsActions_1.POST_TOGGLE_SAVE:
        case postsActions_1.POST_SEEN:
        case postsActions_1.POSTCARD_TOGGLE_VISIBLE:
        case postsActions_1.SET_SOURCE:
            return __assign(__assign({}, state), { posts: postsReducer_1.postsReducer(state.posts, action) });
        case timeoutTestActions_1.SET_TIMEOUT_TEST:
        case timeoutTestActions_1.TIMEOUT_TEST_SUCCESS:
            return timeoutTestReducer_1.timeoutTestReducer(state, action);
        default:
            return state;
    }
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileReducer = void 0;
var profileActions_1 = __webpack_require__(16);
exports.profileReducer = function (state, action) {
    switch (action.type) {
        case profileActions_1.PROFILE_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case profileActions_1.PROFILE_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { data: action.data, loading: false, isAuth: true });
        case profileActions_1.PROFILE_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        default:
            return state;
    }
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
//---------------------------------------------------------------------------------------
exports.initialState = {
    token: '',
    isAuth: false,
    bookmark: 'Просмотренное',
    isPrivate: false,
    timeout: false,
    commentForm: '',
    searchInput: '',
    savedPosts: [],
    myPosts: [],
    seenPosts: [],
    commentedPosts: [],
    postModal: {
        author: '',
        id: '',
        created: '',
        avatar: '',
        title: '',
        karma: 0,
        commentsAmount: 0,
        isSaved: false,
        isMyPost: false,
        isCommented: false,
        isSeen: false,
        isVisible: true,
        preview2: '',
        url: '',
        score: 0,
        subreddit: '',
        thumbnail: '',
        permalink: '',
    },
    commentModal: {
        commentId: '',
        author: '',
        created: '',
        avatar: '',
        body: '',
    },
    isAnswerOpen: false,
    profile: {
        loading: false,
        error: '',
        data: {
            id: '',
            name: 'Аноним',
            avaUrl: '',
            profileUrl: '',
            inbox_count: 0,
        },
    },
    posts: {
        list: [],
        after: '',
        isLoading: false,
        source: 'best',
    },
    comments: {
        isLoading: false,
        list: []
    },
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeoutTestReducer = void 0;
var timeoutTestActions_1 = __webpack_require__(22);
exports.timeoutTestReducer = function (state, action) {
    switch (action.type) {
        case timeoutTestActions_1.SET_TIMEOUT_TEST:
            return __assign(__assign({}, state), { timeout: true });
        case timeoutTestActions_1.TIMEOUT_TEST_SUCCESS:
            return __assign(__assign({}, state), { timeout: false });
        default:
            return state;
    }
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsReducer = void 0;
var postsActions_1 = __webpack_require__(6);
exports.postsReducer = function (state, action) {
    switch (action.type) {
        case postsActions_1.POSTLIST_REQUEST:
            return __assign(__assign({}, state), { isLoading: true });
        case postsActions_1.SET_SOURCE:
            return __assign(__assign({}, state), { source: action.source, list: [] });
        case postsActions_1.POSTLIST_REQUEST_SUCCESS:
            //фильтрация от повторов
            var newListHasPreview = action.listArr.filter(function (item) { return item.thumbnail.includes('jpg' || false); });
            var existingIds_1 = state.list.map(function (item) { return item.id; }); //достать все айди из существующего списка.(для простоты перебора в some)
            var newFilteredList = newListHasPreview.filter(function (item) {
                return ( //true/false
                !existingIds_1.some(//true/false. Проверяется весь массив значений на определенное значение. (Если хоть 1 id из массива содержит id нового списка -> не содержит*)
                function () { return existingIds_1.includes(item.id); } // элемент массива равен айди перебираемого обьекта
                ));
            });
            return __assign(__assign({}, state), { list: state.list.concat(newFilteredList), isLoading: false, after: action.after });
        case postsActions_1.POSTLIST_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, isLoading: false });
        case postsActions_1.POST_TOGGLE_SAVE:
            return __assign(__assign({}, state), { list: state.list.map(function (item) {
                    if (item.id === action.id) {
                        item.isSaved = !item.isSaved;
                    }
                    return item;
                }) });
        case postsActions_1.POST_SEEN:
            return __assign(__assign({}, state), { list: state.list.map(function (item) {
                    if (item.id === action.id) {
                        item.isSeen = true;
                    }
                    return item;
                }) });
        case postsActions_1.POSTCARD_TOGGLE_VISIBLE:
            return __assign(__assign({}, state), { 
                // list: state.list.map((item:IPost)=>{//map оставляет паддинги, нужно менять стили карточек
                //   if(item.id === action.id){
                //     item.isVisible = !item.isVisible
                //   }
                list: state.list.filter(function (item) { return item.id !== action.id; }) //пока сделал чтоб удалялось
             });
        default:
            return state;
    }
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsReducer = void 0;
var commentsActions_1 = __webpack_require__(15);
exports.commentsReducer = function (state, action) {
    switch (action.type) {
        case commentsActions_1.COMMENTS_REQUEST:
            return __assign(__assign({}, state), { isLoading: true });
        case commentsActions_1.COMMENTS_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { list: action.filteredDataArr, isLoading: false });
        case commentsActions_1.COMMENTS_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, isLoading: false });
        default:
            return state;
    }
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(151), exports);


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModal = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Portal_1 = __webpack_require__(18);
var PostFull_1 = __webpack_require__(152);
function PostModal() {
    return (react_1.default.createElement(Portal_1.Portal, { children: react_1.default.createElement(PostFull_1.PostFull, null) }));
}
exports.PostModal = PostModal;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(153), exports);


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostFull = void 0;
var react_1 = __importStar(__webpack_require__(0));
var postFull_css_1 = __importDefault(__webpack_require__(154));
var ActionsPanel_tsx_1 = __webpack_require__(155);
var SortingPanel_tsx_1 = __webpack_require__(158);
var ModeratorDelete_1 = __webpack_require__(161);
var HeaderModal_1 = __webpack_require__(164);
var MainBodyModal_1 = __webpack_require__(175);
var CommentsFullModal_1 = __webpack_require__(178);
var Break_1 = __webpack_require__(3);
var CommentFormContainer_1 = __webpack_require__(193);
var scrollBlocker_1 = __webpack_require__(194);
var react_router_dom_1 = __webpack_require__(8);
var useOutsideClick_1 = __webpack_require__(19);
var ExitButtonModal_1 = __webpack_require__(195);
function PostFull() {
    react_1.useEffect(function () {
        // disableBodyScroll()// disableBodyScroll({ savePosition: true }) для сохранения позиции (импю для меню)
        scrollBlocker_1.hiddenBodyScroll();
        console.log('scroll blocked');
        return function () {
            // enableBodyScroll()
            scrollBlocker_1.visibleBodyScroll();
            console.log('scroll unlocked');
        };
    }, []);
    //--------для клика снаружи----------
    var history = react_router_dom_1.useHistory();
    var ref = react_1.useRef(null);
    useOutsideClick_1.useOutsideClick(ref, function () { history.push('/'); });
    //-----------------------------------
    return (react_1.default.createElement("section", { className: postFull_css_1.default.postFullBackside },
        react_1.default.createElement("div", { className: postFull_css_1.default.postFullContainer, ref: ref },
            react_1.default.createElement(HeaderModal_1.HeaderModal, null),
            react_1.default.createElement(MainBodyModal_1.MainBodyModal, null),
            react_1.default.createElement(Break_1.Break, { size: 20, top: true }),
            react_1.default.createElement("div", { style: { borderTop: '1px solid var(--grayD9)' } }),
            react_1.default.createElement(ActionsPanel_tsx_1.ActionsPanel, null),
            react_1.default.createElement(Break_1.Break, { size: 12, top: true }),
            react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),
            react_1.default.createElement(SortingPanel_tsx_1.SortingPanel, null),
            react_1.default.createElement("div", { style: { borderTop: '1px solid var(--grayD9)' } }),
            react_1.default.createElement(Break_1.Break, { size: 40 }),
            react_1.default.createElement(CommentsFullModal_1.CommentsList, null),
            react_1.default.createElement(ModeratorDelete_1.ModeratorDelete, null),
            react_1.default.createElement(ExitButtonModal_1.ExitButtonModal, { onClose: function () { return history.push('/'); } }))));
}
exports.PostFull = PostFull;


/***/ }),
/* 154 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"postFullBackside": "postFull__postFullBackside--2E5R2",
	"postFullContainer": "postFull__postFullContainer--3Hm_c"
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(156), exports);


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsPanel = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var ActionsPanel_css_1 = __importDefault(__webpack_require__(157));
var EIcons_1 = __webpack_require__(2);
var MenuButton_1 = __webpack_require__(10);
var postsActions_1 = __webpack_require__(6);
var react_redux_1 = __webpack_require__(1);
var react_router_dom_1 = __webpack_require__(8);
function ActionsPanel() {
    var dispatch = react_redux_1.useDispatch();
    var postId = react_redux_1.useSelector(function (state) { return state.postModal.id; });
    var history = react_router_dom_1.useHistory();
    return (react_1.default.createElement("div", { className: ActionsPanel_css_1.default.actionsContainer },
        react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Поделиться', icon: EIcons_1.EIcons.share, size: 10, onClick: function () { return console.log('Поделиться pressed'); }, className: ActionsPanel_css_1.default.menuSubButton, tabletSize: 12, desktopSize: 14 }),
        react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Скрыть', icon: EIcons_1.EIcons.block, size: 10, onClick: function () { dispatch(postsActions_1.postCardToggleVisibleAC(postId)), history.push('/'); }, className: ActionsPanel_css_1.default.menuSubButton, tabletSize: 12, desktopSize: 14 }),
        react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Сохранить', icon: EIcons_1.EIcons.save, size: 10, onClick: function () { return dispatch(postsActions_1.postToggleSaveAC(postId)); }, className: ActionsPanel_css_1.default.menuSubButton, tabletSize: 12, desktopSize: 14 }),
        react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Пожаловаться', icon: EIcons_1.EIcons.warning, size: 10, className: ActionsPanel_css_1.default.menuSubButton, tabletSize: 12, desktopSize: 14 })));
}
exports.ActionsPanel = ActionsPanel;


/***/ }),
/* 157 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"actionsContainer": "ActionsPanel__actionsContainer--25j8E",
	"menuSubButton": "ActionsPanel__menuSubButton--2zn7u"
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(159), exports);


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortingPanel = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sortingPanel_css_1 = __importDefault(__webpack_require__(160));
var Dropdown_1 = __webpack_require__(9);
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
function SortingPanel() {
    return (react_1.default.createElement("div", { className: sortingPanel_css_1.default.container },
        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement("button", { className: sortingPanel_css_1.default.button },
                react_1.default.createElement("span", null, "\u041B\u0443\u0447\u0448\u0438\u0435"),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.arrow })) },
            react_1.default.createElement("div", { className: sortingPanel_css_1.default.dropdown }, "some best list"))));
}
exports.SortingPanel = SortingPanel;


/***/ }),
/* 160 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "sortingPanel__container--2jFyZ",
	"button": "sortingPanel__button--1vAuu",
	"dropdown": "sortingPanel__dropdown--1cVHN"
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(162), exports);


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeratorDelete = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var moderatordelete_css_1 = __importDefault(__webpack_require__(163));
function ModeratorDelete() {
    return (react_1.default.createElement("div", { className: moderatordelete_css_1.default.container },
        react_1.default.createElement("span", null, "+"),
        "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0431\u044B\u043B \u0441\u043A\u0440\u044B\u0442 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C 4 \u0447\u0430\u0441\u0430 \u043D\u0430\u0437\u0430\u0434"));
}
exports.ModeratorDelete = ModeratorDelete;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "moderatordelete__container--2LbeI"
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(165), exports);


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderModal = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var headerModal_css_1 = __importDefault(__webpack_require__(166));
var KarmaCounter_1 = __webpack_require__(167);
var HeaderTextBlock_1 = __webpack_require__(170);
function HeaderModal() {
    return (react_1.default.createElement("div", { className: headerModal_css_1.default.container },
        react_1.default.createElement(KarmaCounter_1.KarmaCounter, null),
        react_1.default.createElement(HeaderTextBlock_1.HeaderTextBlock, null)));
}
exports.HeaderModal = HeaderModal;


/***/ }),
/* 166 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "headerModal__container--pTHMi"
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(168), exports);


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KarmaCounter = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var karmacounter_css_1 = __importDefault(__webpack_require__(169));
var Icons_1 = __webpack_require__(13);
var Break_1 = __webpack_require__(3);
var react_redux_1 = __webpack_require__(1);
function KarmaCounter() {
    var post = react_redux_1.useSelector(function (state) { return state.postModal; });
    return (react_1.default.createElement("div", { className: karmacounter_css_1.default.container },
        react_1.default.createElement("button", { className: karmacounter_css_1.default.up },
            react_1.default.createElement(Icons_1.ArrowFilledIcon, null)),
        react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),
        react_1.default.createElement("span", { className: karmacounter_css_1.default.value }, post.score),
        react_1.default.createElement(Break_1.Break, { size: 8, inline: true }),
        react_1.default.createElement("button", { className: karmacounter_css_1.default.down },
            react_1.default.createElement(Icons_1.ArrowFilledIcon, null))));
}
exports.KarmaCounter = KarmaCounter;


/***/ }),
/* 169 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "karmacounter__container--2qukM",
	"down": "karmacounter__down--3JU2Y",
	"value": "karmacounter__value--O0kRv",
	"up": "karmacounter__up--3LIyG"
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(171), exports);


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderTextBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var headertextblock_css_1 = __importDefault(__webpack_require__(172));
var HeaderMeta_1 = __webpack_require__(23);
var react_redux_1 = __webpack_require__(1);
function HeaderTextBlock() {
    var post = react_redux_1.useSelector(function (state) { return state.postModal; });
    return (react_1.default.createElement("div", { className: headertextblock_css_1.default.container },
        react_1.default.createElement("h2", null, post.title),
        react_1.default.createElement(HeaderMeta_1.HeaderMeta, { name: post.author, subreddit: post.subreddit, avatar: post.avatar, created: post.created })));
}
exports.HeaderTextBlock = HeaderTextBlock;


/***/ }),
/* 172 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "headertextblock__container--2gpBL"
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderMeta = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var headermeta_css_1 = __importDefault(__webpack_require__(174));
function HeaderMeta(_a) {
    var avatar = _a.avatar, subreddit = _a.subreddit, name = _a.name, created = _a.created;
    return (react_1.default.createElement("div", { className: headermeta_css_1.default.headerMetaContainer },
        react_1.default.createElement("span", { className: headermeta_css_1.default.publishedAgoText },
            "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E ",
            created),
        react_1.default.createElement("div", { className: headermeta_css_1.default.nameContainer },
            react_1.default.createElement("img", { className: headermeta_css_1.default.avatarImg, src: avatar || "https://c7.uihere.com/files/54/214/491/rick-sanchez-morty-smith-rick-and-morty-season-1-adult-swim-rick-and-morty.jpg", alt: "avatar" }),
            react_1.default.createElement("span", { className: headermeta_css_1.default.name }, name)),
        react_1.default.createElement("span", { className: headermeta_css_1.default.theme }, subreddit)));
}
exports.HeaderMeta = HeaderMeta;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerMetaContainer": "headermeta__headerMetaContainer--20Q_0",
	"nameContainer": "headermeta__nameContainer--2wQIX",
	"avaNameContainer": "headermeta__avaNameContainer--3cSRA",
	"avatarImg": "headermeta__avatarImg---SDiI",
	"name": "headermeta__name--2Luk8",
	"publishedAgoText": "headermeta__publishedAgoText--1Wj2-",
	"theme": "headermeta__theme--2c1wE"
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(176), exports);


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainBodyModal = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var mainbodymodal_css_1 = __importDefault(__webpack_require__(177));
var react_redux_1 = __webpack_require__(1);
function MainBodyModal() {
    var post = react_redux_1.useSelector(function (state) { return state.postModal; });
    return (react_1.default.createElement("div", { className: mainbodymodal_css_1.default.container },
        react_1.default.createElement("div", { className: mainbodymodal_css_1.default.imgItem, style: { paddingTop: '30px' } },
            react_1.default.createElement("img", { src: post.url.includes('jpg' || false) ? post.url : post.thumbnail ? post.thumbnail : "https://www.thepoodisadood.com/wp-content/uploads/2017/01/pojo-placeholder-1.png", alt: "picture" }))));
}
exports.MainBodyModal = MainBodyModal;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "mainbodymodal__container--13BVN",
	"img2xContainer": "mainbodymodal__img2xContainer--3bG2u",
	"img3xContainer": "mainbodymodal__img3xContainer--1CTL1",
	"imgItem": "mainbodymodal__imgItem--1JHLF"
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(179), exports);


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentsfullmodal_css_1 = __importDefault(__webpack_require__(180));
var CommentedItem_1 = __webpack_require__(181);
var GenericList_1 = __webpack_require__(17);
var react_redux_1 = __webpack_require__(1);
function CommentsList() {
    var commentsList = react_redux_1.useSelector(function (state) { return state.comments.list; });
    console.log('commentsList got from store:', commentsList);
    return (react_1.default.createElement("ul", { className: commentsfullmodal_css_1.default.list },
        react_1.default.createElement(GenericList_1.GenericList, { list: commentsList.map(function (item) { return ({
                id: item.id,
                children: react_1.default.createElement(CommentedItem_1.CommentItem, { item: item }),
            }); }) })));
}
exports.CommentsList = CommentsList;


/***/ }),
/* 180 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "commentsfullmodal__list--pwDvg"
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(182), exports);


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentItem = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commenteditem_css_1 = __importDefault(__webpack_require__(183));
var HeaderMeta_1 = __webpack_require__(23);
var Break_1 = __webpack_require__(3);
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
var CommentActionsPanel_tsx_1 = __webpack_require__(184);
function CommentItem(_a) {
    var item = _a.item;
    return (react_1.default.createElement(react_1.default.Fragment, null, item.body && (react_1.default.createElement("div", { className: commenteditem_css_1.default.item },
        react_1.default.createElement("div", { className: commenteditem_css_1.default.visualThreadContainer },
            react_1.default.createElement("div", { className: commenteditem_css_1.default.arrows },
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.arrowFilled }),
                react_1.default.createElement(Break_1.Break, { size: 8, top: true }),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.arrowFilled })),
            react_1.default.createElement(Break_1.Break, { size: 20, top: true }),
            react_1.default.createElement("div", { className: commenteditem_css_1.default.line })),
        react_1.default.createElement("div", { className: commenteditem_css_1.default.textContainer },
            react_1.default.createElement(HeaderMeta_1.HeaderMeta, { name: item.author, subreddit: item.subreddit, avatar: item.avatar, created: item.created }),
            react_1.default.createElement("p", null, item.body),
            react_1.default.createElement(CommentActionsPanel_tsx_1.CommentActionsPanel, { item: item }),
            item.replies &&
                item.replies.data.children[0].data.body &&
                react_1.default.createElement(CommentItem, { item: item.replies.data.children[0].data }))))));
}
exports.CommentItem = CommentItem;
//из 15 модуля
// const Comment = props =>{//dumb component
//   return (
//     <li
//       className="listItem"
//       id={props.id}
//     >
//       <div className="listHeader">
//         <div className="listHeader__name">{props.name}</div>
//         <button
//           type="button"
//           className="listHeader__cross"
//           aria-label="удалить"
//           onClick={props.handleDelete}
//         >
//         </button>
//       </div>
//       <div className="listItem__text">{props.text}</div>
//       <div className="listItem__date">{props.date}</div>
//     </li>
//   );
// }


/***/ }),
/* 183 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "commenteditem__item--3JIh3",
	"visualThreadContainer": "commenteditem__visualThreadContainer--1B4Vl",
	"arrows": "commenteditem__arrows--2HDFA",
	"line": "commenteditem__line--6hc7m",
	"textContainer": "commenteditem__textContainer--2CKu7"
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(185), exports);


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentActionsPanel = void 0;
var react_1 = __importStar(__webpack_require__(0));
var CommentActionsPanel_css_1 = __importDefault(__webpack_require__(186));
var EIcons_1 = __webpack_require__(2);
var MenuButton_1 = __webpack_require__(10);
var AnswerModal_1 = __webpack_require__(187);
function CommentActionsPanel(_a) {
    var item = _a.item;
    var _b = react_1.useState(false), isAnswerOpen = _b[0], setIsAnswerOpen = _b[1];
    return (react_1.default.createElement("div", { className: CommentActionsPanel_css_1.default.actionsContainer },
        react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Ответить', onClick: function () { return setIsAnswerOpen(true); }, icon: EIcons_1.EIcons.comment, className: CommentActionsPanel_css_1.default.actionButton }),
        react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Поделиться', icon: EIcons_1.EIcons.share, className: CommentActionsPanel_css_1.default.actionButton }),
        react_1.default.createElement(MenuButton_1.MenuButton, { text: 'Пожаловаться', icon: EIcons_1.EIcons.warning, className: CommentActionsPanel_css_1.default.actionButton }),
        isAnswerOpen && (react_1.default.createElement(AnswerModal_1.AnswerModal, { item: item, onClose: function () { return setIsAnswerOpen(false); } }))));
}
exports.CommentActionsPanel = CommentActionsPanel;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"actionsContainer": "CommentActionsPanel__actionsContainer--3hu6R",
	"actionsModalBackside": "CommentActionsPanel__actionsModalBackside--2G15r",
	"actionsModalBBody": "CommentActionsPanel__actionsModalBBody--2a8PC",
	"actionButton": "CommentActionsPanel__actionButton--3oKLL",
	"actionsButton": "CommentActionsPanel__actionsButton--mxXxe"
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(188), exports);


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerModal = void 0;
var react_1 = __importStar(__webpack_require__(0));
var answerModal_css_1 = __importDefault(__webpack_require__(189));
var useOnClickOutside_1 = __webpack_require__(190);
var CommentForm_1 = __webpack_require__(24);
function AnswerModal(_a) {
    var item = _a.item, onClose = _a.onClose;
    var _b = react_1.useState(''), value = _b[0], setValue = _b[1];
    function handleChange(event) {
        setValue(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert("submitted value:\"" + value + "\", id:\"" + item.id + "\"");
        onClose();
    }
    //--------для клика снаружи-----------------------------
    var ref = react_1.useRef(null);
    useOnClickOutside_1.useOnClickOutside(ref, onClose); // или useOutsideClick
    //------------------------------------------------------
    return (react_1.default.createElement("div", { className: answerModal_css_1.default.modalContainer },
        react_1.default.createElement("div", { ref: ref },
            react_1.default.createElement(CommentForm_1.CommentForm //многоразовая форма
            , { author: item.author, value: value, onChange: handleChange, onSubmit: handleSubmit }))));
}
exports.AnswerModal = AnswerModal;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modalContainer": "answerModal__modalContainer--QxNWE"
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnClickOutside = void 0;
var react_1 = __webpack_require__(0);
function useOnClickOutside(ref, handler) {
    react_1.useEffect(function () {
        var listener = function (event) {
            // Do nothing if clicking ref"s element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return function () {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, 
    // Add ref and handler to effect dependencies
    // It"s worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It"s not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]);
}
exports.useOnClickOutside = useOnClickOutside;
// // Usage
// function Modal() {
//   // Create a ref that we add to the element for which we want to detect outside clicks
//   const ref = useRef();
//   // State for our modal
//   const [isModalOpen, setModalOpen] = useState(false);
//   // Call hook passing in the ref and a function to call on outside click
//   useOnClickOutside(ref, () => setModalOpen(false));
//
//   return (
//     <div>
//       {isModalOpen ? (
//         <div ref={ref}>
//           👋 Hey, I"m a modal. Click anywhere outside of me to close.
//         </div>
//       ) : (
//         <button onClick={() => setModalOpen(true)}>Open Modal</button>
//       )}
//     </div>
//   );
// }


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
var react_1 = __importStar(__webpack_require__(0));
var commentForm_css_1 = __importDefault(__webpack_require__(192));
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
function CommentForm(_a) {
    var author = _a.author, value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit;
    var refTextArea = react_1.useRef(null);
    react_1.useEffect(function () {
        if (refTextArea && refTextArea.current) { //избежание null ошибки
            refTextArea.current.focus();
        }
    }, []);
    return (react_1.default.createElement("form", { method: 'post', className: commentForm_css_1.default.container, onSubmit: onSubmit },
        react_1.default.createElement("textarea", { ref: refTextArea, className: commentForm_css_1.default.textArea, placeholder: author + ", \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439", value: value, onChange: onChange }),
        react_1.default.createElement("div", { className: commentForm_css_1.default.panelWithButtonContainer },
            react_1.default.createElement("div", { className: commentForm_css_1.default.instrumentsPanel },
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.arrowsLeftRight, size: 10, tabletSize: 16, desktopSize: 20 }),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.mountain, size: 10, tabletSize: 16, desktopSize: 20 }),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.paper, size: 10, tabletSize: 16, desktopSize: 20 }),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.arrowDown, size: 10, tabletSize: 16, desktopSize: 20 }),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.man, size: 10, tabletSize: 16, desktopSize: 20 }),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.arrowCircle, size: 10, tabletSize: 16, desktopSize: 20 }),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.hyperlink, size: 10, tabletSize: 16, desktopSize: 20 }),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.microphone, size: 10, tabletSize: 16, desktopSize: 20 }),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.chat, size: 10, tabletSize: 16, desktopSize: 20 }),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.pencil, size: 10, tabletSize: 16, desktopSize: 20 }),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.a, size: 10, tabletSize: 16, desktopSize: 20 }),
                react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.pdf, size: 10, tabletSize: 16, desktopSize: 20 })),
            react_1.default.createElement("button", { type: 'submit', className: commentForm_css_1.default.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))));
}
exports.CommentForm = CommentForm;


/***/ }),
/* 192 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "commentForm__container--1BJkX",
	"textContainer": "commentForm__textContainer--3jpqz",
	"textArea": "commentForm__textArea--SmJRx",
	"textaria": "commentForm__textaria--QuCDc",
	"name": "commentForm__name--3n4dq",
	"panelWithButtonContainer": "commentForm__panelWithButtonContainer--EZ7HC",
	"instrumentsPanel": "commentForm__instrumentsPanel--1iJ5R",
	"button": "commentForm__button--29-RC"
};


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFormContainer = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
var actions_1 = __webpack_require__(11);
var CommentForm_1 = __webpack_require__(24);
function CommentFormContainer() {
    var dispatch = react_redux_1.useDispatch();
    var value = react_redux_1.useSelector(function (state) { return state.commentForm; });
    var name = react_redux_1.useSelector(function (state) { return state.profile.data.name; });
    function handleChange(event) {
        dispatch(actions_1.updateCommentAC(event.target.value));
    }
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(actions_1.submitCommentThunk());
    }
    return (react_1.default.createElement(CommentForm_1.CommentForm, { author: name, value: value, onChange: handleChange, onSubmit: handleSubmit }));
}
exports.CommentFormContainer = CommentFormContainer;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.visibleBodyScroll = exports.hiddenBodyScroll = exports.disableBodyScroll = exports.enableBodyScroll = void 0;
function enableBodyScroll() {
    if (document.readyState === 'complete') {
        document.body.style.position = '';
        document.body.style.overflowY = '';
        // document.body.style.overflowY = 'unset';
        if (document.body.style.marginTop) {
            var scrollTop = -parseInt(document.body.style.marginTop, 10);
            document.body.style.marginTop = '';
            window.scrollTo(window.pageXOffset, scrollTop);
        }
    }
    else {
        window.addEventListener('load', enableBodyScroll);
    }
}
exports.enableBodyScroll = enableBodyScroll;
function disableBodyScroll(_a) {
    var _b = (_a === void 0 ? {} : _a).savePosition, savePosition = _b === void 0 ? false : _b;
    if (document.readyState === 'complete') {
        if (document.body.scrollHeight > window.innerHeight) {
            if (savePosition)
                document.body.style.marginTop = "-" + window.pageYOffset + "px";
            document.body.style.position = 'fixed';
            document.body.style.overflowY = 'scroll';
            // document.body.style.overflowY = 'hidden';
        }
    }
    else {
        window.addEventListener('load', function () { return disableBodyScroll({ savePosition: savePosition }); });
    }
}
exports.disableBodyScroll = disableBodyScroll;
function hiddenBodyScroll() {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
}
exports.hiddenBodyScroll = hiddenBodyScroll;
function visibleBodyScroll() {
    document.getElementsByTagName('body')[0].style.overflowY = 'unset'; // или visible - default for the css property
}
exports.visibleBodyScroll = visibleBodyScroll;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(196), exports);


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitButtonModal = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var exitbuttonmodal_css_1 = __importDefault(__webpack_require__(197));
var Icon_1 = __webpack_require__(4);
var EIcons_1 = __webpack_require__(2);
function ExitButtonModal(props) {
    return (react_1.default.createElement("button", { className: exitbuttonmodal_css_1.default.container, onClick: function () { return props.onClose(); } },
        react_1.default.createElement(Icon_1.Icon, { name: EIcons_1.EIcons.cross, size: 20 })));
}
exports.ExitButtonModal = ExitButtonModal;


/***/ }),
/* 197 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "exitbuttonmodal__container--1lm6B"
};


/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })
/******/ ]);