"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/StoreProvider.jsx":
/*!***********************************!*\
  !*** ./src/app/StoreProvider.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StoreProvider: function() { return /* binding */ StoreProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/store */ \"(app-pages-browser)/./src/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_burgerSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/burgerSlice */ \"(app-pages-browser)/./src/redux/slices/burgerSlice.js\");\n/* harmony import */ var _redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/slices/cartSlice */ \"(app-pages-browser)/./src/redux/slices/cartSlice.js\");\n/* harmony import */ var _redux_slices_favouriteSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/slices/favouriteSlice */ \"(app-pages-browser)/./src/redux/slices/favouriteSlice.js\");\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* __next_internal_client_entry_do_not_use__ StoreProvider auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst StoreProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const storeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    if (!storeRef.current) {\n        // Create the store instance the first time this renders\n        storeRef.current = (0,_redux_store__WEBPACK_IMPORTED_MODULE_2__.makeStore)();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: storeRef.current,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/StoreProvider.jsx\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, undefined);\n};\n_s(StoreProvider, \"EtiU7pDwGhTDZwMnrKEqZbxjqXE=\");\n_c = StoreProvider;\nvar _c;\n$RefreshReg$(_c, \"StoreProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvU3RvcmVQcm92aWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ1c7QUFDSDtBQUNjO0FBQ0o7QUFDVTtBQUNGO0FBRWxELE1BQU1PLGdCQUFnQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDeEMsTUFBTUMsV0FBV1QsNkNBQU1BO0lBQ3ZCLElBQUksQ0FBQ1MsU0FBU0MsT0FBTyxFQUFFO1FBQ3JCLHdEQUF3RDtRQUN4REQsU0FBU0MsT0FBTyxHQUFHVCx1REFBU0E7SUFDOUI7SUFDQSxxQkFBTyw4REFBQ0MsaURBQVFBO1FBQUNTLE9BQU9GLFNBQVNDLE9BQU87a0JBQUdGOzs7Ozs7QUFDN0MsRUFBRTtHQVBXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1N0b3JlUHJvdmlkZXIuanN4PzIyZjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0b3JlIH0gZnJvbSBcIkAvcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgYnVyZ2VyU2xpY2UgZnJvbSBcIkAvcmVkdXgvc2xpY2VzL2J1cmdlclNsaWNlXCI7XG5pbXBvcnQgY2FydFNsaWNlIGZyb20gXCJAL3JlZHV4L3NsaWNlcy9jYXJ0U2xpY2VcIjtcbmltcG9ydCBmYXZvdXJpdGVTbGljZSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvZmF2b3VyaXRlU2xpY2VcIjtcbmltcG9ydCBwcm9kdWN0c1NsaWNlIGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9kdWN0c1NsaWNlXCI7XG5cbmV4cG9ydCBjb25zdCBTdG9yZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdG9yZVJlZiA9IHVzZVJlZigpO1xuICBpZiAoIXN0b3JlUmVmLmN1cnJlbnQpIHtcbiAgICAvLyBDcmVhdGUgdGhlIHN0b3JlIGluc3RhbmNlIHRoZSBmaXJzdCB0aW1lIHRoaXMgcmVuZGVyc1xuICAgIHN0b3JlUmVmLmN1cnJlbnQgPSBtYWtlU3RvcmUoKTtcbiAgfVxuICByZXR1cm4gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZVJlZi5jdXJyZW50fT57Y2hpbGRyZW59PC9Qcm92aWRlcj47XG59O1xuIl0sIm5hbWVzIjpbInVzZVJlZiIsIm1ha2VTdG9yZSIsIlByb3ZpZGVyIiwiYnVyZ2VyU2xpY2UiLCJjYXJ0U2xpY2UiLCJmYXZvdXJpdGVTbGljZSIsInByb2R1Y3RzU2xpY2UiLCJTdG9yZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdG9yZVJlZiIsImN1cnJlbnQiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/StoreProvider.jsx\n"));

/***/ })

});