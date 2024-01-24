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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCategory: function() { return /* binding */ addCategory; },\n/* harmony export */   availableFiltersSelector: function() { return /* binding */ availableFiltersSelector; },\n/* harmony export */   categoriesSelector: function() { return /* binding */ categoriesSelector; },\n/* harmony export */   filterIsOpenSelector: function() { return /* binding */ filterIsOpenSelector; },\n/* harmony export */   maxPriceSelector: function() { return /* binding */ maxPriceSelector; },\n/* harmony export */   minPriceSelector: function() { return /* binding */ minPriceSelector; },\n/* harmony export */   removeCategory: function() { return /* binding */ removeCategory; },\n/* harmony export */   setFilter: function() { return /* binding */ setFilter; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _middlewares_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/filter */ \"(app-pages-browser)/./src/redux/middlewares/filter.js\");\n\n\nconst initialState = {\n    isOpen: false,\n    categories: [],\n    minPrice: null,\n    maxPrice: null,\n    availableFilters: {},\n    isLoading: false,\n    isLoaded: false\n};\nconst selectors = {\n    filterIsOpenSelector: (state)=>state.isOpen,\n    availableFiltersSelector: (state)=>state.availableFilters,\n    minPriceSelector: (state)=>state.availableFilters.price.min,\n    maxPriceSelector: (state)=>state.availableFilters.price.max,\n    categoriesSelector: (state)=>state.categories\n};\nconst filterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"filter\",\n    initialState,\n    selectors,\n    reducers: (create)=>({\n            setFilter: create.reducer((state)=>{\n                state.isOpen = !state.isOpen;\n            }),\n            addCategory: create.reducer((state, action)=>{\n                if (!state.categories.includes(action.payload)) state.categories.push(action.payload);\n            }),\n            removeCategory: create.reducer((state, action)=>{\n                const categoryIndex = state.categories.findIndex((arrayItem)=>arrayItem === action.payload);\n                if (categoryIndex > -1) state.categories.splice(categoryIndex, 1);\n            }),\n            setMinPrice: create.reducer((state, action)=>{\n                state.minPrice = action.payload;\n            }),\n            setMaxPrice: create.reducer((state, action)=>{\n                state.maxPrice = action.payload;\n            })\n        }),\n    extraReducers: (builder)=>{\n        builder.addCase(_middlewares_filter__WEBPACK_IMPORTED_MODULE_0__.fetchFilters.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(_middlewares_filter__WEBPACK_IMPORTED_MODULE_0__.fetchFilters.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.isLoaded = true;\n            state.availableFilters = action.payload;\n        });\n        builder.addCase(_middlewares_filter__WEBPACK_IMPORTED_MODULE_0__.fetchFilters.rejected, (state)=>{\n            state.isLoading = false;\n            state.isLoaded = false;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (filterSlice.reducer);\nconst { setFilter, addCategory, removeCategory } = filterSlice.actions;\nconst { filterIsOpenSelector, availableFiltersSelector, categoriesSelector, minPriceSelector, maxPriceSelector } = filterSlice.selectors;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvZmlsdGVyU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQztBQUNNO0FBRXJELE1BQU1FLGVBQWU7SUFDbkJDLFFBQVE7SUFDUkMsWUFBWSxFQUFFO0lBQ2RDLFVBQVU7SUFDVkMsVUFBVTtJQUNWQyxrQkFBa0IsQ0FBQztJQUNuQkMsV0FBVztJQUNYQyxVQUFVO0FBQ1o7QUFFQSxNQUFNQyxZQUFZO0lBQ2hCQyxzQkFBc0IsQ0FBQ0MsUUFBVUEsTUFBTVQsTUFBTTtJQUM3Q1UsMEJBQTBCLENBQUNELFFBQVVBLE1BQU1MLGdCQUFnQjtJQUMzRE8sa0JBQWtCLENBQUNGLFFBQVVBLE1BQU1MLGdCQUFnQixDQUFDUSxLQUFLLENBQUNDLEdBQUc7SUFDN0RDLGtCQUFrQixDQUFDTCxRQUFVQSxNQUFNTCxnQkFBZ0IsQ0FBQ1EsS0FBSyxDQUFDRyxHQUFHO0lBQzdEQyxvQkFBb0IsQ0FBQ1AsUUFBVUEsTUFBTVIsVUFBVTtBQUNqRDtBQUVBLE1BQU1nQixjQUFjcEIsNkRBQVdBLENBQUM7SUFDOUJxQixNQUFNO0lBQ05uQjtJQUNBUTtJQUNBWSxVQUFVLENBQUNDLFNBQVk7WUFDckJDLFdBQVdELE9BQU9FLE9BQU8sQ0FBQyxDQUFDYjtnQkFDekJBLE1BQU1ULE1BQU0sR0FBRyxDQUFDUyxNQUFNVCxNQUFNO1lBQzlCO1lBQ0F1QixhQUFhSCxPQUFPRSxPQUFPLENBQUMsQ0FBQ2IsT0FBT2U7Z0JBQ2xDLElBQUksQ0FBQ2YsTUFBTVIsVUFBVSxDQUFDd0IsUUFBUSxDQUFDRCxPQUFPRSxPQUFPLEdBQzNDakIsTUFBTVIsVUFBVSxDQUFDMEIsSUFBSSxDQUFDSCxPQUFPRSxPQUFPO1lBQ3hDO1lBQ0FFLGdCQUFnQlIsT0FBT0UsT0FBTyxDQUFDLENBQUNiLE9BQU9lO2dCQUNyQyxNQUFNSyxnQkFBZ0JwQixNQUFNUixVQUFVLENBQUM2QixTQUFTLENBQzlDLENBQUNDLFlBQWNBLGNBQWNQLE9BQU9FLE9BQU87Z0JBRTdDLElBQUlHLGdCQUFnQixDQUFDLEdBQUdwQixNQUFNUixVQUFVLENBQUMrQixNQUFNLENBQUNILGVBQWU7WUFDakU7WUFDQUksYUFBYWIsT0FBT0UsT0FBTyxDQUFDLENBQUNiLE9BQU9lO2dCQUNsQ2YsTUFBTVAsUUFBUSxHQUFHc0IsT0FBT0UsT0FBTztZQUNqQztZQUNBUSxhQUFhZCxPQUFPRSxPQUFPLENBQUMsQ0FBQ2IsT0FBT2U7Z0JBQ2xDZixNQUFNTixRQUFRLEdBQUdxQixPQUFPRSxPQUFPO1lBQ2pDO1FBT0Y7SUFDQVMsZUFBZSxDQUFDQztRQUNkQSxRQUFRQyxPQUFPLENBQUN2Qyw2REFBWUEsQ0FBQ3dDLE9BQU8sRUFBRSxDQUFDN0I7WUFDckNBLE1BQU1KLFNBQVMsR0FBRztRQUNwQjtRQUNBK0IsUUFBUUMsT0FBTyxDQUFDdkMsNkRBQVlBLENBQUN5QyxTQUFTLEVBQUUsQ0FBQzlCLE9BQU9lO1lBQzlDZixNQUFNSixTQUFTLEdBQUc7WUFDbEJJLE1BQU1ILFFBQVEsR0FBRztZQUNqQkcsTUFBTUwsZ0JBQWdCLEdBQUdvQixPQUFPRSxPQUFPO1FBQ3pDO1FBQ0FVLFFBQVFDLE9BQU8sQ0FBQ3ZDLDZEQUFZQSxDQUFDMEMsUUFBUSxFQUFFLENBQUMvQjtZQUN0Q0EsTUFBTUosU0FBUyxHQUFHO1lBQ2xCSSxNQUFNSCxRQUFRLEdBQUc7UUFDbkI7SUFDRjtBQUNGO0FBRUEsK0RBQWVXLFlBQVlLLE9BQU8sRUFBQztBQUM1QixNQUFNLEVBQUVELFNBQVMsRUFBRUUsV0FBVyxFQUFFSyxjQUFjLEVBQUUsR0FBR1gsWUFBWXdCLE9BQU8sQ0FBQztBQUN2RSxNQUFNLEVBQ1hqQyxvQkFBb0IsRUFDcEJFLHdCQUF3QixFQUN4Qk0sa0JBQWtCLEVBQ2xCTCxnQkFBZ0IsRUFDaEJHLGdCQUFnQixFQUNqQixHQUFHRyxZQUFZVixTQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NsaWNlcy9maWx0ZXJTbGljZS5qcz8wNWNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IGZldGNoRmlsdGVycyB9IGZyb20gXCIuLi9taWRkbGV3YXJlcy9maWx0ZXJcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBjYXRlZ29yaWVzOiBbXSxcbiAgbWluUHJpY2U6IG51bGwsXG4gIG1heFByaWNlOiBudWxsLFxuICBhdmFpbGFibGVGaWx0ZXJzOiB7fSxcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgaXNMb2FkZWQ6IGZhbHNlLFxufTtcblxuY29uc3Qgc2VsZWN0b3JzID0ge1xuICBmaWx0ZXJJc09wZW5TZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS5pc09wZW4sXG4gIGF2YWlsYWJsZUZpbHRlcnNTZWxlY3RvcjogKHN0YXRlKSA9PiBzdGF0ZS5hdmFpbGFibGVGaWx0ZXJzLFxuICBtaW5QcmljZVNlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmF2YWlsYWJsZUZpbHRlcnMucHJpY2UubWluLFxuICBtYXhQcmljZVNlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmF2YWlsYWJsZUZpbHRlcnMucHJpY2UubWF4LFxuICBjYXRlZ29yaWVzU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuY2F0ZWdvcmllcyxcbn07XG5cbmNvbnN0IGZpbHRlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImZpbHRlclwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHNlbGVjdG9ycyxcbiAgcmVkdWNlcnM6IChjcmVhdGUpID0+ICh7XG4gICAgc2V0RmlsdGVyOiBjcmVhdGUucmVkdWNlcigoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmlzT3BlbiA9ICFzdGF0ZS5pc09wZW47XG4gICAgfSksXG4gICAgYWRkQ2F0ZWdvcnk6IGNyZWF0ZS5yZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBpZiAoIXN0YXRlLmNhdGVnb3JpZXMuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQpKVxuICAgICAgICBzdGF0ZS5jYXRlZ29yaWVzLnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgIH0pLFxuICAgIHJlbW92ZUNhdGVnb3J5OiBjcmVhdGUucmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9IHN0YXRlLmNhdGVnb3JpZXMuZmluZEluZGV4KFxuICAgICAgICAoYXJyYXlJdGVtKSA9PiBhcnJheUl0ZW0gPT09IGFjdGlvbi5wYXlsb2FkXG4gICAgICApO1xuICAgICAgaWYgKGNhdGVnb3J5SW5kZXggPiAtMSkgc3RhdGUuY2F0ZWdvcmllcy5zcGxpY2UoY2F0ZWdvcnlJbmRleCwgMSk7XG4gICAgfSksXG4gICAgc2V0TWluUHJpY2U6IGNyZWF0ZS5yZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5taW5QcmljZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pLFxuICAgIHNldE1heFByaWNlOiBjcmVhdGUucmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUubWF4UHJpY2UgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KSxcbiAgICAvLyByZXNldEZpbHRlcnM6IGNyZWF0ZS5yZWR1Y2VyKChzdGF0ZSkgPT4gKHtcbiAgICAvLyAgIC4uLmluaXRpYWxTdGF0ZSxcbiAgICAvLyAgIGF2YWlsYWJsZUZpbHRlcnM6IHsgLi4uc3RhdGUuYXZhaWxhYmxlRmlsdGVycyB9LFxuICAgIC8vICAgaXNMb2FkZWQ6IHN0YXRlLmlzTG9hZGVkLFxuICAgIC8vICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmcsXG4gICAgLy8gfSkpLFxuICB9KSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hGaWx0ZXJzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hGaWx0ZXJzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgc3RhdGUuYXZhaWxhYmxlRmlsdGVycyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaEZpbHRlcnMucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5pc0xvYWRlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZpbHRlclNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3QgeyBzZXRGaWx0ZXIsIGFkZENhdGVnb3J5LCByZW1vdmVDYXRlZ29yeSB9ID0gZmlsdGVyU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBjb25zdCB7XG4gIGZpbHRlcklzT3BlblNlbGVjdG9yLFxuICBhdmFpbGFibGVGaWx0ZXJzU2VsZWN0b3IsXG4gIGNhdGVnb3JpZXNTZWxlY3RvcixcbiAgbWluUHJpY2VTZWxlY3RvcixcbiAgbWF4UHJpY2VTZWxlY3Rvcixcbn0gPSBmaWx0ZXJTbGljZS5zZWxlY3RvcnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJmZXRjaEZpbHRlcnMiLCJpbml0aWFsU3RhdGUiLCJpc09wZW4iLCJjYXRlZ29yaWVzIiwibWluUHJpY2UiLCJtYXhQcmljZSIsImF2YWlsYWJsZUZpbHRlcnMiLCJpc0xvYWRpbmciLCJpc0xvYWRlZCIsInNlbGVjdG9ycyIsImZpbHRlcklzT3BlblNlbGVjdG9yIiwic3RhdGUiLCJhdmFpbGFibGVGaWx0ZXJzU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwicHJpY2UiLCJtaW4iLCJtYXhQcmljZVNlbGVjdG9yIiwibWF4IiwiY2F0ZWdvcmllc1NlbGVjdG9yIiwiZmlsdGVyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJjcmVhdGUiLCJzZXRGaWx0ZXIiLCJyZWR1Y2VyIiwiYWRkQ2F0ZWdvcnkiLCJhY3Rpb24iLCJpbmNsdWRlcyIsInBheWxvYWQiLCJwdXNoIiwicmVtb3ZlQ2F0ZWdvcnkiLCJjYXRlZ29yeUluZGV4IiwiZmluZEluZGV4IiwiYXJyYXlJdGVtIiwic3BsaWNlIiwic2V0TWluUHJpY2UiLCJzZXRNYXhQcmljZSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/filterSlice.js\n"));

/***/ })

});