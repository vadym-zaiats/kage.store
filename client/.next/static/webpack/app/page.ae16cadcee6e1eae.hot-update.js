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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/slices/productsSlice */ \"(app-pages-browser)/./src/redux/slices/productsSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_productsBlock_ProductsBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/productsBlock/ProductsBlock */ \"(app-pages-browser)/./src/app/ui/productsBlock/ProductsBlock.jsx\");\n/* harmony import */ var _ui_loader_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/loader/Loader */ \"(app-pages-browser)/./src/app/ui/loader/Loader.jsx\");\n/* harmony import */ var _ui_slider_Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/slider/Slider */ \"(app-pages-browser)/./src/app/ui/slider/Slider.jsx\");\n/* harmony import */ var _ui_instagram_Instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/instagram/Instagram */ \"(app-pages-browser)/./src/app/ui/instagram/Instagram.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.allProducts.isLoading);\n    const hotProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.allProducts.hotProducts);\n    const newProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.allProducts.newProducts);\n    const saleProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.allProducts.saleProducts);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_redux_slices_productsSlice__WEBPACK_IMPORTED_MODULE_1__.setAllProducts)());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default().main)\n    }, void 0, false, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/page.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"05wHAvuo12kh2a8nDggWHnfLvkA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFd0M7QUFDc0I7QUFDUDtBQUNyQjtBQUMrQjtBQUNyQjtBQUNBO0FBQ1M7QUFFdEMsU0FBU1M7O0lBQ3RCLE1BQU1DLFdBQVdSLHdEQUFXQTtJQUM1QixNQUFNUyxZQUFZUix3REFBV0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNQyxXQUFXLENBQUNGLFNBQVM7SUFDcEUsTUFBTUcsY0FBY1gsd0RBQVdBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsV0FBVyxDQUFDQyxXQUFXO0lBQ3hFLE1BQU1DLGNBQWNaLHdEQUFXQSxDQUFDLENBQUNTLFFBQVVBLE1BQU1DLFdBQVcsQ0FBQ0UsV0FBVztJQUN4RSxNQUFNQyxlQUFlYix3REFBV0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNQyxXQUFXLENBQUNHLFlBQVk7SUFDMUVaLGdEQUFTQSxDQUFDO1FBQ1JNLFNBQVNULDJFQUFjQTtJQUN6QixHQUFHO1FBQUNTO0tBQVM7SUFFYixxQkFDRSw4REFBQ087UUFBS0MsV0FBV2xCLCtEQUFjOzs7Ozs7QUFVbkM7R0FyQndCUzs7UUFDTFAsb0RBQVdBO1FBQ1ZDLG9EQUFXQTtRQUNUQSxvREFBV0E7UUFDWEEsb0RBQVdBO1FBQ1ZBLG9EQUFXQTs7O0tBTFZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBzZXRBbGxQcm9kdWN0cyB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9kdWN0c1NsaWNlXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvZHVjdHNCbG9jayB9IGZyb20gXCIuL3VpL3Byb2R1Y3RzQmxvY2svUHJvZHVjdHNCbG9ja1wiO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSBcIi4vdWkvbG9hZGVyL0xvYWRlclwiO1xuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcIi4vdWkvc2xpZGVyL1NsaWRlclwiO1xuaW1wb3J0IHsgSW5zdGFncmFtIH0gZnJvbSBcIi4vdWkvaW5zdGFncmFtL0luc3RhZ3JhbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWxsUHJvZHVjdHMuaXNMb2FkaW5nKTtcbiAgY29uc3QgaG90UHJvZHVjdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFsbFByb2R1Y3RzLmhvdFByb2R1Y3RzKTtcbiAgY29uc3QgbmV3UHJvZHVjdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFsbFByb2R1Y3RzLm5ld1Byb2R1Y3RzKTtcbiAgY29uc3Qgc2FsZVByb2R1Y3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbGxQcm9kdWN0cy5zYWxlUHJvZHVjdHMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldEFsbFByb2R1Y3RzKCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzW2BtYWluYF19PlxuICAgICAgey8qIHtpc0xvYWRpbmcgJiYgPExvYWRlciAvPn1cbiAgICAgIDxTbGlkZXIgcHJvZHVjdHM9e3NhbGVQcm9kdWN0c30gLz5cbiAgICAgIHshaXNMb2FkaW5nICYmIChcbiAgICAgICAgPFByb2R1Y3RzQmxvY2sgdGl0bGU9XCLQk9Cw0YDRj9GH0ZYg0L/RgNC+0L/QvtC30LjRhtGW0ZdcIiBwcm9kdWN0cz17aG90UHJvZHVjdHN9IC8+XG4gICAgICApfVxuICAgICAgeyFpc0xvYWRpbmcgJiYgPFByb2R1Y3RzQmxvY2sgdGl0bGU9XCLQndC+0LLQuNC90LrQuFwiIHByb2R1Y3RzPXtuZXdQcm9kdWN0c30gLz59ICovfVxuICAgICAgey8qIDxJbnN0YWdyYW0gLz4gKi99XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInNldEFsbFByb2R1Y3RzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUVmZmVjdCIsIlByb2R1Y3RzQmxvY2siLCJMb2FkZXIiLCJTbGlkZXIiLCJJbnN0YWdyYW0iLCJIb21lIiwiZGlzcGF0Y2giLCJpc0xvYWRpbmciLCJzdGF0ZSIsImFsbFByb2R1Y3RzIiwiaG90UHJvZHVjdHMiLCJuZXdQcm9kdWN0cyIsInNhbGVQcm9kdWN0cyIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});