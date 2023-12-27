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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: function() { return /* binding */ addToCart; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _middlewares_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/cart */ \"(app-pages-browser)/./src/redux/middlewares/cart.js\");\n\n\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"cart\",\n    initialState: {\n        cart: [],\n        loading: false,\n        error: null,\n        totalInCart: 0,\n        totalSum: 0\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.fulfilled, (state, action)=>{\n            const existingProductIndex = state.cart.findIndex((prod)=>prod.itemNo === action.payload.itemNo);\n            if (existingProductIndex !== -1) {\n                state.cart[existingProductIndex] = action.payload;\n            } else {\n                state.cart.push(action.payload);\n            }\n            state.loading = false;\n            state.error = null;\n            state.totalInCart = state.cart.reduce((sum, item)=>item.count + sum, 0);\n            state.totalSum = 1;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addSeveralToCart.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addSeveralToCart.fulfilled, (state, action)=>{\n            const existingProductIndex = state.cart.findIndex((prod)=>prod.itemNo === action.payload.itemNo);\n            if (existingProductIndex !== -1) {\n                state.cart[existingProductIndex] = action.payload;\n            } else {\n                state.cart.push(action.payload);\n            }\n            state.loading = false;\n            state.error = null;\n            state.totalInCart = state.cart.reduce((sum, item)=>item.count + sum, 0);\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addSeveralToCart.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.delFromCart.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.delFromCart.fulfilled, (state, action)=>{\n            state.cart = action.payload;\n            state.loading = false;\n            state.error = null;\n            state.totalInCart = state.cart.reduce((sum, item)=>item.count + sum, 0);\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.delFromCart.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\nconst { addToCart } = cartSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvY2FydFNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUtsQjtBQUU3QixNQUFNSSxZQUFZSiw2REFBV0EsQ0FBQztJQUM1QkssTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLE1BQU0sRUFBRTtRQUNSQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQUMsZUFBZSxDQUFDQztRQUNkQSxRQUFRQyxPQUFPLENBQUNiLDREQUFhQSxDQUFDYyxPQUFPLEVBQUUsQ0FBQ0M7WUFDdENBLE1BQU1SLE9BQU8sR0FBRztZQUNoQlEsTUFBTVAsS0FBSyxHQUFHO1FBQ2hCO1FBQ0FJLFFBQVFDLE9BQU8sQ0FBQ2IsNERBQWFBLENBQUNnQixTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDL0MsTUFBTUMsdUJBQXVCSCxNQUFNVCxJQUFJLENBQUNhLFNBQVMsQ0FDL0MsQ0FBQ0MsT0FBU0EsS0FBS0MsTUFBTSxLQUFLSixPQUFPSyxPQUFPLENBQUNELE1BQU07WUFFakQsSUFBSUgseUJBQXlCLENBQUMsR0FBRztnQkFDL0JILE1BQU1ULElBQUksQ0FBQ1kscUJBQXFCLEdBQUdELE9BQU9LLE9BQU87WUFDbkQsT0FBTztnQkFDTFAsTUFBTVQsSUFBSSxDQUFDaUIsSUFBSSxDQUFDTixPQUFPSyxPQUFPO1lBQ2hDO1lBQ0FQLE1BQU1SLE9BQU8sR0FBRztZQUNoQlEsTUFBTVAsS0FBSyxHQUFHO1lBQ2RPLE1BQU1OLFdBQVcsR0FBR00sTUFBTVQsSUFBSSxDQUFDa0IsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE9BQVNBLEtBQUtDLEtBQUssR0FBR0YsS0FBSztZQUN2RVYsTUFBTUwsUUFBUSxHQUFHO1FBQ25CO1FBQ0FFLFFBQVFDLE9BQU8sQ0FBQ2IsNERBQWFBLENBQUM0QixRQUFRLEVBQUUsQ0FBQ2IsT0FBT0U7WUFDOUNGLE1BQU1SLE9BQU8sR0FBRztZQUNoQlEsTUFBTVAsS0FBSyxHQUFHUyxPQUFPSyxPQUFPO1FBQzlCO1FBRUFWLFFBQVFDLE9BQU8sQ0FBQ1osK0RBQWdCQSxDQUFDYSxPQUFPLEVBQUUsQ0FBQ0M7WUFDekNBLE1BQU1SLE9BQU8sR0FBRztZQUNoQlEsTUFBTVAsS0FBSyxHQUFHO1FBQ2hCO1FBQ0FJLFFBQVFDLE9BQU8sQ0FBQ1osK0RBQWdCQSxDQUFDZSxTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDbEQsTUFBTUMsdUJBQXVCSCxNQUFNVCxJQUFJLENBQUNhLFNBQVMsQ0FDL0MsQ0FBQ0MsT0FBU0EsS0FBS0MsTUFBTSxLQUFLSixPQUFPSyxPQUFPLENBQUNELE1BQU07WUFFakQsSUFBSUgseUJBQXlCLENBQUMsR0FBRztnQkFDL0JILE1BQU1ULElBQUksQ0FBQ1kscUJBQXFCLEdBQUdELE9BQU9LLE9BQU87WUFDbkQsT0FBTztnQkFDTFAsTUFBTVQsSUFBSSxDQUFDaUIsSUFBSSxDQUFDTixPQUFPSyxPQUFPO1lBQ2hDO1lBQ0FQLE1BQU1SLE9BQU8sR0FBRztZQUNoQlEsTUFBTVAsS0FBSyxHQUFHO1lBQ2RPLE1BQU1OLFdBQVcsR0FBR00sTUFBTVQsSUFBSSxDQUFDa0IsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE9BQVNBLEtBQUtDLEtBQUssR0FBR0YsS0FBSztRQUN6RTtRQUNBYixRQUFRQyxPQUFPLENBQUNaLCtEQUFnQkEsQ0FBQzJCLFFBQVEsRUFBRSxDQUFDYixPQUFPRTtZQUNqREYsTUFBTVIsT0FBTyxHQUFHO1lBQ2hCUSxNQUFNUCxLQUFLLEdBQUdTLE9BQU9LLE9BQU87UUFDOUI7UUFFQVYsUUFBUUMsT0FBTyxDQUFDWCwwREFBV0EsQ0FBQ1ksT0FBTyxFQUFFLENBQUNDO1lBQ3BDQSxNQUFNUixPQUFPLEdBQUc7WUFDaEJRLE1BQU1QLEtBQUssR0FBRztRQUNoQjtRQUNBSSxRQUFRQyxPQUFPLENBQUNYLDBEQUFXQSxDQUFDYyxTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDN0NGLE1BQU1ULElBQUksR0FBR1csT0FBT0ssT0FBTztZQUMzQlAsTUFBTVIsT0FBTyxHQUFHO1lBQ2hCUSxNQUFNUCxLQUFLLEdBQUc7WUFDZE8sTUFBTU4sV0FBVyxHQUFHTSxNQUFNVCxJQUFJLENBQUNrQixNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsT0FBU0EsS0FBS0MsS0FBSyxHQUFHRixLQUFLO1FBQ3pFO1FBQ0FiLFFBQVFDLE9BQU8sQ0FBQ1gsMERBQVdBLENBQUMwQixRQUFRLEVBQUUsQ0FBQ2IsT0FBT0U7WUFDNUNGLE1BQU1SLE9BQU8sR0FBRztZQUNoQlEsTUFBTVAsS0FBSyxHQUFHUyxPQUFPSyxPQUFPO1FBQzlCO0lBQ0Y7QUFDRjtBQUVBLCtEQUFlbkIsVUFBVTBCLE9BQU8sRUFBQztBQUMxQixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHM0IsVUFBVTRCLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL2NhcnRTbGljZS5qcz8wMTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7XG4gIGFkZFRvQ2FydEZ1bmMsXG4gIGFkZFNldmVyYWxUb0NhcnQsXG4gIGRlbEZyb21DYXJ0LFxufSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvY2FydFwiO1xuXG5jb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiY2FydFwiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBjYXJ0OiBbXSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICB0b3RhbEluQ2FydDogMCxcbiAgICB0b3RhbFN1bTogMCxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2UoYWRkVG9DYXJ0RnVuYy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhZGRUb0NhcnRGdW5jLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZHVjdEluZGV4ID0gc3RhdGUuY2FydC5maW5kSW5kZXgoXG4gICAgICAgIChwcm9kKSA9PiBwcm9kLml0ZW1ObyA9PT0gYWN0aW9uLnBheWxvYWQuaXRlbU5vXG4gICAgICApO1xuICAgICAgaWYgKGV4aXN0aW5nUHJvZHVjdEluZGV4ICE9PSAtMSkge1xuICAgICAgICBzdGF0ZS5jYXJ0W2V4aXN0aW5nUHJvZHVjdEluZGV4XSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUuY2FydC5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICAgIHN0YXRlLnRvdGFsSW5DYXJ0ID0gc3RhdGUuY2FydC5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gaXRlbS5jb3VudCArIHN1bSwgMCk7XG4gICAgICBzdGF0ZS50b3RhbFN1bSA9IDE7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZFRvQ2FydEZ1bmMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pO1xuXG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZFNldmVyYWxUb0NhcnQucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UoYWRkU2V2ZXJhbFRvQ2FydC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ1Byb2R1Y3RJbmRleCA9IHN0YXRlLmNhcnQuZmluZEluZGV4KFxuICAgICAgICAocHJvZCkgPT4gcHJvZC5pdGVtTm8gPT09IGFjdGlvbi5wYXlsb2FkLml0ZW1Ob1xuICAgICAgKTtcbiAgICAgIGlmIChleGlzdGluZ1Byb2R1Y3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgc3RhdGUuY2FydFtleGlzdGluZ1Byb2R1Y3RJbmRleF0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmNhcnQucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICBzdGF0ZS50b3RhbEluQ2FydCA9IHN0YXRlLmNhcnQucmVkdWNlKChzdW0sIGl0ZW0pID0+IGl0ZW0uY291bnQgKyBzdW0sIDApO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhZGRTZXZlcmFsVG9DYXJ0LnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KTtcblxuICAgIGJ1aWxkZXIuYWRkQ2FzZShkZWxGcm9tQ2FydC5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShkZWxGcm9tQ2FydC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICBzdGF0ZS50b3RhbEluQ2FydCA9IHN0YXRlLmNhcnQucmVkdWNlKChzdW0sIGl0ZW0pID0+IGl0ZW0uY291bnQgKyBzdW0sIDApO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShkZWxGcm9tQ2FydC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3QgeyBhZGRUb0NhcnQgfSA9IGNhcnRTbGljZS5hY3Rpb25zO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiYWRkVG9DYXJ0RnVuYyIsImFkZFNldmVyYWxUb0NhcnQiLCJkZWxGcm9tQ2FydCIsImNhcnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0IiwibG9hZGluZyIsImVycm9yIiwidG90YWxJbkNhcnQiLCJ0b3RhbFN1bSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsImV4aXN0aW5nUHJvZHVjdEluZGV4IiwiZmluZEluZGV4IiwicHJvZCIsIml0ZW1ObyIsInBheWxvYWQiLCJwdXNoIiwicmVkdWNlIiwic3VtIiwiaXRlbSIsImNvdW50IiwicmVqZWN0ZWQiLCJyZWR1Y2VyIiwiYWRkVG9DYXJ0IiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/cartSlice.js\n"));

/***/ })

});