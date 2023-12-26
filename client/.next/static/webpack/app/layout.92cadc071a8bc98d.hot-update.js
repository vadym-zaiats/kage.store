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

/***/ "(app-pages-browser)/./src/redux/slices/cartSlice.js":
/*!***************************************!*\
  !*** ./src/redux/slices/cartSlice.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: function() { return /* binding */ addToCart; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _middlewares_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/cart */ \"(app-pages-browser)/./src/redux/middlewares/cart.js\");\n\n\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"cart\",\n    initialState: {\n        cart: []\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.fulfilled, (state, action)=>{\n            const existingItemIndex = state.cart.findIndex((item)=>item.itemNo === action.payload.itemNo);\n            if (existingItemIndex !== -1) {\n                // Если товар уже есть в корзине, обновляем его\n                state.cart[existingItemIndex] = action.payload;\n            } else {\n                // Если товара нет в корзине, добавляем его\n                state.cart.push(action.payload);\n            }\n            state.loading = false;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\nconst { addToCart } = cartSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvY2FydFNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUNLO0FBQ3BELE1BQU1FLFlBQVlGLDZEQUFXQSxDQUFDO0lBQzVCRyxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsTUFBTSxFQUFFO0lBQ1Y7SUFDQUMsZUFBZSxDQUFDQztRQUNkQSxRQUFRQyxPQUFPLENBQUNQLDREQUFhQSxDQUFDUSxPQUFPLEVBQUUsQ0FBQ0M7WUFDdENBLE1BQU1DLE9BQU8sR0FBRztZQUNoQkQsTUFBTUUsS0FBSyxHQUFHO1FBQ2hCO1FBRUFMLFFBQVFDLE9BQU8sQ0FBQ1AsNERBQWFBLENBQUNZLFNBQVMsRUFBRSxDQUFDSCxPQUFPSTtZQUMvQyxNQUFNQyxvQkFBb0JMLE1BQU1MLElBQUksQ0FBQ1csU0FBUyxDQUM1QyxDQUFDQyxPQUFTQSxLQUFLQyxNQUFNLEtBQUtKLE9BQU9LLE9BQU8sQ0FBQ0QsTUFBTTtZQUVqRCxJQUFJSCxzQkFBc0IsQ0FBQyxHQUFHO2dCQUM1QiwrQ0FBK0M7Z0JBQy9DTCxNQUFNTCxJQUFJLENBQUNVLGtCQUFrQixHQUFHRCxPQUFPSyxPQUFPO1lBQ2hELE9BQU87Z0JBQ0wsMkNBQTJDO2dCQUMzQ1QsTUFBTUwsSUFBSSxDQUFDZSxJQUFJLENBQUNOLE9BQU9LLE9BQU87WUFDaEM7WUFDQVQsTUFBTUMsT0FBTyxHQUFHO1lBQ2hCRCxNQUFNRSxLQUFLLEdBQUc7UUFDaEI7UUFFQUwsUUFBUUMsT0FBTyxDQUFDUCw0REFBYUEsQ0FBQ29CLFFBQVEsRUFBRSxDQUFDWCxPQUFPSTtZQUM5Q0osTUFBTUMsT0FBTyxHQUFHO1lBQ2hCRCxNQUFNRSxLQUFLLEdBQUdFLE9BQU9LLE9BQU87UUFDOUI7SUFDRjtBQUNGO0FBRUEsK0RBQWVqQixVQUFVb0IsT0FBTyxFQUFDO0FBQzFCLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdyQixVQUFVc0IsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvY2FydFNsaWNlLmpzPzAxMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgYWRkVG9DYXJ0RnVuYyB9IGZyb20gXCIuLi9taWRkbGV3YXJlcy9jYXJ0XCI7XG5jb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiY2FydFwiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBjYXJ0OiBbXSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2UoYWRkVG9DYXJ0RnVuYy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZFRvQ2FydEZ1bmMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdJdGVtSW5kZXggPSBzdGF0ZS5jYXJ0LmZpbmRJbmRleChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaXRlbU5vID09PSBhY3Rpb24ucGF5bG9hZC5pdGVtTm9cbiAgICAgICk7XG4gICAgICBpZiAoZXhpc3RpbmdJdGVtSW5kZXggIT09IC0xKSB7XG4gICAgICAgIC8vINCV0YHQu9C4INGC0L7QstCw0YAg0YPQttC1INC10YHRgtGMINCyINC60L7RgNC30LjQvdC1LCDQvtCx0L3QvtCy0LvRj9C10Lwg0LXQs9C+XG4gICAgICAgIHN0YXRlLmNhcnRbZXhpc3RpbmdJdGVtSW5kZXhdID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDQldGB0LvQuCDRgtC+0LLQsNGA0LAg0L3QtdGCINCyINC60L7RgNC30LjQvdC1LCDQtNC+0LHQsNCy0LvRj9C10Lwg0LXQs9C+XG4gICAgICAgIHN0YXRlLmNhcnQucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBidWlsZGVyLmFkZENhc2UoYWRkVG9DYXJ0RnVuYy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3QgeyBhZGRUb0NhcnQgfSA9IGNhcnRTbGljZS5hY3Rpb25zO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiYWRkVG9DYXJ0RnVuYyIsImNhcnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0IiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwibG9hZGluZyIsImVycm9yIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwiZXhpc3RpbmdJdGVtSW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaXRlbU5vIiwicGF5bG9hZCIsInB1c2giLCJyZWplY3RlZCIsInJlZHVjZXIiLCJhZGRUb0NhcnQiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/cartSlice.js\n"));

/***/ })

});