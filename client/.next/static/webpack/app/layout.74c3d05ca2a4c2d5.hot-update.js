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

/***/ "(app-pages-browser)/./src/redux/slices/filterSlice.js":
/*!*****************************************!*\
  !*** ./src/redux/slices/filterSlice.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCategory: function() { return /* binding */ addCategory; },\n/* harmony export */   availableFiltersSelector: function() { return /* binding */ availableFiltersSelector; },\n/* harmony export */   categoriesSelector: function() { return /* binding */ categoriesSelector; },\n/* harmony export */   filterIsOpenSelector: function() { return /* binding */ filterIsOpenSelector; },\n/* harmony export */   setFilter: function() { return /* binding */ setFilter; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _middlewares_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/filter */ \"(app-pages-browser)/./src/redux/middlewares/filter.js\");\n\n\nconst initialState = {\n    isOpen: false,\n    categories: [],\n    minPrice: null,\n    maxPrice: null,\n    availableFilters: {},\n    isLoading: false,\n    isLoaded: false\n};\nconst selectors = {\n    filterIsOpenSelector: (state)=>state.isOpen,\n    availableFiltersSelector: (state)=>state.availableFilters,\n    categoriesSelector: (state)=>state.categories\n};\nconst filterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"filter\",\n    initialState,\n    selectors,\n    reducers: (create)=>({\n            setFilter: create.reducer((state)=>{\n                state.isOpen = !state.isOpen;\n            }),\n            addCategory: create.reducer((state, action)=>{\n                if (!state.categories.includes(action.payload)) state.categories.push(action.payload);\n            }),\n            removeCategory: create.reducer((state, action)=>{\n                const categoryIndex = state.categories.findIndex((arrayItem)=>arrayItem === action.payload);\n                if (categoryIndex > -1) state.categories.splice(categoryIndex, 1);\n            })\n        }),\n    extraReducers: (builder)=>{\n        builder.addCase(_middlewares_filter__WEBPACK_IMPORTED_MODULE_0__.fetchFilters.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(_middlewares_filter__WEBPACK_IMPORTED_MODULE_0__.fetchFilters.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.isLoaded = true;\n            state.availableFilters = action.payload;\n        });\n        builder.addCase(_middlewares_filter__WEBPACK_IMPORTED_MODULE_0__.fetchFilters.rejected, (state)=>{\n            state.isLoading = false;\n            state.isLoaded = false;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (filterSlice.reducer);\nconst { setFilter, addCategory } = filterSlice.actions;\nconst { filterIsOpenSelector, availableFiltersSelector, categoriesSelector } = filterSlice.selectors;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvZmlsdGVyU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQztBQUNNO0FBRXJELE1BQU1FLGVBQWU7SUFDbkJDLFFBQVE7SUFDUkMsWUFBWSxFQUFFO0lBQ2RDLFVBQVU7SUFDVkMsVUFBVTtJQUNWQyxrQkFBa0IsQ0FBQztJQUNuQkMsV0FBVztJQUNYQyxVQUFVO0FBQ1o7QUFFQSxNQUFNQyxZQUFZO0lBQ2hCQyxzQkFBc0IsQ0FBQ0MsUUFBVUEsTUFBTVQsTUFBTTtJQUM3Q1UsMEJBQTBCLENBQUNELFFBQVVBLE1BQU1MLGdCQUFnQjtJQUMzRE8sb0JBQW9CLENBQUNGLFFBQVVBLE1BQU1SLFVBQVU7QUFDakQ7QUFFQSxNQUFNVyxjQUFjZiw2REFBV0EsQ0FBQztJQUM5QmdCLE1BQU07SUFDTmQ7SUFDQVE7SUFDQU8sVUFBVSxDQUFDQyxTQUFZO1lBQ3JCQyxXQUFXRCxPQUFPRSxPQUFPLENBQUMsQ0FBQ1I7Z0JBQ3pCQSxNQUFNVCxNQUFNLEdBQUcsQ0FBQ1MsTUFBTVQsTUFBTTtZQUM5QjtZQUNBa0IsYUFBYUgsT0FBT0UsT0FBTyxDQUFDLENBQUNSLE9BQU9VO2dCQUNsQyxJQUFJLENBQUNWLE1BQU1SLFVBQVUsQ0FBQ21CLFFBQVEsQ0FBQ0QsT0FBT0UsT0FBTyxHQUMzQ1osTUFBTVIsVUFBVSxDQUFDcUIsSUFBSSxDQUFDSCxPQUFPRSxPQUFPO1lBQ3hDO1lBQ0FFLGdCQUFnQlIsT0FBT0UsT0FBTyxDQUFDLENBQUNSLE9BQU9VO2dCQUNyQyxNQUFNSyxnQkFBZ0JmLE1BQU1SLFVBQVUsQ0FBQ3dCLFNBQVMsQ0FDOUMsQ0FBQ0MsWUFBY0EsY0FBY1AsT0FBT0UsT0FBTztnQkFFN0MsSUFBSUcsZ0JBQWdCLENBQUMsR0FBR2YsTUFBTVIsVUFBVSxDQUFDMEIsTUFBTSxDQUFDSCxlQUFlO1lBQ2pFO1FBYUY7SUFDQUksZUFBZSxDQUFDQztRQUNkQSxRQUFRQyxPQUFPLENBQUNoQyw2REFBWUEsQ0FBQ2lDLE9BQU8sRUFBRSxDQUFDdEI7WUFDckNBLE1BQU1KLFNBQVMsR0FBRztRQUNwQjtRQUNBd0IsUUFBUUMsT0FBTyxDQUFDaEMsNkRBQVlBLENBQUNrQyxTQUFTLEVBQUUsQ0FBQ3ZCLE9BQU9VO1lBQzlDVixNQUFNSixTQUFTLEdBQUc7WUFDbEJJLE1BQU1ILFFBQVEsR0FBRztZQUNqQkcsTUFBTUwsZ0JBQWdCLEdBQUdlLE9BQU9FLE9BQU87UUFDekM7UUFDQVEsUUFBUUMsT0FBTyxDQUFDaEMsNkRBQVlBLENBQUNtQyxRQUFRLEVBQUUsQ0FBQ3hCO1lBQ3RDQSxNQUFNSixTQUFTLEdBQUc7WUFDbEJJLE1BQU1ILFFBQVEsR0FBRztRQUNuQjtJQUNGO0FBQ0Y7QUFFQSwrREFBZU0sWUFBWUssT0FBTyxFQUFDO0FBQzVCLE1BQU0sRUFBRUQsU0FBUyxFQUFFRSxXQUFXLEVBQUUsR0FBR04sWUFBWXNCLE9BQU8sQ0FBQztBQUN2RCxNQUFNLEVBQ1gxQixvQkFBb0IsRUFDcEJFLHdCQUF3QixFQUN4QkMsa0JBQWtCLEVBQ25CLEdBQUdDLFlBQVlMLFNBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL2ZpbHRlclNsaWNlLmpzPzA1Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgZmV0Y2hGaWx0ZXJzIH0gZnJvbSBcIi4uL21pZGRsZXdhcmVzL2ZpbHRlclwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGNhdGVnb3JpZXM6IFtdLFxuICBtaW5QcmljZTogbnVsbCxcbiAgbWF4UHJpY2U6IG51bGwsXG4gIGF2YWlsYWJsZUZpbHRlcnM6IHt9LFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBpc0xvYWRlZDogZmFsc2UsXG59O1xuXG5jb25zdCBzZWxlY3RvcnMgPSB7XG4gIGZpbHRlcklzT3BlblNlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmlzT3BlbixcbiAgYXZhaWxhYmxlRmlsdGVyc1NlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmF2YWlsYWJsZUZpbHRlcnMsXG4gIGNhdGVnb3JpZXNTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS5jYXRlZ29yaWVzLFxufTtcblxuY29uc3QgZmlsdGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiZmlsdGVyXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgc2VsZWN0b3JzLFxuICByZWR1Y2VyczogKGNyZWF0ZSkgPT4gKHtcbiAgICBzZXRGaWx0ZXI6IGNyZWF0ZS5yZWR1Y2VyKChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUuaXNPcGVuID0gIXN0YXRlLmlzT3BlbjtcbiAgICB9KSxcbiAgICBhZGRDYXRlZ29yeTogY3JlYXRlLnJlZHVjZXIoKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGlmICghc3RhdGUuY2F0ZWdvcmllcy5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZCkpXG4gICAgICAgIHN0YXRlLmNhdGVnb3JpZXMucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgfSksXG4gICAgcmVtb3ZlQ2F0ZWdvcnk6IGNyZWF0ZS5yZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gc3RhdGUuY2F0ZWdvcmllcy5maW5kSW5kZXgoXG4gICAgICAgIChhcnJheUl0ZW0pID0+IGFycmF5SXRlbSA9PT0gYWN0aW9uLnBheWxvYWRcbiAgICAgICk7XG4gICAgICBpZiAoY2F0ZWdvcnlJbmRleCA+IC0xKSBzdGF0ZS5jYXRlZ29yaWVzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcbiAgICB9KSxcbiAgICAvLyBzZXRNaW5QcmljZTogY3JlYXRlLnJlZHVjZXIoKHN0YXRlLCB7IHBheWxvYWQ6IHsgcHJpY2UgfSB9KSA9PiB7XG4gICAgLy8gICBzdGF0ZS5taW5QcmljZSA9IHByaWNlO1xuICAgIC8vIH0pLFxuICAgIC8vIHNldE1heFByaWNlOiBjcmVhdGUucmVkdWNlcigoc3RhdGUsIHsgcGF5bG9hZDogeyBwcmljZSB9IH0pID0+IHtcbiAgICAvLyAgIHN0YXRlLm1heFByaWNlID0gcHJpY2U7XG4gICAgLy8gfSksXG4gICAgLy8gcmVzZXRGaWx0ZXJzOiBjcmVhdGUucmVkdWNlcigoc3RhdGUpID0+ICh7XG4gICAgLy8gICAuLi5pbml0aWFsU3RhdGUsXG4gICAgLy8gICBhdmFpbGFibGVGaWx0ZXJzOiB7IC4uLnN0YXRlLmF2YWlsYWJsZUZpbHRlcnMgfSxcbiAgICAvLyAgIGlzTG9hZGVkOiBzdGF0ZS5pc0xvYWRlZCxcbiAgICAvLyAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nLFxuICAgIC8vIH0pKSxcbiAgfSksXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoRmlsdGVycy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoRmlsdGVycy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmF2YWlsYWJsZUZpbHRlcnMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hGaWx0ZXJzLnJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJTbGljZS5yZWR1Y2VyO1xuZXhwb3J0IGNvbnN0IHsgc2V0RmlsdGVyLCBhZGRDYXRlZ29yeSB9ID0gZmlsdGVyU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBjb25zdCB7XG4gIGZpbHRlcklzT3BlblNlbGVjdG9yLFxuICBhdmFpbGFibGVGaWx0ZXJzU2VsZWN0b3IsXG4gIGNhdGVnb3JpZXNTZWxlY3Rvcixcbn0gPSBmaWx0ZXJTbGljZS5zZWxlY3RvcnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJmZXRjaEZpbHRlcnMiLCJpbml0aWFsU3RhdGUiLCJpc09wZW4iLCJjYXRlZ29yaWVzIiwibWluUHJpY2UiLCJtYXhQcmljZSIsImF2YWlsYWJsZUZpbHRlcnMiLCJpc0xvYWRpbmciLCJpc0xvYWRlZCIsInNlbGVjdG9ycyIsImZpbHRlcklzT3BlblNlbGVjdG9yIiwic3RhdGUiLCJhdmFpbGFibGVGaWx0ZXJzU2VsZWN0b3IiLCJjYXRlZ29yaWVzU2VsZWN0b3IiLCJmaWx0ZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImNyZWF0ZSIsInNldEZpbHRlciIsInJlZHVjZXIiLCJhZGRDYXRlZ29yeSIsImFjdGlvbiIsImluY2x1ZGVzIiwicGF5bG9hZCIsInB1c2giLCJyZW1vdmVDYXRlZ29yeSIsImNhdGVnb3J5SW5kZXgiLCJmaW5kSW5kZXgiLCJhcnJheUl0ZW0iLCJzcGxpY2UiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/filterSlice.js\n"));

/***/ })

});