module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: authSuccess, authFail, getCv, createPortfolio, getPortfolios, getAllBlogs, getBlogById, getBlogBySlug, getMyBlogs, saveBlog, updateBlog, deleteBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSuccess", function() { return authSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFail", function() { return authFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCv", function() { return getCv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortfolio", function() { return createPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPortfolios", function() { return getPortfolios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBlogs", function() { return getAllBlogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogById", function() { return getBlogById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogBySlug", function() { return getBlogBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyBlogs", function() { return getMyBlogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBlog", function() { return saveBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlog", function() { return updateBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBlog", function() { return deleteBlog; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./actions/types.js");



var axiosService = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: '/api/v1',
  timeout: 2000
});

var setAuthHeader = function setAuthHeader() {
  var token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.getJSON('jwt');

  if (token) {
    return {
      headers: {
        'Authorization': "Bearer ".concat(token)
      }
    };
  }

  return null;
};

var extractUrl = function extractUrl(req) {
  return req ? "".concat(req.protocol, "://").concat(req.get('Host'), "/api/v1") : '';
}; //---------------------- AUTH ----------------------------


var authSuccess = function authSuccess(user) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["AUTH_SUCCESS"],
    user: user
  };
};
var authFail = function authFail() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["AUTH_FAIL"]
  };
}; //---------------------- CV ----------------------------

var getCv = function getCv(req) {
  var url = req ? "".concat(req.protocol, "://").concat(req.get('Host')) : '';
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(url, "/jerga_cv.pdf")).then(function (response) {
    return response.data;
  });
}; //---------------------- PORTFOLIOS ----------------------------

var createPortfolio = function createPortfolio(portfolio) {
  return axiosService.post('/portfolios', portfolio, setAuthHeader());
};
var getPortfolios = function getPortfolios(req) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(extractUrl(req), "/api/v1/portfolios")).then(function (response) {
    return response.data;
  }).catch(function (_ref) {
    var response = _ref.response;
    return response.data;
  });
}; //---------------------- BLOGS ----------------------------

var getAllBlogs = function getAllBlogs(req) {
  return axiosService.get("".concat(extractUrl(req), "/blogs")).then(function (response) {
    return response.data;
  });
}; // export const getAllBlogsServer = (url) => {
//   return axiosService.get(`${url}/api/v1/blogs`).then(response => response.data);
// }

var getBlogById = function getBlogById(userId) {
  return axiosService.get("/blogs/me/".concat(userId), setAuthHeader()).then(function (response) {
    return response.data;
  });
};
var getBlogBySlug = function getBlogBySlug(req, slug) {
  return axiosService.get("".concat(extractUrl(req), "/blogs/").concat(slug), setAuthHeader()).then(function (response) {
    return response.data;
  });
}; // export const getBlogBySlugServer = (req) => {
//   return axiosService.get(`${url}/api/v1/blogs/${slug}`, setAuthHeader()).then(response => response.data);
// }

var getMyBlogs = function getMyBlogs() {
  return axiosService.get("/blogs/me", setAuthHeader()).then(function (response) {
    return response.data;
  });
};
var saveBlog = function saveBlog(blog) {
  if (blog._id) {
    return axiosService.patch("/blogs/".concat(blog._id), blog, setAuthHeader());
  }

  return axiosService.post('/blogs/new', blog, setAuthHeader()).then(function (res) {
    return res.data.blog;
  });
};
var updateBlog = function updateBlog(blog) {
  return axiosService.patch("/blogs/".concat(blog._id), blog, setAuthHeader());
};
var deleteBlog = function deleteBlog(blogId) {
  return axiosService.delete("/blogs/".concat(blogId), setAuthHeader());
};

/***/ }),

/***/ "./actions/types.js":
/*!**************************!*\
  !*** ./actions/types.js ***!
  \**************************/
/*! exports provided: AUTH_SUCCESS, AUTH_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SUCCESS", function() { return AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_FAIL", function() { return AUTH_FAIL; });
var AUTH_SUCCESS = 'AUTH_SUCCESS';
var AUTH_FAIL = 'AUTH_FAIL';

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/fontawesome.css":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/fontawesome.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/Auth */ "./services/Auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_fontawesome_free_css_fontawesome_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/fontawesome.css */ "./node_modules/@fortawesome/fontawesome-free/css/fontawesome.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_fontawesome_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_fontawesome_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions */ "./actions/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faStroopwafel"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faPlusCircle"]);
var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_reducers__WEBPACK_IMPORTED_MODULE_6__["initializeStore"])(initialState || {});
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_reducers__WEBPACK_IMPORTED_MODULE_6__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  _createClass(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, req, pageProps, reduxStore, loggedInUser;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx, req = _ref.ctx.req;
                pageProps = {};
                reduxStore = getOrCreateStore();

                if (!process.browser) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return _services_Auth__WEBPACK_IMPORTED_MODULE_4__["default"].getTokenForBrowser();

              case 6:
                _context.t0 = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.next = 11;
                return _services_Auth__WEBPACK_IMPORTED_MODULE_4__["default"].getTokenForServer(req);

              case 11:
                _context.t0 = _context.sent;

              case 12:
                loggedInUser = _context.t0;

                if (loggedInUser) {
                  reduxStore.dispatch(_actions__WEBPACK_IMPORTED_MODULE_12__["authSuccess"](loggedInUser));
                  ctx.user = loggedInUser;
                }

                ; // Provide the store to getInitialProps of pages

                ctx.reduxStore = reduxStore;

                if (!Component.getInitialProps) {
                  _context.next = 20;
                  break;
                }

                _context.next = 19;
                return Component.getInitialProps(ctx);

              case 19:
                pageProps = _context.sent;

              case 20:
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  initialReduxState: reduxStore.getState()
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyApp).call(this, props));
    _this.reduxStore = getOrCreateStore(props.initialReduxState);
    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.props.router.pathname === '/callback')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
        store: this.reduxStore
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, pageProps)));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(MyApp));

/***/ }),

/***/ "./reducers/auth-reducer.js":
/*!**********************************!*\
  !*** ./reducers/auth-reducer.js ***!
  \**********************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./actions/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var authReducer = function authReducer(state, action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["AUTH_SUCCESS"]:
      return _objectSpread({}, state, {
        isAuth: true,
        isLoadingAuthState: false,
        user: action.user
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["AUTH_FAIL"]:
      return _objectSpread({}, state, {
        isAuth: false,
        isLoadingAuthState: false,
        user: null
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-reducer */ "./reducers/auth-reducer.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_4__);





function initializeStore(initialState) {
  var INITAL_STATE = 'test';
  var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    test: function test() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITAL_STATE;
      return state;
    },
    auth: function auth() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.auth || {
        isAuth: false,
        isLoadingAuthState: false
      };
      var action = arguments.length > 1 ? arguments[1] : undefined;
      return Object(_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["authReducer"])(state, action);
    },
    form: redux_form__WEBPACK_IMPORTED_MODULE_4__["reducer"]
  }); // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
}

/***/ }),

/***/ "./services/Auth.js":
/*!**************************!*\
  !*** ./services/Auth.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! auth0-js */ "auth0-js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    _classCallCheck(this, Auth);

    var redirectUri =  false ? undefined : 'http://localhost:3000';
    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_1___default.a.WebAuth({
      // the following three lines MUST be updated
      domain: 'eincode.eu.auth0.com',
      audience: 'https://eincode.eu.auth0.com/userinfo',
      clientID: 'N1hKhhP0PacJO4EjIWURIcnzBt88P3Q1',
      redirectUri: "".concat(redirectUri, "/callback"),
      responseType: 'token id_token',
      scope: 'openid profile app_metadata'
    });
    this._isFetching = false;
    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  _createClass(Auth, [{
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.auth0.parseHash(function (err, authResult) {
          if (err) return reject(err);

          if (!authResult || !authResult.idToken) {
            return reject(err);
          }

          _this.setSession(authResult);

          resolve();
        });
      });
    }
  }, {
    key: "getTokenForBrowser",
    value: function () {
      var _getTokenForBrowser = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var token, validToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('jwt');
                _context.next = 3;
                return this.verifyToken(token);

              case 3:
                validToken = _context.sent;

                if (!validToken) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('user'));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getTokenForBrowser() {
        return _getTokenForBrowser.apply(this, arguments);
      };
    }()
  }, {
    key: "getTokenForServer",
    value: function () {
      var _getTokenForServer = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req) {
        var jwtFromCookie, token, validToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!req.headers.cookie) {
                  _context2.next = 13;
                  break;
                }

                jwtFromCookie = req.headers.cookie.split(';').find(function (c) {
                  return c.trim().startsWith('jwt=');
                });

                if (jwtFromCookie) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", undefined);

              case 4:
                token = jwtFromCookie.split('=')[1];
                _context2.next = 7;
                return this.verifyToken(token);

              case 7:
                validToken = _context2.sent;

                if (!validToken) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt("return", jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(token));

              case 12:
                return _context2.abrupt("return", undefined);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getTokenForServer(_x) {
        return _getTokenForServer.apply(this, arguments);
      };
    }()
  }, {
    key: "getJWK",
    value: function () {
      var _getJWK = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var res, jwk;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://eincode.eu.auth0.com/.well-known/jwks.json");

              case 2:
                res = _context3.sent;
                _context3.next = 5;
                return res.json();

              case 5:
                jwk = _context3.sent;
                return _context3.abrupt("return", jwk);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getJWK() {
        return _getJWK.apply(this, arguments);
      };
    }()
  }, {
    key: "verifyToken",
    value: function () {
      var _verifyToken = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(token) {
        var decodedToken, jwk, cert;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!token) {
                  _context4.next = 18;
                  break;
                }

                decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(token, {
                  complete: true
                });
                _context4.next = 4;
                return this.getJWK();

              case 4:
                jwk = _context4.sent;
                cert = jwk.keys[0].x5c[0];
                cert = cert.match(/.{1,64}/g).join('\n');
                cert = "-----BEGIN CERTIFICATE-----\n".concat(cert, "\n-----END CERTIFICATE-----\n");

                if (!(jwk.keys[0].kid === decodedToken.header.kid)) {
                  _context4.next = 18;
                  break;
                }

                _context4.prev = 9;
                jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.verify(token, cert);
                return _context4.abrupt("return", true);

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](9);
                console.error(_context4.t0);
                return _context4.abrupt("return", false);

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[9, 14]]);
      }));

      return function verifyToken(_x2) {
        return _verifyToken.apply(this, arguments);
      };
    }()
  }, {
    key: "setSession",
    value: function setSession(authResult, step) {
      this.idToken = authResult.idToken;
      this.profile = authResult.idTokenPayload; // set the time that the id token will expire at

      this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('user', authResult.idTokenPayload);
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('jwt', authResult.idToken);
    }
  }, {
    key: "signOut",
    value: function signOut() {
      this.auth0.logout({
        returnTo: 'http://localhost:3000',
        clientID: 'N1hKhhP0PacJO4EjIWURIcnzBt88P3Q1'
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('jwt');
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('user');
    }
  }, {
    key: "silentAuth",
    value: function silentAuth() {
      var _this2 = this;

      this._isFetching = true;
      return new Promise(function (resolve, reject) {
        _this2.auth0.checkSession({}, function (err, authResult) {
          if (err) {
            _this2._isFetching = false;
            return reject(err);
          }

          ;

          _this2.setSession(authResult);

          _this2._isFetching = false;
          resolve();
        });
      });
    }
  }, {
    key: "isFetching",
    value: function isFetching() {
      return this._isFetching;
    }
  }, {
    key: "getProfile",
    value: function getProfile() {
      return this.profile;
    }
  }, {
    key: "getIdToken",
    value: function getIdToken() {
      return this.idToken;
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      return new Date().getTime() < this.expiresAt;
    }
  }, {
    key: "signIn",
    value: function signIn() {
      this.auth0.authorize();
    }
  }]);

  return Auth;
}();

var auth0Client = new Auth();
/* harmony default export */ __webpack_exports__["default"] = (auth0Client);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "auth0-js":
/*!***************************!*\
  !*** external "auth0-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("auth0-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map