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

/***/ "(app-pages-browser)/./src/redux/slices/userSlice.js":
/*!***************************************!*\
  !*** ./src/redux/slices/userSlice.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setUser: function() { return /* binding */ setUser; },\n/* harmony export */   userSelector: function() { return /* binding */ userSelector; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    user: {}\n};\nconst selectors = {\n    userSelector: (state)=>state.user\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    selectors,\n    reducers: (create)=>({\n            setUser: create.reducer((state, action)=>{\n                state.user = action.payload;\n            })\n        }),\n    extraReducers: (builder)=>{\n    // builder.addCase(postOrder.pending, (state) => {\n    //   state.isLoading = true;\n    // });\n    // builder.addCase(postOrder.fulfilled, (state, action) => {\n    //   state.isLoading = false;\n    // });\n    // builder.addCase(postOrder.rejected, (state) => {\n    //   state.isLoading = false;\n    // });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (userSlice.reducer);\nconst { setUser } = userSlice.actions;\nconst { userSelector } = userSlice.selectors;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvdXNlclNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxlQUFlO0lBQ25CQyxNQUFNLENBQUM7QUFDVDtBQUVBLE1BQU1DLFlBQVk7SUFDaEJDLGNBQWMsQ0FBQ0MsUUFBVUEsTUFBTUgsSUFBSTtBQUNyQztBQUVBLE1BQU1JLFlBQVlOLDZEQUFXQSxDQUFDO0lBQzVCTyxNQUFNO0lBQ05OO0lBQ0FFO0lBQ0FLLFVBQVUsQ0FBQ0MsU0FBWTtZQUNyQkMsU0FBU0QsT0FBT0UsT0FBTyxDQUFDLENBQUNOLE9BQU9PO2dCQUM5QlAsTUFBTUgsSUFBSSxHQUFHVSxPQUFPQyxPQUFPO1lBQzdCO1FBQ0Y7SUFDQUMsZUFBZSxDQUFDQztJQUNkLGtEQUFrRDtJQUNsRCw0QkFBNEI7SUFDNUIsTUFBTTtJQUNOLDREQUE0RDtJQUM1RCw2QkFBNkI7SUFDN0IsTUFBTTtJQUNOLG1EQUFtRDtJQUNuRCw2QkFBNkI7SUFDN0IsTUFBTTtJQUNSO0FBQ0Y7QUFFQSwrREFBZVQsVUFBVUssT0FBTyxFQUFDO0FBQzFCLE1BQU0sRUFBRUQsT0FBTyxFQUFFLEdBQUdKLFVBQVVVLE9BQU8sQ0FBQztBQUN0QyxNQUFNLEVBQUVaLFlBQVksRUFBRSxHQUFHRSxVQUFVSCxTQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NsaWNlcy91c2VyU2xpY2UuanM/YmYyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcjoge30sXG59O1xuXG5jb25zdCBzZWxlY3RvcnMgPSB7XG4gIHVzZXJTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS51c2VyLFxufTtcblxuY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInVzZXJcIixcbiAgaW5pdGlhbFN0YXRlLFxuICBzZWxlY3RvcnMsXG4gIHJlZHVjZXJzOiAoY3JlYXRlKSA9PiAoe1xuICAgIHNldFVzZXI6IGNyZWF0ZS5yZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSksXG4gIH0pLFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIC8vIGJ1aWxkZXIuYWRkQ2FzZShwb3N0T3JkZXIucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgLy8gICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIC8vIH0pO1xuICAgIC8vIGJ1aWxkZXIuYWRkQ2FzZShwb3N0T3JkZXIuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIC8vICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gfSk7XG4gICAgLy8gYnVpbGRlci5hZGRDYXNlKHBvc3RPcmRlci5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgLy8gICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlcjtcbmV4cG9ydCBjb25zdCB7IHNldFVzZXIgfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGNvbnN0IHsgdXNlclNlbGVjdG9yIH0gPSB1c2VyU2xpY2Uuc2VsZWN0b3JzO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsInNlbGVjdG9ycyIsInVzZXJTZWxlY3RvciIsInN0YXRlIiwidXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiY3JlYXRlIiwic2V0VXNlciIsInJlZHVjZXIiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/userSlice.js\n"));

/***/ })

});