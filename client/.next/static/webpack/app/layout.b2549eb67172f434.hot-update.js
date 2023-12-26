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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: function() { return /* binding */ addToCart; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _middlewares_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/cart */ \"(app-pages-browser)/./src/redux/middlewares/cart.js\");\n\n\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"cart\",\n    initialState: {\n        cart: [],\n        loading: false,\n        error: null,\n        totalInCart: 0\n    },\n    reducers: {\n        setTotalInCart: (state, action)=>{}\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.fulfilled, (state, action)=>{\n            const existingProductIndex = state.cart.findIndex((prod)=>prod.itemNo === action.payload.itemNo);\n            if (existingProductIndex !== -1) {\n                state.cart[existingProductIndex] = action.payload;\n            } else {\n                state.cart.push(action.payload);\n            }\n            state.loading = false;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\nconst { addToCart } = cartSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvY2FydFNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUNLO0FBQ3BELE1BQU1FLFlBQVlGLDZEQUFXQSxDQUFDO0lBQzVCRyxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsTUFBTSxFQUFFO1FBQ1JDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxhQUFhO0lBQ2Y7SUFDQUMsVUFBVTtRQUNSQyxnQkFBZ0IsQ0FBQ0MsT0FBT0MsVUFBWTtJQUN0QztJQUNBQyxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ2QsNERBQWFBLENBQUNlLE9BQU8sRUFBRSxDQUFDTDtZQUN0Q0EsTUFBTUwsT0FBTyxHQUFHO1lBQ2hCSyxNQUFNSixLQUFLLEdBQUc7UUFDaEI7UUFFQU8sUUFBUUMsT0FBTyxDQUFDZCw0REFBYUEsQ0FBQ2dCLFNBQVMsRUFBRSxDQUFDTixPQUFPQztZQUMvQyxNQUFNTSx1QkFBdUJQLE1BQU1OLElBQUksQ0FBQ2MsU0FBUyxDQUMvQyxDQUFDQyxPQUFTQSxLQUFLQyxNQUFNLEtBQUtULE9BQU9VLE9BQU8sQ0FBQ0QsTUFBTTtZQUVqRCxJQUFJSCx5QkFBeUIsQ0FBQyxHQUFHO2dCQUMvQlAsTUFBTU4sSUFBSSxDQUFDYSxxQkFBcUIsR0FBR04sT0FBT1UsT0FBTztZQUNuRCxPQUFPO2dCQUNMWCxNQUFNTixJQUFJLENBQUNrQixJQUFJLENBQUNYLE9BQU9VLE9BQU87WUFDaEM7WUFDQVgsTUFBTUwsT0FBTyxHQUFHO1lBQ2hCSyxNQUFNSixLQUFLLEdBQUc7UUFDaEI7UUFFQU8sUUFBUUMsT0FBTyxDQUFDZCw0REFBYUEsQ0FBQ3VCLFFBQVEsRUFBRSxDQUFDYixPQUFPQztZQUM5Q0QsTUFBTUwsT0FBTyxHQUFHO1lBQ2hCSyxNQUFNSixLQUFLLEdBQUdLLE9BQU9VLE9BQU87UUFDOUI7SUFDRjtBQUNGO0FBRUEsK0RBQWVwQixVQUFVdUIsT0FBTyxFQUFDO0FBQzFCLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUd4QixVQUFVeUIsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvY2FydFNsaWNlLmpzPzAxMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgYWRkVG9DYXJ0RnVuYyB9IGZyb20gXCIuLi9taWRkbGV3YXJlcy9jYXJ0XCI7XG5jb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiY2FydFwiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBjYXJ0OiBbXSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICB0b3RhbEluQ2FydDogMCxcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRUb3RhbEluQ2FydDogKHN0YXRlLCBhY3Rpb24pID0+IHt9LFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhZGRUb0NhcnRGdW5jLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBidWlsZGVyLmFkZENhc2UoYWRkVG9DYXJ0RnVuYy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ1Byb2R1Y3RJbmRleCA9IHN0YXRlLmNhcnQuZmluZEluZGV4KFxuICAgICAgICAocHJvZCkgPT4gcHJvZC5pdGVtTm8gPT09IGFjdGlvbi5wYXlsb2FkLml0ZW1Ob1xuICAgICAgKTtcbiAgICAgIGlmIChleGlzdGluZ1Byb2R1Y3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgc3RhdGUuY2FydFtleGlzdGluZ1Byb2R1Y3RJbmRleF0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmNhcnQucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBidWlsZGVyLmFkZENhc2UoYWRkVG9DYXJ0RnVuYy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3QgeyBhZGRUb0NhcnQgfSA9IGNhcnRTbGljZS5hY3Rpb25zO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiYWRkVG9DYXJ0RnVuYyIsImNhcnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0IiwibG9hZGluZyIsImVycm9yIiwidG90YWxJbkNhcnQiLCJyZWR1Y2VycyIsInNldFRvdGFsSW5DYXJ0Iiwic3RhdGUiLCJhY3Rpb24iLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwiZXhpc3RpbmdQcm9kdWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJwcm9kIiwiaXRlbU5vIiwicGF5bG9hZCIsInB1c2giLCJyZWplY3RlZCIsInJlZHVjZXIiLCJhZGRUb0NhcnQiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/cartSlice.js\n"));

/***/ })

});