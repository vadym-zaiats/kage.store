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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Filter: function() { return /* binding */ Filter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _filter_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter.module.scss */ \"(app-pages-browser)/./src/app/ui/filter/filter.module.scss\");\n/* harmony import */ var _filter_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_filter_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _menuHeader_MenuHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menuHeader/MenuHeader */ \"(app-pages-browser)/./src/app/ui/menuHeader/MenuHeader.jsx\");\n/* harmony import */ var _priceRange_PriceRange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priceRange/PriceRange */ \"(app-pages-browser)/./src/app/ui/filter/priceRange/PriceRange.jsx\");\n/* harmony import */ var _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/filterSlice */ \"(app-pages-browser)/./src/redux/slices/filterSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ Filter auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Filter() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const { categories } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_3__.availableFiltersSelector);\n    const selectedCategories = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_3__.categoriesSelector);\n    const toggleCategory = (param)=>{\n        let { target } = param;\n        const { checked, name } = target;\n        if (checked) {\n            dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_3__.addCategory)(name));\n        } else {\n            dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_3__.removeCategory)(name));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_filter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuHeader_MenuHeader__WEBPACK_IMPORTED_MODULE_1__.MenuHeader, {\n                func: _redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_3__.setFilter\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_filter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filter__content)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"\".concat((_filter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filter__title)),\n                        children: \"Фільтри\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            [\n                                ...categories\n                            ].map((param)=>{\n                                let { name, id } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_filter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filter__variant),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_filter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filter__input),\n                                            id: id,\n                                            type: \"checkbox\",\n                                            name: id,\n                                            value: name,\n                                            onChange: toggleCategory,\n                                            checked: selectedCategories.includes(id)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: id,\n                                            className: (_filter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filter__label),\n                                            children: name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, id, true, {\n                                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_filter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filter__variant),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Ціна\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_priceRange_PriceRange__WEBPACK_IMPORTED_MODULE_2__.PriceRange, {}, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/filter/Filter.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Filter, \"QuU/ZGW+auAjaNVICVd4pKKY7VQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Filter;\nvar _c;\n$RefreshReg$(_c, \"Filter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZmlsdGVyL0ZpbHRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUwQztBQUNZO0FBQ0Q7QUFDc0I7QUFLdkM7QUFDbUI7QUFFaEQsU0FBU1U7O0lBQ2QsTUFBTUMsV0FBV0Ysd0RBQVdBO0lBQzVCLE1BQU0sRUFBRUcsVUFBVSxFQUFFLEdBQUdKLHdEQUFXQSxDQUFDSCwrRUFBd0JBO0lBQzNELE1BQU1RLHFCQUFxQkwsd0RBQVdBLENBQUNKLHlFQUFrQkE7SUFFekQsTUFBTVUsaUJBQWlCO1lBQUMsRUFBRUMsTUFBTSxFQUFFO1FBQ2hDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUUsR0FBR0Y7UUFDMUIsSUFBSUMsU0FBUztZQUNYTCxTQUFTTCxzRUFBV0EsQ0FBQ1c7UUFDdkIsT0FBTztZQUNMTixTQUFTSix5RUFBY0EsQ0FBQ1U7UUFDMUI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXLEdBQW9CLE9BQWpCbkIsbUVBQWdCOzswQkFDakMsOERBQUNDLDhEQUFVQTtnQkFBQ21CLE1BQU1qQixnRUFBU0E7Ozs7OzswQkFDM0IsOERBQUNlO2dCQUFJQyxXQUFXLEdBQTZCLE9BQTFCbkIsNEVBQXlCOztrQ0FDMUMsOERBQUNxQjt3QkFBR0YsV0FBVyxHQUEyQixPQUF4Qm5CLDBFQUF1QjtrQ0FBSTs7Ozs7O2tDQUM3Qyw4REFBQ3NCOzs0QkFDRTttQ0FBSVY7NkJBQVcsQ0FBQ1csR0FBRyxDQUFDO29DQUFDLEVBQUVOLElBQUksRUFBRU8sRUFBRSxFQUFFO2dDQUNoQyxxQkFDRSw4REFBQ0M7b0NBQVlOLFdBQVduQiw0RUFBeUI7O3NEQUMvQyw4REFBQzBCOzRDQUNDUCxXQUFXbkIsMEVBQXVCOzRDQUNsQ3dCLElBQUlBOzRDQUNKRyxNQUFLOzRDQUNMVixNQUFNTzs0Q0FDTkksT0FBT1g7NENBQ1BZLFVBQVVmOzRDQUNWRSxTQUFTSCxtQkFBbUJpQixRQUFRLENBQUNOOzs7Ozs7c0RBRXZDLDhEQUFDTzs0Q0FBTUMsU0FBU1I7NENBQUlMLFdBQVduQiwwRUFBdUI7c0RBQ25EaUI7Ozs7Ozs7bUNBWElPOzs7Ozs0QkFlYjswQ0FDQSw4REFBQ0M7Z0NBQUdOLFdBQVduQiw0RUFBeUI7O2tEQUN0Qyw4REFBQ2lDO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUMvQiw4REFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZCO0dBOUNnQlE7O1FBQ0dELG9EQUFXQTtRQUNMRCxvREFBV0E7UUFDUEEsb0RBQVdBOzs7S0FIeEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvZmlsdGVyL0ZpbHRlci5qc3g/NGNhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9maWx0ZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IE1lbnVIZWFkZXIgfSBmcm9tIFwiLi4vbWVudUhlYWRlci9NZW51SGVhZGVyXCI7XG5pbXBvcnQgeyBQcmljZVJhbmdlIH0gZnJvbSBcIi4vcHJpY2VSYW5nZS9QcmljZVJhbmdlXCI7XG5pbXBvcnQgeyBzZXRGaWx0ZXIsIGNhdGVnb3JpZXNTZWxlY3RvciB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9maWx0ZXJTbGljZVwiO1xuaW1wb3J0IHtcbiAgYXZhaWxhYmxlRmlsdGVyc1NlbGVjdG9yLFxuICBhZGRDYXRlZ29yeSxcbiAgcmVtb3ZlQ2F0ZWdvcnksXG59IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9maWx0ZXJTbGljZVwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBGaWx0ZXIoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBjYXRlZ29yaWVzIH0gPSB1c2VTZWxlY3RvcihhdmFpbGFibGVGaWx0ZXJzU2VsZWN0b3IpO1xuICBjb25zdCBzZWxlY3RlZENhdGVnb3JpZXMgPSB1c2VTZWxlY3RvcihjYXRlZ29yaWVzU2VsZWN0b3IpO1xuXG4gIGNvbnN0IHRvZ2dsZUNhdGVnb3J5ID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBjb25zdCB7IGNoZWNrZWQsIG5hbWUgfSA9IHRhcmdldDtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgZGlzcGF0Y2goYWRkQ2F0ZWdvcnkobmFtZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChyZW1vdmVDYXRlZ29yeShuYW1lKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZpbHRlclwiXX1gfT5cbiAgICAgIDxNZW51SGVhZGVyIGZ1bmM9e3NldEZpbHRlcn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJmaWx0ZXJfX2NvbnRlbnRcIl19YH0+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImZpbHRlcl9fdGl0bGVcIl19YH0+0KTRltC70YzRgtGA0Lg8L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge1suLi5jYXRlZ29yaWVzXS5tYXAoKHsgbmFtZSwgaWQgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17aWR9IGNsYXNzTmFtZT17c3R5bGVzW2BmaWx0ZXJfX3ZhcmlhbnRgXX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZmlsdGVyX19pbnB1dGBdfVxuICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2lkfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dG9nZ2xlQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENhdGVnb3JpZXMuaW5jbHVkZXMoaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9e3N0eWxlc1tgZmlsdGVyX19sYWJlbGBdfT5cbiAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlc1tgZmlsdGVyX192YXJpYW50YF19PlxuICAgICAgICAgICAgPGg1PtCm0ZbQvdCwPC9oNT5cbiAgICAgICAgICAgIDxQcmljZVJhbmdlIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIk1lbnVIZWFkZXIiLCJQcmljZVJhbmdlIiwic2V0RmlsdGVyIiwiY2F0ZWdvcmllc1NlbGVjdG9yIiwiYXZhaWxhYmxlRmlsdGVyc1NlbGVjdG9yIiwiYWRkQ2F0ZWdvcnkiLCJyZW1vdmVDYXRlZ29yeSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJGaWx0ZXIiLCJkaXNwYXRjaCIsImNhdGVnb3JpZXMiLCJzZWxlY3RlZENhdGVnb3JpZXMiLCJ0b2dnbGVDYXRlZ29yeSIsInRhcmdldCIsImNoZWNrZWQiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiZnVuYyIsImgzIiwidWwiLCJtYXAiLCJpZCIsImxpIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImluY2x1ZGVzIiwibGFiZWwiLCJodG1sRm9yIiwiaDUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/filter/Filter.jsx\n"));

/***/ })

});