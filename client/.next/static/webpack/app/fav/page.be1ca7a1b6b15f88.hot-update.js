/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/fav/page",{

/***/ "(app-pages-browser)/./src/app/ui/favList/fav-list.module.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/favList/fav-list.module.scss ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// extracted by mini-css-extract-plugin\nmodule.exports = {\"fav-list\":\"fav-list_fav-list__GfhgK\"};\n    if(true) {\n      // 1703689799305\n      var cssReload = __webpack_require__(/*! ./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js */ \"(app-pages-browser)/./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js\")(module.id, {\"publicPath\":\"/_next/\",\"esModule\":false,\"locals\":true});\n      module.hot.dispose(cssReload);\n      \n    }\n  \nmodule.exports.__checksum = \"c42a73574c73\"\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZmF2TGlzdC9mYXYtbGlzdC5tb2R1bGUuc2NzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3TUFBd0gsY0FBYyxzREFBc0Q7QUFDMU4sTUFBTSxVQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2Zhdkxpc3QvZmF2LWxpc3QubW9kdWxlLnNjc3M/N2UyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZmF2LWxpc3RcIjpcImZhdi1saXN0X2Zhdi1saXN0X19HZmhnS1wifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNzAzNjg5Nzk5MzA1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9Vc2Vycy92YWR5bS9kZXYva2FnZS5zdG9yZS9jbGllbnQvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIvX25leHQvXCIsXCJlc01vZHVsZVwiOmZhbHNlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gIFxubW9kdWxlLmV4cG9ydHMuX19jaGVja3N1bSA9IFwiYzQyYTczNTc0YzczXCJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/favList/fav-list.module.scss\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/ui/favList/FavList.jsx":
/*!****************************************!*\
  !*** ./src/app/ui/favList/FavList.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FavList: function() { return /* binding */ FavList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fav_list_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fav-list.module.scss */ \"(app-pages-browser)/./src/app/ui/favList/fav-list.module.scss\");\n/* harmony import */ var _fav_list_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fav_list_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/store */ \"(app-pages-browser)/./src/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* __next_internal_client_entry_do_not_use__ FavList auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FavList() {\n    _s();\n    const prodsInFav = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.favourite.favourite);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_1__.store,\n        children: [\n            prodsInFav.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_fav_list_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"fav-list\"]),\n                    children: prodsInFav.map((param)=>{\n                        let { name, currentPrice, imageUrls, itemNo, quantity, categories, date, hot, sale } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            name: name,\n                            currentPrice: currentPrice,\n                            imageUrls: imageUrls,\n                            itemNo: itemNo,\n                            quantity: quantity,\n                            categories: categories,\n                            date: date,\n                            hot: hot,\n                            sale: sale,\n                            fav: true\n                        }, itemNo, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/favList/FavList.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 19\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/favList/FavList.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false),\n            prodsInFav.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_fav_list_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"fav-list\"]),\n                children: \"No prods in fav\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/favList/FavList.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/favList/FavList.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(FavList, \"SjG65xkd5JjvbNmj3/Hlf1JVwQo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = FavList;\nvar _c;\n$RefreshReg$(_c, \"FavList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZmF2TGlzdC9GYXZMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEM7QUFDTjtBQUNDO0FBQ0c7QUFDTjtBQUU3QixTQUFTSzs7SUFDZCxNQUFNQyxhQUFhSCx3REFBV0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNQyxTQUFTLENBQUNBLFNBQVM7SUFFbkUscUJBQ0UsOERBQUNOLGlEQUFRQTtRQUFDRCxPQUFPQSwrQ0FBS0E7O1lBQ25CSyxXQUFXRyxNQUFNLEdBQUcsbUJBQ25COzBCQUNFLDRFQUFDQztvQkFBSUMsV0FBV1gsMEVBQWtCOzhCQUMvQk0sV0FBV00sR0FBRyxDQUNiOzRCQUFDLEVBQ0NDLElBQUksRUFDSkMsWUFBWSxFQUNaQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxVQUFVLEVBQ1ZDLElBQUksRUFDSkMsR0FBRyxFQUNIQyxJQUFJLEVBQ0w7d0JBQ0MscUJBQ0UsOERBQUNqQiwyQ0FBSUE7NEJBRUhTLE1BQU1BOzRCQUNOQyxjQUFjQTs0QkFDZEMsV0FBV0E7NEJBQ1hDLFFBQVFBOzRCQUNSQyxVQUFVQTs0QkFDVkMsWUFBWUE7NEJBQ1pDLE1BQU1BOzRCQUNOQyxLQUFLQTs0QkFDTEMsTUFBTUE7NEJBQ05DLEtBQUs7MkJBVkFOOzs7OztvQkFhWDs7Ozs7OztZQUtQVixXQUFXRyxNQUFNLEtBQUssbUJBQ3JCLDhEQUFDQztnQkFBSUMsV0FBV1gsMEVBQWtCOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFJNUM7R0E3Q2dCSzs7UUFDS0Ysb0RBQVdBOzs7S0FEaEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvZmF2TGlzdC9GYXZMaXN0LmpzeD9lOTU0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Zhdi1saXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJAL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZC/QoWFyZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRmF2TGlzdCgpIHtcbiAgY29uc3QgcHJvZHNJbkZhdiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZmF2b3VyaXRlLmZhdm91cml0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIHtwcm9kc0luRmF2Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmYXYtbGlzdFwiXX0+XG4gICAgICAgICAgICB7cHJvZHNJbkZhdi5tYXAoXG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2UsXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmxzLFxuICAgICAgICAgICAgICAgIGl0ZW1ObyxcbiAgICAgICAgICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICAgICAgaG90LFxuICAgICAgICAgICAgICAgIHNhbGUsXG4gICAgICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtTm99XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZT17Y3VycmVudFByaWNlfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybHM9e2ltYWdlVXJsc31cbiAgICAgICAgICAgICAgICAgICAgaXRlbU5vPXtpdGVtTm99XG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5PXtxdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cbiAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgaG90PXtob3R9XG4gICAgICAgICAgICAgICAgICAgIHNhbGU9e3NhbGV9XG4gICAgICAgICAgICAgICAgICAgIGZhdj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAge3Byb2RzSW5GYXYubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZhdi1saXN0XCJdfT5ObyBwcm9kcyBpbiBmYXY8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzdG9yZSIsIlByb3ZpZGVyIiwidXNlU2VsZWN0b3IiLCJDYXJkIiwiRmF2TGlzdCIsInByb2RzSW5GYXYiLCJzdGF0ZSIsImZhdm91cml0ZSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm5hbWUiLCJjdXJyZW50UHJpY2UiLCJpbWFnZVVybHMiLCJpdGVtTm8iLCJxdWFudGl0eSIsImNhdGVnb3JpZXMiLCJkYXRlIiwiaG90Iiwic2FsZSIsImZhdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/favList/FavList.jsx\n"));

/***/ })

});