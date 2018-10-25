webpackHotUpdate("static/development/pages/index.js",{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: authSuccess, authFail, createPortfolio, getPortfoliosServer, getAllBlogs, getAllBlogsServer, getBlogById, getBlogBySlug, getBlogBySlugServer, getMyBlogs, saveBlog, updateBlog, deleteBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSuccess", function() { return authSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFail", function() { return authFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortfolio", function() { return createPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPortfoliosServer", function() { return getPortfoliosServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBlogs", function() { return getAllBlogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBlogsServer", function() { return getAllBlogsServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogById", function() { return getBlogById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogBySlug", function() { return getBlogBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogBySlugServer", function() { return getBlogBySlugServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyBlogs", function() { return getMyBlogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBlog", function() { return saveBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlog", function() { return updateBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBlog", function() { return deleteBlog; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
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
}; //---------------------- PORTFOLIOS ----------------------------

var createPortfolio = function createPortfolio(portfolio) {
  return axiosService.post('/portfolios', portfolio, setAuthHeader());
};
var getPortfoliosServer = function getPortfoliosServer(req) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(extractUrl(req), "/api/v1/portfolios")).then(function (response) {
    return response.data;
  }).catch(function (_ref) {
    var response = _ref.response;
    return response.data;
  });
}; //---------------------- BLOGS ----------------------------

var getAllBlogs = function getAllBlogs(req) {
  return axiosService.get("".concat(extractUrl, "/blogs")).then(function (response) {
    return response.data;
  });
};
var getAllBlogsServer = function getAllBlogsServer(url) {
  return axiosService.get("".concat(url, "/api/v1/blogs")).then(function (response) {
    return response.data;
  });
};
var getBlogById = function getBlogById(userId) {
  return axiosService.get("/blogs/me/".concat(userId), setAuthHeader()).then(function (response) {
    return response.data;
  });
};
var getBlogBySlug = function getBlogBySlug(slug) {
  return axiosService.get("/blogs/".concat(slug), setAuthHeader()).then(function (response) {
    return response.data;
  });
};
var getBlogBySlugServer = function getBlogBySlugServer(url) {
  return axiosService.get("".concat(url, "/api/v1/blogs/").concat(slug), setAuthHeader()).then(function (response) {
    return response.data;
  });
};
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

/***/ })

})
//# sourceMappingURL=index.js.a8225f3cd45329c0b62a.hot-update.js.map