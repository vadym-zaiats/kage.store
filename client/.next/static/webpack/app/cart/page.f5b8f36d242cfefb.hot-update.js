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

/***/ "(app-pages-browser)/./src/app/ui/cartList/CartList.jsx":
/*!******************************************!*\
  !*** ./src/app/ui/cartList/CartList.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartList: function() { return /* binding */ CartList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _cartList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cartList.module.scss */ \"(app-pages-browser)/./src/app/ui/cartList/cartList.module.scss\");\n/* harmony import */ var _cartList_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cartList_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/store */ \"(app-pages-browser)/./src/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* __next_internal_client_entry_do_not_use__ CartList auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CartList() {\n    _s();\n    const prodsInCart = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart.cart);\n    const totalSum = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart.totalSum);\n    console.log();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_1__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_cartList_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"card-list\"]),\n                    children: prodsInCart.map((param)=>{\n                        let { name, currentPrice, imageUrls, itemNo, quantity, categories, date, hot, sale, count } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            name: name,\n                            currentPrice: currentPrice,\n                            imageUrls: imageUrls,\n                            itemNo: itemNo,\n                            quantity: quantity,\n                            categories: categories,\n                            date: date,\n                            hot: hot,\n                            sale: sale,\n                            count: count\n                        }, itemNo, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                prodsInCart.lenght > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_cartList_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"card-list__buy-button\"]),\n                    children: [\n                        \"Замовити \",\n                        totalSum\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(CartList, \"5ergHNGWjSH9nqPf7VdhM140H4E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = CartList;\nvar _c;\n$RefreshReg$(_c, \"CartList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvY2FydExpc3QvQ2FydExpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU0QztBQUNOO0FBQ0M7QUFDRztBQUNOO0FBRTdCLFNBQVNLOztJQUNkLE1BQU1DLGNBQWNILHdEQUFXQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1DLElBQUksQ0FBQ0EsSUFBSTtJQUMxRCxNQUFNQyxXQUFXTix3REFBV0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNQyxJQUFJLENBQUNDLFFBQVE7SUFDM0RDLFFBQVFDLEdBQUc7SUFDWCxxQkFDRSw4REFBQ1QsaURBQVFBO1FBQUNELE9BQU9BLCtDQUFLQTtrQkFDcEI7OzhCQUNFLDhEQUFDVztvQkFBSUMsV0FBV2IsMkVBQW1COzhCQUNoQ00sWUFBWVEsR0FBRyxDQUNkOzRCQUFDLEVBQ0NDLElBQUksRUFDSkMsWUFBWSxFQUNaQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxVQUFVLEVBQ1ZDLElBQUksRUFDSkMsR0FBRyxFQUNIQyxJQUFJLEVBQ0pDLEtBQUssRUFDTjt3QkFDQyxxQkFDRSw4REFBQ3BCLDJDQUFJQTs0QkFFSFcsTUFBTUE7NEJBQ05DLGNBQWNBOzRCQUNkQyxXQUFXQTs0QkFDWEMsUUFBUUE7NEJBQ1JDLFVBQVVBOzRCQUNWQyxZQUFZQTs0QkFDWkMsTUFBTUE7NEJBQ05DLEtBQUtBOzRCQUNMQyxNQUFNQTs0QkFDTkMsT0FBT0E7MkJBVkZOOzs7OztvQkFhWDs7Ozs7O2dCQUdIWixZQUFZbUIsTUFBTSxHQUFHLG1CQUNwQiw4REFBQ0M7b0JBQU9iLFdBQVdiLHVGQUErQjs7d0JBQUU7d0JBQ3hDUzs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7R0EvQ2dCSjs7UUFDTUYsb0RBQVdBO1FBQ2RBLG9EQUFXQTs7O0tBRmRFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvY2FydExpc3QvQ2FydExpc3QuanN4P2YxODYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2FydExpc3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIkAvcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jYXJkL9ChYXJkXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJ0TGlzdCgpIHtcbiAgY29uc3QgcHJvZHNJbkNhcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnQuY2FydCk7XG4gIGNvbnN0IHRvdGFsU3VtID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0LnRvdGFsU3VtKTtcbiAgY29uc29sZS5sb2coKTtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjYXJkLWxpc3RcIl19PlxuICAgICAgICAgIHtwcm9kc0luQ2FydC5tYXAoXG4gICAgICAgICAgICAoe1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBjdXJyZW50UHJpY2UsXG4gICAgICAgICAgICAgIGltYWdlVXJscyxcbiAgICAgICAgICAgICAgaXRlbU5vLFxuICAgICAgICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICAgaG90LFxuICAgICAgICAgICAgICBzYWxlLFxuICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtTm99XG4gICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgY3VycmVudFByaWNlPXtjdXJyZW50UHJpY2V9XG4gICAgICAgICAgICAgICAgICBpbWFnZVVybHM9e2ltYWdlVXJsc31cbiAgICAgICAgICAgICAgICAgIGl0ZW1Obz17aXRlbU5vfVxuICAgICAgICAgICAgICAgICAgcXVhbnRpdHk9e3F1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cbiAgICAgICAgICAgICAgICAgIGRhdGU9e2RhdGV9XG4gICAgICAgICAgICAgICAgICBob3Q9e2hvdH1cbiAgICAgICAgICAgICAgICAgIHNhbGU9e3NhbGV9XG4gICAgICAgICAgICAgICAgICBjb3VudD17Y291bnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Byb2RzSW5DYXJ0LmxlbmdodCA+IDAgJiYgKFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbXCJjYXJkLWxpc3RfX2J1eS1idXR0b25cIl19PlxuICAgICAgICAgICAg0JfQsNC80L7QstC40YLQuCB7dG90YWxTdW19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInN0b3JlIiwiUHJvdmlkZXIiLCJ1c2VTZWxlY3RvciIsIkNhcmQiLCJDYXJ0TGlzdCIsInByb2RzSW5DYXJ0Iiwic3RhdGUiLCJjYXJ0IiwidG90YWxTdW0iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibmFtZSIsImN1cnJlbnRQcmljZSIsImltYWdlVXJscyIsIml0ZW1ObyIsInF1YW50aXR5IiwiY2F0ZWdvcmllcyIsImRhdGUiLCJob3QiLCJzYWxlIiwiY291bnQiLCJsZW5naHQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/cartList/CartList.jsx\n"));

/***/ })

});