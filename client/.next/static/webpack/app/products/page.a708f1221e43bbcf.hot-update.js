"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/redux/slices/productsSlice.js":
/*!*******************************************!*\
  !*** ./src/redux/slices/productsSlice.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allProductsSelector: function() { return /* binding */ allProductsSelector; },\n/* harmony export */   filteredProductsSelector: function() { return /* binding */ filteredProductsSelector; },\n/* harmony export */   hotProductsSelector: function() { return /* binding */ hotProductsSelector; },\n/* harmony export */   isLoadingSelector: function() { return /* binding */ isLoadingSelector; },\n/* harmony export */   newProductsSelector: function() { return /* binding */ newProductsSelector; },\n/* harmony export */   saleProductsSelector: function() { return /* binding */ saleProductsSelector; },\n/* harmony export */   setFilteredProducts: function() { return /* binding */ setFilteredProducts; },\n/* harmony export */   setProducts: function() { return /* binding */ setProducts; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    allProducts: [],\n    hotProducts: [],\n    newProducts: [],\n    saleProducts: [],\n    filteredProducts: [],\n    isLoading: true\n};\nconst selectors = {\n    allProductsSelector: (state)=>state.allProducts,\n    hotProductsSelector: (state)=>state.hotProducts,\n    newProductsSelector: (state)=>state.newProducts,\n    saleProductsSelector: (state)=>state.saleProducts,\n    filteredProductsSelector: (state)=>state.filteredProducts,\n    isLoadingSelector: (state)=>state.isLoading\n};\nconst productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"allProducts\",\n    initialState,\n    selectors,\n    reducers: (create)=>({\n            setProducts: create.reducer((state, action)=>{\n                state.isLoading = false;\n                state.allProducts = action.payload;\n                state.hotProducts = action.payload.filter((obj)=>{\n                    return obj.hot === true;\n                });\n                state.newProducts = action.payload.filter((obj)=>{\n                    return new Date(obj.date) > new Date(\"2023-12-10T12:47:48.042Z\");\n                });\n                state.saleProducts = action.payload.filter((obj)=>{\n                    return obj.sale === true;\n                });\n            }),\n            setFilteredProducts: create.reducer((param, param1)=>{\n                let { filteredProducts } = param, { payload } = param1;\n                filteredProducts = payload.products;\n            })\n        })\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\nconst { allProductsSelector, hotProductsSelector, newProductsSelector, saleProductsSelector, isLoadingSelector, filteredProductsSelector } = productsSlice.selectors;\nconst { setProducts, setFilteredProducts } = productsSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsZUFBZTtJQUNuQkMsYUFBYSxFQUFFO0lBQ2ZDLGFBQWEsRUFBRTtJQUNmQyxhQUFhLEVBQUU7SUFDZkMsY0FBYyxFQUFFO0lBQ2hCQyxrQkFBa0IsRUFBRTtJQUNwQkMsV0FBVztBQUNiO0FBRUEsTUFBTUMsWUFBWTtJQUNoQkMscUJBQXFCLENBQUNDLFFBQVVBLE1BQU1SLFdBQVc7SUFDakRTLHFCQUFxQixDQUFDRCxRQUFVQSxNQUFNUCxXQUFXO0lBQ2pEUyxxQkFBcUIsQ0FBQ0YsUUFBVUEsTUFBTU4sV0FBVztJQUNqRFMsc0JBQXNCLENBQUNILFFBQVVBLE1BQU1MLFlBQVk7SUFDbkRTLDBCQUEwQixDQUFDSixRQUFVQSxNQUFNSixnQkFBZ0I7SUFDM0RTLG1CQUFtQixDQUFDTCxRQUFVQSxNQUFNSCxTQUFTO0FBQy9DO0FBRUEsTUFBTVMsZ0JBQWdCaEIsNkRBQVdBLENBQUM7SUFDaENpQixNQUFNO0lBQ05oQjtJQUNBTztJQUNBVSxVQUFVLENBQUNDLFNBQVk7WUFDckJDLGFBQWFELE9BQU9FLE9BQU8sQ0FBQyxDQUFDWCxPQUFPWTtnQkFDbENaLE1BQU1ILFNBQVMsR0FBRztnQkFDbEJHLE1BQU1SLFdBQVcsR0FBR29CLE9BQU9DLE9BQU87Z0JBQ2xDYixNQUFNUCxXQUFXLEdBQUdtQixPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDQztvQkFDekMsT0FBT0EsSUFBSUMsR0FBRyxLQUFLO2dCQUNyQjtnQkFDQWhCLE1BQU1OLFdBQVcsR0FBR2tCLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUNDO29CQUN6QyxPQUFPLElBQUlFLEtBQUtGLElBQUlHLElBQUksSUFBSSxJQUFJRCxLQUFLO2dCQUN2QztnQkFDQWpCLE1BQU1MLFlBQVksR0FBR2lCLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUNDO29CQUMxQyxPQUFPQSxJQUFJSSxJQUFJLEtBQUs7Z0JBQ3RCO1lBQ0Y7WUFDQUMscUJBQXFCWCxPQUFPRSxPQUFPLENBQUM7b0JBQUMsRUFBRWYsZ0JBQWdCLEVBQUUsVUFBRSxFQUFFaUIsT0FBTyxFQUFFO2dCQUNwRWpCLG1CQUFtQmlCLFFBQVFRLFFBQVE7WUFDckM7UUFDRjtBQUNGO0FBRUEsK0RBQWVmLGNBQWNLLE9BQU8sRUFBQztBQUU5QixNQUFNLEVBQ1haLG1CQUFtQixFQUNuQkUsbUJBQW1CLEVBQ25CQyxtQkFBbUIsRUFDbkJDLG9CQUFvQixFQUNwQkUsaUJBQWlCLEVBQ2pCRCx3QkFBd0IsRUFDekIsR0FBR0UsY0FBY1IsU0FBUyxDQUFDO0FBRXJCLE1BQU0sRUFBRVksV0FBVyxFQUFFVSxtQkFBbUIsRUFBRSxHQUFHZCxjQUFjZ0IsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZS5qcz8yYjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBhbGxQcm9kdWN0czogW10sXG4gIGhvdFByb2R1Y3RzOiBbXSxcbiAgbmV3UHJvZHVjdHM6IFtdLFxuICBzYWxlUHJvZHVjdHM6IFtdLFxuICBmaWx0ZXJlZFByb2R1Y3RzOiBbXSxcbiAgaXNMb2FkaW5nOiB0cnVlLFxufTtcblxuY29uc3Qgc2VsZWN0b3JzID0ge1xuICBhbGxQcm9kdWN0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmFsbFByb2R1Y3RzLFxuICBob3RQcm9kdWN0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmhvdFByb2R1Y3RzLFxuICBuZXdQcm9kdWN0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLm5ld1Byb2R1Y3RzLFxuICBzYWxlUHJvZHVjdHNTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS5zYWxlUHJvZHVjdHMsXG4gIGZpbHRlcmVkUHJvZHVjdHNTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzLFxuICBpc0xvYWRpbmdTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS5pc0xvYWRpbmcsXG59O1xuXG5jb25zdCBwcm9kdWN0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImFsbFByb2R1Y3RzXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgc2VsZWN0b3JzLFxuICByZWR1Y2VyczogKGNyZWF0ZSkgPT4gKHtcbiAgICBzZXRQcm9kdWN0czogY3JlYXRlLnJlZHVjZXIoKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuYWxsUHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHN0YXRlLmhvdFByb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQuZmlsdGVyKChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5ob3QgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLm5ld1Byb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQuZmlsdGVyKChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKG9iai5kYXRlKSA+IG5ldyBEYXRlKFwiMjAyMy0xMi0xMFQxMjo0Nzo0OC4wNDJaXCIpO1xuICAgICAgfSk7XG4gICAgICBzdGF0ZS5zYWxlUHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZC5maWx0ZXIoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLnNhbGUgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICB9KSxcbiAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzOiBjcmVhdGUucmVkdWNlcigoeyBmaWx0ZXJlZFByb2R1Y3RzIH0sIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBmaWx0ZXJlZFByb2R1Y3RzID0gcGF5bG9hZC5wcm9kdWN0cztcbiAgICB9KSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNTbGljZS5yZWR1Y2VyO1xuXG5leHBvcnQgY29uc3Qge1xuICBhbGxQcm9kdWN0c1NlbGVjdG9yLFxuICBob3RQcm9kdWN0c1NlbGVjdG9yLFxuICBuZXdQcm9kdWN0c1NlbGVjdG9yLFxuICBzYWxlUHJvZHVjdHNTZWxlY3RvcixcbiAgaXNMb2FkaW5nU2VsZWN0b3IsXG4gIGZpbHRlcmVkUHJvZHVjdHNTZWxlY3Rvcixcbn0gPSBwcm9kdWN0c1NsaWNlLnNlbGVjdG9ycztcblxuZXhwb3J0IGNvbnN0IHsgc2V0UHJvZHVjdHMsIHNldEZpbHRlcmVkUHJvZHVjdHMgfSA9IHByb2R1Y3RzU2xpY2UuYWN0aW9ucztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImFsbFByb2R1Y3RzIiwiaG90UHJvZHVjdHMiLCJuZXdQcm9kdWN0cyIsInNhbGVQcm9kdWN0cyIsImZpbHRlcmVkUHJvZHVjdHMiLCJpc0xvYWRpbmciLCJzZWxlY3RvcnMiLCJhbGxQcm9kdWN0c1NlbGVjdG9yIiwic3RhdGUiLCJob3RQcm9kdWN0c1NlbGVjdG9yIiwibmV3UHJvZHVjdHNTZWxlY3RvciIsInNhbGVQcm9kdWN0c1NlbGVjdG9yIiwiZmlsdGVyZWRQcm9kdWN0c1NlbGVjdG9yIiwiaXNMb2FkaW5nU2VsZWN0b3IiLCJwcm9kdWN0c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiY3JlYXRlIiwic2V0UHJvZHVjdHMiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicGF5bG9hZCIsImZpbHRlciIsIm9iaiIsImhvdCIsIkRhdGUiLCJkYXRlIiwic2FsZSIsInNldEZpbHRlcmVkUHJvZHVjdHMiLCJwcm9kdWN0cyIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/productsSlice.js\n"));

/***/ })

});