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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuHeader: function() { return /* binding */ MenuHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuHeader.module.scss */ \"(app-pages-browser)/./src/app/ui/menuHeader/menuHeader.module.scss\");\n/* harmony import */ var _menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MenuHeader(param) {\n    let { func, loginButton } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"\".concat((_menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"menu-head\"])),\n        children: [\n            loginButton && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/registration\",\n                    className: \"\".concat((_menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"menu-login\"])),\n                    onClick: ()=>{\n                        dispatch(func());\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/imgs/login.png\",\n                        width: 35,\n                        height: 35,\n                        alt: \"login\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/imgs/logo-removebg.png\",\n                    width: 70,\n                    height: 70,\n                    alt: \"burger\",\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_menuHeader_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"menu-close\"])),\n                    onClick: ()=>{\n                        dispatch(func());\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/imgs/close.png\",\n                        width: 25,\n                        height: 25,\n                        alt: \"burger\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/menuHeader/MenuHeader.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(MenuHeader, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = MenuHeader;\nvar _c;\n$RefreshReg$(_c, \"MenuHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvbWVudUhlYWRlci9NZW51SGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNmO0FBQ1c7QUFDYjtBQUV0QixTQUFTSSxXQUFXLEtBQXFCO1FBQXJCLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFLEdBQXJCOztJQUN6QixNQUFNQyxXQUFXTCx3REFBV0E7SUFDNUIscUJBQ0UsOERBQUNNO1FBQUdDLFdBQVcsR0FBdUIsT0FBcEJULDZFQUFtQjs7WUFDbENNLDZCQUNDLDhEQUFDSTswQkFDQyw0RUFBQ1Asa0RBQUlBO29CQUNIUSxNQUFLO29CQUNMRixXQUFXLEdBQXdCLE9BQXJCVCw4RUFBb0I7b0JBQ2xDWSxTQUFTO3dCQUNQTCxTQUFTRjtvQkFDWDs4QkFFQSw0RUFBQ0osbURBQUtBO3dCQUNKWSxLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJO3dCQUNKQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzBCQUtoQiw4REFBQ1A7MEJBQ0MsNEVBQUNULG1EQUFLQTtvQkFDSlksS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsS0FBSTtvQkFDSkMsUUFBUTs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNQOzBCQUNDLDRFQUFDUTtvQkFDQ1QsV0FBVyxHQUF3QixPQUFyQlQsOEVBQW9CO29CQUNsQ1ksU0FBUzt3QkFDUEwsU0FBU0Y7b0JBQ1g7OEJBRUEsNEVBQUNKLG1EQUFLQTt3QkFDSlksS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSTt3QkFDSkMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQjtHQWxEZ0JiOztRQUNHRixvREFBV0E7OztLQURkRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL21lbnVIZWFkZXIvTWVudUhlYWRlci5qc3g/Y2Q4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL21lbnVIZWFkZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE1lbnVIZWFkZXIoeyBmdW5jLCBsb2dpbkJ1dHRvbiB9KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJtZW51LWhlYWRcIl19YH0+XG4gICAgICB7bG9naW5CdXR0b24gJiYgKFxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wibWVudS1sb2dpblwiXX1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChmdW5jKCkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL2ltZ3MvbG9naW4ucG5nXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxuICAgICAgICAgICAgICBhbHQ9XCJsb2dpblwiXG4gICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICl9XG4gICAgICA8bGk+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9pbWdzL2xvZ28tcmVtb3ZlYmcucG5nXCJcbiAgICAgICAgICB3aWR0aD17NzB9XG4gICAgICAgICAgaGVpZ2h0PXs3MH1cbiAgICAgICAgICBhbHQ9XCJidXJnZXJcIlxuICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgIC8+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJtZW51LWNsb3NlXCJdfWB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goZnVuYygpKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvaW1ncy9jbG9zZS5wbmdcIlxuICAgICAgICAgICAgd2lkdGg9ezI1fVxuICAgICAgICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgICAgICAgIGFsdD1cImJ1cmdlclwiXG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwidXNlRGlzcGF0Y2giLCJMaW5rIiwiTWVudUhlYWRlciIsImZ1bmMiLCJsb2dpbkJ1dHRvbiIsImRpc3BhdGNoIiwidWwiLCJjbGFzc05hbWUiLCJsaSIsImhyZWYiLCJvbkNsaWNrIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwcmlvcml0eSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/menuHeader/MenuHeader.jsx\n"));

/***/ })

});