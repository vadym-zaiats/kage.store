"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/t-shirts/page",{

/***/ "(app-pages-browser)/./src/redux/slices/productsSlice.js":
/*!*******************************************!*\
  !*** ./src/redux/slices/productsSlice.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allProductsSelector: function() { return /* binding */ allProductsSelector; },\n/* harmony export */   hoodiesSelector: function() { return /* binding */ hoodiesSelector; },\n/* harmony export */   hotProductsSelector: function() { return /* binding */ hotProductsSelector; },\n/* harmony export */   isLoadingSelector: function() { return /* binding */ isLoadingSelector; },\n/* harmony export */   newProductsSelector: function() { return /* binding */ newProductsSelector; },\n/* harmony export */   pillowsSelector: function() { return /* binding */ pillowsSelector; },\n/* harmony export */   saleProductsSelector: function() { return /* binding */ saleProductsSelector; },\n/* harmony export */   setProducts: function() { return /* binding */ setProducts; },\n/* harmony export */   tShirtsSelector: function() { return /* binding */ tShirtsSelector; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    allProducts: [],\n    hotProducts: [],\n    newProducts: [],\n    saleProducts: [],\n    tShirts: [],\n    hoodies: [],\n    pillows: [],\n    isLoading: true\n};\nconst selectors = {\n    allProductsSelector: (state)=>state.allProducts,\n    hotProductsSelector: (state)=>state.hotProducts,\n    newProductsSelector: (state)=>state.newProducts,\n    saleProductsSelector: (state)=>state.saleProducts,\n    tShirtsSelector: (state)=>state.tShirts,\n    pillowsSelector: (state)=>state.pillows,\n    hoodiesSelector: (state)=>state.hoodies,\n    isLoadingSelector: (state)=>state.isLoading\n};\nconst productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"allProducts\",\n    initialState,\n    selectors,\n    reducers: (create)=>({\n            setProducts: create.reducer((state, action)=>{\n                state.isLoading = false;\n                state.allProducts = action.payload;\n                state.hotProducts = action.payload.filter((obj)=>{\n                    return obj.hot === true;\n                });\n                state.newProducts = action.payload.filter((obj)=>{\n                    return new Date(obj.date) > new Date(\"2023-12-10T12:47:48.042Z\");\n                });\n                state.saleProducts = action.payload.filter((obj)=>{\n                    return obj.sale === true;\n                });\n                state.tShirts = action.payload.filter((obj)=>{\n                    return obj.categories === \"t-shirts\";\n                });\n                state.pillows = action.payload.filter((obj)=>{\n                    return obj.categories === \"pillows\";\n                });\n                state.hoodies = action.payload.filter((obj)=>{\n                    return obj.categories === \"hoodies\";\n                });\n            })\n        })\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\nconst { allProductsSelector, hotProductsSelector, newProductsSelector, saleProductsSelector, isLoadingSelector, tShirtsSelector, pillowsSelector, hoodiesSelector } = productsSlice.selectors;\nconst { setProducts } = productsSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLGVBQWU7SUFDbkJDLGFBQWEsRUFBRTtJQUNmQyxhQUFhLEVBQUU7SUFDZkMsYUFBYSxFQUFFO0lBQ2ZDLGNBQWMsRUFBRTtJQUNoQkMsU0FBUyxFQUFFO0lBQ1hDLFNBQVMsRUFBRTtJQUNYQyxTQUFTLEVBQUU7SUFDWEMsV0FBVztBQUNiO0FBRUEsTUFBTUMsWUFBWTtJQUNoQkMscUJBQXFCLENBQUNDLFFBQVVBLE1BQU1WLFdBQVc7SUFDakRXLHFCQUFxQixDQUFDRCxRQUFVQSxNQUFNVCxXQUFXO0lBQ2pEVyxxQkFBcUIsQ0FBQ0YsUUFBVUEsTUFBTVIsV0FBVztJQUNqRFcsc0JBQXNCLENBQUNILFFBQVVBLE1BQU1QLFlBQVk7SUFDbkRXLGlCQUFpQixDQUFDSixRQUFVQSxNQUFNTixPQUFPO0lBQ3pDVyxpQkFBaUIsQ0FBQ0wsUUFBVUEsTUFBTUosT0FBTztJQUN6Q1UsaUJBQWlCLENBQUNOLFFBQVVBLE1BQU1MLE9BQU87SUFDekNZLG1CQUFtQixDQUFDUCxRQUFVQSxNQUFNSCxTQUFTO0FBQy9DO0FBRUEsTUFBTVcsZ0JBQWdCcEIsNkRBQVdBLENBQUM7SUFDaENxQixNQUFNO0lBQ05wQjtJQUNBUztJQUNBWSxVQUFVLENBQUNDLFNBQVk7WUFDckJDLGFBQWFELE9BQU9FLE9BQU8sQ0FBQyxDQUFDYixPQUFPYztnQkFDbENkLE1BQU1ILFNBQVMsR0FBRztnQkFDbEJHLE1BQU1WLFdBQVcsR0FBR3dCLE9BQU9DLE9BQU87Z0JBQ2xDZixNQUFNVCxXQUFXLEdBQUd1QixPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDQztvQkFDekMsT0FBT0EsSUFBSUMsR0FBRyxLQUFLO2dCQUNyQjtnQkFDQWxCLE1BQU1SLFdBQVcsR0FBR3NCLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUNDO29CQUN6QyxPQUFPLElBQUlFLEtBQUtGLElBQUlHLElBQUksSUFBSSxJQUFJRCxLQUFLO2dCQUN2QztnQkFDQW5CLE1BQU1QLFlBQVksR0FBR3FCLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUNDO29CQUMxQyxPQUFPQSxJQUFJSSxJQUFJLEtBQUs7Z0JBQ3RCO2dCQUNBckIsTUFBTU4sT0FBTyxHQUFHb0IsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0M7b0JBQ3JDLE9BQU9BLElBQUlLLFVBQVUsS0FBSztnQkFDNUI7Z0JBQ0F0QixNQUFNSixPQUFPLEdBQUdrQixPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDQztvQkFDckMsT0FBT0EsSUFBSUssVUFBVSxLQUFLO2dCQUM1QjtnQkFDQXRCLE1BQU1MLE9BQU8sR0FBR21CLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUNDO29CQUNyQyxPQUFPQSxJQUFJSyxVQUFVLEtBQUs7Z0JBQzVCO1lBQ0Y7UUFDRjtBQUNGO0FBRUEsK0RBQWVkLGNBQWNLLE9BQU8sRUFBQztBQUU5QixNQUFNLEVBQ1hkLG1CQUFtQixFQUNuQkUsbUJBQW1CLEVBQ25CQyxtQkFBbUIsRUFDbkJDLG9CQUFvQixFQUNwQkksaUJBQWlCLEVBQ2pCSCxlQUFlLEVBQ2ZDLGVBQWUsRUFDZkMsZUFBZSxFQUNoQixHQUFHRSxjQUFjVixTQUFTLENBQUM7QUFFckIsTUFBTSxFQUFFYyxXQUFXLEVBQUUsR0FBR0osY0FBY2UsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZS5qcz8yYjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBhbGxQcm9kdWN0czogW10sXG4gIGhvdFByb2R1Y3RzOiBbXSxcbiAgbmV3UHJvZHVjdHM6IFtdLFxuICBzYWxlUHJvZHVjdHM6IFtdLFxuICB0U2hpcnRzOiBbXSxcbiAgaG9vZGllczogW10sXG4gIHBpbGxvd3M6IFtdLFxuICBpc0xvYWRpbmc6IHRydWUsXG59O1xuXG5jb25zdCBzZWxlY3RvcnMgPSB7XG4gIGFsbFByb2R1Y3RzU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuYWxsUHJvZHVjdHMsXG4gIGhvdFByb2R1Y3RzU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuaG90UHJvZHVjdHMsXG4gIG5ld1Byb2R1Y3RzU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUubmV3UHJvZHVjdHMsXG4gIHNhbGVQcm9kdWN0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLnNhbGVQcm9kdWN0cyxcbiAgdFNoaXJ0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLnRTaGlydHMsXG4gIHBpbGxvd3NTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS5waWxsb3dzLFxuICBob29kaWVzU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuaG9vZGllcyxcbiAgaXNMb2FkaW5nU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuaXNMb2FkaW5nLFxufTtcblxuY29uc3QgcHJvZHVjdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJhbGxQcm9kdWN0c1wiLFxuICBpbml0aWFsU3RhdGUsXG4gIHNlbGVjdG9ycyxcbiAgcmVkdWNlcnM6IChjcmVhdGUpID0+ICh7XG4gICAgc2V0UHJvZHVjdHM6IGNyZWF0ZS5yZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmFsbFByb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBzdGF0ZS5ob3RQcm9kdWN0cyA9IGFjdGlvbi5wYXlsb2FkLmZpbHRlcigob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmouaG90ID09PSB0cnVlO1xuICAgICAgfSk7XG4gICAgICBzdGF0ZS5uZXdQcm9kdWN0cyA9IGFjdGlvbi5wYXlsb2FkLmZpbHRlcigob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShvYmouZGF0ZSkgPiBuZXcgRGF0ZShcIjIwMjMtMTItMTBUMTI6NDc6NDguMDQyWlwiKTtcbiAgICAgIH0pO1xuICAgICAgc3RhdGUuc2FsZVByb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQuZmlsdGVyKChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5zYWxlID09PSB0cnVlO1xuICAgICAgfSk7XG4gICAgICBzdGF0ZS50U2hpcnRzID0gYWN0aW9uLnBheWxvYWQuZmlsdGVyKChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5jYXRlZ29yaWVzID09PSBcInQtc2hpcnRzXCI7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnBpbGxvd3MgPSBhY3Rpb24ucGF5bG9hZC5maWx0ZXIoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLmNhdGVnb3JpZXMgPT09IFwicGlsbG93c1wiO1xuICAgICAgfSk7XG4gICAgICBzdGF0ZS5ob29kaWVzID0gYWN0aW9uLnBheWxvYWQuZmlsdGVyKChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5jYXRlZ29yaWVzID09PSBcImhvb2RpZXNcIjtcbiAgICAgIH0pO1xuICAgIH0pLFxuICB9KSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c1NsaWNlLnJlZHVjZXI7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGFsbFByb2R1Y3RzU2VsZWN0b3IsXG4gIGhvdFByb2R1Y3RzU2VsZWN0b3IsXG4gIG5ld1Byb2R1Y3RzU2VsZWN0b3IsXG4gIHNhbGVQcm9kdWN0c1NlbGVjdG9yLFxuICBpc0xvYWRpbmdTZWxlY3RvcixcbiAgdFNoaXJ0c1NlbGVjdG9yLFxuICBwaWxsb3dzU2VsZWN0b3IsXG4gIGhvb2RpZXNTZWxlY3Rvcixcbn0gPSBwcm9kdWN0c1NsaWNlLnNlbGVjdG9ycztcblxuZXhwb3J0IGNvbnN0IHsgc2V0UHJvZHVjdHMgfSA9IHByb2R1Y3RzU2xpY2UuYWN0aW9ucztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImFsbFByb2R1Y3RzIiwiaG90UHJvZHVjdHMiLCJuZXdQcm9kdWN0cyIsInNhbGVQcm9kdWN0cyIsInRTaGlydHMiLCJob29kaWVzIiwicGlsbG93cyIsImlzTG9hZGluZyIsInNlbGVjdG9ycyIsImFsbFByb2R1Y3RzU2VsZWN0b3IiLCJzdGF0ZSIsImhvdFByb2R1Y3RzU2VsZWN0b3IiLCJuZXdQcm9kdWN0c1NlbGVjdG9yIiwic2FsZVByb2R1Y3RzU2VsZWN0b3IiLCJ0U2hpcnRzU2VsZWN0b3IiLCJwaWxsb3dzU2VsZWN0b3IiLCJob29kaWVzU2VsZWN0b3IiLCJpc0xvYWRpbmdTZWxlY3RvciIsInByb2R1Y3RzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJjcmVhdGUiLCJzZXRQcm9kdWN0cyIsInJlZHVjZXIiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZmlsdGVyIiwib2JqIiwiaG90IiwiRGF0ZSIsImRhdGUiLCJzYWxlIiwiY2F0ZWdvcmllcyIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/productsSlice.js\n"));

/***/ })

});