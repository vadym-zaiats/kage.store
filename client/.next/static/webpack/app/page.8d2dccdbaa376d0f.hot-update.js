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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductsBlock: function() { return /* binding */ ProductsBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./productsBlock.module.scss */ \"(app-pages-browser)/./src/app/ui/productsBlock/productsBlock.module.scss\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var _redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/middlewares/filteredProducts */ \"(app-pages-browser)/./src/redux/middlewares/filteredProducts.js\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* harmony import */ var _redux_api_productsApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/redux/api/productsApi */ \"(app-pages-browser)/./src/redux/api/productsApi.js\");\n/* __next_internal_client_entry_do_not_use__ ProductsBlock auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ProductsBlock(param) {\n    let { title, searchParams, num } = param;\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(num);\n    const [sortOptions, setSortOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [optionType, setOptionType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"За замовчуванням\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    // const products = useSelector(filteredProductsSelector);\n    const url = new URLSearchParams(searchParams).toString();\n    const { data: products, isLoading } = (0,_redux_api_productsApi__WEBPACK_IMPORTED_MODULE_7__.useGetFilteredProductQuery)(url);\n    console.log(products, isLoading);\n    const handleLoadMore = ()=>{\n        setCount((prevState)=>prevState + num);\n    };\n    // useEffect(() => {\n    //   dispatch(fetchFilteredProducts(url));\n    // }, [url]);\n    const handleSort = (e)=>{\n        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.sortFilter)(e.target.getAttribute(\"data-option-type\")));\n        setOptionType(e.target.getAttribute(\"data-option-text\"));\n        setSortOptions(!sortOptions);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default().block),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default().block__title),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default().block__list),\n                children: [\n                    title === \"Усі вироби\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default().block__button),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default().block__filter),\n                                    onClick: ()=>{\n                                        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.setFilter)());\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"/imgs/filter.png\",\n                                            width: 20,\n                                            height: 20,\n                                            alt: \"to-fav\",\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"block__filter--text\"]),\n                                            children: \"Фільтри\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\".concat((_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default().block__button), \" \").concat(sortOptions && (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"block__button--sort\"])),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"block__sort-type\"]),\n                                        onClick: ()=>{\n                                            setSortOptions(!sortOptions);\n                                        },\n                                        children: optionType\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"\".concat((_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"block__sort-options\"]), \" \").concat(sortOptions && (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"block__sort-options--open\"])),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"date\",\n                                                \"data-option-text\": \"Найновіші\",\n                                                onClick: handleSort,\n                                                children: \"Найновіші\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"false\",\n                                                \"data-option-text\": \"За замовчуванням\",\n                                                onClick: handleSort,\n                                                children: \"За замовчуванням\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"currentPrice\",\n                                                \"data-option-text\": \"Від найменшої ціни\",\n                                                onClick: handleSort,\n                                                children: \"Від найменшої ціни\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"-currentPrice\",\n                                                \"data-option-text\": \"Від найбільшої ціни\",\n                                                onClick: handleSort,\n                                                children: \"Від найбільшої ціни\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    !isLoading || products && Array.isArray(products) && products.length > 0 && products.slice(0, count).map((param)=>{\n                        let { _id, ...productProps } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                            ...productProps\n                        }, _id, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                            lineNumber: 122,\n                            columnNumber: 17\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            isLoading || count < products.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"block__show-more\"]),\n                onClick: handleLoadMore,\n                children: \"Показати ще\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 127,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductsBlock, \"SBumzHPaN28qN+cq7KwAKnAStjI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch,\n        _redux_api_productsApi__WEBPACK_IMPORTED_MODULE_7__.useGetFilteredProductQuery\n    ];\n});\n_c = ProductsBlock;\nvar _c;\n$RefreshReg$(_c, \"ProductsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1I7QUFDYTtBQUNsQjtBQUN3QjtBQUNZO0FBQ1U7QUFJdkM7QUFDK0I7QUFFOUQsU0FBU2EsY0FBYyxLQUE0QjtRQUE1QixFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsR0FBRyxFQUFFLEdBQTVCOztJQUM1QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2pCLCtDQUFRQSxDQUFDZTtJQUNuQyxNQUFNLENBQUNHLGFBQWFDLGVBQWUsR0FBR25CLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ29CLFlBQVlDLGNBQWMsR0FBR3JCLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1zQixXQUFXbEIsd0RBQVdBO0lBQzVCLDBEQUEwRDtJQUMxRCxNQUFNbUIsTUFBTSxJQUFJQyxnQkFBZ0JWLGNBQWNXLFFBQVE7SUFFdEQsTUFBTSxFQUFFQyxNQUFNQyxRQUFRLEVBQUVDLFNBQVMsRUFBRSxHQUFHakIsa0ZBQTBCQSxDQUFDWTtJQUNqRU0sUUFBUUMsR0FBRyxDQUFDSCxVQUFVQztJQUV0QixNQUFNRyxpQkFBaUI7UUFDckJkLFNBQVMsQ0FBQ2UsWUFBY0EsWUFBWWpCO0lBQ3RDO0lBRUEsb0JBQW9CO0lBQ3BCLDBDQUEwQztJQUMxQyxhQUFhO0lBRWIsTUFBTWtCLGFBQWEsQ0FBQ0M7UUFDbEJaLFNBQVNmLHFFQUFVQSxDQUFDMkIsRUFBRUMsTUFBTSxDQUFDQyxZQUFZLENBQUM7UUFDMUNmLGNBQWNhLEVBQUVDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDO1FBQ3BDakIsZUFBZSxDQUFDRDtJQUNsQjtJQUVBLHFCQUNFLDhEQUFDbUI7UUFBUUMsV0FBV3BDLHlFQUFlOzswQkFDakMsOERBQUNxQztnQkFBR0QsV0FBV3BDLGdGQUFzQjswQkFBR1c7Ozs7OzswQkFDeEMsOERBQUMyQjtnQkFBR0YsV0FBV3BDLCtFQUFxQjs7b0JBQ2pDVyxVQUFVLDhCQUNUOzswQ0FDRSw4REFBQzRCO2dDQUFHSCxXQUFXcEMsaUZBQXVCOzBDQUNwQyw0RUFBQ3dDO29DQUNDSixXQUFXcEMsaUZBQXVCO29DQUNsQ3lDLFNBQVM7d0NBQ1ByQixTQUFTaEIsb0VBQVNBO29DQUNwQjs7c0RBRUEsOERBQUNILG1EQUFLQTs0Q0FDSnlDLEtBQUk7NENBQ0pDLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JDLEtBQUk7NENBQ0pDLFFBQVE7Ozs7OztzREFFViw4REFBQ0M7NENBQUtYLFdBQVdwQywwRkFBNkI7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdwRCw4REFBQ3VDO2dDQUNDSCxXQUFXLEdBQ1RwQixPQURZaEIsaUZBQXVCLEVBQUMsS0FFckMsT0FEQ2dCLGVBQWVoQiwwRkFBNkI7O2tEQUc5Qyw4REFBQ3dDO3dDQUNDSixXQUFXcEMsdUZBQTBCO3dDQUNyQ3lDLFNBQVM7NENBQ1B4QixlQUFlLENBQUNEO3dDQUNsQjtrREFFQ0U7Ozs7OztrREFFSCw4REFBQ29CO3dDQUNDRixXQUFXLEdBQ1RwQixPQURZaEIsMEZBQTZCLEVBQUMsS0FFM0MsT0FEQ2dCLGVBQWVoQixnR0FBbUM7OzBEQUdwRCw4REFBQ3VDO2dEQUNDUyxvQkFBaUI7Z0RBQ2pCQyxvQkFBaUI7Z0RBQ2pCUixTQUFTVjswREFDVjs7Ozs7OzBEQUdELDhEQUFDUTtnREFDQ1Msb0JBQWlCO2dEQUNqQkMsb0JBQWlCO2dEQUNqQlIsU0FBU1Y7MERBQ1Y7Ozs7OzswREFHRCw4REFBQ1E7Z0RBQ0NTLG9CQUFpQjtnREFDakJDLG9CQUFpQjtnREFDakJSLFNBQVNWOzBEQUNWOzs7Ozs7MERBR0QsOERBQUNRO2dEQUNDUyxvQkFBaUI7Z0RBQ2pCQyxvQkFBaUI7Z0RBQ2pCUixTQUFTVjswREFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBT1IsQ0FBQ0wsYUFDQ0QsWUFDQ3lCLE1BQU1DLE9BQU8sQ0FBQzFCLGFBQ2RBLFNBQVMyQixNQUFNLEdBQUcsS0FDbEIzQixTQUNHNEIsS0FBSyxDQUFDLEdBQUd2QyxPQUNUd0MsR0FBRyxDQUFDOzRCQUFDLEVBQUVDLEdBQUcsRUFBRSxHQUFHQyxjQUFjOzZDQUM1Qiw4REFBQ3pELDJDQUFJQTs0QkFBWSxHQUFHeUQsWUFBWTsyQkFBckJEOzs7Ozs7Ozs7Ozs7WUFHcEI3QixhQUNFWixRQUFRVyxTQUFTMkIsTUFBTSxrQkFDdEIsOERBQUNaO2dCQUNDSixXQUFXcEMsdUZBQTBCO2dCQUNyQ3lDLFNBQVNaOzBCQUNWOzs7Ozs7Ozs7Ozs7QUFNWDtHQXhIZ0JuQjs7UUFLR1Isb0RBQVdBO1FBSVVPLDhFQUEwQkE7OztLQVRsREMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9wcm9kdWN0c0Jsb2NrL1Byb2R1Y3RzQmxvY2suanN4PzQ3MDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZC/QoWFyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wcm9kdWN0c0Jsb2NrLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0RmlsdGVyLCBzb3J0RmlsdGVyIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL2ZpbHRlclNsaWNlXCI7XG5pbXBvcnQgeyBmZXRjaEZpbHRlcmVkUHJvZHVjdHMgfSBmcm9tIFwiQC9yZWR1eC9taWRkbGV3YXJlcy9maWx0ZXJlZFByb2R1Y3RzXCI7XG5pbXBvcnQge1xuICBmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IsXG4gIHNldEZpbHRlcmVkUHJvZHVjdHMsXG59IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9kdWN0c1NsaWNlXCI7XG5pbXBvcnQgeyB1c2VHZXRGaWx0ZXJlZFByb2R1Y3RRdWVyeSB9IGZyb20gXCJAL3JlZHV4L2FwaS9wcm9kdWN0c0FwaVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvZHVjdHNCbG9jayh7IHRpdGxlLCBzZWFyY2hQYXJhbXMsIG51bSB9KSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUobnVtKTtcbiAgY29uc3QgW3NvcnRPcHRpb25zLCBzZXRTb3J0T3B0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcHRpb25UeXBlLCBzZXRPcHRpb25UeXBlXSA9IHVzZVN0YXRlKFwi0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFwiKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIC8vIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3IoZmlsdGVyZWRQcm9kdWN0c1NlbGVjdG9yKTtcbiAgY29uc3QgdXJsID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hQYXJhbXMpLnRvU3RyaW5nKCk7XG5cbiAgY29uc3QgeyBkYXRhOiBwcm9kdWN0cywgaXNMb2FkaW5nIH0gPSB1c2VHZXRGaWx0ZXJlZFByb2R1Y3RRdWVyeSh1cmwpO1xuICBjb25zb2xlLmxvZyhwcm9kdWN0cywgaXNMb2FkaW5nKTtcblxuICBjb25zdCBoYW5kbGVMb2FkTW9yZSA9ICgpID0+IHtcbiAgICBzZXRDb3VudCgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyBudW0pO1xuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZGlzcGF0Y2goZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzKHVybCkpO1xuICAvLyB9LCBbdXJsXSk7XG5cbiAgY29uc3QgaGFuZGxlU29ydCA9IChlKSA9PiB7XG4gICAgZGlzcGF0Y2goc29ydEZpbHRlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvbi10eXBlXCIpKSk7XG4gICAgc2V0T3B0aW9uVHlwZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvbi10ZXh0XCIpKTtcbiAgICBzZXRTb3J0T3B0aW9ucyghc29ydE9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrYF19PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fdGl0bGVgXX0+e3RpdGxlfTwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19saXN0YF19PlxuICAgICAgICB7dGl0bGUgPT09IFwi0KPRgdGWINCy0LjRgNC+0LHQuFwiICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fYnV0dG9uYF19PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19maWx0ZXJgXX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRGaWx0ZXIoKSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZ3MvZmlsdGVyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAgICAgYWx0PVwidG8tZmF2XCJcbiAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX2ZpbHRlci0tdGV4dGBdfT7QpNGW0LvRjNGC0YDQuDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW2BibG9ja19fYnV0dG9uYF19ICR7XG4gICAgICAgICAgICAgICAgc29ydE9wdGlvbnMgJiYgc3R5bGVzW2BibG9ja19fYnV0dG9uLS1zb3J0YF1cbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX3NvcnQtdHlwZWBdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFNvcnRPcHRpb25zKCFzb3J0T3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtvcHRpb25UeXBlfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJibG9ja19fc29ydC1vcHRpb25zXCJdfSAke1xuICAgICAgICAgICAgICAgICAgc29ydE9wdGlvbnMgJiYgc3R5bGVzW1wiYmxvY2tfX3NvcnQtb3B0aW9ucy0tb3BlblwiXVxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10ZXh0PVwi0J3QsNC50L3QvtCy0ZbRiNGWXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNvcnR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg0J3QsNC50L3QvtCy0ZbRiNGWXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXR5cGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10ZXh0PVwi0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTb3J0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgINCX0LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgZGF0YS1vcHRpb24tdHlwZT1cImN1cnJlbnRQcmljZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10ZXh0PVwi0JLRltC0INC90LDQudC80LXQvdGI0L7RlyDRhtGW0L3QuFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTb3J0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgINCS0ZbQtCDQvdCw0LnQvNC10L3RiNC+0Zcg0YbRltC90LhcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgZGF0YS1vcHRpb24tdHlwZT1cIi1jdXJyZW50UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1vcHRpb24tdGV4dD1cItCS0ZbQtCDQvdCw0LnQsdGW0LvRjNGI0L7RlyDRhtGW0L3QuFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTb3J0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgINCS0ZbQtCDQvdCw0LnQsdGW0LvRjNGI0L7RlyDRhtGW0L3QuFxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IWlzTG9hZGluZyB8fFxuICAgICAgICAgIChwcm9kdWN0cyAmJlxuICAgICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9kdWN0cykgJiZcbiAgICAgICAgICAgIHByb2R1Y3RzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHByb2R1Y3RzXG4gICAgICAgICAgICAgIC5zbGljZSgwLCBjb3VudClcbiAgICAgICAgICAgICAgLm1hcCgoeyBfaWQsIC4uLnByb2R1Y3RQcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtfaWR9IHsuLi5wcm9kdWN0UHJvcHN9IC8+XG4gICAgICAgICAgICAgICkpKX1cbiAgICAgIDwvdWw+XG4gICAgICB7aXNMb2FkaW5nIHx8XG4gICAgICAgIChjb3VudCA8IHByb2R1Y3RzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19zaG93LW1vcmVgXX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvYWRNb3JlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgINCf0L7QutCw0LfQsNGC0Lgg0YnQtVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJkIiwic3R5bGVzIiwiSW1hZ2UiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0RmlsdGVyIiwic29ydEZpbHRlciIsImZldGNoRmlsdGVyZWRQcm9kdWN0cyIsImZpbHRlcmVkUHJvZHVjdHNTZWxlY3RvciIsInNldEZpbHRlcmVkUHJvZHVjdHMiLCJ1c2VHZXRGaWx0ZXJlZFByb2R1Y3RRdWVyeSIsIlByb2R1Y3RzQmxvY2siLCJ0aXRsZSIsInNlYXJjaFBhcmFtcyIsIm51bSIsImNvdW50Iiwic2V0Q291bnQiLCJzb3J0T3B0aW9ucyIsInNldFNvcnRPcHRpb25zIiwib3B0aW9uVHlwZSIsInNldE9wdGlvblR5cGUiLCJkaXNwYXRjaCIsInVybCIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiZGF0YSIsInByb2R1Y3RzIiwiaXNMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUxvYWRNb3JlIiwicHJldlN0YXRlIiwiaGFuZGxlU29ydCIsImUiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJ1bCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicHJpb3JpdHkiLCJzcGFuIiwiZGF0YS1vcHRpb24tdHlwZSIsImRhdGEtb3B0aW9uLXRleHQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJzbGljZSIsIm1hcCIsIl9pZCIsInByb2R1Y3RQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\n"));

/***/ })

});