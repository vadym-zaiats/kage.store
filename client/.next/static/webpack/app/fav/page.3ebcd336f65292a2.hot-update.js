"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/fav/page",{

/***/ "(app-pages-browser)/./src/app/ui/favList/FavList.jsx":
/*!****************************************!*\
  !*** ./src/app/ui/favList/FavList.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FavList: function() { return /* binding */ FavList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _favList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favList.module.scss */ \"(app-pages-browser)/./src/app/ui/favList/favList.module.scss\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/store */ \"(app-pages-browser)/./src/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _card_ard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/Сard */ \"(app-pages-browser)/./src/app/ui/card/Сard.jsx\");\n/* __next_internal_client_entry_do_not_use__ FavList auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FavList() {\n    _s();\n    const prodsInFav = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.favourite.favourite);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_1__.store,\n        children: [\n            prodsInFav.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: _favList_module_scss__WEBPACK_IMPORTED_MODULE_4__[\"card-list\"],\n                    children: prodsInFav.map((param)=>{\n                        let { name, currentPrice, imageUrls, itemNo, quantity, categories, date, hot, sale } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ard__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            name: name,\n                            currentPrice: currentPrice,\n                            imageUrls: imageUrls,\n                            itemNo: itemNo,\n                            quantity: quantity,\n                            categories: categories,\n                            date: date,\n                            hot: hot,\n                            sale: sale,\n                            fav: true\n                        }, itemNo, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/favList/FavList.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 19\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/favList/FavList.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false),\n            prodsInFav.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _favList_module_scss__WEBPACK_IMPORTED_MODULE_4__[\"card-list\"],\n                children: \"No prods in fav\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/favList/FavList.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/favList/FavList.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(FavList, \"SjG65xkd5JjvbNmj3/Hlf1JVwQo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = FavList;\nvar _c;\n$RefreshReg$(_c, \"FavList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZmF2TGlzdC9GYXZMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUyQztBQUNMO0FBQ0M7QUFDRztBQUNOO0FBRTdCLFNBQVNLOztJQUNkLE1BQU1DLGFBQWFILHdEQUFXQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1DLFNBQVMsQ0FBQ0EsU0FBUztJQUVuRSxxQkFDRSw4REFBQ04saURBQVFBO1FBQUNELE9BQU9BLCtDQUFLQTs7WUFDbkJLLFdBQVdHLE1BQU0sR0FBRyxtQkFDbkI7MEJBQ0UsNEVBQUNDO29CQUFJQyxXQUFXWCxpREFBTSxDQUFDLFlBQVk7OEJBQ2hDTSxXQUFXTSxHQUFHLENBQ2I7NEJBQUMsRUFDQ0MsSUFBSSxFQUNKQyxZQUFZLEVBQ1pDLFNBQVMsRUFDVEMsTUFBTSxFQUNOQyxRQUFRLEVBQ1JDLFVBQVUsRUFDVkMsSUFBSSxFQUNKQyxHQUFHLEVBQ0hDLElBQUksRUFDTDt3QkFDQyxxQkFDRSw4REFBQ2pCLDJDQUFJQTs0QkFFSFMsTUFBTUE7NEJBQ05DLGNBQWNBOzRCQUNkQyxXQUFXQTs0QkFDWEMsUUFBUUE7NEJBQ1JDLFVBQVVBOzRCQUNWQyxZQUFZQTs0QkFDWkMsTUFBTUE7NEJBQ05DLEtBQUtBOzRCQUNMQyxNQUFNQTs0QkFDTkMsS0FBSzsyQkFWQU47Ozs7O29CQWFYOzs7Ozs7O1lBS1BWLFdBQVdHLE1BQU0sS0FBSyxtQkFDckIsOERBQUNDO2dCQUFJQyxXQUFXWCxpREFBTSxDQUFDLFlBQVk7MEJBQUU7Ozs7Ozs7Ozs7OztBQUk3QztHQTdDZ0JLOztRQUNLRixvREFBV0E7OztLQURoQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9mYXZMaXN0L0Zhdkxpc3QuanN4P2U5NTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZmF2TGlzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiQC9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmQv0KFhcmRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEZhdkxpc3QoKSB7XG4gIGNvbnN0IHByb2RzSW5GYXYgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZhdm91cml0ZS5mYXZvdXJpdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICB7cHJvZHNJbkZhdi5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiY2FyZC1saXN0XCJdfT5cbiAgICAgICAgICAgIHtwcm9kc0luRmF2Lm1hcChcbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZSxcbiAgICAgICAgICAgICAgICBpbWFnZVVybHMsXG4gICAgICAgICAgICAgICAgaXRlbU5vLFxuICAgICAgICAgICAgICAgIHF1YW50aXR5LFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICAgICBob3QsXG4gICAgICAgICAgICAgICAgc2FsZSxcbiAgICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW1Ob31cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByaWNlPXtjdXJyZW50UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJscz17aW1hZ2VVcmxzfVxuICAgICAgICAgICAgICAgICAgICBpdGVtTm89e2l0ZW1Ob31cbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk9e3F1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgICAgICBob3Q9e2hvdH1cbiAgICAgICAgICAgICAgICAgICAgc2FsZT17c2FsZX1cbiAgICAgICAgICAgICAgICAgICAgZmF2PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7cHJvZHNJbkZhdi5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiY2FyZC1saXN0XCJdfT5ObyBwcm9kcyBpbiBmYXY8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzdG9yZSIsIlByb3ZpZGVyIiwidXNlU2VsZWN0b3IiLCJDYXJkIiwiRmF2TGlzdCIsInByb2RzSW5GYXYiLCJzdGF0ZSIsImZhdm91cml0ZSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm5hbWUiLCJjdXJyZW50UHJpY2UiLCJpbWFnZVVybHMiLCJpdGVtTm8iLCJxdWFudGl0eSIsImNhdGVnb3JpZXMiLCJkYXRlIiwiaG90Iiwic2FsZSIsImZhdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/favList/FavList.jsx\n"));

/***/ })

});