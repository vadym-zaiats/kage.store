"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/registration/page",{

/***/ "(app-pages-browser)/./src/app/ui/registration/validation.js":
/*!***********************************************!*\
  !*** ./src/app/ui/registration/validation.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ \"(app-pages-browser)/./node_modules/yup/index.esm.js\");\n\nconst validationSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object({\n    firstName: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(2, \"Мінімум 2 букви\").max(25, \"Максимум 25 букв\").matches(/^[a-zA-Zа-яА-Я]*$/, \"Тільки літери\").required(\"Поле має бути заповнено\"),\n    lastName: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(2, \"Мінімум 2 букви\").max(25, \"Максимум 25 букв\").matches(/^[a-zA-Zа-яА-Я]*$/, \"Тільки літери\").required(\"Поле має бути заповнено\")\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (validationSchema);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL3ZhbGlkYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkI7QUFFM0IsTUFBTUMsbUJBQW1CRCx1Q0FBVSxDQUFDO0lBQ2xDRyxXQUFXSCx1Q0FBVSxHQUNsQkssR0FBRyxDQUFDLEdBQUcsbUJBQ1BDLEdBQUcsQ0FBQyxJQUFJLG9CQUNSQyxPQUFPLENBQUMscUJBQXFCLGlCQUM3QkMsUUFBUSxDQUFDO0lBQ1pDLFVBQVVULHVDQUFVLEdBQ2pCSyxHQUFHLENBQUMsR0FBRyxtQkFDUEMsR0FBRyxDQUFDLElBQUksb0JBQ1JDLE9BQU8sQ0FBQyxxQkFBcUIsaUJBQzdCQyxRQUFRLENBQUM7QUFnQ2Q7QUFFQSwrREFBZVAsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvcmVnaXN0cmF0aW9uL3ZhbGlkYXRpb24uanM/ZjI1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuXG5jb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCh7XG4gIGZpcnN0TmFtZTogWXVwLnN0cmluZygpXG4gICAgLm1pbigyLCBcItCc0ZbQvdGW0LzRg9C8IDIg0LHRg9C60LLQuFwiKVxuICAgIC5tYXgoMjUsIFwi0JzQsNC60YHQuNC80YPQvCAyNSDQsdGD0LrQslwiKVxuICAgIC5tYXRjaGVzKC9eW2EtekEtWtCwLdGP0JAt0K9dKiQvLCBcItCi0ZbQu9GM0LrQuCDQu9GW0YLQtdGA0LhcIilcbiAgICAucmVxdWlyZWQoXCLQn9C+0LvQtSDQvNCw0ZQg0LHRg9GC0Lgg0LfQsNC/0L7QstC90LXQvdC+XCIpLFxuICBsYXN0TmFtZTogWXVwLnN0cmluZygpXG4gICAgLm1pbigyLCBcItCc0ZbQvdGW0LzRg9C8IDIg0LHRg9C60LLQuFwiKVxuICAgIC5tYXgoMjUsIFwi0JzQsNC60YHQuNC80YPQvCAyNSDQsdGD0LrQslwiKVxuICAgIC5tYXRjaGVzKC9eW2EtekEtWtCwLdGP0JAt0K9dKiQvLCBcItCi0ZbQu9GM0LrQuCDQu9GW0YLQtdGA0LhcIilcbiAgICAucmVxdWlyZWQoXCLQn9C+0LvQtSDQvNCw0ZQg0LHRg9GC0Lgg0LfQsNC/0L7QstC90LXQvdC+XCIpLFxuICAvLyBsb2dpbjogWXVwLnN0cmluZygpXG4gIC8vICAgLm1pbig0LCBcIk1pbiA0IGxldHRlcnMgcmVxdWlyZWRcIilcbiAgLy8gICAubWF4KDEwLCBcIk1heCAxMCBsZXR0ZXJzIGFsbG93ZWRcIilcbiAgLy8gICAubWF0Y2hlcyhcbiAgLy8gICAgIC9eW2EtekEtWjAtOV0qJC8sXG4gIC8vICAgICBcIkxvZ2luIG11c3QgY29udGFpbiBMYXRpbiBsZXR0ZXJzIGFuZCBudW1iZXJzIG9ubHksIHdpdGhvdXQgc3BhY2VzXCJcbiAgLy8gICApXG4gIC8vICAgLnJlcXVpcmVkKFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZCFcIiksXG4gIC8vIGVtYWlsOiBZdXAuc3RyaW5nKClcbiAgLy8gICAuZW1haWwoXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3NcIilcbiAgLy8gICAubWluKDYsIFwiTWluIDYgbGV0dGVycyByZXF1aXJlZFwiKVxuICAvLyAgIC5tYXgoMzAsIFwiTWF4IDMwIGxldHRlcnMgcmVxdWlyZWRcIilcbiAgLy8gICAucmVxdWlyZWQoXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIVwiKSxcbiAgLy8gcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxuICAvLyAgIC5taW4oNywgXCJNaW4gNyBsZXR0ZXJzIHJlcXVpcmVkXCIpXG4gIC8vICAgLm1heCgzMCwgXCJNYXggMzAgbGV0dGVycyBhbGxvd2VkXCIpXG4gIC8vICAgLm1hdGNoZXMoL15bYS16QS1aXS8sIFwiUGFzc3dvcmQgbXVzdCBjb250YWluIExhdGluIGxldHRlcnMgb25seVwiKVxuICAvLyAgIC5tYXRjaGVzKC9cXGQvLCBcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgbnVtYmVyXCIpXG4gIC8vICAgLm1hdGNoZXMoL1thLXpdLywgXCJQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGxvd2VyY2FzZSBsZXR0ZXJcIilcbiAgLy8gICAubWF0Y2hlcygvW0EtWl0vLCBcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlIGxldHRlclwiKVxuICAvLyAgIC5tYXRjaGVzKC9eW2EtekEtWjAtOV0rJC8sIFwiUGFzc3dvcmQgbXVzdCBub3QgY29udGFpbiBzcGFjZXNcIilcbiAgLy8gICAucmVxdWlyZWQoXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIVwiKSxcbiAgLy8gcGFzc3dvcmRTZWNvbmQ6IFl1cC5zdHJpbmcoKVxuICAvLyAgIC5vbmVPZihbWXVwLnJlZihcInBhc3N3b3JkXCIpLCBudWxsXSwgXCJQYXNzd29yZHMgbXVzdCBtYXRjaFwiKVxuICAvLyAgIC5yZXF1aXJlZChcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQhXCIpLFxuICAvLyB0ZWxlcGhvbmU6IFl1cC5zdHJpbmcoKVxuICAvLyAgIC5tYXRjaGVzKFxuICAvLyAgICAgL15cXCszODBcXHM/XFwoXFxkezJ9XFwpXFxzP1xcZHsyfVxccz9cXGR7Mn1cXHM/XFxkezN9JC8sXG4gIC8vICAgICBcIkludmFsaWQgcGhvbmUgbnVtYmVyXCJcbiAgLy8gICApXG4gIC8vICAgLnJlcXVpcmVkKFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZCFcIiksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGlvblNjaGVtYTtcbiJdLCJuYW1lcyI6WyJZdXAiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib2JqZWN0IiwiZmlyc3ROYW1lIiwic3RyaW5nIiwibWluIiwibWF4IiwibWF0Y2hlcyIsInJlcXVpcmVkIiwibGFzdE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/registration/validation.js\n"));

/***/ })

});