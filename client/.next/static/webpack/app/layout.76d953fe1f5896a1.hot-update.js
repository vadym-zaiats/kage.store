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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Filter: function() { return /* binding */ Filter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _filter_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.module.scss */ \"(app-pages-browser)/./src/app/ui/filter/filter.module.scss\");\n/* harmony import */ var _filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_filter_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _menuHeader_MenuHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menuHeader/MenuHeader */ \"(app-pages-browser)/./src/app/ui/menuHeader/MenuHeader.jsx\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ Filter auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Filter() {\n    _s();\n    const { categories } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.availableFiltersSelector);\n    const categoryCheckboxCallback = (param)=>{\n        let { target } = param;\n        const { checked, name } = target;\n        if (checked) {\n            dispatch(addCategory(name));\n        } else {\n            dispatch(removeCategory(name));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuHeader_MenuHeader__WEBPACK_IMPORTED_MODULE_1__.MenuHeader, {\n                func: _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.setFilter\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter__content)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"\".concat((_filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter__title)),\n                        children: \"Фільтри\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            [\n                                ...categories\n                            ].map((param)=>{\n                                let { name, id } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter__variant),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter__input),\n                                            id: id,\n                                            type: \"checkbox\",\n                                            name: id,\n                                            value: name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: id,\n                                            className: (_filter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter__label),\n                                            children: name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, id, true, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"Ціна\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Filter, \"XWhIAlUvb18IzxMEJCFHCaw5F7c=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Filter;\nvar _c;\n$RefreshReg$(_c, \"Filter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZmlsdGVyL0ZpbHRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTBDO0FBQ1k7QUFDQztBQUluQjtBQUNNO0FBRW5DLFNBQVNNOztJQUNkLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdGLHdEQUFXQSxDQUFDRiwrRUFBd0JBO0lBRTNELE1BQU1LLDJCQUEyQjtZQUFDLEVBQUVDLE1BQU0sRUFBRTtRQUMxQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBQzFCLElBQUlDLFNBQVM7WUFDWEUsU0FBU0MsWUFBWUY7UUFDdkIsT0FBTztZQUNMQyxTQUFTRSxlQUFlSDtRQUMxQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVcsR0FBb0IsT0FBakJoQixtRUFBZ0I7OzBCQUNqQyw4REFBQ0MsOERBQVVBO2dCQUFDZ0IsTUFBTWYsZ0VBQVNBOzs7Ozs7MEJBQzNCLDhEQUFDYTtnQkFBSUMsV0FBVyxHQUE2QixPQUExQmhCLDRFQUF5Qjs7a0NBQzFDLDhEQUFDa0I7d0JBQUdGLFdBQVcsR0FBMkIsT0FBeEJoQiwwRUFBdUI7a0NBQUk7Ozs7OztrQ0FDN0MsOERBQUNtQjs7NEJBQ0U7bUNBQUlaOzZCQUFXLENBQUNhLEdBQUcsQ0FBQztvQ0FBQyxFQUFFVCxJQUFJLEVBQUVVLEVBQUUsRUFBRTtnQ0FDaEMscUJBQ0UsOERBQUNDO29DQUFZTixXQUFXaEIsNEVBQXlCOztzREFDL0MsOERBQUN1Qjs0Q0FDQ1AsV0FBV2hCLDBFQUF1Qjs0Q0FDbENxQixJQUFJQTs0Q0FDSkcsTUFBSzs0Q0FDTGIsTUFBTVU7NENBQ05JLE9BQU9kOzs7Ozs7c0RBSVQsOERBQUNlOzRDQUFNQyxTQUFTTjs0Q0FBSUwsV0FBV2hCLDBFQUF1QjtzREFDbkRXOzs7Ozs7O21DQVhJVTs7Ozs7NEJBZWI7MENBQ0EsOERBQUNDOzBDQUNDLDRFQUFDTTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEI7R0EzQ2dCdEI7O1FBQ1NELG9EQUFXQTs7O0tBRHBCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2ZpbHRlci9GaWx0ZXIuanN4PzRjYTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZmlsdGVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBNZW51SGVhZGVyIH0gZnJvbSBcIi4uL21lbnVIZWFkZXIvTWVudUhlYWRlclwiO1xuaW1wb3J0IHsgc2V0RmlsdGVyIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL2ZpbHRlclNsaWNlXCI7XG5pbXBvcnQge1xuICBhdmFpbGFibGVGaWx0ZXJzU2VsZWN0b3IsXG4gIGNhdGVnb3JpZXNTZWxlY3Rvcixcbn0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL2ZpbHRlclNsaWNlXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRmlsdGVyKCkge1xuICBjb25zdCB7IGNhdGVnb3JpZXMgfSA9IHVzZVNlbGVjdG9yKGF2YWlsYWJsZUZpbHRlcnNTZWxlY3Rvcik7XG5cbiAgY29uc3QgY2F0ZWdvcnlDaGVja2JveENhbGxiYWNrID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBjb25zdCB7IGNoZWNrZWQsIG5hbWUgfSA9IHRhcmdldDtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgZGlzcGF0Y2goYWRkQ2F0ZWdvcnkobmFtZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChyZW1vdmVDYXRlZ29yeShuYW1lKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZpbHRlclwiXX1gfT5cbiAgICAgIDxNZW51SGVhZGVyIGZ1bmM9e3NldEZpbHRlcn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmaWx0ZXJfX2NvbnRlbnRcIl19YH0+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZpbHRlcl9fdGl0bGVcIl19YH0+0KTRltC70YzRgtGA0Lg8L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge1suLi5jYXRlZ29yaWVzXS5tYXAoKHsgbmFtZSwgaWQgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17aWR9IGNsYXNzTmFtZT17c3R5bGVzW2BmaWx0ZXJfX3ZhcmlhbnRgXX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZmlsdGVyX19pbnB1dGBdfVxuICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2lkfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17fVxuICAgICAgICAgICAgICAgICAgLy8gY2hlY2tlZD17fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9e3N0eWxlc1tgZmlsdGVyX19sYWJlbGBdfT5cbiAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxoND7QptGW0L3QsDwvaDQ+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIk1lbnVIZWFkZXIiLCJzZXRGaWx0ZXIiLCJhdmFpbGFibGVGaWx0ZXJzU2VsZWN0b3IiLCJjYXRlZ29yaWVzU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsIkZpbHRlciIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeUNoZWNrYm94Q2FsbGJhY2siLCJ0YXJnZXQiLCJjaGVja2VkIiwibmFtZSIsImRpc3BhdGNoIiwiYWRkQ2F0ZWdvcnkiLCJyZW1vdmVDYXRlZ29yeSIsImRpdiIsImNsYXNzTmFtZSIsImZ1bmMiLCJoMyIsInVsIiwibWFwIiwiaWQiLCJsaSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwibGFiZWwiLCJodG1sRm9yIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/filter/Filter.jsx\n"));

/***/ })

});