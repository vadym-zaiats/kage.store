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

/***/ "(app-pages-browser)/./src/app/ui/hot/page.jsx":
/*!*********************************!*\
  !*** ./src/app/ui/hot/page.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hot: function() { return /* binding */ Hot; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card */ \"(app-pages-browser)/./src/app/ui/card/card.jsx\");\n/* harmony import */ var _hot_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hot.module.scss */ \"(app-pages-browser)/./src/app/ui/hot/hot.module.scss\");\n/* harmony import */ var _hot_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hot_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ Hot auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Hot() {\n    _s();\n    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)({\n        queryKey: [\n            \"products\"\n        ],\n        queryFn: ()=>fetch(\"http://localhost:4000/api/products\").then((res)=>res.json())\n    });\n    const [numElements, setNumElements] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const handleLoadMore = ()=>{\n        setNumElements((prevNumElements)=>prevNumElements + 4);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_hot_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"hot-wrapper\"]),\n                children: data && Array.isArray(data) && data.length > 0 ? data.slice(0, 4).map((param)=>{\n                    let { name, currentPrice, imageUrls, _id, hot } = param;\n                    return hot ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        name: name,\n                        currentPrice: currentPrice,\n                        imageUrls: imageUrls\n                    }, _id, false, {\n                        fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this) : null;\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No data available\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            data && data.length > numElements && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLoadMore,\n                children: \"Завантажити ще\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Hot, \"ow/ER05IGMAyK70lf9LP4Ulrbnw=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Hot;\n{\n/* \n  const mutation = useMutation({\n    mutationFn: (newProduct) => {\n      return axios.post(\"http://localhost:4000/api/products\", newProduct);\n    },\n  });\n<button\nonClick={() => {\n  mutation.mutate({\n    enabled: true,\n    imageUrls: [\"/imgs/products/t-shirt/4.png\"],\n    quantity: 7,\n    name: \"Qwuie\",\n    currentPrice: 999,\n    categories: \"t-shirt\",\n    hot: false,\n    date: new Date(),\n  });\n}}\n>\nPOST new Product\n</button> */ }var _c;\n$RefreshReg$(_c, \"Hot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvaG90L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFaUQ7QUFDaEI7QUFDRztBQUNHO0FBRWhDLFNBQVNJOztJQUNkLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdMLCtEQUFRQSxDQUFDO1FBQ3hCTSxVQUFVO1lBQUM7U0FBVztRQUN0QkMsU0FBUyxJQUNQQyxNQUFNLHNDQUFzQ0MsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDdEU7SUFFQSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTWEsaUJBQWlCO1FBQ3JCRCxlQUFlLENBQUNFLGtCQUFvQkEsa0JBQWtCO0lBQ3hEO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVdkLHdFQUFxQjswQkFDbENFLFFBQVFhLE1BQU1DLE9BQU8sQ0FBQ2QsU0FBU0EsS0FBS2UsTUFBTSxHQUFHLElBQzVDZixLQUNHZ0IsS0FBSyxDQUFDLEdBQUcsR0FDVEMsR0FBRyxDQUFDO3dCQUFDLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxTQUFTLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFOzJCQUMvQ0Esb0JBQ0UsOERBQUN6Qiw0Q0FBSUE7d0JBRUhxQixNQUFNQTt3QkFDTkMsY0FBY0E7d0JBQ2RDLFdBQVdBO3VCQUhOQzs7OzsrQkFLTDttQ0FHUiw4REFBQ0U7OEJBQUU7Ozs7Ozs7Ozs7O1lBR052QixRQUFRQSxLQUFLZSxNQUFNLEdBQUdSLDZCQUNyQiw4REFBQ2lCO2dCQUFPQyxTQUFTaEI7MEJBQWdCOzs7Ozs7Ozs7Ozs7QUFJekM7R0FyQ2dCVjs7UUFDR0osMkRBQVFBOzs7S0FEWEk7QUF1Q2hCO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQXFCUSxHQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvaG90L3BhZ2UuanN4P2JkNGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZC9jYXJkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2hvdC5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gSG90KCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KHtcbiAgICBxdWVyeUtleTogW1wicHJvZHVjdHNcIl0sXG4gICAgcXVlcnlGbjogKCkgPT5cbiAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9wcm9kdWN0c1wiKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLFxuICB9KTtcblxuICBjb25zdCBbbnVtRWxlbWVudHMsIHNldE51bUVsZW1lbnRzXSA9IHVzZVN0YXRlKDQpO1xuICBjb25zdCBoYW5kbGVMb2FkTW9yZSA9ICgpID0+IHtcbiAgICBzZXROdW1FbGVtZW50cygocHJldk51bUVsZW1lbnRzKSA9PiBwcmV2TnVtRWxlbWVudHMgKyA0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2Bob3Qtd3JhcHBlcmBdfT5cbiAgICAgICAge2RhdGEgJiYgQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgZGF0YVxuICAgICAgICAgICAgLnNsaWNlKDAsIDQpXG4gICAgICAgICAgICAubWFwKCh7IG5hbWUsIGN1cnJlbnRQcmljZSwgaW1hZ2VVcmxzLCBfaWQsIGhvdCB9KSA9PlxuICAgICAgICAgICAgICBob3QgPyAoXG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZT17Y3VycmVudFByaWNlfVxuICAgICAgICAgICAgICAgICAgaW1hZ2VVcmxzPXtpbWFnZVVybHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgIClcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5ObyBkYXRhIGF2YWlsYWJsZTwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPiBudW1FbGVtZW50cyAmJiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9hZE1vcmV9PtCX0LDQstCw0L3RgtCw0LbQuNGC0Lgg0YnQtTwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxue1xuICAvKiBcbiAgY29uc3QgbXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XG4gICAgbXV0YXRpb25GbjogKG5ld1Byb2R1Y3QpID0+IHtcbiAgICAgIHJldHVybiBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9wcm9kdWN0c1wiLCBuZXdQcm9kdWN0KTtcbiAgICB9LFxuICB9KTtcbjxidXR0b25cbm9uQ2xpY2s9eygpID0+IHtcbiAgbXV0YXRpb24ubXV0YXRlKHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGltYWdlVXJsczogW1wiL2ltZ3MvcHJvZHVjdHMvdC1zaGlydC80LnBuZ1wiXSxcbiAgICBxdWFudGl0eTogNyxcbiAgICBuYW1lOiBcIlF3dWllXCIsXG4gICAgY3VycmVudFByaWNlOiA5OTksXG4gICAgY2F0ZWdvcmllczogXCJ0LXNoaXJ0XCIsXG4gICAgaG90OiBmYWxzZSxcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICB9KTtcbn19XG4+XG5QT1NUIG5ldyBQcm9kdWN0XG48L2J1dHRvbj4gKi9cbn1cbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsInVzZVN0YXRlIiwiQ2FyZCIsInN0eWxlcyIsIkhvdCIsImRhdGEiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibnVtRWxlbWVudHMiLCJzZXROdW1FbGVtZW50cyIsImhhbmRsZUxvYWRNb3JlIiwicHJldk51bUVsZW1lbnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJuYW1lIiwiY3VycmVudFByaWNlIiwiaW1hZ2VVcmxzIiwiX2lkIiwiaG90IiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/hot/page.jsx\n"));

/***/ })

});