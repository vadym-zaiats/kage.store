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

/***/ "(app-pages-browser)/./src/app/ui/allProducts/AllProducts.jsx":
/*!************************************************!*\
  !*** ./src/app/ui/allProducts/AllProducts.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllProducts: function() { return /* binding */ AllProducts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _favList_favList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../favList/favList.module.scss */ \"(app-pages-browser)/./src/app/ui/favList/favList.module.scss\");\n/* harmony import */ var _favList_favList_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_favList_favList_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/store */ \"(app-pages-browser)/./src/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* __next_internal_client_entry_do_not_use__ AllProducts auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function AllProducts() {\n    _s();\n    const prodsInFav = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.favourite.favourite);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_1__.store,\n        children: [\n            prodsInFav.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_favList_favList_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"fav-list\"]),\n                    children: prodsInFav.map((param)=>{\n                        let { name, currentPrice, imageUrls, itemNo, quantity, categories, date, hot, sale } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            name: name,\n                            currentPrice: currentPrice,\n                            imageUrls: imageUrls,\n                            itemNo: itemNo,\n                            quantity: quantity,\n                            categories: categories,\n                            date: date,\n                            hot: hot,\n                            sale: sale,\n                            fav: true\n                        }, itemNo, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/allProducts/AllProducts.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 19\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/allProducts/AllProducts.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false),\n            prodsInFav.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_favList_favList_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"fav-list\"]),\n                children: \"No prods in fav\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/allProducts/AllProducts.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/allProducts/AllProducts.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(AllProducts, \"SjG65xkd5JjvbNmj3/Hlf1JVwQo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = AllProducts;\nvar _c;\n$RefreshReg$(_c, \"AllProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvYWxsUHJvZHVjdHMvQWxsUHJvZHVjdHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVvRDtBQUNkO0FBQ0M7QUFDRztBQUNOO0FBRTdCLGVBQWVLOztJQUNwQixNQUFNQyxhQUFhSCx3REFBV0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNQyxTQUFTLENBQUNBLFNBQVM7SUFFbkUscUJBQ0UsOERBQUNOLGlEQUFRQTtRQUFDRCxPQUFPQSwrQ0FBS0E7O1lBQ25CSyxXQUFXRyxNQUFNLEdBQUcsbUJBQ25COzBCQUNFLDRFQUFDQztvQkFBSUMsV0FBV1gsaUZBQWtCOzhCQUMvQk0sV0FBV00sR0FBRyxDQUNiOzRCQUFDLEVBQ0NDLElBQUksRUFDSkMsWUFBWSxFQUNaQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxVQUFVLEVBQ1ZDLElBQUksRUFDSkMsR0FBRyxFQUNIQyxJQUFJLEVBQ0w7d0JBQ0MscUJBQ0UsOERBQUNqQiwyQ0FBSUE7NEJBRUhTLE1BQU1BOzRCQUNOQyxjQUFjQTs0QkFDZEMsV0FBV0E7NEJBQ1hDLFFBQVFBOzRCQUNSQyxVQUFVQTs0QkFDVkMsWUFBWUE7NEJBQ1pDLE1BQU1BOzRCQUNOQyxLQUFLQTs0QkFDTEMsTUFBTUE7NEJBQ05DLEtBQUs7MkJBVkFOOzs7OztvQkFhWDs7Ozs7OztZQUtQVixXQUFXRyxNQUFNLEtBQUssbUJBQ3JCLDhEQUFDQztnQkFBSUMsV0FBV1gsaUZBQWtCOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFJNUM7R0E3Q3NCSzs7UUFDREYsb0RBQVdBOzs7S0FEVkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9hbGxQcm9kdWN0cy9BbGxQcm9kdWN0cy5qc3g/ZjM0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vZmF2TGlzdC9mYXZMaXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJAL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZC/QoWFyZFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQWxsUHJvZHVjdHMoKSB7XG4gIGNvbnN0IHByb2RzSW5GYXYgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZhdm91cml0ZS5mYXZvdXJpdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICB7cHJvZHNJbkZhdi5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZmF2LWxpc3RcIl19PlxuICAgICAgICAgICAge3Byb2RzSW5GYXYubWFwKFxuICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlLFxuICAgICAgICAgICAgICAgIGltYWdlVXJscyxcbiAgICAgICAgICAgICAgICBpdGVtTm8sXG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgICAgIGhvdCxcbiAgICAgICAgICAgICAgICBzYWxlLFxuICAgICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbU5vfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2U9e2N1cnJlbnRQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmxzPXtpbWFnZVVybHN9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Obz17aXRlbU5vfVxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eT17cXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGU9e2RhdGV9XG4gICAgICAgICAgICAgICAgICAgIGhvdD17aG90fVxuICAgICAgICAgICAgICAgICAgICBzYWxlPXtzYWxlfVxuICAgICAgICAgICAgICAgICAgICBmYXY9e3RydWV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtwcm9kc0luRmF2Lmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmYXYtbGlzdFwiXX0+Tm8gcHJvZHMgaW4gZmF2PC9kaXY+XG4gICAgICApfVxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwic3RvcmUiLCJQcm92aWRlciIsInVzZVNlbGVjdG9yIiwiQ2FyZCIsIkFsbFByb2R1Y3RzIiwicHJvZHNJbkZhdiIsInN0YXRlIiwiZmF2b3VyaXRlIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibmFtZSIsImN1cnJlbnRQcmljZSIsImltYWdlVXJscyIsIml0ZW1ObyIsInF1YW50aXR5IiwiY2F0ZWdvcmllcyIsImRhdGUiLCJob3QiLCJzYWxlIiwiZmF2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/allProducts/AllProducts.jsx\n"));

/***/ })

});