"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cart/page",{

/***/ "(app-pages-browser)/./src/app/cart/page.jsx":
/*!*******************************!*\
  !*** ./src/app/cart/page.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/store */ \"(app-pages-browser)/./src/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _cart_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.module.scss */ \"(app-pages-browser)/./src/app/cart/cart.module.scss\");\n/* harmony import */ var _cart_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cart_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ui_card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/card/Card */ \"(app-pages-browser)/./src/app/ui/card/Card.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Cart() {\n    _s();\n    const prodsInCart = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart.cart);\n    const { name, currentPrice, imageUrls, itemNo, quantity, categories, date, hot, sale } = prodsInCart;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_1__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_cart_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cart),\n            children: prodsInCart.map((prod)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card_Card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                    name: name,\n                    currentPrice: currentPrice,\n                    imageUrls: imageUrls,\n                    itemNo: itemNo,\n                    quantity: quantity\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/cart/page.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/vadym/dev/kage.store/client/src/app/cart/page.jsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/cart/page.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Cart, \"xCOLSR9UvCV6vacK9UKbxjnF3aI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Cart;\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2FydC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDc0M7QUFDQztBQUNHO0FBQ0Y7QUFDRDtBQUV4QixTQUFTSzs7SUFDdEIsTUFBTUMsY0FBY0osd0RBQVdBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUMsSUFBSSxDQUFDQSxJQUFJO0lBQzFELE1BQU0sRUFDSkMsSUFBSSxFQUNKQyxZQUFZLEVBQ1pDLFNBQVMsRUFDVEMsTUFBTSxFQUNOQyxRQUFRLEVBQ1JDLFVBQVUsRUFDVkMsSUFBSSxFQUNKQyxHQUFHLEVBQ0hDLElBQUksRUFDTCxHQUFHWDtJQUVKLHFCQUNFLDhEQUFDTCxpREFBUUE7UUFBQ0QsT0FBT0EsK0NBQUtBO2tCQUNwQiw0RUFBQ2tCO1lBQUlDLFdBQVdoQiwrREFBYztzQkFDM0JHLFlBQVljLEdBQUcsQ0FBQyxDQUFDQzs4QkFDaEIsOERBQUNqQiwrQ0FBSUE7b0JBQ0hLLE1BQU1BO29CQUNOQyxjQUFjQTtvQkFDZEMsV0FBV0E7b0JBQ1hDLFFBQVFBO29CQUNSQyxVQUFVQTs7Ozs7O1lBRWQ7Ozs7Ozs7Ozs7O0FBSVI7R0E3QndCUjs7UUFDRkgsb0RBQVdBOzs7S0FEVEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jYXJ0L3BhZ2UuanN4PzBjMmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJAL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2FydC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi91aS9jYXJkL0NhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcbiAgY29uc3QgcHJvZHNJbkNhcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnQuY2FydCk7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIGN1cnJlbnRQcmljZSxcbiAgICBpbWFnZVVybHMsXG4gICAgaXRlbU5vLFxuICAgIHF1YW50aXR5LFxuICAgIGNhdGVnb3JpZXMsXG4gICAgZGF0ZSxcbiAgICBob3QsXG4gICAgc2FsZSxcbiAgfSA9IHByb2RzSW5DYXJ0O1xuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2BjYXJ0YF19PlxuICAgICAgICB7cHJvZHNJbkNhcnQubWFwKChwcm9kKSA9PiB7XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICBjdXJyZW50UHJpY2U9e2N1cnJlbnRQcmljZX1cbiAgICAgICAgICAgIGltYWdlVXJscz17aW1hZ2VVcmxzfVxuICAgICAgICAgICAgaXRlbU5vPXtpdGVtTm99XG4gICAgICAgICAgICBxdWFudGl0eT17cXVhbnRpdHl9XG4gICAgICAgICAgLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdG9yZSIsIlByb3ZpZGVyIiwidXNlU2VsZWN0b3IiLCJzdHlsZXMiLCJDYXJkIiwiQ2FydCIsInByb2RzSW5DYXJ0Iiwic3RhdGUiLCJjYXJ0IiwibmFtZSIsImN1cnJlbnRQcmljZSIsImltYWdlVXJscyIsIml0ZW1ObyIsInF1YW50aXR5IiwiY2F0ZWdvcmllcyIsImRhdGUiLCJob3QiLCJzYWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicHJvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/cart/page.jsx\n"));

/***/ })

});