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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _ui_productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/productsBlock/ProductsBlock */ \"(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\");\n/* harmony import */ var _ui_loader_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/loader/Loader */ \"(app-pages-browser)/./src/app/ui/loader/Loader.jsx\");\n/* harmony import */ var _ui_slider_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/slider/Slider */ \"(app-pages-browser)/./src/app/ui/slider/Slider.jsx\");\n/* harmony import */ var _ui_about_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/about/About */ \"(app-pages-browser)/./src/app/ui/about/About.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { useGetProductsQuery } from \"@/redux/api/productsApi\";\nfunction Home() {\n    _s();\n    const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.allProducts.isLoading);\n    const hotProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.allProducts.hotProducts);\n    const newProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.allProducts.newProducts);\n    const saleProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.allProducts.saleProducts);\n    // const { data, error, isLoading } = useGetProductsQuery();\n    // console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default().main),\n        children: [\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_loader_Loader__WEBPACK_IMPORTED_MODULE_3__.Loader, {}, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n                lineNumber: 22,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_slider_Slider__WEBPACK_IMPORTED_MODULE_4__.Slider, {\n                products: saleProducts\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_2__.ProductsBlock, {\n                title: \"Гарячі пропозиції\",\n                products: hotProducts,\n                count: 2\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_2__.ProductsBlock, {\n                title: \"Новинки\",\n                products: newProducts,\n                num: 2\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_about_About__WEBPACK_IMPORTED_MODULE_5__.About, {}, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"kT8xH+FTXtuprlrEfWp1t4zKsD0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFd0M7QUFDRTtBQUN1QjtBQUNyQjtBQUNBO0FBQ0g7QUFDekMsaUVBQWlFO0FBRWxELFNBQVNNOztJQUN0QixNQUFNQyxZQUFZTix3REFBV0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNQyxXQUFXLENBQUNGLFNBQVM7SUFDcEUsTUFBTUcsY0FBY1Qsd0RBQVdBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsV0FBVyxDQUFDQyxXQUFXO0lBQ3hFLE1BQU1DLGNBQWNWLHdEQUFXQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLFdBQVcsQ0FBQ0UsV0FBVztJQUN4RSxNQUFNQyxlQUFlWCx3REFBV0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNQyxXQUFXLENBQUNHLFlBQVk7SUFFMUUsNERBQTREO0lBQzVELHFCQUFxQjtJQUVyQixxQkFDRSw4REFBQ0M7UUFBS0MsV0FBV2QsK0RBQVc7O1lBQ3pCTywyQkFBYSw4REFBQ0oscURBQU1BOzs7OzswQkFDckIsOERBQUNDLHFEQUFNQTtnQkFBQ1csVUFBVUg7Ozs7OztZQUNqQixDQUFDTCwyQkFDQSw4REFBQ0wsMEVBQWFBO2dCQUNaYyxPQUFNO2dCQUNORCxVQUFVTDtnQkFDVk8sT0FBTzs7Ozs7O1lBR1YsQ0FBQ1YsMkJBQ0EsOERBQUNMLDBFQUFhQTtnQkFBQ2MsT0FBTTtnQkFBVUQsVUFBVUo7Z0JBQWFPLEtBQUs7Ozs7OzswQkFFN0QsOERBQUNiLGtEQUFLQTs7Ozs7Ozs7Ozs7QUFHWjtHQTFCd0JDOztRQUNKTCxvREFBV0E7UUFDVEEsb0RBQVdBO1FBQ1hBLG9EQUFXQTtRQUNWQSxvREFBV0E7OztLQUpWSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanN4P2Q0NjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFByb2R1Y3RzQmxvY2sgfSBmcm9tIFwiLi91aS9wcm9kdWN0c0Jsb2NrL1Byb2R1Y3RzQmxvY2tcIjtcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCIuL3VpL2xvYWRlci9Mb2FkZXJcIjtcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCIuL3VpL3NsaWRlci9TbGlkZXJcIjtcbmltcG9ydCB7IEFib3V0IH0gZnJvbSBcIi4vdWkvYWJvdXQvQWJvdXRcIjtcbi8vIGltcG9ydCB7IHVzZUdldFByb2R1Y3RzUXVlcnkgfSBmcm9tIFwiQC9yZWR1eC9hcGkvcHJvZHVjdHNBcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbGxQcm9kdWN0cy5pc0xvYWRpbmcpO1xuICBjb25zdCBob3RQcm9kdWN0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWxsUHJvZHVjdHMuaG90UHJvZHVjdHMpO1xuICBjb25zdCBuZXdQcm9kdWN0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWxsUHJvZHVjdHMubmV3UHJvZHVjdHMpO1xuICBjb25zdCBzYWxlUHJvZHVjdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFsbFByb2R1Y3RzLnNhbGVQcm9kdWN0cyk7XG5cbiAgLy8gY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VHZXRQcm9kdWN0c1F1ZXJ5KCk7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICB7aXNMb2FkaW5nICYmIDxMb2FkZXIgLz59XG4gICAgICA8U2xpZGVyIHByb2R1Y3RzPXtzYWxlUHJvZHVjdHN9IC8+XG4gICAgICB7IWlzTG9hZGluZyAmJiAoXG4gICAgICAgIDxQcm9kdWN0c0Jsb2NrXG4gICAgICAgICAgdGl0bGU9XCLQk9Cw0YDRj9GH0ZYg0L/RgNC+0L/QvtC30LjRhtGW0ZdcIlxuICAgICAgICAgIHByb2R1Y3RzPXtob3RQcm9kdWN0c31cbiAgICAgICAgICBjb3VudD17Mn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7IWlzTG9hZGluZyAmJiAoXG4gICAgICAgIDxQcm9kdWN0c0Jsb2NrIHRpdGxlPVwi0J3QvtCy0LjQvdC60LhcIiBwcm9kdWN0cz17bmV3UHJvZHVjdHN9IG51bT17Mn0gLz5cbiAgICAgICl9XG4gICAgICA8QWJvdXQgLz5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU2VsZWN0b3IiLCJQcm9kdWN0c0Jsb2NrIiwiTG9hZGVyIiwiU2xpZGVyIiwiQWJvdXQiLCJIb21lIiwiaXNMb2FkaW5nIiwic3RhdGUiLCJhbGxQcm9kdWN0cyIsImhvdFByb2R1Y3RzIiwibmV3UHJvZHVjdHMiLCJzYWxlUHJvZHVjdHMiLCJtYWluIiwiY2xhc3NOYW1lIiwicHJvZHVjdHMiLCJ0aXRsZSIsImNvdW50IiwibnVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});