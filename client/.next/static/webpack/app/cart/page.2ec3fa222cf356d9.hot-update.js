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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartList: function() { return /* binding */ CartList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _cartList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cartList.module.scss */ \"(app-pages-browser)/./src/app/ui/cartList/cartList.module.scss\");\n/* harmony import */ var _cartList_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cartList_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/store */ \"(app-pages-browser)/./src/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* __next_internal_client_entry_do_not_use__ CartList auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CartList() {\n    _s();\n    const prodsInCart = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart.cart);\n    const totalSum = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart.totalSum);\n    console.log(prodsInCart.length === 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_1__.store,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_cartList_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"card-list\"]),\n                children: prodsInCart.map((param)=>{\n                    let { name, currentPrice, imageUrls, itemNo, quantity, categories, date, hot, sale, count } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                        name: name,\n                        currentPrice: currentPrice,\n                        imageUrls: imageUrls,\n                        itemNo: itemNo,\n                        quantity: quantity,\n                        categories: categories,\n                        date: date,\n                        hot: hot,\n                        sale: sale,\n                        count: count\n                    }, itemNo, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_cartList_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"card-list__buy-button\"]),\n                children: [\n                    \"Замовити \",\n                    totalSum\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/cartList/CartList.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(CartList, \"5ergHNGWjSH9nqPf7VdhM140H4E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = CartList;\nvar _c;\n$RefreshReg$(_c, \"CartList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvY2FydExpc3QvQ2FydExpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU0QztBQUNOO0FBQ0M7QUFDRztBQUNOO0FBRTdCLFNBQVNLOztJQUNkLE1BQU1DLGNBQWNILHdEQUFXQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1DLElBQUksQ0FBQ0EsSUFBSTtJQUMxRCxNQUFNQyxXQUFXTix3REFBV0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNQyxJQUFJLENBQUNDLFFBQVE7SUFDM0RDLFFBQVFDLEdBQUcsQ0FBQ0wsWUFBWU0sTUFBTSxLQUFLO0lBQ25DLHFCQUNFLDhEQUFDVixpREFBUUE7UUFBQ0QsT0FBT0EsK0NBQUtBOzswQkFDcEIsOERBQUNZO2dCQUFJQyxXQUFXZCwyRUFBbUI7MEJBQ2hDTSxZQUFZUyxHQUFHLENBQ2Q7d0JBQUMsRUFDQ0MsSUFBSSxFQUNKQyxZQUFZLEVBQ1pDLFNBQVMsRUFDVEMsTUFBTSxFQUNOQyxRQUFRLEVBQ1JDLFVBQVUsRUFDVkMsSUFBSSxFQUNKQyxHQUFHLEVBQ0hDLElBQUksRUFDSkMsS0FBSyxFQUNOO29CQUNDLHFCQUNFLDhEQUFDckIsMkNBQUlBO3dCQUVIWSxNQUFNQTt3QkFDTkMsY0FBY0E7d0JBQ2RDLFdBQVdBO3dCQUNYQyxRQUFRQTt3QkFDUkMsVUFBVUE7d0JBQ1ZDLFlBQVlBO3dCQUNaQyxNQUFNQTt3QkFDTkMsS0FBS0E7d0JBQ0xDLE1BQU1BO3dCQUNOQyxPQUFPQTt1QkFWRk47Ozs7O2dCQWFYOzs7Ozs7MEJBR0osOERBQUNPO2dCQUFPWixXQUFXZCx1RkFBK0I7O29CQUFFO29CQUN4Q1M7Ozs7Ozs7Ozs7Ozs7QUFJbEI7R0EzQ2dCSjs7UUFDTUYsb0RBQVdBO1FBQ2RBLG9EQUFXQTs7O0tBRmRFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvY2FydExpc3QvQ2FydExpc3QuanN4P2YxODYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2FydExpc3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIkAvcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jYXJkL9ChYXJkXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJ0TGlzdCgpIHtcbiAgY29uc3QgcHJvZHNJbkNhcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnQuY2FydCk7XG4gIGNvbnN0IHRvdGFsU3VtID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0LnRvdGFsU3VtKTtcbiAgY29uc29sZS5sb2cocHJvZHNJbkNhcnQubGVuZ3RoID09PSAwKTtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjYXJkLWxpc3RcIl19PlxuICAgICAgICB7cHJvZHNJbkNhcnQubWFwKFxuICAgICAgICAgICh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgY3VycmVudFByaWNlLFxuICAgICAgICAgICAgaW1hZ2VVcmxzLFxuICAgICAgICAgICAgaXRlbU5vLFxuICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgICBjYXRlZ29yaWVzLFxuICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgIGhvdCxcbiAgICAgICAgICAgIHNhbGUsXG4gICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17aXRlbU5vfVxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlPXtjdXJyZW50UHJpY2V9XG4gICAgICAgICAgICAgICAgaW1hZ2VVcmxzPXtpbWFnZVVybHN9XG4gICAgICAgICAgICAgICAgaXRlbU5vPXtpdGVtTm99XG4gICAgICAgICAgICAgICAgcXVhbnRpdHk9e3F1YW50aXR5fVxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgICAgICBob3Q9e2hvdH1cbiAgICAgICAgICAgICAgICBzYWxlPXtzYWxlfVxuICAgICAgICAgICAgICAgIGNvdW50PXtjb3VudH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzW1wiY2FyZC1saXN0X19idXktYnV0dG9uXCJdfT5cbiAgICAgICAg0JfQsNC80L7QstC40YLQuCB7dG90YWxTdW19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInN0b3JlIiwiUHJvdmlkZXIiLCJ1c2VTZWxlY3RvciIsIkNhcmQiLCJDYXJ0TGlzdCIsInByb2RzSW5DYXJ0Iiwic3RhdGUiLCJjYXJ0IiwidG90YWxTdW0iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibmFtZSIsImN1cnJlbnRQcmljZSIsImltYWdlVXJscyIsIml0ZW1ObyIsInF1YW50aXR5IiwiY2F0ZWdvcmllcyIsImRhdGUiLCJob3QiLCJzYWxlIiwiY291bnQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/cartList/CartList.jsx\n"));

/***/ })

});