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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSlice: function() { return /* binding */ createSlice; },\n/* harmony export */   favouriteSelector: function() { return /* binding */ favouriteSelector; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _middlewares_favourite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/favourite */ \"(app-pages-browser)/./src/redux/middlewares/favourite.js\");\n\n\nconst createSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.buildCreateSlice)({\n    creators: {\n        asyncThunk: _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.asyncThunkCreator\n    }\n});\nconst initialState = {\n    favourite: []\n};\nconst selectors = {\n    favouriteSelector: (state)=>state.favourite\n};\nconst favouriteSlice = createSlice({\n    name: \"favourite\",\n    initialState,\n    selectors,\n    reducers: (create)=>({\n            setBurger: create.reducer()\n        })\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (favouriteSlice.reducer);\nconst { favouriteSelector } = favouriteSlice.selectors;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvZmF2b3VyaXRlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1RTtBQUNmO0FBRWpELE1BQU1HLGNBQWNILGtFQUFnQkEsQ0FBQztJQUMxQ0ksVUFBVTtRQUFFQyxZQUFZSiwrREFBaUJBO0lBQUM7QUFDNUMsR0FBRztBQUVILE1BQU1LLGVBQWU7SUFDbkJDLFdBQVcsRUFBRTtBQUNmO0FBQ0EsTUFBTUMsWUFBWTtJQUNoQkMsbUJBQW1CLENBQUNDLFFBQVVBLE1BQU1ILFNBQVM7QUFDL0M7QUFFQSxNQUFNSSxpQkFBaUJSLFlBQVk7SUFDakNTLE1BQU07SUFDTk47SUFDQUU7SUFDQUssVUFBVSxDQUFDQyxTQUFZO1lBQ3JCQyxXQUFXRCxPQUFPRSxPQUFPO1FBQzNCO0FBU0Y7QUFFQSwrREFBZUwsZUFBZUssT0FBTyxFQUFDO0FBQy9CLE1BQU0sRUFBRVAsaUJBQWlCLEVBQUUsR0FBR0UsZUFBZUgsU0FBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvZmF2b3VyaXRlU2xpY2UuanM/ZGI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBidWlsZENyZWF0ZVNsaWNlLCBhc3luY1RodW5rQ3JlYXRvciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBhZGRUb0ZhdkZ1bmMgfSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvZmF2b3VyaXRlXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTbGljZSA9IGJ1aWxkQ3JlYXRlU2xpY2Uoe1xuICBjcmVhdG9yczogeyBhc3luY1RodW5rOiBhc3luY1RodW5rQ3JlYXRvciB9LFxufSk7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZmF2b3VyaXRlOiBbXSxcbn07XG5jb25zdCBzZWxlY3RvcnMgPSB7XG4gIGZhdm91cml0ZVNlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmZhdm91cml0ZSxcbn07XG5cbmNvbnN0IGZhdm91cml0ZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImZhdm91cml0ZVwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHNlbGVjdG9ycyxcbiAgcmVkdWNlcnM6IChjcmVhdGUpID0+ICh7XG4gICAgc2V0QnVyZ2VyOiBjcmVhdGUucmVkdWNlcigpLFxuICB9KSxcbiAgLy8gZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgLy8gICBidWlsZGVyLmFkZENhc2UoYWRkVG9GYXZGdW5jLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgLy8gICAgIHN0YXRlLmZhdm91cml0ZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAvLyAgIH0pO1xuICAvLyAgIGJ1aWxkZXIuYWRkQ2FzZShhZGRUb0ZhdkZ1bmMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIC8vICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAvLyAgIH0pO1xuICAvLyB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZhdm91cml0ZVNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3QgeyBmYXZvdXJpdGVTZWxlY3RvciB9ID0gZmF2b3VyaXRlU2xpY2Uuc2VsZWN0b3JzO1xuIl0sIm5hbWVzIjpbImJ1aWxkQ3JlYXRlU2xpY2UiLCJhc3luY1RodW5rQ3JlYXRvciIsImFkZFRvRmF2RnVuYyIsImNyZWF0ZVNsaWNlIiwiY3JlYXRvcnMiLCJhc3luY1RodW5rIiwiaW5pdGlhbFN0YXRlIiwiZmF2b3VyaXRlIiwic2VsZWN0b3JzIiwiZmF2b3VyaXRlU2VsZWN0b3IiLCJzdGF0ZSIsImZhdm91cml0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiY3JlYXRlIiwic2V0QnVyZ2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/favouriteSlice.js\n"));

/***/ })

});