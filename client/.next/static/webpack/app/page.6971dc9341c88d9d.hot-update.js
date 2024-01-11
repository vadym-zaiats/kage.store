"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/redux/slices/productsSlice.js":
/*!*******************************************!*\
  !*** ./src/redux/slices/productsSlice.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allProductsSelector: function() { return /* binding */ allProductsSelector; },\n/* harmony export */   hotProductsSelector: function() { return /* binding */ hotProductsSelector; },\n/* harmony export */   isLoadingSelector: function() { return /* binding */ isLoadingSelector; },\n/* harmony export */   newProductsSelector: function() { return /* binding */ newProductsSelector; },\n/* harmony export */   saleProductsSelector: function() { return /* binding */ saleProductsSelector; },\n/* harmony export */   setProducts: function() { return /* binding */ setProducts; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    allProducts: [],\n    hotProducts: [],\n    newProducts: [],\n    saleProducts: [],\n    isLoading: true\n};\nconst selectors = {\n    allProductsSelector: (state)=>state.allProducts,\n    hotProductsSelector: (state)=>state.hotProducts,\n    newProductsSelector: (state)=>state.newProducts,\n    saleProductsSelector: (state)=>state.saleProducts,\n    isLoadingSelector: (state)=>state.isLoading\n};\nconst productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"allProducts\",\n    initialState,\n    selectors,\n    reducers: (create)=>({\n            setProducts: create.reducer((state, action)=>{\n                state.isLoading = false;\n                state.allProducts = action.payload;\n                state.hotProducts = action.payload.filter((obj)=>{\n                    return obj.hot === true;\n                });\n                state.newProducts = action.payload.filter((obj)=>{\n                    return new Date(obj.date) > new Date(\"2023-12-10T12:47:48.042Z\");\n                });\n                state.saleProducts = action.payload.filter((obj)=>{\n                    return obj.sale === true;\n                });\n            })\n        })\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\nconst { allProductsSelector, hotProductsSelector, newProductsSelector, saleProductsSelector, isLoadingSelector } = productsSlice.selectors;\nconst { setProducts } = productsSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLGVBQWU7SUFDbkJDLGFBQWEsRUFBRTtJQUNmQyxhQUFhLEVBQUU7SUFDZkMsYUFBYSxFQUFFO0lBQ2ZDLGNBQWMsRUFBRTtJQUNoQkMsV0FBVztBQUNiO0FBRUEsTUFBTUMsWUFBWTtJQUNoQkMscUJBQXFCLENBQUNDLFFBQVVBLE1BQU1QLFdBQVc7SUFDakRRLHFCQUFxQixDQUFDRCxRQUFVQSxNQUFNTixXQUFXO0lBQ2pEUSxxQkFBcUIsQ0FBQ0YsUUFBVUEsTUFBTUwsV0FBVztJQUNqRFEsc0JBQXNCLENBQUNILFFBQVVBLE1BQU1KLFlBQVk7SUFDbkRRLG1CQUFtQixDQUFDSixRQUFVQSxNQUFNSCxTQUFTO0FBQy9DO0FBRUEsTUFBTVEsZ0JBQWdCZCw2REFBV0EsQ0FBQztJQUNoQ2UsTUFBTTtJQUNOZDtJQUNBTTtJQUNBUyxVQUFVLENBQUNDLFNBQVk7WUFDckJDLGFBQWFELE9BQU9FLE9BQU8sQ0FBQyxDQUFDVixPQUFPVztnQkFDbENYLE1BQU1ILFNBQVMsR0FBRztnQkFDbEJHLE1BQU1QLFdBQVcsR0FBR2tCLE9BQU9DLE9BQU87Z0JBQ2xDWixNQUFNTixXQUFXLEdBQUdpQixPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDQztvQkFDekMsT0FBT0EsSUFBSUMsR0FBRyxLQUFLO2dCQUNyQjtnQkFDQWYsTUFBTUwsV0FBVyxHQUFHZ0IsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0M7b0JBQ3pDLE9BQU8sSUFBSUUsS0FBS0YsSUFBSUcsSUFBSSxJQUFJLElBQUlELEtBQUs7Z0JBQ3ZDO2dCQUNBaEIsTUFBTUosWUFBWSxHQUFHZSxPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDQztvQkFDMUMsT0FBT0EsSUFBSUksSUFBSSxLQUFLO2dCQUN0QjtZQUNGO1FBQ0Y7QUFnQkY7QUFFQSwrREFBZWIsY0FBY0ssT0FBTyxFQUFDO0FBRTlCLE1BQU0sRUFDWFgsbUJBQW1CLEVBQ25CRSxtQkFBbUIsRUFDbkJDLG1CQUFtQixFQUNuQkMsb0JBQW9CLEVBQ3BCQyxpQkFBaUIsRUFDbEIsR0FBR0MsY0FBY1AsU0FBUyxDQUFDO0FBRXJCLE1BQU0sRUFBRVcsV0FBVyxFQUFFLEdBQUdKLGNBQWNjLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL3Byb2R1Y3RzU2xpY2UuanM/MmI5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYWxsUHJvZHVjdHM6IFtdLFxuICBob3RQcm9kdWN0czogW10sXG4gIG5ld1Byb2R1Y3RzOiBbXSxcbiAgc2FsZVByb2R1Y3RzOiBbXSxcbiAgaXNMb2FkaW5nOiB0cnVlLFxufTtcblxuY29uc3Qgc2VsZWN0b3JzID0ge1xuICBhbGxQcm9kdWN0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmFsbFByb2R1Y3RzLFxuICBob3RQcm9kdWN0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmhvdFByb2R1Y3RzLFxuICBuZXdQcm9kdWN0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLm5ld1Byb2R1Y3RzLFxuICBzYWxlUHJvZHVjdHNTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS5zYWxlUHJvZHVjdHMsXG4gIGlzTG9hZGluZ1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmlzTG9hZGluZyxcbn07XG5cbmNvbnN0IHByb2R1Y3RzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYWxsUHJvZHVjdHNcIixcbiAgaW5pdGlhbFN0YXRlLFxuICBzZWxlY3RvcnMsXG4gIHJlZHVjZXJzOiAoY3JlYXRlKSA9PiAoe1xuICAgIHNldFByb2R1Y3RzOiBjcmVhdGUucmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5hbGxQcm9kdWN0cyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgc3RhdGUuaG90UHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZC5maWx0ZXIoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLmhvdCA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RhdGUubmV3UHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZC5maWx0ZXIoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUob2JqLmRhdGUpID4gbmV3IERhdGUoXCIyMDIzLTEyLTEwVDEyOjQ3OjQ4LjA0MlpcIik7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnNhbGVQcm9kdWN0cyA9IGFjdGlvbi5wYXlsb2FkLmZpbHRlcigob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmouc2FsZSA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pLFxuICB9KSxcbiAgLy8gcmVkdWNlcnM6IHtcbiAgLy8gICBzZXRQcm9kdWN0czogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgLy8gICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAvLyAgICAgc3RhdGUuYWxsUHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgLy8gICAgIHN0YXRlLmhvdFByb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQuZmlsdGVyKChvYmopID0+IHtcbiAgLy8gICAgICAgcmV0dXJuIG9iai5ob3QgPT09IHRydWU7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHN0YXRlLm5ld1Byb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQuZmlsdGVyKChvYmopID0+IHtcbiAgLy8gICAgICAgcmV0dXJuIG5ldyBEYXRlKG9iai5kYXRlKSA+IG5ldyBEYXRlKFwiMjAyMy0xMi0xMFQxMjo0Nzo0OC4wNDJaXCIpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgICBzdGF0ZS5zYWxlUHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZC5maWx0ZXIoKG9iaikgPT4ge1xuICAvLyAgICAgICByZXR1cm4gb2JqLnNhbGUgPT09IHRydWU7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9LFxuICAvLyB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzU2xpY2UucmVkdWNlcjtcblxuZXhwb3J0IGNvbnN0IHtcbiAgYWxsUHJvZHVjdHNTZWxlY3RvcixcbiAgaG90UHJvZHVjdHNTZWxlY3RvcixcbiAgbmV3UHJvZHVjdHNTZWxlY3RvcixcbiAgc2FsZVByb2R1Y3RzU2VsZWN0b3IsXG4gIGlzTG9hZGluZ1NlbGVjdG9yLFxufSA9IHByb2R1Y3RzU2xpY2Uuc2VsZWN0b3JzO1xuXG5leHBvcnQgY29uc3QgeyBzZXRQcm9kdWN0cyB9ID0gcHJvZHVjdHNTbGljZS5hY3Rpb25zO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiYWxsUHJvZHVjdHMiLCJob3RQcm9kdWN0cyIsIm5ld1Byb2R1Y3RzIiwic2FsZVByb2R1Y3RzIiwiaXNMb2FkaW5nIiwic2VsZWN0b3JzIiwiYWxsUHJvZHVjdHNTZWxlY3RvciIsInN0YXRlIiwiaG90UHJvZHVjdHNTZWxlY3RvciIsIm5ld1Byb2R1Y3RzU2VsZWN0b3IiLCJzYWxlUHJvZHVjdHNTZWxlY3RvciIsImlzTG9hZGluZ1NlbGVjdG9yIiwicHJvZHVjdHNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImNyZWF0ZSIsInNldFByb2R1Y3RzIiwicmVkdWNlciIsImFjdGlvbiIsInBheWxvYWQiLCJmaWx0ZXIiLCJvYmoiLCJob3QiLCJEYXRlIiwiZGF0ZSIsInNhbGUiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/productsSlice.js\n"));

/***/ })

});