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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allProductsSelector: function() { return /* binding */ allProductsSelector; },\n/* harmony export */   hotProductsSelector: function() { return /* binding */ hotProductsSelector; },\n/* harmony export */   isLoadingSelector: function() { return /* binding */ isLoadingSelector; },\n/* harmony export */   newProductsSelector: function() { return /* binding */ newProductsSelector; },\n/* harmony export */   saleProductsSelector: function() { return /* binding */ saleProductsSelector; },\n/* harmony export */   setProducts: function() { return /* binding */ setProducts; },\n/* harmony export */   tShirtsSelector: function() { return /* binding */ tShirtsSelector; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    allProducts: [],\n    hotProducts: [],\n    newProducts: [],\n    saleProducts: [],\n    tShirts: [],\n    hoodies: [],\n    pillows: [],\n    isLoading: true\n};\nconst selectors = {\n    allProductsSelector: (state)=>state.allProducts,\n    hotProductsSelector: (state)=>state.hotProducts,\n    newProductsSelector: (state)=>state.newProducts,\n    saleProductsSelector: (state)=>state.saleProducts,\n    tShirtsSelector: (state)=>state.tShirts,\n    isLoadingSelector: (state)=>state.isLoading\n};\nconst productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"allProducts\",\n    initialState,\n    selectors,\n    reducers: (create)=>({\n            setProducts: create.reducer((state, action)=>{\n                state.isLoading = false;\n                state.allProducts = action.payload;\n                state.hotProducts = action.payload.filter((obj)=>{\n                    return obj.hot === true;\n                });\n                state.newProducts = action.payload.filter((obj)=>{\n                    return new Date(obj.date) > new Date(\"2023-12-10T12:47:48.042Z\");\n                });\n                state.saleProducts = action.payload.filter((obj)=>{\n                    return obj.sale === true;\n                });\n                state.tShirts = action.payload.filter((obj)=>{\n                    return obj.categories === \"t-shirts\";\n                });\n            })\n        })\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\nconst { allProductsSelector, hotProductsSelector, newProductsSelector, saleProductsSelector, isLoadingSelector, tShirtsSelector } = productsSlice.selectors;\nconst { setProducts } = productsSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxlQUFlO0lBQ25CQyxhQUFhLEVBQUU7SUFDZkMsYUFBYSxFQUFFO0lBQ2ZDLGFBQWEsRUFBRTtJQUNmQyxjQUFjLEVBQUU7SUFDaEJDLFNBQVMsRUFBRTtJQUNYQyxTQUFTLEVBQUU7SUFDWEMsU0FBUyxFQUFFO0lBQ1hDLFdBQVc7QUFDYjtBQUVBLE1BQU1DLFlBQVk7SUFDaEJDLHFCQUFxQixDQUFDQyxRQUFVQSxNQUFNVixXQUFXO0lBQ2pEVyxxQkFBcUIsQ0FBQ0QsUUFBVUEsTUFBTVQsV0FBVztJQUNqRFcscUJBQXFCLENBQUNGLFFBQVVBLE1BQU1SLFdBQVc7SUFDakRXLHNCQUFzQixDQUFDSCxRQUFVQSxNQUFNUCxZQUFZO0lBQ25EVyxpQkFBaUIsQ0FBQ0osUUFBVUEsTUFBTU4sT0FBTztJQUN6Q1csbUJBQW1CLENBQUNMLFFBQVVBLE1BQU1ILFNBQVM7QUFDL0M7QUFFQSxNQUFNUyxnQkFBZ0JsQiw2REFBV0EsQ0FBQztJQUNoQ21CLE1BQU07SUFDTmxCO0lBQ0FTO0lBQ0FVLFVBQVUsQ0FBQ0MsU0FBWTtZQUNyQkMsYUFBYUQsT0FBT0UsT0FBTyxDQUFDLENBQUNYLE9BQU9ZO2dCQUNsQ1osTUFBTUgsU0FBUyxHQUFHO2dCQUNsQkcsTUFBTVYsV0FBVyxHQUFHc0IsT0FBT0MsT0FBTztnQkFDbENiLE1BQU1ULFdBQVcsR0FBR3FCLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUNDO29CQUN6QyxPQUFPQSxJQUFJQyxHQUFHLEtBQUs7Z0JBQ3JCO2dCQUNBaEIsTUFBTVIsV0FBVyxHQUFHb0IsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0M7b0JBQ3pDLE9BQU8sSUFBSUUsS0FBS0YsSUFBSUcsSUFBSSxJQUFJLElBQUlELEtBQUs7Z0JBQ3ZDO2dCQUNBakIsTUFBTVAsWUFBWSxHQUFHbUIsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0M7b0JBQzFDLE9BQU9BLElBQUlJLElBQUksS0FBSztnQkFDdEI7Z0JBQ0FuQixNQUFNTixPQUFPLEdBQUdrQixPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDQztvQkFDckMsT0FBT0EsSUFBSUssVUFBVSxLQUFLO2dCQUM1QjtZQUNGO1FBQ0Y7QUFDRjtBQUVBLCtEQUFlZCxjQUFjSyxPQUFPLEVBQUM7QUFFOUIsTUFBTSxFQUNYWixtQkFBbUIsRUFDbkJFLG1CQUFtQixFQUNuQkMsbUJBQW1CLEVBQ25CQyxvQkFBb0IsRUFDcEJFLGlCQUFpQixFQUNqQkQsZUFBZSxFQUNoQixHQUFHRSxjQUFjUixTQUFTLENBQUM7QUFFckIsTUFBTSxFQUFFWSxXQUFXLEVBQUUsR0FBR0osY0FBY2UsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZS5qcz8yYjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBhbGxQcm9kdWN0czogW10sXG4gIGhvdFByb2R1Y3RzOiBbXSxcbiAgbmV3UHJvZHVjdHM6IFtdLFxuICBzYWxlUHJvZHVjdHM6IFtdLFxuICB0U2hpcnRzOiBbXSxcbiAgaG9vZGllczogW10sXG4gIHBpbGxvd3M6IFtdLFxuICBpc0xvYWRpbmc6IHRydWUsXG59O1xuXG5jb25zdCBzZWxlY3RvcnMgPSB7XG4gIGFsbFByb2R1Y3RzU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuYWxsUHJvZHVjdHMsXG4gIGhvdFByb2R1Y3RzU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuaG90UHJvZHVjdHMsXG4gIG5ld1Byb2R1Y3RzU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUubmV3UHJvZHVjdHMsXG4gIHNhbGVQcm9kdWN0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLnNhbGVQcm9kdWN0cyxcbiAgdFNoaXJ0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLnRTaGlydHMsXG4gIGlzTG9hZGluZ1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmlzTG9hZGluZyxcbn07XG5cbmNvbnN0IHByb2R1Y3RzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYWxsUHJvZHVjdHNcIixcbiAgaW5pdGlhbFN0YXRlLFxuICBzZWxlY3RvcnMsXG4gIHJlZHVjZXJzOiAoY3JlYXRlKSA9PiAoe1xuICAgIHNldFByb2R1Y3RzOiBjcmVhdGUucmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5hbGxQcm9kdWN0cyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgc3RhdGUuaG90UHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZC5maWx0ZXIoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLmhvdCA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RhdGUubmV3UHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZC5maWx0ZXIoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUob2JqLmRhdGUpID4gbmV3IERhdGUoXCIyMDIzLTEyLTEwVDEyOjQ3OjQ4LjA0MlpcIik7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnNhbGVQcm9kdWN0cyA9IGFjdGlvbi5wYXlsb2FkLmZpbHRlcigob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmouc2FsZSA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RhdGUudFNoaXJ0cyA9IGFjdGlvbi5wYXlsb2FkLmZpbHRlcigob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmouY2F0ZWdvcmllcyA9PT0gXCJ0LXNoaXJ0c1wiO1xuICAgICAgfSk7XG4gICAgfSksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzU2xpY2UucmVkdWNlcjtcblxuZXhwb3J0IGNvbnN0IHtcbiAgYWxsUHJvZHVjdHNTZWxlY3RvcixcbiAgaG90UHJvZHVjdHNTZWxlY3RvcixcbiAgbmV3UHJvZHVjdHNTZWxlY3RvcixcbiAgc2FsZVByb2R1Y3RzU2VsZWN0b3IsXG4gIGlzTG9hZGluZ1NlbGVjdG9yLFxuICB0U2hpcnRzU2VsZWN0b3IsXG59ID0gcHJvZHVjdHNTbGljZS5zZWxlY3RvcnM7XG5cbmV4cG9ydCBjb25zdCB7IHNldFByb2R1Y3RzIH0gPSBwcm9kdWN0c1NsaWNlLmFjdGlvbnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJhbGxQcm9kdWN0cyIsImhvdFByb2R1Y3RzIiwibmV3UHJvZHVjdHMiLCJzYWxlUHJvZHVjdHMiLCJ0U2hpcnRzIiwiaG9vZGllcyIsInBpbGxvd3MiLCJpc0xvYWRpbmciLCJzZWxlY3RvcnMiLCJhbGxQcm9kdWN0c1NlbGVjdG9yIiwic3RhdGUiLCJob3RQcm9kdWN0c1NlbGVjdG9yIiwibmV3UHJvZHVjdHNTZWxlY3RvciIsInNhbGVQcm9kdWN0c1NlbGVjdG9yIiwidFNoaXJ0c1NlbGVjdG9yIiwiaXNMb2FkaW5nU2VsZWN0b3IiLCJwcm9kdWN0c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiY3JlYXRlIiwic2V0UHJvZHVjdHMiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicGF5bG9hZCIsImZpbHRlciIsIm9iaiIsImhvdCIsIkRhdGUiLCJkYXRlIiwic2FsZSIsImNhdGVnb3JpZXMiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/productsSlice.js\n"));

/***/ })

});