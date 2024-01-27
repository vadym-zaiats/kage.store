"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cart/page",{

/***/ "(app-pages-browser)/./src/redux/slices/cartSlice.js":
/*!***************************************!*\
  !*** ./src/redux/slices/cartSlice.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cartSelector: function() { return /* binding */ cartSelector; },\n/* harmony export */   cartTotalCountSelector: function() { return /* binding */ cartTotalCountSelector; },\n/* harmony export */   cartTotalSumSelector: function() { return /* binding */ cartTotalSumSelector; },\n/* harmony export */   errorCartSelector: function() { return /* binding */ errorCartSelector; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _middlewares_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/cart */ \"(app-pages-browser)/./src/redux/middlewares/cart.js\");\n\n\nconst initialState = {\n    cart: [],\n    loading: false,\n    error: null,\n    totalCount: 0,\n    totalSum: 0,\n    modalIsOpen: false\n};\nconst selectors = {\n    cartSelector: (state)=>state.cart,\n    errorCartSelector: (state)=>state.error,\n    cartTotalCountSelector: (state)=>state.totalCount,\n    cartTotalSumSelector: (state)=>state.totalSum\n};\nconst calcCartPriceSum = (productsInCart)=>{\n    const arrOfSums = [];\n    productsInCart.map((prod)=>{\n        arrOfSums.push(prod.count * prod.currentPrice);\n    });\n    const totalSum = arrOfSums.reduce((sum, item)=>item + sum, 0);\n    return totalSum;\n};\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"cart\",\n    initialState,\n    selectors,\n    extraReducers: (builder)=>{\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCart.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCart.fulfilled, (state, action)=>{\n            const existingProductIndex = state.cart.findIndex((prod)=>prod.itemNo === action.payload.itemNo);\n            if (existingProductIndex !== -1) {\n                state.cart[existingProductIndex] = action.payload;\n            } else {\n                state.cart.push(action.payload);\n            }\n            state.loading = false;\n            state.error = null;\n            state.totalCount = state.cart.reduce((sum, item)=>item.count + sum, 0);\n            state.totalSum = calcCartPriceSum(state.cart);\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCart.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.delFromCart.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.delFromCart.fulfilled, (state, action)=>{\n            state.cart = action.payload;\n            state.loading = false;\n            state.error = null;\n            state.totalCount = state.cart.reduce((sum, item)=>item.count + sum, 0);\n            state.totalSum = calcCartPriceSum(state.cart);\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.delFromCart.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\nconst { cartSelector, errorCartSelector, cartTotalCountSelector, cartTotalSumSelector } = cartSlice.selectors;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvY2FydFNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQztBQUNjO0FBRTdELE1BQU1HLGVBQWU7SUFDbkJDLE1BQU0sRUFBRTtJQUNSQyxTQUFTO0lBQ1RDLE9BQU87SUFDUEMsWUFBWTtJQUNaQyxVQUFVO0lBQ1ZDLGFBQWE7QUFDZjtBQUVBLE1BQU1DLFlBQVk7SUFDaEJDLGNBQWMsQ0FBQ0MsUUFBVUEsTUFBTVIsSUFBSTtJQUNuQ1MsbUJBQW1CLENBQUNELFFBQVVBLE1BQU1OLEtBQUs7SUFDekNRLHdCQUF3QixDQUFDRixRQUFVQSxNQUFNTCxVQUFVO0lBQ25EUSxzQkFBc0IsQ0FBQ0gsUUFBVUEsTUFBTUosUUFBUTtBQUNqRDtBQUVBLE1BQU1RLG1CQUFtQixDQUFDQztJQUN4QixNQUFNQyxZQUFZLEVBQUU7SUFDcEJELGVBQWVFLEdBQUcsQ0FBQyxDQUFDQztRQUNsQkYsVUFBVUcsSUFBSSxDQUFDRCxLQUFLRSxLQUFLLEdBQUdGLEtBQUtHLFlBQVk7SUFDL0M7SUFDQSxNQUFNZixXQUFXVSxVQUFVTSxNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsT0FBU0EsT0FBT0QsS0FBSztJQUM3RCxPQUFPakI7QUFDVDtBQUVBLE1BQU1tQixZQUFZM0IsNkRBQVdBLENBQUM7SUFDNUI0QixNQUFNO0lBQ056QjtJQUNBTztJQUNBbUIsZUFBZSxDQUFDQztRQUNkQSxRQUFRQyxPQUFPLENBQUM5Qix3REFBU0EsQ0FBQytCLE9BQU8sRUFBRSxDQUFDcEI7WUFDbENBLE1BQU1QLE9BQU8sR0FBRztZQUNoQk8sTUFBTU4sS0FBSyxHQUFHO1FBQ2hCO1FBQ0F3QixRQUFRQyxPQUFPLENBQUM5Qix3REFBU0EsQ0FBQ2dDLFNBQVMsRUFBRSxDQUFDckIsT0FBT3NCO1lBQzNDLE1BQU1DLHVCQUF1QnZCLE1BQU1SLElBQUksQ0FBQ2dDLFNBQVMsQ0FDL0MsQ0FBQ2hCLE9BQVNBLEtBQUtpQixNQUFNLEtBQUtILE9BQU9JLE9BQU8sQ0FBQ0QsTUFBTTtZQUVqRCxJQUFJRix5QkFBeUIsQ0FBQyxHQUFHO2dCQUMvQnZCLE1BQU1SLElBQUksQ0FBQytCLHFCQUFxQixHQUFHRCxPQUFPSSxPQUFPO1lBQ25ELE9BQU87Z0JBQ0wxQixNQUFNUixJQUFJLENBQUNpQixJQUFJLENBQUNhLE9BQU9JLE9BQU87WUFDaEM7WUFDQTFCLE1BQU1QLE9BQU8sR0FBRztZQUNoQk8sTUFBTU4sS0FBSyxHQUFHO1lBQ2RNLE1BQU1MLFVBQVUsR0FBR0ssTUFBTVIsSUFBSSxDQUFDb0IsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE9BQVNBLEtBQUtKLEtBQUssR0FBR0csS0FBSztZQUN0RWIsTUFBTUosUUFBUSxHQUFHUSxpQkFBaUJKLE1BQU1SLElBQUk7UUFDOUM7UUFDQTBCLFFBQVFDLE9BQU8sQ0FBQzlCLHdEQUFTQSxDQUFDc0MsUUFBUSxFQUFFLENBQUMzQixPQUFPc0I7WUFDMUN0QixNQUFNUCxPQUFPLEdBQUc7WUFDaEJPLE1BQU1OLEtBQUssR0FBRzRCLE9BQU9JLE9BQU87UUFDOUI7UUFFQVIsUUFBUUMsT0FBTyxDQUFDN0IsMERBQVdBLENBQUM4QixPQUFPLEVBQUUsQ0FBQ3BCO1lBQ3BDQSxNQUFNUCxPQUFPLEdBQUc7WUFDaEJPLE1BQU1OLEtBQUssR0FBRztRQUNoQjtRQUNBd0IsUUFBUUMsT0FBTyxDQUFDN0IsMERBQVdBLENBQUMrQixTQUFTLEVBQUUsQ0FBQ3JCLE9BQU9zQjtZQUM3Q3RCLE1BQU1SLElBQUksR0FBRzhCLE9BQU9JLE9BQU87WUFDM0IxQixNQUFNUCxPQUFPLEdBQUc7WUFDaEJPLE1BQU1OLEtBQUssR0FBRztZQUNkTSxNQUFNTCxVQUFVLEdBQUdLLE1BQU1SLElBQUksQ0FBQ29CLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxPQUFTQSxLQUFLSixLQUFLLEdBQUdHLEtBQUs7WUFDdEViLE1BQU1KLFFBQVEsR0FBR1EsaUJBQWlCSixNQUFNUixJQUFJO1FBQzlDO1FBQ0EwQixRQUFRQyxPQUFPLENBQUM3QiwwREFBV0EsQ0FBQ3FDLFFBQVEsRUFBRSxDQUFDM0IsT0FBT3NCO1lBQzVDdEIsTUFBTVAsT0FBTyxHQUFHO1lBQ2hCTyxNQUFNTixLQUFLLEdBQUc0QixPQUFPSSxPQUFPO1FBQzlCO0lBQ0Y7QUFDRjtBQUVBLCtEQUFlWCxVQUFVYSxPQUFPLEVBQUM7QUFDMUIsTUFBTSxFQUNYN0IsWUFBWSxFQUNaRSxpQkFBaUIsRUFDakJDLHNCQUFzQixFQUN0QkMsb0JBQW9CLEVBQ3JCLEdBQUdZLFVBQVVqQixTQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NsaWNlcy9jYXJ0U2xpY2UuanM/MDExZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBhZGRUb0NhcnQsIGRlbEZyb21DYXJ0IH0gZnJvbSBcIi4uL21pZGRsZXdhcmVzL2NhcnRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjYXJ0OiBbXSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBudWxsLFxuICB0b3RhbENvdW50OiAwLFxuICB0b3RhbFN1bTogMCxcbiAgbW9kYWxJc09wZW46IGZhbHNlLFxufTtcblxuY29uc3Qgc2VsZWN0b3JzID0ge1xuICBjYXJ0U2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuY2FydCxcbiAgZXJyb3JDYXJ0U2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuZXJyb3IsXG4gIGNhcnRUb3RhbENvdW50U2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUudG90YWxDb3VudCxcbiAgY2FydFRvdGFsU3VtU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUudG90YWxTdW0sXG59O1xuXG5jb25zdCBjYWxjQ2FydFByaWNlU3VtID0gKHByb2R1Y3RzSW5DYXJ0KSA9PiB7XG4gIGNvbnN0IGFyck9mU3VtcyA9IFtdO1xuICBwcm9kdWN0c0luQ2FydC5tYXAoKHByb2QpID0+IHtcbiAgICBhcnJPZlN1bXMucHVzaChwcm9kLmNvdW50ICogcHJvZC5jdXJyZW50UHJpY2UpO1xuICB9KTtcbiAgY29uc3QgdG90YWxTdW0gPSBhcnJPZlN1bXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IGl0ZW0gKyBzdW0sIDApO1xuICByZXR1cm4gdG90YWxTdW07XG59O1xuXG5jb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiY2FydFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHNlbGVjdG9ycyxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2UoYWRkVG9DYXJ0LnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZFRvQ2FydC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ1Byb2R1Y3RJbmRleCA9IHN0YXRlLmNhcnQuZmluZEluZGV4KFxuICAgICAgICAocHJvZCkgPT4gcHJvZC5pdGVtTm8gPT09IGFjdGlvbi5wYXlsb2FkLml0ZW1Ob1xuICAgICAgKTtcbiAgICAgIGlmIChleGlzdGluZ1Byb2R1Y3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgc3RhdGUuY2FydFtleGlzdGluZ1Byb2R1Y3RJbmRleF0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmNhcnQucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICBzdGF0ZS50b3RhbENvdW50ID0gc3RhdGUuY2FydC5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gaXRlbS5jb3VudCArIHN1bSwgMCk7XG4gICAgICBzdGF0ZS50b3RhbFN1bSA9IGNhbGNDYXJ0UHJpY2VTdW0oc3RhdGUuY2FydCk7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZFRvQ2FydC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSk7XG5cbiAgICBidWlsZGVyLmFkZENhc2UoZGVsRnJvbUNhcnQucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UoZGVsRnJvbUNhcnQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuY2FydCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgc3RhdGUudG90YWxDb3VudCA9IHN0YXRlLmNhcnQucmVkdWNlKChzdW0sIGl0ZW0pID0+IGl0ZW0uY291bnQgKyBzdW0sIDApO1xuICAgICAgc3RhdGUudG90YWxTdW0gPSBjYWxjQ2FydFByaWNlU3VtKHN0YXRlLmNhcnQpO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShkZWxGcm9tQ2FydC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3Qge1xuICBjYXJ0U2VsZWN0b3IsXG4gIGVycm9yQ2FydFNlbGVjdG9yLFxuICBjYXJ0VG90YWxDb3VudFNlbGVjdG9yLFxuICBjYXJ0VG90YWxTdW1TZWxlY3Rvcixcbn0gPSBjYXJ0U2xpY2Uuc2VsZWN0b3JzO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiYWRkVG9DYXJ0IiwiZGVsRnJvbUNhcnQiLCJpbml0aWFsU3RhdGUiLCJjYXJ0IiwibG9hZGluZyIsImVycm9yIiwidG90YWxDb3VudCIsInRvdGFsU3VtIiwibW9kYWxJc09wZW4iLCJzZWxlY3RvcnMiLCJjYXJ0U2VsZWN0b3IiLCJzdGF0ZSIsImVycm9yQ2FydFNlbGVjdG9yIiwiY2FydFRvdGFsQ291bnRTZWxlY3RvciIsImNhcnRUb3RhbFN1bVNlbGVjdG9yIiwiY2FsY0NhcnRQcmljZVN1bSIsInByb2R1Y3RzSW5DYXJ0IiwiYXJyT2ZTdW1zIiwibWFwIiwicHJvZCIsInB1c2giLCJjb3VudCIsImN1cnJlbnRQcmljZSIsInJlZHVjZSIsInN1bSIsIml0ZW0iLCJjYXJ0U2xpY2UiLCJuYW1lIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsImFjdGlvbiIsImV4aXN0aW5nUHJvZHVjdEluZGV4IiwiZmluZEluZGV4IiwiaXRlbU5vIiwicGF5bG9hZCIsInJlamVjdGVkIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/cartSlice.js\n"));

/***/ })

});