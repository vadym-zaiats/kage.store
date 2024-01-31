"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _ui_productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/productsBlock/ProductsBlock */ \"(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\");\n/* harmony import */ var _ui_loader_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/loader/Loader */ \"(app-pages-browser)/./src/app/ui/loader/Loader.jsx\");\n/* harmony import */ var _ui_slider_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/slider/Slider */ \"(app-pages-browser)/./src/app/ui/slider/Slider.jsx\");\n/* harmony import */ var _ui_about_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/about/About */ \"(app-pages-browser)/./src/app/ui/about/About.jsx\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_5__.isLoadingSelector);\n    const hotProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_5__.hotProductsSelector);\n    const newProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_5__.newProductsSelector);\n    const saleProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_5__.saleProductsSelector);\n    // useEffect(()=>{\n    //   setUser()\n    // })\n    // JSON.parse(localStorage.getItem('token')) || null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().main),\n        children: [\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_loader_Loader__WEBPACK_IMPORTED_MODULE_2__.Loader, {}, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n                lineNumber: 28,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_slider_Slider__WEBPACK_IMPORTED_MODULE_3__.Slider, {\n                products: saleProducts\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__.ProductsBlock, {\n                title: \"Гарячі пропозиції\",\n                products: hotProducts,\n                num: 2\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_1__.ProductsBlock, {\n                title: \"Новинки\",\n                products: newProducts,\n                num: 2\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_about_About__WEBPACK_IMPORTED_MODULE_4__.About, {}, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"kT8xH+FTXtuprlrEfWp1t4zKsD0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFd0M7QUFDRTtBQUN1QjtBQUNyQjtBQUNBO0FBQ0g7QUFNSDtBQUNKO0FBRW5CLFNBQVNXOztJQUN0QixNQUFNQyxZQUFZWCx3REFBV0EsQ0FBQ1EsMEVBQWlCQTtJQUMvQyxNQUFNSSxjQUFjWix3REFBV0EsQ0FBQ0ssNEVBQW1CQTtJQUNuRCxNQUFNUSxjQUFjYix3REFBV0EsQ0FBQ00sNEVBQW1CQTtJQUNuRCxNQUFNUSxlQUFlZCx3REFBV0EsQ0FBQ08sNkVBQW9CQTtJQUNyRCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLEtBQUs7SUFDTCxxREFBcUQ7SUFDckQscUJBQ0UsOERBQUNRO1FBQUtDLFdBQVdqQiwrREFBVzs7WUFDekJZLDJCQUFhLDhEQUFDVCxxREFBTUE7Ozs7OzBCQUNyQiw4REFBQ0MscURBQU1BO2dCQUFDYyxVQUFVSDs7Ozs7O1lBQ2pCLENBQUNILDJCQUNBLDhEQUFDViwwRUFBYUE7Z0JBQ1ppQixPQUFNO2dCQUNORCxVQUFVTDtnQkFDVk8sS0FBSzs7Ozs7O1lBR1IsQ0FBQ1IsMkJBQ0EsOERBQUNWLDBFQUFhQTtnQkFBQ2lCLE9BQU07Z0JBQVVELFVBQVVKO2dCQUFhTSxLQUFLOzs7Ozs7MEJBRTdELDhEQUFDZixrREFBS0E7Ozs7Ozs7Ozs7O0FBR1o7R0ExQndCTTs7UUFDSlYsb0RBQVdBO1FBQ1RBLG9EQUFXQTtRQUNYQSxvREFBV0E7UUFDVkEsb0RBQVdBOzs7S0FKVlUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzeD9kNDY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBQcm9kdWN0c0Jsb2NrIH0gZnJvbSBcIi4vdWkvcHJvZHVjdHNCbG9jay9Qcm9kdWN0c0Jsb2NrXCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi91aS9sb2FkZXIvTG9hZGVyXCI7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiLi91aS9zbGlkZXIvU2xpZGVyXCI7XG5pbXBvcnQgeyBBYm91dCB9IGZyb20gXCIuL3VpL2Fib3V0L0Fib3V0XCI7XG5pbXBvcnQge1xuICBob3RQcm9kdWN0c1NlbGVjdG9yLFxuICBuZXdQcm9kdWN0c1NlbGVjdG9yLFxuICBzYWxlUHJvZHVjdHNTZWxlY3RvcixcbiAgaXNMb2FkaW5nU2VsZWN0b3IsXG59IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9kdWN0c1NsaWNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3IoaXNMb2FkaW5nU2VsZWN0b3IpO1xuICBjb25zdCBob3RQcm9kdWN0cyA9IHVzZVNlbGVjdG9yKGhvdFByb2R1Y3RzU2VsZWN0b3IpO1xuICBjb25zdCBuZXdQcm9kdWN0cyA9IHVzZVNlbGVjdG9yKG5ld1Byb2R1Y3RzU2VsZWN0b3IpO1xuICBjb25zdCBzYWxlUHJvZHVjdHMgPSB1c2VTZWxlY3RvcihzYWxlUHJvZHVjdHNTZWxlY3Rvcik7XG4gIC8vIHVzZUVmZmVjdCgoKT0+e1xuICAvLyAgIHNldFVzZXIoKVxuICAvLyB9KVxuICAvLyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSB8fCBudWxsO1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGVyIC8+fVxuICAgICAgPFNsaWRlciBwcm9kdWN0cz17c2FsZVByb2R1Y3RzfSAvPlxuICAgICAgeyFpc0xvYWRpbmcgJiYgKFxuICAgICAgICA8UHJvZHVjdHNCbG9ja1xuICAgICAgICAgIHRpdGxlPVwi0JPQsNGA0Y/Rh9GWINC/0YDQvtC/0L7Qt9C40YbRltGXXCJcbiAgICAgICAgICBwcm9kdWN0cz17aG90UHJvZHVjdHN9XG4gICAgICAgICAgbnVtPXsyfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHshaXNMb2FkaW5nICYmIChcbiAgICAgICAgPFByb2R1Y3RzQmxvY2sgdGl0bGU9XCLQndC+0LLQuNC90LrQuFwiIHByb2R1Y3RzPXtuZXdQcm9kdWN0c30gbnVtPXsyfSAvPlxuICAgICAgKX1cbiAgICAgIDxBYm91dCAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTZWxlY3RvciIsIlByb2R1Y3RzQmxvY2siLCJMb2FkZXIiLCJTbGlkZXIiLCJBYm91dCIsImhvdFByb2R1Y3RzU2VsZWN0b3IiLCJuZXdQcm9kdWN0c1NlbGVjdG9yIiwic2FsZVByb2R1Y3RzU2VsZWN0b3IiLCJpc0xvYWRpbmdTZWxlY3RvciIsInVzZUVmZmVjdCIsIkhvbWUiLCJpc0xvYWRpbmciLCJob3RQcm9kdWN0cyIsIm5ld1Byb2R1Y3RzIiwic2FsZVByb2R1Y3RzIiwibWFpbiIsImNsYXNzTmFtZSIsInByb2R1Y3RzIiwidGl0bGUiLCJudW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});