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

/***/ "(app-pages-browser)/./src/redux/slices/favouriteSlice.js":
/*!********************************************!*\
  !*** ./src/redux/slices/favouriteSlice.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   favouriteSelector: function() { return /* binding */ favouriteSelector; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _middlewares_favourite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/favourite */ \"(app-pages-browser)/./src/redux/middlewares/favourite.js\");\n\n\nconst initialState = {\n    favourite: [],\n    inProcess: false\n};\nconst selectors = {\n    favouriteSelector: (state)=>state.favourite\n};\nconst favouriteSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"favourite\",\n    initialState,\n    selectors,\n    extraReducers: (builder)=>{\n        builder.addCase(_middlewares_favourite__WEBPACK_IMPORTED_MODULE_0__.addToFavFunc.pending, (state)=>{\n            state.inProcess = true;\n        });\n        builder.addCase(_middlewares_favourite__WEBPACK_IMPORTED_MODULE_0__.addToFavFunc.fulfilled, (state, action)=>{\n            state.favourite = action.payload;\n            state.inProcess = false;\n        });\n        builder.addCase(_middlewares_favourite__WEBPACK_IMPORTED_MODULE_0__.addToFavFunc.rejected, (state, action)=>{\n            state.error = action.payload;\n            state.inProcess = false;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (favouriteSlice.reducer);\nconst { favouriteSelector } = favouriteSlice.selectors;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvZmF2b3VyaXRlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBQ1M7QUFFeEQsTUFBTUUsZUFBZTtJQUNuQkMsV0FBVyxFQUFFO0lBQ2JDLFdBQVc7QUFDYjtBQUNBLE1BQU1DLFlBQVk7SUFDaEJDLG1CQUFtQixDQUFDQyxRQUFVQSxNQUFNSixTQUFTO0FBQy9DO0FBRUEsTUFBTUssaUJBQWlCUiw2REFBV0EsQ0FBQztJQUNqQ1MsTUFBTTtJQUNOUDtJQUNBRztJQUNBSyxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ1gsZ0VBQVlBLENBQUNZLE9BQU8sRUFBRSxDQUFDTjtZQUNyQ0EsTUFBTUgsU0FBUyxHQUFHO1FBQ3BCO1FBQ0FPLFFBQVFDLE9BQU8sQ0FBQ1gsZ0VBQVlBLENBQUNhLFNBQVMsRUFBRSxDQUFDUCxPQUFPUTtZQUM5Q1IsTUFBTUosU0FBUyxHQUFHWSxPQUFPQyxPQUFPO1lBQ2hDVCxNQUFNSCxTQUFTLEdBQUc7UUFDcEI7UUFDQU8sUUFBUUMsT0FBTyxDQUFDWCxnRUFBWUEsQ0FBQ2dCLFFBQVEsRUFBRSxDQUFDVixPQUFPUTtZQUM3Q1IsTUFBTVcsS0FBSyxHQUFHSCxPQUFPQyxPQUFPO1lBQzVCVCxNQUFNSCxTQUFTLEdBQUc7UUFDcEI7SUFDRjtBQUNGO0FBRUEsK0RBQWVJLGVBQWVXLE9BQU8sRUFBQztBQUMvQixNQUFNLEVBQUViLGlCQUFpQixFQUFFLEdBQUdFLGVBQWVILFNBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL2Zhdm91cml0ZVNsaWNlLmpzP2RiNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgYWRkVG9GYXZGdW5jIH0gZnJvbSBcIi4uL21pZGRsZXdhcmVzL2Zhdm91cml0ZVwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGZhdm91cml0ZTogW10sXG4gIGluUHJvY2VzczogZmFsc2UsXG59O1xuY29uc3Qgc2VsZWN0b3JzID0ge1xuICBmYXZvdXJpdGVTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS5mYXZvdXJpdGUsXG59O1xuXG5jb25zdCBmYXZvdXJpdGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJmYXZvdXJpdGVcIixcbiAgaW5pdGlhbFN0YXRlLFxuICBzZWxlY3RvcnMsXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZFRvRmF2RnVuYy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmluUHJvY2VzcyA9IHRydWU7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZFRvRmF2RnVuYy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5mYXZvdXJpdGUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHN0YXRlLmluUHJvY2VzcyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShhZGRUb0ZhdkZ1bmMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgc3RhdGUuaW5Qcm9jZXNzID0gZmFsc2U7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZmF2b3VyaXRlU2xpY2UucmVkdWNlcjtcbmV4cG9ydCBjb25zdCB7IGZhdm91cml0ZVNlbGVjdG9yIH0gPSBmYXZvdXJpdGVTbGljZS5zZWxlY3RvcnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJhZGRUb0ZhdkZ1bmMiLCJpbml0aWFsU3RhdGUiLCJmYXZvdXJpdGUiLCJpblByb2Nlc3MiLCJzZWxlY3RvcnMiLCJmYXZvdXJpdGVTZWxlY3RvciIsInN0YXRlIiwiZmF2b3VyaXRlU2xpY2UiLCJuYW1lIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsImVycm9yIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/favouriteSlice.js\n"));

/***/ })

});