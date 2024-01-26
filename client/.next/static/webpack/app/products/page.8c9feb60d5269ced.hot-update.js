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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductsBlock: function() { return /* binding */ ProductsBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productsBlock.module.scss */ \"(app-pages-browser)/./src/app/ui/productsBlock/productsBlock.module.scss\");\n/* harmony import */ var _productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var _redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/middlewares/filteredProducts */ \"(app-pages-browser)/./src/redux/middlewares/filteredProducts.js\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* __next_internal_client_entry_do_not_use__ ProductsBlock auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ProductsBlock(param) {\n    let { title, searchParams, num } = param;\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(num);\n    const [sortOptions, setSortOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [optionType, setOptionType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        text: \"За замовчуванням\",\n        type: \"default\"\n    });\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_6__.filteredProductsSelector);\n    const url = new URLSearchParams(searchParams).toString();\n    const handleLoadMore = ()=>{\n        setCount((prevState)=>prevState + num);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_middlewares_filteredProducts__WEBPACK_IMPORTED_MODULE_5__.fetchFilteredProducts)(url));\n    }, [\n        url\n    ]);\n    const handleSort = (e)=>{\n        setOptionType(e.target.getAttribute(\"data-option-type\"));\n        setSortOptions(!sortOptions);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__title),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__list),\n                children: [\n                    title === \"Усі вироби\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__button),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__filter),\n                                    onClick: ()=>{\n                                        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_4__.setFilter)());\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"/imgs/filter.png\",\n                                            width: 20,\n                                            height: 20,\n                                            alt: \"to-fav\",\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__filter--text\"]),\n                                            children: \"Фільтри\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default().block__button),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__sort-type\"]),\n                                        onClick: ()=>{\n                                            setSortOptions(!sortOptions);\n                                        },\n                                        children: optionType.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this),\n                                    sortOptions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__sort-options\"]),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"За замовчуванням\",\n                                                onClick: handleSort,\n                                                children: \"За замовчуванням\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"Ціна від найменшої\",\n                                                onClick: handleSort,\n                                                children: \"Ціна від найменшої\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"Ціна від найбільшої\",\n                                                onClick: handleSort,\n                                                children: \"Ціна від найбільшої\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                \"data-option-type\": \"По даті додавання\",\n                                                onClick: handleSort,\n                                                children: \"По даті додавання\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    products && Array.isArray(products) && products.length > 0 && products.slice(0, count).map((param)=>{\n                        let { _id, ...productProps } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                            ...productProps\n                        }, _id, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 15\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            count < products.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_productsBlock_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"block__show-more\"]),\n                onClick: handleLoadMore,\n                children: \"Показати ще\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/productsBlock/ProductsBlock.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductsBlock, \"RSz4kAP3DugKrkROpNNXsMxb7jg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = ProductsBlock;\nvar _c;\n$RefreshReg$(_c, \"ProductsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDUjtBQUNhO0FBQ2xCO0FBQ3dCO0FBQ0E7QUFDc0I7QUFDTDtBQUVqRSxTQUFTVSxjQUFjLEtBQTRCO1FBQTVCLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxHQUFHLEVBQUUsR0FBNUI7O0lBQzVCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQ1k7SUFDbkMsTUFBTSxDQUFDRyxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNpQixZQUFZQyxjQUFjLEdBQUdsQiwrQ0FBUUEsQ0FBQztRQUMzQ21CLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBRUEsTUFBTUMsV0FBV2pCLHdEQUFXQTtJQUM1QixNQUFNa0IsV0FBV2pCLHdEQUFXQSxDQUFDRyxpRkFBd0JBO0lBQ3JELE1BQU1lLE1BQU0sSUFBSUMsZ0JBQWdCYixjQUFjYyxRQUFRO0lBRXRELE1BQU1DLGlCQUFpQjtRQUNyQlosU0FBUyxDQUFDYSxZQUFjQSxZQUFZZjtJQUN0QztJQUVBYixnREFBU0EsQ0FBQztRQUNSc0IsU0FBU2QsMEZBQXFCQSxDQUFDZ0I7SUFDakMsR0FBRztRQUFDQTtLQUFJO0lBRVIsTUFBTUssYUFBYSxDQUFDQztRQUNsQlgsY0FBY1csRUFBRUMsTUFBTSxDQUFDQyxZQUFZLENBQUM7UUFDcENmLGVBQWUsQ0FBQ0Q7SUFDbEI7SUFFQSxxQkFDRSw4REFBQ2lCO1FBQVFDLFdBQVcvQix5RUFBZTs7MEJBQ2pDLDhEQUFDZ0M7Z0JBQUdELFdBQVcvQixnRkFBc0I7MEJBQUdROzs7Ozs7MEJBQ3hDLDhEQUFDeUI7Z0JBQUdGLFdBQVcvQiwrRUFBcUI7O29CQUNqQ1EsVUFBVSw4QkFDVDs7MENBQ0UsOERBQUMwQjtnQ0FBR0gsV0FBVy9CLGlGQUF1QjswQ0FDcEMsNEVBQUNtQztvQ0FDQ0osV0FBVy9CLGlGQUF1QjtvQ0FDbENvQyxTQUFTO3dDQUNQakIsU0FBU2Ysb0VBQVNBO29DQUNwQjs7c0RBRUEsOERBQUNILG1EQUFLQTs0Q0FDSm9DLEtBQUk7NENBQ0pDLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JDLEtBQUk7NENBQ0pDLFFBQVE7Ozs7OztzREFFViw4REFBQ0M7NENBQUtYLFdBQVcvQiwwRkFBNkI7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdwRCw4REFBQ2tDO2dDQUFHSCxXQUFXL0IsaUZBQXVCOztrREFDcEMsOERBQUMwQzt3Q0FDQ1gsV0FBVy9CLHVGQUEwQjt3Q0FDckNvQyxTQUFTOzRDQUNQdEIsZUFBZSxDQUFDRDt3Q0FDbEI7a0RBRUNFLFdBQVdFLElBQUk7Ozs7OztvQ0FFakJKLDZCQUNDLDhEQUFDb0I7d0NBQUdGLFdBQVcvQiwwRkFBNkI7OzBEQUMxQyw4REFBQ2tDO2dEQUFHUyxvQkFBaUI7Z0RBQW1CUCxTQUFTVjswREFBWTs7Ozs7OzBEQUc3RCw4REFBQ1E7Z0RBQ0NTLG9CQUFpQjtnREFDakJQLFNBQVNWOzBEQUNWOzs7Ozs7MERBR0QsOERBQUNRO2dEQUNDUyxvQkFBaUI7Z0RBQ2pCUCxTQUFTVjswREFDVjs7Ozs7OzBEQUdELDhEQUFDUTtnREFBR1Msb0JBQWlCO2dEQUFvQlAsU0FBU1Y7MERBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVF2RU4sWUFDQ3dCLE1BQU1DLE9BQU8sQ0FBQ3pCLGFBQ2RBLFNBQVMwQixNQUFNLEdBQUcsS0FDbEIxQixTQUNHMkIsS0FBSyxDQUFDLEdBQUdwQyxPQUNUcUMsR0FBRyxDQUFDOzRCQUFDLEVBQUVDLEdBQUcsRUFBRSxHQUFHQyxjQUFjOzZDQUM1Qiw4REFBQ25ELDJDQUFJQTs0QkFBWSxHQUFHbUQsWUFBWTsyQkFBckJEOzs7Ozs7Ozs7Ozs7WUFHbEJ0QyxRQUFRUyxTQUFTMEIsTUFBTSxrQkFDdEIsOERBQUNYO2dCQUFPSixXQUFXL0IsdUZBQTBCO2dCQUFFb0MsU0FBU1o7MEJBQWdCOzs7Ozs7Ozs7Ozs7QUFNaEY7R0FsR2dCakI7O1FBUUdMLG9EQUFXQTtRQUNYQyxvREFBV0E7OztLQVRkSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL3Byb2R1Y3RzQmxvY2svUHJvZHVjdHNCbG9jay5qc3g/NDcwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jYXJkL9ChYXJkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3Byb2R1Y3RzQmxvY2subW9kdWxlLnNjc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRGaWx0ZXIgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvZmlsdGVyU2xpY2VcIjtcbmltcG9ydCB7IGZldGNoRmlsdGVyZWRQcm9kdWN0cyB9IGZyb20gXCJAL3JlZHV4L21pZGRsZXdhcmVzL2ZpbHRlcmVkUHJvZHVjdHNcIjtcbmltcG9ydCB7IGZpbHRlcmVkUHJvZHVjdHNTZWxlY3RvciB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9kdWN0c1NsaWNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9kdWN0c0Jsb2NrKHsgdGl0bGUsIHNlYXJjaFBhcmFtcywgbnVtIH0pIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShudW0pO1xuICBjb25zdCBbc29ydE9wdGlvbnMsIHNldFNvcnRPcHRpb25zXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbb3B0aW9uVHlwZSwgc2V0T3B0aW9uVHlwZV0gPSB1c2VTdGF0ZSh7XG4gICAgdGV4dDogXCLQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XCIsXG4gICAgdHlwZTogXCJkZWZhdWx0XCIsXG4gIH0pO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3RvcihmaWx0ZXJlZFByb2R1Y3RzU2VsZWN0b3IpO1xuICBjb25zdCB1cmwgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcykudG9TdHJpbmcoKTtcblxuICBjb25zdCBoYW5kbGVMb2FkTW9yZSA9ICgpID0+IHtcbiAgICBzZXRDb3VudCgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyBudW0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hGaWx0ZXJlZFByb2R1Y3RzKHVybCkpO1xuICB9LCBbdXJsXSk7XG5cbiAgY29uc3QgaGFuZGxlU29ydCA9IChlKSA9PiB7XG4gICAgc2V0T3B0aW9uVHlwZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvbi10eXBlXCIpKTtcbiAgICBzZXRTb3J0T3B0aW9ucyghc29ydE9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrYF19PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fdGl0bGVgXX0+e3RpdGxlfTwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19saXN0YF19PlxuICAgICAgICB7dGl0bGUgPT09IFwi0KPRgdGWINCy0LjRgNC+0LHQuFwiICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fYnV0dG9uYF19PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19maWx0ZXJgXX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRGaWx0ZXIoKSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZ3MvZmlsdGVyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAgICAgYWx0PVwidG8tZmF2XCJcbiAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX2ZpbHRlci0tdGV4dGBdfT7QpNGW0LvRjNGC0YDQuDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fYnV0dG9uYF19PlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BibG9ja19fc29ydC10eXBlYF19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0U29ydE9wdGlvbnMoIXNvcnRPcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge29wdGlvblR5cGUudGV4dH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7c29ydE9wdGlvbnMgJiYgKFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlc1tgYmxvY2tfX3NvcnQtb3B0aW9uc2BdfT5cbiAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLW9wdGlvbi10eXBlPVwi0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFwiIG9uQ2xpY2s9e2hhbmRsZVNvcnR9PlxuICAgICAgICAgICAgICAgICAgICDQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uLXR5cGU9XCLQptGW0L3QsCDQstGW0LQg0L3QsNC50LzQtdC90YjQvtGXXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU29ydH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0KbRltC90LAg0LLRltC0INC90LDQudC80LXQvdGI0L7Rl1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBkYXRhLW9wdGlvbi10eXBlPVwi0KbRltC90LAg0LLRltC0INC90LDQudCx0ZbQu9GM0YjQvtGXXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU29ydH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0KbRltC90LAg0LLRltC0INC90LDQudCx0ZbQu9GM0YjQvtGXXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtb3B0aW9uLXR5cGU9XCLQn9C+INC00LDRgtGWINC00L7QtNCw0LLQsNC90L3Rj1wiIG9uQ2xpY2s9e2hhbmRsZVNvcnR9PlxuICAgICAgICAgICAgICAgICAgICDQn9C+INC00LDRgtGWINC00L7QtNCw0LLQsNC90L3Rj1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb2R1Y3RzICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9kdWN0cykgJiZcbiAgICAgICAgICBwcm9kdWN0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgcHJvZHVjdHNcbiAgICAgICAgICAgIC5zbGljZSgwLCBjb3VudClcbiAgICAgICAgICAgIC5tYXAoKHsgX2lkLCAuLi5wcm9kdWN0UHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e19pZH0gey4uLnByb2R1Y3RQcm9wc30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIHtjb3VudCA8IHByb2R1Y3RzLmxlbmd0aCAmJiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbYGJsb2NrX19zaG93LW1vcmVgXX0gb25DbGljaz17aGFuZGxlTG9hZE1vcmV9PlxuICAgICAgICAgINCf0L7QutCw0LfQsNGC0Lgg0YnQtVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsInN0eWxlcyIsIkltYWdlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldEZpbHRlciIsImZldGNoRmlsdGVyZWRQcm9kdWN0cyIsImZpbHRlcmVkUHJvZHVjdHNTZWxlY3RvciIsIlByb2R1Y3RzQmxvY2siLCJ0aXRsZSIsInNlYXJjaFBhcmFtcyIsIm51bSIsImNvdW50Iiwic2V0Q291bnQiLCJzb3J0T3B0aW9ucyIsInNldFNvcnRPcHRpb25zIiwib3B0aW9uVHlwZSIsInNldE9wdGlvblR5cGUiLCJ0ZXh0IiwidHlwZSIsImRpc3BhdGNoIiwicHJvZHVjdHMiLCJ1cmwiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsImhhbmRsZUxvYWRNb3JlIiwicHJldlN0YXRlIiwiaGFuZGxlU29ydCIsImUiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJ1bCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicHJpb3JpdHkiLCJzcGFuIiwiZGF0YS1vcHRpb24tdHlwZSIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInNsaWNlIiwibWFwIiwiX2lkIiwicHJvZHVjdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\n"));

/***/ })

});