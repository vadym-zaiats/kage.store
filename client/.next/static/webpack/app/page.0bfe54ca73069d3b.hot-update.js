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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductsBlock: function() { return /* binding */ ProductsBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./productsBlock.module.scss */ \"(app-pages-browser)/./src/app/ui/productsBlock/productsBlock.module.scss\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var _redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/middlewares/filteredProducts */ \"(app-pages-browser)/./src/redux/middlewares/filteredProducts.js\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* harmony import */ var _redux_api_productsApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/redux/api/productsApi */ \"(app-pages-browser)/./src/redux/api/productsApi.js\");\n/* __next_internal_client_entry_do_not_use__ ProductsBlock auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ProductsBlock(param) {\n    let { title, searchParams, num } = param;\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(num);\n    const [sortOptions, setSortOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [optionType, setOptionType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"За замовчуванням\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__.filteredProductsSelector);\n    const url = new URLSearchParams(searchParams).toString();\n    const { data, isLoading } = (0,_redux_api_productsApi__WEBPACK_IMPORTED_MODULE_7__.useGetFilteredProductQuery)(url);\n    console.log(data, isLoading);\n    const handleLoadMore = ()=>{\n        setCount((prevState)=>prevState + num);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__.fetchFilteredProducts)(url));\n    }, [\n        url\n    ]);\n    const handleSort = (e)=>{\n        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.sortFilter)(e.target.getAttribute(\"data-option-type\")));\n        setOptionType(e.target.getAttribute(\"data-option-text\"));\n        setSortOptions(!sortOptions);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default().block),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default().block__title),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default().block__list),\n                children: [\n                    title === \"Усі вироби\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default().block__button),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default().block__filter),\n                                    onClick: ()=>{\n                                        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.setFilter)());\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"/imgs/filter.png\",\n                                            width: 20,\n                                            height: 20,\n                                            alt: \"to-fav\",\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"block__filter--text\"]),\n                                            children: \"Фільтри\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\".concat((_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default().block__button), \" \").concat(sortOptions && (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"block__button--sort\"])),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"block__sort-type\"]),\n                                        onClick: ()=>{\n                                            setSortOptions(!sortOptions);\n                                        },\n                                        children: optionType\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"\".concat((_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"block__sort-options\"]), \" \").concat(sortOptions && (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"block__sort-options--open\"])),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"date\",\n                                                \"data-option-text\": \"Найновіші\",\n                                                onClick: handleSort,\n                                                children: \"Найновіші\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"false\",\n                                                \"data-option-text\": \"За замовчуванням\",\n                                                onClick: handleSort,\n                                                children: \"За замовчуванням\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"currentPrice\",\n                                                \"data-option-text\": \"Від найменшої ціни\",\n                                                onClick: handleSort,\n                                                children: \"Від найменшої ціни\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"-currentPrice\",\n                                                \"data-option-text\": \"Від найбільшої ціни\",\n                                                onClick: handleSort,\n                                                children: \"Від найбільшої ціни\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    isLoading || products && Array.isArray(products) && products.length > 0 && products.slice(0, count).map((param)=>{\n                        let { _id, ...productProps } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                            ...productProps\n                        }, _id, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                            lineNumber: 122,\n                            columnNumber: 17\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            isLoading || count < products.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"block__show-more\"]),\n                onClick: handleLoadMore,\n                children: \"Показати ще\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 127,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductsBlock, \"M72gQHg6e4nfv/CojZYTGtAEsDY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector,\n        _redux_api_productsApi__WEBPACK_IMPORTED_MODULE_7__.useGetFilteredProductQuery\n    ];\n});\n_c = ProductsBlock;\nvar _c;\n$RefreshReg$(_c, \"ProductsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1I7QUFDYTtBQUNsQjtBQUN3QjtBQUNZO0FBQ1U7QUFJdkM7QUFDK0I7QUFFOUQsU0FBU2EsY0FBYyxLQUE0QjtRQUE1QixFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsR0FBRyxFQUFFLEdBQTVCOztJQUM1QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2pCLCtDQUFRQSxDQUFDZTtJQUNuQyxNQUFNLENBQUNHLGFBQWFDLGVBQWUsR0FBR25CLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ29CLFlBQVlDLGNBQWMsR0FBR3JCLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1zQixXQUFXbEIsd0RBQVdBO0lBQzVCLE1BQU1tQixXQUFXbEIsd0RBQVdBLENBQUNJLGlGQUF3QkE7SUFDckQsTUFBTWUsTUFBTSxJQUFJQyxnQkFBZ0JYLGNBQWNZLFFBQVE7SUFFdEQsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRSxHQUFHakIsa0ZBQTBCQSxDQUFDYTtJQUN2REssUUFBUUMsR0FBRyxDQUFDSCxNQUFNQztJQUVsQixNQUFNRyxpQkFBaUI7UUFDckJkLFNBQVMsQ0FBQ2UsWUFBY0EsWUFBWWpCO0lBQ3RDO0lBRUFoQixnREFBU0EsQ0FBQztRQUNSdUIsU0FBU2QsMEZBQXFCQSxDQUFDZ0I7SUFDakMsR0FBRztRQUFDQTtLQUFJO0lBRVIsTUFBTVMsYUFBYSxDQUFDQztRQUNsQlosU0FBU2YscUVBQVVBLENBQUMyQixFQUFFQyxNQUFNLENBQUNDLFlBQVksQ0FBQztRQUMxQ2YsY0FBY2EsRUFBRUMsTUFBTSxDQUFDQyxZQUFZLENBQUM7UUFDcENqQixlQUFlLENBQUNEO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNtQjtRQUFRQyxXQUFXcEMseUVBQWU7OzBCQUNqQyw4REFBQ3FDO2dCQUFHRCxXQUFXcEMsZ0ZBQXNCOzBCQUFHVzs7Ozs7OzBCQUN4Qyw4REFBQzJCO2dCQUFHRixXQUFXcEMsK0VBQXFCOztvQkFDakNXLFVBQVUsOEJBQ1Q7OzBDQUNFLDhEQUFDNEI7Z0NBQUdILFdBQVdwQyxpRkFBdUI7MENBQ3BDLDRFQUFDd0M7b0NBQ0NKLFdBQVdwQyxpRkFBdUI7b0NBQ2xDeUMsU0FBUzt3Q0FDUHJCLFNBQVNoQixvRUFBU0E7b0NBQ3BCOztzREFFQSw4REFBQ0gsbURBQUtBOzRDQUNKeUMsS0FBSTs0Q0FDSkMsT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUkMsS0FBSTs0Q0FDSkMsUUFBUTs7Ozs7O3NEQUVWLDhEQUFDQzs0Q0FBS1gsV0FBV3BDLDBGQUE2QjtzREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3BELDhEQUFDdUM7Z0NBQ0NILFdBQVcsR0FDVHBCLE9BRFloQixpRkFBdUIsRUFBQyxLQUVyQyxPQURDZ0IsZUFBZWhCLDBGQUE2Qjs7a0RBRzlDLDhEQUFDd0M7d0NBQ0NKLFdBQVdwQyx1RkFBMEI7d0NBQ3JDeUMsU0FBUzs0Q0FDUHhCLGVBQWUsQ0FBQ0Q7d0NBQ2xCO2tEQUVDRTs7Ozs7O2tEQUVILDhEQUFDb0I7d0NBQ0NGLFdBQVcsR0FDVHBCLE9BRFloQiwwRkFBNkIsRUFBQyxLQUUzQyxPQURDZ0IsZUFBZWhCLGdHQUFtQzs7MERBR3BELDhEQUFDdUM7Z0RBQ0NTLG9CQUFpQjtnREFDakJDLG9CQUFpQjtnREFDakJSLFNBQVNWOzBEQUNWOzs7Ozs7MERBR0QsOERBQUNRO2dEQUNDUyxvQkFBaUI7Z0RBQ2pCQyxvQkFBaUI7Z0RBQ2pCUixTQUFTVjswREFDVjs7Ozs7OzBEQUdELDhEQUFDUTtnREFDQ1Msb0JBQWlCO2dEQUNqQkMsb0JBQWlCO2dEQUNqQlIsU0FBU1Y7MERBQ1Y7Ozs7OzswREFHRCw4REFBQ1E7Z0RBQ0NTLG9CQUFpQjtnREFDakJDLG9CQUFpQjtnREFDakJSLFNBQVNWOzBEQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFPUkwsYUFDRUwsWUFDQzZCLE1BQU1DLE9BQU8sQ0FBQzlCLGFBQ2RBLFNBQVMrQixNQUFNLEdBQUcsS0FDbEIvQixTQUNHZ0MsS0FBSyxDQUFDLEdBQUd2QyxPQUNUd0MsR0FBRyxDQUFDOzRCQUFDLEVBQUVDLEdBQUcsRUFBRSxHQUFHQyxjQUFjOzZDQUM1Qiw4REFBQ3pELDJDQUFJQTs0QkFBWSxHQUFHeUQsWUFBWTsyQkFBckJEOzs7Ozs7Ozs7Ozs7WUFHcEI3QixhQUNFWixRQUFRTyxTQUFTK0IsTUFBTSxrQkFDdEIsOERBQUNaO2dCQUNDSixXQUFXcEMsdUZBQTBCO2dCQUNyQ3lDLFNBQVNaOzBCQUNWOzs7Ozs7Ozs7Ozs7QUFNWDtHQXhIZ0JuQjs7UUFLR1Isb0RBQVdBO1FBQ1hDLG9EQUFXQTtRQUdBTSw4RUFBMEJBOzs7S0FUeENDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrLmpzeD80NzA1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmQv0KFhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvZHVjdHNCbG9jay5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldEZpbHRlciwgc29ydEZpbHRlciB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9maWx0ZXJTbGljZVwiO1xuaW1wb3J0IHsgZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzIH0gZnJvbSBcIkAvcmVkdXgvbWlkZGxld2FyZXMvZmlsdGVyZWRQcm9kdWN0c1wiO1xuaW1wb3J0IHtcbiAgZmlsdGVyZWRQcm9kdWN0c1NlbGVjdG9yLFxuICBzZXRGaWx0ZXJlZFByb2R1Y3RzLFxufSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZVwiO1xuaW1wb3J0IHsgdXNlR2V0RmlsdGVyZWRQcm9kdWN0UXVlcnkgfSBmcm9tIFwiQC9yZWR1eC9hcGkvcHJvZHVjdHNBcGlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2R1Y3RzQmxvY2soeyB0aXRsZSwgc2VhcmNoUGFyYW1zLCBudW0gfSkge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKG51bSk7XG4gIGNvbnN0IFtzb3J0T3B0aW9ucywgc2V0U29ydE9wdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3B0aW9uVHlwZSwgc2V0T3B0aW9uVHlwZV0gPSB1c2VTdGF0ZShcItCX0LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcIik7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZVNlbGVjdG9yKGZpbHRlcmVkUHJvZHVjdHNTZWxlY3Rvcik7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1zKS50b1N0cmluZygpO1xuXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VHZXRGaWx0ZXJlZFByb2R1Y3RRdWVyeSh1cmwpO1xuICBjb25zb2xlLmxvZyhkYXRhLCBpc0xvYWRpbmcpO1xuXG4gIGNvbnN0IGhhbmRsZUxvYWRNb3JlID0gKCkgPT4ge1xuICAgIHNldENvdW50KChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIG51bSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEZpbHRlcmVkUHJvZHVjdHModXJsKSk7XG4gIH0sIFt1cmxdKTtcblxuICBjb25zdCBoYW5kbGVTb3J0ID0gKGUpID0+IHtcbiAgICBkaXNwYXRjaChzb3J0RmlsdGVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uLXR5cGVcIikpKTtcbiAgICBzZXRPcHRpb25UeXBlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uLXRleHRcIikpO1xuICAgIHNldFNvcnRPcHRpb25zKCFzb3J0T3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tgXX0+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX190aXRsZWBdfT57dGl0bGV9PC9oMj5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX2xpc3RgXX0+XG4gICAgICAgIHt0aXRsZSA9PT0gXCLQo9GB0ZYg0LLQuNGA0L7QsdC4XCIgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19idXR0b25gXX0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX2ZpbHRlcmBdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEZpbHRlcigpKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1ncy9maWx0ZXIucG5nXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJ0by1mYXZcIlxuICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fZmlsdGVyLS10ZXh0YF19PtCk0ZbQu9GM0YLRgNC4PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbYGJsb2NrX19idXR0b25gXX0gJHtcbiAgICAgICAgICAgICAgICBzb3J0T3B0aW9ucyAmJiBzdHlsZXNbYGJsb2NrX19idXR0b24tLXNvcnRgXVxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fc29ydC10eXBlYF19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0U29ydE9wdGlvbnMoIXNvcnRPcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge29wdGlvblR5cGV9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImJsb2NrX19zb3J0LW9wdGlvbnNcIl19ICR7XG4gICAgICAgICAgICAgICAgICBzb3J0T3B0aW9ucyAmJiBzdHlsZXNbXCJibG9ja19fc29ydC1vcHRpb25zLS1vcGVuXCJdXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXRleHQ9XCLQndCw0LnQvdC+0LLRltGI0ZZcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU29ydH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDQndCw0LnQvdC+0LLRltGI0ZZcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgZGF0YS1vcHRpb24tdHlwZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXRleHQ9XCLQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNvcnR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10eXBlPVwiY3VycmVudFByaWNlXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXRleHQ9XCLQktGW0LQg0L3QsNC50LzQtdC90YjQvtGXINGG0ZbQvdC4XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNvcnR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg0JLRltC0INC90LDQudC80LXQvdGI0L7RlyDRhtGW0L3QuFxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10eXBlPVwiLWN1cnJlbnRQcmljZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10ZXh0PVwi0JLRltC0INC90LDQudCx0ZbQu9GM0YjQvtGXINGG0ZbQvdC4XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNvcnR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg0JLRltC0INC90LDQudCx0ZbQu9GM0YjQvtGXINGG0ZbQvdC4XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtpc0xvYWRpbmcgfHxcbiAgICAgICAgICAocHJvZHVjdHMgJiZcbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocHJvZHVjdHMpICYmXG4gICAgICAgICAgICBwcm9kdWN0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBwcm9kdWN0c1xuICAgICAgICAgICAgICAuc2xpY2UoMCwgY291bnQpXG4gICAgICAgICAgICAgIC5tYXAoKHsgX2lkLCAuLi5wcm9kdWN0UHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17X2lkfSB7Li4ucHJvZHVjdFByb3BzfSAvPlxuICAgICAgICAgICAgICApKSl9XG4gICAgICA8L3VsPlxuICAgICAge2lzTG9hZGluZyB8fFxuICAgICAgICAoY291bnQgPCBwcm9kdWN0cy5sZW5ndGggJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fc2hvdy1tb3JlYF19XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2FkTW9yZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDQn9C+0LrQsNC30LDRgtC4INGJ0LVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsInN0eWxlcyIsIkltYWdlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldEZpbHRlciIsInNvcnRGaWx0ZXIiLCJmZXRjaEZpbHRlcmVkUHJvZHVjdHMiLCJmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IiLCJzZXRGaWx0ZXJlZFByb2R1Y3RzIiwidXNlR2V0RmlsdGVyZWRQcm9kdWN0UXVlcnkiLCJQcm9kdWN0c0Jsb2NrIiwidGl0bGUiLCJzZWFyY2hQYXJhbXMiLCJudW0iLCJjb3VudCIsInNldENvdW50Iiwic29ydE9wdGlvbnMiLCJzZXRTb3J0T3B0aW9ucyIsIm9wdGlvblR5cGUiLCJzZXRPcHRpb25UeXBlIiwiZGlzcGF0Y2giLCJwcm9kdWN0cyIsInVybCIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiZGF0YSIsImlzTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2FkTW9yZSIsInByZXZTdGF0ZSIsImhhbmRsZVNvcnQiLCJlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgyIiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInByaW9yaXR5Iiwic3BhbiIsImRhdGEtb3B0aW9uLXR5cGUiLCJkYXRhLW9wdGlvbi10ZXh0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJfaWQiLCJwcm9kdWN0UHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\n"));

/***/ })

});