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

/***/ "(app-pages-browser)/./src/app/ui/allProducts/AllProducts.jsx":
/*!************************************************!*\
  !*** ./src/app/ui/allProducts/AllProducts.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllProducts: function() { return /* binding */ AllProducts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../productsBlock/ProductsBlock */ \"(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ AllProducts auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AllProducts() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)();\n    const selectedCategories = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.categoriesSelector);\n    const minPrice = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.selectedMinPriceSelector);\n    const maxPrice = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.selectedMaxPriceSelector);\n    const filterLinkConstructor = ()=>{\n        // categories;\n        const categoryFilter = selectedCategories.length > 0 ? \"categories=\".concat(selectedCategories.join(\"%2C\")) : \"\";\n        // price\n        let priceFilter = \"\";\n        if (minPrice !== null) priceFilter += \"&minPrice=\".concat(minPrice);\n        if (maxPrice !== null) priceFilter += \"&maxPrice=\".concat(maxPrice);\n        // full link\n        const fullFilterURL = categoryFilter + priceFilter;\n        // console.log(fullFilterURL);\n        if (fullFilterURL.size !== 0) {\n            router.push(\"products?\" + fullFilterURL);\n        // dispatch(fetchFilteredProducts(fullFilterURL));\n        // setSearchParams(fullFilterURL);\n        } else {\n        // dispatch(fetchFilteredProducts({}));\n        // setSearchParams({});\n        }\n    };\n    const setFiltersByUrl = ()=>{\n        const categoiesInUrl = searchParams.get(\"categories\");\n        if (categoiesInUrl !== null) {\n            const arrFromFilters = categoiesInUrl === null || categoiesInUrl === void 0 ? void 0 : categoiesInUrl.split(\",\");\n            arrFromFilters === null || arrFromFilters === void 0 ? void 0 : arrFromFilters.forEach((category)=>{\n                dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.addCategory)(category));\n            });\n        }\n        //\n        const minPriceInUrl = searchParams.get(\"minPrice\");\n        if (minPriceInUrl) {\n            dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.setMinPrice)(minPriceInUrl));\n        }\n        //\n        const maxPriceInUrl = searchParams.get(\"maxPrice\");\n        if (maxPriceInUrl) {\n            dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.setMaxPrice)(maxPriceInUrl));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setFiltersByUrl();\n        filterLinkConstructor();\n    }, [\n        minPrice,\n        maxPrice,\n        selectedCategoriesrouter,\n        router,\n        searchParams\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__.ProductsBlock, {\n        title: \"Усі вироби\",\n        searchParams: searchParams,\n        num: 4\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/allProducts/AllProducts.jsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(AllProducts, \"Gur/yULqDZfu97AXwYGExwXnqnw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = AllProducts;\nvar _c;\n$RefreshReg$(_c, \"AllProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvYWxsUHJvZHVjdHMvQWxsUHJvZHVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRStDO0FBQ1E7QUFDUTtBQVEzQjtBQUNGO0FBQzJCO0FBRXRELFNBQVNhOztJQUNkLE1BQU1DLFdBQVdiLHdEQUFXQTtJQUM1QixNQUFNYyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTUssZUFBZUosZ0VBQWVBO0lBRXBDLE1BQU1LLHFCQUFxQmYsd0RBQVdBLENBQUNLLHlFQUFrQkE7SUFDekQsTUFBTVcsV0FBV2hCLHdEQUFXQSxDQUFDTSwrRUFBd0JBO0lBQ3JELE1BQU1XLFdBQVdqQix3REFBV0EsQ0FBQ08sK0VBQXdCQTtJQUVyRCxNQUFNVyx3QkFBd0I7UUFDNUIsY0FBYztRQUNkLE1BQU1DLGlCQUNKSixtQkFBbUJLLE1BQU0sR0FBRyxJQUN4QixjQUE2QyxPQUEvQkwsbUJBQW1CTSxJQUFJLENBQUMsVUFDdEM7UUFDTixRQUFRO1FBQ1IsSUFBSUMsY0FBYztRQUNsQixJQUFJTixhQUFhLE1BQU1NLGVBQWUsYUFBc0IsT0FBVE47UUFDbkQsSUFBSUMsYUFBYSxNQUFNSyxlQUFlLGFBQXNCLE9BQVRMO1FBQ25ELFlBQVk7UUFDWixNQUFNTSxnQkFBZ0JKLGlCQUFpQkc7UUFDdkMsOEJBQThCO1FBQzlCLElBQUlDLGNBQWNDLElBQUksS0FBSyxHQUFHO1lBQzVCWCxPQUFPWSxJQUFJLENBQUMsY0FBY0Y7UUFDMUIsa0RBQWtEO1FBQ2xELGtDQUFrQztRQUNwQyxPQUFPO1FBQ0wsdUNBQXVDO1FBQ3ZDLHVCQUF1QjtRQUN6QjtJQUNGO0lBRUEsTUFBTUcsa0JBQWtCO1FBQ3RCLE1BQU1DLGlCQUFpQmIsYUFBYWMsR0FBRyxDQUFDO1FBQ3hDLElBQUlELG1CQUFtQixNQUFNO1lBQzNCLE1BQU1FLGlCQUFpQkYsMkJBQUFBLHFDQUFBQSxlQUFnQkcsS0FBSyxDQUFDO1lBQzdDRCwyQkFBQUEscUNBQUFBLGVBQWdCRSxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ3ZCcEIsU0FBU1Ysc0VBQVdBLENBQUM4QjtZQUN2QjtRQUNGO1FBQ0EsRUFBRTtRQUNGLE1BQU1DLGdCQUFnQm5CLGFBQWFjLEdBQUcsQ0FBQztRQUN2QyxJQUFJSyxlQUFlO1lBQ2pCckIsU0FBU1Qsc0VBQVdBLENBQUM4QjtRQUN2QjtRQUNBLEVBQUU7UUFDRixNQUFNQyxnQkFBZ0JwQixhQUFhYyxHQUFHLENBQUM7UUFDdkMsSUFBSU0sZUFBZTtZQUNqQnRCLFNBQVNSLHNFQUFXQSxDQUFDOEI7UUFDdkI7SUFDRjtJQUVBMUIsZ0RBQVNBLENBQUM7UUFDUmtCO1FBQ0FSO0lBQ0YsR0FBRztRQUFDRjtRQUFVQztRQUFVa0I7UUFBMEJ0QjtRQUFRQztLQUFhO0lBRXZFLHFCQUNFLDhEQUFDYix1RUFBYUE7UUFBQ21DLE9BQU07UUFBYXRCLGNBQWNBO1FBQWN1QixLQUFLOzs7Ozs7QUFFdkU7R0E1RGdCMUI7O1FBQ0daLG9EQUFXQTtRQUNiVSxzREFBU0E7UUFDSEMsNERBQWVBO1FBRVRWLG9EQUFXQTtRQUNyQkEsb0RBQVdBO1FBQ1hBLG9EQUFXQTs7O0tBUGRXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvYWxsUHJvZHVjdHMvQWxsUHJvZHVjdHMuanN4P2YzNGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYWxsUHJvZHVjdHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgUHJvZHVjdHNCbG9jayB9IGZyb20gXCIuLi9wcm9kdWN0c0Jsb2NrL1Byb2R1Y3RzQmxvY2tcIjtcbmltcG9ydCB7XG4gIGFkZENhdGVnb3J5LFxuICBzZXRNaW5QcmljZSxcbiAgc2V0TWF4UHJpY2UsXG4gIGNhdGVnb3JpZXNTZWxlY3RvcixcbiAgc2VsZWN0ZWRNaW5QcmljZVNlbGVjdG9yLFxuICBzZWxlY3RlZE1heFByaWNlU2VsZWN0b3IsXG59IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9maWx0ZXJTbGljZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFsbFByb2R1Y3RzKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcblxuICBjb25zdCBzZWxlY3RlZENhdGVnb3JpZXMgPSB1c2VTZWxlY3RvcihjYXRlZ29yaWVzU2VsZWN0b3IpO1xuICBjb25zdCBtaW5QcmljZSA9IHVzZVNlbGVjdG9yKHNlbGVjdGVkTWluUHJpY2VTZWxlY3Rvcik7XG4gIGNvbnN0IG1heFByaWNlID0gdXNlU2VsZWN0b3Ioc2VsZWN0ZWRNYXhQcmljZVNlbGVjdG9yKTtcblxuICBjb25zdCBmaWx0ZXJMaW5rQ29uc3RydWN0b3IgPSAoKSA9PiB7XG4gICAgLy8gY2F0ZWdvcmllcztcbiAgICBjb25zdCBjYXRlZ29yeUZpbHRlciA9XG4gICAgICBzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID4gMFxuICAgICAgICA/IGBjYXRlZ29yaWVzPSR7c2VsZWN0ZWRDYXRlZ29yaWVzLmpvaW4oXCIlMkNcIil9YFxuICAgICAgICA6IFwiXCI7XG4gICAgLy8gcHJpY2VcbiAgICBsZXQgcHJpY2VGaWx0ZXIgPSBcIlwiO1xuICAgIGlmIChtaW5QcmljZSAhPT0gbnVsbCkgcHJpY2VGaWx0ZXIgKz0gYCZtaW5QcmljZT0ke21pblByaWNlfWA7XG4gICAgaWYgKG1heFByaWNlICE9PSBudWxsKSBwcmljZUZpbHRlciArPSBgJm1heFByaWNlPSR7bWF4UHJpY2V9YDtcbiAgICAvLyBmdWxsIGxpbmtcbiAgICBjb25zdCBmdWxsRmlsdGVyVVJMID0gY2F0ZWdvcnlGaWx0ZXIgKyBwcmljZUZpbHRlcjtcbiAgICAvLyBjb25zb2xlLmxvZyhmdWxsRmlsdGVyVVJMKTtcbiAgICBpZiAoZnVsbEZpbHRlclVSTC5zaXplICE9PSAwKSB7XG4gICAgICByb3V0ZXIucHVzaChcInByb2R1Y3RzP1wiICsgZnVsbEZpbHRlclVSTCk7XG4gICAgICAvLyBkaXNwYXRjaChmZXRjaEZpbHRlcmVkUHJvZHVjdHMoZnVsbEZpbHRlclVSTCkpO1xuICAgICAgLy8gc2V0U2VhcmNoUGFyYW1zKGZ1bGxGaWx0ZXJVUkwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkaXNwYXRjaChmZXRjaEZpbHRlcmVkUHJvZHVjdHMoe30pKTtcbiAgICAgIC8vIHNldFNlYXJjaFBhcmFtcyh7fSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldEZpbHRlcnNCeVVybCA9ICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29pZXNJblVybCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJjYXRlZ29yaWVzXCIpO1xuICAgIGlmIChjYXRlZ29pZXNJblVybCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXJyRnJvbUZpbHRlcnMgPSBjYXRlZ29pZXNJblVybD8uc3BsaXQoXCIsXCIpO1xuICAgICAgYXJyRnJvbUZpbHRlcnM/LmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGFkZENhdGVnb3J5KGNhdGVnb3J5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy9cbiAgICBjb25zdCBtaW5QcmljZUluVXJsID0gc2VhcmNoUGFyYW1zLmdldChcIm1pblByaWNlXCIpO1xuICAgIGlmIChtaW5QcmljZUluVXJsKSB7XG4gICAgICBkaXNwYXRjaChzZXRNaW5QcmljZShtaW5QcmljZUluVXJsKSk7XG4gICAgfVxuICAgIC8vXG4gICAgY29uc3QgbWF4UHJpY2VJblVybCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJtYXhQcmljZVwiKTtcbiAgICBpZiAobWF4UHJpY2VJblVybCkge1xuICAgICAgZGlzcGF0Y2goc2V0TWF4UHJpY2UobWF4UHJpY2VJblVybCkpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZpbHRlcnNCeVVybCgpO1xuICAgIGZpbHRlckxpbmtDb25zdHJ1Y3RvcigpO1xuICB9LCBbbWluUHJpY2UsIG1heFByaWNlLCBzZWxlY3RlZENhdGVnb3JpZXNyb3V0ZXIsIHJvdXRlciwgc2VhcmNoUGFyYW1zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdHNCbG9jayB0aXRsZT1cItCj0YHRliDQstC40YDQvtCx0LhcIiBzZWFyY2hQYXJhbXM9e3NlYXJjaFBhcmFtc30gbnVtPXs0fSAvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJQcm9kdWN0c0Jsb2NrIiwiYWRkQ2F0ZWdvcnkiLCJzZXRNaW5QcmljZSIsInNldE1heFByaWNlIiwiY2F0ZWdvcmllc1NlbGVjdG9yIiwic2VsZWN0ZWRNaW5QcmljZVNlbGVjdG9yIiwic2VsZWN0ZWRNYXhQcmljZVNlbGVjdG9yIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiQWxsUHJvZHVjdHMiLCJkaXNwYXRjaCIsInJvdXRlciIsInNlYXJjaFBhcmFtcyIsInNlbGVjdGVkQ2F0ZWdvcmllcyIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJmaWx0ZXJMaW5rQ29uc3RydWN0b3IiLCJjYXRlZ29yeUZpbHRlciIsImxlbmd0aCIsImpvaW4iLCJwcmljZUZpbHRlciIsImZ1bGxGaWx0ZXJVUkwiLCJzaXplIiwicHVzaCIsInNldEZpbHRlcnNCeVVybCIsImNhdGVnb2llc0luVXJsIiwiZ2V0IiwiYXJyRnJvbUZpbHRlcnMiLCJzcGxpdCIsImZvckVhY2giLCJjYXRlZ29yeSIsIm1pblByaWNlSW5VcmwiLCJtYXhQcmljZUluVXJsIiwic2VsZWN0ZWRDYXRlZ29yaWVzcm91dGVyIiwidGl0bGUiLCJudW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/allProducts/AllProducts.jsx\n"));

/***/ })

});