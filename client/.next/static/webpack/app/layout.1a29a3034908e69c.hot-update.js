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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: function() { return /* binding */ addToCart; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _middlewares_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/cart */ \"(app-pages-browser)/./src/redux/middlewares/cart.js\");\n\n\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"cart\",\n    initialState: {\n        cart: [],\n        loading: false,\n        error: null,\n        totalInCart: 0,\n        totalSum: 0\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.fulfilled, (state, action)=>{\n            const existingProductIndex = state.cart.findIndex((prod)=>prod.itemNo === action.payload.itemNo);\n            if (existingProductIndex !== -1) {\n                state.cart[existingProductIndex] = action.payload;\n            } else {\n                state.cart.push(action.payload);\n            }\n            state.loading = false;\n            state.error = null;\n            state.totalInCart = state.cart.reduce((sum, item)=>item.count + sum, 0);\n        // state.totalSum = totalSum(state.card);\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addSeveralToCart.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addSeveralToCart.fulfilled, (state, action)=>{\n            const existingProductIndex = state.cart.findIndex((prod)=>prod.itemNo === action.payload.itemNo);\n            if (existingProductIndex !== -1) {\n                state.cart[existingProductIndex] = action.payload;\n            } else {\n                state.cart.push(action.payload);\n            }\n            state.loading = false;\n            state.error = null;\n            state.totalInCart = state.cart.reduce((sum, item)=>item.count + sum, 0);\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addSeveralToCart.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.delFromCart.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.delFromCart.fulfilled, (state, action)=>{\n            state.cart = action.payload;\n            state.loading = false;\n            state.error = null;\n            state.totalInCart = state.cart.reduce((sum, item)=>item.count + sum, 0);\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.delFromCart.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\nconst { addToCart } = cartSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvY2FydFNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUtsQjtBQUU3QixNQUFNSSxZQUFZSiw2REFBV0EsQ0FBQztJQUM1QkssTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLE1BQU0sRUFBRTtRQUNSQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQUMsZUFBZSxDQUFDQztRQUNkQSxRQUFRQyxPQUFPLENBQUNiLDREQUFhQSxDQUFDYyxPQUFPLEVBQUUsQ0FBQ0M7WUFDdENBLE1BQU1SLE9BQU8sR0FBRztZQUNoQlEsTUFBTVAsS0FBSyxHQUFHO1FBQ2hCO1FBQ0FJLFFBQVFDLE9BQU8sQ0FBQ2IsNERBQWFBLENBQUNnQixTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDL0MsTUFBTUMsdUJBQXVCSCxNQUFNVCxJQUFJLENBQUNhLFNBQVMsQ0FDL0MsQ0FBQ0MsT0FBU0EsS0FBS0MsTUFBTSxLQUFLSixPQUFPSyxPQUFPLENBQUNELE1BQU07WUFFakQsSUFBSUgseUJBQXlCLENBQUMsR0FBRztnQkFDL0JILE1BQU1ULElBQUksQ0FBQ1kscUJBQXFCLEdBQUdELE9BQU9LLE9BQU87WUFDbkQsT0FBTztnQkFDTFAsTUFBTVQsSUFBSSxDQUFDaUIsSUFBSSxDQUFDTixPQUFPSyxPQUFPO1lBQ2hDO1lBQ0FQLE1BQU1SLE9BQU8sR0FBRztZQUNoQlEsTUFBTVAsS0FBSyxHQUFHO1lBQ2RPLE1BQU1OLFdBQVcsR0FBR00sTUFBTVQsSUFBSSxDQUFDa0IsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE9BQVNBLEtBQUtDLEtBQUssR0FBR0YsS0FBSztRQUN2RSx5Q0FBeUM7UUFDM0M7UUFDQWIsUUFBUUMsT0FBTyxDQUFDYiw0REFBYUEsQ0FBQzRCLFFBQVEsRUFBRSxDQUFDYixPQUFPRTtZQUM5Q0YsTUFBTVIsT0FBTyxHQUFHO1lBQ2hCUSxNQUFNUCxLQUFLLEdBQUdTLE9BQU9LLE9BQU87UUFDOUI7UUFFQVYsUUFBUUMsT0FBTyxDQUFDWiwrREFBZ0JBLENBQUNhLE9BQU8sRUFBRSxDQUFDQztZQUN6Q0EsTUFBTVIsT0FBTyxHQUFHO1lBQ2hCUSxNQUFNUCxLQUFLLEdBQUc7UUFDaEI7UUFDQUksUUFBUUMsT0FBTyxDQUFDWiwrREFBZ0JBLENBQUNlLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUNsRCxNQUFNQyx1QkFBdUJILE1BQU1ULElBQUksQ0FBQ2EsU0FBUyxDQUMvQyxDQUFDQyxPQUFTQSxLQUFLQyxNQUFNLEtBQUtKLE9BQU9LLE9BQU8sQ0FBQ0QsTUFBTTtZQUVqRCxJQUFJSCx5QkFBeUIsQ0FBQyxHQUFHO2dCQUMvQkgsTUFBTVQsSUFBSSxDQUFDWSxxQkFBcUIsR0FBR0QsT0FBT0ssT0FBTztZQUNuRCxPQUFPO2dCQUNMUCxNQUFNVCxJQUFJLENBQUNpQixJQUFJLENBQUNOLE9BQU9LLE9BQU87WUFDaEM7WUFDQVAsTUFBTVIsT0FBTyxHQUFHO1lBQ2hCUSxNQUFNUCxLQUFLLEdBQUc7WUFDZE8sTUFBTU4sV0FBVyxHQUFHTSxNQUFNVCxJQUFJLENBQUNrQixNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsT0FBU0EsS0FBS0MsS0FBSyxHQUFHRixLQUFLO1FBQ3pFO1FBQ0FiLFFBQVFDLE9BQU8sQ0FBQ1osK0RBQWdCQSxDQUFDMkIsUUFBUSxFQUFFLENBQUNiLE9BQU9FO1lBQ2pERixNQUFNUixPQUFPLEdBQUc7WUFDaEJRLE1BQU1QLEtBQUssR0FBR1MsT0FBT0ssT0FBTztRQUM5QjtRQUVBVixRQUFRQyxPQUFPLENBQUNYLDBEQUFXQSxDQUFDWSxPQUFPLEVBQUUsQ0FBQ0M7WUFDcENBLE1BQU1SLE9BQU8sR0FBRztZQUNoQlEsTUFBTVAsS0FBSyxHQUFHO1FBQ2hCO1FBQ0FJLFFBQVFDLE9BQU8sQ0FBQ1gsMERBQVdBLENBQUNjLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUM3Q0YsTUFBTVQsSUFBSSxHQUFHVyxPQUFPSyxPQUFPO1lBQzNCUCxNQUFNUixPQUFPLEdBQUc7WUFDaEJRLE1BQU1QLEtBQUssR0FBRztZQUNkTyxNQUFNTixXQUFXLEdBQUdNLE1BQU1ULElBQUksQ0FBQ2tCLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxPQUFTQSxLQUFLQyxLQUFLLEdBQUdGLEtBQUs7UUFDekU7UUFDQWIsUUFBUUMsT0FBTyxDQUFDWCwwREFBV0EsQ0FBQzBCLFFBQVEsRUFBRSxDQUFDYixPQUFPRTtZQUM1Q0YsTUFBTVIsT0FBTyxHQUFHO1lBQ2hCUSxNQUFNUCxLQUFLLEdBQUdTLE9BQU9LLE9BQU87UUFDOUI7SUFDRjtBQUNGO0FBRUEsK0RBQWVuQixVQUFVMEIsT0FBTyxFQUFDO0FBQzFCLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUczQixVQUFVNEIsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvY2FydFNsaWNlLmpzPzAxMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHtcbiAgYWRkVG9DYXJ0RnVuYyxcbiAgYWRkU2V2ZXJhbFRvQ2FydCxcbiAgZGVsRnJvbUNhcnQsXG59IGZyb20gXCIuLi9taWRkbGV3YXJlcy9jYXJ0XCI7XG5cbmNvbnN0IGNhcnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJjYXJ0XCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIGNhcnQ6IFtdLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGVycm9yOiBudWxsLFxuICAgIHRvdGFsSW5DYXJ0OiAwLFxuICAgIHRvdGFsU3VtOiAwLFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhZGRUb0NhcnRGdW5jLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZFRvQ2FydEZ1bmMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdQcm9kdWN0SW5kZXggPSBzdGF0ZS5jYXJ0LmZpbmRJbmRleChcbiAgICAgICAgKHByb2QpID0+IHByb2QuaXRlbU5vID09PSBhY3Rpb24ucGF5bG9hZC5pdGVtTm9cbiAgICAgICk7XG4gICAgICBpZiAoZXhpc3RpbmdQcm9kdWN0SW5kZXggIT09IC0xKSB7XG4gICAgICAgIHN0YXRlLmNhcnRbZXhpc3RpbmdQcm9kdWN0SW5kZXhdID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5jYXJ0LnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgICAgfVxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgc3RhdGUudG90YWxJbkNhcnQgPSBzdGF0ZS5jYXJ0LnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBpdGVtLmNvdW50ICsgc3VtLCAwKTtcbiAgICAgIC8vIHN0YXRlLnRvdGFsU3VtID0gdG90YWxTdW0oc3RhdGUuY2FyZCk7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZFRvQ2FydEZ1bmMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pO1xuXG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZFNldmVyYWxUb0NhcnQucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UoYWRkU2V2ZXJhbFRvQ2FydC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ1Byb2R1Y3RJbmRleCA9IHN0YXRlLmNhcnQuZmluZEluZGV4KFxuICAgICAgICAocHJvZCkgPT4gcHJvZC5pdGVtTm8gPT09IGFjdGlvbi5wYXlsb2FkLml0ZW1Ob1xuICAgICAgKTtcbiAgICAgIGlmIChleGlzdGluZ1Byb2R1Y3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgc3RhdGUuY2FydFtleGlzdGluZ1Byb2R1Y3RJbmRleF0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmNhcnQucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICBzdGF0ZS50b3RhbEluQ2FydCA9IHN0YXRlLmNhcnQucmVkdWNlKChzdW0sIGl0ZW0pID0+IGl0ZW0uY291bnQgKyBzdW0sIDApO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhZGRTZXZlcmFsVG9DYXJ0LnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KTtcblxuICAgIGJ1aWxkZXIuYWRkQ2FzZShkZWxGcm9tQ2FydC5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShkZWxGcm9tQ2FydC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICBzdGF0ZS50b3RhbEluQ2FydCA9IHN0YXRlLmNhcnQucmVkdWNlKChzdW0sIGl0ZW0pID0+IGl0ZW0uY291bnQgKyBzdW0sIDApO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShkZWxGcm9tQ2FydC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3QgeyBhZGRUb0NhcnQgfSA9IGNhcnRTbGljZS5hY3Rpb25zO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiYWRkVG9DYXJ0RnVuYyIsImFkZFNldmVyYWxUb0NhcnQiLCJkZWxGcm9tQ2FydCIsImNhcnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0IiwibG9hZGluZyIsImVycm9yIiwidG90YWxJbkNhcnQiLCJ0b3RhbFN1bSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsImV4aXN0aW5nUHJvZHVjdEluZGV4IiwiZmluZEluZGV4IiwicHJvZCIsIml0ZW1ObyIsInBheWxvYWQiLCJwdXNoIiwicmVkdWNlIiwic3VtIiwiaXRlbSIsImNvdW50IiwicmVqZWN0ZWQiLCJyZWR1Y2VyIiwiYWRkVG9DYXJ0IiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/cartSlice.js\n"));

/***/ })

});