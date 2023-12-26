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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: function() { return /* binding */ addToCart; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _middlewares_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/cart */ \"(app-pages-browser)/./src/redux/middlewares/cart.js\");\n\n\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"cart\",\n    initialState: {\n        cart: [],\n        loading: false,\n        error: null,\n        totalInCart: 0\n    },\n    // reducers: {\n    // },\n    extraReducers: (builder)=>{\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.fulfilled, (state, action)=>{\n            const existingProductIndex = state.cart.findIndex((prod)=>prod.itemNo === action.payload.itemNo);\n            if (existingProductIndex !== -1) {\n                state.cart[existingProductIndex] = action.payload;\n            } else {\n                state.cart.push(action.payload);\n            }\n            state.loading = false;\n            state.error = null;\n            state.totalInCart = state.cart.reduce((total, count)=>item.count + count, 0);\n        });\n        builder.addCase(_middlewares_cart__WEBPACK_IMPORTED_MODULE_0__.addToCartFunc.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\nconst { addToCart } = cartSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvY2FydFNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUNLO0FBQ3BELE1BQU1FLFlBQVlGLDZEQUFXQSxDQUFDO0lBQzVCRyxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsTUFBTSxFQUFFO1FBQ1JDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxhQUFhO0lBQ2Y7SUFDQSxjQUFjO0lBQ2QsS0FBSztJQUNMQyxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ1YsNERBQWFBLENBQUNXLE9BQU8sRUFBRSxDQUFDQztZQUN0Q0EsTUFBTVAsT0FBTyxHQUFHO1lBQ2hCTyxNQUFNTixLQUFLLEdBQUc7UUFDaEI7UUFFQUcsUUFBUUMsT0FBTyxDQUFDViw0REFBYUEsQ0FBQ2EsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQy9DLE1BQU1DLHVCQUF1QkgsTUFBTVIsSUFBSSxDQUFDWSxTQUFTLENBQy9DLENBQUNDLE9BQVNBLEtBQUtDLE1BQU0sS0FBS0osT0FBT0ssT0FBTyxDQUFDRCxNQUFNO1lBRWpELElBQUlILHlCQUF5QixDQUFDLEdBQUc7Z0JBQy9CSCxNQUFNUixJQUFJLENBQUNXLHFCQUFxQixHQUFHRCxPQUFPSyxPQUFPO1lBQ25ELE9BQU87Z0JBQ0xQLE1BQU1SLElBQUksQ0FBQ2dCLElBQUksQ0FBQ04sT0FBT0ssT0FBTztZQUNoQztZQUNBUCxNQUFNUCxPQUFPLEdBQUc7WUFDaEJPLE1BQU1OLEtBQUssR0FBRztZQUNkTSxNQUFNTCxXQUFXLEdBQUdLLE1BQU1SLElBQUksQ0FBQ2lCLE1BQU0sQ0FDbkMsQ0FBQ0MsT0FBT0MsUUFBVUMsS0FBS0QsS0FBSyxHQUFHQSxPQUMvQjtRQUVKO1FBRUFkLFFBQVFDLE9BQU8sQ0FBQ1YsNERBQWFBLENBQUN5QixRQUFRLEVBQUUsQ0FBQ2IsT0FBT0U7WUFDOUNGLE1BQU1QLE9BQU8sR0FBRztZQUNoQk8sTUFBTU4sS0FBSyxHQUFHUSxPQUFPSyxPQUFPO1FBQzlCO0lBQ0Y7QUFDRjtBQUVBLCtEQUFlbEIsVUFBVXlCLE9BQU8sRUFBQztBQUMxQixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHMUIsVUFBVTJCLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL2NhcnRTbGljZS5qcz8wMTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IGFkZFRvQ2FydEZ1bmMgfSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvY2FydFwiO1xuY29uc3QgY2FydFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImNhcnRcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgY2FydDogW10sXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgdG90YWxJbkNhcnQ6IDAsXG4gIH0sXG4gIC8vIHJlZHVjZXJzOiB7XG4gIC8vIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZFRvQ2FydEZ1bmMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICB9KTtcblxuICAgIGJ1aWxkZXIuYWRkQ2FzZShhZGRUb0NhcnRGdW5jLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZHVjdEluZGV4ID0gc3RhdGUuY2FydC5maW5kSW5kZXgoXG4gICAgICAgIChwcm9kKSA9PiBwcm9kLml0ZW1ObyA9PT0gYWN0aW9uLnBheWxvYWQuaXRlbU5vXG4gICAgICApO1xuICAgICAgaWYgKGV4aXN0aW5nUHJvZHVjdEluZGV4ICE9PSAtMSkge1xuICAgICAgICBzdGF0ZS5jYXJ0W2V4aXN0aW5nUHJvZHVjdEluZGV4XSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUuY2FydC5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICAgIHN0YXRlLnRvdGFsSW5DYXJ0ID0gc3RhdGUuY2FydC5yZWR1Y2UoXG4gICAgICAgICh0b3RhbCwgY291bnQpID0+IGl0ZW0uY291bnQgKyBjb3VudCxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGJ1aWxkZXIuYWRkQ2FzZShhZGRUb0NhcnRGdW5jLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjYXJ0U2xpY2UucmVkdWNlcjtcbmV4cG9ydCBjb25zdCB7IGFkZFRvQ2FydCB9ID0gY2FydFNsaWNlLmFjdGlvbnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJhZGRUb0NhcnRGdW5jIiwiY2FydFNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImNhcnQiLCJsb2FkaW5nIiwiZXJyb3IiLCJ0b3RhbEluQ2FydCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsImV4aXN0aW5nUHJvZHVjdEluZGV4IiwiZmluZEluZGV4IiwicHJvZCIsIml0ZW1ObyIsInBheWxvYWQiLCJwdXNoIiwicmVkdWNlIiwidG90YWwiLCJjb3VudCIsIml0ZW0iLCJyZWplY3RlZCIsInJlZHVjZXIiLCJhZGRUb0NhcnQiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/cartSlice.js\n"));

/***/ })

});