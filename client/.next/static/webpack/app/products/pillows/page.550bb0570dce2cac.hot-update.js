"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/pillows/page",{

/***/ "(app-pages-browser)/./src/app/ui/pillows/Pillows.jsx":
/*!****************************************!*\
  !*** ./src/app/ui/pillows/Pillows.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pillows: function() { return /* binding */ Pillows; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../productsBlock/ProductsBlock */ \"(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* __next_internal_client_entry_do_not_use__ Pillows auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Pillows() {\n    _s();\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_2__.pillowsSelector);\n    console.log(products);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__.ProductsBlock, {\n        title: \"Подушки\",\n        products: products,\n        num: 4\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/pillows/Pillows.jsx\",\n        lineNumber: 11,\n        columnNumber: 10\n    }, this);\n}\n_s(Pillows, \"LHHiTPAlk+gTfGHSFrm+oO4oO3A=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Pillows;\nvar _c;\n$RefreshReg$(_c, \"Pillows\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcGlsbG93cy9QaWxsb3dzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTJDO0FBQ29CO0FBQ3JCO0FBQ3FCO0FBRXhELFNBQVNJOztJQUNkLE1BQU1DLFdBQVdILHdEQUFXQSxDQUFDQyx3RUFBZUE7SUFDNUNHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFBTyw4REFBQ0osdUVBQWFBO1FBQUNPLE9BQU07UUFBVUgsVUFBVUE7UUFBVUksS0FBSzs7Ozs7O0FBQ2pFO0dBSmdCTDs7UUFDR0Ysb0RBQVdBOzs7S0FEZEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9waWxsb3dzL1BpbGxvd3MuanN4PzFlMWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGlsbG93cy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgUHJvZHVjdHNCbG9jayB9IGZyb20gXCIuLi9wcm9kdWN0c0Jsb2NrL1Byb2R1Y3RzQmxvY2tcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBwaWxsb3dzU2VsZWN0b3IgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvcHJvZHVjdHNTbGljZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUGlsbG93cygpIHtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3RvcihwaWxsb3dzU2VsZWN0b3IpO1xuICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XG4gIHJldHVybiA8UHJvZHVjdHNCbG9jayB0aXRsZT1cItCf0L7QtNGD0YjQutC4XCIgcHJvZHVjdHM9e3Byb2R1Y3RzfSBudW09ezR9IC8+O1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlByb2R1Y3RzQmxvY2siLCJ1c2VTZWxlY3RvciIsInBpbGxvd3NTZWxlY3RvciIsIlBpbGxvd3MiLCJwcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm51bSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/pillows/Pillows.jsx\n"));

/***/ })

});