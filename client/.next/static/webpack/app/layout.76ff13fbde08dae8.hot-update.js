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

/***/ "(app-pages-browser)/./src/app/ui/filter/Filter.jsx":
/*!**************************************!*\
  !*** ./src/app/ui/filter/Filter.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Filter: function() { return /* binding */ Filter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _burgerMenu_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../burgerMenu/burgerMenu.module.scss */ \"(app-pages-browser)/./src/app/ui/burgerMenu/burgerMenu.module.scss\");\n/* harmony import */ var _burgerMenu_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_burgerMenu_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _menuHeader_MenuHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menuHeader/MenuHeader */ \"(app-pages-browser)/./src/app/ui/menuHeader/MenuHeader.jsx\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ Filter auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Filter() {\n    _s();\n    const { categories } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.availableFiltersSelector);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_burgerMenu_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuHeader_MenuHeader__WEBPACK_IMPORTED_MODULE_1__.MenuHeader, {\n                func: _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.setFilter\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_burgerMenu_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter__content)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"\".concat((_burgerMenu_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter__title)),\n                        children: \"Фільтри\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            [\n                                ...categories\n                            ].map((param)=>{\n                                let { name, id } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"\".concat((_burgerMenu_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"\"])),\n                                    children: name\n                                }, id, false, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"Ціна\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(Filter, \"XWhIAlUvb18IzxMEJCFHCaw5F7c=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Filter;\nvar _c;\n$RefreshReg$(_c, \"Filter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZmlsdGVyL0ZpbHRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTBEO0FBQ0o7QUFDQztBQUNlO0FBQzVCO0FBRW5DLFNBQVNLOztJQUNkLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdGLHdEQUFXQSxDQUFDRCwrRUFBd0JBO0lBQzNELHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFXLEdBQW9CLE9BQWpCUixrRkFBZ0I7OzBCQUNqQyw4REFBQ0MsOERBQVVBO2dCQUFDUSxNQUFNUCxnRUFBU0E7Ozs7OzswQkFDM0IsOERBQUNLO2dCQUFJQyxXQUFXLEdBQTZCLE9BQTFCUiwyRkFBeUI7O2tDQUMxQyw4REFBQ1U7d0JBQUdGLFdBQVcsR0FBMkIsT0FBeEJSLHlGQUF1QjtrQ0FBSTs7Ozs7O2tDQUM3Qyw4REFBQ1c7OzRCQUNFO21DQUFJTDs2QkFBVyxDQUFDTSxHQUFHLENBQUM7b0NBQUMsRUFBRUMsSUFBSSxFQUFFQyxFQUFFLEVBQUU7Z0NBQ2hDLHFCQUNFLDhEQUFDQztvQ0FBWVAsV0FBVyxHQUFjLE9BQVhSLCtFQUFVOzhDQUNsQ2E7bUNBRE1DOzs7Ozs0QkFJYjswQ0FDQSw4REFBQ0M7MENBQ0MsNEVBQUNDOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQjtHQXRCZ0JYOztRQUNTRCxvREFBV0E7OztLQURwQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9maWx0ZXIvRmlsdGVyLmpzeD80Y2EzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9idXJnZXJNZW51L2J1cmdlck1lbnUubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IE1lbnVIZWFkZXIgfSBmcm9tIFwiLi4vbWVudUhlYWRlci9NZW51SGVhZGVyXCI7XG5pbXBvcnQgeyBzZXRGaWx0ZXIgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvZmlsdGVyU2xpY2VcIjtcbmltcG9ydCB7IGF2YWlsYWJsZUZpbHRlcnNTZWxlY3RvciB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9maWx0ZXJTbGljZVwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEZpbHRlcigpIHtcbiAgY29uc3QgeyBjYXRlZ29yaWVzIH0gPSB1c2VTZWxlY3RvcihhdmFpbGFibGVGaWx0ZXJzU2VsZWN0b3IpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmaWx0ZXJcIl19YH0+XG4gICAgICA8TWVudUhlYWRlciBmdW5jPXtzZXRGaWx0ZXJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZmlsdGVyX19jb250ZW50XCJdfWB9PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmaWx0ZXJfX3RpdGxlXCJdfWB9PtCk0ZbQu9GM0YLRgNC4PC9oMz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtbLi4uY2F0ZWdvcmllc10ubWFwKCh7IG5hbWUsIGlkIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2lkfSBjbGFzc05hbWU9e2Ake3N0eWxlc1tcIlwiXX1gfT5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGg0PtCm0ZbQvdCwPC9oND5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiTWVudUhlYWRlciIsInNldEZpbHRlciIsImF2YWlsYWJsZUZpbHRlcnNTZWxlY3RvciIsInVzZVNlbGVjdG9yIiwiRmlsdGVyIiwiY2F0ZWdvcmllcyIsImRpdiIsImNsYXNzTmFtZSIsImZ1bmMiLCJoMyIsInVsIiwibWFwIiwibmFtZSIsImlkIiwibGkiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/filter/Filter.jsx\n"));

/***/ })

});