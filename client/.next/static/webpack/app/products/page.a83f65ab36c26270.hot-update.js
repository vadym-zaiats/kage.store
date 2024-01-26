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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductsBlock: function() { return /* binding */ ProductsBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productsBlock.module.scss */ \"(app-pages-browser)/./src/app/ui/productsBlock/productsBlock.module.scss\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var _redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/middlewares/filteredProducts */ \"(app-pages-browser)/./src/redux/middlewares/filteredProducts.js\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* __next_internal_client_entry_do_not_use__ ProductsBlock auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ProductsBlock(param) {\n    let { title, searchParams, num } = param;\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(num);\n    const [sortOptions, setSortOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [optionType, setOptionType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"За замовчуванням\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__.filteredProductsSelector);\n    const url = new URLSearchParams(searchParams).toString();\n    const handleLoadMore = ()=>{\n        setCount((prevState)=>prevState + num);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__.fetchFilteredProducts)(url));\n    }, [\n        url\n    ]);\n    const handleSort = (e)=>{\n        setOptionType({\n            text: e.target.getAttribute(\"data-option-text\"),\n            type: e.target.getAttribute(\"data-option-type\")\n        });\n        setSortOptions(!sortOptions);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__title),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__list),\n                children: [\n                    title === \"Усі вироби\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__button),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__filter),\n                                    onClick: ()=>{\n                                        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.setFilter)());\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"/imgs/filter.png\",\n                                            width: 20,\n                                            height: 20,\n                                            alt: \"to-fav\",\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__filter--text\"]),\n                                            children: \"Фільтри\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__button),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__sort-type\"]),\n                                        onClick: ()=>{\n                                            setSortOptions(!sortOptions);\n                                        },\n                                        children: optionType\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this),\n                                    sortOptions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__sort-options\"]),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"false\",\n                                                \"data-option-text\": \"За замовчуванням\",\n                                                onClick: handleSort,\n                                                children: \"За замовчуванням\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"currentPrice\",\n                                                \"data-option-text\": \"Ціна від найменшої\",\n                                                onClick: handleSort,\n                                                children: \"Ціна від найменшої\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"currentPrice\",\n                                                \"data-option-text\": \"Ціна від найбільшої\",\n                                                onClick: handleSort,\n                                                children: \"Ціна від найбільшої\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"date\",\n                                                \"data-option-text\": \"По даті додавання\",\n                                                onClick: handleSort,\n                                                children: \"По даті додавання\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    products && Array.isArray(products) && products.length > 0 && products.slice(0, count).map((param)=>{\n                        let { _id, ...productProps } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                            ...productProps\n                        }, _id, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 15\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            count < products.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__show-more\"]),\n                onClick: handleLoadMore,\n                children: \"Показати ще\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductsBlock, \"j8MGyVur45g2CgJLqywgxwoLqIY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = ProductsBlock;\nvar _c;\n$RefreshReg$(_c, \"ProductsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDUjtBQUNhO0FBQ2xCO0FBQ3dCO0FBQ0E7QUFDc0I7QUFDTDtBQUVqRSxTQUFTVSxjQUFjLEtBQTRCO1FBQTVCLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxHQUFHLEVBQUUsR0FBNUI7O0lBQzVCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQ1k7SUFDbkMsTUFBTSxDQUFDRyxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNpQixZQUFZQyxjQUFjLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNbUIsV0FBV2Ysd0RBQVdBO0lBQzVCLE1BQU1nQixXQUFXZix3REFBV0EsQ0FBQ0csaUZBQXdCQTtJQUNyRCxNQUFNYSxNQUFNLElBQUlDLGdCQUFnQlgsY0FBY1ksUUFBUTtJQUV0RCxNQUFNQyxpQkFBaUI7UUFDckJWLFNBQVMsQ0FBQ1csWUFBY0EsWUFBWWI7SUFDdEM7SUFFQWIsZ0RBQVNBLENBQUM7UUFDUm9CLFNBQVNaLDBGQUFxQkEsQ0FBQ2M7SUFDakMsR0FBRztRQUFDQTtLQUFJO0lBRVIsTUFBTUssYUFBYSxDQUFDQztRQUNsQlQsY0FBYztZQUNaVSxNQUFNRCxFQUFFRSxNQUFNLENBQUNDLFlBQVksQ0FBQztZQUM1QkMsTUFBTUosRUFBRUUsTUFBTSxDQUFDQyxZQUFZLENBQUM7UUFDOUI7UUFDQWQsZUFBZSxDQUFDRDtJQUNsQjtJQUVBLHFCQUNFLDhEQUFDaUI7UUFBUUMsV0FBVy9CLHlFQUFlOzswQkFDakMsOERBQUNnQztnQkFBR0QsV0FBVy9CLGdGQUFzQjswQkFBR1E7Ozs7OzswQkFDeEMsOERBQUN5QjtnQkFBR0YsV0FBVy9CLCtFQUFxQjs7b0JBQ2pDUSxVQUFVLDhCQUNUOzswQ0FDRSw4REFBQzBCO2dDQUFHSCxXQUFXL0IsaUZBQXVCOzBDQUNwQyw0RUFBQ21DO29DQUNDSixXQUFXL0IsaUZBQXVCO29DQUNsQ29DLFNBQVM7d0NBQ1BuQixTQUFTYixvRUFBU0E7b0NBQ3BCOztzREFFQSw4REFBQ0gsbURBQUtBOzRDQUNKb0MsS0FBSTs0Q0FDSkMsT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUkMsS0FBSTs0Q0FDSkMsUUFBUTs7Ozs7O3NEQUVWLDhEQUFDQzs0Q0FBS1gsV0FBVy9CLDBGQUE2QjtzREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3BELDhEQUFDa0M7Z0NBQUdILFdBQVcvQixpRkFBdUI7O2tEQUNwQyw4REFBQzBDO3dDQUNDWCxXQUFXL0IsdUZBQTBCO3dDQUNyQ29DLFNBQVM7NENBQ1B0QixlQUFlLENBQUNEO3dDQUNsQjtrREFFQ0U7Ozs7OztvQ0FFRkYsNkJBQ0MsOERBQUNvQjt3Q0FBR0YsV0FBVy9CLDBGQUE2Qjs7MERBQzFDLDhEQUFDa0M7Z0RBQ0NTLG9CQUFpQjtnREFDakJDLG9CQUFpQjtnREFDakJSLFNBQVNaOzBEQUNWOzs7Ozs7MERBR0QsOERBQUNVO2dEQUNDUyxvQkFBaUI7Z0RBQ2pCQyxvQkFBaUI7Z0RBQ2pCUixTQUFTWjswREFDVjs7Ozs7OzBEQUdELDhEQUFDVTtnREFDQ1Msb0JBQWlCO2dEQUNqQkMsb0JBQWlCO2dEQUNqQlIsU0FBU1o7MERBQ1Y7Ozs7OzswREFHRCw4REFBQ1U7Z0RBQ0NTLG9CQUFpQjtnREFDakJDLG9CQUFpQjtnREFDakJSLFNBQVNaOzBEQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFRVk4sWUFDQzJCLE1BQU1DLE9BQU8sQ0FBQzVCLGFBQ2RBLFNBQVM2QixNQUFNLEdBQUcsS0FDbEI3QixTQUNHOEIsS0FBSyxDQUFDLEdBQUdyQyxPQUNUc0MsR0FBRyxDQUFDOzRCQUFDLEVBQUVDLEdBQUcsRUFBRSxHQUFHQyxjQUFjOzZDQUM1Qiw4REFBQ3BELDJDQUFJQTs0QkFBWSxHQUFHb0QsWUFBWTsyQkFBckJEOzs7Ozs7Ozs7Ozs7WUFHbEJ2QyxRQUFRTyxTQUFTNkIsTUFBTSxrQkFDdEIsOERBQUNaO2dCQUFPSixXQUFXL0IsdUZBQTBCO2dCQUFFb0MsU0FBU2Q7MEJBQWdCOzs7Ozs7Ozs7Ozs7QUFNaEY7R0E1R2dCZjs7UUFLR0wsb0RBQVdBO1FBQ1hDLG9EQUFXQTs7O0tBTmRJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrLmpzeD80NzA1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmQv0KFhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvZHVjdHNCbG9jay5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldEZpbHRlciB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9maWx0ZXJTbGljZVwiO1xuaW1wb3J0IHsgZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzIH0gZnJvbSBcIkAvcmVkdXgvbWlkZGxld2FyZXMvZmlsdGVyZWRQcm9kdWN0c1wiO1xuaW1wb3J0IHsgZmlsdGVyZWRQcm9kdWN0c1NlbGVjdG9yIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3Byb2R1Y3RzU2xpY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2R1Y3RzQmxvY2soeyB0aXRsZSwgc2VhcmNoUGFyYW1zLCBudW0gfSkge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKG51bSk7XG4gIGNvbnN0IFtzb3J0T3B0aW9ucywgc2V0U29ydE9wdGlvbnNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtvcHRpb25UeXBlLCBzZXRPcHRpb25UeXBlXSA9IHVzZVN0YXRlKFwi0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFwiKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3IoZmlsdGVyZWRQcm9kdWN0c1NlbGVjdG9yKTtcbiAgY29uc3QgdXJsID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hQYXJhbXMpLnRvU3RyaW5nKCk7XG5cbiAgY29uc3QgaGFuZGxlTG9hZE1vcmUgPSAoKSA9PiB7XG4gICAgc2V0Q291bnQoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgbnVtKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoRmlsdGVyZWRQcm9kdWN0cyh1cmwpKTtcbiAgfSwgW3VybF0pO1xuXG4gIGNvbnN0IGhhbmRsZVNvcnQgPSAoZSkgPT4ge1xuICAgIHNldE9wdGlvblR5cGUoe1xuICAgICAgdGV4dDogZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcHRpb24tdGV4dFwiKSxcbiAgICAgIHR5cGU6IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uLXR5cGVcIiksXG4gICAgfSk7XG4gICAgc2V0U29ydE9wdGlvbnMoIXNvcnRPcHRpb25zKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja2BdfT5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX3RpdGxlYF19Pnt0aXRsZX08L2gyPlxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fbGlzdGBdfT5cbiAgICAgICAge3RpdGxlID09PSBcItCj0YHRliDQstC40YDQvtCx0LhcIiAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX2J1dHRvbmBdfT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fZmlsdGVyYF19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0RmlsdGVyKCkpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWdzL2ZpbHRlci5wbmdcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgICAgIGFsdD1cInRvLWZhdlwiXG4gICAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19maWx0ZXItLXRleHRgXX0+0KTRltC70YzRgtGA0Lg8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX2J1dHRvbmBdfT5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX3NvcnQtdHlwZWBdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFNvcnRPcHRpb25zKCFzb3J0T3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtvcHRpb25UeXBlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtzb3J0T3B0aW9ucyAmJiAoXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fc29ydC1vcHRpb25zYF19PlxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXR5cGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXRleHQ9XCLQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU29ydH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10eXBlPVwiY3VycmVudFByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vcHRpb24tdGV4dD1cItCm0ZbQvdCwINCy0ZbQtCDQvdCw0LnQvNC10L3RiNC+0ZdcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTb3J0fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDQptGW0L3QsCDQstGW0LQg0L3QsNC50LzQtdC90YjQvtGXXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXR5cGU9XCJjdXJyZW50UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10ZXh0PVwi0KbRltC90LAg0LLRltC0INC90LDQudCx0ZbQu9GM0YjQvtGXXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU29ydH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0KbRltC90LAg0LLRltC0INC90LDQudCx0ZbQu9GM0YjQvtGXXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vcHRpb24tdGV4dD1cItCf0L4g0LTQsNGC0ZYg0LTQvtC00LDQstCw0L3QvdGPXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU29ydH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0J/QviDQtNCw0YLRliDQtNC+0LTQsNCy0LDQvdC90Y9cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtwcm9kdWN0cyAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocHJvZHVjdHMpICYmXG4gICAgICAgICAgcHJvZHVjdHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIHByb2R1Y3RzXG4gICAgICAgICAgICAuc2xpY2UoMCwgY291bnQpXG4gICAgICAgICAgICAubWFwKCh7IF9pZCwgLi4ucHJvZHVjdFByb3BzIH0pID0+IChcbiAgICAgICAgICAgICAgPENhcmQga2V5PXtfaWR9IHsuLi5wcm9kdWN0UHJvcHN9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICB7Y291bnQgPCBwcm9kdWN0cy5sZW5ndGggJiYgKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fc2hvdy1tb3JlYF19IG9uQ2xpY2s9e2hhbmRsZUxvYWRNb3JlfT5cbiAgICAgICAgICDQn9C+0LrQsNC30LDRgtC4INGJ0LVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJzdHlsZXMiLCJJbWFnZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRGaWx0ZXIiLCJmZXRjaEZpbHRlcmVkUHJvZHVjdHMiLCJmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IiLCJQcm9kdWN0c0Jsb2NrIiwidGl0bGUiLCJzZWFyY2hQYXJhbXMiLCJudW0iLCJjb3VudCIsInNldENvdW50Iiwic29ydE9wdGlvbnMiLCJzZXRTb3J0T3B0aW9ucyIsIm9wdGlvblR5cGUiLCJzZXRPcHRpb25UeXBlIiwiZGlzcGF0Y2giLCJwcm9kdWN0cyIsInVybCIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiaGFuZGxlTG9hZE1vcmUiLCJwcmV2U3RhdGUiLCJoYW5kbGVTb3J0IiwiZSIsInRleHQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0eXBlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgyIiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInByaW9yaXR5Iiwic3BhbiIsImRhdGEtb3B0aW9uLXR5cGUiLCJkYXRhLW9wdGlvbi10ZXh0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJfaWQiLCJwcm9kdWN0UHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\n"));

/***/ })

});