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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCartFunc: function() { return /* binding */ addToCartFunc; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _slices_cartSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slices/cartSlice */ \"(app-pages-browser)/./src/redux/slices/cartSlice.js\");\n\n\nconst addToCartFunc = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"cart/addToCartFunc\", (param, param1)=>{\n    let { name, currentPrice, imageUrls, itemNo, quantity, categories, date, hot, sale, count } = param, { dispatch, rejectWithValue, getState } = param1;\n    let cart = [\n        ...getState().cart.cart\n    ];\n    console.log(cart);\n    for (let product of cart){\n        if (product.itemNo === itemNo) {\n            console.log(product);\n            return {\n                ...product,\n                count: product.count + 1\n            };\n        }\n    }\n    cart.push({\n        name,\n        currentPrice,\n        imageUrls,\n        itemNo,\n        quantity,\n        categories,\n        date,\n        hot,\n        sale,\n        count\n    });\n    console.log(cart);\n    return cart;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9taWRkbGV3YXJlcy9jYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUNKO0FBRXpDLE1BQU1FLGdCQUFnQkYsa0VBQWdCQSxDQUMzQyxzQkFDQTtRQUNFLEVBQ0VHLElBQUksRUFDSkMsWUFBWSxFQUNaQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxVQUFVLEVBQ1ZDLElBQUksRUFDSkMsR0FBRyxFQUNIQyxJQUFJLEVBQ0pDLEtBQUssRUFDTixVQUNELEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFQyxRQUFRLEVBQUU7SUFFdkMsSUFBSUMsT0FBTztXQUFJRCxXQUFXQyxJQUFJLENBQUNBLElBQUk7S0FBQztJQUNwQ0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLEtBQUssSUFBSUcsV0FBV0gsS0FBTTtRQUN4QixJQUFJRyxRQUFRYixNQUFNLEtBQUtBLFFBQVE7WUFDN0JXLFFBQVFDLEdBQUcsQ0FBQ0M7WUFDWixPQUFPO2dCQUFFLEdBQUdBLE9BQU87Z0JBQUVQLE9BQU9PLFFBQVFQLEtBQUssR0FBRztZQUFFO1FBQ2hEO0lBQ0Y7SUFDQUksS0FBS0ksSUFBSSxDQUFDO1FBQ1JqQjtRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztJQUNGO0lBQ0FLLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixPQUFPQTtBQUNULEdBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L21pZGRsZXdhcmVzL2NhcnQuanM/Yzc5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IGFkZFRvQ2FydCB9IGZyb20gXCIuLi9zbGljZXMvY2FydFNsaWNlXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUb0NhcnRGdW5jID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJjYXJ0L2FkZFRvQ2FydEZ1bmNcIixcbiAgKFxuICAgIHtcbiAgICAgIG5hbWUsXG4gICAgICBjdXJyZW50UHJpY2UsXG4gICAgICBpbWFnZVVybHMsXG4gICAgICBpdGVtTm8sXG4gICAgICBxdWFudGl0eSxcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgICBkYXRlLFxuICAgICAgaG90LFxuICAgICAgc2FsZSxcbiAgICAgIGNvdW50LFxuICAgIH0sXG4gICAgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9XG4gICkgPT4ge1xuICAgIGxldCBjYXJ0ID0gWy4uLmdldFN0YXRlKCkuY2FydC5jYXJ0XTtcbiAgICBjb25zb2xlLmxvZyhjYXJ0KTtcbiAgICBmb3IgKGxldCBwcm9kdWN0IG9mIGNhcnQpIHtcbiAgICAgIGlmIChwcm9kdWN0Lml0ZW1ObyA9PT0gaXRlbU5vKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuICAgICAgICByZXR1cm4geyAuLi5wcm9kdWN0LCBjb3VudDogcHJvZHVjdC5jb3VudCArIDEgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2FydC5wdXNoKHtcbiAgICAgIG5hbWUsXG4gICAgICBjdXJyZW50UHJpY2UsXG4gICAgICBpbWFnZVVybHMsXG4gICAgICBpdGVtTm8sXG4gICAgICBxdWFudGl0eSxcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgICBkYXRlLFxuICAgICAgaG90LFxuICAgICAgc2FsZSxcbiAgICAgIGNvdW50LFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGNhcnQpO1xuICAgIHJldHVybiBjYXJ0O1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJhZGRUb0NhcnQiLCJhZGRUb0NhcnRGdW5jIiwibmFtZSIsImN1cnJlbnRQcmljZSIsImltYWdlVXJscyIsIml0ZW1ObyIsInF1YW50aXR5IiwiY2F0ZWdvcmllcyIsImRhdGUiLCJob3QiLCJzYWxlIiwiY291bnQiLCJkaXNwYXRjaCIsInJlamVjdFdpdGhWYWx1ZSIsImdldFN0YXRlIiwiY2FydCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/middlewares/cart.js\n"));

/***/ })

});