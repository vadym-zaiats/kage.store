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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PriceRange: function() { return /* binding */ PriceRange; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _priceRange_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priceRange.module.scss */ \"(app-pages-browser)/./src/app/ui/filter/priceRange/priceRange.module.scss\");\n/* harmony import */ var _priceRange_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* __next_internal_client_entry_do_not_use__ PriceRange auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PriceRange() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const min = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.minPriceSelector);\n    const max = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.maxPriceSelector);\n    const minPrice = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.selectedMinPriceSelector);\n    const maxPrice = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.selectedMaxPriceSelector);\n    const [minPriceFilter, setMinPriceFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(minPrice);\n    const [maxPriceFilter, setMaxPriceFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(maxPrice);\n    const handleMinPriceFilter = (e)=>{\n        setMinPriceFilter(e.target.value);\n    };\n    const handleMaxPriceFilter = (e)=>{\n        setMaxPriceFilter(e.target.value);\n    };\n    const handleAprovePriceFilter = ()=>{\n        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.setMinPrice)(minPriceFilter));\n        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.setMaxPrice)(maxPriceFilter));\n    };\n    const handleResetFilter = ()=>{\n        dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.resetFilters)());\n        setMinPriceFilter();\n        setMaxPriceFilter();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"price-range\"])),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"price-range__min\"])),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"price-range__min-input\"]),\n                        type: \"number\",\n                        id: \"min\",\n                        name: \"min\",\n                        placeholder: min,\n                        value: minPriceFilter !== null && minPriceFilter,\n                        onChange: handleMinPriceFilter\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"price-range__min-label\"])),\n                        children: \"від\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"price-range__max\"])),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"price-range__max-input\"]),\n                        type: \"number\",\n                        id: \"max\",\n                        name: \"max\",\n                        placeholder: max,\n                        value: maxPriceFilter !== null && maxPriceFilter,\n                        onChange: handleMaxPriceFilter\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"price-range__max-label\"])),\n                        children: \"до\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"price-range__button\"])),\n                onClick: handleAprovePriceFilter,\n                children: \"Ok\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat((_priceRange_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"price-range__button\"])),\n                onClick: handleResetFilter,\n                children: \"Скинути\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/priceRange/PriceRange.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(PriceRange, \"E0b+SmyLAqvydxXMBiF9nqoj7vE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = PriceRange;\nvar _c;\n$RefreshReg$(_c, \"PriceRange\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZmlsdGVyL3ByaWNlUmFuZ2UvUHJpY2VSYW5nZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU4QztBQUNiO0FBQ3NCO0FBQ3lCO0FBTzVDO0FBRTdCLFNBQVNXOztJQUNkLE1BQU1DLFdBQVdULHdEQUFXQTtJQUM1QixNQUFNVSxNQUFNWCx3REFBV0EsQ0FBQ0UsdUVBQWdCQTtJQUN4QyxNQUFNVSxNQUFNWix3REFBV0EsQ0FBQ0csdUVBQWdCQTtJQUN4QyxNQUFNVSxXQUFXYix3REFBV0EsQ0FBQ08sK0VBQXdCQTtJQUNyRCxNQUFNTyxXQUFXZCx3REFBV0EsQ0FBQ1EsK0VBQXdCQTtJQUNyRCxNQUFNLENBQUNPLGdCQUFnQkMsa0JBQWtCLEdBQUdqQiwrQ0FBUUEsQ0FBQ2M7SUFDckQsTUFBTSxDQUFDSSxnQkFBZ0JDLGtCQUFrQixHQUFHbkIsK0NBQVFBLENBQUNlO0lBRXJELE1BQU1LLHVCQUF1QixDQUFDQztRQUM1Qkosa0JBQWtCSSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDbEM7SUFDQSxNQUFNQyx1QkFBdUIsQ0FBQ0g7UUFDNUJGLGtCQUFrQkUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2xDO0lBQ0EsTUFBTUUsMEJBQTBCO1FBQzlCZCxTQUFTTCxzRUFBV0EsQ0FBQ1U7UUFDckJMLFNBQVNOLHNFQUFXQSxDQUFDYTtJQUN2QjtJQUNBLE1BQU1RLG9CQUFvQjtRQUN4QmYsU0FBU0osdUVBQVlBO1FBQ3JCVTtRQUNBRTtJQUNGO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVcsR0FBeUIsT0FBdEI3QiwrRUFBcUI7OzBCQUN0Qyw4REFBQzRCO2dCQUFJQyxXQUFXLEdBQThCLE9BQTNCN0Isb0ZBQTBCOztrQ0FDM0MsOERBQUM4Qjt3QkFDQ0QsV0FBVzdCLDBGQUFnQzt3QkFDM0MrQixNQUFLO3dCQUNMQyxJQUFHO3dCQUNIQyxNQUFLO3dCQUNMQyxhQUFhckI7d0JBQ2JXLE9BQU9QLG1CQUFtQixRQUFRQTt3QkFDbENrQixVQUFVZDs7Ozs7O2tDQUVaLDhEQUFDZTt3QkFBTVAsV0FBVyxHQUFvQyxPQUFqQzdCLDBGQUFnQztrQ0FBSTs7Ozs7Ozs7Ozs7OzBCQUUzRCw4REFBQzRCO2dCQUFJQyxXQUFXLEdBQThCLE9BQTNCN0Isb0ZBQTBCOztrQ0FDM0MsOERBQUM4Qjt3QkFDQ0QsV0FBVzdCLDBGQUFnQzt3QkFDM0MrQixNQUFLO3dCQUNMQyxJQUFHO3dCQUNIQyxNQUFLO3dCQUNMQyxhQUFhcEI7d0JBQ2JVLE9BQU9MLG1CQUFtQixRQUFRQTt3QkFDbENnQixVQUFVVjs7Ozs7O2tDQUVaLDhEQUFDVzt3QkFBTVAsV0FBVyxHQUFvQyxPQUFqQzdCLDBGQUFnQztrQ0FBSTs7Ozs7Ozs7Ozs7OzBCQUUzRCw4REFBQ3FDO2dCQUNDUixXQUFXLEdBQWlDLE9BQTlCN0IsdUZBQTZCO2dCQUMzQ3NDLFNBQVNaOzBCQUNWOzs7Ozs7MEJBR0QsOERBQUNXO2dCQUNDUixXQUFXLEdBQWlDLE9BQTlCN0IsdUZBQTZCO2dCQUMzQ3NDLFNBQVNYOzBCQUNWOzs7Ozs7Ozs7Ozs7QUFLUDtHQWpFZ0JoQjs7UUFDR1Isb0RBQVdBO1FBQ2hCRCxvREFBV0E7UUFDWEEsb0RBQVdBO1FBQ05BLG9EQUFXQTtRQUNYQSxvREFBV0E7OztLQUxkUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2ZpbHRlci9wcmljZVJhbmdlL1ByaWNlUmFuZ2UuanN4Pzk2M2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJpY2VSYW5nZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3RvciB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9maWx0ZXJTbGljZVwiO1xuaW1wb3J0IHtcbiAgc2V0TWF4UHJpY2UsXG4gIHNldE1pblByaWNlLFxuICByZXNldEZpbHRlcnMsXG4gIHNlbGVjdGVkTWluUHJpY2VTZWxlY3RvcixcbiAgc2VsZWN0ZWRNYXhQcmljZVNlbGVjdG9yLFxufSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvZmlsdGVyU2xpY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFByaWNlUmFuZ2UoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgbWluID0gdXNlU2VsZWN0b3IobWluUHJpY2VTZWxlY3Rvcik7XG4gIGNvbnN0IG1heCA9IHVzZVNlbGVjdG9yKG1heFByaWNlU2VsZWN0b3IpO1xuICBjb25zdCBtaW5QcmljZSA9IHVzZVNlbGVjdG9yKHNlbGVjdGVkTWluUHJpY2VTZWxlY3Rvcik7XG4gIGNvbnN0IG1heFByaWNlID0gdXNlU2VsZWN0b3Ioc2VsZWN0ZWRNYXhQcmljZVNlbGVjdG9yKTtcbiAgY29uc3QgW21pblByaWNlRmlsdGVyLCBzZXRNaW5QcmljZUZpbHRlcl0gPSB1c2VTdGF0ZShtaW5QcmljZSk7XG4gIGNvbnN0IFttYXhQcmljZUZpbHRlciwgc2V0TWF4UHJpY2VGaWx0ZXJdID0gdXNlU3RhdGUobWF4UHJpY2UpO1xuXG4gIGNvbnN0IGhhbmRsZU1pblByaWNlRmlsdGVyID0gKGUpID0+IHtcbiAgICBzZXRNaW5QcmljZUZpbHRlcihlLnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZU1heFByaWNlRmlsdGVyID0gKGUpID0+IHtcbiAgICBzZXRNYXhQcmljZUZpbHRlcihlLnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUFwcm92ZVByaWNlRmlsdGVyID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldE1pblByaWNlKG1pblByaWNlRmlsdGVyKSk7XG4gICAgZGlzcGF0Y2goc2V0TWF4UHJpY2UobWF4UHJpY2VGaWx0ZXIpKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlUmVzZXRGaWx0ZXIgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVzZXRGaWx0ZXJzKCkpO1xuICAgIHNldE1pblByaWNlRmlsdGVyKCk7XG4gICAgc2V0TWF4UHJpY2VGaWx0ZXIoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJwcmljZS1yYW5nZVwiXX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJwcmljZS1yYW5nZV9fbWluXCJdfWB9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgcHJpY2UtcmFuZ2VfX21pbi1pbnB1dGBdfVxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwibWluXCJcbiAgICAgICAgICBuYW1lPVwibWluXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17bWlufVxuICAgICAgICAgIHZhbHVlPXttaW5QcmljZUZpbHRlciAhPT0gbnVsbCAmJiBtaW5QcmljZUZpbHRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWluUHJpY2VGaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Ake3N0eWxlc1tcInByaWNlLXJhbmdlX19taW4tbGFiZWxcIl19YH0+0LLRltC0PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc1tcInByaWNlLXJhbmdlX19tYXhcIl19YH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BwcmljZS1yYW5nZV9fbWF4LWlucHV0YF19XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9XCJtYXhcIlxuICAgICAgICAgIG5hbWU9XCJtYXhcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPXttYXh9XG4gICAgICAgICAgdmFsdWU9e21heFByaWNlRmlsdGVyICE9PSBudWxsICYmIG1heFByaWNlRmlsdGVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNYXhQcmljZUZpbHRlcn1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wicHJpY2UtcmFuZ2VfX21heC1sYWJlbFwiXX1gfT7QtNC+PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcInByaWNlLXJhbmdlX19idXR0b25cIl19YH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQXByb3ZlUHJpY2VGaWx0ZXJ9XG4gICAgICA+XG4gICAgICAgIE9rXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJwcmljZS1yYW5nZV9fYnV0dG9uXCJdfWB9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc2V0RmlsdGVyfVxuICAgICAgPlxuICAgICAgICDQodC60LjQvdGD0YLQuFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwibWluUHJpY2VTZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJzZXRNYXhQcmljZSIsInNldE1pblByaWNlIiwicmVzZXRGaWx0ZXJzIiwic2VsZWN0ZWRNaW5QcmljZVNlbGVjdG9yIiwic2VsZWN0ZWRNYXhQcmljZVNlbGVjdG9yIiwiUHJpY2VSYW5nZSIsImRpc3BhdGNoIiwibWluIiwibWF4IiwibWluUHJpY2UiLCJtYXhQcmljZSIsIm1pblByaWNlRmlsdGVyIiwic2V0TWluUHJpY2VGaWx0ZXIiLCJtYXhQcmljZUZpbHRlciIsInNldE1heFByaWNlRmlsdGVyIiwiaGFuZGxlTWluUHJpY2VGaWx0ZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVNYXhQcmljZUZpbHRlciIsImhhbmRsZUFwcm92ZVByaWNlRmlsdGVyIiwiaGFuZGxlUmVzZXRGaWx0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibGFiZWwiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/filter/priceRange/PriceRange.jsx\n"));

/***/ })

});