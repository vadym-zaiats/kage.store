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

/***/ "(app-pages-browser)/./src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx":
/*!***********************************************************************!*\
  !*** ./src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BurgerMenuCatalog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../burgerMenu.module.scss */ \"(app-pages-browser)/./src/app/ui/burgerMenu/burgerMenu.module.scss\");\n/* harmony import */ var _burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_slices_burgerSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/slices/burgerSlice */ \"(app-pages-browser)/./src/redux/slices/burgerSlice.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BurgerMenuCatalog() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    function closeBurger() {\n        dispatch((0,_redux_slices_burgerSlice__WEBPACK_IMPORTED_MODULE_1__.setBurger)());\n        dispatch((0,_redux_slices_burgerSlice__WEBPACK_IMPORTED_MODULE_1__.setMainMenu)());\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"burger-menu__content\"])),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"\".concat((_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"burger-menu__title\"])),\n                children: \"Каталог\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"\".concat((_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"burger-menu__list\"])),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"burger-menu__item\"])),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/products\",\n                            onClick: ()=>{\n                                dispatch((0,_redux_slices_burgerSlice__WEBPACK_IMPORTED_MODULE_1__.setBurger)());\n                            },\n                            children: \"Усі товари\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"burger-menu__item\"])),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/products/t-shirts\",\n                            onClick: ()=>{\n                                dispatch((0,_redux_slices_burgerSlice__WEBPACK_IMPORTED_MODULE_1__.setBurger)());\n                            },\n                            children: \"Футболки\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"burger-menu__item\"])),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/products/hoodies\",\n                            onClick: ()=>{\n                                dispatch((0,_redux_slices_burgerSlice__WEBPACK_IMPORTED_MODULE_1__.setBurger)());\n                            },\n                            children: \"Худі\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_burgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"burger-menu__item\"])),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/products/pillows\",\n                            onClick: ()=>{\n                                dispatch((0,_redux_slices_burgerSlice__WEBPACK_IMPORTED_MODULE_1__.setBurger)());\n                            },\n                            children: \"Подушки\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(BurgerMenuCatalog, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = BurgerMenuCatalog;\nvar _c;\n$RefreshReg$(_c, \"BurgerMenuCatalog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvYnVyZ2VyTWVudS9idXJnZXJNZW51Q2F0YWxvZy9idXJnZXJNZW51Q2F0YWxvZy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQztBQUNxQjtBQUN2QztBQUNhO0FBRTNCLFNBQVNLOztJQUN0QixNQUFNQyxXQUFXRix3REFBV0E7SUFDNUIsU0FBU0c7UUFDUEQsU0FBU0wsb0VBQVNBO1FBQ2xCSyxTQUFTSixzRUFBV0E7SUFDdEI7SUFDQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVyxHQUFrQyxPQUEvQlQsd0ZBQThCOzswQkFDL0MsOERBQUNVO2dCQUFHRCxXQUFXLEdBQWdDLE9BQTdCVCxzRkFBNEI7MEJBQUk7Ozs7OzswQkFDbEQsOERBQUNXO2dCQUFHRixXQUFXLEdBQStCLE9BQTVCVCxxRkFBMkI7O2tDQUMzQyw4REFBQ1k7d0JBQUdILFdBQVcsR0FBK0IsT0FBNUJULHFGQUEyQjtrQ0FDM0MsNEVBQUNHLGtEQUFJQTs0QkFDSFUsTUFBSzs0QkFDTEMsU0FBUztnQ0FDUFIsU0FBU0wsb0VBQVNBOzRCQUNwQjtzQ0FDRDs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNXO3dCQUFHSCxXQUFXLEdBQStCLE9BQTVCVCxxRkFBMkI7a0NBQzNDLDRFQUFDRyxrREFBSUE7NEJBQ0hVLE1BQUs7NEJBQ0xDLFNBQVM7Z0NBQ1BSLFNBQVNMLG9FQUFTQTs0QkFDcEI7c0NBQ0Q7Ozs7Ozs7Ozs7O2tDQUlILDhEQUFDVzt3QkFBR0gsV0FBVyxHQUErQixPQUE1QlQscUZBQTJCO2tDQUMzQyw0RUFBQ0csa0RBQUlBOzRCQUNIVSxNQUFLOzRCQUNMQyxTQUFTO2dDQUNQUixTQUFTTCxvRUFBU0E7NEJBQ3BCO3NDQUNEOzs7Ozs7Ozs7OztrQ0FJSCw4REFBQ1c7d0JBQUdILFdBQVcsR0FBK0IsT0FBNUJULHFGQUEyQjtrQ0FDM0MsNEVBQUNHLGtEQUFJQTs0QkFDSFUsTUFBSzs0QkFDTEMsU0FBUztnQ0FDUFIsU0FBU0wsb0VBQVNBOzRCQUNwQjtzQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXJEd0JJOztRQUNMRCxvREFBV0E7OztLQUROQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2J1cmdlck1lbnUvYnVyZ2VyTWVudUNhdGFsb2cvYnVyZ2VyTWVudUNhdGFsb2cuanN4PzQxYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vYnVyZ2VyTWVudS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgc2V0QnVyZ2VyLCBzZXRNYWluTWVudSB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9idXJnZXJTbGljZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVyZ2VyTWVudUNhdGFsb2coKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgZnVuY3Rpb24gY2xvc2VCdXJnZXIoKSB7XG4gICAgZGlzcGF0Y2goc2V0QnVyZ2VyKCkpO1xuICAgIGRpc3BhdGNoKHNldE1haW5NZW51KCkpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImJ1cmdlci1tZW51X19jb250ZW50XCJdfWB9PlxuICAgICAgPGgzIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiYnVyZ2VyLW1lbnVfX3RpdGxlXCJdfWB9PtCa0LDRgtCw0LvQvtCzPC9oMz5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImJ1cmdlci1tZW51X19saXN0XCJdfWB9PlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJidXJnZXItbWVudV9faXRlbVwiXX1gfT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWN0c1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHNldEJ1cmdlcigpKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAg0KPRgdGWINGC0L7QstCw0YDQuFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiYnVyZ2VyLW1lbnVfX2l0ZW1cIl19YH0+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVjdHMvdC1zaGlydHNcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChzZXRCdXJnZXIoKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgINCk0YPRgtCx0L7Qu9C60LhcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImJ1cmdlci1tZW51X19pdGVtXCJdfWB9PlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPVwiL3Byb2R1Y3RzL2hvb2RpZXNcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChzZXRCdXJnZXIoKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgINCl0YPQtNGWXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJidXJnZXItbWVudV9faXRlbVwiXX1gfT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWN0cy9waWxsb3dzXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0QnVyZ2VyKCkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDQn9C+0LTRg9GI0LrQuFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwic2V0QnVyZ2VyIiwic2V0TWFpbk1lbnUiLCJMaW5rIiwidXNlRGlzcGF0Y2giLCJCdXJnZXJNZW51Q2F0YWxvZyIsImRpc3BhdGNoIiwiY2xvc2VCdXJnZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInVsIiwibGkiLCJocmVmIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/burgerMenu/burgerMenuCatalog/burgerMenuCatalog.jsx\n"));

/***/ })

});