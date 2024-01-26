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

/***/ "(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx":
/*!****************************************************!*\
  !*** ./src/app/ui/productsBlock/ProductsBlock.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductsBlock: function() { return /* binding */ ProductsBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productsBlock.module.scss */ \"(app-pages-browser)/./src/app/ui/productsBlock/productsBlock.module.scss\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var _redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/middlewares/filteredProducts */ \"(app-pages-browser)/./src/redux/middlewares/filteredProducts.js\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* __next_internal_client_entry_do_not_use__ ProductsBlock auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ProductsBlock(param) {\n    let { title, searchParams, num } = param;\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(num);\n    const [sortOptions, setSortOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [optionType, setOptionType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"За замовчуванням\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__.filteredProductsSelector);\n    const url = new URLSearchParams(searchParams).toString();\n    const handleLoadMore = ()=>{\n        setCount((prevState)=>prevState + num);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__.fetchFilteredProducts)(url));\n    }, [\n        url\n    ]);\n    const handleSort = (e)=>{\n        console.log(e.target);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__title),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__list),\n                children: [\n                    title === \"Усі вироби\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__button),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__filter),\n                                    onClick: ()=>{\n                                        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.setFilter)());\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"/imgs/filter.png\",\n                                            width: 20,\n                                            height: 20,\n                                            alt: \"to-fav\",\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__filter--text\"]),\n                                            children: \"Фільтри\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__button),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__sort-type\"]),\n                                        onClick: ()=>{\n                                            setSortOptions(!sortOptions);\n                                        },\n                                        children: optionType\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this),\n                                    sortOptions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__sort-options\"]),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"За замовчуванням\",\n                                                children: \"За замовчуванням\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"Ціна від найменшої\",\n                                                children: \"Ціна від найменшої\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"Ціна від найбільшої\",\n                                                children: \"Ціна від найбільшої\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"По даті додавання\",\n                                                children: \"По даті додавання\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    products && Array.isArray(products) && products.length > 0 && products.slice(0, count).map((param)=>{\n                        let { _id, ...productProps } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                            ...productProps\n                        }, _id, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 15\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            count < products.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__show-more\"]),\n                onClick: handleLoadMore,\n                children: \"Показати ще\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductsBlock, \"j8MGyVur45g2CgJLqywgxwoLqIY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = ProductsBlock;\nvar _c;\n$RefreshReg$(_c, \"ProductsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDUjtBQUNhO0FBQ2xCO0FBQ3dCO0FBQ0E7QUFDc0I7QUFDTDtBQUVqRSxTQUFTVSxjQUFjLEtBQTRCO1FBQTVCLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxHQUFHLEVBQUUsR0FBNUI7O0lBQzVCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQ1k7SUFDbkMsTUFBTSxDQUFDRyxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNpQixZQUFZQyxjQUFjLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNbUIsV0FBV2Ysd0RBQVdBO0lBQzVCLE1BQU1nQixXQUFXZix3REFBV0EsQ0FBQ0csaUZBQXdCQTtJQUNyRCxNQUFNYSxNQUFNLElBQUlDLGdCQUFnQlgsY0FBY1ksUUFBUTtJQUV0RCxNQUFNQyxpQkFBaUI7UUFDckJWLFNBQVMsQ0FBQ1csWUFBY0EsWUFBWWI7SUFDdEM7SUFFQWIsZ0RBQVNBLENBQUM7UUFDUm9CLFNBQVNaLDBGQUFxQkEsQ0FBQ2M7SUFDakMsR0FBRztRQUFDQTtLQUFJO0lBRVIsTUFBTUssYUFBYSxDQUFDQztRQUNsQkMsUUFBUUMsR0FBRyxDQUFDRixFQUFFRyxNQUFNO0lBQ3RCO0lBRUEscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVc5Qix5RUFBZTs7MEJBQ2pDLDhEQUFDK0I7Z0JBQUdELFdBQVc5QixnRkFBc0I7MEJBQUdROzs7Ozs7MEJBQ3hDLDhEQUFDd0I7Z0JBQUdGLFdBQVc5QiwrRUFBcUI7O29CQUNqQ1EsVUFBVSw4QkFDVDs7MENBQ0UsOERBQUN5QjtnQ0FBR0gsV0FBVzlCLGlGQUF1QjswQ0FDcEMsNEVBQUNrQztvQ0FDQ0osV0FBVzlCLGlGQUF1QjtvQ0FDbENtQyxTQUFTO3dDQUNQbEIsU0FBU2Isb0VBQVNBO29DQUNwQjs7c0RBRUEsOERBQUNILG1EQUFLQTs0Q0FDSm1DLEtBQUk7NENBQ0pDLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JDLEtBQUk7NENBQ0pDLFFBQVE7Ozs7OztzREFFViw4REFBQ0M7NENBQUtYLFdBQVc5QiwwRkFBNkI7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdwRCw4REFBQ2lDO2dDQUFHSCxXQUFXOUIsaUZBQXVCOztrREFDcEMsOERBQUN5Qzt3Q0FDQ1gsV0FBVzlCLHVGQUEwQjt3Q0FDckNtQyxTQUFTOzRDQUNQckIsZUFBZSxDQUFDRDt3Q0FDbEI7a0RBRUNFOzs7Ozs7b0NBRUZGLDZCQUNDLDhEQUFDbUI7d0NBQUdGLFdBQVc5QiwwRkFBNkI7OzBEQUMxQyw4REFBQ2lDO2dEQUFHUyxvQkFBaUI7MERBQW1COzs7Ozs7MERBQ3hDLDhEQUFDVDtnREFBR1Msb0JBQWlCOzBEQUFxQjs7Ozs7OzBEQUcxQyw4REFBQ1Q7Z0RBQUdTLG9CQUFpQjswREFBc0I7Ozs7OzswREFHM0MsOERBQUNUO2dEQUFHUyxvQkFBaUI7MERBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFRbER4QixZQUNDeUIsTUFBTUMsT0FBTyxDQUFDMUIsYUFDZEEsU0FBUzJCLE1BQU0sR0FBRyxLQUNsQjNCLFNBQ0c0QixLQUFLLENBQUMsR0FBR25DLE9BQ1RvQyxHQUFHLENBQUM7NEJBQUMsRUFBRUMsR0FBRyxFQUFFLEdBQUdDLGNBQWM7NkNBQzVCLDhEQUFDbEQsMkNBQUlBOzRCQUFZLEdBQUdrRCxZQUFZOzJCQUFyQkQ7Ozs7Ozs7Ozs7OztZQUdsQnJDLFFBQVFPLFNBQVMyQixNQUFNLGtCQUN0Qiw4REFBQ1g7Z0JBQU9KLFdBQVc5Qix1RkFBMEI7Z0JBQUVtQyxTQUFTYjswQkFBZ0I7Ozs7Ozs7Ozs7OztBQU1oRjtHQXRGZ0JmOztRQUtHTCxvREFBV0E7UUFDWEMsb0RBQVdBOzs7S0FOZEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9wcm9kdWN0c0Jsb2NrL1Byb2R1Y3RzQmxvY2suanN4PzQ3MDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZC/QoWFyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wcm9kdWN0c0Jsb2NrLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0RmlsdGVyIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL2ZpbHRlclNsaWNlXCI7XG5pbXBvcnQgeyBmZXRjaEZpbHRlcmVkUHJvZHVjdHMgfSBmcm9tIFwiQC9yZWR1eC9taWRkbGV3YXJlcy9maWx0ZXJlZFByb2R1Y3RzXCI7XG5pbXBvcnQgeyBmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvZHVjdHNCbG9jayh7IHRpdGxlLCBzZWFyY2hQYXJhbXMsIG51bSB9KSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUobnVtKTtcbiAgY29uc3QgW3NvcnRPcHRpb25zLCBzZXRTb3J0T3B0aW9uc10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW29wdGlvblR5cGUsIHNldE9wdGlvblR5cGVdID0gdXNlU3RhdGUoXCLQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XCIpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3RvcihmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IpO1xuICBjb25zdCB1cmwgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcykudG9TdHJpbmcoKTtcblxuICBjb25zdCBoYW5kbGVMb2FkTW9yZSA9ICgpID0+IHtcbiAgICBzZXRDb3VudCgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyBudW0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzKHVybCkpO1xuICB9LCBbdXJsXSk7XG5cbiAgY29uc3QgaGFuZGxlU29ydCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrYF19PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fdGl0bGVgXX0+e3RpdGxlfTwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19saXN0YF19PlxuICAgICAgICB7dGl0bGUgPT09IFwi0KPRgdGWINCy0LjRgNC+0LHQuFwiICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fYnV0dG9uYF19PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19maWx0ZXJgXX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRGaWx0ZXIoKSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZ3MvZmlsdGVyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAgICAgYWx0PVwidG8tZmF2XCJcbiAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX2ZpbHRlci0tdGV4dGBdfT7QpNGW0LvRjNGC0YDQuDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fYnV0dG9uYF19PlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fc29ydC10eXBlYF19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0U29ydE9wdGlvbnMoIXNvcnRPcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge29wdGlvblR5cGV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge3NvcnRPcHRpb25zICYmIChcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19zb3J0LW9wdGlvbnNgXX0+XG4gICAgICAgICAgICAgICAgICA8bGkgZGF0YS1vcHRpb24tdHlwZT1cItCX0LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcIj7Ql9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLW9wdGlvbi10eXBlPVwi0KbRltC90LAg0LLRltC0INC90LDQudC80LXQvdGI0L7Rl1wiPlxuICAgICAgICAgICAgICAgICAgICDQptGW0L3QsCDQstGW0LQg0L3QsNC50LzQtdC90YjQvtGXXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtb3B0aW9uLXR5cGU9XCLQptGW0L3QsCDQstGW0LQg0L3QsNC50LHRltC70YzRiNC+0ZdcIj5cbiAgICAgICAgICAgICAgICAgICAg0KbRltC90LAg0LLRltC0INC90LDQudCx0ZbQu9GM0YjQvtGXXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtb3B0aW9uLXR5cGU9XCLQn9C+INC00LDRgtGWINC00L7QtNCw0LLQsNC90L3Rj1wiPlxuICAgICAgICAgICAgICAgICAgICDQn9C+INC00LDRgtGWINC00L7QtNCw0LLQsNC90L3Rj1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb2R1Y3RzICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9kdWN0cykgJiZcbiAgICAgICAgICBwcm9kdWN0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgcHJvZHVjdHNcbiAgICAgICAgICAgIC5zbGljZSgwLCBjb3VudClcbiAgICAgICAgICAgIC5tYXAoKHsgX2lkLCAuLi5wcm9kdWN0UHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e19pZH0gey4uLnByb2R1Y3RQcm9wc30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIHtjb3VudCA8IHByb2R1Y3RzLmxlbmd0aCAmJiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19zaG93LW1vcmVgXX0gb25DbGljaz17aGFuZGxlTG9hZE1vcmV9PlxuICAgICAgICAgINCf0L7QutCw0LfQsNGC0Lgg0YnQtVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsInN0eWxlcyIsIkltYWdlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldEZpbHRlciIsImZldGNoRmlsdGVyZWRQcm9kdWN0cyIsImZpbHRlcmVkUHJvZHVjdHNTZWxlY3RvciIsIlByb2R1Y3RzQmxvY2siLCJ0aXRsZSIsInNlYXJjaFBhcmFtcyIsIm51bSIsImNvdW50Iiwic2V0Q291bnQiLCJzb3J0T3B0aW9ucyIsInNldFNvcnRPcHRpb25zIiwib3B0aW9uVHlwZSIsInNldE9wdGlvblR5cGUiLCJkaXNwYXRjaCIsInByb2R1Y3RzIiwidXJsIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJoYW5kbGVMb2FkTW9yZSIsInByZXZTdGF0ZSIsImhhbmRsZVNvcnQiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMiIsInVsIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwcmlvcml0eSIsInNwYW4iLCJkYXRhLW9wdGlvbi10eXBlIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJfaWQiLCJwcm9kdWN0UHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\n"));

/***/ })

});