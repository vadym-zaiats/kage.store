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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductsBlock: function() { return /* binding */ ProductsBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productsBlock.module.scss */ \"(app-pages-browser)/./src/app/ui/productsBlock/productsBlock.module.scss\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var _redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/middlewares/filteredProducts */ \"(app-pages-browser)/./src/redux/middlewares/filteredProducts.js\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* __next_internal_client_entry_do_not_use__ ProductsBlock auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ProductsBlock(param) {\n    let { title, searchParams, num } = param;\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(num);\n    const [sortOptions, setSortOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [optionType, setOptionType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"За замовчуванням\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__.filteredProductsSelector);\n    const url = new URLSearchParams(searchParams).toString();\n    const handleLoadMore = ()=>{\n        setCount((prevState)=>prevState + num);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__.fetchFilteredProducts)(url));\n    }, [\n        url\n    ]);\n    const handleSort = (e)=>{\n        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.sortFilter)(e.target.getAttribute(\"data-option-type\")));\n        setOptionType(e.target.getAttribute(\"data-option-text\"));\n        setSortOptions(!sortOptions);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__title),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__list),\n                children: [\n                    title === \"Усі вироби\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__button),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__filter),\n                                    onClick: ()=>{\n                                        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.setFilter)());\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"/imgs/filter.png\",\n                                            width: 20,\n                                            height: 20,\n                                            alt: \"to-fav\",\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__filter--text\"]),\n                                            children: \"Фільтри\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\".concat((_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__button), \" \").concat(sortOptions && (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__button--sort\"])),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__sort-type\"]),\n                                        onClick: ()=>{\n                                            setSortOptions(!sortOptions);\n                                        },\n                                        children: optionType\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this),\n                                    sortOptions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"\".concat((_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__sort-options\"]), \" \").concat(sortOptions && (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__sort-options--open\"])),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"date\",\n                                                \"data-option-text\": \"Найновіші\",\n                                                onClick: handleSort,\n                                                children: \"Найновіші\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"false\",\n                                                \"data-option-text\": \"За замовчуванням\",\n                                                onClick: handleSort,\n                                                children: \"За замовчуванням\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"currentPrice\",\n                                                \"data-option-text\": \"Від найменшої ціни\",\n                                                onClick: handleSort,\n                                                children: \"Від найменшої ціни\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"-currentPrice\",\n                                                \"data-option-text\": \"Від найбільшої ціни\",\n                                                onClick: handleSort,\n                                                children: \"Від найбільшої ціни\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    products && Array.isArray(products) && products.length > 0 && products.slice(0, count).map((param)=>{\n                        let { _id, ...productProps } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                            ...productProps\n                        }, _id, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                            lineNumber: 116,\n                            columnNumber: 15\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            count < products.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__show-more\"]),\n                onClick: handleLoadMore,\n                children: \"Показати ще\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductsBlock, \"j8MGyVur45g2CgJLqywgxwoLqIY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = ProductsBlock;\nvar _c;\n$RefreshReg$(_c, \"ProductsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDUjtBQUNhO0FBQ2xCO0FBQ3dCO0FBQ1k7QUFDVTtBQUNMO0FBRWpFLFNBQVNXLGNBQWMsS0FBNEI7UUFBNUIsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLEdBQUcsRUFBRSxHQUE1Qjs7SUFDNUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFDYTtJQUNuQyxNQUFNLENBQUNHLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2tCLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1vQixXQUFXaEIsd0RBQVdBO0lBQzVCLE1BQU1pQixXQUFXaEIsd0RBQVdBLENBQUNJLGlGQUF3QkE7SUFDckQsTUFBTWEsTUFBTSxJQUFJQyxnQkFBZ0JYLGNBQWNZLFFBQVE7SUFFdEQsTUFBTUMsaUJBQWlCO1FBQ3JCVixTQUFTLENBQUNXLFlBQWNBLFlBQVliO0lBQ3RDO0lBRUFkLGdEQUFTQSxDQUFDO1FBQ1JxQixTQUFTWiwwRkFBcUJBLENBQUNjO0lBQ2pDLEdBQUc7UUFBQ0E7S0FBSTtJQUVSLE1BQU1LLGFBQWEsQ0FBQ0M7UUFDbEJSLFNBQVNiLHFFQUFVQSxDQUFDcUIsRUFBRUMsTUFBTSxDQUFDQyxZQUFZLENBQUM7UUFDMUNYLGNBQWNTLEVBQUVDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDO1FBQ3BDYixlQUFlLENBQUNEO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNlO1FBQVFDLFdBQVc5Qix5RUFBZTs7MEJBQ2pDLDhEQUFDK0I7Z0JBQUdELFdBQVc5QixnRkFBc0I7MEJBQUdTOzs7Ozs7MEJBQ3hDLDhEQUFDdUI7Z0JBQUdGLFdBQVc5QiwrRUFBcUI7O29CQUNqQ1MsVUFBVSw4QkFDVDs7MENBQ0UsOERBQUN3QjtnQ0FBR0gsV0FBVzlCLGlGQUF1QjswQ0FDcEMsNEVBQUNrQztvQ0FDQ0osV0FBVzlCLGlGQUF1QjtvQ0FDbENtQyxTQUFTO3dDQUNQakIsU0FBU2Qsb0VBQVNBO29DQUNwQjs7c0RBRUEsOERBQUNILG1EQUFLQTs0Q0FDSm1DLEtBQUk7NENBQ0pDLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JDLEtBQUk7NENBQ0pDLFFBQVE7Ozs7OztzREFFViw4REFBQ0M7NENBQUtYLFdBQVc5QiwwRkFBNkI7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdwRCw4REFBQ2lDO2dDQUNDSCxXQUFXLEdBQ1RoQixPQURZZCxpRkFBdUIsRUFBQyxLQUVyQyxPQURDYyxlQUFlZCwwRkFBNkI7O2tEQUc5Qyw4REFBQ3lDO3dDQUNDWCxXQUFXOUIsdUZBQTBCO3dDQUNyQ21DLFNBQVM7NENBQ1BwQixlQUFlLENBQUNEO3dDQUNsQjtrREFFQ0U7Ozs7OztvQ0FFRkYsNkJBQ0MsOERBQUNrQjt3Q0FDQ0YsV0FBVyxHQUNUaEIsT0FEWWQsMEZBQTZCLEVBQUMsS0FFM0MsT0FEQ2MsZUFBZWQsZ0dBQW1DOzswREFHcEQsOERBQUNpQztnREFDQ1Msb0JBQWlCO2dEQUNqQkMsb0JBQWlCO2dEQUNqQlIsU0FBU1Y7MERBQ1Y7Ozs7OzswREFHRCw4REFBQ1E7Z0RBQ0NTLG9CQUFpQjtnREFDakJDLG9CQUFpQjtnREFDakJSLFNBQVNWOzBEQUNWOzs7Ozs7MERBR0QsOERBQUNRO2dEQUNDUyxvQkFBaUI7Z0RBQ2pCQyxvQkFBaUI7Z0RBQ2pCUixTQUFTVjswREFDVjs7Ozs7OzBEQUdELDhEQUFDUTtnREFDQ1Msb0JBQWlCO2dEQUNqQkMsb0JBQWlCO2dEQUNqQlIsU0FBU1Y7MERBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVFWTixZQUNDeUIsTUFBTUMsT0FBTyxDQUFDMUIsYUFDZEEsU0FBUzJCLE1BQU0sR0FBRyxLQUNsQjNCLFNBQ0c0QixLQUFLLENBQUMsR0FBR25DLE9BQ1RvQyxHQUFHLENBQUM7NEJBQUMsRUFBRUMsR0FBRyxFQUFFLEdBQUdDLGNBQWM7NkNBQzVCLDhEQUFDbkQsMkNBQUlBOzRCQUFZLEdBQUdtRCxZQUFZOzJCQUFyQkQ7Ozs7Ozs7Ozs7OztZQUdsQnJDLFFBQVFPLFNBQVMyQixNQUFNLGtCQUN0Qiw4REFBQ1o7Z0JBQU9KLFdBQVc5Qix1RkFBMEI7Z0JBQUVtQyxTQUFTWjswQkFBZ0I7Ozs7Ozs7Ozs7OztBQU1oRjtHQWxIZ0JmOztRQUtHTixvREFBV0E7UUFDWEMsb0RBQVdBOzs7S0FOZEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9wcm9kdWN0c0Jsb2NrL1Byb2R1Y3RzQmxvY2suanN4PzQ3MDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZC/QoWFyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wcm9kdWN0c0Jsb2NrLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0RmlsdGVyLCBzb3J0RmlsdGVyIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL2ZpbHRlclNsaWNlXCI7XG5pbXBvcnQgeyBmZXRjaEZpbHRlcmVkUHJvZHVjdHMgfSBmcm9tIFwiQC9yZWR1eC9taWRkbGV3YXJlcy9maWx0ZXJlZFByb2R1Y3RzXCI7XG5pbXBvcnQgeyBmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvZHVjdHNCbG9jayh7IHRpdGxlLCBzZWFyY2hQYXJhbXMsIG51bSB9KSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUobnVtKTtcbiAgY29uc3QgW3NvcnRPcHRpb25zLCBzZXRTb3J0T3B0aW9uc10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW29wdGlvblR5cGUsIHNldE9wdGlvblR5cGVdID0gdXNlU3RhdGUoXCLQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XCIpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3RvcihmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IpO1xuICBjb25zdCB1cmwgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcykudG9TdHJpbmcoKTtcblxuICBjb25zdCBoYW5kbGVMb2FkTW9yZSA9ICgpID0+IHtcbiAgICBzZXRDb3VudCgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyBudW0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzKHVybCkpO1xuICB9LCBbdXJsXSk7XG5cbiAgY29uc3QgaGFuZGxlU29ydCA9IChlKSA9PiB7XG4gICAgZGlzcGF0Y2goc29ydEZpbHRlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvbi10eXBlXCIpKSk7XG4gICAgc2V0T3B0aW9uVHlwZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvbi10ZXh0XCIpKTtcbiAgICBzZXRTb3J0T3B0aW9ucyghc29ydE9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrYF19PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fdGl0bGVgXX0+e3RpdGxlfTwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19saXN0YF19PlxuICAgICAgICB7dGl0bGUgPT09IFwi0KPRgdGWINCy0LjRgNC+0LHQuFwiICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fYnV0dG9uYF19PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19maWx0ZXJgXX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRGaWx0ZXIoKSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZ3MvZmlsdGVyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAgICAgYWx0PVwidG8tZmF2XCJcbiAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX2ZpbHRlci0tdGV4dGBdfT7QpNGW0LvRjNGC0YDQuDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW2BibG9ja19fYnV0dG9uYF19ICR7XG4gICAgICAgICAgICAgICAgc29ydE9wdGlvbnMgJiYgc3R5bGVzW2BibG9ja19fYnV0dG9uLS1zb3J0YF1cbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19zb3J0LXR5cGVgXX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRTb3J0T3B0aW9ucyghc29ydE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7b3B0aW9uVHlwZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7c29ydE9wdGlvbnMgJiYgKFxuICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJibG9ja19fc29ydC1vcHRpb25zXCJdfSAke1xuICAgICAgICAgICAgICAgICAgICBzb3J0T3B0aW9ucyAmJiBzdHlsZXNbXCJibG9ja19fc29ydC1vcHRpb25zLS1vcGVuXCJdXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vcHRpb24tdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10ZXh0PVwi0J3QsNC50L3QvtCy0ZbRiNGWXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU29ydH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0J3QsNC50L3QvtCy0ZbRiNGWXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXR5cGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXRleHQ9XCLQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU29ydH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10eXBlPVwiY3VycmVudFByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vcHRpb24tdGV4dD1cItCS0ZbQtCDQvdCw0LnQvNC10L3RiNC+0Zcg0YbRltC90LhcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTb3J0fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDQktGW0LQg0L3QsNC50LzQtdC90YjQvtGXINGG0ZbQvdC4XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXR5cGU9XCItY3VycmVudFByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1vcHRpb24tdGV4dD1cItCS0ZbQtCDQvdCw0LnQsdGW0LvRjNGI0L7RlyDRhtGW0L3QuFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNvcnR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgINCS0ZbQtCDQvdCw0LnQsdGW0LvRjNGI0L7RlyDRhtGW0L3QuFxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb2R1Y3RzICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9kdWN0cykgJiZcbiAgICAgICAgICBwcm9kdWN0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgcHJvZHVjdHNcbiAgICAgICAgICAgIC5zbGljZSgwLCBjb3VudClcbiAgICAgICAgICAgIC5tYXAoKHsgX2lkLCAuLi5wcm9kdWN0UHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e19pZH0gey4uLnByb2R1Y3RQcm9wc30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIHtjb3VudCA8IHByb2R1Y3RzLmxlbmd0aCAmJiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19zaG93LW1vcmVgXX0gb25DbGljaz17aGFuZGxlTG9hZE1vcmV9PlxuICAgICAgICAgINCf0L7QutCw0LfQsNGC0Lgg0YnQtVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsInN0eWxlcyIsIkltYWdlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldEZpbHRlciIsInNvcnRGaWx0ZXIiLCJmZXRjaEZpbHRlcmVkUHJvZHVjdHMiLCJmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IiLCJQcm9kdWN0c0Jsb2NrIiwidGl0bGUiLCJzZWFyY2hQYXJhbXMiLCJudW0iLCJjb3VudCIsInNldENvdW50Iiwic29ydE9wdGlvbnMiLCJzZXRTb3J0T3B0aW9ucyIsIm9wdGlvblR5cGUiLCJzZXRPcHRpb25UeXBlIiwiZGlzcGF0Y2giLCJwcm9kdWN0cyIsInVybCIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiaGFuZGxlTG9hZE1vcmUiLCJwcmV2U3RhdGUiLCJoYW5kbGVTb3J0IiwiZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMiIsInVsIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwcmlvcml0eSIsInNwYW4iLCJkYXRhLW9wdGlvbi10eXBlIiwiZGF0YS1vcHRpb24tdGV4dCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInNsaWNlIiwibWFwIiwiX2lkIiwicHJvZHVjdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\n"));

/***/ })

});