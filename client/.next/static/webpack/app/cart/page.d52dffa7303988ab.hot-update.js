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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartList: function() { return /* binding */ CartList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _cartList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cartList.module.scss */ \"(app-pages-browser)/./src/app/ui/cartList/cartList.module.scss\");\n/* harmony import */ var _cartList_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cartList_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/store */ \"(app-pages-browser)/./src/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* __next_internal_client_entry_do_not_use__ CartList auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CartList() {\n    _s();\n    const prodsInCart = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart.cart);\n    const totalSum = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart.totalSum);\n    console.log();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_1__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_cartList_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"card-list\"]),\n                    children: [\n                        prodsInCart.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"sdfsdf\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 40\n                        }, this),\n                        prodsInCart.map((param)=>{\n                            let { name, currentPrice, imageUrls, itemNo, quantity, categories, date, hot, sale, count } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                                name: name,\n                                currentPrice: currentPrice,\n                                imageUrls: imageUrls,\n                                itemNo: itemNo,\n                                quantity: quantity,\n                                categories: categories,\n                                date: date,\n                                hot: hot,\n                                sale: sale,\n                                count: count\n                            }, itemNo, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_cartList_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"card-list__buy-button\"]),\n                    children: [\n                        \"Замовити \",\n                        totalSum\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(CartList, \"5ergHNGWjSH9nqPf7VdhM140H4E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = CartList;\nvar _c;\n$RefreshReg$(_c, \"CartList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvY2FydExpc3QvQ2FydExpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU0QztBQUNOO0FBQ0M7QUFDRztBQUNOO0FBRTdCLFNBQVNLOztJQUNkLE1BQU1DLGNBQWNILHdEQUFXQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1DLElBQUksQ0FBQ0EsSUFBSTtJQUMxRCxNQUFNQyxXQUFXTix3REFBV0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNQyxJQUFJLENBQUNDLFFBQVE7SUFDM0RDLFFBQVFDLEdBQUc7SUFDWCxxQkFDRSw4REFBQ1QsaURBQVFBO1FBQUNELE9BQU9BLCtDQUFLQTtrQkFDcEI7OzhCQUNFLDhEQUFDVztvQkFBSUMsV0FBV2IsMkVBQW1COzt3QkFDaENNLFlBQVlRLE1BQU0sS0FBSyxtQkFBSyw4REFBQ0Y7c0NBQUk7Ozs7Ozt3QkFDakNOLFlBQVlTLEdBQUcsQ0FDZDtnQ0FBQyxFQUNDQyxJQUFJLEVBQ0pDLFlBQVksRUFDWkMsU0FBUyxFQUNUQyxNQUFNLEVBQ05DLFFBQVEsRUFDUkMsVUFBVSxFQUNWQyxJQUFJLEVBQ0pDLEdBQUcsRUFDSEMsSUFBSSxFQUNKQyxLQUFLLEVBQ047NEJBQ0MscUJBQ0UsOERBQUNyQiwyQ0FBSUE7Z0NBRUhZLE1BQU1BO2dDQUNOQyxjQUFjQTtnQ0FDZEMsV0FBV0E7Z0NBQ1hDLFFBQVFBO2dDQUNSQyxVQUFVQTtnQ0FDVkMsWUFBWUE7Z0NBQ1pDLE1BQU1BO2dDQUNOQyxLQUFLQTtnQ0FDTEMsTUFBTUE7Z0NBQ05DLE9BQU9BOytCQVZGTjs7Ozs7d0JBYVg7Ozs7Ozs7OEJBR0osOERBQUNPO29CQUFPYixXQUFXYix1RkFBK0I7O3dCQUFFO3dCQUN4Q1M7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBOUNnQko7O1FBQ01GLG9EQUFXQTtRQUNkQSxvREFBV0E7OztLQUZkRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2NhcnRMaXN0L0NhcnRMaXN0LmpzeD9mMTg2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NhcnRMaXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJAL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZC/QoWFyZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FydExpc3QoKSB7XG4gIGNvbnN0IHByb2RzSW5DYXJ0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0LmNhcnQpO1xuICBjb25zdCB0b3RhbFN1bSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydC50b3RhbFN1bSk7XG4gIGNvbnNvbGUubG9nKCk7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiY2FyZC1saXN0XCJdfT5cbiAgICAgICAgICB7cHJvZHNJbkNhcnQubGVuZ3RoID09PSAwICYmIDxkaXY+c2Rmc2RmPC9kaXY+fVxuICAgICAgICAgIHtwcm9kc0luQ2FydC5tYXAoXG4gICAgICAgICAgICAoe1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBjdXJyZW50UHJpY2UsXG4gICAgICAgICAgICAgIGltYWdlVXJscyxcbiAgICAgICAgICAgICAgaXRlbU5vLFxuICAgICAgICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICAgaG90LFxuICAgICAgICAgICAgICBzYWxlLFxuICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtTm99XG4gICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgY3VycmVudFByaWNlPXtjdXJyZW50UHJpY2V9XG4gICAgICAgICAgICAgICAgICBpbWFnZVVybHM9e2ltYWdlVXJsc31cbiAgICAgICAgICAgICAgICAgIGl0ZW1Obz17aXRlbU5vfVxuICAgICAgICAgICAgICAgICAgcXVhbnRpdHk9e3F1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cbiAgICAgICAgICAgICAgICAgIGRhdGU9e2RhdGV9XG4gICAgICAgICAgICAgICAgICBob3Q9e2hvdH1cbiAgICAgICAgICAgICAgICAgIHNhbGU9e3NhbGV9XG4gICAgICAgICAgICAgICAgICBjb3VudD17Y291bnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1tcImNhcmQtbGlzdF9fYnV5LWJ1dHRvblwiXX0+XG4gICAgICAgICAg0JfQsNC80L7QstC40YLQuCB7dG90YWxTdW19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzdG9yZSIsIlByb3ZpZGVyIiwidXNlU2VsZWN0b3IiLCJDYXJkIiwiQ2FydExpc3QiLCJwcm9kc0luQ2FydCIsInN0YXRlIiwiY2FydCIsInRvdGFsU3VtIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsIm5hbWUiLCJjdXJyZW50UHJpY2UiLCJpbWFnZVVybHMiLCJpdGVtTm8iLCJxdWFudGl0eSIsImNhdGVnb3JpZXMiLCJkYXRlIiwiaG90Iiwic2FsZSIsImNvdW50IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/cartList/CartList.jsx\n"));

/***/ })

});