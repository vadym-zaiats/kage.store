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

/***/ "(app-pages-browser)/./src/app/ui/card/card.jsx":
/*!**********************************!*\
  !*** ./src/app/ui/card/card.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.module.scss */ \"(app-pages-browser)/./src/app/ui/card/card.module.scss\");\n/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Card(param) {\n    let { name, currentPrice, imageUrls } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"card-wrapper\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"card-wrapper__img\"]),\n                src: imageUrls[0],\n                width: 25,\n                height: 25,\n                alt: name\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/card/card.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"\"]),\n                children: imageUrls\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/card/card.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"\"]),\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/card/card.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"\"]),\n                children: currentPrice\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/card/card.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/card/card.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvY2FyZC9jYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBQ1M7QUFFakMsU0FBU0UsS0FBSyxLQUFpQztRQUFqQyxFQUFFQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFLEdBQWpDO0lBQ25CLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXTiwwRUFBc0I7OzBCQUNwQyw4REFBQ0QsbURBQUtBO2dCQUNKTyxXQUFXTiwrRUFBMkI7Z0JBQ3RDTyxLQUFLSCxTQUFTLENBQUMsRUFBRTtnQkFDakJJLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLEtBQUtSOzs7Ozs7MEJBRVAsOERBQUNHO2dCQUFJQyxXQUFXTiw4REFBVTswQkFBR0k7Ozs7OzswQkFDN0IsOERBQUNDO2dCQUFJQyxXQUFXTiw4REFBVTswQkFBR0U7Ozs7OzswQkFDN0IsOERBQUNHO2dCQUFJQyxXQUFXTiw4REFBVTswQkFBR0c7Ozs7Ozs7Ozs7OztBQUduQztLQWZnQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9jYXJkL2NhcmQuanN4PzU3MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NhcmQubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmQoeyBuYW1lLCBjdXJyZW50UHJpY2UsIGltYWdlVXJscyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgY2FyZC13cmFwcGVyYF19PlxuICAgICAgPEltYWdlXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BjYXJkLXdyYXBwZXJfX2ltZ2BdfVxuICAgICAgICBzcmM9e2ltYWdlVXJsc1swXX1cbiAgICAgICAgd2lkdGg9ezI1fVxuICAgICAgICBoZWlnaHQ9ezI1fVxuICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgYF19PntpbWFnZVVybHN9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2BgXX0+e25hbWV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2BgXX0+e2N1cnJlbnRQcmljZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsIkNhcmQiLCJuYW1lIiwiY3VycmVudFByaWNlIiwiaW1hZ2VVcmxzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/card/card.jsx\n"));

/***/ })

});