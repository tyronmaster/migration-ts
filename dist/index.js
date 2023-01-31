/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".news {\n    display: flex;\n    flex-wrap: wrap;\n}\n.news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/components/view/news/news.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,sBAAsB;IACtB,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;;IAEI,YAAY;IACZ,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,8BAA8B;IAC9B,WAAW;IACX,aAAa;IACb,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,sBAAsB;IACtB,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI;QACI,mBAAmB;QACnB,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,+BAA+B;QAC/B,uBAAuB;QACvB,WAAW;QACX,gBAAgB;QAChB,WAAW;QACX,kBAAkB;QAClB,WAAW;QACX,MAAM;QACN,SAAS;QACT,WAAW;IACf;;IAEA;QACI,2BAA2B;IAC/B;;IAEA;QACI,aAAa;QACb,YAAY;QACZ,6BAA6B;QAC7B,qBAAqB;IACzB;;IAEA;QACI,kBAAkB;IACtB;AACJ","sourcesContent":[".news {\n    display: flex;\n    flex-wrap: wrap;\n}\n.news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sources {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 180px;\n\n    overflow-x: hidden;\n    overflow-y: auto;\n\n    /* customize scrollbar */\n    scrollbar-width: thin;\n    scrollbar-color: #30c5ff rgba(0, 0, 0, 0.2);\n\n    align-items: center;\n    font: 300 1em 'Montserrat', sans-serif;\n    justify-content: center;\n}\n/* customize scrollbar for -webkit browsers*/\n.sources::-webkit-scrollbar {\n    width: 5px;\n    background: rgba(0, 0, 0, 0.2);\n}\n.sources::-webkit-scrollbar-thumb {\n    background: #30c5ff;\n}\n\n.source__item {\n    background: none;\n    border: 1px solid #30c5ff;\n    font: inherit;\n    line-height: inherit;\n    line-height: 1;\n    margin: 5px;\n    padding: 5px 10px;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n", "",{"version":3,"sources":["webpack://./src/components/view/sources/sources.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,aAAa;;IAEb,kBAAkB;IAClB,gBAAgB;;IAEhB,wBAAwB;IACxB,qBAAqB;IACrB,2CAA2C;;IAE3C,mBAAmB;IACnB,sCAAsC;IACtC,uBAAuB;AAC3B;AACA,4CAA4C;AAC5C;IACI,UAAU;IACV,8BAA8B;AAClC;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,oBAAoB;IACpB,cAAc;IACd,WAAW;IACX,iBAAiB;IACjB,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,qBAAqB;IACrB,cAAc;IACd,wCAAwC;IACxC,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB","sourcesContent":[".sources {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 180px;\n\n    overflow-x: hidden;\n    overflow-y: auto;\n\n    /* customize scrollbar */\n    scrollbar-width: thin;\n    scrollbar-color: #30c5ff rgba(0, 0, 0, 0.2);\n\n    align-items: center;\n    font: 300 1em 'Montserrat', sans-serif;\n    justify-content: center;\n}\n/* customize scrollbar for -webkit browsers*/\n.sources::-webkit-scrollbar {\n    width: 5px;\n    background: rgba(0, 0, 0, 0.2);\n}\n.sources::-webkit-scrollbar-thumb {\n    background: #30c5ff;\n}\n\n.source__item {\n    background: none;\n    border: 1px solid #30c5ff;\n    font: inherit;\n    line-height: inherit;\n    line-height: 1;\n    margin: 5px;\n    padding: 5px 10px;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_backgrnd_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/backgrnd.png */ "./src/assets/images/backgrnd.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Vollkorn:wght@400;500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_images_backgrnd_png__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*:after,\n*:before {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n:focus,\n:active {\n    outline: none;\n}\nhtml,\nbody {\n    height: 100%;\n    scroll-behavior: smooth;\n    min-width: 320px;\n}\naside,\nnav,\nfooter,\nheader,\nsection {\n    display: block;\n}\na {\n    text-decoration: none;\n    color: #e5e5e5;\n    display: block;\n    transition: color 1s ease;\n}\na:hover {\n    color: #4dc9c9;\n    transition: color 0.5s ease;\n}\na:active {\n    color: #4dc9c9;\n}\nul li {\n    list-style: none;\n}\nimg {\n    vertical-align: top;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: 'Vollkorn', serif;\n    font-weight: 500;\n    color: #e5e5e5;\n}\nh1 {\n    font-size: 40px;\n}\nbody {\n    font-family: 'Montserrat', sans-serif;\n    color: #e5e5e5;\n    font-size: 14px;\n    font-weight: 300;\n    line-height: 20px;\n    background: #17181c;\n}\n.wrapper {\n    position: relative;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* min-height: 100%; */\n    overflow: hidden;\n    background: center / cover url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n}\n.container {\n    max-width: 1920px;\n    margin: 0 auto;\n    padding: 0 20px;\n}\n\n.header {\n    padding: 10px 30px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 80px;\n}\n\n.main {\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.footer {\n    /* min-height: 10vh; */\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.footer__list {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n.footer__item {\n    margin: 15px 25px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n.footer__link {\n    position: relative;\n    /*padding-left: 35px;*/\n    color: #e5e5e5;\n    display: flex;\n    align-items: center;\n}\n.footer__link span {\n    margin-left: 10px;\n}\n.footer__link:hover {\n    color: #4dc9c9;\n}\n.footer__link svg path {\n    fill: #e5e5e5;\n}\n.footer__link:hover svg path {\n    fill: #4dc9c9;\n}\n.footer__link,\n.footer__link svg path {\n    transition: 0.5s ease-in-out;\n}\n", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"AAEA;;;IAGI,SAAS;IACT,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;AACA;;IAEI,aAAa;AACjB;AACA;;IAEI,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;AACpB;AACA;;;;;IAKI,cAAc;AAClB;AACA;IACI,qBAAqB;IACrB,cAAc;IACd,cAAc;IACd,yBAAyB;AAC7B;AACA;IACI,cAAc;IACd,2BAA2B;AAC/B;AACA;IACI,cAAc;AAClB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;AACA;;;;;;IAMI,8BAA8B;IAC9B,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,eAAe;AACnB;AACA;IACI,qCAAqC;IACrC,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;IAChB,4EAAsE;AAC1E;AACA;IACI,iBAAiB;IACjB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,cAAc;IACd,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;;IAEI,4BAA4B;AAChC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Vollkorn:wght@400;500&display=swap');\n\n*,\n*:after,\n*:before {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n:focus,\n:active {\n    outline: none;\n}\nhtml,\nbody {\n    height: 100%;\n    scroll-behavior: smooth;\n    min-width: 320px;\n}\naside,\nnav,\nfooter,\nheader,\nsection {\n    display: block;\n}\na {\n    text-decoration: none;\n    color: #e5e5e5;\n    display: block;\n    transition: color 1s ease;\n}\na:hover {\n    color: #4dc9c9;\n    transition: color 0.5s ease;\n}\na:active {\n    color: #4dc9c9;\n}\nul li {\n    list-style: none;\n}\nimg {\n    vertical-align: top;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: 'Vollkorn', serif;\n    font-weight: 500;\n    color: #e5e5e5;\n}\nh1 {\n    font-size: 40px;\n}\nbody {\n    font-family: 'Montserrat', sans-serif;\n    color: #e5e5e5;\n    font-size: 14px;\n    font-weight: 300;\n    line-height: 20px;\n    background: #17181c;\n}\n.wrapper {\n    position: relative;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* min-height: 100%; */\n    overflow: hidden;\n    background: center / cover url(./assets/images/backgrnd.png) no-repeat;\n}\n.container {\n    max-width: 1920px;\n    margin: 0 auto;\n    padding: 0 20px;\n}\n\n.header {\n    padding: 10px 30px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 80px;\n}\n\n.main {\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.footer {\n    /* min-height: 10vh; */\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.footer__list {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n.footer__item {\n    margin: 15px 25px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n.footer__link {\n    position: relative;\n    /*padding-left: 35px;*/\n    color: #e5e5e5;\n    display: flex;\n    align-items: center;\n}\n.footer__link span {\n    margin-left: 10px;\n}\n.footer__link:hover {\n    color: #4dc9c9;\n}\n.footer__link svg path {\n    fill: #e5e5e5;\n}\n.footer__link:hover svg path {\n    fill: #4dc9c9;\n}\n.footer__link,\n.footer__link svg path {\n    transition: 0.5s ease-in-out;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/components/view/news/news.css":
/*!*******************************************!*\
  !*** ./src/components/view/news/news.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./news.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/view/sources/sources.css":
/*!*************************************************!*\
  !*** ./src/components/view/sources/sources.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./sources.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/global.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/app/app.ts":
/*!***********************************!*\
  !*** ./src/components/app/app.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/controller */ "./src/components/controller/controller.ts");
/* harmony import */ var _view_appView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/appView */ "./src/components/view/appView.ts");


class App {
    constructor() {
        this.controller = new _controller_controller__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.view = new _view_appView__WEBPACK_IMPORTED_MODULE_1__.AppView();
    }
    start() {
        const sourcesContainer = document.querySelector('.sources');
        sourcesContainer.addEventListener('click', (e) => this.controller.getNews(e, (data) => {
            this.view.drawNews(data);
        }));
        this.controller.getSources((data) => {
            this.view.drawSources(data);
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/controller/appLoader.ts":
/*!************************************************!*\
  !*** ./src/components/controller/appLoader.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./src/components/controller/loader.ts");

class AppLoader extends _loader__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2b9a1ba472c2447899ce7dcac308d2c0', // получите свой ключ https://newsapi.org/
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLoader);


/***/ }),

/***/ "./src/components/controller/controller.ts":
/*!*************************************************!*\
  !*** ./src/components/controller/controller.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLoader */ "./src/components/controller/appLoader.ts");

class AppController extends _appLoader__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getSources(callback) {
        super.getResp({ endpoint: 'sources' }, callback);
    }
    getNews(e, callback) {
        let target = e.target;
        const newsContainer = e.currentTarget;
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp({
                        endpoint: 'everything',
                        options: {
                            sources: sourceId,
                        },
                    }, callback);
                }
                return;
            }
            target = target.parentNode;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppController);


/***/ }),

/***/ "./src/components/controller/loader.ts":
/*!*********************************************!*\
  !*** ./src/components/controller/loader.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Loader {
    constructor(baseLink, options) {
        this.defaultCallBack = () => {
            console.error('No callback for GET response');
        };
        this.baseLink = baseLink;
        this.options = options;
    }
    getResp({ endpoint, options = {} }, callback) {
        if (!callback)
            callback = this.defaultCallBack;
        this.load('GET', endpoint, callback, options);
    }
    errorHandler(res) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }
    makeUrl(options, endpoint) {
        const urlOptions = Object.assign(Object.assign({}, this.options), options);
        let url = `${this.baseLink}${endpoint}?`;
        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }
    load(method, endpoint, callback, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ "./src/components/view/appView.ts":
/*!****************************************!*\
  !*** ./src/components/view/appView.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppView": () => (/* binding */ AppView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _news_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news/news */ "./src/components/view/news/news.ts");
/* harmony import */ var _sources_sources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sources/sources */ "./src/components/view/sources/sources.ts");


class AppView {
    constructor() {
        this.news = new _news_news__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.sources = new _sources_sources__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    drawNews(data) {
        const values = (data === null || data === void 0 ? void 0 : data.articles) ? data === null || data === void 0 ? void 0 : data.articles : [];
        this.news.draw(values);
    }
    drawSources(data) {
        const values = (data === null || data === void 0 ? void 0 : data.sources) ? data === null || data === void 0 ? void 0 : data.sources : [];
        this.sources.draw(values);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppView);


/***/ }),

/***/ "./src/components/view/news/news.ts":
/*!******************************************!*\
  !*** ./src/components/view/news/news.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _news_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.css */ "./src/components/view/news/news.css");

class News {
    draw(data) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            if (idx % 2) {
                const newsItem = newsClone.querySelector('.news__item');
                newsItem.classList.add('alt');
            }
            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo');
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author');
            newsMetaAuthor.textContent = item.author || item.source.name;
            const newsMetaDate = newsClone.querySelector('.news__meta-date');
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            const newsDescriptionTitle = newsClone.querySelector('.news__description-title');
            newsDescriptionTitle.textContent = item.title;
            const newsDescriptionSource = newsClone.querySelector('.news__description-source');
            newsDescriptionSource.textContent = item.source.name;
            const newsDescriptionContent = newsClone.querySelector('.news__description-content');
            newsDescriptionContent.textContent = item.description;
            const newsReadMore = newsClone.querySelector('.news__read-more a');
            newsReadMore.setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        const newsContainer = document.querySelector('.news');
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);


/***/ }),

/***/ "./src/components/view/sources/sources.ts":
/*!************************************************!*\
  !*** ./src/components/view/sources/sources.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sources_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources.css */ "./src/components/view/sources/sources.css");

class Sources {
    draw(data) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            const sourceItemName = sourceClone.querySelector('.source__item-name');
            sourceItemName.textContent = item.name;
            const sourceItem = sourceClone.querySelector('.source__item');
            sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        const sources = document.querySelector('.sources');
        sources.append(fragment);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sources);


/***/ }),

/***/ "./src/assets/images/backgrnd.png":
/*!****************************************!*\
  !*** ./src/assets/images/backgrnd.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d737769834c26e9ba266.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app/app */ "./src/components/app/app.ts");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.css */ "./src/global.css");


const app = new _components_app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNHO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2Z1QztBQUNqQjtBQUN0QixnQkFBZ0IsMkRBQUc7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy5jc3MiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3VyY2VzL3NvdXJjZXMuY3NzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9nbG9iYWwuY3NzIiwid2VicGFjazovL05ld3NKUy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy5jc3M/ZTIwNiIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy92aWV3L3NvdXJjZXMvc291cmNlcy5jc3M/NTJiMSIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvZ2xvYmFsLmNzcz9kM2JjIiwid2VicGFjazovL05ld3NKUy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvYXBwTG9hZGVyLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy9jb250cm9sbGVyL2xvYWRlci50cyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy92aWV3L2FwcFZpZXcudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9uZXdzL25ld3MudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3VyY2VzL3NvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9OZXdzSlMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmV3cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLm5ld3NfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMS42JTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubmV3c19faXRlbTpob3ZlciAubmV3c19fbWV0YS1waG90byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoM2RlZyk7XFxufVxcblxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1waG90byB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbn1cXG5cXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzLFxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhLWRldGFpbHMgdWwge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhLWRldGFpbHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAtMTIwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnM7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gaDIge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIGgzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogI2EyYTJhMjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhIHtcXG4gICAgY29sb3I6ICM1YWQ2N2Q7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiAubmV3c19fcmVhZC1tb3JlIGE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAn4oaSJztcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4zcywgb3BhY2l0eSAwLjNzO1xcbn1cXG5cXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhOmhvdmVyOmFmdGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0gcCB7XFxuICAgIG1hcmdpbjogMXJlbSAwIDA7XFxufVxcblxcbi5uZXdzX19pdGVtIHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0gcDpmaXJzdC1vZi10eXBlOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjNWFkNjdkO1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgdG9wOiAtMC43NXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubmV3c19faXRlbTpob3ZlciAubmV3c19fbWV0YS1kZXRhaWxzIHtcXG4gICAgbGVmdDogMCU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcbiAgICAubmV3c19faXRlbSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgfVxcblxcbiAgICAubmV3c19faXRlbSAubmV3c19fbWV0YSB7XFxuICAgICAgICBmbGV4LWJhc2lzOiA0MCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IDYwJTtcXG4gICAgfVxcblxcbiAgICAubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb246YmVmb3JlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC0zZGVnKTtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogLTEwcHg7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgfVxcblxcbiAgICAubmV3c19faXRlbS5hbHQge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICB9XFxuXFxuICAgIC5uZXdzX19pdGVtLmFsdCAubmV3c19fZGVzY3JpcHRpb246YmVmb3JlIHtcXG4gICAgICAgIGxlZnQ6IGluaGVyaXQ7XFxuICAgICAgICByaWdodDogLTEwcHg7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzZGVnKTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2tldygzZGVnKTtcXG4gICAgfVxcblxcbiAgICAubmV3c19faXRlbS5hbHQgLm5ld3NfX21ldGEtZGV0YWlscyB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9uZXdzL25ld3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLCtCQUErQjtRQUMvQix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxNQUFNO1FBQ04sU0FBUztRQUNULFdBQVc7SUFDZjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osNkJBQTZCO1FBQzdCLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uZXdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubmV3c19faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjYlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5uZXdzX19pdGVtOmhvdmVyIC5uZXdzX19tZXRhLXBob3RvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpIHJvdGF0ZSgzZGVnKTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcblxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhLXBob3RvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxufVxcblxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhLWRldGFpbHMsXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtZGV0YWlscyB1bCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtZGV0YWlscyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IC0xMjAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGxlZnQgMC4ycztcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiBoMiB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gaDMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiAjYTJhMmEyO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiAubmV3c19fcmVhZC1tb3JlIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiAubmV3c19fcmVhZC1tb3JlIGEge1xcbiAgICBjb2xvcjogIzVhZDY3ZDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICfihpInO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjNzLCBvcGFjaXR5IDAuM3M7XFxufVxcblxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiAubmV3c19fcmVhZC1tb3JlIGE6aG92ZXI6YWZ0ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubmV3c19faXRlbSBwIHtcXG4gICAgbWFyZ2luOiAxcmVtIDAgMDtcXG59XFxuXFxuLm5ld3NfX2l0ZW0gcDpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmV3c19faXRlbSBwOmZpcnN0LW9mLXR5cGU6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQ6ICM1YWQ2N2Q7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICB0b3A6IC0wLjc1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5uZXdzX19pdGVtOmhvdmVyIC5uZXdzX19tZXRhLWRldGFpbHMge1xcbiAgICBsZWZ0OiAwJTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICAgIC5uZXdzX19pdGVtIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5uZXdzX19pdGVtIC5uZXdzX19tZXRhIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IDQwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24ge1xcbiAgICAgICAgZmxleC1iYXNpczogNjAlO1xcbiAgICB9XFxuXFxuICAgIC5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbjpiZWZvcmUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0zZGVnKTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTNkZWcpO1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAtMTBweDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICB9XFxuXFxuICAgIC5uZXdzX19pdGVtLmFsdCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIH1cXG5cXG4gICAgLm5ld3NfX2l0ZW0uYWx0IC5uZXdzX19kZXNjcmlwdGlvbjpiZWZvcmUge1xcbiAgICAgICAgbGVmdDogaW5oZXJpdDtcXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDNkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KDNkZWcpO1xcbiAgICB9XFxuXFxuICAgIC5uZXdzX19pdGVtLmFsdCAubmV3c19fbWV0YS1kZXRhaWxzIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc291cmNlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG5cXG4gICAgLyogY3VzdG9taXplIHNjcm9sbGJhciAqL1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICAgIHNjcm9sbGJhci1jb2xvcjogIzMwYzVmZiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQ6IDMwMCAxZW0gJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLyogY3VzdG9taXplIHNjcm9sbGJhciBmb3IgLXdlYmtpdCBicm93c2VycyovXFxuLnNvdXJjZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4uc291cmNlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzBjNWZmO1xcbn1cXG5cXG4uc291cmNlX19pdGVtIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMwYzVmZjtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGNvbG9yOiAjNzBkNmZmO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc291cmNlX19pdGVtOmhvdmVyLFxcbi5zb3VyY2VfX2l0ZW06Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6ICMzZmNjNTk7XFxuICAgIGNvbG9yOiAjNjlkYjdlO1xcbiAgICBib3gtc2hhZG93OiAwIDAuNWVtIDAuNWVtIC0wLjRlbSAjM2ZjYzU5O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxufVxcblxcbi5zb3VyY2VfX2l0ZW0tbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc291cmNlcy9zb3VyY2VzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7O0lBRWIsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7SUFFaEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQiwyQ0FBMkM7O0lBRTNDLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsdUJBQXVCO0FBQzNCO0FBQ0EsNENBQTRDO0FBQzVDO0lBQ0ksVUFBVTtJQUNWLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLHdDQUF3QztJQUN4Qyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zb3VyY2VzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG5cXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcblxcbiAgICAvKiBjdXN0b21pemUgc2Nyb2xsYmFyICovXFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAjMzBjNWZmIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udDogMzAwIDFlbSAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4vKiBjdXN0b21pemUgc2Nyb2xsYmFyIGZvciAtd2Via2l0IGJyb3dzZXJzKi9cXG4uc291cmNlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5zb3VyY2VzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6ICMzMGM1ZmY7XFxufVxcblxcbi5zb3VyY2VfX2l0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzBjNWZmO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgY29sb3I6ICM3MGQ2ZmY7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zb3VyY2VfX2l0ZW06aG92ZXIsXFxuLnNvdXJjZV9faXRlbTpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogIzNmY2M1OTtcXG4gICAgY29sb3I6ICM2OWRiN2U7XFxuICAgIGJveC1zaGFkb3c6IDAgMC41ZW0gMC41ZW0gLTAuNGVtICMzZmNjNTk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcXG59XFxuXFxuLnNvdXJjZV9faXRlbS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tncm5kLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZmYW1pbHk9Vm9sbGtvcm46d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6YWZ0ZXIsXFxuKjpiZWZvcmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuOmZvY3VzLFxcbjphY3RpdmUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xcbn1cXG5hc2lkZSxcXG5uYXYsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjZTVlNWU1O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMXMgZWFzZTtcXG59XFxuYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjNGRjOWM5O1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XFxufVxcbmE6YWN0aXZlIHtcXG4gICAgY29sb3I6ICM0ZGM5Yzk7XFxufVxcbnVsIGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuaW1nIHtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgICBmb250LWZhbWlseTogJ1ZvbGxrb3JuJywgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiAjZTVlNWU1O1xcbn1cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjZTVlNWU1O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMTcxODFjO1xcbn1cXG4ud3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBtaW4taGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTkyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICAvKiBtaW4taGVpZ2h0OiAxMHZoOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvb3Rlcl9fbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uZm9vdGVyX19pdGVtIHtcXG4gICAgbWFyZ2luOiAxNXB4IDI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9vdGVyX19saW5rIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKnBhZGRpbmctbGVmdDogMzVweDsqL1xcbiAgICBjb2xvcjogI2U1ZTVlNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvb3Rlcl9fbGluayBzcGFuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5mb290ZXJfX2xpbms6aG92ZXIge1xcbiAgICBjb2xvcjogIzRkYzljOTtcXG59XFxuLmZvb3Rlcl9fbGluayBzdmcgcGF0aCB7XFxuICAgIGZpbGw6ICNlNWU1ZTU7XFxufVxcbi5mb290ZXJfX2xpbms6aG92ZXIgc3ZnIHBhdGgge1xcbiAgICBmaWxsOiAjNGRjOWM5O1xcbn1cXG4uZm9vdGVyX19saW5rLFxcbi5mb290ZXJfX2xpbmsgc3ZnIHBhdGgge1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksYUFBYTtBQUNqQjtBQUNBOztJQUVJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7Ozs7O0lBS0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBOzs7Ozs7SUFNSSw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLDRFQUFzRTtBQUMxRTtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTs7SUFFSSw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZmYW1pbHk9Vm9sbGtvcm46d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjphZnRlcixcXG4qOmJlZm9yZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46Zm9jdXMsXFxuOmFjdGl2ZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgIG1pbi13aWR0aDogMzIwcHg7XFxufVxcbmFzaWRlLFxcbm5hdixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICNlNWU1ZTU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAxcyBlYXNlO1xcbn1cXG5hOmhvdmVyIHtcXG4gICAgY29sb3I6ICM0ZGM5Yzk7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcXG59XFxuYTphY3RpdmUge1xcbiAgICBjb2xvcjogIzRkYzljOTtcXG59XFxudWwgbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5pbWcge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVm9sbGtvcm4nLCBzZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6ICNlNWU1ZTU7XFxufVxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICNlNWU1ZTU7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMxNzE4MWM7XFxufVxcbi53cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIG1pbi1oZWlnaHQ6IDEwMCU7ICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIHVybCguL2Fzc2V0cy9pbWFnZXMvYmFja2dybmQucG5nKSBuby1yZXBlYXQ7XFxufVxcbi5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDE5MjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgLyogbWluLWhlaWdodDogMTB2aDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXJfX2xpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmZvb3Rlcl9faXRlbSB7XFxuICAgIG1hcmdpbjogMTVweCAyNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3Rlcl9fbGluayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLypwYWRkaW5nLWxlZnQ6IDM1cHg7Ki9cXG4gICAgY29sb3I6ICNlNWU1ZTU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXJfX2xpbmsgc3BhbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uZm9vdGVyX19saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6ICM0ZGM5Yzk7XFxufVxcbi5mb290ZXJfX2xpbmsgc3ZnIHBhdGgge1xcbiAgICBmaWxsOiAjZTVlNWU1O1xcbn1cXG4uZm9vdGVyX19saW5rOmhvdmVyIHN2ZyBwYXRoIHtcXG4gICAgZmlsbDogIzRkYzljOTtcXG59XFxuLmZvb3Rlcl9fbGluayxcXG4uZm9vdGVyX19saW5rIHN2ZyBwYXRoIHtcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uZXdzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc291cmNlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XHJcbmltcG9ydCB7IEFwcFZpZXcgfSBmcm9tICcuLi92aWV3L2FwcFZpZXcnO1xyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEFwcENvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgQXBwVmlldygpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3Qgc291cmNlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VyY2VzJyk7XHJcbiAgICAgICAgc291cmNlc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmNvbnRyb2xsZXIuZ2V0TmV3cyhlLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuZHJhd05ld3MoZGF0YSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5nZXRTb3VyY2VzKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5kcmF3U291cmNlcyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXInO1xyXG5jbGFzcyBBcHBMb2FkZXIgZXh0ZW5kcyBMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2h0dHBzOi8vbmV3c2FwaS5vcmcvdjIvJywge1xyXG4gICAgICAgICAgICBhcGlLZXk6ICcyYjlhMWJhNDcyYzI0NDc4OTljZTdkY2FjMzA4ZDJjMCcsIC8vINC/0L7Qu9GD0YfQuNGC0LUg0YHQstC+0Lkg0LrQu9GO0YcgaHR0cHM6Ly9uZXdzYXBpLm9yZy9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBMb2FkZXI7XHJcbiIsImltcG9ydCBBcHBMb2FkZXIgZnJvbSAnLi9hcHBMb2FkZXInO1xyXG5jbGFzcyBBcHBDb250cm9sbGVyIGV4dGVuZHMgQXBwTG9hZGVyIHtcclxuICAgIGdldFNvdXJjZXMoY2FsbGJhY2spIHtcclxuICAgICAgICBzdXBlci5nZXRSZXNwKHsgZW5kcG9pbnQ6ICdzb3VyY2VzJyB9LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBnZXROZXdzKGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IG5ld3NDb250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgd2hpbGUgKHRhcmdldCAhPT0gbmV3c0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc291cmNlX19pdGVtJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UtaWQnKTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdzQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UnKSAhPT0gc291cmNlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UnLCBzb3VyY2VJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZ2V0UmVzcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnZXZlcnl0aGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXM6IHNvdXJjZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udHJvbGxlcjtcclxuIiwiY2xhc3MgTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGJhc2VMaW5rLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Q2FsbEJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGNhbGxiYWNrIGZvciBHRVQgcmVzcG9uc2UnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYmFzZUxpbmsgPSBiYXNlTGluaztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgfVxyXG4gICAgZ2V0UmVzcCh7IGVuZHBvaW50LCBvcHRpb25zID0ge30gfSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrKVxyXG4gICAgICAgICAgICBjYWxsYmFjayA9IHRoaXMuZGVmYXVsdENhbGxCYWNrO1xyXG4gICAgICAgIHRoaXMubG9hZCgnR0VUJywgZW5kcG9pbnQsIGNhbGxiYWNrLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGVycm9ySGFuZGxlcihyZXMpIHtcclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxIHx8IHJlcy5zdGF0dXMgPT09IDQwNClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTb3JyeSwgYnV0IHRoZXJlIGlzICR7cmVzLnN0YXR1c30gZXJyb3I6ICR7cmVzLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlcy5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIG1ha2VVcmwob3B0aW9ucywgZW5kcG9pbnQpIHtcclxuICAgICAgICBjb25zdCB1cmxPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpLCBvcHRpb25zKTtcclxuICAgICAgICBsZXQgdXJsID0gYCR7dGhpcy5iYXNlTGlua30ke2VuZHBvaW50fT9gO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHVybE9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICB1cmwgKz0gYCR7a2V5fT0ke3VybE9wdGlvbnNba2V5XX0mYDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdXJsLnNsaWNlKDAsIC0xKTtcclxuICAgIH1cclxuICAgIGxvYWQobWV0aG9kLCBlbmRwb2ludCwgY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGZldGNoKHRoaXMubWFrZVVybChvcHRpb25zLCBlbmRwb2ludCksIHsgbWV0aG9kIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMuZXJyb3JIYW5kbGVyKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gY2FsbGJhY2soZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIiwiaW1wb3J0IE5ld3MgZnJvbSAnLi9uZXdzL25ld3MnO1xyXG5pbXBvcnQgU291cmNlcyBmcm9tICcuL3NvdXJjZXMvc291cmNlcyc7XHJcbmV4cG9ydCBjbGFzcyBBcHBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV3cyA9IG5ldyBOZXdzKCk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VzID0gbmV3IFNvdXJjZXMoKTtcclxuICAgIH1cclxuICAgIGRyYXdOZXdzKGRhdGEpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmFydGljbGVzKSA/IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5hcnRpY2xlcyA6IFtdO1xyXG4gICAgICAgIHRoaXMubmV3cy5kcmF3KHZhbHVlcyk7XHJcbiAgICB9XHJcbiAgICBkcmF3U291cmNlcyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5zb3VyY2VzKSA/IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5zb3VyY2VzIDogW107XHJcbiAgICAgICAgdGhpcy5zb3VyY2VzLmRyYXcodmFsdWVzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBWaWV3O1xyXG4iLCJpbXBvcnQgJy4vbmV3cy5jc3MnO1xyXG5jbGFzcyBOZXdzIHtcclxuICAgIGRyYXcoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG5ld3MgPSBkYXRhLmxlbmd0aCA+PSAxMCA/IGRhdGEuZmlsdGVyKChfaXRlbSwgaWR4KSA9PiBpZHggPCAxMCkgOiBkYXRhO1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IG5ld3NJdGVtVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdzSXRlbVRlbXAnKTtcclxuICAgICAgICBuZXdzLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdzQ2xvbmUgPSBuZXdzSXRlbVRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChpZHggJSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdzSXRlbSA9IG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19faXRlbScpO1xyXG4gICAgICAgICAgICAgICAgbmV3c0l0ZW0uY2xhc3NMaXN0LmFkZCgnYWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmV3c01ldGFQaG90byA9IG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fbWV0YS1waG90bycpO1xyXG4gICAgICAgICAgICBuZXdzTWV0YVBob3RvLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpdGVtLnVybFRvSW1hZ2UgfHwgJ2ltZy9uZXdzX3BsYWNlaG9sZGVyLmpwZyd9KWA7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld3NNZXRhQXV0aG9yID0gbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19tZXRhLWF1dGhvcicpO1xyXG4gICAgICAgICAgICBuZXdzTWV0YUF1dGhvci50ZXh0Q29udGVudCA9IGl0ZW0uYXV0aG9yIHx8IGl0ZW0uc291cmNlLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld3NNZXRhRGF0ZSA9IG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fbWV0YS1kYXRlJyk7XHJcbiAgICAgICAgICAgIG5ld3NNZXRhRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0ucHVibGlzaGVkQXQuc2xpY2UoMCwgMTApLnNwbGl0KCctJykucmV2ZXJzZSgpLmpvaW4oJy0nKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3c0Rlc2NyaXB0aW9uVGl0bGUgPSBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2Rlc2NyaXB0aW9uLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIG5ld3NEZXNjcmlwdGlvblRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcclxuICAgICAgICAgICAgY29uc3QgbmV3c0Rlc2NyaXB0aW9uU291cmNlID0gbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19kZXNjcmlwdGlvbi1zb3VyY2UnKTtcclxuICAgICAgICAgICAgbmV3c0Rlc2NyaXB0aW9uU291cmNlLnRleHRDb250ZW50ID0gaXRlbS5zb3VyY2UubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgbmV3c0Rlc2NyaXB0aW9uQ29udGVudCA9IG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fZGVzY3JpcHRpb24tY29udGVudCcpO1xyXG4gICAgICAgICAgICBuZXdzRGVzY3JpcHRpb25Db250ZW50LnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgY29uc3QgbmV3c1JlYWRNb3JlID0gbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19yZWFkLW1vcmUgYScpO1xyXG4gICAgICAgICAgICBuZXdzUmVhZE1vcmUuc2V0QXR0cmlidXRlKCdocmVmJywgaXRlbS51cmwpO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQobmV3c0Nsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBuZXdzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MnKTtcclxuICAgICAgICBuZXdzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5ld3M7XHJcbiIsImltcG9ydCAnLi9zb3VyY2VzLmNzcyc7XHJcbmNsYXNzIFNvdXJjZXMge1xyXG4gICAgZHJhdyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3Qgc291cmNlSXRlbVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc291cmNlSXRlbVRlbXAnKTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlQ2xvbmUgPSBzb3VyY2VJdGVtVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlSXRlbU5hbWUgPSBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc291cmNlX19pdGVtLW5hbWUnKTtcclxuICAgICAgICAgICAgc291cmNlSXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUl0ZW0gPSBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc291cmNlX19pdGVtJyk7XHJcbiAgICAgICAgICAgIHNvdXJjZUl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXNvdXJjZS1pZCcsIGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQoc291cmNlQ2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291cmNlcycpO1xyXG4gICAgICAgIHNvdXJjZXMuYXBwZW5kKGZyYWdtZW50KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb3VyY2VzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAnO1xyXG5pbXBvcnQgJy4vZ2xvYmFsLmNzcyc7XHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuYXBwLnN0YXJ0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==