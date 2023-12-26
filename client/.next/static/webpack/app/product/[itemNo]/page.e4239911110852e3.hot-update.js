"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product/[itemNo]/page",{

/***/ "(app-pages-browser)/./src/app/product/[itemNo]/page.jsx":
/*!*******************************************!*\
  !*** ./src/app/product/[itemNo]/page.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CurrentProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./itemNo.module.scss */ \"(app-pages-browser)/./src/app/product/[itemNo]/itemNo.module.scss\");\n/* harmony import */ var _itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_middlewares_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/middlewares/cart */ \"(app-pages-browser)/./src/redux/middlewares/cart.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CurrentProduct(param) {\n    let { searchParams } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const { name, currentPrice, imageUrls, itemNo, quantity, categories, date, hot, sale } = searchParams;\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const decrease = ()=>{\n        number !== 1 ? setNumber((prevState)=>prevState - 1) : null;\n    };\n    const increase = ()=>{\n        number >= 1 && quantity > number ? setNumber((prevState)=>prevState + 1) : null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product__title\"]),\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product__quantity\"]),\n                children: quantity > 0 ? \"Є\" : \"Немає\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product__item-no\"]),\n                children: itemNo\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product__img-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product__fav\"]),\n                        src: \"/imgs/add-to-fav.png\",\n                        width: 45,\n                        height: 45,\n                        alt: \"to-fav\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product__img\"]),\n                        src: imageUrls,\n                        width: 320,\n                        height: 320,\n                        alt: name,\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product__price\"]),\n                children: [\n                    currentPrice * number,\n                    \" грн\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product__count\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product__decrease\"]),\n                        onClick: ()=>{\n                            decrease();\n                        },\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product__number\"]),\n                        children: number\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product__increase\"]),\n                        onClick: ()=>{\n                            increase();\n                        },\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    dispatch(addToCartFunc({\n                        name,\n                        currentPrice,\n                        imageUrls,\n                        itemNo,\n                        quantity,\n                        categories,\n                        date,\n                        hot,\n                        sale,\n                        count: number\n                    }));\n                },\n                className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"current-product__add-to-cart\"]),\n                children: \"Додати до корзини\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(CurrentProduct, \"WMeZ0T0CeDghr/uQ4aeNc4QikBc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = CurrentProduct;\nvar _c;\n$RefreshReg$(_c, \"CurrentProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdC9baXRlbU5vXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFMEM7QUFDWDtBQUNFO0FBQ1M7QUFDa0I7QUFFN0MsU0FBU0ssZUFBZSxLQUFnQjtRQUFoQixFQUFFQyxZQUFZLEVBQUUsR0FBaEI7O0lBQ3JDLE1BQU1DLFdBQVdKLHdEQUFXQTtJQUM1QixNQUFNLEVBQ0pLLElBQUksRUFDSkMsWUFBWSxFQUNaQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxVQUFVLEVBQ1ZDLElBQUksRUFDSkMsR0FBRyxFQUNIQyxJQUFJLEVBQ0wsR0FBR1Y7SUFDSixNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1pQixXQUFXO1FBQ2ZGLFdBQVcsSUFBSUMsVUFBVSxDQUFDRSxZQUFjQSxZQUFZLEtBQUs7SUFDM0Q7SUFDQSxNQUFNQyxXQUFXO1FBQ2ZKLFVBQVUsS0FBS0wsV0FBV0ssU0FDdEJDLFVBQVUsQ0FBQ0UsWUFBY0EsWUFBWSxLQUNyQztJQUNOO0lBQ0EscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVd2QiwrRUFBeUI7OzBCQUN2Qyw4REFBQ3dCO2dCQUFHRCxXQUFXdkIsc0ZBQWdDOzBCQUFHUTs7Ozs7OzBCQUNsRCw4REFBQ2lCO2dCQUFFRixXQUFXdkIseUZBQW1DOzBCQUM5Q1ksV0FBVyxJQUFJLE1BQU07Ozs7OzswQkFFeEIsOERBQUNhO2dCQUFFRixXQUFXdkIsd0ZBQWtDOzBCQUFHVzs7Ozs7OzBCQUNuRCw4REFBQ2M7Z0JBQUVGLFdBQVd2Qiw4RkFBd0M7O2tDQUNwRCw4REFBQ0MsbURBQUtBO3dCQUNKc0IsV0FBV3ZCLG9GQUE4Qjt3QkFDekMwQixLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJO3dCQUNKQyxRQUFROzs7Ozs7a0NBRVYsOERBQUM3QixtREFBS0E7d0JBQ0pzQixXQUFXdkIsb0ZBQThCO3dCQUN6QzBCLEtBQUtoQjt3QkFDTGlCLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLEtBQUtyQjt3QkFDTHNCLFFBQVE7Ozs7Ozs7Ozs7OzswQkFHWiw4REFBQ0w7Z0JBQUVGLFdBQVd2QixzRkFBZ0M7O29CQUMzQ1MsZUFBZVE7b0JBQU87Ozs7Ozs7MEJBRXpCLDhEQUFDSztnQkFBSUMsV0FBV3ZCLHNGQUFnQzs7a0NBQzlDLDhEQUFDK0I7d0JBQ0NSLFdBQVd2Qix5RkFBbUM7d0JBQzlDZ0MsU0FBUzs0QkFDUGI7d0JBQ0Y7a0NBQ0Q7Ozs7OztrQ0FHRCw4REFBQ2M7d0JBQUtWLFdBQVd2Qix1RkFBaUM7a0NBQUdpQjs7Ozs7O2tDQUNyRCw4REFBQ2M7d0JBQ0NSLFdBQVd2Qix5RkFBbUM7d0JBQzlDZ0MsU0FBUzs0QkFDUFg7d0JBQ0Y7a0NBQ0Q7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ1U7Z0JBQ0NDLFNBQVM7b0JBQ1B6QixTQUNFMkIsY0FBYzt3QkFDWjFCO3dCQUNBQzt3QkFDQUM7d0JBQ0FDO3dCQUNBQzt3QkFDQUM7d0JBQ0FDO3dCQUNBQzt3QkFDQUM7d0JBQ0FtQixPQUFPbEI7b0JBQ1Q7Z0JBRUo7Z0JBQ0FNLFdBQVd2Qiw0RkFBc0M7MEJBQ2xEOzs7Ozs7Ozs7Ozs7QUFLUDtHQTVGd0JLOztRQUNMRixvREFBV0E7OztLQURORSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1Y3QvW2l0ZW1Ob10vcGFnZS5qc3g/ZDJjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pdGVtTm8ubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhZGRTZXZlcmFsVG9DYXJ0IH0gZnJvbSBcIkAvcmVkdXgvbWlkZGxld2FyZXMvY2FydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXJyZW50UHJvZHVjdCh7IHNlYXJjaFBhcmFtcyB9KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgY3VycmVudFByaWNlLFxuICAgIGltYWdlVXJscyxcbiAgICBpdGVtTm8sXG4gICAgcXVhbnRpdHksXG4gICAgY2F0ZWdvcmllcyxcbiAgICBkYXRlLFxuICAgIGhvdCxcbiAgICBzYWxlLFxuICB9ID0gc2VhcmNoUGFyYW1zO1xuICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IGRlY3JlYXNlID0gKCkgPT4ge1xuICAgIG51bWJlciAhPT0gMSA/IHNldE51bWJlcigocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgLSAxKSA6IG51bGw7XG4gIH07XG4gIGNvbnN0IGluY3JlYXNlID0gKCkgPT4ge1xuICAgIG51bWJlciA+PSAxICYmIHF1YW50aXR5ID4gbnVtYmVyXG4gICAgICA/IHNldE51bWJlcigocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAxKVxuICAgICAgOiBudWxsO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGN1cnJlbnQtcHJvZHVjdGBdfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlc1tgY3VycmVudC1wcm9kdWN0X190aXRsZWBdfT57bmFtZX08L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbYGN1cnJlbnQtcHJvZHVjdF9fcXVhbnRpdHlgXX0+XG4gICAgICAgIHtxdWFudGl0eSA+IDAgPyBcItCEXCIgOiBcItCd0LXQvNCw0ZRcIn1cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW2BjdXJyZW50LXByb2R1Y3RfX2l0ZW0tbm9gXX0+e2l0ZW1Ob308L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tgY3VycmVudC1wcm9kdWN0X19pbWctY29udGFpbmVyYF19PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgY3VycmVudC1wcm9kdWN0X19mYXZgXX1cbiAgICAgICAgICBzcmM9XCIvaW1ncy9hZGQtdG8tZmF2LnBuZ1wiXG4gICAgICAgICAgd2lkdGg9ezQ1fVxuICAgICAgICAgIGhlaWdodD17NDV9XG4gICAgICAgICAgYWx0PVwidG8tZmF2XCJcbiAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAvPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgY3VycmVudC1wcm9kdWN0X19pbWdgXX1cbiAgICAgICAgICBzcmM9e2ltYWdlVXJsc31cbiAgICAgICAgICB3aWR0aD17MzIwfVxuICAgICAgICAgIGhlaWdodD17MzIwfVxuICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAvPlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbYGN1cnJlbnQtcHJvZHVjdF9fcHJpY2VgXX0+XG4gICAgICAgIHtjdXJyZW50UHJpY2UgKiBudW1iZXJ9INCz0YDQvVxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgY3VycmVudC1wcm9kdWN0X19jb3VudGBdfT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BjdXJyZW50LXByb2R1Y3RfX2RlY3JlYXNlYF19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgZGVjcmVhc2UoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgLVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbYGN1cnJlbnQtcHJvZHVjdF9fbnVtYmVyYF19PntudW1iZXJ9PC9zcGFuPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGN1cnJlbnQtcHJvZHVjdF9faW5jcmVhc2VgXX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpbmNyZWFzZSgpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICArXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgIGFkZFRvQ2FydEZ1bmMoe1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBjdXJyZW50UHJpY2UsXG4gICAgICAgICAgICAgIGltYWdlVXJscyxcbiAgICAgICAgICAgICAgaXRlbU5vLFxuICAgICAgICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICAgaG90LFxuICAgICAgICAgICAgICBzYWxlLFxuICAgICAgICAgICAgICBjb3VudDogbnVtYmVyLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgY3VycmVudC1wcm9kdWN0X19hZGQtdG8tY2FydGBdfVxuICAgICAgPlxuICAgICAgICDQlNC+0LTQsNGC0Lgg0LTQviDQutC+0YDQt9C40L3QuFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwiYWRkU2V2ZXJhbFRvQ2FydCIsIkN1cnJlbnRQcm9kdWN0Iiwic2VhcmNoUGFyYW1zIiwiZGlzcGF0Y2giLCJuYW1lIiwiY3VycmVudFByaWNlIiwiaW1hZ2VVcmxzIiwiaXRlbU5vIiwicXVhbnRpdHkiLCJjYXRlZ29yaWVzIiwiZGF0ZSIsImhvdCIsInNhbGUiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJkZWNyZWFzZSIsInByZXZTdGF0ZSIsImluY3JlYXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwcmlvcml0eSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwiYWRkVG9DYXJ0RnVuYyIsImNvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/product/[itemNo]/page.jsx\n"));

/***/ })

});