"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/app/ui/allProducts/AllProducts.jsx":
/*!************************************************!*\
  !*** ./src/app/ui/allProducts/AllProducts.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllProducts: function() { return /* binding */ AllProducts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../productsBlock/ProductsBlock */ \"(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ AllProducts auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AllProducts(param) {\n    let { searchParams } = param;\n    _s();\n    const prods = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_2__.allProductsSelector);\n    const url = \"http://localhost:4000/api/products/filter?\" + new URLSearchParams(searchParams);\n    console.log(url);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__.ProductsBlock, {\n        title: \"Усі вироби\",\n        products: prods,\n        num: 4\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/allProducts/AllProducts.jsx\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, this);\n}\n_s(AllProducts, \"Roh8eyiCI9JmWKSQUVtFH2ehZUI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = AllProducts;\nvar _c;\n$RefreshReg$(_c, \"AllProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvYWxsUHJvZHVjdHMvQWxsUHJvZHVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUrQztBQUNMO0FBQ3FCO0FBQ0k7QUFDdkI7QUFFckMsU0FBU00sWUFBWSxLQUFnQjtRQUFoQixFQUFFQyxZQUFZLEVBQUUsR0FBaEI7O0lBQzFCLE1BQU1DLFFBQVFQLHdEQUFXQSxDQUFDRSw0RUFBbUJBO0lBRTdDLE1BQU1NLE1BQ0osK0NBQ0EsSUFBSUMsZ0JBQWdCSDtJQUN0QkksUUFBUUMsR0FBRyxDQUFDSDtJQUVaLHFCQUFPLDhEQUFDUCx1RUFBYUE7UUFBQ1csT0FBTTtRQUFhQyxVQUFVTjtRQUFPTyxLQUFLOzs7Ozs7QUFDakU7R0FUZ0JUOztRQUNBTCxvREFBV0E7OztLQURYSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2FsbFByb2R1Y3RzL0FsbFByb2R1Y3RzLmpzeD9mMzRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2FsbFByb2R1Y3RzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgUHJvZHVjdHNCbG9jayB9IGZyb20gXCIuLi9wcm9kdWN0c0Jsb2NrL1Byb2R1Y3RzQmxvY2tcIjtcbmltcG9ydCB7IGFsbFByb2R1Y3RzU2VsZWN0b3IgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQWxsUHJvZHVjdHMoeyBzZWFyY2hQYXJhbXMgfSkge1xuICBjb25zdCBwcm9kcyA9IHVzZVNlbGVjdG9yKGFsbFByb2R1Y3RzU2VsZWN0b3IpO1xuXG4gIGNvbnN0IHVybCA9XG4gICAgXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3Byb2R1Y3RzL2ZpbHRlcj9cIiArXG4gICAgbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hQYXJhbXMpO1xuICBjb25zb2xlLmxvZyh1cmwpO1xuXG4gIHJldHVybiA8UHJvZHVjdHNCbG9jayB0aXRsZT1cItCj0YHRliDQstC40YDQvtCx0LhcIiBwcm9kdWN0cz17cHJvZHN9IG51bT17NH0gLz47XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU2VsZWN0b3IiLCJQcm9kdWN0c0Jsb2NrIiwiYWxsUHJvZHVjdHNTZWxlY3RvciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWxsUHJvZHVjdHMiLCJzZWFyY2hQYXJhbXMiLCJwcm9kcyIsInVybCIsIlVSTFNlYXJjaFBhcmFtcyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInByb2R1Y3RzIiwibnVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/allProducts/AllProducts.jsx\n"));

/***/ })

});