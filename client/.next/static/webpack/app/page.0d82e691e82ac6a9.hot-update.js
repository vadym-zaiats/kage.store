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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hot: function() { return /* binding */ Hot; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card */ \"(app-pages-browser)/./src/app/ui/card/card.jsx\");\n/* harmony import */ var _hot_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hot.module.scss */ \"(app-pages-browser)/./src/app/ui/hot/hot.module.scss\");\n/* harmony import */ var _hot_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hot_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ Hot auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Hot() {\n    _s();\n    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)({\n        queryKey: [\n            \"products\"\n        ],\n        queryFn: ()=>fetch(\"http://localhost:4000/api/products\").then((res)=>res.json())\n    });\n    const [numElements, setNumElements] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const handleLoadMore = ()=>{\n        setNumElements((prevNumElements)=>prevNumElements + 3);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_hot_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"hot-wrapper\"]),\n                children: data && Array.isArray(data) && data.length > 3 ? data.slice(0, numElements).map((param)=>{\n                    let { name, currentPrice, imageUrls, _id, hot } = param;\n                    return hot ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        name: name,\n                        currentPrice: currentPrice,\n                        imageUrls: imageUrls\n                    }, _id, false, {\n                        fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this) : null;\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No data available\"\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            data && data.length > numElements && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLoadMore,\n                children: \"Завантажити ще\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/projects/kage.store/client/src/app/ui/hot/page.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Hot, \"ow/ER05IGMAyK70lf9LP4Ulrbnw=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Hot;\n{\n/* \n  const mutation = useMutation({\n    mutationFn: (newProduct) => {\n      return axios.post(\"http://localhost:4000/api/products\", newProduct);\n    },\n  });\n<button\nonClick={() => {\n  mutation.mutate({\n    enabled: true,\n    imageUrls: [\"/imgs/products/t-shirt/4.png\"],\n    quantity: 7,\n    name: \"Qwuie\",\n    currentPrice: 999,\n    categories: \"t-shirt\",\n    hot: false,\n    date: new Date(),\n  });\n}}\n>\nPOST new Product\n</button> */ }var _c;\n$RefreshReg$(_c, \"Hot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvaG90L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFaUQ7QUFDaEI7QUFDRztBQUNHO0FBRWhDLFNBQVNJOztJQUNkLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdMLCtEQUFRQSxDQUFDO1FBQ3hCTSxVQUFVO1lBQUM7U0FBVztRQUN0QkMsU0FBUyxJQUNQQyxNQUFNLHNDQUFzQ0MsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDdEU7SUFFQSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTWEsaUJBQWlCO1FBQ3JCRCxlQUFlLENBQUNFLGtCQUFvQkEsa0JBQWtCO0lBQ3hEO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVdkLHdFQUFxQjswQkFDbENFLFFBQVFhLE1BQU1DLE9BQU8sQ0FBQ2QsU0FBU0EsS0FBS2UsTUFBTSxHQUFHLElBQzVDZixLQUNHZ0IsS0FBSyxDQUFDLEdBQUdULGFBQ1RVLEdBQUcsQ0FBQzt3QkFBQyxFQUFFQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTsyQkFDL0NBLG9CQUNFLDhEQUFDekIsNENBQUlBO3dCQUVIcUIsTUFBTUE7d0JBQ05DLGNBQWNBO3dCQUNkQyxXQUFXQTt1QkFITkM7Ozs7K0JBS0w7bUNBR1IsOERBQUNFOzhCQUFFOzs7Ozs7Ozs7OztZQUdOdkIsUUFBUUEsS0FBS2UsTUFBTSxHQUFHUiw2QkFDckIsOERBQUNpQjtnQkFBT0MsU0FBU2hCOzBCQUFnQjs7Ozs7Ozs7Ozs7O0FBSXpDO0dBckNnQlY7O1FBQ0dKLDJEQUFRQTs7O0tBRFhJO0FBdUNoQjtBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFxQlEsR0FDViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2hvdC9wYWdlLmpzeD9iZDRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmQvY2FyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ob3QubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEhvdCgpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeSh7XG4gICAgcXVlcnlLZXk6IFtcInByb2R1Y3RzXCJdLFxuICAgIHF1ZXJ5Rm46ICgpID0+XG4gICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvcHJvZHVjdHNcIikudGhlbigocmVzKSA9PiByZXMuanNvbigpKSxcbiAgfSk7XG5cbiAgY29uc3QgW251bUVsZW1lbnRzLCBzZXROdW1FbGVtZW50c10gPSB1c2VTdGF0ZSg0KTtcbiAgY29uc3QgaGFuZGxlTG9hZE1vcmUgPSAoKSA9PiB7XG4gICAgc2V0TnVtRWxlbWVudHMoKHByZXZOdW1FbGVtZW50cykgPT4gcHJldk51bUVsZW1lbnRzICsgMyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgaG90LXdyYXBwZXJgXX0+XG4gICAgICAgIHtkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAzID8gKFxuICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIC5zbGljZSgwLCBudW1FbGVtZW50cylcbiAgICAgICAgICAgIC5tYXAoKHsgbmFtZSwgY3VycmVudFByaWNlLCBpbWFnZVVybHMsIF9pZCwgaG90IH0pID0+XG4gICAgICAgICAgICAgIGhvdCA/IChcbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAga2V5PXtfaWR9XG4gICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgY3VycmVudFByaWNlPXtjdXJyZW50UHJpY2V9XG4gICAgICAgICAgICAgICAgICBpbWFnZVVybHM9e2ltYWdlVXJsc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPk5vIGRhdGEgYXZhaWxhYmxlPC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA+IG51bUVsZW1lbnRzICYmIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2FkTW9yZX0+0JfQsNCy0LDQvdGC0LDQttC40YLQuCDRidC1PC9idXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG57XG4gIC8qIFxuICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcbiAgICBtdXRhdGlvbkZuOiAobmV3UHJvZHVjdCkgPT4ge1xuICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3Byb2R1Y3RzXCIsIG5ld1Byb2R1Y3QpO1xuICAgIH0sXG4gIH0pO1xuPGJ1dHRvblxub25DbGljaz17KCkgPT4ge1xuICBtdXRhdGlvbi5tdXRhdGUoe1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgaW1hZ2VVcmxzOiBbXCIvaW1ncy9wcm9kdWN0cy90LXNoaXJ0LzQucG5nXCJdLFxuICAgIHF1YW50aXR5OiA3LFxuICAgIG5hbWU6IFwiUXd1aWVcIixcbiAgICBjdXJyZW50UHJpY2U6IDk5OSxcbiAgICBjYXRlZ29yaWVzOiBcInQtc2hpcnRcIixcbiAgICBob3Q6IGZhbHNlLFxuICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gIH0pO1xufX1cbj5cblBPU1QgbmV3IFByb2R1Y3RcbjwvYnV0dG9uPiAqL1xufVxuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwidXNlU3RhdGUiLCJDYXJkIiwic3R5bGVzIiwiSG90IiwiZGF0YSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJudW1FbGVtZW50cyIsInNldE51bUVsZW1lbnRzIiwiaGFuZGxlTG9hZE1vcmUiLCJwcmV2TnVtRWxlbWVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJzbGljZSIsIm1hcCIsIm5hbWUiLCJjdXJyZW50UHJpY2UiLCJpbWFnZVVybHMiLCJfaWQiLCJob3QiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/hot/page.jsx\n"));

/***/ })

});