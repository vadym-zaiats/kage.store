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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartList: function() { return /* binding */ CartList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _cartList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cartList.module.scss */ \"(app-pages-browser)/./src/app/ui/cartList/cartList.module.scss\");\n/* harmony import */ var _cartList_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_cartList_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* harmony import */ var _ModalCart_ModalCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalCart/ModalCart */ \"(app-pages-browser)/./src/app/ui/cartList/ModalCart/ModalCart.jsx\");\n/* harmony import */ var _redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/cartSlice */ \"(app-pages-browser)/./src/redux/slices/cartSlice.js\");\n/* __next_internal_client_entry_do_not_use__ CartList auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CartList() {\n    _s();\n    const prodsInCart = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_3__.cartSelector);\n    const totalSum = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_3__.cartTotalSumSelector);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            prodsInCart.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_cartList_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"card-list\"]),\n                        children: prodsInCart.map((param)=>{\n                            let { name, currentPrice, imageUrls, itemNo, quantity, categories, date, hot, sale, count } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                                name: name,\n                                currentPrice: currentPrice,\n                                imageUrls: imageUrls,\n                                itemNo: itemNo,\n                                quantity: quantity,\n                                categories: categories,\n                                date: date,\n                                hot: hot,\n                                sale: sale,\n                                count: count\n                            }, itemNo, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 19\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_cartList_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"card-list__buy-button\"]),\n                        children: [\n                            \"Зробити замовлення на \",\n                            totalSum,\n                            \" грн.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            prodsInCart.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_cartList_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"card-list\"]),\n                children: \"No prods in cart\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalCart_ModalCart__WEBPACK_IMPORTED_MODULE_2__.ModalCart, {}, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CartList, \"5ergHNGWjSH9nqPf7VdhM140H4E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = CartList;\nvar _c;\n$RefreshReg$(_c, \"CartList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvY2FydExpc3QvQ2FydExpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDRjtBQUNOO0FBQ2M7QUFDNEI7QUFFdkUsU0FBU007O0lBQ2QsTUFBTUMsY0FBY04sd0RBQVdBLENBQUNHLGlFQUFZQTtJQUM1QyxNQUFNSSxXQUFXUCx3REFBV0EsQ0FBQ0kseUVBQW9CQTtJQUVqRCxxQkFDRTs7WUFDR0UsWUFBWUUsTUFBTSxHQUFHLG1CQUNwQjs7a0NBQ0UsOERBQUNDO3dCQUFJQyxXQUFXWCwyRUFBbUI7a0NBQ2hDTyxZQUFZSyxHQUFHLENBQ2Q7Z0NBQUMsRUFDQ0MsSUFBSSxFQUNKQyxZQUFZLEVBQ1pDLFNBQVMsRUFDVEMsTUFBTSxFQUNOQyxRQUFRLEVBQ1JDLFVBQVUsRUFDVkMsSUFBSSxFQUNKQyxHQUFHLEVBQ0hDLElBQUksRUFDSkMsS0FBSyxFQUNOOzRCQUNDLHFCQUNFLDhEQUFDcEIsMkNBQUlBO2dDQUVIVyxNQUFNQTtnQ0FDTkMsY0FBY0E7Z0NBQ2RDLFdBQVdBO2dDQUNYQyxRQUFRQTtnQ0FDUkMsVUFBVUE7Z0NBQ1ZDLFlBQVlBO2dDQUNaQyxNQUFNQTtnQ0FDTkMsS0FBS0E7Z0NBQ0xDLE1BQU1BO2dDQUNOQyxPQUFPQTsrQkFWRk47Ozs7O3dCQWFYOzs7Ozs7a0NBR0osOERBQUNPO3dCQUFPWixXQUFXWCx1RkFBK0I7OzRCQUFFOzRCQUMzQlE7NEJBQVM7Ozs7Ozs7OztZQUlyQ0QsWUFBWUUsTUFBTSxLQUFLLG1CQUN0Qiw4REFBQ0M7Z0JBQUlDLFdBQVdYLDJFQUFtQjswQkFBRTs7Ozs7OzBCQUV2Qyw4REFBQ0csMkRBQVNBOzs7Ozs7O0FBR2hCO0dBbkRnQkc7O1FBQ01MLG9EQUFXQTtRQUNkQSxvREFBV0E7OztLQUZkSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2NhcnRMaXN0L0NhcnRMaXN0LmpzeD9mMTg2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NhcnRMaXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jYXJkL9ChYXJkXCI7XG5pbXBvcnQgeyBNb2RhbENhcnQgfSBmcm9tIFwiLi9Nb2RhbENhcnQvTW9kYWxDYXJ0XCI7XG5pbXBvcnQgeyBjYXJ0U2VsZWN0b3IsIGNhcnRUb3RhbFN1bVNlbGVjdG9yIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL2NhcnRTbGljZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FydExpc3QoKSB7XG4gIGNvbnN0IHByb2RzSW5DYXJ0ID0gdXNlU2VsZWN0b3IoY2FydFNlbGVjdG9yKTtcbiAgY29uc3QgdG90YWxTdW0gPSB1c2VTZWxlY3RvcihjYXJ0VG90YWxTdW1TZWxlY3Rvcik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Byb2RzSW5DYXJ0Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjYXJkLWxpc3RcIl19PlxuICAgICAgICAgICAge3Byb2RzSW5DYXJ0Lm1hcChcbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZSxcbiAgICAgICAgICAgICAgICBpbWFnZVVybHMsXG4gICAgICAgICAgICAgICAgaXRlbU5vLFxuICAgICAgICAgICAgICAgIHF1YW50aXR5LFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICAgICBob3QsXG4gICAgICAgICAgICAgICAgc2FsZSxcbiAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW1Ob31cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByaWNlPXtjdXJyZW50UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJscz17aW1hZ2VVcmxzfVxuICAgICAgICAgICAgICAgICAgICBpdGVtTm89e2l0ZW1Ob31cbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk9e3F1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgICAgICBob3Q9e2hvdH1cbiAgICAgICAgICAgICAgICAgICAgc2FsZT17c2FsZX1cbiAgICAgICAgICAgICAgICAgICAgY291bnQ9e2NvdW50fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbXCJjYXJkLWxpc3RfX2J1eS1idXR0b25cIl19PlxuICAgICAgICAgICAg0JfRgNC+0LHQuNGC0Lgg0LfQsNC80L7QstC70LXQvdC90Y8g0L3QsCB7dG90YWxTdW19INCz0YDQvS5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAge3Byb2RzSW5DYXJ0Lmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjYXJkLWxpc3RcIl19Pk5vIHByb2RzIGluIGNhcnQ8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8TW9kYWxDYXJ0IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU2VsZWN0b3IiLCJDYXJkIiwiTW9kYWxDYXJ0IiwiY2FydFNlbGVjdG9yIiwiY2FydFRvdGFsU3VtU2VsZWN0b3IiLCJDYXJ0TGlzdCIsInByb2RzSW5DYXJ0IiwidG90YWxTdW0iLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJuYW1lIiwiY3VycmVudFByaWNlIiwiaW1hZ2VVcmxzIiwiaXRlbU5vIiwicXVhbnRpdHkiLCJjYXRlZ29yaWVzIiwiZGF0ZSIsImhvdCIsInNhbGUiLCJjb3VudCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/cartList/CartList.jsx\n"));

/***/ })

});