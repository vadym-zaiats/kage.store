"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/delivery/page",{

/***/ "(app-pages-browser)/./src/app/ui/delivery/Delivery.jsx":
/*!******************************************!*\
  !*** ./src/app/ui/delivery/Delivery.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Delivery: function() { return /* binding */ Delivery; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _delivery_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery.module.scss */ \"(app-pages-browser)/./src/app/ui/delivery/delivery.module.scss\");\n/* harmony import */ var _delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Delivery auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Delivery() {\n    _s();\n    const [newPost, setNewPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [newPostDelivery, setNewPostDelivery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ukrPost, setukrPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default().delivery),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default().delivery__title),\n                children: \"ДОСТАВКА\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default().delivery__types),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>{\n                            setNewPost(true);\n                            setNewPostDelivery(false);\n                            setukrPost(false);\n                        },\n                        className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default().delivery__type), \" \").concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"delivery__type--new-post\"]), \" \").concat(newPost && (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"delivery__type--active\"])),\n                        children: \"Нова Пошта\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default().delivery__type), \" \").concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"delivery__type--new-post-delivery\"])),\n                        children: \"Адресна доставка Новою поштою\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default().delivery__type), \" \").concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"delivery__type--ukr-post\"])),\n                        children: \"Укрпошта\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"delivery__types-content\"])),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"delivery__type-content\"]), \" \").concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"delivery__type-content--new-post\"]), \" \").concat(newPost && (_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"delivery__type-content--active\"])),\n                        children: \"NP\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"delivery__type-content\"]), \" \").concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"delivery__type-content--new-post-delivery\"])),\n                        children: \"NPD\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"delivery__type-content\"]), \" \").concat((_delivery_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"delivery__type-content--ukr-post\"])),\n                        children: \"UP\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/kage.store/client/src/app/ui/delivery/Delivery.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(Delivery, \"cldpfACEux71v+DSo8bffSoFZaw=\");\n_c = Delivery;\nvar _c;\n$RefreshReg$(_c, \"Delivery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZGVsaXZlcnkvRGVsaXZlcnkuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1g7QUFFMUIsU0FBU0U7O0lBQ2QsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ0ksaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFXVix1RUFBZTs7MEJBQzdCLDhEQUFDWTtnQkFBR0YsV0FBV1YsOEVBQXNCOzBCQUFFOzs7Ozs7MEJBQ3ZDLDhEQUFDYztnQkFBR0osV0FBV1YsOEVBQXNCOztrQ0FDbkMsOERBQUNnQjt3QkFDQ0MsU0FBUzs0QkFDUGIsV0FBVzs0QkFDWEUsbUJBQW1COzRCQUNuQkUsV0FBVzt3QkFDYjt3QkFDQUUsV0FBVyxHQUNUVixPQURZQSw2RUFBd0IsRUFBQyxLQUVuQ0csT0FERkgsMEZBQWtDLEVBQ25DLEtBQStDLE9BQTVDRyxXQUFXSCx3RkFBZ0M7a0NBQ2hEOzs7Ozs7a0NBR0QsOERBQUNnQjt3QkFDQ04sV0FBVyxHQUErQlYsT0FBNUJBLDZFQUF3QixFQUFDLEtBQStDLE9BQTVDQSxtR0FBMkM7a0NBQ3RGOzs7Ozs7a0NBR0QsOERBQUNnQjt3QkFDQ04sV0FBVyxHQUErQlYsT0FBNUJBLDZFQUF3QixFQUFDLEtBQXNDLE9BQW5DQSwwRkFBa0M7a0NBQzdFOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNjO2dCQUFHSixXQUFXLEdBQXFDLE9BQWxDVix5RkFBaUM7O2tDQUNqRCw4REFBQ2dCO3dCQUNDTixXQUFXLEdBQ1RWLE9BRFlBLHdGQUFnQyxFQUFDLEtBRTNDRyxPQURGSCxrR0FBMEMsRUFDM0MsS0FBdUQsT0FBcERHLFdBQVdILGdHQUF3QztrQ0FDeEQ7Ozs7OztrQ0FHRCw4REFBQ2dCO3dCQUNDTixXQUFXLEdBQXVDVixPQUFwQ0Esd0ZBQWdDLEVBQUMsS0FBdUQsT0FBcERBLDJHQUFtRDtrQ0FDdEc7Ozs7OztrQ0FHRCw4REFBQ2dCO3dCQUNDTixXQUFXLEdBQXVDVixPQUFwQ0Esd0ZBQWdDLEVBQUMsS0FBOEMsT0FBM0NBLGtHQUEwQztrQ0FDN0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBckRnQkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9kZWxpdmVyeS9EZWxpdmVyeS5qc3g/NjZkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9kZWxpdmVyeS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIERlbGl2ZXJ5KCkge1xuICBjb25zdCBbbmV3UG9zdCwgc2V0TmV3UG9zdF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW25ld1Bvc3REZWxpdmVyeSwgc2V0TmV3UG9zdERlbGl2ZXJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VrclBvc3QsIHNldHVrclBvc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxpdmVyeX0+XG4gICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuZGVsaXZlcnlfX3RpdGxlfT7QlNCe0KHQotCQ0JLQmtCQPC9oMz5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5kZWxpdmVyeV9fdHlwZXN9PlxuICAgICAgICA8bGlcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXROZXdQb3N0KHRydWUpO1xuICAgICAgICAgICAgc2V0TmV3UG9zdERlbGl2ZXJ5KGZhbHNlKTtcbiAgICAgICAgICAgIHNldHVrclBvc3QoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZVwiXX0gJHtcbiAgICAgICAgICAgIHN0eWxlc1tcImRlbGl2ZXJ5X190eXBlLS1uZXctcG9zdFwiXVxuICAgICAgICAgIH0gJHtuZXdQb3N0ICYmIHN0eWxlc1tcImRlbGl2ZXJ5X190eXBlLS1hY3RpdmVcIl19YH1cbiAgICAgICAgPlxuICAgICAgICAgINCd0L7QstCwINCf0L7RiNGC0LBcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZVwiXX0gJHtzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZS0tbmV3LXBvc3QtZGVsaXZlcnlcIl19YH1cbiAgICAgICAgPlxuICAgICAgICAgINCQ0LTRgNC10YHQvdCwINC00L7RgdGC0LDQstC60LAg0J3QvtCy0L7RjiDQv9C+0YjRgtC+0Y5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZVwiXX0gJHtzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZS0tdWtyLXBvc3RcIl19YH1cbiAgICAgICAgPlxuICAgICAgICAgINCj0LrRgNC/0L7RiNGC0LBcbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZXMtY29udGVudFwiXX1gfT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZS1jb250ZW50XCJdfSAke1xuICAgICAgICAgICAgc3R5bGVzW1wiZGVsaXZlcnlfX3R5cGUtY29udGVudC0tbmV3LXBvc3RcIl1cbiAgICAgICAgICB9ICR7bmV3UG9zdCAmJiBzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZS1jb250ZW50LS1hY3RpdmVcIl19YH1cbiAgICAgICAgPlxuICAgICAgICAgIE5QXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZGVsaXZlcnlfX3R5cGUtY29udGVudFwiXX0gJHtzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZS1jb250ZW50LS1uZXctcG9zdC1kZWxpdmVyeVwiXX1gfVxuICAgICAgICA+XG4gICAgICAgICAgTlBEXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiZGVsaXZlcnlfX3R5cGUtY29udGVudFwiXX0gJHtzdHlsZXNbXCJkZWxpdmVyeV9fdHlwZS1jb250ZW50LS11a3ItcG9zdFwiXX1gfVxuICAgICAgICA+XG4gICAgICAgICAgVVBcbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJEZWxpdmVyeSIsIm5ld1Bvc3QiLCJzZXROZXdQb3N0IiwibmV3UG9zdERlbGl2ZXJ5Iiwic2V0TmV3UG9zdERlbGl2ZXJ5IiwidWtyUG9zdCIsInNldHVrclBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJkZWxpdmVyeSIsImgzIiwiZGVsaXZlcnlfX3RpdGxlIiwidWwiLCJkZWxpdmVyeV9fdHlwZXMiLCJsaSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/delivery/Delivery.jsx\n"));

/***/ })

});