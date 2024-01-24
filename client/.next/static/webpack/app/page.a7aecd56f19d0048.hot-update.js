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

/***/ "(app-pages-browser)/./src/redux/slices/filterSlice.js":
/*!*****************************************!*\
  !*** ./src/redux/slices/filterSlice.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCategory: function() { return /* binding */ addCategory; },\n/* harmony export */   availableFiltersSelector: function() { return /* binding */ availableFiltersSelector; },\n/* harmony export */   categoriesSelector: function() { return /* binding */ categoriesSelector; },\n/* harmony export */   filterIsOpenSelector: function() { return /* binding */ filterIsOpenSelector; },\n/* harmony export */   maxPriceSelector: function() { return /* binding */ maxPriceSelector; },\n/* harmony export */   minPriceSelector: function() { return /* binding */ minPriceSelector; },\n/* harmony export */   removeCategory: function() { return /* binding */ removeCategory; },\n/* harmony export */   resetFilters: function() { return /* binding */ resetFilters; },\n/* harmony export */   setFilter: function() { return /* binding */ setFilter; },\n/* harmony export */   setMaxPrice: function() { return /* binding */ setMaxPrice; },\n/* harmony export */   setMinPrice: function() { return /* binding */ setMinPrice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _middlewares_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/filter */ \"(app-pages-browser)/./src/redux/middlewares/filter.js\");\n\n\nconst initialState = {\n    isOpen: false,\n    categories: [],\n    minPrice: null,\n    maxPrice: null,\n    availableFilters: {},\n    isLoading: false,\n    isLoaded: false\n};\nconst selectors = {\n    filterIsOpenSelector: (state)=>state.isOpen,\n    availableFiltersSelector: (state)=>state.availableFilters,\n    minPriceSelector: (state)=>state.availableFilters.price.min,\n    maxPriceSelector: (state)=>state.availableFilters.price.max,\n    categoriesSelector: (state)=>state.categories\n};\nconst filterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"filter\",\n    initialState,\n    selectors,\n    reducers: (create)=>({\n            setFilter: create.reducer((state)=>{\n                state.isOpen = !state.isOpen;\n            }),\n            addCategory: create.reducer((state, action)=>{\n                if (!state.categories.includes(action.payload)) state.categories.push(action.payload);\n            }),\n            removeCategory: create.reducer((state, action)=>{\n                const categoryIndex = state.categories.findIndex((arrayItem)=>arrayItem === action.payload);\n                if (categoryIndex > -1) state.categories.splice(categoryIndex, 1);\n            }),\n            setMinPrice: create.reducer((state, action)=>{\n                state.minPrice = action.payload;\n            }),\n            setMaxPrice: create.reducer((state, action)=>{\n                state.maxPrice = action.payload;\n            }),\n            resetFilters: create.reducer((state)=>({}))\n        }),\n    extraReducers: (builder)=>{\n        builder.addCase(_middlewares_filter__WEBPACK_IMPORTED_MODULE_0__.fetchFilters.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(_middlewares_filter__WEBPACK_IMPORTED_MODULE_0__.fetchFilters.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.isLoaded = true;\n            state.availableFilters = action.payload;\n        });\n        builder.addCase(_middlewares_filter__WEBPACK_IMPORTED_MODULE_0__.fetchFilters.rejected, (state)=>{\n            state.isLoading = false;\n            state.isLoaded = false;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (filterSlice.reducer);\nconst { setFilter, addCategory, removeCategory, setMinPrice, setMaxPrice, resetFilters } = filterSlice.actions;\nconst { filterIsOpenSelector, availableFiltersSelector, categoriesSelector, minPriceSelector, maxPriceSelector } = filterSlice.selectors;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvZmlsdGVyU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNNO0FBRXJELE1BQU1FLGVBQWU7SUFDbkJDLFFBQVE7SUFDUkMsWUFBWSxFQUFFO0lBQ2RDLFVBQVU7SUFDVkMsVUFBVTtJQUNWQyxrQkFBa0IsQ0FBQztJQUNuQkMsV0FBVztJQUNYQyxVQUFVO0FBQ1o7QUFFQSxNQUFNQyxZQUFZO0lBQ2hCQyxzQkFBc0IsQ0FBQ0MsUUFBVUEsTUFBTVQsTUFBTTtJQUM3Q1UsMEJBQTBCLENBQUNELFFBQVVBLE1BQU1MLGdCQUFnQjtJQUMzRE8sa0JBQWtCLENBQUNGLFFBQVVBLE1BQU1MLGdCQUFnQixDQUFDUSxLQUFLLENBQUNDLEdBQUc7SUFDN0RDLGtCQUFrQixDQUFDTCxRQUFVQSxNQUFNTCxnQkFBZ0IsQ0FBQ1EsS0FBSyxDQUFDRyxHQUFHO0lBQzdEQyxvQkFBb0IsQ0FBQ1AsUUFBVUEsTUFBTVIsVUFBVTtBQUNqRDtBQUVBLE1BQU1nQixjQUFjcEIsNkRBQVdBLENBQUM7SUFDOUJxQixNQUFNO0lBQ05uQjtJQUNBUTtJQUNBWSxVQUFVLENBQUNDLFNBQVk7WUFDckJDLFdBQVdELE9BQU9FLE9BQU8sQ0FBQyxDQUFDYjtnQkFDekJBLE1BQU1ULE1BQU0sR0FBRyxDQUFDUyxNQUFNVCxNQUFNO1lBQzlCO1lBQ0F1QixhQUFhSCxPQUFPRSxPQUFPLENBQUMsQ0FBQ2IsT0FBT2U7Z0JBQ2xDLElBQUksQ0FBQ2YsTUFBTVIsVUFBVSxDQUFDd0IsUUFBUSxDQUFDRCxPQUFPRSxPQUFPLEdBQzNDakIsTUFBTVIsVUFBVSxDQUFDMEIsSUFBSSxDQUFDSCxPQUFPRSxPQUFPO1lBQ3hDO1lBQ0FFLGdCQUFnQlIsT0FBT0UsT0FBTyxDQUFDLENBQUNiLE9BQU9lO2dCQUNyQyxNQUFNSyxnQkFBZ0JwQixNQUFNUixVQUFVLENBQUM2QixTQUFTLENBQzlDLENBQUNDLFlBQWNBLGNBQWNQLE9BQU9FLE9BQU87Z0JBRTdDLElBQUlHLGdCQUFnQixDQUFDLEdBQUdwQixNQUFNUixVQUFVLENBQUMrQixNQUFNLENBQUNILGVBQWU7WUFDakU7WUFDQUksYUFBYWIsT0FBT0UsT0FBTyxDQUFDLENBQUNiLE9BQU9lO2dCQUNsQ2YsTUFBTVAsUUFBUSxHQUFHc0IsT0FBT0UsT0FBTztZQUNqQztZQUNBUSxhQUFhZCxPQUFPRSxPQUFPLENBQUMsQ0FBQ2IsT0FBT2U7Z0JBQ2xDZixNQUFNTixRQUFRLEdBQUdxQixPQUFPRSxPQUFPO1lBQ2pDO1lBQ0FTLGNBQWNmLE9BQU9FLE9BQU8sQ0FBQyxDQUFDYixRQUFXLEVBQUM7UUFDNUM7SUFDQTJCLGVBQWUsQ0FBQ0M7UUFDZEEsUUFBUUMsT0FBTyxDQUFDeEMsNkRBQVlBLENBQUN5QyxPQUFPLEVBQUUsQ0FBQzlCO1lBQ3JDQSxNQUFNSixTQUFTLEdBQUc7UUFDcEI7UUFDQWdDLFFBQVFDLE9BQU8sQ0FBQ3hDLDZEQUFZQSxDQUFDMEMsU0FBUyxFQUFFLENBQUMvQixPQUFPZTtZQUM5Q2YsTUFBTUosU0FBUyxHQUFHO1lBQ2xCSSxNQUFNSCxRQUFRLEdBQUc7WUFDakJHLE1BQU1MLGdCQUFnQixHQUFHb0IsT0FBT0UsT0FBTztRQUN6QztRQUNBVyxRQUFRQyxPQUFPLENBQUN4Qyw2REFBWUEsQ0FBQzJDLFFBQVEsRUFBRSxDQUFDaEM7WUFDdENBLE1BQU1KLFNBQVMsR0FBRztZQUNsQkksTUFBTUgsUUFBUSxHQUFHO1FBQ25CO0lBQ0Y7QUFDRjtBQUVBLCtEQUFlVyxZQUFZSyxPQUFPLEVBQUM7QUFDNUIsTUFBTSxFQUNYRCxTQUFTLEVBQ1RFLFdBQVcsRUFDWEssY0FBYyxFQUNkSyxXQUFXLEVBQ1hDLFdBQVcsRUFDWEMsWUFBWSxFQUNiLEdBQUdsQixZQUFZeUIsT0FBTyxDQUFDO0FBQ2pCLE1BQU0sRUFDWGxDLG9CQUFvQixFQUNwQkUsd0JBQXdCLEVBQ3hCTSxrQkFBa0IsRUFDbEJMLGdCQUFnQixFQUNoQkcsZ0JBQWdCLEVBQ2pCLEdBQUdHLFlBQVlWLFNBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL2ZpbHRlclNsaWNlLmpzPzA1Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgZmV0Y2hGaWx0ZXJzIH0gZnJvbSBcIi4uL21pZGRsZXdhcmVzL2ZpbHRlclwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGNhdGVnb3JpZXM6IFtdLFxuICBtaW5QcmljZTogbnVsbCxcbiAgbWF4UHJpY2U6IG51bGwsXG4gIGF2YWlsYWJsZUZpbHRlcnM6IHt9LFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBpc0xvYWRlZDogZmFsc2UsXG59O1xuXG5jb25zdCBzZWxlY3RvcnMgPSB7XG4gIGZpbHRlcklzT3BlblNlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmlzT3BlbixcbiAgYXZhaWxhYmxlRmlsdGVyc1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmF2YWlsYWJsZUZpbHRlcnMsXG4gIG1pblByaWNlU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuYXZhaWxhYmxlRmlsdGVycy5wcmljZS5taW4sXG4gIG1heFByaWNlU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuYXZhaWxhYmxlRmlsdGVycy5wcmljZS5tYXgsXG4gIGNhdGVnb3JpZXNTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS5jYXRlZ29yaWVzLFxufTtcblxuY29uc3QgZmlsdGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiZmlsdGVyXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgc2VsZWN0b3JzLFxuICByZWR1Y2VyczogKGNyZWF0ZSkgPT4gKHtcbiAgICBzZXRGaWx0ZXI6IGNyZWF0ZS5yZWR1Y2VyKChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUuaXNPcGVuID0gIXN0YXRlLmlzT3BlbjtcbiAgICB9KSxcbiAgICBhZGRDYXRlZ29yeTogY3JlYXRlLnJlZHVjZXIoKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGlmICghc3RhdGUuY2F0ZWdvcmllcy5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZCkpXG4gICAgICAgIHN0YXRlLmNhdGVnb3JpZXMucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgfSksXG4gICAgcmVtb3ZlQ2F0ZWdvcnk6IGNyZWF0ZS5yZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gc3RhdGUuY2F0ZWdvcmllcy5maW5kSW5kZXgoXG4gICAgICAgIChhcnJheUl0ZW0pID0+IGFycmF5SXRlbSA9PT0gYWN0aW9uLnBheWxvYWRcbiAgICAgICk7XG4gICAgICBpZiAoY2F0ZWdvcnlJbmRleCA+IC0xKSBzdGF0ZS5jYXRlZ29yaWVzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcbiAgICB9KSxcbiAgICBzZXRNaW5QcmljZTogY3JlYXRlLnJlZHVjZXIoKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLm1pblByaWNlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSksXG4gICAgc2V0TWF4UHJpY2U6IGNyZWF0ZS5yZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5tYXhQcmljZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pLFxuICAgIHJlc2V0RmlsdGVyczogY3JlYXRlLnJlZHVjZXIoKHN0YXRlKSA9PiAoe30pKSxcbiAgfSksXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoRmlsdGVycy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoRmlsdGVycy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmF2YWlsYWJsZUZpbHRlcnMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hGaWx0ZXJzLnJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJTbGljZS5yZWR1Y2VyO1xuZXhwb3J0IGNvbnN0IHtcbiAgc2V0RmlsdGVyLFxuICBhZGRDYXRlZ29yeSxcbiAgcmVtb3ZlQ2F0ZWdvcnksXG4gIHNldE1pblByaWNlLFxuICBzZXRNYXhQcmljZSxcbiAgcmVzZXRGaWx0ZXJzLFxufSA9IGZpbHRlclNsaWNlLmFjdGlvbnM7XG5leHBvcnQgY29uc3Qge1xuICBmaWx0ZXJJc09wZW5TZWxlY3RvcixcbiAgYXZhaWxhYmxlRmlsdGVyc1NlbGVjdG9yLFxuICBjYXRlZ29yaWVzU2VsZWN0b3IsXG4gIG1pblByaWNlU2VsZWN0b3IsXG4gIG1heFByaWNlU2VsZWN0b3IsXG59ID0gZmlsdGVyU2xpY2Uuc2VsZWN0b3JzO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hGaWx0ZXJzIiwiaW5pdGlhbFN0YXRlIiwiaXNPcGVuIiwiY2F0ZWdvcmllcyIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJhdmFpbGFibGVGaWx0ZXJzIiwiaXNMb2FkaW5nIiwiaXNMb2FkZWQiLCJzZWxlY3RvcnMiLCJmaWx0ZXJJc09wZW5TZWxlY3RvciIsInN0YXRlIiwiYXZhaWxhYmxlRmlsdGVyc1NlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsInByaWNlIiwibWluIiwibWF4UHJpY2VTZWxlY3RvciIsIm1heCIsImNhdGVnb3JpZXNTZWxlY3RvciIsImZpbHRlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiY3JlYXRlIiwic2V0RmlsdGVyIiwicmVkdWNlciIsImFkZENhdGVnb3J5IiwiYWN0aW9uIiwiaW5jbHVkZXMiLCJwYXlsb2FkIiwicHVzaCIsInJlbW92ZUNhdGVnb3J5IiwiY2F0ZWdvcnlJbmRleCIsImZpbmRJbmRleCIsImFycmF5SXRlbSIsInNwbGljZSIsInNldE1pblByaWNlIiwic2V0TWF4UHJpY2UiLCJyZXNldEZpbHRlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/filterSlice.js\n"));

/***/ })

});