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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllProducts: function() { return /* binding */ AllProducts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../productsBlock/ProductsBlock */ \"(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ AllProducts auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AllProducts() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    // const router = useRouter();\n    // const searchParams = useSearchParams();\n    const selectedCategories = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.categoriesSelector);\n    const minPrice = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.selectedMinPriceSelector);\n    const maxPrice = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.selectedMaxPriceSelector);\n    // const filterLinkConstructor = () => {\n    //   // categories;\n    //   const categoryFilter =\n    //     selectedCategories.length > 0\n    //       ? `categories=${selectedCategories.join(\"%2C\")}`\n    //       : \"\";\n    //   // price\n    //   let priceFilter = \"\";\n    //   if (minPrice !== null) priceFilter += `&minPrice=${minPrice}`;\n    //   if (maxPrice !== null) priceFilter += `&maxPrice=${maxPrice}`;\n    //   // full link\n    //   const fullFilterURL = categoryFilter + priceFilter;\n    //   console.log(fullFilterURL);\n    //   if (fullFilterURL.size !== 0) {\n    //     router.push(\"products?\" + fullFilterURL);\n    //     // dispatch(fetchFilteredProducts(fullFilterURL));\n    //     // setSearchParams(fullFilterURL);\n    //   } else {\n    //     // dispatch(fetchFilteredProducts({}));\n    //     // setSearchParams({});\n    //   }\n    // };\n    // const setFiltersByUrl = () => {\n    //   const params = new URLSearchParams(searchParams);\n    //   console.log(params);\n    //   const categoiesInUrl = searchParams.categories;\n    //   console.log(categoiesInUrl);\n    //   // if (categoiesInUrl !== null) {\n    //   //   const arrFromFilters = categoiesInUrl?.split(\",\");\n    //   //   arrFromFilters?.forEach((category) => {\n    //   //     dispatch(addCategory(category));\n    //   //   });\n    //   // }\n    //   //\n    //   const minPriceInUrl = searchParams.minPrice;\n    //   console.log(minPriceInUrl);\n    //   // if (minPriceInUrl) {\n    //   //   dispatch(setMinPrice(minPriceInUrl));\n    //   // }\n    //   //\n    //   const maxPriceInUrl = searchParams.maxPrice;\n    //   console.log(maxPriceInUrl);\n    //   // if (maxPriceInUrl) {\n    //   //   dispatch(setMaxPrice(maxPriceInUrl));\n    //   // }\n    // };\n    // useEffect(() => {\n    //   setFiltersByUrl();\n    //   filterLinkConstructor();\n    // }, [minPrice, maxPrice, selectedCategories]);\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        const updatedQuery = {\n            ...searchQuery,\n            [name]: value\n        };\n        setSearchQuery(updatedQuery);\n        updateSearchQuery(updatedQuery);\n    };\n    const updateSearchQuery = (updatedQuery)=>{\n        const params = new URLSearchParams(searchParams);\n        Object.keys(updatedQuery).forEach((key)=>{\n            if (updatedQuery[key]) {\n                params.set(key, updatedQuery[key]);\n            } else {\n                params.delete(key);\n            }\n        });\n        params.set(\"page\", \"1\");\n        const queryString = params.toString();\n        const updatedPath = queryString ? \"\".concat(pathname, \"?\").concat(queryString) : pathname;\n        router.push(updatedPath);\n    };\n    return(// <ProductsBlock title=\"Усі вироби\" searchParams={searchParams} num={4} />\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        className: \"form-control\",\n        placeholder: \"Name of the user\",\n        id: \"name\",\n        name: \"name\",\n        value: searchQuery.name,\n        onChange: handleInputChange\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/allProducts/AllProducts.jsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, this));\n}\n_s(AllProducts, \"t1dHKPQ2iKmUe6iwGp6jHVfnsQo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = AllProducts;\nvar _c;\n$RefreshReg$(_c, \"AllProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvYWxsUHJvZHVjdHMvQWxsUHJvZHVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRStDO0FBQ1E7QUFDUTtBQVEzQjtBQUNGO0FBQ3dDO0FBRW5FLFNBQVNjOztJQUNkLE1BQU1DLFdBQVdkLHdEQUFXQTtJQUM1Qiw4QkFBOEI7SUFDOUIsMENBQTBDO0lBRTFDLE1BQU1lLHFCQUFxQmQsd0RBQVdBLENBQUNLLHlFQUFrQkE7SUFDekQsTUFBTVUsV0FBV2Ysd0RBQVdBLENBQUNNLCtFQUF3QkE7SUFDckQsTUFBTVUsV0FBV2hCLHdEQUFXQSxDQUFDTywrRUFBd0JBO0lBRXJELHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyx5REFBeUQ7SUFDekQsY0FBYztJQUNkLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsbUVBQW1FO0lBQ25FLG1FQUFtRTtJQUNuRSxpQkFBaUI7SUFDakIsd0RBQXdEO0lBQ3hELGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsZ0RBQWdEO0lBQ2hELHlEQUF5RDtJQUN6RCx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLDhDQUE4QztJQUM5Qyw4QkFBOEI7SUFDOUIsTUFBTTtJQUNOLEtBQUs7SUFFTCxrQ0FBa0M7SUFDbEMsc0RBQXNEO0lBQ3RELHlCQUF5QjtJQUN6QixvREFBb0Q7SUFDcEQsaUNBQWlDO0lBQ2pDLHNDQUFzQztJQUN0Qyw0REFBNEQ7SUFDNUQsaURBQWlEO0lBQ2pELDRDQUE0QztJQUM1QyxhQUFhO0lBQ2IsU0FBUztJQUNULE9BQU87SUFDUCxpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QiwrQ0FBK0M7SUFDL0MsU0FBUztJQUNULE9BQU87SUFDUCxpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QiwrQ0FBK0M7SUFDL0MsU0FBUztJQUNULEtBQUs7SUFFTCxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixnREFBZ0Q7SUFFaEQsTUFBTVUsZUFBZVAsZ0VBQWVBO0lBQ3BDLE1BQU1RLFdBQVdQLDREQUFXQTtJQUM1QixNQUFNUSxTQUFTViwwREFBU0E7SUFFeEIsTUFBTVcsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsTUFBTUcsTUFBTTtRQUNwQyxNQUFNQyxlQUFlO1lBQUUsR0FBR0MsV0FBVztZQUFFLENBQUNKLEtBQUssRUFBRUM7UUFBTTtRQUNyREksZUFBZUY7UUFDZkcsa0JBQWtCSDtJQUNwQjtJQUVBLE1BQU1HLG9CQUFvQixDQUFDSDtRQUN6QixNQUFNSSxTQUFTLElBQUlDLGdCQUFnQmI7UUFDbkNjLE9BQU9DLElBQUksQ0FBQ1AsY0FBY1EsT0FBTyxDQUFDLENBQUNDO1lBQ2pDLElBQUlULFlBQVksQ0FBQ1MsSUFBSSxFQUFFO2dCQUNyQkwsT0FBT00sR0FBRyxDQUFDRCxLQUFLVCxZQUFZLENBQUNTLElBQUk7WUFDbkMsT0FBTztnQkFDTEwsT0FBT08sTUFBTSxDQUFDRjtZQUNoQjtRQUNGO1FBQ0FMLE9BQU9NLEdBQUcsQ0FBQyxRQUFRO1FBQ25CLE1BQU1FLGNBQWNSLE9BQU9TLFFBQVE7UUFDbkMsTUFBTUMsY0FBY0YsY0FBYyxHQUFlQSxPQUFabkIsVUFBUyxLQUFlLE9BQVptQixlQUFnQm5CO1FBQ2pFQyxPQUFPcUIsSUFBSSxDQUFDRDtJQUNkO0lBRUEsT0FDRSwyRUFBMkU7a0JBQzNFLDhEQUFDRTtRQUNDQyxNQUFLO1FBQ0xDLFdBQVU7UUFDVkMsYUFBWTtRQUNaQyxJQUFHO1FBQ0h2QixNQUFLO1FBQ0xDLE9BQU9HLFlBQVlKLElBQUk7UUFDdkJ3QixVQUFVMUI7Ozs7OztBQUdoQjtHQXBHZ0JSOztRQUNHYixvREFBV0E7UUFJREMsb0RBQVdBO1FBQ3JCQSxvREFBV0E7UUFDWEEsb0RBQVdBO1FBdURQVSw0REFBZUE7UUFDbkJDLHdEQUFXQTtRQUNiRixzREFBU0E7OztLQWhFVkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9hbGxQcm9kdWN0cy9BbGxQcm9kdWN0cy5qc3g/ZjM0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hbGxQcm9kdWN0cy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBQcm9kdWN0c0Jsb2NrIH0gZnJvbSBcIi4uL3Byb2R1Y3RzQmxvY2svUHJvZHVjdHNCbG9ja1wiO1xuaW1wb3J0IHtcbiAgYWRkQ2F0ZWdvcnksXG4gIHNldE1pblByaWNlLFxuICBzZXRNYXhQcmljZSxcbiAgY2F0ZWdvcmllc1NlbGVjdG9yLFxuICBzZWxlY3RlZE1pblByaWNlU2VsZWN0b3IsXG4gIHNlbGVjdGVkTWF4UHJpY2VTZWxlY3Rvcixcbn0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL2ZpbHRlclNsaWNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zLCB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFsbFByb2R1Y3RzKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcblxuICBjb25zdCBzZWxlY3RlZENhdGVnb3JpZXMgPSB1c2VTZWxlY3RvcihjYXRlZ29yaWVzU2VsZWN0b3IpO1xuICBjb25zdCBtaW5QcmljZSA9IHVzZVNlbGVjdG9yKHNlbGVjdGVkTWluUHJpY2VTZWxlY3Rvcik7XG4gIGNvbnN0IG1heFByaWNlID0gdXNlU2VsZWN0b3Ioc2VsZWN0ZWRNYXhQcmljZVNlbGVjdG9yKTtcblxuICAvLyBjb25zdCBmaWx0ZXJMaW5rQ29uc3RydWN0b3IgPSAoKSA9PiB7XG4gIC8vICAgLy8gY2F0ZWdvcmllcztcbiAgLy8gICBjb25zdCBjYXRlZ29yeUZpbHRlciA9XG4gIC8vICAgICBzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID4gMFxuICAvLyAgICAgICA/IGBjYXRlZ29yaWVzPSR7c2VsZWN0ZWRDYXRlZ29yaWVzLmpvaW4oXCIlMkNcIil9YFxuICAvLyAgICAgICA6IFwiXCI7XG4gIC8vICAgLy8gcHJpY2VcbiAgLy8gICBsZXQgcHJpY2VGaWx0ZXIgPSBcIlwiO1xuICAvLyAgIGlmIChtaW5QcmljZSAhPT0gbnVsbCkgcHJpY2VGaWx0ZXIgKz0gYCZtaW5QcmljZT0ke21pblByaWNlfWA7XG4gIC8vICAgaWYgKG1heFByaWNlICE9PSBudWxsKSBwcmljZUZpbHRlciArPSBgJm1heFByaWNlPSR7bWF4UHJpY2V9YDtcbiAgLy8gICAvLyBmdWxsIGxpbmtcbiAgLy8gICBjb25zdCBmdWxsRmlsdGVyVVJMID0gY2F0ZWdvcnlGaWx0ZXIgKyBwcmljZUZpbHRlcjtcbiAgLy8gICBjb25zb2xlLmxvZyhmdWxsRmlsdGVyVVJMKTtcbiAgLy8gICBpZiAoZnVsbEZpbHRlclVSTC5zaXplICE9PSAwKSB7XG4gIC8vICAgICByb3V0ZXIucHVzaChcInByb2R1Y3RzP1wiICsgZnVsbEZpbHRlclVSTCk7XG4gIC8vICAgICAvLyBkaXNwYXRjaChmZXRjaEZpbHRlcmVkUHJvZHVjdHMoZnVsbEZpbHRlclVSTCkpO1xuICAvLyAgICAgLy8gc2V0U2VhcmNoUGFyYW1zKGZ1bGxGaWx0ZXJVUkwpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICAvLyBkaXNwYXRjaChmZXRjaEZpbHRlcmVkUHJvZHVjdHMoe30pKTtcbiAgLy8gICAgIC8vIHNldFNlYXJjaFBhcmFtcyh7fSk7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIC8vIGNvbnN0IHNldEZpbHRlcnNCeVVybCA9ICgpID0+IHtcbiAgLy8gICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcyk7XG4gIC8vICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgLy8gICBjb25zdCBjYXRlZ29pZXNJblVybCA9IHNlYXJjaFBhcmFtcy5jYXRlZ29yaWVzO1xuICAvLyAgIGNvbnNvbGUubG9nKGNhdGVnb2llc0luVXJsKTtcbiAgLy8gICAvLyBpZiAoY2F0ZWdvaWVzSW5VcmwgIT09IG51bGwpIHtcbiAgLy8gICAvLyAgIGNvbnN0IGFyckZyb21GaWx0ZXJzID0gY2F0ZWdvaWVzSW5Vcmw/LnNwbGl0KFwiLFwiKTtcbiAgLy8gICAvLyAgIGFyckZyb21GaWx0ZXJzPy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAvLyAgIC8vICAgICBkaXNwYXRjaChhZGRDYXRlZ29yeShjYXRlZ29yeSkpO1xuICAvLyAgIC8vICAgfSk7XG4gIC8vICAgLy8gfVxuICAvLyAgIC8vXG4gIC8vICAgY29uc3QgbWluUHJpY2VJblVybCA9IHNlYXJjaFBhcmFtcy5taW5QcmljZTtcbiAgLy8gICBjb25zb2xlLmxvZyhtaW5QcmljZUluVXJsKTtcbiAgLy8gICAvLyBpZiAobWluUHJpY2VJblVybCkge1xuICAvLyAgIC8vICAgZGlzcGF0Y2goc2V0TWluUHJpY2UobWluUHJpY2VJblVybCkpO1xuICAvLyAgIC8vIH1cbiAgLy8gICAvL1xuICAvLyAgIGNvbnN0IG1heFByaWNlSW5VcmwgPSBzZWFyY2hQYXJhbXMubWF4UHJpY2U7XG4gIC8vICAgY29uc29sZS5sb2cobWF4UHJpY2VJblVybCk7XG4gIC8vICAgLy8gaWYgKG1heFByaWNlSW5VcmwpIHtcbiAgLy8gICAvLyAgIGRpc3BhdGNoKHNldE1heFByaWNlKG1heFByaWNlSW5VcmwpKTtcbiAgLy8gICAvLyB9XG4gIC8vIH07XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRGaWx0ZXJzQnlVcmwoKTtcbiAgLy8gICBmaWx0ZXJMaW5rQ29uc3RydWN0b3IoKTtcbiAgLy8gfSwgW21pblByaWNlLCBtYXhQcmljZSwgc2VsZWN0ZWRDYXRlZ29yaWVzXSk7XG5cbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdXBkYXRlZFF1ZXJ5ID0geyAuLi5zZWFyY2hRdWVyeSwgW25hbWVdOiB2YWx1ZSB9O1xuICAgIHNldFNlYXJjaFF1ZXJ5KHVwZGF0ZWRRdWVyeSk7XG4gICAgdXBkYXRlU2VhcmNoUXVlcnkodXBkYXRlZFF1ZXJ5KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTZWFyY2hRdWVyeSA9ICh1cGRhdGVkUXVlcnkpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcyk7XG4gICAgT2JqZWN0LmtleXModXBkYXRlZFF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICh1cGRhdGVkUXVlcnlba2V5XSkge1xuICAgICAgICBwYXJhbXMuc2V0KGtleSwgdXBkYXRlZFF1ZXJ5W2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBhcmFtcy5zZXQoXCJwYWdlXCIsIFwiMVwiKTtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHBhcmFtcy50b1N0cmluZygpO1xuICAgIGNvbnN0IHVwZGF0ZWRQYXRoID0gcXVlcnlTdHJpbmcgPyBgJHtwYXRobmFtZX0/JHtxdWVyeVN0cmluZ31gIDogcGF0aG5hbWU7XG4gICAgcm91dGVyLnB1c2godXBkYXRlZFBhdGgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgLy8gPFByb2R1Y3RzQmxvY2sgdGl0bGU9XCLQo9GB0ZYg0LLQuNGA0L7QsdC4XCIgc2VhcmNoUGFyYW1zPXtzZWFyY2hQYXJhbXN9IG51bT17NH0gLz5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIk5hbWUgb2YgdGhlIHVzZXJcIlxuICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeS5uYW1lfVxuICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgIC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlByb2R1Y3RzQmxvY2siLCJhZGRDYXRlZ29yeSIsInNldE1pblByaWNlIiwic2V0TWF4UHJpY2UiLCJjYXRlZ29yaWVzU2VsZWN0b3IiLCJzZWxlY3RlZE1pblByaWNlU2VsZWN0b3IiLCJzZWxlY3RlZE1heFByaWNlU2VsZWN0b3IiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VQYXRobmFtZSIsIkFsbFByb2R1Y3RzIiwiZGlzcGF0Y2giLCJzZWxlY3RlZENhdGVnb3JpZXMiLCJtaW5QcmljZSIsIm1heFByaWNlIiwic2VhcmNoUGFyYW1zIiwicGF0aG5hbWUiLCJyb3V0ZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwidXBkYXRlZFF1ZXJ5Iiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInVwZGF0ZVNlYXJjaFF1ZXJ5IiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzZXQiLCJkZWxldGUiLCJxdWVyeVN0cmluZyIsInRvU3RyaW5nIiwidXBkYXRlZFBhdGgiLCJwdXNoIiwiaW5wdXQiLCJ0eXBlIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJpZCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/allProducts/AllProducts.jsx\n"));

/***/ })

});