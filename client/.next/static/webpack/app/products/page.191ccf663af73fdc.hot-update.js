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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllProducts: function() { return /* binding */ AllProducts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../productsBlock/ProductsBlock */ \"(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* harmony import */ var _redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/middlewares/filteredProducts */ \"(app-pages-browser)/./src/redux/middlewares/filteredProducts.js\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ AllProducts auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction AllProducts(param) {\n    let { searchParams } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const filteredProds = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_2__.filteredProductsSelector);\n    const url = new URLSearchParams(searchParams).toString();\n    // const filterLinkConstructor = () => {\n    //   // categories;\n    //   const categoryFilter =\n    //     selectedCategories.length > 0\n    //       ? `categories=${selectedCategories.join(\",\")}`\n    //       : \"\";\n    //   // price\n    //   let priceFilter = \"\";\n    //   if (minPrice !== null) priceFilter += `&minPrice=${minPrice}`;\n    //   if (maxPrice !== null) priceFilter += `&maxPrice=${maxPrice}`;\n    //   // sort\n    //   let sortOrder;\n    //   if (sort === \"currentPrice\") {\n    //     sortOrder = \"&sort=currentPrice\";\n    //   } else if (sort === \"-currentPrice\") {\n    //     sortOrder = \"&sort=-currentPrice\";\n    //   } else sortOrder = \"\";\n    //   // full link\n    //   const fullFilterURL = categoryFilter + priceFilter + sortOrder;\n    //   if (fullFilterURL.size !== 0) {\n    //     setSearchParams(fullFilterURL);\n    //   } else {\n    //     setSearchParams({});\n    //   }\n    // };\n    const setFiltersByUrl = ()=>{\n        const categoiesInUrl = searchParams.get(\"categories\");\n        if (categoiesInUrl !== null) {\n            const arrFromFilters = categoiesInUrl.split(\",\");\n            arrFromFilters.forEach((category)=>{\n                dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.addCategory)(category));\n            });\n        }\n        //\n        const minPriceInUrl = searchParams.get(\"minPrice\");\n        if (minPriceInUrl) {\n            dispatch(setMinPrice(+minPriceInUrl));\n        }\n        //\n        const maxPriceInUrl = searchParams.get(\"maxPrice\");\n        if (maxPriceInUrl) {\n            dispatch(setMaxPrice(+maxPriceInUrl));\n        }\n    //\n    // const sortInUrl = searchParams.get(\"sort\");\n    // if (sortInUrl) {\n    //   dispatch(sortBy(sortInUrl));\n    // }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setFiltersByUrl();\n        dispatch((0,_redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_3__.fetchFilteredProducts)(url));\n    }, [\n        url\n    ]);\n    console.log(url);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__.ProductsBlock, {\n        title: \"Усі вироби\",\n        products: filteredProds,\n        num: 4\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/allProducts/AllProducts.jsx\",\n        lineNumber: 75,\n        columnNumber: 10\n    }, this);\n}\n_s(AllProducts, \"0rgpvXsE2tN3FEerH9emopqqAOQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = AllProducts;\nvar _c;\n$RefreshReg$(_c, \"AllProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvYWxsUHJvZHVjdHMvQWxsUHJvZHVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRStDO0FBQ1E7QUFDUTtBQUNTO0FBQ0s7QUFDcEI7QUFDdkI7QUFFM0IsU0FBU1EsWUFBWSxLQUFnQjtRQUFoQixFQUFFQyxZQUFZLEVBQUUsR0FBaEI7O0lBQzFCLE1BQU1DLFdBQVdULHdEQUFXQTtJQUU1QixNQUFNVSxnQkFBZ0JULHdEQUFXQSxDQUFDRSxpRkFBd0JBO0lBQzFELE1BQU1RLE1BQU0sSUFBSUMsZ0JBQWdCSixjQUFjSyxRQUFRO0lBRXRELHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyx1REFBdUQ7SUFDdkQsY0FBYztJQUNkLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsbUVBQW1FO0lBQ25FLG1FQUFtRTtJQUNuRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyx3Q0FBd0M7SUFDeEMsMkNBQTJDO0lBQzNDLHlDQUF5QztJQUN6QywyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLG9FQUFvRTtJQUNwRSxvQ0FBb0M7SUFDcEMsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsTUFBTTtJQUNOLEtBQUs7SUFFTCxNQUFNQyxrQkFBa0I7UUFDdEIsTUFBTUMsaUJBQWlCUCxhQUFhUSxHQUFHLENBQUM7UUFDeEMsSUFBSUQsbUJBQW1CLE1BQU07WUFDM0IsTUFBTUUsaUJBQWlCRixlQUFlRyxLQUFLLENBQUM7WUFDNUNELGVBQWVFLE9BQU8sQ0FBQyxDQUFDQztnQkFDdEJYLFNBQVNKLHNFQUFXQSxDQUFDZTtZQUN2QjtRQUNGO1FBQ0EsRUFBRTtRQUNGLE1BQU1DLGdCQUFnQmIsYUFBYVEsR0FBRyxDQUFDO1FBQ3ZDLElBQUlLLGVBQWU7WUFDakJaLFNBQVNhLFlBQVksQ0FBQ0Q7UUFDeEI7UUFDQSxFQUFFO1FBQ0YsTUFBTUUsZ0JBQWdCZixhQUFhUSxHQUFHLENBQUM7UUFDdkMsSUFBSU8sZUFBZTtZQUNqQmQsU0FBU2UsWUFBWSxDQUFDRDtRQUN4QjtJQUNBLEVBQUU7SUFDRiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxJQUFJO0lBQ047SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ1JRO1FBQ0FMLFNBQVNMLDBGQUFxQkEsQ0FBQ087SUFDakMsR0FBRztRQUFDQTtLQUFJO0lBRVJjLFFBQVFDLEdBQUcsQ0FBQ2Y7SUFFWixxQkFBTyw4REFBQ1QsdUVBQWFBO1FBQUN5QixPQUFNO1FBQWFDLFVBQVVsQjtRQUFlbUIsS0FBSzs7Ozs7O0FBQ3pFO0dBakVnQnRCOztRQUNHUCxvREFBV0E7UUFFTkMsb0RBQVdBOzs7S0FIbkJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvYWxsUHJvZHVjdHMvQWxsUHJvZHVjdHMuanN4P2YzNGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYWxsUHJvZHVjdHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgUHJvZHVjdHNCbG9jayB9IGZyb20gXCIuLi9wcm9kdWN0c0Jsb2NrL1Byb2R1Y3RzQmxvY2tcIjtcbmltcG9ydCB7IGZpbHRlcmVkUHJvZHVjdHNTZWxlY3RvciB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9kdWN0c1NsaWNlXCI7XG5pbXBvcnQgeyBmZXRjaEZpbHRlcmVkUHJvZHVjdHMgfSBmcm9tIFwiQC9yZWR1eC9taWRkbGV3YXJlcy9maWx0ZXJlZFByb2R1Y3RzXCI7XG5pbXBvcnQgeyBhZGRDYXRlZ29yeSB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9maWx0ZXJTbGljZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBbGxQcm9kdWN0cyh7IHNlYXJjaFBhcmFtcyB9KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBmaWx0ZXJlZFByb2RzID0gdXNlU2VsZWN0b3IoZmlsdGVyZWRQcm9kdWN0c1NlbGVjdG9yKTtcbiAgY29uc3QgdXJsID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hQYXJhbXMpLnRvU3RyaW5nKCk7XG5cbiAgLy8gY29uc3QgZmlsdGVyTGlua0NvbnN0cnVjdG9yID0gKCkgPT4ge1xuICAvLyAgIC8vIGNhdGVnb3JpZXM7XG4gIC8vICAgY29uc3QgY2F0ZWdvcnlGaWx0ZXIgPVxuICAvLyAgICAgc2VsZWN0ZWRDYXRlZ29yaWVzLmxlbmd0aCA+IDBcbiAgLy8gICAgICAgPyBgY2F0ZWdvcmllcz0ke3NlbGVjdGVkQ2F0ZWdvcmllcy5qb2luKFwiLFwiKX1gXG4gIC8vICAgICAgIDogXCJcIjtcbiAgLy8gICAvLyBwcmljZVxuICAvLyAgIGxldCBwcmljZUZpbHRlciA9IFwiXCI7XG4gIC8vICAgaWYgKG1pblByaWNlICE9PSBudWxsKSBwcmljZUZpbHRlciArPSBgJm1pblByaWNlPSR7bWluUHJpY2V9YDtcbiAgLy8gICBpZiAobWF4UHJpY2UgIT09IG51bGwpIHByaWNlRmlsdGVyICs9IGAmbWF4UHJpY2U9JHttYXhQcmljZX1gO1xuICAvLyAgIC8vIHNvcnRcbiAgLy8gICBsZXQgc29ydE9yZGVyO1xuICAvLyAgIGlmIChzb3J0ID09PSBcImN1cnJlbnRQcmljZVwiKSB7XG4gIC8vICAgICBzb3J0T3JkZXIgPSBcIiZzb3J0PWN1cnJlbnRQcmljZVwiO1xuICAvLyAgIH0gZWxzZSBpZiAoc29ydCA9PT0gXCItY3VycmVudFByaWNlXCIpIHtcbiAgLy8gICAgIHNvcnRPcmRlciA9IFwiJnNvcnQ9LWN1cnJlbnRQcmljZVwiO1xuICAvLyAgIH0gZWxzZSBzb3J0T3JkZXIgPSBcIlwiO1xuICAvLyAgIC8vIGZ1bGwgbGlua1xuICAvLyAgIGNvbnN0IGZ1bGxGaWx0ZXJVUkwgPSBjYXRlZ29yeUZpbHRlciArIHByaWNlRmlsdGVyICsgc29ydE9yZGVyO1xuICAvLyAgIGlmIChmdWxsRmlsdGVyVVJMLnNpemUgIT09IDApIHtcbiAgLy8gICAgIHNldFNlYXJjaFBhcmFtcyhmdWxsRmlsdGVyVVJMKTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgc2V0U2VhcmNoUGFyYW1zKHt9KTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgY29uc3Qgc2V0RmlsdGVyc0J5VXJsID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb2llc0luVXJsID0gc2VhcmNoUGFyYW1zLmdldChcImNhdGVnb3JpZXNcIik7XG4gICAgaWYgKGNhdGVnb2llc0luVXJsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhcnJGcm9tRmlsdGVycyA9IGNhdGVnb2llc0luVXJsLnNwbGl0KFwiLFwiKTtcbiAgICAgIGFyckZyb21GaWx0ZXJzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGFkZENhdGVnb3J5KGNhdGVnb3J5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy9cbiAgICBjb25zdCBtaW5QcmljZUluVXJsID0gc2VhcmNoUGFyYW1zLmdldChcIm1pblByaWNlXCIpO1xuICAgIGlmIChtaW5QcmljZUluVXJsKSB7XG4gICAgICBkaXNwYXRjaChzZXRNaW5QcmljZSgrbWluUHJpY2VJblVybCkpO1xuICAgIH1cbiAgICAvL1xuICAgIGNvbnN0IG1heFByaWNlSW5VcmwgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibWF4UHJpY2VcIik7XG4gICAgaWYgKG1heFByaWNlSW5VcmwpIHtcbiAgICAgIGRpc3BhdGNoKHNldE1heFByaWNlKCttYXhQcmljZUluVXJsKSk7XG4gICAgfVxuICAgIC8vXG4gICAgLy8gY29uc3Qgc29ydEluVXJsID0gc2VhcmNoUGFyYW1zLmdldChcInNvcnRcIik7XG4gICAgLy8gaWYgKHNvcnRJblVybCkge1xuICAgIC8vICAgZGlzcGF0Y2goc29ydEJ5KHNvcnRJblVybCkpO1xuICAgIC8vIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZpbHRlcnNCeVVybCgpO1xuICAgIGRpc3BhdGNoKGZldGNoRmlsdGVyZWRQcm9kdWN0cyh1cmwpKTtcbiAgfSwgW3VybF0pO1xuXG4gIGNvbnNvbGUubG9nKHVybCk7XG5cbiAgcmV0dXJuIDxQcm9kdWN0c0Jsb2NrIHRpdGxlPVwi0KPRgdGWINCy0LjRgNC+0LHQuFwiIHByb2R1Y3RzPXtmaWx0ZXJlZFByb2RzfSBudW09ezR9IC8+O1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJQcm9kdWN0c0Jsb2NrIiwiZmlsdGVyZWRQcm9kdWN0c1NlbGVjdG9yIiwiZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzIiwiYWRkQ2F0ZWdvcnkiLCJ1c2VFZmZlY3QiLCJBbGxQcm9kdWN0cyIsInNlYXJjaFBhcmFtcyIsImRpc3BhdGNoIiwiZmlsdGVyZWRQcm9kcyIsInVybCIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwic2V0RmlsdGVyc0J5VXJsIiwiY2F0ZWdvaWVzSW5VcmwiLCJnZXQiLCJhcnJGcm9tRmlsdGVycyIsInNwbGl0IiwiZm9yRWFjaCIsImNhdGVnb3J5IiwibWluUHJpY2VJblVybCIsInNldE1pblByaWNlIiwibWF4UHJpY2VJblVybCIsInNldE1heFByaWNlIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwicHJvZHVjdHMiLCJudW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/allProducts/AllProducts.jsx\n"));

/***/ })

});