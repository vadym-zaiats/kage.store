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

/***/ "(app-pages-browser)/./src/app/ui/filter/priceRange/PriceRange.jsx":
/*!*****************************************************!*\
  !*** ./src/app/ui/filter/priceRange/PriceRange.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PriceRange: function() { return /* binding */ PriceRange; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _priceRange_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priceRange.module.scss */ \"(app-pages-browser)/./src/app/ui/filter/priceRange/priceRange.module.scss\");\n/* harmony import */ var _priceRange_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ PriceRange auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction PriceRange() {\n    _s();\n    const min = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(availableFiltersSelector.price.min);\n    const max = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(availableFiltersSelector.price.max);\n    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(min);\n    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(max);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"price-range\"])),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"price-range__min\"])),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"price-range__min-input\"]),\n                        type: \"tel\",\n                        id: \"min\",\n                        name: \"min\",\n                        placeholder: minPrice\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        // onClick={}\n                        className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"price-range__min-label\"])),\n                        children: \"від\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"price-range__max\"])),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"price-range__max-input\"]),\n                        type: \"tel\",\n                        id: \"max\",\n                        name: \"max\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        // onClick={}\n                        className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"price-range__max-label\"])),\n                        children: \"до\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"price-range__button\"])),\n                children: \"Ok\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(PriceRange, \"4+vclCBuizLxgax3LrKnEIvQ9os=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = PriceRange;\nvar _c;\n$RefreshReg$(_c, \"PriceRange\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZmlsdGVyL3ByaWNlUmFuZ2UvUHJpY2VSYW5nZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRThDO0FBQ2I7QUFDUztBQUVuQyxTQUFTRzs7SUFDZCxNQUFNQyxNQUFNRix3REFBV0EsQ0FBQ0cseUJBQXlCQyxLQUFLLENBQUNGLEdBQUc7SUFDMUQsTUFBTUcsTUFBTUwsd0RBQVdBLENBQUNHLHlCQUF5QkMsS0FBSyxDQUFDQyxHQUFHO0lBQzFELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQ0c7SUFDekMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDTTtJQUV6QyxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVyxHQUF5QixPQUF0QmIsK0VBQXFCOzswQkFDdEMsOERBQUNZO2dCQUFJQyxXQUFXLEdBQThCLE9BQTNCYixvRkFBMEI7O2tDQUMzQyw4REFBQ2M7d0JBQ0NELFdBQVdiLDBGQUFnQzt3QkFDM0NlLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLGFBQWFWOzs7Ozs7a0NBTWYsOERBQUNXO3dCQUNDLGFBQWE7d0JBQ2JOLFdBQVcsR0FBb0MsT0FBakNiLDBGQUFnQztrQ0FDL0M7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ1k7Z0JBQUlDLFdBQVcsR0FBOEIsT0FBM0JiLG9GQUEwQjs7a0NBQzNDLDhEQUFDYzt3QkFDQ0QsV0FBV2IsMEZBQWdDO3dCQUMzQ2UsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSEMsTUFBSzs7Ozs7O2tDQU1QLDhEQUFDRTt3QkFDQyxhQUFhO3dCQUNiTixXQUFXLEdBQW9DLE9BQWpDYiwwRkFBZ0M7a0NBQy9DOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNvQjtnQkFBT1AsV0FBVyxHQUFpQyxPQUE5QmIsdUZBQTZCOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFHN0Q7R0FoRGdCRzs7UUFDRkQsb0RBQVdBO1FBQ1hBLG9EQUFXQTs7O0tBRlRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvZmlsdGVyL3ByaWNlUmFuZ2UvUHJpY2VSYW5nZS5qc3g/OTYzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wcmljZVJhbmdlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFByaWNlUmFuZ2UoKSB7XG4gIGNvbnN0IG1pbiA9IHVzZVNlbGVjdG9yKGF2YWlsYWJsZUZpbHRlcnNTZWxlY3Rvci5wcmljZS5taW4pO1xuICBjb25zdCBtYXggPSB1c2VTZWxlY3RvcihhdmFpbGFibGVGaWx0ZXJzU2VsZWN0b3IucHJpY2UubWF4KTtcbiAgY29uc3QgW21pblByaWNlLCBzZXRNaW5QcmljZV0gPSB1c2VTdGF0ZShtaW4pO1xuICBjb25zdCBbbWF4UHJpY2UsIHNldE1heFByaWNlXSA9IHVzZVN0YXRlKG1heCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzW1wicHJpY2UtcmFuZ2VcIl19YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzW1wicHJpY2UtcmFuZ2VfX21pblwiXX1gfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYHByaWNlLXJhbmdlX19taW4taW5wdXRgXX1cbiAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICBpZD1cIm1pblwiXG4gICAgICAgICAgbmFtZT1cIm1pblwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e21pblByaWNlfVxuICAgICAgICAgIC8vIHZhbHVlPXttaW5QcmljZX1cbiAgICAgICAgICAvLyBvbkNoYW5nZT17fVxuICAgICAgICAgIC8vIG9uQmx1cj17fVxuICAgICAgICAgIC8vIG9uRm9jdXM9e31cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgLy8gb25DbGljaz17fVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wicHJpY2UtcmFuZ2VfX21pbi1sYWJlbFwiXX1gfVxuICAgICAgICA+XG4gICAgICAgICAg0LLRltC0XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJwcmljZS1yYW5nZV9fbWF4XCJdfWB9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgcHJpY2UtcmFuZ2VfX21heC1pbnB1dGBdfVxuICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgIGlkPVwibWF4XCJcbiAgICAgICAgICBuYW1lPVwibWF4XCJcbiAgICAgICAgICAvLyB2YWx1ZT17bWF4UHJpY2V9XG4gICAgICAgICAgLy8gb25DaGFuZ2U9e31cbiAgICAgICAgICAvLyBvbkJsdXI9e31cbiAgICAgICAgICAvLyBvbkZvY3VzPXt9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIC8vIG9uQ2xpY2s9e31cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcInByaWNlLXJhbmdlX19tYXgtbGFiZWxcIl19YH1cbiAgICAgICAgPlxuICAgICAgICAgINC00L5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlc1tcInByaWNlLXJhbmdlX19idXR0b25cIl19YH0+T2s8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiUHJpY2VSYW5nZSIsIm1pbiIsImF2YWlsYWJsZUZpbHRlcnNTZWxlY3RvciIsInByaWNlIiwibWF4IiwibWluUHJpY2UiLCJzZXRNaW5QcmljZSIsIm1heFByaWNlIiwic2V0TWF4UHJpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/filter/priceRange/PriceRange.jsx\n"));

/***/ })

});