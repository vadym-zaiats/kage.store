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

/***/ "(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx":
/*!****************************************************!*\
  !*** ./src/app/ui/productsBlock/ProductsBlock.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductsBlock: function() { return /* binding */ ProductsBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productsBlock.module.scss */ \"(app-pages-browser)/./src/app/ui/productsBlock/productsBlock.module.scss\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var _redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/middlewares/filteredProducts */ \"(app-pages-browser)/./src/redux/middlewares/filteredProducts.js\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* __next_internal_client_entry_do_not_use__ ProductsBlock auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ProductsBlock(param) {\n    let { title, searchParams, num } = param;\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(num);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__.filteredProductsSelector);\n    const url = new URLSearchParams(searchParams).toString();\n    const handleLoadMore = ()=>{\n        setCount((prevState)=>prevState + num);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__.fetchFilteredProducts)(url));\n    }, [\n        url\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__title),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__list),\n                children: [\n                    title === \"Усі вироби\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__button),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__filter),\n                                    onClick: ()=>{\n                                        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.setFilter)());\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"/imgs/filter.png\",\n                                            width: 20,\n                                            height: 20,\n                                            alt: \"to-fav\",\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__filter--text\"]),\n                                            children: \"Фільтри\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__button),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__sort),\n                                    id: \"sorting-dropdown\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"default\",\n                                            children: \"За замовчуванням\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"lowest-price\",\n                                            children: \"Від найменшої ціни\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"highest-price\",\n                                            children: \"Від найбільшої ціни\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"date-added\",\n                                            children: \"По даті додавання\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    products && Array.isArray(products) && products.length > 0 && products.slice(0, count).map((param)=>{\n                        let { _id, ...productProps } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                            ...productProps\n                        }, _id, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 15\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            count < products.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__show-more\"]),\n                onClick: handleLoadMore,\n                children: \"Показати ще\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductsBlock, \"qnXeVhCYMlvvGIV3fr9Lo6jZKxo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = ProductsBlock;\nvar _c;\n$RefreshReg$(_c, \"ProductsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDUjtBQUNhO0FBQ2xCO0FBQ3dCO0FBQ0E7QUFDc0I7QUFDTDtBQUVqRSxTQUFTVSxjQUFjLEtBQTRCO1FBQTVCLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxHQUFHLEVBQUUsR0FBNUI7O0lBQzVCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQ1k7SUFDbkMsTUFBTUcsV0FBV1gsd0RBQVdBO0lBQzVCLE1BQU1ZLFdBQVdYLHdEQUFXQSxDQUFDRyxpRkFBd0JBO0lBQ3JELE1BQU1TLE1BQU0sSUFBSUMsZ0JBQWdCUCxjQUFjUSxRQUFRO0lBRXRELE1BQU1DLGlCQUFpQjtRQUNyQk4sU0FBUyxDQUFDTyxZQUFjQSxZQUFZVDtJQUN0QztJQUVBYixnREFBU0EsQ0FBQztRQUNSZ0IsU0FBU1IsMEZBQXFCQSxDQUFDVTtJQUNqQyxHQUFHO1FBQUNBO0tBQUk7SUFFUixxQkFDRSw4REFBQ0s7UUFBUUMsV0FBV3JCLHlFQUFlOzswQkFDakMsOERBQUNzQjtnQkFBR0QsV0FBV3JCLGdGQUFzQjswQkFBR1E7Ozs7OzswQkFDeEMsOERBQUNlO2dCQUFHRixXQUFXckIsK0VBQXFCOztvQkFDakNRLFVBQVUsOEJBQ1Q7OzBDQUNFLDhEQUFDZ0I7Z0NBQUdILFdBQVdyQixpRkFBdUI7MENBQ3BDLDRFQUFDeUI7b0NBQ0NKLFdBQVdyQixpRkFBdUI7b0NBQ2xDMEIsU0FBUzt3Q0FDUGIsU0FBU1Qsb0VBQVNBO29DQUNwQjs7c0RBRUEsOERBQUNILG1EQUFLQTs0Q0FDSjBCLEtBQUk7NENBQ0pDLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JDLEtBQUk7NENBQ0pDLFFBQVE7Ozs7OztzREFFViw4REFBQ0M7NENBQUtYLFdBQVdyQiwwRkFBNkI7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdwRCw4REFBQ3dCO2dDQUFHSCxXQUFXckIsaUZBQXVCOzBDQUNwQyw0RUFBQ2lDO29DQUFPWixXQUFXckIsK0VBQXFCO29DQUFFa0MsSUFBRzs7c0RBQzNDLDhEQUFDQzs0Q0FBT0MsT0FBTTtzREFBVTs7Ozs7O3NEQUN4Qiw4REFBQ0Q7NENBQU9DLE9BQU07c0RBQWU7Ozs7OztzREFDN0IsOERBQUNEOzRDQUFPQyxPQUFNO3NEQUFnQjs7Ozs7O3NEQUM5Qiw4REFBQ0Q7NENBQU9DLE9BQU07c0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBS2xDdEIsWUFDQ3VCLE1BQU1DLE9BQU8sQ0FBQ3hCLGFBQ2RBLFNBQVN5QixNQUFNLEdBQUcsS0FDbEJ6QixTQUNHMEIsS0FBSyxDQUFDLEdBQUc3QixPQUNUOEIsR0FBRyxDQUFDOzRCQUFDLEVBQUVDLEdBQUcsRUFBRSxHQUFHQyxjQUFjOzZDQUM1Qiw4REFBQzVDLDJDQUFJQTs0QkFBWSxHQUFHNEMsWUFBWTsyQkFBckJEOzs7Ozs7Ozs7Ozs7WUFHbEIvQixRQUFRRyxTQUFTeUIsTUFBTSxrQkFDdEIsOERBQUNkO2dCQUFPSixXQUFXckIsdUZBQTBCO2dCQUFFMEIsU0FBU1I7MEJBQWdCOzs7Ozs7Ozs7Ozs7QUFNaEY7R0EvRGdCWDs7UUFFR0wsb0RBQVdBO1FBQ1hDLG9EQUFXQTs7O0tBSGRJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrLmpzeD80NzA1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmQv0KFhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvZHVjdHNCbG9jay5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldEZpbHRlciB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9maWx0ZXJTbGljZVwiO1xuaW1wb3J0IHsgZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzIH0gZnJvbSBcIkAvcmVkdXgvbWlkZGxld2FyZXMvZmlsdGVyZWRQcm9kdWN0c1wiO1xuaW1wb3J0IHsgZmlsdGVyZWRQcm9kdWN0c1NlbGVjdG9yIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3Byb2R1Y3RzU2xpY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2R1Y3RzQmxvY2soeyB0aXRsZSwgc2VhcmNoUGFyYW1zLCBudW0gfSkge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKG51bSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3RvcihmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IpO1xuICBjb25zdCB1cmwgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcykudG9TdHJpbmcoKTtcblxuICBjb25zdCBoYW5kbGVMb2FkTW9yZSA9ICgpID0+IHtcbiAgICBzZXRDb3VudCgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyBudW0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzKHVybCkpO1xuICB9LCBbdXJsXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tgXX0+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX190aXRsZWBdfT57dGl0bGV9PC9oMj5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX2xpc3RgXX0+XG4gICAgICAgIHt0aXRsZSA9PT0gXCLQo9GB0ZYg0LLQuNGA0L7QsdC4XCIgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19idXR0b25gXX0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX2ZpbHRlcmBdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEZpbHRlcigpKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1ncy9maWx0ZXIucG5nXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJ0by1mYXZcIlxuICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fZmlsdGVyLS10ZXh0YF19PtCk0ZbQu9GM0YLRgNC4PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19idXR0b25gXX0+XG4gICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19zb3J0YF19IGlkPVwic29ydGluZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCI+0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dlc3QtcHJpY2VcIj7QktGW0LQg0L3QsNC50LzQtdC90YjQvtGXINGG0ZbQvdC4PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hlc3QtcHJpY2VcIj7QktGW0LQg0L3QsNC50LHRltC70YzRiNC+0Zcg0YbRltC90Lg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGF0ZS1hZGRlZFwiPtCf0L4g0LTQsNGC0ZYg0LTQvtC00LDQstCw0L3QvdGPPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb2R1Y3RzICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9kdWN0cykgJiZcbiAgICAgICAgICBwcm9kdWN0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgcHJvZHVjdHNcbiAgICAgICAgICAgIC5zbGljZSgwLCBjb3VudClcbiAgICAgICAgICAgIC5tYXAoKHsgX2lkLCAuLi5wcm9kdWN0UHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e19pZH0gey4uLnByb2R1Y3RQcm9wc30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIHtjb3VudCA8IHByb2R1Y3RzLmxlbmd0aCAmJiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19zaG93LW1vcmVgXX0gb25DbGljaz17aGFuZGxlTG9hZE1vcmV9PlxuICAgICAgICAgINCf0L7QutCw0LfQsNGC0Lgg0YnQtVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsInN0eWxlcyIsIkltYWdlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldEZpbHRlciIsImZldGNoRmlsdGVyZWRQcm9kdWN0cyIsImZpbHRlcmVkUHJvZHVjdHNTZWxlY3RvciIsIlByb2R1Y3RzQmxvY2siLCJ0aXRsZSIsInNlYXJjaFBhcmFtcyIsIm51bSIsImNvdW50Iiwic2V0Q291bnQiLCJkaXNwYXRjaCIsInByb2R1Y3RzIiwidXJsIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJoYW5kbGVMb2FkTW9yZSIsInByZXZTdGF0ZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMiIsInVsIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwcmlvcml0eSIsInNwYW4iLCJzZWxlY3QiLCJpZCIsIm9wdGlvbiIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJfaWQiLCJwcm9kdWN0UHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\n"));

/***/ })

});