webpackHotUpdate("static/development/pages/blogListing.js",{

/***/ "./pages/blogListing.js":
/*!******************************!*\
  !*** ./pages/blogListing.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BaseLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BaseLayout.js */ "./components/BaseLayout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./actions/index.js");


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







var BlogListing =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlogListing, _React$Component);

  _createClass(BlogListing, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.prev = 1;
                _context.next = 4;
                return _actions__WEBPACK_IMPORTED_MODULE_5__["getAllBlogs"](req);

              case 4:
                data = _context.sent;
                return _context.abrupt("return", {
                  blogs: data
                });

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", {
                  err: _context.t0
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function BlogListing(props) {
    var _this;

    _classCallCheck(this, BlogListing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlogListing).call(this, props));
    _this.state = {
      blogs: []
    };
    return _this;
  } // componentDidMount() {
  //   actions.getAllBlogs()
  //   .then(
  //     (blogs) => this.setState({blogs}))
  //   .catch(err => console.error(err));
  // }


  _createClass(BlogListing, [{
    key: "renderBlogs",
    value: function renderBlogs(blogs) {
      return blogs.map(function (blog, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "post-preview"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          route: "/blogs/".concat(blog.slug)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "post-title"
        }, blog.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "post-subtitle"
        }, blog.subTitle))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "post-meta"
        }, "Posted by", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#"
        }, " ", blog.author, " "), blog.updatedAt && moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).format('LLLL'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var blogs = this.props.blogs;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BaseLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        headerType: 'landing'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "blogListing-page"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "masthead",
        style: {
          "backgroundImage": "url('/static/images/home-bg.jpg')"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "overlay"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-lg-8 col-md-10 mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "site-heading"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Newest Blogs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "subheading"
      }, "Read some blogs...")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-lg-8 col-md-10 mx-auto"
      }, this.renderBlogs(blogs), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "btn btn-primary float-right",
        href: "#"
      }, "Older Posts \u2192"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-lg-8 col-md-10 mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "list-inline text-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "fa-stack fa-lg"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fas fa-circle fa-stack-2x"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fab fa-twitter fa-stack-1x fa-inverse"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "fa-stack fa-lg"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fas fa-circle fa-stack-2x"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fab fa-facebook-f fa-stack-1x fa-inverse"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "fa-stack fa-lg"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fas fa-circle fa-stack-2x"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fab fa-github fa-stack-1x fa-inverse"
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "copyright text-muted"
      }, "Copyright \xA9 Your Website 2018")))))));
    }
  }]);

  return BlogListing;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BlogListing);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/blogListing")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=blogListing.js.24ee1d5fa2120cd008d9.hot-update.js.map