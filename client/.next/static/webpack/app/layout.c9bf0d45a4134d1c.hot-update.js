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

/***/ "(app-pages-browser)/./src/app/ui/menuHeader/MenuHeader.jsx":
/*!**********************************************!*\
  !*** ./src/app/ui/menuHeader/MenuHeader.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuHeader: function() { return /* binding */ MenuHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuHeader.module.scss */ \"(app-pages-browser)/./src/app/ui/menuHeader/menuHeader.module.scss\");\n/* harmony import */ var _menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/userSlice */ \"(app-pages-browser)/./src/redux/slices/userSlice.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MenuHeader(param) {\n    let { func, loginButton } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const userIsLogin = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_redux_slices_userSlice__WEBPACK_IMPORTED_MODULE_2__.userSelector);\n    console.log(userIsLogin);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"\".concat((_menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"menu-head\"])),\n        children: [\n            loginButton && !userIsLogin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/login\",\n                    className: \"\".concat((_menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"menu-login\"])),\n                    onClick: ()=>{\n                        dispatch(func());\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/imgs/login.png\",\n                        width: 35,\n                        height: 35,\n                        alt: \"login\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this),\n            loginButton && userIsLogin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    className: \"\".concat((_menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"menu-login\"])),\n                    onClick: ()=>{\n                        dispatch(func());\n                        localStorage.removeItem(\"token\");\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/imgs/logout.png\",\n                        width: 35,\n                        height: 35,\n                        alt: \"login\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/imgs/logo-removebg.png\",\n                    width: 70,\n                    height: 70,\n                    alt: \"burger\",\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"menu-close\"])),\n                    onClick: ()=>{\n                        dispatch(func());\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/imgs/close.png\",\n                        width: 25,\n                        height: 25,\n                        alt: \"burger\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(MenuHeader, \"J8nMxgKTrOF7BtAQhGdKlhku6RE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = MenuHeader;\nvar _c;\n$RefreshReg$(_c, \"MenuHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvbWVudUhlYWRlci9NZW51SGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDZjtBQUN3QjtBQUNZO0FBQ3RDO0FBRXRCLFNBQVNPLFdBQVcsS0FBcUI7UUFBckIsRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUUsR0FBckI7O0lBQ3pCLE1BQU1DLFdBQVdSLHdEQUFXQTtJQUM1QixNQUFNUyxjQUFjUix3REFBV0EsQ0FBQ0MsaUVBQVlBO0lBQzVDUSxRQUFRQyxHQUFHLENBQUNGO0lBQ1oscUJBQ0UsOERBQUNHO1FBQUdDLFdBQVcsR0FBdUIsT0FBcEJmLDZFQUFtQjs7WUFDbENTLGVBQWUsQ0FBQ0UsNkJBQ2YsOERBQUNLOzBCQUNDLDRFQUFDVixrREFBSUE7b0JBQ0hXLE1BQUs7b0JBQ0xGLFdBQVcsR0FBd0IsT0FBckJmLDhFQUFvQjtvQkFDbENrQixTQUFTO3dCQUNQUixTQUFTRjtvQkFDWDs4QkFFQSw0RUFBQ1AsbURBQUtBO3dCQUNKa0IsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSTt3QkFDSkMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztZQUtmZCxlQUFlRSw2QkFDZCw4REFBQ0s7MEJBQ0MsNEVBQUNWLGtEQUFJQTtvQkFDSFcsTUFBSztvQkFDTEYsV0FBVyxHQUF3QixPQUFyQmYsOEVBQW9CO29CQUNsQ2tCLFNBQVM7d0JBQ1BSLFNBQVNGO3dCQUNUZ0IsYUFBYUMsVUFBVSxDQUFDO29CQUMxQjs4QkFFQSw0RUFBQ3hCLG1EQUFLQTt3QkFDSmtCLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLEtBQUk7d0JBQ0pDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2hCLDhEQUFDUDswQkFDQyw0RUFBQ2YsbURBQUtBO29CQUNKa0IsS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsS0FBSTtvQkFDSkMsUUFBUTs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNQOzBCQUNDLDRFQUFDVTtvQkFDQ1gsV0FBVyxHQUF3QixPQUFyQmYsOEVBQW9CO29CQUNsQ2tCLFNBQVM7d0JBQ1BSLFNBQVNGO29CQUNYOzhCQUVBLDRFQUFDUCxtREFBS0E7d0JBQ0prQixLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJO3dCQUNKQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0dBeEVnQmhCOztRQUNHTCxvREFBV0E7UUFDUkMsb0RBQVdBOzs7S0FGakJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvbWVudUhlYWRlci9NZW51SGVhZGVyLmpzeD9jZDgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbWVudUhlYWRlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZXJTZWxlY3RvciwgY2xlYXJVc2VyIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3VzZXJTbGljZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gTWVudUhlYWRlcih7IGZ1bmMsIGxvZ2luQnV0dG9uIH0pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB1c2VySXNMb2dpbiA9IHVzZVNlbGVjdG9yKHVzZXJTZWxlY3Rvcik7XG4gIGNvbnNvbGUubG9nKHVzZXJJc0xvZ2luKTtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJtZW51LWhlYWRcIl19YH0+XG4gICAgICB7bG9naW5CdXR0b24gJiYgIXVzZXJJc0xvZ2luICYmIChcbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPVwiL2xvZ2luXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wibWVudS1sb2dpblwiXX1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChmdW5jKCkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL2ltZ3MvbG9naW4ucG5nXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxuICAgICAgICAgICAgICBhbHQ9XCJsb2dpblwiXG4gICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICl9XG4gICAgICB7bG9naW5CdXR0b24gJiYgdXNlcklzTG9naW4gJiYgKFxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wibWVudS1sb2dpblwiXX1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChmdW5jKCkpO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL2ltZ3MvbG9nb3V0LnBuZ1wiXG4gICAgICAgICAgICAgIHdpZHRoPXszNX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cbiAgICAgICAgICAgICAgYWx0PVwibG9naW5cIlxuICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApfVxuICAgICAgPGxpPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvaW1ncy9sb2dvLXJlbW92ZWJnLnBuZ1wiXG4gICAgICAgICAgd2lkdGg9ezcwfVxuICAgICAgICAgIGhlaWdodD17NzB9XG4gICAgICAgICAgYWx0PVwiYnVyZ2VyXCJcbiAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAvPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wibWVudS1jbG9zZVwiXX1gfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZ1bmMoKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL2ltZ3MvY2xvc2UucG5nXCJcbiAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICBhbHQ9XCJidXJnZXJcIlxuICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJbWFnZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VyU2VsZWN0b3IiLCJjbGVhclVzZXIiLCJMaW5rIiwiTWVudUhlYWRlciIsImZ1bmMiLCJsb2dpbkJ1dHRvbiIsImRpc3BhdGNoIiwidXNlcklzTG9naW4iLCJjb25zb2xlIiwibG9nIiwidWwiLCJjbGFzc05hbWUiLCJsaSIsImhyZWYiLCJvbkNsaWNrIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwcmlvcml0eSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/menuHeader/MenuHeader.jsx\n"));

/***/ })

});