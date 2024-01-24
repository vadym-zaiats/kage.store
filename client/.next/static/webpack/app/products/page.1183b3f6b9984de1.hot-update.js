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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllProducts: function() { return /* binding */ AllProducts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../productsBlock/ProductsBlock */ \"(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* harmony import */ var _redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/middlewares/filteredProducts */ \"(app-pages-browser)/./src/redux/middlewares/filteredProducts.js\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ AllProducts auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction AllProducts(param) {\n    let { searchParams } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const filteredProds = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_2__.filteredProductsSelector);\n    const url = new URLSearchParams(searchParams).toString();\n    console.log(searchParams);\n    // const filterLinkConstructor = () => {\n    //   // categories;\n    //   const categoryFilter =\n    //     selectedCategories.length > 0\n    //       ? `categories=${selectedCategories.join(\",\")}`\n    //       : \"\";\n    //   // price\n    //   let priceFilter = \"\";\n    //   if (minPrice !== null) priceFilter += `&minPrice=${minPrice}`;\n    //   if (maxPrice !== null) priceFilter += `&maxPrice=${maxPrice}`;\n    //   // sort\n    //   let sortOrder;\n    //   if (sort === \"currentPrice\") {\n    //     sortOrder = \"&sort=currentPrice\";\n    //   } else if (sort === \"-currentPrice\") {\n    //     sortOrder = \"&sort=-currentPrice\";\n    //   } else sortOrder = \"\";\n    //   // full link\n    //   const fullFilterURL = categoryFilter + priceFilter + sortOrder;\n    //   if (fullFilterURL.size !== 0) {\n    //     setSearchParams(fullFilterURL);\n    //   } else {\n    //     setSearchParams({});\n    //   }\n    // };\n    const setFiltersByUrl = ()=>{\n        const categoiesInUrl = searchParams.categories;\n        if (categoiesInUrl !== null) {\n            const arrFromFilters = categoiesInUrl.split(\",\");\n            arrFromFilters.forEach((category)=>{\n                dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.addCategory)(category));\n            });\n        }\n        //\n        const minPriceInUrl = searchParams.minPrice;\n        if (minPriceInUrl) {\n            dispatch(setMinPrice(+minPriceInUrl));\n        }\n        //\n        const maxPriceInUrl = searchParams.maxPrice;\n        if (maxPriceInUrl) {\n            dispatch(setMaxPrice(+maxPriceInUrl));\n        }\n    //\n    // const sortInUrl = searchParams.get(\"sort\");\n    // if (sortInUrl) {\n    //   dispatch(sortBy(sortInUrl));\n    // }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // setFiltersByUrl();\n        dispatch((0,_redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_3__.fetchFilteredProducts)(url));\n    }, [\n        url\n    ]);\n    console.log(url);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__.ProductsBlock, {\n        title: \"Усі вироби\",\n        products: filteredProds,\n        num: 4\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/allProducts/AllProducts.jsx\",\n        lineNumber: 75,\n        columnNumber: 10\n    }, this);\n}\n_s(AllProducts, \"0rgpvXsE2tN3FEerH9emopqqAOQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = AllProducts;\nvar _c;\n$RefreshReg$(_c, \"AllProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvYWxsUHJvZHVjdHMvQWxsUHJvZHVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRStDO0FBQ1E7QUFDUTtBQUNTO0FBQ0s7QUFDcEI7QUFDdkI7QUFFM0IsU0FBU1EsWUFBWSxLQUFnQjtRQUFoQixFQUFFQyxZQUFZLEVBQUUsR0FBaEI7O0lBQzFCLE1BQU1DLFdBQVdULHdEQUFXQTtJQUU1QixNQUFNVSxnQkFBZ0JULHdEQUFXQSxDQUFDRSxpRkFBd0JBO0lBQzFELE1BQU1RLE1BQU0sSUFBSUMsZ0JBQWdCSixjQUFjSyxRQUFRO0lBQ3REQyxRQUFRQyxHQUFHLENBQUNQO0lBQ1osd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isb0NBQW9DO0lBQ3BDLHVEQUF1RDtJQUN2RCxjQUFjO0lBQ2QsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtRUFBbUU7SUFDbkUsbUVBQW1FO0lBQ25FLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLHdDQUF3QztJQUN4QywyQ0FBMkM7SUFDM0MseUNBQXlDO0lBQ3pDLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsb0VBQW9FO0lBQ3BFLG9DQUFvQztJQUNwQyxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixNQUFNO0lBQ04sS0FBSztJQUVMLE1BQU1RLGtCQUFrQjtRQUN0QixNQUFNQyxpQkFBaUJULGFBQWFVLFVBQVU7UUFDOUMsSUFBSUQsbUJBQW1CLE1BQU07WUFDM0IsTUFBTUUsaUJBQWlCRixlQUFlRyxLQUFLLENBQUM7WUFDNUNELGVBQWVFLE9BQU8sQ0FBQyxDQUFDQztnQkFDdEJiLFNBQVNKLHNFQUFXQSxDQUFDaUI7WUFDdkI7UUFDRjtRQUNBLEVBQUU7UUFDRixNQUFNQyxnQkFBZ0JmLGFBQWFnQixRQUFRO1FBQzNDLElBQUlELGVBQWU7WUFDakJkLFNBQVNnQixZQUFZLENBQUNGO1FBQ3hCO1FBQ0EsRUFBRTtRQUNGLE1BQU1HLGdCQUFnQmxCLGFBQWFtQixRQUFRO1FBQzNDLElBQUlELGVBQWU7WUFDakJqQixTQUFTbUIsWUFBWSxDQUFDRjtRQUN4QjtJQUNBLEVBQUU7SUFDRiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxJQUFJO0lBQ047SUFFQXBCLGdEQUFTQSxDQUFDO1FBQ1IscUJBQXFCO1FBQ3JCRyxTQUFTTCwwRkFBcUJBLENBQUNPO0lBQ2pDLEdBQUc7UUFBQ0E7S0FBSTtJQUVSRyxRQUFRQyxHQUFHLENBQUNKO0lBRVoscUJBQU8sOERBQUNULHVFQUFhQTtRQUFDMkIsT0FBTTtRQUFhQyxVQUFVcEI7UUFBZXFCLEtBQUs7Ozs7OztBQUN6RTtHQWpFZ0J4Qjs7UUFDR1Asb0RBQVdBO1FBRU5DLG9EQUFXQTs7O0tBSG5CTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2FsbFByb2R1Y3RzL0FsbFByb2R1Y3RzLmpzeD9mMzRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2FsbFByb2R1Y3RzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFByb2R1Y3RzQmxvY2sgfSBmcm9tIFwiLi4vcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrXCI7XG5pbXBvcnQgeyBmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZVwiO1xuaW1wb3J0IHsgZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzIH0gZnJvbSBcIkAvcmVkdXgvbWlkZGxld2FyZXMvZmlsdGVyZWRQcm9kdWN0c1wiO1xuaW1wb3J0IHsgYWRkQ2F0ZWdvcnkgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvZmlsdGVyU2xpY2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQWxsUHJvZHVjdHMoeyBzZWFyY2hQYXJhbXMgfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgZmlsdGVyZWRQcm9kcyA9IHVzZVNlbGVjdG9yKGZpbHRlcmVkUHJvZHVjdHNTZWxlY3Rvcik7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1zKS50b1N0cmluZygpO1xuICBjb25zb2xlLmxvZyhzZWFyY2hQYXJhbXMpO1xuICAvLyBjb25zdCBmaWx0ZXJMaW5rQ29uc3RydWN0b3IgPSAoKSA9PiB7XG4gIC8vICAgLy8gY2F0ZWdvcmllcztcbiAgLy8gICBjb25zdCBjYXRlZ29yeUZpbHRlciA9XG4gIC8vICAgICBzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID4gMFxuICAvLyAgICAgICA/IGBjYXRlZ29yaWVzPSR7c2VsZWN0ZWRDYXRlZ29yaWVzLmpvaW4oXCIsXCIpfWBcbiAgLy8gICAgICAgOiBcIlwiO1xuICAvLyAgIC8vIHByaWNlXG4gIC8vICAgbGV0IHByaWNlRmlsdGVyID0gXCJcIjtcbiAgLy8gICBpZiAobWluUHJpY2UgIT09IG51bGwpIHByaWNlRmlsdGVyICs9IGAmbWluUHJpY2U9JHttaW5QcmljZX1gO1xuICAvLyAgIGlmIChtYXhQcmljZSAhPT0gbnVsbCkgcHJpY2VGaWx0ZXIgKz0gYCZtYXhQcmljZT0ke21heFByaWNlfWA7XG4gIC8vICAgLy8gc29ydFxuICAvLyAgIGxldCBzb3J0T3JkZXI7XG4gIC8vICAgaWYgKHNvcnQgPT09IFwiY3VycmVudFByaWNlXCIpIHtcbiAgLy8gICAgIHNvcnRPcmRlciA9IFwiJnNvcnQ9Y3VycmVudFByaWNlXCI7XG4gIC8vICAgfSBlbHNlIGlmIChzb3J0ID09PSBcIi1jdXJyZW50UHJpY2VcIikge1xuICAvLyAgICAgc29ydE9yZGVyID0gXCImc29ydD0tY3VycmVudFByaWNlXCI7XG4gIC8vICAgfSBlbHNlIHNvcnRPcmRlciA9IFwiXCI7XG4gIC8vICAgLy8gZnVsbCBsaW5rXG4gIC8vICAgY29uc3QgZnVsbEZpbHRlclVSTCA9IGNhdGVnb3J5RmlsdGVyICsgcHJpY2VGaWx0ZXIgKyBzb3J0T3JkZXI7XG4gIC8vICAgaWYgKGZ1bGxGaWx0ZXJVUkwuc2l6ZSAhPT0gMCkge1xuICAvLyAgICAgc2V0U2VhcmNoUGFyYW1zKGZ1bGxGaWx0ZXJVUkwpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBzZXRTZWFyY2hQYXJhbXMoe30pO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICBjb25zdCBzZXRGaWx0ZXJzQnlVcmwgPSAoKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvaWVzSW5VcmwgPSBzZWFyY2hQYXJhbXMuY2F0ZWdvcmllcztcbiAgICBpZiAoY2F0ZWdvaWVzSW5VcmwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFyckZyb21GaWx0ZXJzID0gY2F0ZWdvaWVzSW5Vcmwuc3BsaXQoXCIsXCIpO1xuICAgICAgYXJyRnJvbUZpbHRlcnMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goYWRkQ2F0ZWdvcnkoY2F0ZWdvcnkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL1xuICAgIGNvbnN0IG1pblByaWNlSW5VcmwgPSBzZWFyY2hQYXJhbXMubWluUHJpY2U7XG4gICAgaWYgKG1pblByaWNlSW5VcmwpIHtcbiAgICAgIGRpc3BhdGNoKHNldE1pblByaWNlKCttaW5QcmljZUluVXJsKSk7XG4gICAgfVxuICAgIC8vXG4gICAgY29uc3QgbWF4UHJpY2VJblVybCA9IHNlYXJjaFBhcmFtcy5tYXhQcmljZTtcbiAgICBpZiAobWF4UHJpY2VJblVybCkge1xuICAgICAgZGlzcGF0Y2goc2V0TWF4UHJpY2UoK21heFByaWNlSW5VcmwpKTtcbiAgICB9XG4gICAgLy9cbiAgICAvLyBjb25zdCBzb3J0SW5VcmwgPSBzZWFyY2hQYXJhbXMuZ2V0KFwic29ydFwiKTtcbiAgICAvLyBpZiAoc29ydEluVXJsKSB7XG4gICAgLy8gICBkaXNwYXRjaChzb3J0Qnkoc29ydEluVXJsKSk7XG4gICAgLy8gfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gc2V0RmlsdGVyc0J5VXJsKCk7XG4gICAgZGlzcGF0Y2goZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzKHVybCkpO1xuICB9LCBbdXJsXSk7XG5cbiAgY29uc29sZS5sb2codXJsKTtcblxuICByZXR1cm4gPFByb2R1Y3RzQmxvY2sgdGl0bGU9XCLQo9GB0ZYg0LLQuNGA0L7QsdC4XCIgcHJvZHVjdHM9e2ZpbHRlcmVkUHJvZHN9IG51bT17NH0gLz47XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlByb2R1Y3RzQmxvY2siLCJmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IiLCJmZXRjaEZpbHRlcmVkUHJvZHVjdHMiLCJhZGRDYXRlZ29yeSIsInVzZUVmZmVjdCIsIkFsbFByb2R1Y3RzIiwic2VhcmNoUGFyYW1zIiwiZGlzcGF0Y2giLCJmaWx0ZXJlZFByb2RzIiwidXJsIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwic2V0RmlsdGVyc0J5VXJsIiwiY2F0ZWdvaWVzSW5VcmwiLCJjYXRlZ29yaWVzIiwiYXJyRnJvbUZpbHRlcnMiLCJzcGxpdCIsImZvckVhY2giLCJjYXRlZ29yeSIsIm1pblByaWNlSW5VcmwiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwibWF4UHJpY2VJblVybCIsIm1heFByaWNlIiwic2V0TWF4UHJpY2UiLCJ0aXRsZSIsInByb2R1Y3RzIiwibnVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/allProducts/AllProducts.jsx\n"));

/***/ })

});