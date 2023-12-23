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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CurrentProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _itemNo_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemNo.module.scss */ \"(app-pages-browser)/./src/app/product/[itemNo]/itemNo.module.scss\");\n/* harmony import */ var _itemNo_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction CurrentProduct(param) {\n    let { searchParams } = param;\n    const { name, currentPrice, imageUrls, itemNo, quantity } = searchParams;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"current-product\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"current-product__title\"]),\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            quantity > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"current-product__quantity\"]),\n                children: \"Є\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                lineNumber: 11,\n                columnNumber: 24\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"current-product__item-no\"]),\n                children: itemNo\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"current-product__img-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"current-product__fav\"]),\n                        src: \"/imgs/add-to-fav.png\",\n                        width: 35,\n                        height: 35,\n                        alt: \"to-fav\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"current-product__img\"]),\n                        src: imageUrls,\n                        width: 320,\n                        height: 320,\n                        alt: name\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_itemNo_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"current-product__price\"]),\n                children: [\n                    currentPrice,\n                    \" грн\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/product/[itemNo]/page.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = CurrentProduct;\nvar _c;\n$RefreshReg$(_c, \"CurrentProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdC9baXRlbU5vXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNEM7QUFDRjtBQUNYO0FBQ2hCLFNBQVNHLGVBQWUsS0FBZ0I7UUFBaEIsRUFBRUMsWUFBWSxFQUFFLEdBQWhCO0lBQ3JDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0w7SUFFNUQscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVdWLCtFQUF5Qjs7MEJBQ3ZDLDhEQUFDVztnQkFBR0QsV0FBV1Ysc0ZBQWdDOzBCQUFHSTs7Ozs7O1lBQ2pESSxXQUFXLG1CQUFLLDhEQUFDSTtnQkFBRUYsV0FBV1YseUZBQW1DOzBCQUFFOzs7Ozs7MEJBQ3BFLDhEQUFDWTtnQkFBRUYsV0FBV1Ysd0ZBQWtDOzBCQUFHTzs7Ozs7OzBCQUNuRCw4REFBQ0s7Z0JBQUVGLFdBQVdWLDhGQUF3Qzs7a0NBQ3BELDhEQUFDQyxtREFBS0E7d0JBQ0pTLFdBQVdWLG9GQUE4Qjt3QkFDekNhLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLEtBQUk7Ozs7OztrQ0FFTiw4REFBQ2YsbURBQUtBO3dCQUNKUyxXQUFXVixvRkFBOEI7d0JBQ3pDYSxLQUFLUDt3QkFDTFEsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBS1o7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ1E7Z0JBQUVGLFdBQVdWLHNGQUFnQzs7b0JBQUdLO29CQUFhOzs7Ozs7Ozs7Ozs7O0FBR3BFO0tBM0J3QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9kdWN0L1tpdGVtTm9dL3BhZ2UuanN4P2QyY2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2l0ZW1Oby5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXJyZW50UHJvZHVjdCh7IHNlYXJjaFBhcmFtcyB9KSB7XG4gIGNvbnN0IHsgbmFtZSwgY3VycmVudFByaWNlLCBpbWFnZVVybHMsIGl0ZW1ObywgcXVhbnRpdHkgfSA9IHNlYXJjaFBhcmFtcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGN1cnJlbnQtcHJvZHVjdGBdfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlc1tgY3VycmVudC1wcm9kdWN0X190aXRsZWBdfT57bmFtZX08L2gzPlxuICAgICAge3F1YW50aXR5ID4gMCAmJiA8cCBjbGFzc05hbWU9e3N0eWxlc1tgY3VycmVudC1wcm9kdWN0X19xdWFudGl0eWBdfT7QhDwvcD59XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tgY3VycmVudC1wcm9kdWN0X19pdGVtLW5vYF19PntpdGVtTm99PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbYGN1cnJlbnQtcHJvZHVjdF9faW1nLWNvbnRhaW5lcmBdfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGN1cnJlbnQtcHJvZHVjdF9fZmF2YF19XG4gICAgICAgICAgc3JjPVwiL2ltZ3MvYWRkLXRvLWZhdi5wbmdcIlxuICAgICAgICAgIHdpZHRoPXszNX1cbiAgICAgICAgICBoZWlnaHQ9ezM1fVxuICAgICAgICAgIGFsdD1cInRvLWZhdlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BjdXJyZW50LXByb2R1Y3RfX2ltZ2BdfVxuICAgICAgICAgIHNyYz17aW1hZ2VVcmxzfVxuICAgICAgICAgIHdpZHRoPXszMjB9XG4gICAgICAgICAgaGVpZ2h0PXszMjB9XG4gICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAvPlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbYGN1cnJlbnQtcHJvZHVjdF9fcHJpY2VgXX0+e2N1cnJlbnRQcmljZX0g0LPRgNC9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlcyIsIkltYWdlIiwiQ3VycmVudFByb2R1Y3QiLCJzZWFyY2hQYXJhbXMiLCJuYW1lIiwiY3VycmVudFByaWNlIiwiaW1hZ2VVcmxzIiwiaXRlbU5vIiwicXVhbnRpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/product/[itemNo]/page.jsx\n"));

/***/ })

});