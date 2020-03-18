webpackHotUpdate("main",{

/***/ "./src/js/api/api.js":
/*!***************************!*\
  !*** ./src/js/api/api.js ***!
  \***************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/api/helpers.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./src/js/api/globals.js");


 //App API's

const live = false;
const GET_PRODUCT = {
  type: 'GET',
  url: _globals__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + 'defaultTopRatingProduct/'
};
const GET_ALL_PRODUCT = {
  type: 'GET',
  url: _globals__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + 'commonProducts/'
};
const GET_PRODUCT_BY_CATEG = {
  type: 'GET',
  url: _globals__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + 'getProductByCateg/'
};
const GET_ALL_CATEGORIES = {
  type: 'GET',
  url: _globals__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + 'getAllCategories/'
};
const GET_ALL_COLORS = {
  type: 'GET',
  url: _globals__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + 'getAllColors/'
};
const REGISTER = {
  type: 'POST',
  url: _globals__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + 'register/'
};
const LOG_IN = {
  type: 'POST',
  url: _globals__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + 'login/'
};
const API = {
  getProduct: (data, cb) => request(data, cb, GET_PRODUCT),
  getAllCategories: (data, cb) => request(data, cb, GET_ALL_CATEGORIES),
  getAllColors: (data, cb) => request(data, cb, GET_ALL_COLORS),
  getAllProduct: (data, cb) => request(data, cb, GET_ALL_PRODUCT),
  getProductByCateg: (data, cb) => {
    GET_PRODUCT_BY_CATEG.url = GET_PRODUCT_BY_CATEG.url + data;
    return request({}, cb, GET_PRODUCT_BY_CATEG);
  },
  register: (data, cb) => request(data, cb, REGISTER),
  logIn: (data, cb) => request(data, cb, LOG_IN)
};

async function request(requestData, cb, featureURL, secureRequest = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["buildHeader"])()) {
  const url = featureURL.url;

  if (!live) {
    console.groupCollapsed('API REQUEST');
    console.log({
      featureURL
    });
    console.log({
      secureRequest
    });
    console.log({
      requestData
    });
    console.log({
      url
    });
    console.groupEnd();
  }

  try {
    let response;

    if (featureURL.type == 'GET') {
      response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
        headers: secureRequest,
        params: requestData
      });
    } else if ('POST|PATCH|PUT'.includes(featureURL.type)) {
      response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a[featureURL.type.toLocaleLowerCase()](url, requestData, {
        headers: secureRequest
      });
    } else if ('DELETE'.includes(featureURL.type)) {
      response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
        headers: secureRequest
      }).delete(url);
    }

    if (!live) {
      console.groupCollapsed('API RESPONSE');
      console.log({
        response
      });
      console.groupEnd();
    }

    if (cb.complete) cb.complete();

    if (response.status == 200) {
      cb.success(response.data);
    } else {
      cb.error(response.data);
    }
  } catch (error) {
    //    if(!live){console.log({error})}else{null};
    //console.log({error});
    if (cb.complete) cb.complete();

    if (error.response) {
      cb.error(error.response.data);
    } else {
      cb.error(error);
    }
  }
}

/***/ })

})
//# sourceMappingURL=main.3796715a2452caffd379.hot-update.js.map