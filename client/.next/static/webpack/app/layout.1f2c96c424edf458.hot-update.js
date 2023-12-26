"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/redux/middlewares/cart.js":
/*!***************************************!*\
  !*** ./src/redux/middlewares/cart.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCartFunc: function() { return /* binding */ addToCartFunc; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _slices_cartSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slices/cartSlice */ \"(app-pages-browser)/./src/redux/slices/cartSlice.js\");\n\n\nconst addToCartFunc = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"cart/addToCartFunc\", (param, param1)=>{\n    let { name, currentPrice, imageUrls, itemNo, quantity, categories, date, hot, sale, count } = param, { dispatch, rejectWithValue, getState } = param1;\n    let cart = [\n        ...getState().cart.cart\n    ];\n    for (let product of cart){\n        if (product.itemNo === itemNo && quantity < product.count) {\n            return {\n                ...product,\n                count: product.count + 1\n            };\n        }\n    }\n    cart.push({\n        name,\n        currentPrice,\n        imageUrls,\n        itemNo,\n        quantity,\n        categories,\n        date,\n        hot,\n        sale,\n        count\n    });\n    return cart;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9taWRkbGV3YXJlcy9jYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUNKO0FBRXpDLE1BQU1FLGdCQUFnQkYsa0VBQWdCQSxDQUMzQyxzQkFDQTtRQUNFLEVBQ0VHLElBQUksRUFDSkMsWUFBWSxFQUNaQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxVQUFVLEVBQ1ZDLElBQUksRUFDSkMsR0FBRyxFQUNIQyxJQUFJLEVBQ0pDLEtBQUssRUFDTixVQUNELEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFQyxRQUFRLEVBQUU7SUFFdkMsSUFBSUMsT0FBTztXQUFJRCxXQUFXQyxJQUFJLENBQUNBLElBQUk7S0FBQztJQUNwQyxLQUFLLElBQUlDLFdBQVdELEtBQU07UUFDeEIsSUFBSUMsUUFBUVgsTUFBTSxLQUFLQSxVQUFVQyxXQUFXVSxRQUFRTCxLQUFLLEVBQUU7WUFDekQsT0FBTztnQkFBRSxHQUFHSyxPQUFPO2dCQUFFTCxPQUFPSyxRQUFRTCxLQUFLLEdBQUc7WUFBRTtRQUNoRDtJQUNGO0lBQ0FJLEtBQUtFLElBQUksQ0FBQztRQUNSZjtRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztJQUNGO0lBQ0EsT0FBT0k7QUFDVCxHQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9taWRkbGV3YXJlcy9jYXJ0LmpzP2M3OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tIFwiLi4vc2xpY2VzL2NhcnRTbGljZVwiO1xuXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0RnVuYyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiY2FydC9hZGRUb0NhcnRGdW5jXCIsXG4gIChcbiAgICB7XG4gICAgICBuYW1lLFxuICAgICAgY3VycmVudFByaWNlLFxuICAgICAgaW1hZ2VVcmxzLFxuICAgICAgaXRlbU5vLFxuICAgICAgcXVhbnRpdHksXG4gICAgICBjYXRlZ29yaWVzLFxuICAgICAgZGF0ZSxcbiAgICAgIGhvdCxcbiAgICAgIHNhbGUsXG4gICAgICBjb3VudCxcbiAgICB9LFxuICAgIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfVxuICApID0+IHtcbiAgICBsZXQgY2FydCA9IFsuLi5nZXRTdGF0ZSgpLmNhcnQuY2FydF07XG4gICAgZm9yIChsZXQgcHJvZHVjdCBvZiBjYXJ0KSB7XG4gICAgICBpZiAocHJvZHVjdC5pdGVtTm8gPT09IGl0ZW1ObyAmJiBxdWFudGl0eSA8IHByb2R1Y3QuY291bnQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJvZHVjdCwgY291bnQ6IHByb2R1Y3QuY291bnQgKyAxIH07XG4gICAgICB9XG4gICAgfVxuICAgIGNhcnQucHVzaCh7XG4gICAgICBuYW1lLFxuICAgICAgY3VycmVudFByaWNlLFxuICAgICAgaW1hZ2VVcmxzLFxuICAgICAgaXRlbU5vLFxuICAgICAgcXVhbnRpdHksXG4gICAgICBjYXRlZ29yaWVzLFxuICAgICAgZGF0ZSxcbiAgICAgIGhvdCxcbiAgICAgIHNhbGUsXG4gICAgICBjb3VudCxcbiAgICB9KTtcbiAgICByZXR1cm4gY2FydDtcbiAgfVxuKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiYWRkVG9DYXJ0IiwiYWRkVG9DYXJ0RnVuYyIsIm5hbWUiLCJjdXJyZW50UHJpY2UiLCJpbWFnZVVybHMiLCJpdGVtTm8iLCJxdWFudGl0eSIsImNhdGVnb3JpZXMiLCJkYXRlIiwiaG90Iiwic2FsZSIsImNvdW50IiwiZGlzcGF0Y2giLCJyZWplY3RXaXRoVmFsdWUiLCJnZXRTdGF0ZSIsImNhcnQiLCJwcm9kdWN0IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/middlewares/cart.js\n"));

/***/ })

});