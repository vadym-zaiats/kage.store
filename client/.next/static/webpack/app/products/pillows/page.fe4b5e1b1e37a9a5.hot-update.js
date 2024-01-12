"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/pillows/page",{

/***/ "(app-pages-browser)/./src/redux/slices/productsSlice.js":
/*!*******************************************!*\
  !*** ./src/redux/slices/productsSlice.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allProductsSelector: function() { return /* binding */ allProductsSelector; },\n/* harmony export */   hotProductsSelector: function() { return /* binding */ hotProductsSelector; },\n/* harmony export */   isLoadingSelector: function() { return /* binding */ isLoadingSelector; },\n/* harmony export */   newProductsSelector: function() { return /* binding */ newProductsSelector; },\n/* harmony export */   saleProductsSelector: function() { return /* binding */ saleProductsSelector; },\n/* harmony export */   setProducts: function() { return /* binding */ setProducts; },\n/* harmony export */   tShirtsSelector: function() { return /* binding */ tShirtsSelector; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    allProducts: [],\n    hotProducts: [],\n    newProducts: [],\n    saleProducts: [],\n    tShirts: [],\n    hoodies: [],\n    pillows: [],\n    isLoading: true\n};\nconst selectors = {\n    allProductsSelector: (state)=>state.allProducts,\n    hotProductsSelector: (state)=>state.hotProducts,\n    newProductsSelector: (state)=>state.newProducts,\n    saleProductsSelector: (state)=>state.saleProducts,\n    tShirtsSelector: (state)=>state.tShirts,\n    isLoadingSelector: (state)=>state.isLoading\n};\nconst productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"allProducts\",\n    initialState,\n    selectors,\n    reducers: (create)=>({\n            setProducts: create.reducer((state, action)=>{\n                state.isLoading = false;\n                state.allProducts = action.payload;\n                state.hotProducts = action.payload.filter((obj)=>{\n                    return obj.hot === true;\n                });\n                state.newProducts = action.payload.filter((obj)=>{\n                    return new Date(obj.date) > new Date(\"2023-12-10T12:47:48.042Z\");\n                });\n                state.saleProducts = action.payload.filter((obj)=>{\n                    return obj.sale === true;\n                });\n                state.tShirts = action.payload.filter((obj)=>{\n                    return obj.categories === \"t-shirts\";\n                });\n                state.pillows = action.payload.filter((obj)=>{\n                    return obj.categories === \"pillows\";\n                });\n                state.hoodies = action.payload.filter((obj)=>{\n                    return obj.categories === \"hoodies\";\n                });\n            })\n        })\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\nconst { allProductsSelector, hotProductsSelector, newProductsSelector, saleProductsSelector, isLoadingSelector, tShirtsSelector } = productsSlice.selectors;\nconst { setProducts } = productsSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxlQUFlO0lBQ25CQyxhQUFhLEVBQUU7SUFDZkMsYUFBYSxFQUFFO0lBQ2ZDLGFBQWEsRUFBRTtJQUNmQyxjQUFjLEVBQUU7SUFDaEJDLFNBQVMsRUFBRTtJQUNYQyxTQUFTLEVBQUU7SUFDWEMsU0FBUyxFQUFFO0lBQ1hDLFdBQVc7QUFDYjtBQUVBLE1BQU1DLFlBQVk7SUFDaEJDLHFCQUFxQixDQUFDQyxRQUFVQSxNQUFNVixXQUFXO0lBQ2pEVyxxQkFBcUIsQ0FBQ0QsUUFBVUEsTUFBTVQsV0FBVztJQUNqRFcscUJBQXFCLENBQUNGLFFBQVVBLE1BQU1SLFdBQVc7SUFDakRXLHNCQUFzQixDQUFDSCxRQUFVQSxNQUFNUCxZQUFZO0lBQ25EVyxpQkFBaUIsQ0FBQ0osUUFBVUEsTUFBTU4sT0FBTztJQUN6Q1csbUJBQW1CLENBQUNMLFFBQVVBLE1BQU1ILFNBQVM7QUFDL0M7QUFFQSxNQUFNUyxnQkFBZ0JsQiw2REFBV0EsQ0FBQztJQUNoQ21CLE1BQU07SUFDTmxCO0lBQ0FTO0lBQ0FVLFVBQVUsQ0FBQ0MsU0FBWTtZQUNyQkMsYUFBYUQsT0FBT0UsT0FBTyxDQUFDLENBQUNYLE9BQU9ZO2dCQUNsQ1osTUFBTUgsU0FBUyxHQUFHO2dCQUNsQkcsTUFBTVYsV0FBVyxHQUFHc0IsT0FBT0MsT0FBTztnQkFDbENiLE1BQU1ULFdBQVcsR0FBR3FCLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUNDO29CQUN6QyxPQUFPQSxJQUFJQyxHQUFHLEtBQUs7Z0JBQ3JCO2dCQUNBaEIsTUFBTVIsV0FBVyxHQUFHb0IsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0M7b0JBQ3pDLE9BQU8sSUFBSUUsS0FBS0YsSUFBSUcsSUFBSSxJQUFJLElBQUlELEtBQUs7Z0JBQ3ZDO2dCQUNBakIsTUFBTVAsWUFBWSxHQUFHbUIsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0M7b0JBQzFDLE9BQU9BLElBQUlJLElBQUksS0FBSztnQkFDdEI7Z0JBQ0FuQixNQUFNTixPQUFPLEdBQUdrQixPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDQztvQkFDckMsT0FBT0EsSUFBSUssVUFBVSxLQUFLO2dCQUM1QjtnQkFDQXBCLE1BQU1KLE9BQU8sR0FBR2dCLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUNDO29CQUNyQyxPQUFPQSxJQUFJSyxVQUFVLEtBQUs7Z0JBQzVCO2dCQUNBcEIsTUFBTUwsT0FBTyxHQUFHaUIsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0M7b0JBQ3JDLE9BQU9BLElBQUlLLFVBQVUsS0FBSztnQkFDNUI7WUFDRjtRQUNGO0FBQ0Y7QUFFQSwrREFBZWQsY0FBY0ssT0FBTyxFQUFDO0FBRTlCLE1BQU0sRUFDWFosbUJBQW1CLEVBQ25CRSxtQkFBbUIsRUFDbkJDLG1CQUFtQixFQUNuQkMsb0JBQW9CLEVBQ3BCRSxpQkFBaUIsRUFDakJELGVBQWUsRUFDaEIsR0FBR0UsY0FBY1IsU0FBUyxDQUFDO0FBRXJCLE1BQU0sRUFBRVksV0FBVyxFQUFFLEdBQUdKLGNBQWNlLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL3Byb2R1Y3RzU2xpY2UuanM/MmI5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYWxsUHJvZHVjdHM6IFtdLFxuICBob3RQcm9kdWN0czogW10sXG4gIG5ld1Byb2R1Y3RzOiBbXSxcbiAgc2FsZVByb2R1Y3RzOiBbXSxcbiAgdFNoaXJ0czogW10sXG4gIGhvb2RpZXM6IFtdLFxuICBwaWxsb3dzOiBbXSxcbiAgaXNMb2FkaW5nOiB0cnVlLFxufTtcblxuY29uc3Qgc2VsZWN0b3JzID0ge1xuICBhbGxQcm9kdWN0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmFsbFByb2R1Y3RzLFxuICBob3RQcm9kdWN0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmhvdFByb2R1Y3RzLFxuICBuZXdQcm9kdWN0c1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLm5ld1Byb2R1Y3RzLFxuICBzYWxlUHJvZHVjdHNTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS5zYWxlUHJvZHVjdHMsXG4gIHRTaGlydHNTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS50U2hpcnRzLFxuICBpc0xvYWRpbmdTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS5pc0xvYWRpbmcsXG59O1xuXG5jb25zdCBwcm9kdWN0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImFsbFByb2R1Y3RzXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgc2VsZWN0b3JzLFxuICByZWR1Y2VyczogKGNyZWF0ZSkgPT4gKHtcbiAgICBzZXRQcm9kdWN0czogY3JlYXRlLnJlZHVjZXIoKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuYWxsUHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHN0YXRlLmhvdFByb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQuZmlsdGVyKChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5ob3QgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLm5ld1Byb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQuZmlsdGVyKChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKG9iai5kYXRlKSA+IG5ldyBEYXRlKFwiMjAyMy0xMi0xMFQxMjo0Nzo0OC4wNDJaXCIpO1xuICAgICAgfSk7XG4gICAgICBzdGF0ZS5zYWxlUHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZC5maWx0ZXIoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLnNhbGUgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnRTaGlydHMgPSBhY3Rpb24ucGF5bG9hZC5maWx0ZXIoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLmNhdGVnb3JpZXMgPT09IFwidC1zaGlydHNcIjtcbiAgICAgIH0pO1xuICAgICAgc3RhdGUucGlsbG93cyA9IGFjdGlvbi5wYXlsb2FkLmZpbHRlcigob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmouY2F0ZWdvcmllcyA9PT0gXCJwaWxsb3dzXCI7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLmhvb2RpZXMgPSBhY3Rpb24ucGF5bG9hZC5maWx0ZXIoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLmNhdGVnb3JpZXMgPT09IFwiaG9vZGllc1wiO1xuICAgICAgfSk7XG4gICAgfSksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzU2xpY2UucmVkdWNlcjtcblxuZXhwb3J0IGNvbnN0IHtcbiAgYWxsUHJvZHVjdHNTZWxlY3RvcixcbiAgaG90UHJvZHVjdHNTZWxlY3RvcixcbiAgbmV3UHJvZHVjdHNTZWxlY3RvcixcbiAgc2FsZVByb2R1Y3RzU2VsZWN0b3IsXG4gIGlzTG9hZGluZ1NlbGVjdG9yLFxuICB0U2hpcnRzU2VsZWN0b3IsXG59ID0gcHJvZHVjdHNTbGljZS5zZWxlY3RvcnM7XG5cbmV4cG9ydCBjb25zdCB7IHNldFByb2R1Y3RzIH0gPSBwcm9kdWN0c1NsaWNlLmFjdGlvbnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJhbGxQcm9kdWN0cyIsImhvdFByb2R1Y3RzIiwibmV3UHJvZHVjdHMiLCJzYWxlUHJvZHVjdHMiLCJ0U2hpcnRzIiwiaG9vZGllcyIsInBpbGxvd3MiLCJpc0xvYWRpbmciLCJzZWxlY3RvcnMiLCJhbGxQcm9kdWN0c1NlbGVjdG9yIiwic3RhdGUiLCJob3RQcm9kdWN0c1NlbGVjdG9yIiwibmV3UHJvZHVjdHNTZWxlY3RvciIsInNhbGVQcm9kdWN0c1NlbGVjdG9yIiwidFNoaXJ0c1NlbGVjdG9yIiwiaXNMb2FkaW5nU2VsZWN0b3IiLCJwcm9kdWN0c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiY3JlYXRlIiwic2V0UHJvZHVjdHMiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicGF5bG9hZCIsImZpbHRlciIsIm9iaiIsImhvdCIsIkRhdGUiLCJkYXRlIiwic2FsZSIsImNhdGVnb3JpZXMiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/productsSlice.js\n"));

/***/ })

});