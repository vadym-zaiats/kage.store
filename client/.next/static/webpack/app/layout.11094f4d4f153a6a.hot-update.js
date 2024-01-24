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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Filter: function() { return /* binding */ Filter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _filter_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.module.scss */ \"(app-pages-browser)/./src/app/ui/filter/filter.module.scss\");\n/* harmony import */ var _filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_filter_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _menuHeader_MenuHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menuHeader/MenuHeader */ \"(app-pages-browser)/./src/app/ui/menuHeader/MenuHeader.jsx\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ Filter auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Filter() {\n    _s();\n    const { categories } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.availableFiltersSelector);\n    const categoryCheckboxCallback = (param)=>{\n        let { target } = param;\n        const { checked, name } = target;\n        if (checked) {\n            dispatch(addCategory(name));\n        } else {\n            dispatch(removeCategory(name));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuHeader_MenuHeader__WEBPACK_IMPORTED_MODULE_1__.MenuHeader, {\n                func: _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.setFilter\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter__content)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"\".concat((_filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter__title)),\n                        children: \"Фільтри\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            [\n                                ...categories\n                            ].map((param)=>{\n                                let { name, id } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter__variant),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter__input),\n                                            id: id,\n                                            type: \"checkbox\",\n                                            name: id,\n                                            value: name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: id,\n                                            className: (_filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter__label),\n                                            children: name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, id, true, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"Ціна\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Filter, \"XWhIAlUvb18IzxMEJCFHCaw5F7c=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Filter;\nvar _c;\n$RefreshReg$(_c, \"Filter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZmlsdGVyL0ZpbHRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTBDO0FBQ1k7QUFDQztBQUNlO0FBQzVCO0FBRW5DLFNBQVNLOztJQUNkLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdGLHdEQUFXQSxDQUFDRCwrRUFBd0JBO0lBRTNELE1BQU1JLDJCQUEyQjtZQUFDLEVBQUVDLE1BQU0sRUFBRTtRQUMxQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBQzFCLElBQUlDLFNBQVM7WUFDWEUsU0FBU0MsWUFBWUY7UUFDdkIsT0FBTztZQUNMQyxTQUFTRSxlQUFlSDtRQUMxQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVcsR0FBb0IsT0FBakJmLG1FQUFnQjs7MEJBQ2pDLDhEQUFDQyw4REFBVUE7Z0JBQUNlLE1BQU1kLGdFQUFTQTs7Ozs7OzBCQUMzQiw4REFBQ1k7Z0JBQUlDLFdBQVcsR0FBNkIsT0FBMUJmLDRFQUF5Qjs7a0NBQzFDLDhEQUFDaUI7d0JBQUdGLFdBQVcsR0FBMkIsT0FBeEJmLDBFQUF1QjtrQ0FBSTs7Ozs7O2tDQUM3Qyw4REFBQ2tCOzs0QkFDRTttQ0FBSVo7NkJBQVcsQ0FBQ2EsR0FBRyxDQUFDO29DQUFDLEVBQUVULElBQUksRUFBRVUsRUFBRSxFQUFFO2dDQUNoQyxxQkFDRSw4REFBQ0M7b0NBQVlOLFdBQVdmLDRFQUF5Qjs7c0RBQy9DLDhEQUFDc0I7NENBQ0NQLFdBQVdmLDBFQUF1Qjs0Q0FDbENvQixJQUFJQTs0Q0FDSkcsTUFBSzs0Q0FDTGIsTUFBTVU7NENBQ05JLE9BQU9kOzs7Ozs7c0RBSVQsOERBQUNlOzRDQUFNQyxTQUFTTjs0Q0FBSUwsV0FBV2YsMEVBQXVCO3NEQUNuRFU7Ozs7Ozs7bUNBWElVOzs7Ozs0QkFlYjswQ0FDQSw4REFBQ0M7MENBQ0MsNEVBQUNNOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQjtHQTNDZ0J0Qjs7UUFDU0Qsb0RBQVdBOzs7S0FEcEJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvZmlsdGVyL0ZpbHRlci5qc3g/NGNhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9maWx0ZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IE1lbnVIZWFkZXIgfSBmcm9tIFwiLi4vbWVudUhlYWRlci9NZW51SGVhZGVyXCI7XG5pbXBvcnQgeyBzZXRGaWx0ZXIgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvZmlsdGVyU2xpY2VcIjtcbmltcG9ydCB7IGF2YWlsYWJsZUZpbHRlcnNTZWxlY3RvciB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9maWx0ZXJTbGljZVwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEZpbHRlcigpIHtcbiAgY29uc3QgeyBjYXRlZ29yaWVzIH0gPSB1c2VTZWxlY3RvcihhdmFpbGFibGVGaWx0ZXJzU2VsZWN0b3IpO1xuXG4gIGNvbnN0IGNhdGVnb3J5Q2hlY2tib3hDYWxsYmFjayA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgY29uc3QgeyBjaGVja2VkLCBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIGRpc3BhdGNoKGFkZENhdGVnb3J5KG5hbWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2gocmVtb3ZlQ2F0ZWdvcnkobmFtZSkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmaWx0ZXJcIl19YH0+XG4gICAgICA8TWVudUhlYWRlciBmdW5jPXtzZXRGaWx0ZXJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZmlsdGVyX19jb250ZW50XCJdfWB9PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmaWx0ZXJfX3RpdGxlXCJdfWB9PtCk0ZbQu9GM0YLRgNC4PC9oMz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtbLi4uY2F0ZWdvcmllc10ubWFwKCh7IG5hbWUsIGlkIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2lkfSBjbGFzc05hbWU9e3N0eWxlc1tgZmlsdGVyX192YXJpYW50YF19PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZpbHRlcl9faW5wdXRgXX1cbiAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPXtpZH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e31cbiAgICAgICAgICAgICAgICAgIC8vIGNoZWNrZWQ9e31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPXtzdHlsZXNbYGZpbHRlcl9fbGFiZWxgXX0+XG4gICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aDQ+0KbRltC90LA8L2g0PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJNZW51SGVhZGVyIiwic2V0RmlsdGVyIiwiYXZhaWxhYmxlRmlsdGVyc1NlbGVjdG9yIiwidXNlU2VsZWN0b3IiLCJGaWx0ZXIiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnlDaGVja2JveENhbGxiYWNrIiwidGFyZ2V0IiwiY2hlY2tlZCIsIm5hbWUiLCJkaXNwYXRjaCIsImFkZENhdGVnb3J5IiwicmVtb3ZlQ2F0ZWdvcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJmdW5jIiwiaDMiLCJ1bCIsIm1hcCIsImlkIiwibGkiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImxhYmVsIiwiaHRtbEZvciIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/filter/Filter.jsx\n"));

/***/ })

});